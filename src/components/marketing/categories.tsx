import { Building2, Briefcase, Users, FileText, ArrowRight } from "lucide-react";
import { TEMPLATE_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Briefcase,
  Users,
  FileText,
};

const colorMap: Record<string, { bg: string; icon: string; border: string; hover: string }> = {
  blue: {
    bg: "bg-primary-50",
    icon: "text-primary-600",
    border: "border-primary-100",
    hover: "hover:border-primary-300 hover:shadow-primary-500/10",
  },
  purple: {
    bg: "bg-purple-50",
    icon: "text-purple-600",
    border: "border-purple-100",
    hover: "hover:border-purple-300 hover:shadow-purple-500/10",
  },
  emerald: {
    bg: "bg-cta-50",
    icon: "text-cta-600",
    border: "border-cta-100",
    hover: "hover:border-cta-300 hover:shadow-cta-500/10",
  },
  amber: {
    bg: "bg-upgrade-50",
    icon: "text-upgrade-600",
    border: "border-upgrade-100",
    hover: "hover:border-upgrade-300 hover:shadow-upgrade-500/10",
  },
};

export function Categories() {
  return (
    <section className="py-24 bg-section-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
            Categorias
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
            Encontre o modelo ideal
          </h2>
          <p className="mt-4 text-lg text-surface-500">
            Mais de 20 modelos organizados por categoria para facilitar sua busca
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEMPLATE_CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon];
            const colors = colorMap[cat.color];

            return (
              <a
                key={cat.slug}
                href={`/modelos?categoria=${cat.slug}`}
                className={`group relative p-6 rounded-2xl bg-white border ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg card-hover`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                <h3 className="text-lg font-bold text-surface-900 mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-surface-500 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                  Ver modelos
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
