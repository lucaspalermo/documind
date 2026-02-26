import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cancelSubscription } from "@/lib/asaas";

export async function POST() {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, plan: true, asaasSubscriptionId: true },
  });

  if (!user) {
    return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
  }

  if (user.plan === "FREE") {
    return NextResponse.json({ error: "Você já está no plano Grátis" }, { status: 400 });
  }

  // Cancel on Asaas if subscription exists
  if (user.asaasSubscriptionId) {
    try {
      await cancelSubscription(user.asaasSubscriptionId);
    } catch {
      // Subscription may already be cancelled on Asaas side
    }
  }

  // Downgrade to FREE in database
  await prisma.user.update({
    where: { id: user.id },
    data: {
      plan: "FREE",
      asaasSubscriptionId: null,
    },
  });

  return NextResponse.json({ success: true });
}
