export const PLANS = {
  FREE: {
    name: "Grátis",
    price: 0,
    docsPerMonth: 3,
    features: [
      "3 documentos por mês",
      "Modelos básicos",
      "Download em PDF",
      "Personalização com IA",
    ],
    notIncluded: [
      "Documentos ilimitados",
      "Modelos premium",
      "Assinatura digital",
      "Suporte prioritário",
      "Marca personalizada",
    ],
  },
  PRO: {
    name: "Pro",
    price: 39.9,
    asaasValue: 39.9,
    docsPerMonth: Infinity,
    popular: true,
    features: [
      "Documentos ilimitados",
      "Todos os modelos (básicos + premium)",
      "Download em PDF profissional",
      "Personalização avançada com IA",
      "Assinatura digital",
      "Histórico de documentos",
      "Suporte por email",
    ],
    notIncluded: [
      "Equipe / multi-usuário",
      "API de integração",
      "Marca personalizada",
    ],
  },
  BUSINESS: {
    name: "Business",
    price: 97,
    asaasValue: 97,
    docsPerMonth: Infinity,
    features: [
      "Tudo do Pro +",
      "Até 5 usuários na equipe",
      "Templates com logo da empresa",
      "Modelos customizados",
      "Exportação em Word e PDF",
      "Relatórios de uso",
      "Suporte prioritário",
      "API de integração",
    ],
    notIncluded: [],
  },
  ENTERPRISE: {
    name: "Enterprise",
    price: 297,
    asaasValue: 297,
    docsPerMonth: Infinity,
    features: [
      "Tudo do Business +",
      "Usuários ilimitados",
      "White-label completo",
      "Integrações personalizadas",
      "Gerente de conta dedicado",
      "SLA 99.9% uptime",
      "Onboarding VIP",
      "Treinamento da equipe",
    ],
    notIncluded: [],
  },
} as const;

export const TEMPLATE_CATEGORIES = [
  {
    slug: "imobiliario",
    name: "Imobiliário",
    icon: "Building2",
    description: "Contratos de aluguel, compra, venda e vistoria de imóveis",
    color: "blue",
  },
  {
    slug: "comercial",
    name: "Comercial",
    icon: "Briefcase",
    description: "Prestação de serviço, parceria, NDA e propostas comerciais",
    color: "purple",
  },
  {
    slug: "trabalhista",
    name: "Trabalhista",
    icon: "Users",
    description: "Contratos CLT, estágio, rescisão e trabalho remoto",
    color: "emerald",
  },
  {
    slug: "pessoal",
    name: "Pessoal",
    icon: "FileText",
    description: "Procurações, recibos, declarações e termos gerais",
    color: "amber",
  },
] as const;

export const NAV_LINKS = [
  { href: "/modelos", label: "Modelos" },
  { href: "/precos", label: "Preços" },
  { href: "/blog", label: "Blog" },
] as const;

export const STATS = [
  { value: "12.847", label: "Documentos gerados" },
  { value: "4.200+", label: "Usuários ativos" },
  { value: "98%", label: "Satisfação" },
  { value: "20+", label: "Modelos disponíveis" },
] as const;
