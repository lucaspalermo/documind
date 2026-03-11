import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSubscription } from "@/lib/asaas";

export async function POST(req: Request) {
  let body: any;

  try {
    // Validate webhook token
    const webhookToken = process.env.ASAAS_WEBHOOK_TOKEN;
    if (webhookToken) {
      const token = req.headers.get("asaas-access-token");
      if (token !== webhookToken) {
        console.warn("[WEBHOOK] Auth failed:", token ? "token mismatch" : "no token sent");
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    body = await req.json().catch(() => null);
    if (!body || !body.event) {
      console.warn("[WEBHOOK] Payload vazio ou sem event");
      return NextResponse.json({ ok: true });
    }

    const { event, payment, subscription: subscriptionData } = body;
    console.log("[WEBHOOK] Evento:", event, "| Payment:", payment?.id ?? "-", "| Subscription:", payment?.subscription || subscriptionData?.id || "-");

    // Subscription ID can come from payment events or subscription events
    const subscriptionId = payment?.subscription || subscriptionData?.id;

    if (!subscriptionId) {
      console.log("[WEBHOOK] Evento sem subscriptionId, ignorando:", event);
      return NextResponse.json({ ok: true });
    }

    // Find user by subscription
    let user;
    try {
      user = await prisma.user.findFirst({
        where: { asaasSubscriptionId: subscriptionId },
      });
    } catch (dbErr) {
      console.error("[WEBHOOK] Erro ao buscar user no banco:", dbErr instanceof Error ? dbErr.message : dbErr);
      // Retorna 200 para o Asaas não retentar — o problema é nosso, não do payload
      return NextResponse.json({ ok: true, warning: "db_error" });
    }

    if (!user) {
      console.warn(`[WEBHOOK] Nenhum user para subscription: ${subscriptionId}`);
      return NextResponse.json({ ok: true });
    }

    switch (event) {
      case "PAYMENT_CONFIRMED":
      case "PAYMENT_RECEIVED": {
        // Determine plan from subscription externalReference
        let plan: "PRO" | "BUSINESS" | "ENTERPRISE" = "PRO";

        try {
          const subscription = await getSubscription(subscriptionId);
          const ref = subscription.externalReference;
          if (ref === "ENTERPRISE") plan = "ENTERPRISE";
          else if (ref === "BUSINESS") plan = "BUSINESS";
          else plan = "PRO";
        } catch {
          // Fallback: determine by value
          const value = payment?.value ?? 0;
          if (value >= 297) plan = "ENTERPRISE";
          else if (value >= 97) plan = "BUSINESS";
          else plan = "PRO";
        }

        // Check if this is a monthly renewal (same month reset) or first payment
        const now = new Date();
        const needsReset =
          !user.documentsResetAt ||
          now.getMonth() !== user.documentsResetAt.getMonth() ||
          now.getFullYear() !== user.documentsResetAt.getFullYear();

        await prisma.user.update({
          where: { id: user.id },
          data: {
            plan,
            ...(needsReset
              ? { documentsUsed: 0, documentsResetAt: now }
              : {}),
          },
        });
        console.log(`[WEBHOOK] User ${user.id} upgraded to ${plan}`);
        break;
      }

      case "PAYMENT_OVERDUE": {
        console.warn(`[WEBHOOK] Payment overdue: user ${user.id}, sub ${subscriptionId}`);
        break;
      }

      case "PAYMENT_DELETED":
      case "PAYMENT_REFUNDED": {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            plan: "FREE",
            asaasSubscriptionId: null,
          },
        });
        console.log(`[WEBHOOK] User ${user.id} downgraded to FREE (${event})`);
        break;
      }

      case "PAYMENT_SUBSCRIPTION_CANCELLED":
      case "SUBSCRIPTION_DELETED":
      case "SUBSCRIPTION_INACTIVATED": {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            plan: "FREE",
            asaasSubscriptionId: null,
          },
        });
        console.log(`[WEBHOOK] User ${user.id} subscription ended (${event})`);
        break;
      }

      default: {
        console.log(`[WEBHOOK] Evento não tratado: ${event}`);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[WEBHOOK] Erro inesperado:", message, "| Body:", JSON.stringify(body ?? {}).slice(0, 500));
    // SEMPRE retorna 200 para evitar retentativas do Asaas que geram emails de erro
    return NextResponse.json({ ok: true, warning: "internal_error" });
  }
}
