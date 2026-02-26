"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "Os contratos gerados têm validade jurídica?",
    answer:
      "Sim. Nossos modelos seguem as normas do Código Civil Brasileiro e são juridicamente válidos quando assinados por ambas as partes. Recomendamos que, para situações complexas, um advogado revise o documento.",
  },
  {
    question: "Quantos documentos posso gerar gratuitamente?",
    answer:
      "No plano gratuito, você pode gerar até 3 documentos por mês. Isso inclui contratos, recibos, procurações e qualquer outro modelo disponível na plataforma.",
  },
  {
    question: "Como a inteligência artificial personaliza o documento?",
    answer:
      "Nossa IA analisa os dados que você fornece (nomes, endereços, valores, prazos) e gera cláusulas personalizadas e contextualmente relevantes. Ela adapta a linguagem e os termos para cada situação específica.",
  },
  {
    question: "Posso editar o documento depois de gerado?",
    answer:
      "Sim! Após a geração com IA, você pode editar qualquer parte do documento antes de baixar o PDF final. Adicione, remova ou modifique cláusulas livremente.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos PIX (com desconto), cartão de crédito e boleto bancário. Para planos anuais, oferecemos até 20% de desconto.",
  },
  {
    question: "Meus dados ficam seguros?",
    answer:
      "Sim. Seguimos todas as diretrizes da LGPD (Lei Geral de Proteção de Dados). Seus dados são criptografados e não compartilhamos informações pessoais com terceiros. Você pode solicitar a exclusão dos seus dados a qualquer momento.",
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer:
      "Sim. Não temos fidelidade nem multa de cancelamento. Você pode cancelar diretamente pelo painel e continuar usando até o fim do período pago.",
  },
  {
    question: "Os modelos são atualizados com mudanças na legislação?",
    answer:
      "Sim. Nossa equipe jurídica monitora mudanças na legislação brasileira e atualiza os modelos automaticamente. Você sempre terá acesso à versão mais recente.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-section-alt relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-surface-500">
            Tire suas dúvidas sobre o Documind
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-surface-200/60 overflow-hidden transition-all duration-200 hover:border-primary-200"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="text-base font-semibold text-surface-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-surface-400 flex-shrink-0 transition-transform duration-200",
                    open === i && "rotate-180 text-primary-600"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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

    </section>
  );
}
