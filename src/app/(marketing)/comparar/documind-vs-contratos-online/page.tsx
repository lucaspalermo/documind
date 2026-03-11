import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Documind vs Outros Geradores de Contrato Online 2026 | ${SITE_NAME}`,
  description:
    "Compare o Documind com outros geradores de contrato online como Modelo Simples e Contraktor. IA personalizada, foco na legislação brasileira, plano grátis e download em PDF profissional.",
  keywords: [
    "gerador de contratos online",
    "melhor site para fazer contratos",
    "contratos online grátis",
    "melhor gerador de contrato online",
    "gerar contrato online gratis",
    "gerador de contrato com ia",
    "fazer contrato online",
    "contrato online grátis",
    "plataforma de contratos online",
    "criar contrato pela internet",
  ],
  alternates: {
    canonical: `${SITE_URL}/comparar/documind-vs-contratos-online`,
  },
  openGraph: {
    title: `Documind vs Outros Geradores de Contrato Online 2026 | ${SITE_NAME}`,
    description:
      "Veja por que o Documind é o melhor gerador de contratos online do Brasil. IA personalizada, legislação atualizada e plano gratuito.",
    url: `${SITE_URL}/comparar/documind-vs-contratos-online`,
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
      name: "Qual o melhor gerador de contrato online do Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Documind se destaca por usar inteligência artificial para gerar contratos personalizados, com foco na legislação brasileira, plano gratuito com 1 documento por mês e download em PDF profissional. Diferente de outros geradores, o Documind não apenas preenche lacunas — ele cria documentos sob medida.",
      },
    },
    {
      "@type": "Question",
      name: "É possível gerar contrato online grátis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O Documind oferece um plano gratuito que permite gerar 1 documento por mês, sem necessidade de cartão de crédito. Os contratos gerados no plano grátis têm a mesma qualidade dos planos pagos.",
      },
    },
    {
      "@type": "Question",
      name: "Geradores de contrato online são confiáveis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende da plataforma. Muitos geradores online usam templates estáticos que podem estar desatualizados. O Documind utiliza IA treinada na legislação brasileira e atualiza continuamente seus modelos para garantir conformidade legal.",
      },
    },
    {
      "@type": "Question",
      name: "O que diferencia o Documind de outros geradores de contrato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Documind usa inteligência artificial de verdade (não apenas preenchimento de formulário), foca exclusivamente na legislação brasileira, oferece plano gratuito, gera PDFs profissionais e permite personalização avançada das cláusulas conforme cada situação.",
      },
    },
    {
      "@type": "Question",
      name: "O Documind é melhor que Modelo Simples ou Contraktor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Documind se diferencia por usar IA generativa que cria contratos sob medida, enquanto plataformas como Modelo Simples e Contraktor geralmente utilizam templates fixos com preenchimento de campos. Além disso, o Documind oferece mais de 20 modelos de documentos e foco total na legislação brasileira.",
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
      name: "Documind vs Contratos Online",
      item: `${SITE_URL}/comparar/documind-vs-contratos-online`,
    },
  ],
};

export default function DocumindVsContratosOnlinePage() {
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
        <div className="absolute bottom-10 right-[5%] w-[300px] h-[300px] bg-cta-400/6 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-surface-900 font-[family-name:var(--font-jakarta)]">
            Documind vs Outros Geradores de{" "}
            <span className="text-gradient">Contrato Online</span> (2026)
          </h1>
          <p className="mt-6 text-lg text-surface-500 md:text-xl leading-relaxed">
            Nem todo gerador de contrato é igual. Veja por que o Documind, com
            inteligência artificial de verdade, supera plataformas que apenas
            preenchem formulários em templates estáticos.
          </p>
        </div>
      </section>

      {/* The landscape */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
          O cenário dos geradores de contrato online
        </h2>
        <p className="mt-4 text-surface-500 leading-relaxed">
          Existem diversas plataformas no Brasil que prometem gerar contratos
          online — como Modelo Simples, Contraktor, entre outras. A maioria
          funciona da mesma forma: você preenche um formulário com seus dados e a
          plataforma insere essas informações em um template pré-definido. O
          problema? O contrato final é{" "}
          <strong className="text-surface-900">genérico e limitado</strong> — as
          cláusulas não se adaptam ao seu caso específico.
        </p>
        <p className="mt-4 text-surface-500 leading-relaxed">
          O <strong className="text-surface-900">Documind</strong> funciona de
          forma diferente. Usando inteligência artificial avançada, ele entende
          sua situação e gera documentos verdadeiramente personalizados, com
          cláusulas relevantes e linguagem jurídica adequada à legislação
          brasileira.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="bg-surface-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
            Tabela Comparativa: Documind vs Geradores Tradicionais
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-surface-200/60 bg-white">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-surface-200 bg-surface-50">
                  <th className="px-4 py-3 font-semibold text-surface-700">
                    Funcionalidade
                  </th>
                  <th className="px-4 py-3 font-semibold text-primary-600">
                    Documind
                  </th>
                  <th className="px-4 py-3 font-semibold text-surface-700">
                    Geradores tradicionais
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-200/60">
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Tecnologia
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    Inteligência artificial generativa
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Preenchimento de formulário em template
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Personalização
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    Cláusulas adaptadas ao caso específico
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Mesmas cláusulas para todos os usuários
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Foco geográfico
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    100% legislação brasileira
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Varia — alguns são genéricos ou internacionais
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Plano gratuito
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    1 documento/mês, sem cartão
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Limitado ou inexistente na maioria
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Formato de saída
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    PDF profissional padronizado
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    PDF, Word ou texto — qualidade variada
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Velocidade
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    Menos de 2 minutos
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    5 a 15 minutos
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Variedade de modelos
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    20+ tipos de documentos
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Geralmente limitado
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Preço mensal
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    A partir de R$39,90/mês (ilimitado)
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    R$29 a R$199/mês
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-surface-900">
                    Atualização legislativa
                  </td>
                  <td className="px-4 py-3 text-primary-600">
                    Contínua e automática
                  </td>
                  <td className="px-4 py-3 text-surface-500">
                    Esporádica ou manual
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
          Por que escolher o Documind
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "IA de verdade, não formulário",
              desc: "Enquanto outros geradores pedem que você preencha campos em um template fixo, o Documind usa inteligência artificial para criar o documento do zero, com cláusulas adequadas para seu caso.",
            },
            {
              title: "Feito para o Brasil",
              desc: "Cada contrato é gerado com base no Código Civil, CDC, CLT e demais normas brasileiras. Sem cláusulas genéricas traduzidas de plataformas internacionais.",
            },
            {
              title: "Plano grátis para começar",
              desc: "Gere 1 documento por mês sem pagar nada e sem cadastrar cartão de crédito. Ideal para quem precisa de contratos esporádicos.",
            },
            {
              title: "PDF profissional",
              desc: "O documento final tem formatação impecável — pronto para imprimir e assinar, com aparência profissional que transmite credibilidade.",
            },
            {
              title: "Rápido e intuitivo",
              desc: "Responda algumas perguntas simples e receba seu contrato em menos de 2 minutos. Sem cadastro demorado ou processos complicados.",
            },
            {
              title: "Segurança dos dados",
              desc: "Seus dados são protegidos e não compartilhados com terceiros. Conformidade total com a LGPD (Lei Geral de Proteção de Dados).",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-surface-200/60 bg-white p-6 transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-surface-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-surface-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-surface-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
            Para quem o Documind é ideal
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Pessoas físicas",
                items: [
                  "Contrato de aluguel",
                  "Empréstimo entre amigos/família",
                  "Procurações",
                  "Recibos e declarações",
                ],
              },
              {
                title: "Freelancers e autônomos",
                items: [
                  "Contrato de prestação de serviço",
                  "NDA / Confidencialidade",
                  "Proposta comercial",
                  "Distrato de contrato",
                ],
              },
              {
                title: "Pequenas empresas",
                items: [
                  "Contratos com fornecedores",
                  "Contratos de trabalho",
                  "Termos de uso e privacidade",
                  "Contratos de compra e venda",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-surface-200/60 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-surface-900">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-surface-500"
                    >
                      <span className="text-primary-600">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-surface-900 md:text-3xl font-[family-name:var(--font-jakarta)]">
          Como gerar um contrato no Documind
        </h2>
        <div className="mt-8 space-y-6">
          {[
            {
              step: "1",
              title: "Crie sua conta grátis",
              desc: "Cadastre-se em menos de 1 minuto. Sem cartão de crédito.",
            },
            {
              step: "2",
              title: "Escolha o tipo de contrato",
              desc: "Selecione entre 20+ modelos disponíveis ou descreva o que precisa.",
            },
            {
              step: "3",
              title: "Responda as perguntas da IA",
              desc: "A inteligência artificial faz perguntas relevantes para personalizar o documento.",
            },
            {
              step: "4",
              title: "Baixe o PDF e assine",
              desc: "Receba o contrato pronto em PDF profissional. Imprima, assine e pronto.",
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
      </section>

      {/* FAQ */}
      <section className="bg-surface-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <p className="mt-2 text-surface-500">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-cta-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl" />

            <div className="relative px-8 py-16 sm:px-12 sm:py-20 text-center">
              <h2 className="text-2xl font-extrabold md:text-3xl text-white font-[family-name:var(--font-jakarta)]">
                Experimente o melhor gerador de contratos do Brasil
              </h2>
              <p className="mt-4 text-primary-100">
                Crie sua conta grátis e gere 1 documento por mês. Sem cartão de
                crédito, sem compromisso.
              </p>
              <Link
                href="/registro"
                className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-3 text-lg font-semibold text-primary-600 shadow-lg transition hover:bg-white/90"
              >
                Começar agora — é grátis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
