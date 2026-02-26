import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateDocument } from "@/lib/ai";
import { getTemplateBySlug } from "@/data/templates";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { templateSlug, formData } = await req.json();

    if (!templateSlug || !formData) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    // Look up template server-side (don't trust client-provided title)
    const template = getTemplateBySlug(templateSlug);
    if (!template) {
      return NextResponse.json({ error: "Modelo não encontrado" }, { status: 404 });
    }

    // Check usage limits for FREE users
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { plan: true, documentsUsed: true, documentsResetAt: true },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    // Check premium template access
    if (template.isPremium && user.plan === "FREE") {
      return NextResponse.json(
        { error: "Este modelo é exclusivo para assinantes. Faça upgrade para o plano Pro." },
        { status: 403 }
      );
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
        { error: "Limite de documentos atingido. Faça upgrade para o plano Pro para documentos ilimitados." },
        { status: 403 }
      );
    }

    // Generate document with AI
    const content = await generateDocument(template.title, formData);

    // Save to database with generated content
    const document = await prisma.document.create({
      data: {
        title: template.title,
        type: templateSlug,
        category: template.category,
        content: formData,
        generatedContent: content,
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
