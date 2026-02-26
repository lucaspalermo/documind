"use client";

import { useState, useMemo } from "react";
import { Search, FileText, Lock, ArrowRight, Building2, Briefcase, Users, FileCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Template } from "@/data/templates";
import type { TEMPLATE_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  imobiliario: Building2,
  comercial: Briefcase,
  trabalhista: Users,
  pessoal: FileCheck,
};

const categoryColorMap: Record<string, string> = {
  imobiliario: "bg-primary-50 text-primary-700 border-primary-200",
  comercial: "bg-purple-50 text-purple-700 border-purple-200",
  trabalhista: "bg-cta-50 text-cta-700 border-cta-200",
  pessoal: "bg-upgrade-50 text-upgrade-700 border-upgrade-200",
};

interface Props {
  templates: Template[];
  categories: readonly { slug: string; name: string; icon: string; description: string; color: string }[];
}

export function TemplateGrid({ templates, categories }: Props) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = templates;

    if (activeCategory) {
      result = result.filter((t) => t.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }

    return result;
  }, [templates, search, activeCategory]);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar modelo... ex: contrato de aluguel"
            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-surface-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none text-surface-900 placeholder:text-surface-400 bg-white transition-all"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
              !activeCategory
                ? "bg-primary-600 text-white shadow-md"
                : "bg-surface-100 text-surface-600 hover:bg-surface-200"
            }`}
          >
            Todos ({templates.length})
          </button>
          {categories.map((cat) => {
            const count = templates.filter((t) => t.category === cat.slug).length;
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(activeCategory === cat.slug ? null : cat.slug)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.slug
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-surface-100 text-surface-600 hover:bg-surface-200"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-surface-400 mb-6">
        {filtered.length} modelo{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((template) => {
            const Icon = iconMap[template.category] || FileText;
            const catColor = categoryColorMap[template.category] || "bg-surface-50 text-surface-700";

            return (
              <a
                key={template.slug}
                href={`/modelos/${template.slug}`}
                className="group p-6 rounded-2xl bg-white border border-surface-200/60 card-hover hover:border-primary-200 flex flex-col"
              >
                {/* Top: Icon + badges */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex gap-2">
                    {template.isPremium ? (
                      <Badge variant="upgrade" size="sm">
                        <Lock className="w-3 h-3 mr-1" />
                        PRO
                      </Badge>
                    ) : (
                      <Badge variant="cta" size="sm">
                        Grátis
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-surface-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {template.shortTitle}
                </h3>
                <p className="text-sm text-surface-500 leading-relaxed mb-4 flex-1">
                  {template.description}
                </p>

                {/* Category + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-surface-100">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${catColor}`}>
                    {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                    Ver modelo
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <FileText className="w-12 h-12 text-surface-300 mx-auto mb-4" />
          <p className="text-lg font-semibold text-surface-900 mb-2">
            Nenhum modelo encontrado
          </p>
          <p className="text-surface-500">
            Tente buscar com outros termos ou limpe os filtros.
          </p>
          <Button
            variant="outline"
            size="md"
            className="mt-4"
            onClick={() => { setSearch(""); setActiveCategory(null); }}
          >
            Limpar filtros
          </Button>
        </div>
      )}
    </section>
  );
}
