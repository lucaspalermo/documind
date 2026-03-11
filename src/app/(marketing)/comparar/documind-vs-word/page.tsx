import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Documind vs Modelos no Word: Por que IA é Melhor | ${SITE_NAME}`,
  description:
    "Compare o Documind com modelos de contrato no Word. Descubra por que documentos gerados por IA são mais seguros, personalizados e atualizados que templates genéricos.",
  keywords: [
    "modelo contrato word",
    "template contrato download",
    "modelo de contrato pronto",
    "contrato word download grátis",
    "template contrato prestação de serviço word",
    "modelo contrato aluguel word",
    "gerar contrato com ia",
  ],
  alternates: {
    canonical: `${SITE_URL}/comparar/documind-vs-word`,
  },
  openGraph: {
    title: `Documind vs Modelos no Word: Por que IA é Melhor | ${SITE_NAME}`,
    description:
      "Templates de Word são genéricos e desatualizados. O Documind gera contratos personalizados com IA, sempre alinhados à legislação brasileira.",
    url: `${SITE_URL}/comparar/documind-vs-word`,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Posso usar um modelo de contrato do Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, mas modelos de Word são genéricos e podem conter cláusulas desatualizadas ou inadequadas para sua situação. O Documind gera contratos personalizados com base nas informações que você fornece, garantindo cláusulas alinhadas à legislação vigente.",
      },
    },
    {
      "@type": "Question",
      name: "Qual o risco de usar template de contrato pronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Templates prontos podem ter cláusulas abusivas, referências a leis revogadas, ou não cobrir situações importantes do seu caso. Isso pode gerar insegurança jurídica e prejuízos financeiros caso haja disputa.",
      },
    },
    {
      "@type": "Question",
      name: "O Documind substitui o Word para fazer contratos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O Documind gera o contrato completo e personalizado em PDF profissional pronto para assinar. Você não precisa editar templates, formatar texto ou se preocupar com cláusulas — a IA faz tudo automaticamente.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para fazer um contrato no Word vs Documind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No Word, você gasta entre 30 minutos e 2 horas procurando um template, editando, formatando e revisando. No Documind, o contrato fica pronto em menos de 2 minutos — basta responder algumas perguntas.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Comparações",
      item: `${SITE_URL}/comparar`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Documind vs Word",
      item: `${SITE_URL}/comparar/documind-vs-word`,
    },
  ],
};

export default function DocumindVsWordPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-10 left-[10%] w-[400px] h-[400px] bg-primary-400/8 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-surface-900 font-[family-name:var(--font-jakarta)]">
            Documind vs Modelos no Word:{" "}
            <span className="text-gradient">Por que IA é Melhor</span>
          </h1>
          <p className="mt-6 text-lg text-surface-500 md:text-xl leading-relaxed">
            Templates de Word são genéricos, desatualizados e trabalhosos. O
            Documind gera contratos personalizados com inteligência artificial
            em menos de 2 minutos.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
          O problema dos templates de Word
        </h2>
        <p className="mt-4 text-surface-500 leading-relaxed">
          Milhões de brasileiros pesquisam &quot;modelo contrato word&quot; todo
          mês. O processo é sempre o mesmo: baixar um arquivo genérico, tentar
          adaptar as cláusulas, lutar com a formatação e torcer para que esteja
          de acordo com a lei. O resultado? Contratos inseguros, com lacunas e
          cláusulas que podem ser contestadas judicialmente.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Cláusulas desatualizadas",
              desc: "Muitos templates circulam há anos na internet, com referências a leis revogadas ou alteradas.",
            },
            {
              title: "Sem personalização real",
              desc: "Você recebe um texto genérico e precisa adaptar manualmente — com risco de esquecer algo importante.",
            },
            {
              title: "Formatação inconsistente",
              desc: "Copiar e colar de diferentes fontes gera documentos com fontes, espaçamentos e numeração quebrados.",
            },
            {
              title: "Sem validação jurídica",
              desc: "Ninguém verifica se as cláusulas fazem sentido juntas ou se cobrem as situações necessárias.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-orange-200 bg-orange-50 p-5"
            >
              <h3 className="font-semibold text-orange-700">{item.title}</h3>
              <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-surface-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
            Tabela Comparativa: Documind vs Word
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-surface-200/60 bg-white">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-surface-200 bg-surface-50">
                  <th className="px-4 py-3 font-semibold text-surface-700">
                    Critério
                  </th>
                  <th className="px-4 py-3 font-semibold text-primary-600">
                    Documind
                  </th>
                  <th className="px-4 py-3 font-semibold text-surface-700">
                    Template Word
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-200/60">
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Personalização
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    Automática por IA, baseada nas suas respostas
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Manual — copiar e colar
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Tempo
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    Menos de 2 minutos
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    30 min a 2 horas
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Atualização legal
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    Sempre atualizado com a legislação vigente
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Pode estar desatualizado
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Formatação
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    PDF profissional padronizado
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Depende de quem edita
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Custo
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    Grátis (1/mês) ou R$39,90/mês
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Grátis (mas com custo de tempo)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Cláusulas adequadas
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    IA seleciona cláusulas relevantes para o caso
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Genéricas e muitas vezes incompletas
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Risco de erro
                  </td>
                  <td className="px-4 py-3 text-primary-600">Baixo</td>
                  <td className="px-4 py-3 text-surface-500">Alto</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Necessidade de conhecimento jurídico
                  </td>
                  <td className="px-4 py-3 text-primary-600">Nenhuma</td>
                  <td className="px-4 py-3 text-surface-500">
                    Sim, para editar corretamente
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
          Por que o Documind é melhor que um template
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Personalização inteligente",
              desc: "A IA entende seu caso e gera cláusulas específicas. Não é um preenchimento de lacunas — é um contrato feito sob medida.",
            },
            {
              title: "Sempre atualizado",
              desc: "Os modelos do Documind acompanham mudanças na legislação brasileira. Sem risco de usar cláusulas baseadas em leis revogadas.",
            },
            {
              title: "Economia de tempo real",
              desc: "Em vez de gastar 1-2 horas editando um Word, você responde algumas perguntas e recebe o PDF pronto em menos de 2 minutos.",
            },
            {
              title: "PDF profissional",
              desc: "O documento final tem formatação padronizada e profissional — sem fontes desalinhadas, numeração quebrada ou espaçamentos irregulares.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-surface-200/60 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-surface-900">
                {item.title}
              </h3>
              <p className="mt-2 text-surface-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step by step */}
      <section className="bg-surface-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
            Como funciona o Documind
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                step: "1",
                title: "Escolha o tipo de documento",
                desc: "Selecione entre dezenas de modelos: contrato de aluguel, prestação de serviço, procuração, recibo e mais.",
              },
              {
                step: "2",
                title: "Responda algumas perguntas",
                desc: "A IA faz perguntas específicas sobre o seu caso — partes envolvidas, valores, prazos, condições especiais.",
              },
              {
                step: "3",
                title: "Receba seu contrato em PDF",
                desc: "Em menos de 2 minutos, o documento está pronto para download e assinatura. Sem edição manual.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-lg font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-surface-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
          Perguntas Frequentes
        </h2>
        <div className="mt-8 space-y-6">
          {(
            faqJsonLd.mainEntity as Array<{
              name: string;
              acceptedAnswer: { text: string };
            }>
          ).map((faq) => (
            <div
              key={faq.name}
              className="rounded-2xl border border-surface-200/60 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-surface-900">
                {faq.name}
              </h3>
              <p className="mt-2 text-surface-500">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-cta-400/20 rounded-full blur-3xl" />

            <div className="relative px-8 py-16 sm:px-12 sm:py-20 text-center">
              <h2 className="text-2xl font-extrabold md:text-3xl text-white font-[family-name:var(--font-jakarta)]">
                Pare de perder tempo com templates — gere contratos com IA
              </h2>
              <p className="mt-4 text-primary-100">
                Crie 1 documento por mês gratuitamente. Sem template, sem
                formatação, sem dor de cabeça.
              </p>
              <Link
                href="/registro"
                className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-3 text-lg font-semibold text-primary-600 shadow-lg transition hover:bg-white/90"
              >
                Experimentar grátis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
