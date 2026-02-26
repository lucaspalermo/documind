import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_TEMPLATES, getTemplateBySlug } from "@/data/templates";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TemplatePage } from "@/components/modelos/template-page";
import { SITE_NAME, SITE_URL } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_TEMPLATES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return {};

  return {
    title: template.metaTitle,
    description: template.metaDescription,
    keywords: template.keywords,
    alternates: {
      canonical: `${SITE_URL}/modelos/${template.slug}`,
    },
    openGraph: {
      title: template.metaTitle,
      description: template.metaDescription,
      type: "article",
    },
  };
}

export default async function ModeloPage({ params }: Props) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const relatedTemplates = template.relatedSlugs
    .map((s) => getTemplateBySlug(s))
    .filter(Boolean) as typeof ALL_TEMPLATES;

  const categoryNames: Record<string, string> = {
    imobiliario: "Imobiliário",
    comercial: "Comercial",
    trabalhista: "Trabalhista",
    pessoal: "Pessoal",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Modelos", item: `${SITE_URL}/modelos` },
      { "@type": "ListItem", position: 3, name: template.title, item: `${SITE_URL}/modelos/${template.slug}` },
    ],
  };

  const faqJsonLd = template.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: template.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: template.title,
    description: template.metaDescription,
    category: categoryNames[template.category] || template.category,
    brand: { "@type": "Organization", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      price: template.isPremium ? "39.90" : "0",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <main className="min-h-screen pt-16">
        <TemplatePage template={template} relatedTemplates={relatedTemplates} />
      </main>
      <Footer />
    </>
  );
}
