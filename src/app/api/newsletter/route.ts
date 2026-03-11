import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (existing) {
      return NextResponse.json({ message: "Você já está inscrito!" });
    }

    await prisma.newsletterSubscriber.create({
      data: { email: email.toLowerCase().trim() },
    });

    return NextResponse.json({ message: "Inscrito com sucesso!" });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Erro ao inscrever" }, { status: 500 });
  }
}
