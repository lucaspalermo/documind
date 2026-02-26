import {
  Brain,
  FileDown,
  ShieldCheck,
  LayoutGrid,
  Paintbrush,
  Timer,
  Lock,
  Headphones,
} from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "IA de última geração",
    description:
      "Nossa IA entende o contexto e gera cláusulas personalizadas para cada situação específica.",
    color: "text-primary-600",
    bg: "bg-primary-50",
  },
  {
    icon: FileDown,
    title: "PDF profissional",
    description:
      "Documentos formatados com visual limpo, pronto para imprimir e assinar.",
    color: "text-cta-600",
    bg: "bg-cta-50",
  },
  {
    icon: ShieldCheck,
    title: "LGPD compliant",
    description:
      "Seus dados protegidos. Não armazenamos informações sensíveis dos seus documentos.",
    color: "text-primary-600",
    bg: "bg-primary-50",
  },
  {
    icon: LayoutGrid,
    title: "20+ modelos prontos",
    description:
      "Biblioteca completa de contratos, recibos, procurações e mais categorias.",
    color: "text-cta-600",
    bg: "bg-cta-50",
  },
  {
    icon: Paintbrush,
    title: "Personalização total",
    description:
      "Edite qualquer campo, adicione cláusulas e adapte o documento às suas necessidades.",
    color: "text-upgrade-600",
    bg: "bg-upgrade-50",
  },
  {
    icon: Timer,
    title: "Pronto em 30 segundos",
    description:
      "Sem burocracia. Preencha os dados e tenha seu documento pronto em instantes.",
    color: "text-primary-600",
    bg: "bg-primary-50",
  },
  {
    icon: Lock,
    title: "Juridicamente válido",
    description:
      "Modelos revisados seguindo as normas do Código Civil Brasileiro e legislação vigente.",
    color: "text-cta-600",
    bg: "bg-cta-50",
  },
  {
    icon: Headphones,
    title: "Suporte humanizado",
    description:
      "Dúvidas? Nossa equipe está pronta para ajudar via chat ou email.",
    color: "text-upgrade-600",
    bg: "bg-upgrade-50",
  },
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cta-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
            Recursos
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
            Tudo que você precisa para{" "}
            <span className="text-gradient">criar documentos perfeitos</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500">
            Ferramentas profissionais com a simplicidade que você merece
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-white border border-surface-200/60 card-hover hover:border-primary-200"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold text-surface-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-surface-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
