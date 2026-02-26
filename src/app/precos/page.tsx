import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Pricing } from "@/components/marketing/pricing";
import { FAQ } from "@/components/marketing/faq";
import { CTASection } from "@/components/marketing/cta-section";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/utils";

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
  alternates: {
    canonical: `${SITE_URL}/precos`,
  },
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${SITE_NAME} — Gerador de Contratos com IA`,
  description: SITE_DESCRIPTION,
  brand: { "@type": "Organization", name: SITE_NAME },
  offers: [
    {
      "@type": "Offer",
      name: "Plano Grátis",
      price: "0",
      priceCurrency: "BRL",
      description: "3 documentos por mês",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Plano Profissional",
      price: "39.90",
      priceCurrency: "BRL",
      description: "Documentos ilimitados, PDF profissional, suporte prioritário",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "Plano Empresarial",
      price: "97.00",
      priceCurrency: "BRL",
      description: "Para equipes, múltiplos usuários, API de integração",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "847",
    bestRating: "5",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Preços", item: `${SITE_URL}/precos` },
  ],
};

export default function PrecosPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen pt-16">
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
