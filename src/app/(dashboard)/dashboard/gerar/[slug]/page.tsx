"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getTemplateBySlug } from "@/data/templates";
import {
  ArrowLeft,
  ArrowRight,
  Wand2,
  Download,
  Loader2,
  Check,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GerarDocumentoPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const template = getTemplateBySlug(slug);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [generating, setGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [error, setError] = useState("");

  if (!template) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <FileText className="w-12 h-12 text-surface-300 mx-auto mb-4" />
        <h1 className="text-xl font-bold text-surface-900 mb-2">Modelo não encontrado</h1>
        <Button variant="primary" size="md" href="/dashboard/gerar">
          Voltar para modelos
        </Button>
      </div>
    );
  }

  const sections = template.sections;
  const totalSteps = sections.length;
  const currentSection = sections[currentStep];
  const isLastStep = currentStep === totalSteps - 1;

  function updateField(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validateCurrentStep(): boolean {
    const requiredFields = currentSection.fields.filter((f) => f.required);
    for (const field of requiredFields) {
      if (!formData[field.name]?.trim()) {
        setError(`O campo "${field.label}" é obrigatório`);
        return false;
      }
    }
    setError("");
    return true;
  }

  function nextStep() {
    if (!validateCurrentStep()) return;
    if (isLastStep) {
      generateDocument();
    } else {
      setCurrentStep((s) => s + 1);
    }
  }

  async function generateDocument() {
    setGenerating(true);
    setError("");

    try {
      const res = await fetch("/api/gerar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateSlug: template!.slug,
          templateTitle: template!.title,
          formData,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao gerar documento");
        setGenerating(false);
        return;
      }

      setGeneratedContent(data.content);
    } catch {
      setError("Erro ao gerar documento. Tente novamente.");
    } finally {
      setGenerating(false);
    }
  }

  async function downloadPDF() {
    if (!generatedContent) return;

    try {
      const res = await fetch("/api/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: template!.title,
          content: generatedContent,
        }),
      });

      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${template!.slug}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch {
      setError("Erro ao baixar PDF");
    }
  }

  // Generated content view
  if (generatedContent) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-surface-900 font-[family-name:var(--font-jakarta)]">
            {template.shortTitle}
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" size="md" onClick={() => { setGeneratedContent(null); setCurrentStep(0); }}>
              <ArrowLeft className="w-4 h-4" />
              Refazer
            </Button>
            <Button variant="cta" size="md" onClick={downloadPDF}>
              <Download className="w-4 h-4" />
              Baixar PDF
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-surface-200 shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-2 mb-6">
            <Check className="w-5 h-5 text-cta-500" />
            <span className="text-sm font-semibold text-cta-600">
              Documento gerado com sucesso!
            </span>
          </div>
          <div className="prose prose-slate max-w-none whitespace-pre-wrap text-surface-800 leading-relaxed">
            {generatedContent}
          </div>
        </div>
      </div>
    );
  }

  // Generating state
  if (generating) {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6">
          <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
        </div>
        <h2 className="text-xl font-bold text-surface-900 font-[family-name:var(--font-jakarta)] mb-2">
          Gerando seu documento...
        </h2>
        <p className="text-surface-500">
          Nossa IA está criando um documento personalizado com seus dados.
          Aguarde alguns segundos.
        </p>
      </div>
    );
  }

  // Step form
  return (
    <div className="max-w-2xl mx-auto">
      {/* Back link */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1.5 text-sm text-surface-500 hover:text-surface-900 mb-6 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </button>

      {/* Header */}
      <h1 className="text-xl font-bold text-surface-900 font-[family-name:var(--font-jakarta)] mb-1">
        {template.shortTitle}
      </h1>
      <p className="text-surface-500 text-sm mb-6">
        Preencha os dados para gerar seu documento personalizado.
      </p>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {sections.map((_, i) => (
          <div key={i} className="flex-1 flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                i < currentStep
                  ? "bg-cta-500 text-white"
                  : i === currentStep
                  ? "bg-primary-600 text-white"
                  : "bg-surface-200 text-surface-400"
              }`}
            >
              {i < currentStep ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div
                className={`flex-1 h-0.5 ${
                  i < currentStep ? "bg-cta-500" : "bg-surface-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-white rounded-2xl border border-surface-200 p-6">
        <h2 className="text-lg font-bold text-surface-900 mb-5">
          {currentSection.title}
        </h2>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600 mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {currentSection.fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-surface-700 mb-1.5">
                {field.label}
                {field.required && <span className="text-danger-500 ml-0.5">*</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  value={formData[field.name] || ""}
                  onChange={(e) => updateField(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-surface-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none text-surface-900 placeholder:text-surface-400 transition-all resize-none"
                />
              ) : field.type === "select" ? (
                <select
                  value={formData[field.name] || ""}
                  onChange={(e) => updateField(field.name, e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-surface-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none text-surface-900 transition-all bg-white cursor-pointer"
                >
                  <option value="">Selecione...</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type === "currency" || field.type === "number" ? "text" : field.type === "cpf" || field.type === "cnpj" || field.type === "phone" ? "text" : field.type}
                  value={formData[field.name] || ""}
                  onChange={(e) => updateField(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl border-2 border-surface-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none text-surface-900 placeholder:text-surface-400 transition-all"
                />
              )}

              {field.helperText && (
                <p className="mt-1 text-xs text-surface-400">{field.helperText}</p>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-surface-100">
          <Button
            variant="ghost"
            size="md"
            onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>

          <Button variant={isLastStep ? "cta" : "primary"} size="md" onClick={nextStep}>
            {isLastStep ? (
              <>
                <Wand2 className="w-4 h-4" />
                Gerar com IA
              </>
            ) : (
              <>
                Próximo
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
