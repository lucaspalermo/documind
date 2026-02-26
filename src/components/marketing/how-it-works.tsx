"use client";

import { Search, Wand2, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Escolha o modelo",
    description:
      "Navegue pela nossa biblioteca com mais de 20 modelos de contratos e documentos prontos para uso.",
    color: "primary" as const,
  },
  {
    number: "02",
    icon: Wand2,
    title: "Personalize com IA",
    description:
      "Nossa inteligência artificial preenche e adapta o documento automaticamente com seus dados.",
    color: "cta" as const,
  },
  {
    number: "03",
    icon: Download,
    title: "Baixe em PDF",
    description:
      "Seu documento profissional está pronto. Baixe em PDF e use imediatamente.",
    color: "upgrade" as const,
  },
];

const colorMap = {
  primary: {
    bg: "bg-primary-50",
    icon: "text-primary-600",
    border: "border-primary-200",
    number: "text-primary-600",
    line: "from-primary-400 to-cta-400",
  },
  cta: {
    bg: "bg-cta-50",
    icon: "text-cta-600",
    border: "border-cta-200",
    number: "text-cta-600",
    line: "from-cta-400 to-upgrade-400",
  },
  upgrade: {
    bg: "bg-upgrade-50",
    icon: "text-upgrade-600",
    border: "border-upgrade-200",
    number: "text-upgrade-600",
    line: "",
  },
};

export function HowItWorks() {
  return (
    <section className="py-24 bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
            Simples e rápido
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
            Como funciona?
          </h2>
          <p className="mt-4 text-lg text-surface-500">
            Três passos simples para gerar seu documento profissional
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection lines (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[calc(33.33%-2rem)] right-[calc(33.33%-2rem)] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-primary-300 via-cta-300 to-upgrade-300 opacity-40" />
          </div>

          {STEPS.map((step, i) => {
            const colors = colorMap[step.color];
            return (
              <div key={i} className="relative group">
                <div className="text-center">
                  {/* Number + Icon */}
                  <div className="relative inline-flex flex-col items-center">
                    <span className={`text-xs font-bold ${colors.number} tracking-widest mb-3`}>
                      PASSO {step.number}
                    </span>
                    <div
                      className={`w-20 h-20 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-bold text-surface-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-surface-500 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="cta" size="lg" href="/modelos">
            Começar agora — é grátis
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
