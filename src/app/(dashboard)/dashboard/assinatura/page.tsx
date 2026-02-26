"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { Check, X, Sparkles, Zap, Building2, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PLANS } from "@/lib/constants";

const planIcons: Record<string, React.ElementType> = {
  FREE: Sparkles,
  PRO: Zap,
  BUSINESS: Building2,
  ENTERPRISE: Crown,
};

export default function AssinaturaPage() {
  const { data: session } = useSession();
  const currentPlan = (session?.user as any)?.plan || "FREE";
  const [loading, setLoading] = useState<string | null>(null);

  async function handleUpgrade(planKey: string) {
    setLoading(planKey);
    try {
      const res = await fetch("/api/asaas/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planKey, billingType: "PIX" }),
      });

      const data = await res.json();

      if (data.paymentLink) {
        window.open(data.paymentLink, "_blank");
      } else {
        alert("Assinatura criada! Aguarde a confirmação do pagamento.");
      }
    } catch {
      alert("Erro ao processar. Tente novamente.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
          Assinatura
        </h1>
        <p className="mt-1 text-surface-500">
          Gerencie seu plano e método de pagamento.
        </p>
      </div>

      {/* Current Plan */}
      <div className="p-6 rounded-2xl bg-white border border-surface-200 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-surface-500">Plano atual</p>
            <p className="text-xl font-bold text-surface-900 mt-1">
              {PLANS[currentPlan as keyof typeof PLANS]?.name || currentPlan}
            </p>
          </div>
          <Badge
            variant={currentPlan === "FREE" ? "default" : "primary"}
            size="md"
          >
            {currentPlan === "FREE" ? "Gratuito" : "Ativo"}
          </Badge>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {(Object.entries(PLANS) as [string, (typeof PLANS)[keyof typeof PLANS]][]).map(([key, plan]) => {
          const Icon = planIcons[key] || Sparkles;
          const isCurrentPlan = key === currentPlan;
          const isPro = key === "PRO";

          return (
            <div
              key={key}
              className={`relative rounded-2xl p-5 ${
                isPro
                  ? "border-2 border-primary-500 bg-white shadow-lg"
                  : "border border-surface-200 bg-white"
              } ${isCurrentPlan ? "ring-2 ring-cta-500 ring-offset-2" : ""}`}
            >
              {isPro && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" size="sm">Mais popular</Badge>
                </div>
              )}
              {isCurrentPlan && (
                <div className="absolute -top-3 right-4">
                  <Badge variant="cta" size="sm">Seu plano</Badge>
                </div>
              )}

              <Icon className={`w-6 h-6 mb-3 ${isPro ? "text-primary-600" : "text-surface-400"}`} />
              <h3 className="text-base font-bold text-surface-900">{plan.name}</h3>

              <div className="mt-2 mb-4">
                {plan.price === 0 ? (
                  <span className="text-2xl font-bold text-surface-900">Grátis</span>
                ) : (
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-xs text-surface-400">R$</span>
                    <span className="text-2xl font-bold text-surface-900">
                      {plan.price.toFixed(0)}
                    </span>
                    <span className="text-xs text-surface-400">/mês</span>
                  </div>
                )}
              </div>

              {isCurrentPlan ? (
                <Button variant="secondary" size="sm" className="w-full" disabled>
                  Plano atual
                </Button>
              ) : plan.price === 0 ? (
                <Button variant="ghost" size="sm" className="w-full" disabled>
                  —
                </Button>
              ) : (
                <Button
                  variant={isPro ? "cta" : "primary"}
                  size="sm"
                  className="w-full"
                  loading={loading === key}
                  onClick={() => handleUpgrade(key)}
                >
                  Assinar
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              )}

              <ul className="mt-4 space-y-2">
                {plan.features.slice(0, 5).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-surface-600">
                    <Check className="w-3.5 h-3.5 text-cta-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
                {plan.notIncluded.slice(0, 2).map((f, i) => (
                  <li key={`no-${i}`} className="flex items-start gap-2 text-xs text-surface-400 opacity-50">
                    <X className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span className="line-through">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
