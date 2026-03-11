import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Carla Mendes",
    role: "Corretora de imóveis",
    location: "São Paulo, SP",
    avatar: "CM",
    content:
      "Administro 15 imóveis e gastava horas fazendo contratos de aluguel manualmente. Com o Documind, gero tudo em 2 minutos — com cláusulas da Lei do Inquilinato. Meus clientes ficam impressionados com a qualidade.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Freelancer / Designer",
    location: "Belo Horizonte, MG",
    avatar: "RS",
    content:
      "Depois de levar um calote de R$3.000, passei a usar contrato em todo projeto. A IA do Documind gera contratos de prestação de serviço com cláusula de pagamento antecipado. Nunca mais tive problema.",
    rating: 5,
  },
  {
    name: "Amanda Costa",
    role: "Empreendedora",
    location: "Rio de Janeiro, RJ",
    avatar: "AC",
    content:
      "Criei NDA e contrato de parceria para minha startup. Meu advogado cobrava R$800 por cada. Com o Documind PRO, gero quantos precisar por R$39,90/mês. Economizei mais de R$5.000 no ano.",
    rating: 5,
  },
  {
    name: "Lucas Ferreira",
    role: "Proprietário de imóvel",
    location: "Curitiba, PR",
    avatar: "LF",
    content:
      "Precisava alugar meu apartamento urgente num domingo à noite. Encontrei o Documind, gerei o contrato com vistoria inclusa e fechei negócio no mesmo dia. Funciona 24h, sem depender de ninguém.",
    rating: 5,
  },
  {
    name: "Juliana Rocha",
    role: "Advogada",
    location: "Brasília, DF",
    avatar: "JR",
    content:
      "Uso o Documind como ponto de partida para os contratos dos meus clientes. Os modelos são bem estruturados, citam os artigos corretos do Código Civil e me economizam 60% do tempo de redação.",
    rating: 5,
  },
  {
    name: "Pedro Almeida",
    role: "Dono de restaurante",
    location: "Salvador, BA",
    avatar: "PA",
    content:
      "Contratei 4 funcionários e precisava de contratos CLT com período de experiência. O Documind gerou tudo certinho, com todas as cláusulas da CLT. Melhor investimento que fiz pro meu negócio.",
    rating: 5,
  },
];

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Documind",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: String(TESTIMONIALS.length),
    bestRating: "5",
    worstRating: "1",
  },
};

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
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
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-upgrade-50 border border-upgrade-200">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-upgrade-400 text-upgrade-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-surface-700">4.9/5</span>
            <span className="text-xs text-surface-500">· Avaliação dos usuários</span>
          </div>
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
                  <p className="text-xs text-surface-400">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
