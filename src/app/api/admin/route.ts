import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function isAdmin() {
  const session = await auth();
  if (!session?.user?.id) return false;
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  });
  return user?.role === "ADMIN";
}

// GET /api/admin — dashboard stats + user list
export async function GET(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const resource = searchParams.get("resource");

  if (resource === "users") {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        plan: true,
        documentsUsed: true,
        createdAt: true,
        _count: { select: { documents: true } },
      },
    });
    return NextResponse.json(users);
  }

  if (resource === "documents") {
    const documents = await prisma.document.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        title: true,
        type: true,
        category: true,
        status: true,
        createdAt: true,
        user: { select: { name: true, email: true } },
      },
    });
    return NextResponse.json(documents);
  }

  // Default: stats
  const [totalUsers, totalDocuments, proUsers, freeUsers] = await Promise.all([
    prisma.user.count(),
    prisma.document.count(),
    prisma.user.count({ where: { plan: { not: "FREE" } } }),
    prisma.user.count({ where: { plan: "FREE" } }),
  ]);

  // Recent signups (last 7 days)
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const recentSignups = await prisma.user.count({
    where: { createdAt: { gte: weekAgo } },
  });

  // Recent documents (last 7 days)
  const recentDocs = await prisma.document.count({
    where: { createdAt: { gte: weekAgo } },
  });

  return NextResponse.json({
    totalUsers,
    totalDocuments,
    proUsers,
    freeUsers,
    recentSignups,
    recentDocs,
  });
}

// DELETE /api/admin?resource=users&id=xxx — delete user
export async function DELETE(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const resource = searchParams.get("resource");
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID obrigatório" }, { status: 400 });
  }

  if (resource === "users") {
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  }

  if (resource === "documents") {
    await prisma.document.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Resource inválido" }, { status: 400 });
}

// PATCH /api/admin — update user plan/role
export async function PATCH(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
  }

  const { id, plan, role } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "ID obrigatório" }, { status: 400 });
  }

  const data: Record<string, string> = {};
  if (plan) data.plan = plan;
  if (role) data.role = role;

  const user = await prisma.user.update({
    where: { id },
    data,
  });

  return NextResponse.json({ ok: true, plan: user.plan, role: user.role });
}
