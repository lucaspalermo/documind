"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Inscrito com sucesso!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Erro ao inscrever");
      }
    } catch {
      setStatus("error");
      setMessage("Erro ao inscrever. Tente novamente.");
    }
  }

  return (
    <section className="bg-surface-900 border-t border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Receba modelos e dicas jurídicas grátis
              </h3>
              <p className="text-sm text-surface-400">
                Novos modelos, atualizações legais e guias práticos toda semana. Sem spam.
              </p>
            </div>
          </div>

          {status === "success" ? (
            <div className="flex items-center gap-2 text-cta-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-surface-800 border border-surface-700 text-white placeholder:text-surface-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-sm"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status === "loading" ? "..." : "Inscrever"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
        {status === "error" && (
          <p className="text-xs text-red-400 mt-2 text-right">{message}</p>
        )}
      </div>
    </section>
  );
}
