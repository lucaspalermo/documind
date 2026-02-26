"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-surface-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-500 rounded-lg flex items-center justify-center shadow-md shadow-primary-600/20 group-hover:shadow-lg group-hover:shadow-primary-600/30 transition-shadow">
              <FileText className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-lg font-bold text-surface-900">
              Docu<span className="text-primary-600">mind</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 rounded-lg hover:bg-surface-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-surface-600 hover:text-surface-900 transition-colors"
            >
              Entrar
            </Link>
            <Button variant="cta" size="sm" href="/registro">
              <Sparkles className="w-4 h-4" />
              Criar Grátis
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-surface-600 hover:text-surface-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 right-0 glass border-b border-surface-200/50 overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 text-sm font-medium text-surface-600 hover:text-surface-900 rounded-lg hover:bg-surface-100 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-surface-200 space-y-2">
            <Link
              href="/login"
              className="block px-4 py-2.5 text-sm font-medium text-surface-600 text-center"
            >
              Entrar
            </Link>
            <Button variant="cta" size="md" className="w-full" href="/registro">
              <Sparkles className="w-4 h-4" />
              Criar Conta Grátis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
