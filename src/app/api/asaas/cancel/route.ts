import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cancelSubscription } from "@/lib/asaas";

export async function POST() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { id: true, plan: true, asaasSubscriptionId: true },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    if (user.plan === "FREE") {
      return NextResponse.json({ error: "Você já está no plano Grátis" }, { status: 400 });
    }

    // Cancel on Asaas first - only downgrade locally if Asaas cancel succeeds
    // (or if there's no subscription to cancel)
    if (user.asaasSubscriptionId) {
      try {
        await cancelSubscription(user.asaasSubscriptionId);
      } catch (error) {
        console.error("Failed to cancel subscription on Asaas:", error);
        return NextResponse.json(
          { error: "Erro ao cancelar no gateway de pagamento. Tente novamente ou entre em contato com o suporte." },
          { status: 502 }
        );
      }
    }

    // Asaas cancel succeeded (or no subscription) - now downgrade locally
    await prisma.user.update({
      where: { id: user.id },
      data: {
        plan: "FREE",
        asaasSubscriptionId: null,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Cancel subscription error:", error);
    return NextResponse.json(
      { error: "Erro ao cancelar assinatura" },
      { status: 500 }
    );
  }
}
