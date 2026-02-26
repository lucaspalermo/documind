"use client";

import { useState, useEffect } from "react";
import { FileText, Download, Trash2, Clock, Check, Edit3, FilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Document {
  id: string;
  title: string;
  type: string;
  category: string;
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

  useEffect(() => {
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
    fetchDocs();
  }, []);

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
                  <button className="p-2 rounded-lg hover:bg-surface-100 transition-colors cursor-pointer">
                    <Download className="w-4 h-4 text-surface-400" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 transition-colors cursor-pointer">
                    <Trash2 className="w-4 h-4 text-surface-400 hover:text-red-500" />
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
