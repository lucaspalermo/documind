"use client";

import { useState } from "react";
import { Search, Sparkles, ArrowRight, FileCheck, Shield, Zap, FileText, Check, Pen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { STATS } from "@/lib/constants";

export function Hero() {
  const [search, setSearch] = useState("");

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-primary-400/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-[5%] w-[400px] h-[400px] bg-cta-400/6 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-20">
        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 animate-fade-in">
              <Badge variant="primary" size="md">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-primary-500" />
                Inteligência Artificial
              </Badge>
              <Badge variant="cta" size="md">
                3 docs grátis
              </Badge>
            </div>

            {/* Headline — clean, readable, impactful */}
            <h1 className="mt-8 text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-surface-900 animate-slide-up leading-[1.1] tracking-[-0.02em] font-[family-name:var(--font-jakarta)]">
              Contratos
              <br />
              profissionais
              <br />
              <span className="text-gradient">em segundos.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-surface-500 animate-slide-up delay-100 leading-relaxed">
              Escolha entre 20+ modelos, personalize com IA e baixe em PDF.
              <span className="block mt-1 text-surface-400">Sem advogado. Sem complicação. Sem custo escondido.</span>
            </p>

            {/* Search bar */}
            <div className="mt-8 animate-slide-up delay-200">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-cta-500/20 to-primary-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center bg-white rounded-xl border-2 border-surface-200 hover:border-primary-300 focus-within:border-primary-500 focus-within:ring-4 focus-within:ring-primary-500/10 transition-all shadow-lg shadow-surface-900/5">
                  <Search className="w-5 h-5 text-surface-400 ml-4 flex-shrink-0" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Busque um modelo... ex: contrato de aluguel"
                    className="flex-1 px-3 py-4 text-base text-surface-900 placeholder:text-surface-400 bg-transparent outline-none"
                  />
                  <Button variant="cta" size="md" className="mr-1.5 flex-shrink-0" href={search ? `/modelos?q=${encodeURIComponent(search)}` : "/modelos"}>
                    Buscar
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <p className="mt-3 text-sm text-surface-400">
                Popular: <a href="/modelos/contrato-de-aluguel-residencial" className="text-primary-600 hover:underline">Contrato de Aluguel</a>{" · "}
                <a href="/modelos/contrato-de-prestacao-de-servico" className="text-primary-600 hover:underline">Prestação de Serviço</a>{" · "}
                <a href="/modelos/recibo-de-pagamento" className="text-primary-600 hover:underline">Recibo</a>{" · "}
                <a href="/modelos/procuracao-simples" className="text-primary-600 hover:underline">Procuração</a>
              </p>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-slide-up delay-300">
              <div className="flex items-center gap-1.5 text-sm text-surface-500">
                <FileCheck className="w-4 h-4 text-cta-500" />
                <span>3 documentos grátis</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-surface-500">
                <Shield className="w-4 h-4 text-cta-500" />
                <span>Conforme LGPD</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-surface-500">
                <Zap className="w-4 h-4 text-cta-500" />
                <span>Pronto em 30s</span>
              </div>
            </div>
          </div>

          {/* Right — Document Mockup */}
          <div className="hidden lg:block relative animate-slide-up delay-200">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-400/20 via-transparent to-cta-400/20 rounded-3xl blur-2xl" />

              {/* Main document card */}
              <div className="relative bg-white rounded-2xl border border-surface-200 shadow-2xl shadow-surface-900/10 p-8 animate-float">
                {/* Document header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-surface-900">Contrato de Aluguel Residencial</p>
                    <p className="text-xs text-surface-400">Gerado com IA · Agora</p>
                  </div>
                  <Badge variant="cta" size="sm" className="ml-auto">Pronto</Badge>
                </div>

                {/* Document content lines (faux) */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-400" />
                    <div className="h-3 bg-surface-200 rounded-full w-3/4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-300" />
                    <div className="h-3 bg-surface-100 rounded-full w-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-300" />
                    <div className="h-3 bg-surface-100 rounded-full w-5/6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-200" />
                    <div className="h-3 bg-surface-50 rounded-full w-2/3" />
                  </div>
                </div>

                {/* Clause highlight */}
                <div className="p-4 rounded-xl bg-primary-50 border border-primary-100 mb-6">
                  <p className="text-xs font-semibold text-primary-700 mb-1">CLÁUSULA III — DO VALOR</p>
                  <p className="text-xs text-primary-600/80 leading-relaxed">
                    O valor mensal do aluguel é de <span className="font-bold text-primary-700">R$ 2.500,00</span> (dois mil e quinhentos reais), a ser pago até o dia <span className="font-bold text-primary-700">05</span> de cada mês...
                  </p>
                </div>

                {/* Signature area */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 border-t-2 border-dashed border-surface-300 pt-2">
                    <div className="flex items-center gap-1">
                      <Pen className="w-3 h-3 text-surface-400" />
                      <span className="text-[10px] text-surface-400">Locador</span>
                    </div>
                  </div>
                  <div className="flex-1 border-t-2 border-dashed border-surface-300 pt-2">
                    <div className="flex items-center gap-1">
                      <Pen className="w-3 h-3 text-surface-400" />
                      <span className="text-[10px] text-surface-400">Locatário</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-3 -right-3 bg-cta-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-cta-500/30 animate-bounce-soft">
                <div className="flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  PDF pronto!
                </div>
              </div>

              {/* Floating card — bottom left */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-xl border border-surface-200 shadow-xl p-3 animate-bounce-soft delay-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-upgrade-100 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-upgrade-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-surface-900">IA Personalizou</p>
                    <p className="text-[10px] text-surface-400">12 cláusulas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slide-up delay-400">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="text-center p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-surface-200/60 card-hover"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-surface-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
