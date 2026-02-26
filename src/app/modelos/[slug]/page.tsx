import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_TEMPLATES, getTemplateBySlug } from "@/data/templates";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TemplatePage } from "@/components/modelos/template-page";

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

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <TemplatePage template={template} relatedTemplates={relatedTemplates} />
      </main>
      <Footer />
    </>
  );
}
