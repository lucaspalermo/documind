import { Metadata } from "next";
import { ALL_TEMPLATES } from "@/data/templates";
import { TEMPLATE_CATEGORIES } from "@/lib/constants";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TemplateGrid } from "@/components/modelos/template-grid";

export const metadata: Metadata = {
  title: "Modelos de Contratos e Documentos",
  description:
    "Encontre mais de 20 modelos de contratos, recibos, procurações e documentos prontos para personalizar com IA e baixar em PDF. Gratuito.",
  keywords: [
    "modelos de contrato",
    "modelos de documentos",
    "contrato de aluguel",
    "contrato de prestação de serviço",
    "procuração",
    "recibo",
  ],
};

export default function ModelosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="bg-hero bg-grid py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
              Modelos de Contratos e{" "}
              <span className="text-gradient">Documentos</span>
            </h1>
            <p className="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
              Mais de {ALL_TEMPLATES.length} modelos prontos para personalizar com
              inteligência artificial e baixar em PDF.
            </p>
          </div>
        </section>

        {/* Template Grid */}
        <TemplateGrid
          templates={ALL_TEMPLATES}
          categories={TEMPLATE_CATEGORIES}
        />
      </main>
      <Footer />
    </>
  );
}
