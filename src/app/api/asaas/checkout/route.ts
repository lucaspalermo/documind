import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createCustomer, findCustomerByEmail, createSubscription, cancelSubscription, getSubscriptionPayments, getPaymentPixQrCode } from "@/lib/asaas";
import { PLANS } from "@/lib/constants";

const VALID_BILLING_TYPES = ["PIX", "CREDIT_CARD", "BOLETO"] as const;
const VALID_PLAN_KEYS = ["PRO", "BUSINESS", "ENTERPRISE"] as const;

async function waitForPayment(subscriptionId: string, maxRetries = 5): Promise<any | null> {
  for (let i = 0; i < maxRetries; i++) {
    const paymentsData = await getSubscriptionPayments(subscriptionId);
    const firstPayment = paymentsData?.data?.[0];
    if (firstPayment) return firstPayment;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return null;
}

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

    // CPF/CNPJ is required for Asaas
    const userCpf = cpf || user.cpf;
    if (!userCpf) {
      return NextResponse.json({ error: "CPF/CNPJ é obrigatório para pagamento" }, { status: 400 });
    }

    // Save CPF if not saved yet
    if (cpf && cpf !== user.cpf) {
      await prisma.user.update({
        where: { id: user.id },
        data: { cpf },
      });
    }

    // Create or recover Asaas customer (avoid duplicates)
    let customerId = user.asaasCustomerId;

    if (!customerId) {
      // Check if customer already exists in Asaas by email
      try {
        const existing = await findCustomerByEmail(user.email);
        if (existing?.data?.[0]?.id) {
          customerId = existing.data[0].id;
        }
      } catch {
        // Ignore - will create new
      }

      if (!customerId) {
        const customer = await createCustomer({
          name: user.name || "Usuário Documind",
          email: user.email,
          cpfCnpj: userCpf.replace(/\D/g, ""),
        });
        customerId = customer.id;
      }

      await prisma.user.update({
        where: { id: user.id },
        data: { asaasCustomerId: customerId },
      });
    }

    // Cancel existing subscription AFTER preparing the new one's data
    // to minimize the window where the user has no subscription
    const oldSubscriptionId = user.asaasSubscriptionId;

    // Create subscription
    const nextDueDate = new Date();
    nextDueDate.setDate(nextDueDate.getDate() + 1);

    let subscription;
    try {
      subscription = await createSubscription({
        customer: customerId!,
        billingType: billingType as "PIX" | "CREDIT_CARD" | "BOLETO",
        value: (plan as any).asaasValue,
        cycle: "MONTHLY",
        description: `Documind - Plano ${plan.name}`,
        nextDueDate: nextDueDate.toISOString().split("T")[0],
        externalReference: planKey,
      });
    } catch (error) {
      // If creation fails, DON'T cancel the old subscription
      throw error;
    }

    // New subscription created successfully - now cancel the old one
    if (oldSubscriptionId) {
      try {
        await cancelSubscription(oldSubscriptionId);
      } catch {
        // Old subscription may already be cancelled - proceed
      }
    }

    // Save new subscription ID
    await prisma.user.update({
      where: { id: user.id },
      data: { asaasSubscriptionId: subscription.id },
    });

    // Poll for the first payment (retry up to 5x with 1s intervals)
    const firstPayment = await waitForPayment(subscription.id);

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
        // Fallback: redirect to Asaas invoice page (has PIX option too)
        return NextResponse.json({
          subscriptionId: subscription.id,
          paymentType: "INVOICE",
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

    // CREDIT_CARD - redirect to Asaas hosted checkout (handles card collection)
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
