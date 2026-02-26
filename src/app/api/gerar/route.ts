import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateDocument } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { templateSlug, templateTitle, formData } = await req.json();

    if (!templateSlug || !formData) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    // Check usage limits for FREE users
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { plan: true, documentsUsed: true, documentsResetAt: true },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    // Reset monthly counter if needed
    const now = new Date();
    const resetAt = user.documentsResetAt;
    if (!resetAt || now.getMonth() !== resetAt.getMonth() || now.getFullYear() !== resetAt.getFullYear()) {
      await prisma.user.update({
        where: { id: session.user.id },
        data: { documentsUsed: 0, documentsResetAt: now },
      });
      user.documentsUsed = 0;
    }

    // Check limits for FREE plan
    if (user.plan === "FREE" && user.documentsUsed >= 3) {
      return NextResponse.json(
        { error: "Limite de documentos atingido. Faça upgrade para o plano PRO para documentos ilimitados." },
        { status: 403 }
      );
    }

    // Generate document with AI
    const content = await generateDocument(templateTitle, formData);

    // Save to database
    const document = await prisma.document.create({
      data: {
        title: templateTitle,
        type: templateSlug,
        category: templateSlug.includes("aluguel") || templateSlug.includes("imovel") || templateSlug.includes("vistoria") || templateSlug.includes("distrato-de-locacao")
          ? "imobiliario"
          : templateSlug.includes("servico") || templateSlug.includes("freelancer") || templateSlug.includes("parceria") || templateSlug.includes("nda") || templateSlug.includes("orcamento")
          ? "comercial"
          : templateSlug.includes("clt") || templateSlug.includes("estagio") || templateSlug.includes("rescisao") || templateSlug.includes("home-office")
          ? "trabalhista"
          : "pessoal",
        content: formData,
        status: "COMPLETED",
        userId: session.user.id,
      },
    });

    // Increment usage
    await prisma.user.update({
      where: { id: session.user.id },
      data: { documentsUsed: { increment: 1 } },
    });

    return NextResponse.json({
      id: document.id,
      content,
    });
  } catch (error) {
    console.error("Error generating document:", error);
    return NextResponse.json(
      { error: "Erro ao gerar documento. Tente novamente." },
      { status: 500 }
    );
  }
}
