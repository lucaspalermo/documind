import Link from "next/link";
import { FileText, Mail, Instagram, Linkedin } from "lucide-react";
import { TEMPLATE_CATEGORIES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-surface-950 text-surface-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg flex items-center justify-center">
                <FileText className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Docu<span className="text-primary-400">mind</span>
              </span>
            </Link>
            <p className="text-sm text-surface-500 leading-relaxed mb-6">
              Gere contratos e documentos profissionais em segundos com inteligência artificial.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-surface-800 hover:bg-surface-700 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-surface-800 hover:bg-surface-700 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:contato@documind.com.br" className="w-9 h-9 rounded-lg bg-surface-800 hover:bg-surface-700 flex items-center justify-center transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Modelos */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Modelos</h4>
            <ul className="space-y-2.5">
              {TEMPLATE_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/modelos?categoria=${cat.slug}`} className="text-sm hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/modelos" className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Produto */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-2.5">
              <li><Link href="/precos" className="text-sm hover:text-white transition-colors">Preços</Link></li>
              <li><Link href="/modelos" className="text-sm hover:text-white transition-colors">Biblioteca de Modelos</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/registro" className="text-sm hover:text-white transition-colors">Criar Conta</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/termos" className="text-sm hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="text-sm hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/sobre" className="text-sm hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><a href="mailto:contato@documind.com.br" className="text-sm hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-600">
            © {new Date().getFullYear()} Documind. Todos os direitos reservados.
          </p>
          <p className="text-xs text-surface-600">
            Feito com inteligência artificial para simplificar sua vida jurídica.
          </p>
        </div>
      </div>
    </footer>
  );
}
