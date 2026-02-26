"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Users,
  FileText,
  TrendingUp,
  Crown,
  Trash2,
  Shield,
  Loader2,
  ArrowRight,
  UserPlus,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Stats {
  totalUsers: number;
  totalDocuments: number;
  proUsers: number;
  freeUsers: number;
  recentSignups: number;
  recentDocs: number;
}

interface UserRow {
  id: string;
  name: string | null;
  email: string;
  role: string;
  plan: string;
  documentsUsed: number;
  createdAt: string;
  _count: { documents: number };
}

interface DocRow {
  id: string;
  title: string;
  type: string;
  category: string;
  status: string;
  createdAt: string;
  user: { name: string | null; email: string };
}

type Tab = "overview" | "users" | "documents";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("overview");
  const [stats, setStats] = useState<Stats | null>(null);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [documents, setDocuments] = useState<DocRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const userRole = (session?.user as any)?.role;

  useEffect(() => {
    if (status === "loading") return;
    if (!session || userRole !== "ADMIN") {
      router.push("/dashboard");
      return;
    }
    loadData();
  }, [status, session, userRole, router]);

  async function loadData() {
    setLoading(true);
    try {
      const [statsRes, usersRes, docsRes] = await Promise.all([
        fetch("/api/admin"),
        fetch("/api/admin?resource=users"),
        fetch("/api/admin?resource=documents"),
      ]);
      if (statsRes.ok) setStats(await statsRes.json());
      if (usersRes.ok) setUsers(await usersRes.json());
      if (docsRes.ok) setDocuments(await docsRes.json());
    } catch {
      // Silently handle errors
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id: string) {
    if (!confirm("Excluir este usuário e todos os seus documentos?")) return;
    setActionLoading(id);
    try {
      await fetch(`/api/admin?resource=users&id=${id}`, { method: "DELETE" });
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch {
      alert("Erro ao excluir.");
    } finally {
      setActionLoading(null);
    }
  }

  async function updateUserPlan(id: string, plan: string) {
    setActionLoading(`plan-${id}`);
    try {
      await fetch("/api/admin", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, plan }),
      });
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, plan } : u))
      );
    } catch {
      alert("Erro ao atualizar plano.");
    } finally {
      setActionLoading(null);
    }
  }

  async function deleteDocument(id: string) {
    if (!confirm("Excluir este documento?")) return;
    setActionLoading(`doc-${id}`);
    try {
      await fetch(`/api/admin?resource=documents&id=${id}`, { method: "DELETE" });
      setDocuments((prev) => prev.filter((d) => d.id !== id));
    } catch {
      alert("Erro ao excluir.");
    } finally {
      setActionLoading(null);
    }
  }

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-primary-600 animate-spin mx-auto mb-4" />
          <p className="text-surface-500">Carregando painel admin...</p>
        </div>
      </div>
    );
  }

  if (userRole !== "ADMIN") return null;

  const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
    { key: "overview", label: "Visão Geral", icon: LayoutDashboard },
    { key: "users", label: "Usuários", icon: Users },
    { key: "documents", label: "Documentos", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-surface-50">
      {/* Header */}
      <header className="bg-white border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-surface-900 font-[family-name:var(--font-jakarta)]">
                Painel Admin
              </h1>
              <p className="text-xs text-surface-400">Documind</p>
            </div>
          </div>
          <Button variant="outline" size="sm" href="/dashboard">
            Voltar ao Dashboard
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-white p-1 rounded-xl border border-surface-200 w-fit">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                tab === t.key
                  ? "bg-primary-600 text-white"
                  : "text-surface-600 hover:bg-surface-100"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {tab === "overview" && stats && (
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-surface-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-sm text-surface-500">Total de Usuários</span>
                </div>
                <p className="text-3xl font-bold text-surface-900">{stats.totalUsers}</p>
                <p className="text-xs text-surface-400 mt-1">
                  +{stats.recentSignups} nos últimos 7 dias
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-surface-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cta-50 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-cta-600" />
                  </div>
                  <span className="text-sm text-surface-500">Documentos Gerados</span>
                </div>
                <p className="text-3xl font-bold text-surface-900">{stats.totalDocuments}</p>
                <p className="text-xs text-surface-400 mt-1">
                  +{stats.recentDocs} nos últimos 7 dias
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-surface-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-upgrade-50 flex items-center justify-center">
                    <Crown className="w-5 h-5 text-upgrade-600" />
                  </div>
                  <span className="text-sm text-surface-500">Assinantes</span>
                </div>
                <p className="text-3xl font-bold text-surface-900">{stats.proUsers}</p>
                <p className="text-xs text-surface-400 mt-1">
                  {stats.freeUsers} usuários free
                </p>
              </div>
            </div>

            {/* Conversion rate */}
            <div className="p-6 rounded-2xl bg-white border border-surface-200">
              <h3 className="text-sm font-semibold text-surface-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary-600" />
                Métricas
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs text-surface-400">Taxa de conversão</p>
                  <p className="text-xl font-bold text-surface-900">
                    {stats.totalUsers > 0
                      ? ((stats.proUsers / stats.totalUsers) * 100).toFixed(1)
                      : 0}
                    %
                  </p>
                </div>
                <div>
                  <p className="text-xs text-surface-400">Docs por usuário</p>
                  <p className="text-xl font-bold text-surface-900">
                    {stats.totalUsers > 0
                      ? (stats.totalDocuments / stats.totalUsers).toFixed(1)
                      : 0}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-surface-400">Cadastros/semana</p>
                  <p className="text-xl font-bold text-surface-900">
                    {stats.recentSignups}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {tab === "users" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-surface-900">
                Usuários ({users.length})
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-surface-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-surface-50 text-left">
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Usuário</th>
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Plano</th>
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Docs</th>
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Cadastro</th>
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-100">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-surface-50/50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-sm font-medium text-surface-900">
                              {user.name || "Sem nome"}
                              {user.role === "ADMIN" && (
                                <Badge variant="primary" size="sm" className="ml-2">Admin</Badge>
                              )}
                            </p>
                            <p className="text-xs text-surface-400">{user.email}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={user.plan}
                            onChange={(e) => updateUserPlan(user.id, e.target.value)}
                            disabled={actionLoading === `plan-${user.id}`}
                            className="text-xs px-2 py-1 rounded-lg border border-surface-200 bg-white cursor-pointer"
                          >
                            <option value="FREE">Free</option>
                            <option value="PRO">Pro</option>
                            <option value="BUSINESS">Business</option>
                            <option value="ENTERPRISE">Enterprise</option>
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm text-surface-600">
                            {user._count.documents}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-surface-400">
                            {new Date(user.createdAt).toLocaleDateString("pt-BR")}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          {user.role !== "ADMIN" && (
                            <button
                              onClick={() => deleteUser(user.id)}
                              disabled={actionLoading === user.id}
                              className="p-1.5 rounded-lg hover:bg-red-50 text-surface-400 hover:text-red-500 transition-colors cursor-pointer disabled:opacity-50"
                              title="Excluir usuário"
                            >
                              {actionLoading === user.id ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <Trash2 className="w-4 h-4" />
                              )}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Documents Tab */}
        {tab === "documents" && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-surface-900">
              Documentos recentes ({documents.length})
            </h2>

            <div className="bg-white rounded-2xl border border-surface-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-surface-50 text-left">
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Documento</th>
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Usuário</th>
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Categoria</th>
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Status</th>
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Data</th>
                      <th className="px-4 py-3 text-xs font-semibold text-surface-500">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-100">
                    {documents.map((doc) => (
                      <tr key={doc.id} className="hover:bg-surface-50/50">
                        <td className="px-4 py-3">
                          <p className="text-sm font-medium text-surface-900 truncate max-w-[200px]">
                            {doc.title}
                          </p>
                          <p className="text-xs text-surface-400">{doc.type}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-xs text-surface-600">{doc.user.name || doc.user.email}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-surface-500">{doc.category}</span>
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={doc.status === "COMPLETED" ? "cta" : "default"}
                            size="sm"
                          >
                            {doc.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-surface-400">
                            {new Date(doc.createdAt).toLocaleDateString("pt-BR")}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => deleteDocument(doc.id)}
                            disabled={actionLoading === `doc-${doc.id}`}
                            className="p-1.5 rounded-lg hover:bg-red-50 text-surface-400 hover:text-red-500 transition-colors cursor-pointer disabled:opacity-50"
                            title="Excluir documento"
                          >
                            {actionLoading === `doc-${doc.id}` ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                    {documents.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-surface-400 text-sm">
                          Nenhum documento gerado ainda.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
