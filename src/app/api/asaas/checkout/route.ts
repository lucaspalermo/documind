import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createCustomer, createSubscription } from "@/lib/asaas";
import { PLANS } from "@/lib/constants";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { planKey, billingType = "PIX" } = await req.json();
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

    // Create or get Asaas customer
    let customerId = user.asaasCustomerId;

    if (!customerId) {
      const customer = await createCustomer({
        name: user.name || "Usuário Documind",
        email: user.email,
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
    });

    // Save subscription ID
    await prisma.user.update({
      where: { id: user.id },
      data: { asaasSubscriptionId: subscription.id },
    });

    return NextResponse.json({
      subscriptionId: subscription.id,
      paymentLink: subscription.paymentLink || null,
    });
  } catch (error) {
    console.error("Asaas checkout error:", error);
    return NextResponse.json(
      { error: "Erro ao processar pagamento" },
      { status: 500 }
    );
  }
}
