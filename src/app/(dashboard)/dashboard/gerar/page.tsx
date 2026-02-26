"use client";

import { useState } from "react";
import { ALL_TEMPLATES } from "@/data/templates";
import { TEMPLATE_CATEGORIES } from "@/lib/constants";
import {
  Search,
  ArrowRight,
  Lock,
  Building2,
  Briefcase,
  Users,
  FileCheck,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ElementType> = {
  imobiliario: Building2,
  comercial: Briefcase,
  trabalhista: Users,
  pessoal: FileCheck,
};

export default function GerarPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = ALL_TEMPLATES.filter((t) => {
    if (category && t.category !== category) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
          Gerar Documento
        </h1>
        <p className="mt-1 text-surface-500">
          Escolha um modelo para personalizar com IA
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar modelo..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-surface-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none text-surface-900 placeholder:text-surface-400 bg-white transition-all"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setCategory(null)}
            className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
              !category ? "bg-primary-600 text-white" : "bg-white text-surface-600 border border-surface-200 hover:bg-surface-50"
            }`}
          >
            Todos
          </button>
          {TEMPLATE_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setCategory(category === cat.slug ? null : cat.slug)}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                category === cat.slug
                  ? "bg-primary-600 text-white"
                  : "bg-white text-surface-600 border border-surface-200 hover:bg-surface-50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Template Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((template) => {
          const Icon = iconMap[template.category] || FileText;

          return (
            <a
              key={template.slug}
              href={`/dashboard/gerar/${template.slug}`}
              className="group p-5 rounded-2xl bg-white border border-surface-200/60 hover:border-primary-200 hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                {template.isPremium ? (
                  <Badge variant="upgrade" size="sm">
                    <Lock className="w-3 h-3 mr-0.5" />
                    PRO
                  </Badge>
                ) : (
                  <Badge variant="cta" size="sm">Grátis</Badge>
                )}
              </div>
              <h3 className="text-base font-bold text-surface-900 mb-1.5 group-hover:text-primary-700 transition-colors">
                {template.shortTitle}
              </h3>
              <p className="text-sm text-surface-500 leading-relaxed flex-1 mb-3">
                {template.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                Personalizar
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
