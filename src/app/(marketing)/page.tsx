import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Features } from "@/components/marketing/features";
import { Categories } from "@/components/marketing/categories";
import { Testimonials } from "@/components/marketing/testimonials";
import { Pricing } from "@/components/marketing/pricing";
import { FAQ } from "@/components/marketing/faq";
import { CTASection } from "@/components/marketing/cta-section";

export const metadata: Metadata = {
  title: "Documind — Gere Contratos e Documentos Profissionais com IA em Segundos",
  description:
    "Crie contratos de aluguel, prestação de serviço, procurações e mais de 20 modelos jurídicos. Personalizado por inteligência artificial, pronto para download em PDF. Grátis para começar.",
  keywords: [
    "modelo de contrato grátis",
    "gerar contrato online",
    "contrato de aluguel modelo 2026",
    "contrato de prestação de serviço",
    "gerador de contratos com IA",
    "modelo de procuração",
    "contrato online grátis",
    "documento jurídico online",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Categories />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
    </>
  );
}
