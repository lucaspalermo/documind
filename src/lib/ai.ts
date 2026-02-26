import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function generateDocument(
  templateTitle: string,
  formData: Record<string, string>
): Promise<string> {
  const fieldsSummary = Object.entries(formData)
    .filter(([, value]) => value?.trim())
    .map(([key, value]) => `- ${key.replace(/_/g, " ")}: ${value}`)
    .join("\n");

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `Você é um advogado brasileiro especialista em redação de documentos jurídicos. Gere um documento profissional do tipo "${templateTitle}" com base nos dados fornecidos.

DADOS FORNECIDOS:
${fieldsSummary}

INSTRUÇÕES:
1. Use linguagem jurídica formal e profissional em português brasileiro
2. Inclua todas as cláusulas essenciais para este tipo de documento
3. Preencha automaticamente os dados fornecidos nos campos apropriados
4. Adicione cláusulas de proteção para ambas as partes
5. Inclua local e data para assinatura
6. Use numeração romana para as cláusulas principais
7. O documento deve estar pronto para impressão e assinatura
8. NÃO inclua notas ou comentários do assistente, apenas o documento em si
9. Formate com quebras de linha claras entre seções

Gere o documento completo:`,
      },
    ],
  });

  const textBlock = response.content.find((block) => block.type === "text");
  return textBlock?.text || "Erro ao gerar documento.";
}
