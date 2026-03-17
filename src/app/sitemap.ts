import { MetadataRoute } from "next";
import { ALL_TEMPLATES } from "@/data/templates";
import { TEMPLATE_CATEGORIES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/modelos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/precos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/comparar/documind-vs-advogado`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/comparar/documind-vs-word`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/comparar/documind-vs-contratos-online`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPosts = [
    "contrato-estagio-lei-11788",
    "home-office-contrato-trabalho-remoto",
    "autorizacao-uso-imagem-modelo",
    "como-fazer-contrato-de-aluguel",
    "contrato-prestacao-servico-o-que-incluir",
    "procuracao-simples-como-fazer",
    "direitos-inquilino-aluguel",
    "contrato-freelancer-autonomo",
    "recibo-pagamento-modelo",
    "distrato-de-aluguel-como-fazer",
    "contrato-compra-venda-imovel",
    "termo-confidencialidade-nda",
    "contrato-trabalho-clt",
    "declaracao-de-residencia-modelo",
    "contrato-emprestimo-entre-pessoas",
    "contrato-de-comodato-modelo",
    "modelo-de-contrato-de-servico-pj",
    "como-fazer-procuracao-online",
    "notificacao-extrajudicial-modelo",
    "contrato-de-locacao-comercial-pontos-criticos",
    "rescisao-contrato-trabalho-direitos",
    "contrato-social-simples-mei-me",
    "termo-de-entrega-de-chaves-imovel",
    "acordo-de-pensao-alimenticia-modelo",
    "contrato-de-parceria-comercial-sociedade",
    "vistoria-de-imovel-checklist-completo",
    "orcamento-profissional-como-fazer",
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryPages: MetadataRoute.Sitemap = TEMPLATE_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/modelos/categoria/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const templatePages: MetadataRoute.Sitemap = ALL_TEMPLATES.map((template) => ({
    url: `${baseUrl}/modelos/${template.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...categoryPages, ...templatePages, ...blogPages];
}
