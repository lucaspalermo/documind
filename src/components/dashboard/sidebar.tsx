"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FileText,
  LayoutDashboard,
  FilePlus,
  FolderOpen,
  CreditCard,
  User,
  LogOut,
  X,
  Menu,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/gerar", label: "Gerar Documento", icon: FilePlus },
  { href: "/dashboard/documentos", label: "Meus Documentos", icon: FolderOpen },
  { href: "/dashboard/assinatura", label: "Assinatura", icon: CreditCard },
  { href: "/dashboard/perfil", label: "Perfil", icon: User },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navContent = (
    <nav className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-surface-200/60">
        <a href="/" className="flex items-center gap-2">
          <FileText className="w-7 h-7 text-primary-600" />
          <span className="text-xl font-bold text-surface-900 font-[family-name:var(--font-jakarta)]">
            Documind
          </span>
        </a>
      </div>

      {/* Nav Links */}
      <div className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "bg-primary-50 text-primary-700 border border-primary-200"
                  : "text-surface-600 hover:bg-surface-100 hover:text-surface-900"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-primary-600" : "text-surface-400")} />
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-surface-200/60">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-surface-600 hover:bg-red-50 hover:text-red-600 transition-all w-full cursor-pointer"
        >
          <LogOut className="w-5 h-5" />
          Sair
        </button>
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:fixed lg:inset-y-0 lg:w-64 bg-white border-r border-surface-200/60 flex-col">
        {navContent}
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-xl bg-white border border-surface-200 shadow-sm cursor-pointer"
      >
        <Menu className="w-5 h-5 text-surface-700" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/30 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-1 cursor-pointer"
            >
              <X className="w-5 h-5 text-surface-400" />
            </button>
            {navContent}
          </aside>
        </>
      )}
    </>
  );
}
