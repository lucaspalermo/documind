"use client";

import { Check, X, Sparkles, Zap, Building2, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PLANS } from "@/lib/constants";

const planConfig = [
  {
    key: "FREE" as const,
    icon: Sparkles,
    cta: "Começar grátis",
    ctaVariant: "outline" as const,
    highlight: false,
  },
  {
    key: "PRO" as const,
    icon: Zap,
    cta: "Assinar agora",
    ctaVariant: "cta" as const,
    highlight: true,
  },
  {
    key: "BUSINESS" as const,
    icon: Building2,
    cta: "Falar com vendas",
    ctaVariant: "primary" as const,
    highlight: false,
  },
  {
    key: "ENTERPRISE" as const,
    icon: Crown,
    cta: "Contato",
    ctaVariant: "primary" as const,
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="precos" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cta-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
            Preços
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
            Planos que cabem no{" "}
            <span className="text-gradient">seu bolso</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500">
            Comece grátis e faça upgrade quando precisar. Sem surpresas.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {planConfig.map((config) => {
            const plan = PLANS[config.key];
            const isPro = config.highlight;

            return (
              <div
                key={config.key}
                className={`relative rounded-2xl p-6 transition-all duration-300 ${
                  isPro
                    ? "bg-white border-2 border-primary-500 shadow-xl shadow-primary-500/10 scale-[1.02] lg:scale-105"
                    : "bg-white border border-surface-200 hover:border-primary-200 hover:shadow-lg"
                }`}
              >
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="primary" size="md">
                      Mais popular
                    </Badge>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isPro ? "bg-primary-100" : "bg-surface-100"
                    }`}
                  >
                    <config.icon
                      className={`w-5 h-5 ${isPro ? "text-primary-600" : "text-surface-600"}`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-surface-900">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    {plan.price === 0 ? (
                      <span className="text-4xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
                        Grátis
                      </span>
                    ) : (
                      <>
                        <span className="text-sm text-surface-400">R$</span>
                        <span className="text-4xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
                          {plan.price % 1 === 0 ? plan.price.toFixed(0) : plan.price.toFixed(2).replace(".", ",")}
                        </span>
                        <span className="text-surface-400 text-sm">/mês</span>
                      </>
                    )}
                  </div>
                  {plan.price > 0 && (
                    <p className="text-xs text-surface-400 mt-1">
                      cobrado mensalmente via PIX ou cartão
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Button
                  variant={config.ctaVariant}
                  size="md"
                  className="w-full mb-6"
                  href={plan.price === 0 ? "/registro" : "/dashboard/assinatura"}
                >
                  {config.cta}
                </Button>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cta-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-surface-600">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={`not-${i}`} className="flex items-start gap-2.5 opacity-40">
                      <X className="w-4 h-4 text-surface-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-surface-400 line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-sm text-surface-400">
            Cancele quando quiser. Sem fidelidade. Sem taxa de cancelamento.
          </p>
        </div>
      </div>
    </section>
  );
}
