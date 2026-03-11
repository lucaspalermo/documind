import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTemplatesByCategory } from "@/data/templates";
import { TEMPLATE_CATEGORIES } from "@/lib/constants";
import { SITE_NAME, SITE_URL } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TemplateGrid } from "@/components/modelos/template-grid";

interface Props {
  params: Promise<{ categoria: string }>;
}

const CATEGORY_META: Record<
  string,
  { title: string; h1Prefix: string; h1Highlight: string; description: string }
> = {
  imobiliario: {
    title: "Modelos de Contratos Imobili\u00e1rios 2026 - Gr\u00e1tis | Documind",
    h1Prefix: "Modelos de Contratos ",
    h1Highlight: "Imobili\u00e1rios",
    description:
      "Modelos gratuitos de contratos imobili\u00e1rios: aluguel residencial, compra e venda, comodato e distrato. Personalize com IA e baixe em PDF.",
  },
  comercial: {
    title: "Modelos de Contratos Comerciais 2026 - Gr\u00e1tis | Documind",
    h1Prefix: "Modelos de Contratos ",
    h1Highlight: "Comerciais",
    description:
      "Modelos gratuitos de contratos comerciais: presta\u00e7\u00e3o de servi\u00e7o, parceria, NDA e propostas. Personalize com IA e baixe em PDF.",
  },
  trabalhista: {
    title: "Modelos de Contratos Trabalhistas 2026 - Gr\u00e1tis | Documind",
    h1Prefix: "Modelos de Contratos ",
    h1Highlight: "Trabalhistas",
    description:
      "Modelos gratuitos de contratos trabalhistas: CLT, est\u00e1gio, rescis\u00e3o e trabalho remoto. Personalize com IA e baixe em PDF.",
  },
  pessoal: {
    title: "Modelos de Documentos Pessoais 2026 - Gr\u00e1tis | Documind",
    h1Prefix: "Modelos de Documentos ",
    h1Highlight: "Pessoais",
    description:
      "Modelos gratuitos de documentos pessoais: procura\u00e7\u00f5es, recibos, declara\u00e7\u00f5es e termos. Personalize com IA e baixe em PDF.",
  },
};

const VALID_CATEGORIES = TEMPLATE_CATEGORIES.map((c) => c.slug);

export function generateStaticParams() {
  return VALID_CATEGORIES.map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const meta = CATEGORY_META[categoria];
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${SITE_URL}/modelos/categoria/${categoria}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      siteName: SITE_NAME,
    },
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;

  if (!VALID_CATEGORIES.includes(categoria as typeof VALID_CATEGORIES[number])) {
    notFound();
  }

  const meta = CATEGORY_META[categoria]!;
  const templates = getTemplatesByCategory(categoria);
  const categoryInfo = TEMPLATE_CATEGORIES.find((c) => c.slug === categoria)!;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "In\u00edcio", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Modelos",
        item: `${SITE_URL}/modelos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryInfo.name,
        item: `${SITE_URL}/modelos/categoria/${categoria}`,
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="bg-hero bg-grid py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
              {meta.h1Prefix}
              <span className="text-gradient">{meta.h1Highlight}</span>
            </h1>
            <p className="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
              {categoryInfo.description}. Personalize com intelig{"\u00ea"}ncia
              artificial e baixe em PDF.
            </p>
          </div>
        </section>

        {/* Template Grid */}
        <TemplateGrid templates={templates} categories={TEMPLATE_CATEGORIES} />
      </main>
      <Footer />
    </>
  );
}
