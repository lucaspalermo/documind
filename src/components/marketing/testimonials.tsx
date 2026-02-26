import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Carla Mendes",
    role: "Corretora de imóveis",
    avatar: "CM",
    content:
      "Eu gastava horas fazendo contratos de aluguel manualmente. Agora em 2 minutos está tudo pronto e profissional. Meus clientes ficam impressionados.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Freelancer / Designer",
    avatar: "RS",
    content:
      "Finalmente um serviço que gera contratos de prestação de serviço de verdade. A IA entende exatamente o que preciso e personaliza tudo.",
    rating: 5,
  },
  {
    name: "Amanda Costa",
    role: "Empreendedora",
    avatar: "AC",
    content:
      "Usei para criar NDA e contrato de parceria. Economizei R$1.500 que ia gastar com advogado. Super recomendo!",
    rating: 5,
  },
  {
    name: "Lucas Ferreira",
    role: "Proprietário de imóvel",
    avatar: "LF",
    content:
      "Precisava de um contrato de aluguel urgente e encontrei o Documind no Google. Em 5 minutos resolvi tudo. Incrível.",
    rating: 5,
  },
  {
    name: "Juliana Rocha",
    role: "Advogada",
    avatar: "JR",
    content:
      "Uso como base para meus clientes. Os modelos são bem estruturados e seguem a legislação. Ajuda muito na produtividade.",
    rating: 5,
  },
  {
    name: "Pedro Almeida",
    role: "Dono de restaurante",
    avatar: "PA",
    content:
      "Contratei funcionários e precisava de contratos CLT. O Documind gerou tudo certinho. Melhor R$39 que já investi.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
            Quem usa,{" "}
            <span className="text-gradient">recomenda</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500">
            Veja o que nossos usuários estão dizendo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-surface-200/60 card-hover"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-upgrade-400 text-upgrade-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-surface-600 leading-relaxed mb-6 text-sm">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-700">
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-surface-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-surface-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
