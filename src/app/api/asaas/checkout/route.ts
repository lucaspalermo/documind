import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createCustomer, createSubscription, cancelSubscription, getSubscriptionPayments, getPaymentPixQrCode } from "@/lib/asaas";
import { PLANS } from "@/lib/constants";

const VALID_BILLING_TYPES = ["PIX", "CREDIT_CARD", "BOLETO"] as const;
const VALID_PLAN_KEYS = ["PRO", "BUSINESS", "ENTERPRISE"] as const;

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { planKey, billingType = "PIX", cpf } = await req.json();

    // Validate planKey
    if (!VALID_PLAN_KEYS.includes(planKey)) {
      return NextResponse.json({ error: "Plano inválido" }, { status: 400 });
    }

    // Validate billingType
    if (!VALID_BILLING_TYPES.includes(billingType)) {
      return NextResponse.json({ error: "Método de pagamento inválido" }, { status: 400 });
    }

    const plan = PLANS[planKey as keyof typeof PLANS];
    if (!plan || !("asaasValue" in plan)) {
      return NextResponse.json({ error: "Plano inválido" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    // CPF is required for Asaas in production
    const userCpf = cpf || user.cpf;
    if (!userCpf) {
      return NextResponse.json({ error: "CPF é obrigatório para pagamento" }, { status: 400 });
    }

    // Save CPF if not saved yet
    if (cpf && cpf !== user.cpf) {
      await prisma.user.update({
        where: { id: user.id },
        data: { cpf },
      });
    }

    // Cancel existing subscription before creating new one
    if (user.asaasSubscriptionId) {
      try {
        await cancelSubscription(user.asaasSubscriptionId);
      } catch {
        // May already be cancelled
      }
    }

    // Create or get Asaas customer
    let customerId = user.asaasCustomerId;

    if (!customerId) {
      const customer = await createCustomer({
        name: user.name || "Usuário Documind",
        email: user.email,
        cpfCnpj: userCpf.replace(/\D/g, ""),
      });
      customerId = customer.id;

      await prisma.user.update({
        where: { id: user.id },
        data: { asaasCustomerId: customerId },
      });
    }

    // Create subscription
    const nextDueDate = new Date();
    nextDueDate.setDate(nextDueDate.getDate() + 1);

    const subscription = await createSubscription({
      customer: customerId!,
      billingType: billingType as "PIX" | "CREDIT_CARD" | "BOLETO",
      value: (plan as any).asaasValue,
      cycle: "MONTHLY",
      description: `Documind - Plano ${plan.name}`,
      nextDueDate: nextDueDate.toISOString().split("T")[0],
      externalReference: planKey,
    });

    // Save subscription ID
    await prisma.user.update({
      where: { id: user.id },
      data: { asaasSubscriptionId: subscription.id },
    });

    // Fetch the first payment to get payment details
    // Small delay to allow Asaas to create the payment
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const paymentsData = await getSubscriptionPayments(subscription.id);
    const firstPayment = paymentsData?.data?.[0];

    if (!firstPayment) {
      return NextResponse.json({
        subscriptionId: subscription.id,
        message: "Assinatura criada. O pagamento será gerado em breve.",
      });
    }

    // Return payment data based on billing type
    if (billingType === "PIX") {
      try {
        const pixData = await getPaymentPixQrCode(firstPayment.id);
        return NextResponse.json({
          subscriptionId: subscription.id,
          paymentType: "PIX",
          pixQrCode: pixData.encodedImage,
          pixCopyPaste: pixData.payload,
          expirationDate: pixData.expirationDate,
        });
      } catch {
        // Fallback to invoice URL
        return NextResponse.json({
          subscriptionId: subscription.id,
          paymentType: "PIX",
          invoiceUrl: firstPayment.invoiceUrl,
        });
      }
    }

    if (billingType === "BOLETO") {
      return NextResponse.json({
        subscriptionId: subscription.id,
        paymentType: "BOLETO",
        invoiceUrl: firstPayment.invoiceUrl,
        bankSlipUrl: firstPayment.bankSlipUrl,
      });
    }

    // CREDIT_CARD - redirect to Asaas hosted checkout
    return NextResponse.json({
      subscriptionId: subscription.id,
      paymentType: "CREDIT_CARD",
      invoiceUrl: firstPayment.invoiceUrl,
    });
  } catch (error) {
    console.error("Asaas checkout error:", error);
    const message = error instanceof Error ? error.message : "Erro ao processar pagamento";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
