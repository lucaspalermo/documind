"use client";

import { useState } from "react";
import {
  FileText,
  ArrowRight,
  Clock,
  Download,
  Shield,
  ChevronDown,
  ChevronRight,
  Lock,
  Building2,
  Briefcase,
  Users,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Template } from "@/data/templates";

const iconMap: Record<string, React.ElementType> = {
  imobiliario: Building2,
  comercial: Briefcase,
  trabalhista: Users,
  pessoal: FileCheck,
};

interface Props {
  template: Template;
  relatedTemplates: Template[];
}

export function TemplatePage({ template, relatedTemplates }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const CategoryIcon = iconMap[template.category] || FileText;

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="bg-surface-50 border-b border-surface-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-surface-400">
            <li>
              <a href="/" className="hover:text-primary-600 transition-colors">Início</a>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li>
              <a href="/modelos" className="hover:text-primary-600 transition-colors">Modelos</a>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-surface-700 font-medium truncate">{template.shortTitle}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-hero bg-grid py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="primary" size="md">
                <CategoryIcon className="w-3.5 h-3.5 mr-1" />
                {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
              </Badge>
              {template.isPremium ? (
                <Badge variant="upgrade" size="md">
                  <Lock className="w-3.5 h-3.5 mr-1" />
                  PRO
                </Badge>
              ) : (
                <Badge variant="cta" size="md">
                  Grátis
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)] leading-tight">
              {template.title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-lg text-surface-500 leading-relaxed">
              {template.description}
            </p>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm text-surface-500">
                <Clock className="w-4 h-4 text-cta-500" />
                Pronto em 30 segundos
              </div>
              <div className="flex items-center gap-1.5 text-sm text-surface-500">
                <Download className="w-4 h-4 text-cta-500" />
                Download em PDF
              </div>
              <div className="flex items-center gap-1.5 text-sm text-surface-500">
                <Shield className="w-4 h-4 text-cta-500" />
                LGPD compliant
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" href="/registro">
                Personalizar este documento
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" href="/modelos">
                Ver outros modelos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-surface-900 font-[family-name:var(--font-jakarta)] mb-4">
                Sobre este documento
              </h2>
              <p className="text-surface-600 leading-relaxed text-base">
                {template.longDescription}
              </p>

              {/* Fields Preview */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-surface-900 font-[family-name:var(--font-jakarta)] mb-6">
                  Campos do documento
                </h2>
                <div className="space-y-6">
                  {template.sections.map((section, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-surface-50 border border-surface-200/60">
                      <h3 className="text-base font-bold text-surface-900 mb-3">
                        {section.title}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {section.fields.map((field, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-surface-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                            {field.label}
                            {field.required && (
                              <span className="text-danger-500 text-xs">*</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {template.faq.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-surface-900 font-[family-name:var(--font-jakarta)] mb-6">
                    Perguntas frequentes
                  </h2>
                  <div className="space-y-3">
                    {template.faq.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl border border-surface-200/60 overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                        >
                          <span className="text-base font-semibold text-surface-900 pr-4">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-surface-400 flex-shrink-0 transition-transform duration-200",
                              openFaq === i && "rotate-180 text-primary-600"
                            )}
                          />
                        </button>
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-300",
                            openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                          <p className="px-5 pb-5 text-surface-500 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Sticky CTA card */}
              <div className="sticky top-24">
                <div className="p-6 rounded-2xl bg-white border border-surface-200 shadow-lg shadow-surface-900/5">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
                    <FileText className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-surface-900 mb-2">
                    Pronto para criar?
                  </h3>
                  <p className="text-sm text-surface-500 mb-6">
                    Personalize este modelo com IA e baixe seu documento profissional em PDF.
                  </p>
                  <Button variant="cta" size="lg" className="w-full mb-3" href="/registro">
                    Criar documento
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <p className="text-xs text-surface-400 text-center">
                    {template.isPremium
                      ? "Requer plano PRO"
                      : "3 documentos grátis por mês"}
                  </p>
                </div>

                {/* Related Templates */}
                {relatedTemplates.length > 0 && (
                  <div className="mt-6 p-6 rounded-2xl bg-surface-50 border border-surface-200/60">
                    <h3 className="text-base font-bold text-surface-900 mb-4">
                      Modelos relacionados
                    </h3>
                    <div className="space-y-3">
                      {relatedTemplates.map((related) => (
                        <a
                          key={related.slug}
                          href={`/modelos/${related.slug}`}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white border border-surface-200 flex items-center justify-center flex-shrink-0 group-hover:border-primary-300 transition-colors">
                            <FileText className="w-4 h-4 text-surface-400 group-hover:text-primary-600 transition-colors" />
                          </div>
                          <span className="text-sm text-surface-600 group-hover:text-primary-700 transition-colors font-medium">
                            {related.shortTitle}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: template.title,
            description: template.description,
            ...(template.faq.length > 0 && {
              mainEntity: template.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }),
        }}
      />
    </>
  );
}
