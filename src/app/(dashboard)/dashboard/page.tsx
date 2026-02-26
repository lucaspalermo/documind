"use client";

import { useSession } from "next-auth/react";
import {
  FileText,
  FilePlus,
  TrendingUp,
  Clock,
  ArrowRight,
  Sparkles,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PLANS } from "@/lib/constants";

export default function DashboardPage() {
  const { data: session } = useSession();
  const user = session?.user as any;
  const plan = user?.plan || "FREE";
  const documentsUsed = user?.documentsUsed || 0;
  const maxDocs = plan === "FREE" ? 3 : Infinity;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
          Olá, {user?.name?.split(" ")[0] || "Usuário"} 👋
        </h1>
        <p className="mt-1 text-surface-500">
          Gerencie seus documentos e crie novos contratos com IA.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-white border border-surface-200/60">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-600" />
            </div>
            <span className="text-sm text-surface-500">Documentos criados</span>
          </div>
          <p className="text-2xl font-bold text-surface-900">{documentsUsed}</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-surface-200/60">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-cta-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-cta-600" />
            </div>
            <span className="text-sm text-surface-500">Restantes este mês</span>
          </div>
          <p className="text-2xl font-bold text-surface-900">
            {plan === "FREE" ? Math.max(0, maxDocs - documentsUsed) : "∞"}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-surface-200/60">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-upgrade-50 flex items-center justify-center">
              <Crown className="w-5 h-5 text-upgrade-600" />
            </div>
            <span className="text-sm text-surface-500">Seu plano</span>
          </div>
          <Badge
            variant={plan === "FREE" ? "default" : plan === "PRO" ? "primary" : "upgrade"}
            size="md"
          >
            {PLANS[plan as keyof typeof PLANS]?.name || plan}
          </Badge>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-surface-200/60">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary-600" />
            </div>
            <span className="text-sm text-surface-500">Modelos disponíveis</span>
          </div>
          <p className="text-2xl font-bold text-surface-900">20+</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <a
          href="/dashboard/gerar"
          className="group p-6 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-white card-hover"
        >
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <FilePlus className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-1">Gerar novo documento</h3>
          <p className="text-sm text-primary-100 mb-4">
            Escolha um modelo e personalize com inteligência artificial.
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all">
            Começar agora
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>

        <a
          href="/modelos"
          className="group p-6 rounded-2xl bg-white border border-surface-200/60 card-hover"
        >
          <div className="w-12 h-12 rounded-xl bg-cta-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Sparkles className="w-6 h-6 text-cta-600" />
          </div>
          <h3 className="text-lg font-bold text-surface-900 mb-1">
            Explorar modelos
          </h3>
          <p className="text-sm text-surface-500 mb-4">
            Veja todos os modelos de contratos, recibos e procurações.
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
            Ver modelos
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>

      {/* Upgrade banner (FREE users only) */}
      {plan === "FREE" && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-upgrade-50 to-upgrade-100 border border-upgrade-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-surface-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-upgrade-500" />
                Faça upgrade para o PRO
              </h3>
              <p className="mt-1 text-sm text-surface-600">
                Documentos ilimitados, modelos premium e assinatura digital por apenas R$39,90/mês.
              </p>
            </div>
            <Button variant="upgrade" size="md" href="/dashboard/assinatura">
              Fazer upgrade
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
