import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Pricing } from "@/components/marketing/pricing";
import { FAQ } from "@/components/marketing/faq";
import { CTASection } from "@/components/marketing/cta-section";
import { SITE_NAME } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Preços e Planos | ${SITE_NAME}`,
  description:
    "Conheça os planos do Documind. Comece grátis com 3 documentos por mês ou faça upgrade para documentos ilimitados a partir de R$39,90/mês.",
  keywords: [
    "preço documind",
    "plano gerador de contratos",
    "gerador de documentos preço",
    "contrato online preço",
  ],
};

export default function PrecosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
