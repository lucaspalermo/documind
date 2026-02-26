"use client";

import { useSession } from "next-auth/react";
import { User, Mail, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PerfilPage() {
  const { data: session } = useSession();
  const user = session?.user;
  const plan = (user as any)?.plan || "FREE";

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)]">
          Meu Perfil
        </h1>
        <p className="mt-1 text-surface-500">
          Gerencie suas informações pessoais.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-surface-200 p-6">
        {/* Avatar */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-surface-100">
          <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-700">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </span>
          </div>
          <div>
            <p className="text-lg font-bold text-surface-900">{user?.name || "Usuário"}</p>
            <Badge
              variant={plan === "FREE" ? "default" : "primary"}
              size="md"
            >
              Plano {plan}
            </Badge>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-surface-400" />
            <div>
              <p className="text-xs text-surface-400">Nome</p>
              <p className="text-sm font-medium text-surface-900">{user?.name || "—"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-surface-400" />
            <div>
              <p className="text-xs text-surface-400">Email</p>
              <p className="text-sm font-medium text-surface-900">{user?.email || "—"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-surface-400" />
            <div>
              <p className="text-xs text-surface-400">Plano atual</p>
              <p className="text-sm font-medium text-surface-900">
                {(user as any)?.plan || "FREE"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
