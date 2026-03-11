import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSubscription } from "@/lib/asaas";

export async function POST(req: Request) {
  try {
    // Validate webhook token
    const webhookToken = process.env.ASAAS_WEBHOOK_TOKEN;
    if (webhookToken) {
      const token = req.headers.get("asaas-access-token");
      if (token !== webhookToken) {
        console.warn("Webhook auth failed. Expected token configured, got:", token ? "different token" : "no token");
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const body = await req.json();
    console.log("Webhook received:", body.event, body.payment?.id || "no payment");
    const { event, payment } = body;

    if (!payment?.subscription) {
      return NextResponse.json({ ok: true });
    }

    const subscriptionId = payment.subscription;

    // Find user by subscription
    const user = await prisma.user.findFirst({
      where: { asaasSubscriptionId: subscriptionId },
    });

    if (!user) {
      console.warn(`No user found for subscription: ${subscriptionId}`);
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
          // Fallback: determine by value using same prices as PLANS constants
          const value = payment.value;
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
        console.log(`User ${user.id} upgraded to ${plan}`);
        break;
      }

      case "PAYMENT_OVERDUE": {
        // Grace period: just log, don't downgrade immediately
        console.warn(`Payment overdue for user ${user.id}, subscription ${subscriptionId}`);
        break;
      }

      case "PAYMENT_DELETED":
      case "PAYMENT_REFUNDED": {
        // Downgrade to FREE but keep subscription ID for recovery
        await prisma.user.update({
          where: { id: user.id },
          data: {
            plan: "FREE",
            asaasSubscriptionId: null,
          },
        });
        console.log(`User ${user.id} downgraded to FREE (event: ${event})`);
        break;
      }

      // Handle subscription lifecycle events
      case "PAYMENT_SUBSCRIPTION_CANCELLED": {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            plan: "FREE",
            asaasSubscriptionId: null,
          },
        });
        console.log(`User ${user.id} subscription cancelled via Asaas`);
        break;
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Webhook error:", message);
    return NextResponse.json(
      { error: "Webhook processing error", detail: message },
      { status: 500 }
    );
  }
}
