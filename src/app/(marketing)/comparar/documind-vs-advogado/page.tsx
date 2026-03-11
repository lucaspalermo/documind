import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Documind vs Advogado: Quando Usar Cada Um? | ${SITE_NAME}`,
  description:
    "Descubra quando usar o Documind para gerar contratos com IA e quando contratar um advogado. Compare custos, velocidade e complexidade para tomar a melhor decisão.",
  keywords: [
    "gerar contrato sem advogado",
    "preciso de advogado para contrato",
    "contrato sem advogado é válido",
    "fazer contrato online",
    "documind vs advogado",
    "contrato particular sem advogado",
    "quando contratar advogado para contrato",
  ],
  alternates: {
    canonical: `${SITE_URL}/comparar/documind-vs-advogado`,
  },
  openGraph: {
    title: `Documind vs Advogado: Quando Usar Cada Um? | ${SITE_NAME}`,
    description:
      "Compare o Documind com a contratação de um advogado. Saiba quando a IA resolve e quando você precisa de assessoria jurídica profissional.",
    url: `${SITE_URL}/comparar/documind-vs-advogado`,
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
      name: "Preciso de advogado para fazer um contrato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para contratos simples e padronizados — como aluguel residencial, prestação de serviços ou recibos — não é obrigatório contratar advogado. O Documind gera esses documentos com base na legislação brasileira vigente. Porém, para contratos complexos, litígios ou cláusulas altamente personalizadas, a orientação de um advogado é recomendada.",
      },
    },
    {
      "@type": "Question",
      name: "Contrato feito sem advogado é válido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. No Brasil, contratos particulares firmados entre partes capazes e com objeto lícito são juridicamente válidos, mesmo sem a participação de um advogado. O Documind gera contratos com cláusulas alinhadas ao Código Civil e legislação aplicável.",
      },
    },
    {
      "@type": "Question",
      name: "Quando devo contratar um advogado em vez de usar o Documind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomenda-se contratar um advogado em casos de: disputas judiciais, contratos com valores muito altos, operações societárias complexas, contratos internacionais, ou quando há necessidade de cláusulas altamente personalizadas que fogem do padrão.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto custa fazer um contrato com advogado vs Documind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Um advogado cobra entre R$300 e R$2.000+ por contrato, dependendo da complexidade. O Documind permite gerar 1 documento gratuitamente por mês, e o plano profissional com documentos ilimitados custa R$39,90/mês.",
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
      name: "Documind vs Advogado",
      item: `${SITE_URL}/comparar/documind-vs-advogado`,
    },
  ],
};

export default function DocumindVsAdvogadoPage() {
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
            Documind vs Advogado:{" "}
            <span className="text-gradient">Quando Usar Cada Um?</span>
          </h1>
          <p className="mt-6 text-lg text-surface-500 md:text-xl leading-relaxed">
            Nem todo contrato exige um advogado — e nem todo contrato deve ser
            feito sem um. Entenda quando a inteligência artificial resolve e
            quando você precisa de assessoria jurídica profissional.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
          Contrato sem advogado é válido?
        </h2>
        <p className="mt-4 text-surface-500 leading-relaxed">
          Sim. No Brasil, contratos particulares firmados entre partes capazes,
          com objeto lícito e forma não defesa em lei, são juridicamente válidos
          — mesmo sem a assinatura de um advogado. O{" "}
          <strong className="text-surface-900">Código Civil (art. 104)</strong>{" "}
          estabelece os requisitos de validade, e nenhum deles exige
          participação de advogado para contratos privados.
        </p>
        <p className="mt-4 text-surface-500 leading-relaxed">
          O <strong className="text-surface-900">Documind</strong> utiliza
          inteligência artificial treinada na legislação brasileira para gerar
          documentos com cláusulas adequadas e linguagem jurídica correta. É a
          solução ideal para quem precisa de contratos padrão com rapidez e
          economia.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
          Tabela Comparativa: Documind vs Advogado
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
                  Advogado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-200/60">
              <tr>
                <td className="px-4 py-3 font-medium text-surface-900">
                  Custo
                </td>
                <td className="px-4 py-3 text-primary-600">
                  Grátis ou a partir de R$39,90/mês
                </td>
                <td className="px-4 py-3 text-surface-500">
                  R$300 a R$2.000+ por contrato
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-900">
                  Tempo de entrega
                </td>
                <td className="px-4 py-3 text-primary-600">
                  Menos de 2 minutos
                </td>
                <td className="px-4 py-3 text-surface-500">
                  2 a 10 dias úteis
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-900">
                  Disponibilidade
                </td>
                <td className="px-4 py-3 text-primary-600">
                  24h por dia, 7 dias
                </td>
                <td className="px-4 py-3 text-surface-500">
                  Horário comercial
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-900">
                  Contratos padrão
                </td>
                <td className="px-4 py-3 text-primary-600">Excelente</td>
                <td className="px-4 py-3 text-surface-500">
                  Bom (mas com custo alto)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-900">
                  Contratos complexos
                </td>
                <td className="px-4 py-3 text-surface-500">Limitado</td>
                <td className="px-4 py-3 text-primary-600">Excelente</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-900">
                  Cláusulas personalizadas
                </td>
                <td className="px-4 py-3 text-surface-500">
                  Personalização por IA
                </td>
                <td className="px-4 py-3 text-primary-600">
                  Personalização total
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-900">
                  Atualizações legais
                </td>
                <td className="px-4 py-3 text-primary-600">
                  Automáticas e contínuas
                </td>
                <td className="px-4 py-3 text-surface-500">
                  Depende do profissional
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-900">
                  Representação judicial
                </td>
                <td className="px-4 py-3 text-surface-500">Não disponível</td>
                <td className="px-4 py-3 text-primary-600">Sim</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-surface-900">
                  Consultoria jurídica
                </td>
                <td className="px-4 py-3 text-surface-500">Não disponível</td>
                <td className="px-4 py-3 text-primary-600">Sim</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* When to use Documind */}
      <section className="bg-surface-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
            Quando usar o Documind
          </h2>
          <p className="mt-4 text-surface-500">
            O Documind é a melhor escolha para documentos do dia a dia que
            seguem formatos padronizados:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Contrato de aluguel residencial ou comercial",
              "Contrato de prestação de serviços (freelancer, autônomo, PJ)",
              "Recibos de pagamento e declarações",
              "Procurações simples",
              "Termos de confidencialidade (NDA)",
              "Contratos de compra e venda de bens móveis",
              "Distrato de contrato",
              "Contrato de empréstimo entre pessoas físicas",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs text-primary-600">
                  ✓
                </span>
                <span className="text-surface-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When to hire a lawyer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
          Quando contratar um advogado
        </h2>
        <p className="mt-4 text-surface-500">
          Em determinadas situações, a assessoria de um advogado é
          indispensável:
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Disputas judiciais e litígios em andamento",
            "Contratos societários e constituição de empresas",
            "Operações imobiliárias de alto valor",
            "Contratos internacionais ou com legislação estrangeira",
            "Situações que envolvem direito trabalhista complexo",
            "Casos que exigem representação em tribunal",
            "Planejamento sucessório e testamentos",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs text-orange-600">
                !
              </span>
              <span className="text-surface-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Best of both worlds */}
      <section className="bg-surface-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
            O melhor dos dois mundos
          </h2>
          <p className="mt-4 text-surface-500 leading-relaxed">
            Muitos profissionais e empresas usam o{" "}
            <strong className="text-surface-900">
              Documind para o dia a dia
            </strong>{" "}
            — gerando contratos padrão em minutos — e reservam o advogado para
            situações que realmente exigem análise aprofundada. Assim, você
            economiza tempo e dinheiro sem abrir mão da segurança jurídica
            quando ela é mais necessária.
          </p>

          <h3 className="mt-8 text-xl font-bold text-surface-900">
            Exemplo prático de economia
          </h3>
          <p className="mt-3 text-surface-500 leading-relaxed">
            Uma imobiliária que gera 20 contratos de aluguel por mês gastaria
            entre R$6.000 e R$20.000 com advogado. Com o Documind, o custo cai
            para{" "}
            <strong className="text-surface-900">R$39,90/mês</strong> — uma
            economia de até{" "}
            <strong className="text-surface-900">99%</strong>.
          </p>
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
                Comece a gerar contratos agora — grátis
              </h2>
              <p className="mt-4 text-primary-100">
                Crie 1 documento por mês sem pagar nada. Sem necessidade de
                cartão de crédito.
              </p>
              <Link
                href="/registro"
                className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-3 text-lg font-semibold text-primary-600 shadow-lg transition hover:bg-white/90"
              >
                Criar conta grátis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
