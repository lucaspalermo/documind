import { FileText } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-cta-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl" />

        <div className="relative flex flex-col justify-center px-12 lg:px-16">
          <a href="/" className="flex items-center gap-2 mb-12">
            <FileText className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white font-[family-name:var(--font-jakarta)]">
              Documind
            </span>
          </a>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-white font-[family-name:var(--font-jakarta)] leading-tight">
            Gere contratos profissionais{" "}
            <span className="text-cta-300">em segundos</span>
          </h1>
          <p className="mt-4 text-lg text-primary-100/80 leading-relaxed max-w-md">
            Mais de 20 modelos prontos, personalização com IA e download em PDF.
            Comece grátis.
          </p>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-6">
            <div>
              <p className="text-2xl font-bold text-white">12.847</p>
              <p className="text-sm text-primary-200">documentos gerados</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-white">4.200+</p>
              <p className="text-sm text-primary-200">usuários ativos</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-sm text-primary-200">satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
