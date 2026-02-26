"use client";

import { useState, useEffect } from "react";
import { FileText, Download, Trash2, Clock, Check, Edit3, FilePlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Document {
  id: string;
  title: string;
  type: string;
  category: string;
  content: Record<string, string>;
  generatedContent: string | null;
  status: string;
  createdAt: string;
}

const statusConfig: Record<string, { label: string; variant: "default" | "primary" | "cta"; icon: React.ElementType }> = {
  DRAFT: { label: "Rascunho", variant: "default", icon: Edit3 },
  COMPLETED: { label: "Concluído", variant: "cta", icon: Check },
  SIGNED: { label: "Assinado", variant: "primary", icon: FileText },
};

export default function DocumentosPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    fetchDocs();
  }, []);

  async function fetchDocs() {
    try {
      const res = await fetch("/api/documentos");
      if (res.ok) {
        const data = await res.json();
        setDocuments(data);
      }
    } catch {
      // Will be empty on first load
    } finally {
      setLoading(false);
    }
  }

  async function handleDownload(doc: Document) {
    setDownloadingId(doc.id);
    try {
      // Use AI-generated content if available, fallback to form data
      const pdfContent = doc.generatedContent
        ? doc.generatedContent
        : typeof doc.content === "string"
          ? doc.content
          : Object.entries(doc.content)
              .map(([key, value]) => `${key.replace(/_/g, " ")}: ${value}`)
              .join("\n");

      const res = await fetch("/api/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: doc.title,
          content: pdfContent,
        }),
      });

      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${doc.type || "documento"}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch {
      alert("Erro ao baixar PDF. Tente novamente.");
    } finally {
      setDownloadingId(null);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Tem certeza que deseja excluir este documento?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/documentos?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setDocuments((prev) => prev.filter((d) => d.id !== id));
      } else {
        alert("Erro ao excluir documento.");
      }
    } catch {
      alert("Erro ao excluir documento.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
            Meus Documentos
          </h1>
          <p className="mt-1 text-surface-500">
            Todos os documentos que você gerou.
          </p>
        </div>
        <Button variant="cta" size="md" href="/dashboard/gerar">
          <FilePlus className="w-4 h-4" />
          Novo documento
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-16">
          <div className="animate-spin w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-surface-500">Carregando documentos...</p>
        </div>
      ) : documents.length > 0 ? (
        <div className="space-y-3">
          {documents.map((doc) => {
            const status = statusConfig[doc.status] || statusConfig.DRAFT;
            const StatusIcon = status.icon;

            return (
              <div
                key={doc.id}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-surface-200/60 hover:border-primary-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-surface-900 truncate">
                    {doc.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-surface-400">{doc.category}</span>
                    <span className="text-surface-300">·</span>
                    <span className="text-xs text-surface-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(doc.createdAt).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                </div>
                <Badge variant={status.variant} size="sm">
                  <StatusIcon className="w-3 h-3 mr-1" />
                  {status.label}
                </Badge>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleDownload(doc)}
                    disabled={downloadingId === doc.id}
                    className="p-2 rounded-lg hover:bg-surface-100 transition-colors cursor-pointer disabled:opacity-50"
                    title="Baixar PDF"
                  >
                    {downloadingId === doc.id ? (
                      <Loader2 className="w-4 h-4 text-primary-600 animate-spin" />
                    ) : (
                      <Download className="w-4 h-4 text-surface-400" />
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    disabled={deletingId === doc.id}
                    className="p-2 rounded-lg hover:bg-red-50 transition-colors cursor-pointer disabled:opacity-50"
                    title="Excluir documento"
                  >
                    {deletingId === doc.id ? (
                      <Loader2 className="w-4 h-4 text-red-500 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4 text-surface-400 hover:text-red-500" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-surface-200/60">
          <FileText className="w-12 h-12 text-surface-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-surface-900 mb-2">
            Nenhum documento ainda
          </h3>
          <p className="text-surface-500 mb-6 max-w-sm mx-auto">
            Comece gerando seu primeiro documento com inteligência artificial.
          </p>
          <Button variant="cta" size="md" href="/dashboard/gerar">
            <FilePlus className="w-4 h-4" />
            Gerar primeiro documento
          </Button>
        </div>
      )}
    </div>
  );
}
