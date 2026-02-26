import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const documents = await prisma.document.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        type: true,
        category: true,
        content: true,
        generatedContent: true,
        status: true,
        createdAt: true,
      },
    });

    return NextResponse.json(documents);
  } catch {
    return NextResponse.json(
      { error: "Erro ao buscar documentos" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID do documento é obrigatório" }, { status: 400 });
    }

    // Verify the document belongs to the user
    const document = await prisma.document.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!document) {
      return NextResponse.json({ error: "Documento não encontrado" }, { status: 404 });
    }

    await prisma.document.delete({ where: { id } });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao excluir documento" },
      { status: 500 }
    );
  }
}
