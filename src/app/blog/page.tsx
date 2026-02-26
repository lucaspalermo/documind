import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/marketing/cta-section";
import { SITE_NAME } from "@/lib/utils";
import { FileText, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Blog — Dicas sobre Contratos e Documentos | ${SITE_NAME}`,
  description:
    "Artigos e dicas sobre contratos, documentos legais, direito imobiliário, trabalhista e muito mais. Conteúdo gratuito para ajudar você.",
  keywords: [
    "blog contratos",
    "dicas documentos legais",
    "direito imobiliário",
    "contrato de aluguel dicas",
  ],
};

const posts = [
  {
    slug: "como-fazer-contrato-de-aluguel",
    title: "Como fazer um contrato de aluguel completo em 2026",
    excerpt:
      "Descubra todos os itens essenciais que um contrato de aluguel deve ter para proteger tanto o locador quanto o locatário.",
    category: "Imobiliário",
    readTime: "5 min",
    date: "26 Fev 2026",
  },
  {
    slug: "contrato-prestacao-servico-o-que-incluir",
    title: "Contrato de prestação de serviço: o que você precisa incluir",
    excerpt:
      "Saiba quais cláusulas são indispensáveis em um contrato de prestação de serviço para evitar problemas futuros.",
    category: "Comercial",
    readTime: "4 min",
    date: "25 Fev 2026",
  },
  {
    slug: "procuracao-simples-como-fazer",
    title: "Procuração simples: como fazer e quando usar",
    excerpt:
      "Entenda o que é uma procuração simples, quando ela é necessária e como criar uma com todos os requisitos legais.",
    category: "Pessoal",
    readTime: "3 min",
    date: "24 Fev 2026",
  },
  {
    slug: "direitos-inquilino-aluguel",
    title: "Direitos do inquilino: o que a Lei do Inquilinato garante",
    excerpt:
      "Conheça os principais direitos garantidos pela Lei 8.245/91 e saiba como se proteger em contratos de locação.",
    category: "Imobiliário",
    readTime: "6 min",
    date: "23 Fev 2026",
  },
  {
    slug: "contrato-freelancer-autonomo",
    title: "Contrato para freelancer: proteja seu trabalho",
    excerpt:
      "Por que todo freelancer precisa de um contrato e quais cláusulas não podem faltar para garantir seu pagamento.",
    category: "Comercial",
    readTime: "4 min",
    date: "22 Fev 2026",
  },
  {
    slug: "recibo-pagamento-modelo",
    title: "Modelo de recibo de pagamento: como emitir corretamente",
    excerpt:
      "Aprenda a criar recibos de pagamento válidos com todos os dados obrigatórios para comprovação financeira.",
    category: "Pessoal",
    readTime: "3 min",
    date: "21 Fev 2026",
  },
];

const categoryColors: Record<string, string> = {
  "Imobiliário": "bg-blue-50 text-blue-700",
  Comercial: "bg-purple-50 text-purple-700",
  Trabalhista: "bg-emerald-50 text-emerald-700",
  Pessoal: "bg-amber-50 text-amber-700",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
              Blog
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
              Dicas e artigos sobre{" "}
              <span className="text-gradient">contratos e documentos</span>
            </h1>
            <p className="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
              Conteúdo gratuito para te ajudar a entender seus direitos e criar
              documentos melhores.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl bg-white border border-surface-200 overflow-hidden hover:border-primary-200 hover:shadow-lg transition-all"
                >
                  {/* Thumbnail placeholder */}
                  <div className="h-40 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-primary-300" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          categoryColors[post.category] || "bg-surface-100 text-surface-600"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-surface-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-base font-bold text-surface-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-surface-500 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <span className="text-sm font-semibold text-primary-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler artigo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
