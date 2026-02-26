"use client";

import { useSession } from "next-auth/react";
import { Bell, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  const { data: session } = useSession();
  const user = session?.user;
  const plan = (user as any)?.plan || "FREE";

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-surface-200/60">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Left spacer for mobile menu */}
        <div className="lg:hidden w-10" />

        {/* Right section */}
        <div className="flex items-center gap-3 ml-auto">
          {plan === "FREE" && (
            <Button variant="upgrade" size="sm" href="/dashboard/assinatura">
              <Sparkles className="w-3.5 h-3.5" />
              Upgrade
            </Button>
          )}

          <button className="p-2 rounded-xl hover:bg-surface-100 transition-colors cursor-pointer relative">
            <Bell className="w-5 h-5 text-surface-400" />
          </button>

          <div className="flex items-center gap-3 pl-3 border-l border-surface-200">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-xs font-bold text-primary-700">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-surface-900 leading-tight">
                {user?.name || "Usuário"}
              </p>
              <Badge
                variant={plan === "FREE" ? "default" : plan === "PRO" ? "primary" : "upgrade"}
                size="sm"
              >
                {plan}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
