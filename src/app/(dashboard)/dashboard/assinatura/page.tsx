"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { Check, X, Sparkles, Zap, Building2, Crown, ArrowRight, CreditCard, QrCode, FileText, AlertTriangle, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PLANS } from "@/lib/constants";

const planIcons: Record<string, React.ElementType> = {
  FREE: Sparkles,
  PRO: Zap,
  BUSINESS: Building2,
  ENTERPRISE: Crown,
};

const billingOptions = [
  { key: "PIX" as const, label: "PIX", icon: QrCode, description: "Aprovação instantânea" },
  { key: "CREDIT_CARD" as const, label: "Cartão de Crédito", icon: CreditCard, description: "Recorrência automática" },
  { key: "BOLETO" as const, label: "Boleto", icon: FileText, description: "Vencimento em 3 dias" },
];

function formatCPF(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

export default function AssinaturaPage() {
  const { data: session } = useSession();
  const currentPlan = (session?.user as any)?.plan || "FREE";
  const [loading, setLoading] = useState<string | null>(null);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [selectedBilling, setSelectedBilling] = useState<"PIX" | "CREDIT_CARD" | "BOLETO">("PIX");
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");

  // PIX QR Code modal state
  const [pixData, setPixData] = useState<{ qrCode: string; copyPaste: string } | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleUpgrade(planKey: string) {
    setError("");

    // Validate CPF
    const cpfDigits = cpf.replace(/\D/g, "");
    if (cpfDigits.length !== 11) {
      setError("Informe um CPF válido com 11 dígitos.");
      return;
    }

    setLoading(planKey);
    try {
      const res = await fetch("/api/asaas/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planKey, billingType: selectedBilling, cpf: cpfDigits }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao processar pagamento.");
        return;
      }

      // Handle response based on payment type
      if (data.paymentType === "PIX" && data.pixQrCode) {
        setPixData({
          qrCode: data.pixQrCode,
          copyPaste: data.pixCopyPaste,
        });
      } else if (data.invoiceUrl) {
        window.open(data.invoiceUrl, "_blank");
      } else {
        setError("Assinatura criada. Aguarde a geração do pagamento.");
      }
    } catch {
      setError("Erro ao processar. Tente novamente.");
    } finally {
      setLoading(null);
    }
  }

  async function handleCancel() {
    setCancelLoading(true);
    try {
      const res = await fetch("/api/asaas/cancel", {
        method: "POST",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Assinatura cancelada com sucesso. Seu plano volta ao Grátis.");
        window.location.reload();
      } else {
        alert(data.error || "Erro ao cancelar. Entre em contato com o suporte.");
      }
    } catch {
      alert("Erro ao cancelar. Tente novamente.");
    } finally {
      setCancelLoading(false);
      setShowCancelConfirm(false);
    }
  }

  function copyPixCode() {
    if (pixData?.copyPaste) {
      navigator.clipboard.writeText(pixData.copyPaste);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
          Assinatura
        </h1>
        <p className="mt-1 text-surface-500">
          Gerencie seu plano e método de pagamento.
        </p>
      </div>

      {/* PIX QR Code Modal */}
      {pixData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-lg font-bold text-surface-900 text-center mb-4">
              Pague com PIX
            </h3>
            <div className="flex justify-center mb-4">
              <img
                src={`data:image/png;base64,${pixData.qrCode}`}
                alt="QR Code PIX"
                className="w-56 h-56 rounded-xl"
              />
            </div>
            <p className="text-xs text-surface-500 text-center mb-3">
              Escaneie o QR Code com o app do seu banco ou copie o código abaixo:
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                readOnly
                value={pixData.copyPaste}
                className="flex-1 text-xs px-3 py-2 rounded-lg border border-surface-200 bg-surface-50 text-surface-700 truncate"
              />
              <button
                onClick={copyPixCode}
                className="px-3 py-2 rounded-lg bg-primary-600 text-white text-xs font-semibold hover:bg-primary-700 transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copied ? <CheckCircle className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="w-full"
              onClick={() => { setPixData(null); window.location.reload(); }}
            >
              Fechar
            </Button>
          </div>
        </div>
      )}

      {/* Current Plan */}
      <div className="p-6 rounded-2xl bg-white border border-surface-200 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-surface-500">Plano atual</p>
            <p className="text-xl font-bold text-surface-900 mt-1">
              {PLANS[currentPlan as keyof typeof PLANS]?.name || currentPlan}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant={currentPlan === "FREE" ? "default" : "primary"}
              size="md"
            >
              {currentPlan === "FREE" ? "Gratuito" : "Ativo"}
            </Badge>
            {currentPlan !== "FREE" && (
              <button
                onClick={() => setShowCancelConfirm(true)}
                className="text-xs text-surface-400 hover:text-red-500 underline transition-colors cursor-pointer"
              >
                Cancelar assinatura
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Cancel Confirmation */}
      {showCancelConfirm && (
        <div className="p-5 rounded-2xl bg-red-50 border border-red-200 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-red-800">Tem certeza que deseja cancelar?</h3>
              <p className="text-sm text-red-600 mt-1">
                Ao cancelar, seu plano voltará ao Grátis (3 documentos/mês). Documentos já gerados serão mantidos.
              </p>
              <div className="flex gap-3 mt-4">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setShowCancelConfirm(false)}
                >
                  Manter plano
                </Button>
                <button
                  onClick={handleCancel}
                  disabled={cancelLoading}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-red-600 border border-red-300 hover:bg-red-100 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {cancelLoading ? "Cancelando..." : "Sim, cancelar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-sm text-red-600 mb-8">
          {error}
        </div>
      )}

      {/* Payment Method & CPF */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-surface-700 mb-3">Método de pagamento</h2>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {billingOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedBilling === option.key;
            return (
              <button
                key={option.key}
                onClick={() => setSelectedBilling(option.key)}
                className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-primary-500 bg-primary-50"
                    : "border-surface-200 bg-white hover:border-surface-300"
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isSelected ? "text-primary-600" : "text-surface-400"}`} />
                <p className={`text-sm font-semibold ${isSelected ? "text-primary-700" : "text-surface-700"}`}>
                  {option.label}
                </p>
                <p className="text-xs text-surface-400 mt-0.5">{option.description}</p>
              </button>
            );
          })}
        </div>

        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">
            CPF <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(formatCPF(e.target.value))}
            placeholder="000.000.000-00"
            maxLength={14}
            className="w-full max-w-xs px-4 py-3 rounded-xl border-2 border-surface-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none text-surface-900 placeholder:text-surface-400 transition-all"
          />
          <p className="mt-1 text-xs text-surface-400">
            Necessário para emissão da cobrança.
          </p>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {(Object.entries(PLANS) as [string, (typeof PLANS)[keyof typeof PLANS]][]).map(([key, plan]) => {
          const Icon = planIcons[key] || Sparkles;
          const isCurrentPlan = key === currentPlan;
          const isPro = key === "PRO";

          return (
            <div
              key={key}
              className={`relative rounded-2xl p-5 ${
                isPro
                  ? "border-2 border-primary-500 bg-white shadow-lg"
                  : "border border-surface-200 bg-white"
              } ${isCurrentPlan ? "ring-2 ring-cta-500 ring-offset-2" : ""}`}
            >
              {isPro && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" size="sm">Mais popular</Badge>
                </div>
              )}
              {isCurrentPlan && (
                <div className="absolute -top-3 right-4">
                  <Badge variant="cta" size="sm">Seu plano</Badge>
                </div>
              )}

              <Icon className={`w-6 h-6 mb-3 ${isPro ? "text-primary-600" : "text-surface-400"}`} />
              <h3 className="text-base font-bold text-surface-900">{plan.name}</h3>

              <div className="mt-2 mb-4">
                {plan.price === 0 ? (
                  <span className="text-2xl font-bold text-surface-900">Grátis</span>
                ) : (
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-xs text-surface-400">R$</span>
                    <span className="text-2xl font-bold text-surface-900">
                      {plan.price.toFixed(2).replace(".", ",")}
                    </span>
                    <span className="text-xs text-surface-400">/mês</span>
                  </div>
                )}
              </div>

              {isCurrentPlan ? (
                <Button variant="secondary" size="sm" className="w-full" disabled>
                  Plano atual
                </Button>
              ) : plan.price === 0 ? (
                <Button variant="ghost" size="sm" className="w-full" disabled>
                  —
                </Button>
              ) : (
                <Button
                  variant={isPro ? "cta" : "primary"}
                  size="sm"
                  className="w-full"
                  loading={loading === key}
                  onClick={() => handleUpgrade(key)}
                >
                  Assinar
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              )}

              <ul className="mt-4 space-y-2">
                {plan.features.slice(0, 5).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-surface-600">
                    <Check className="w-3.5 h-3.5 text-cta-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
                {plan.notIncluded.slice(0, 2).map((f, i) => (
                  <li key={`no-${i}`} className="flex items-start gap-2 text-xs text-surface-400 opacity-50">
                    <X className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span className="line-through">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
