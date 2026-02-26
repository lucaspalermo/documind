import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_NAME, SITE_URL } from "@/lib/utils";
import { FileText, Sparkles, Shield, Users, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: `Sobre Nós | ${SITE_NAME}`,
  description:
    "Conheça o Documind — a plataforma brasileira que usa inteligência artificial para gerar contratos e documentos profissionais em segundos.",
  alternates: {
    canonical: `${SITE_URL}/sobre`,
  },
};

const values = [
  {
    icon: Sparkles,
    title: "Inovação com IA",
    description:
      "Usamos inteligência artificial de última geração para gerar documentos personalizados em segundos.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description:
      "Seus dados são protegidos com criptografia e nunca são compartilhados com terceiros.",
  },
  {
    icon: Users,
    title: "Acessibilidade",
    description:
      "Documentos jurídicos de qualidade acessíveis para todos, não só para quem pode pagar um advogado.",
  },
  {
    icon: Target,
    title: "Precisão",
    description:
      "Modelos revisados por especialistas com cláusulas essenciais para cada tipo de documento.",
  },
  {
    icon: Zap,
    title: "Rapidez",
    description:
      "O que levaria horas com um advogado, você faz em menos de 2 minutos na nossa plataforma.",
  },
  {
    icon: FileText,
    title: "Qualidade",
    description:
      "Documentos profissionais prontos para impressão e assinatura, com formatação impecável.",
  },
];

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
              Sobre o Documind
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)] leading-tight">
              Simplificando documentos{" "}
              <span className="text-gradient">para todos os brasileiros</span>
            </h1>
            <p className="mt-6 text-lg text-surface-500 max-w-2xl mx-auto leading-relaxed">
              O Documind nasceu da frustração de milhões de brasileiros que
              precisam de contratos e documentos legais, mas não têm acesso
              fácil a eles. Nossa missão é democratizar o acesso a documentos
              jurídicos de qualidade usando inteligência artificial.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-surface-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
                  Nossa missão
                </h2>
                <p className="mt-4 text-surface-600 leading-relaxed">
                  Acreditamos que todo brasileiro deveria ter acesso a
                  documentos jurídicos profissionais de forma rápida, acessível
                  e sem complicação. Com o Documind, você não precisa ser
                  advogado para ter um contrato bem feito.
                </p>
                <p className="mt-4 text-surface-600 leading-relaxed">
                  Combinamos mais de 20 modelos revisados por especialistas com
                  inteligência artificial para personalizar cada documento de
                  acordo com suas necessidades específicas.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-surface-200 text-center">
                  <p className="text-3xl font-extrabold text-primary-600 font-[family-name:var(--font-jakarta)]">
                    20+
                  </p>
                  <p className="text-sm text-surface-500 mt-1">
                    Modelos disponíveis
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-surface-200 text-center">
                  <p className="text-3xl font-extrabold text-cta-600 font-[family-name:var(--font-jakarta)]">
                    &lt;2min
                  </p>
                  <p className="text-sm text-surface-500 mt-1">
                    Para gerar um documento
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-surface-200 text-center">
                  <p className="text-3xl font-extrabold text-primary-600 font-[family-name:var(--font-jakarta)]">
                    100%
                  </p>
                  <p className="text-sm text-surface-500 mt-1">
                    Personalizável com IA
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-surface-200 text-center">
                  <p className="text-3xl font-extrabold text-cta-600 font-[family-name:var(--font-jakarta)]">
                    PDF
                  </p>
                  <p className="text-sm text-surface-500 mt-1">
                    Pronto para assinar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
                Nossos valores
              </h2>
              <p className="mt-4 text-surface-500 max-w-lg mx-auto">
                Princípios que guiam tudo que fazemos no Documind.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-white border border-surface-200 hover:border-primary-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-surface-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
