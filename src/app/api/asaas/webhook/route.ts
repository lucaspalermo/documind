import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSubscription } from "@/lib/asaas";

export async function POST(req: Request) {
  try {
    const token = req.headers.get("asaas-access-token");
    if (!token || !process.env.ASAAS_WEBHOOK_TOKEN || token !== process.env.ASAAS_WEBHOOK_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
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
          // Fallback: determine by value
          const value = payment.value;
          if (value >= 297) plan = "ENTERPRISE";
          else if (value >= 97) plan = "BUSINESS";
        }

        await prisma.user.update({
          where: { id: user.id },
          data: {
            plan,
            documentsUsed: 0,
            documentsResetAt: new Date(),
          },
        });
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
        break;
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing error" },
      { status: 500 }
    );
  }
}
