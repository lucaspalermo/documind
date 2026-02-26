export interface TemplateField {
  name: string;
  label: string;
  type: "text" | "textarea" | "date" | "number" | "select" | "cpf" | "cnpj" | "currency" | "email" | "phone";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  helperText?: string;
}

export interface TemplateSection {
  title: string;
  fields: TemplateField[];
}

export interface TemplateFAQ {
  question: string;
  answer: string;
}

export interface Template {
  slug: string;
  title: string;
  shortTitle: string;
  category: "imobiliario" | "comercial" | "trabalhista" | "pessoal";
  description: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  isPremium: boolean;
  sections: TemplateSection[];
  faq: TemplateFAQ[];
  relatedSlugs: string[];
}

// ════════════════════════════════════════════════════
// IMOBILIÁRIO
// ════════════════════════════════════════════════════

const contratoAluguelResidencial: Template = {
  slug: "contrato-de-aluguel-residencial",
  title: "Modelo de Contrato de Aluguel Residencial",
  shortTitle: "Contrato de Aluguel Residencial",
  category: "imobiliario",
  description: "Contrato de locação residencial completo com cláusulas de garantia, vistoria, multa e reajuste. Pronto para personalizar e baixar em PDF.",
  longDescription: "O contrato de aluguel residencial é o documento que formaliza a relação entre locador (proprietário) e locatário (inquilino). Nosso modelo segue a Lei do Inquilinato (Lei 8.245/91) e inclui todas as cláusulas essenciais: identificação das partes, descrição do imóvel, valor do aluguel, prazo, garantias, obrigações de ambas as partes, condições de rescisão e multas. A IA personaliza automaticamente as cláusulas com base nos dados fornecidos.",
  metaTitle: "Modelo de Contrato de Aluguel Residencial 2025 - Grátis | Documind",
  metaDescription: "Gere seu contrato de aluguel residencial online em minutos. Modelo atualizado com Lei do Inquilinato, personalizado por IA. Baixe em PDF grátis.",
  keywords: ["contrato de aluguel", "contrato de locação residencial", "modelo contrato aluguel", "contrato aluguel grátis", "contrato inquilino"],
  isPremium: false,
  sections: [
    {
      title: "Locador (Proprietário)",
      fields: [
        { name: "locador_nome", label: "Nome completo", type: "text", placeholder: "Nome do proprietário", required: true },
        { name: "locador_cpf", label: "CPF", type: "cpf", placeholder: "000.000.000-00", required: true },
        { name: "locador_endereco", label: "Endereço", type: "text", placeholder: "Endereço completo", required: true },
        { name: "locador_email", label: "Email", type: "email", placeholder: "email@exemplo.com" },
        { name: "locador_telefone", label: "Telefone", type: "phone", placeholder: "(00) 00000-0000" },
      ],
    },
    {
      title: "Locatário (Inquilino)",
      fields: [
        { name: "locatario_nome", label: "Nome completo", type: "text", placeholder: "Nome do inquilino", required: true },
        { name: "locatario_cpf", label: "CPF", type: "cpf", placeholder: "000.000.000-00", required: true },
        { name: "locatario_endereco", label: "Endereço atual", type: "text", placeholder: "Endereço completo" },
        { name: "locatario_email", label: "Email", type: "email", placeholder: "email@exemplo.com" },
        { name: "locatario_telefone", label: "Telefone", type: "phone", placeholder: "(00) 00000-0000" },
      ],
    },
    {
      title: "Dados do Imóvel",
      fields: [
        { name: "imovel_endereco", label: "Endereço do imóvel", type: "text", placeholder: "Rua, número, complemento", required: true },
        { name: "imovel_bairro", label: "Bairro", type: "text", placeholder: "Bairro", required: true },
        { name: "imovel_cidade", label: "Cidade/UF", type: "text", placeholder: "Cidade - UF", required: true },
        { name: "imovel_cep", label: "CEP", type: "text", placeholder: "00000-000" },
        { name: "imovel_tipo", label: "Tipo do imóvel", type: "select", options: ["Casa", "Apartamento", "Kitnet", "Sala comercial", "Outro"] },
      ],
    },
    {
      title: "Condições da Locação",
      fields: [
        { name: "valor_aluguel", label: "Valor do aluguel mensal", type: "currency", placeholder: "R$ 0,00", required: true },
        { name: "dia_vencimento", label: "Dia do vencimento", type: "number", placeholder: "5" },
        { name: "prazo_meses", label: "Prazo (em meses)", type: "number", placeholder: "12", required: true },
        { name: "data_inicio", label: "Data de início", type: "date", required: true },
        { name: "indice_reajuste", label: "Índice de reajuste", type: "select", options: ["IGPM", "IPCA", "INPC"], helperText: "Índice para reajuste anual" },
        { name: "garantia", label: "Tipo de garantia", type: "select", options: ["Caução (3 meses)", "Fiador", "Seguro fiança", "Título de capitalização", "Sem garantia"] },
        { name: "multa_rescisao", label: "Multa por rescisão antecipada", type: "text", placeholder: "3 aluguéis proporcionais" },
      ],
    },
  ],
  faq: [
    { question: "O contrato de aluguel precisa ser registrado em cartório?", answer: "Não é obrigatório, mas o registro garante validade perante terceiros. Para contratos de longa duração (acima de 30 meses) ou quando envolvem fiador, é recomendado o registro." },
    { question: "Qual o prazo mínimo e máximo de um contrato de aluguel?", answer: "Não há prazo mínimo legal, mas o mais comum é 12 ou 30 meses. A Lei do Inquilinato define que contratos com prazo inferior a 30 meses permitem ao locatário a renovação automática por prazo indeterminado." },
    { question: "O locador pode pedir o imóvel antes do término do contrato?", answer: "Em contratos com prazo determinado, o locador só pode pedir o imóvel nos casos previstos na Lei 8.245/91, como uso próprio, demolição ou obras. Em contratos por prazo indeterminado, deve notificar com 30 dias de antecedência." },
  ],
  relatedSlugs: ["contrato-de-aluguel-comercial", "distrato-de-locacao", "termo-de-vistoria-de-imovel"],
};

const contratoAluguelComercial: Template = {
  slug: "contrato-de-aluguel-comercial",
  title: "Modelo de Contrato de Aluguel Comercial",
  shortTitle: "Contrato de Aluguel Comercial",
  category: "imobiliario",
  description: "Contrato de locação comercial para pontos comerciais, salas e escritórios. Cláusulas de renovatória, luvas e benfeitorias.",
  longDescription: "O contrato de aluguel comercial possui particularidades importantes em relação ao residencial. Inclui cláusulas sobre ação renovatória (Lei 8.245/91, art. 51), benfeitorias, luvas, ponto comercial e destinação do imóvel. Nosso modelo protege tanto o proprietário quanto o empresário, garantindo segurança jurídica para ambas as partes.",
  metaTitle: "Modelo de Contrato de Aluguel Comercial 2025 - Grátis | Documind",
  metaDescription: "Contrato de locação comercial completo. Modelo com cláusulas de renovatória, benfeitorias e ponto comercial. Personalize com IA e baixe em PDF.",
  keywords: ["contrato aluguel comercial", "contrato locação comercial", "aluguel ponto comercial", "contrato sala comercial"],
  isPremium: false,
  sections: [
    {
      title: "Locador",
      fields: [
        { name: "locador_nome", label: "Nome/Razão social", type: "text", required: true },
        { name: "locador_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
        { name: "locador_endereco", label: "Endereço", type: "text", required: true },
      ],
    },
    {
      title: "Locatário",
      fields: [
        { name: "locatario_nome", label: "Nome/Razão social", type: "text", required: true },
        { name: "locatario_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
        { name: "locatario_endereco", label: "Endereço", type: "text", required: true },
        { name: "atividade_comercial", label: "Atividade comercial", type: "text", placeholder: "Ex: Restaurante, Escritório de advocacia" },
      ],
    },
    {
      title: "Dados do Imóvel Comercial",
      fields: [
        { name: "imovel_endereco", label: "Endereço do imóvel", type: "text", required: true },
        { name: "imovel_area", label: "Área (m²)", type: "number" },
        { name: "imovel_cidade", label: "Cidade/UF", type: "text", required: true },
      ],
    },
    {
      title: "Condições",
      fields: [
        { name: "valor_aluguel", label: "Valor do aluguel", type: "currency", required: true },
        { name: "prazo_meses", label: "Prazo (meses)", type: "number", required: true },
        { name: "data_inicio", label: "Data de início", type: "date", required: true },
        { name: "indice_reajuste", label: "Índice de reajuste", type: "select", options: ["IGPM", "IPCA", "INPC"] },
        { name: "permite_sublocacao", label: "Permite sublocação?", type: "select", options: ["Sim", "Não"] },
      ],
    },
  ],
  faq: [
    { question: "O que é ação renovatória?", answer: "É o direito do inquilino comercial de renovar o contrato judicialmente, desde que o contrato tenha prazo determinado de pelo menos 5 anos e o locatário esteja no imóvel há pelo menos 3 anos." },
    { question: "Quem paga as benfeitorias no imóvel comercial?", answer: "As benfeitorias necessárias são reembolsáveis, mesmo sem autorização do locador. As úteis, se autorizadas, também são reembolsáveis. As voluptuárias não são reembolsáveis, salvo acordo." },
  ],
  relatedSlugs: ["contrato-de-aluguel-residencial", "contrato-de-prestacao-de-servico", "contrato-de-parceria-comercial"],
};

const contratoCompraVenda: Template = {
  slug: "contrato-de-compra-e-venda-de-imovel",
  title: "Modelo de Contrato de Compra e Venda de Imóvel",
  shortTitle: "Compra e Venda de Imóvel",
  category: "imobiliario",
  description: "Contrato de compra e venda de imóvel com cláusulas de pagamento, vistoria, multa e entrega das chaves.",
  longDescription: "O contrato de compra e venda de imóvel é o instrumento particular que formaliza a negociação entre comprador e vendedor. Nosso modelo inclui cláusulas essenciais como descrição do imóvel, preço, forma de pagamento, condições suspensivas, cláusula de arrependimento, multa, vistoria e entrega das chaves. Para imóveis acima de 30 salários mínimos, a escritura pública é obrigatória.",
  metaTitle: "Contrato de Compra e Venda de Imóvel 2025 - Modelo Grátis | Documind",
  metaDescription: "Modelo de contrato de compra e venda de imóvel. Cláusulas de pagamento, vistoria e multa. Personalize online com IA e baixe em PDF.",
  keywords: ["contrato compra e venda imóvel", "contrato compra imóvel", "contrato venda imóvel", "promessa compra e venda"],
  isPremium: false,
  sections: [
    {
      title: "Vendedor",
      fields: [
        { name: "vendedor_nome", label: "Nome completo", type: "text", required: true },
        { name: "vendedor_cpf", label: "CPF", type: "cpf", required: true },
        { name: "vendedor_endereco", label: "Endereço", type: "text", required: true },
      ],
    },
    {
      title: "Comprador",
      fields: [
        { name: "comprador_nome", label: "Nome completo", type: "text", required: true },
        { name: "comprador_cpf", label: "CPF", type: "cpf", required: true },
        { name: "comprador_endereco", label: "Endereço", type: "text", required: true },
      ],
    },
    {
      title: "Dados do Imóvel",
      fields: [
        { name: "imovel_endereco", label: "Endereço completo", type: "text", required: true },
        { name: "imovel_matricula", label: "Número da matrícula", type: "text" },
        { name: "imovel_cartorio", label: "Cartório de registro", type: "text" },
        { name: "imovel_area", label: "Área total (m²)", type: "number" },
      ],
    },
    {
      title: "Condições de Pagamento",
      fields: [
        { name: "valor_total", label: "Valor total", type: "currency", required: true },
        { name: "valor_entrada", label: "Valor da entrada", type: "currency" },
        { name: "forma_pagamento", label: "Forma de pagamento", type: "select", options: ["À vista", "Financiado", "Parcelado direto"] },
        { name: "data_entrega", label: "Data de entrega do imóvel", type: "date" },
      ],
    },
  ],
  faq: [
    { question: "Contrato particular de compra e venda tem validade?", answer: "Sim, mas para imóveis acima de 30 salários mínimos, a transferência de propriedade exige escritura pública e registro em cartório. O contrato particular serve como compromisso de compra e venda." },
    { question: "É necessário reconhecer firma?", answer: "Não é obrigatório, mas recomendado para maior segurança jurídica. O reconhecimento de firma em cartório comprova a autenticidade das assinaturas." },
  ],
  relatedSlugs: ["contrato-de-aluguel-residencial", "termo-de-vistoria-de-imovel", "distrato-de-locacao"],
};

const distratoLocacao: Template = {
  slug: "distrato-de-locacao",
  title: "Modelo de Distrato de Locação",
  shortTitle: "Distrato de Locação",
  category: "imobiliario",
  description: "Modelo de distrato para encerrar contrato de aluguel de forma amigável. Inclui quitação de débitos e devolução de chaves.",
  longDescription: "O distrato de locação é o documento que formaliza o encerramento amigável de um contrato de aluguel antes do prazo final. Nosso modelo inclui cláusulas de quitação mútua, devolução de chaves, estado do imóvel, eventuais débitos pendentes e multas.",
  metaTitle: "Modelo de Distrato de Locação 2025 - Grátis | Documind",
  metaDescription: "Encerre seu contrato de aluguel de forma amigável. Modelo de distrato com quitação, devolução de chaves e termos de rescisão. Baixe em PDF.",
  keywords: ["distrato de locação", "rescisão contrato aluguel", "encerrar contrato aluguel", "distrato aluguel"],
  isPremium: false,
  sections: [
    {
      title: "Locador",
      fields: [
        { name: "locador_nome", label: "Nome completo", type: "text", required: true },
        { name: "locador_cpf", label: "CPF", type: "cpf", required: true },
      ],
    },
    {
      title: "Locatário",
      fields: [
        { name: "locatario_nome", label: "Nome completo", type: "text", required: true },
        { name: "locatario_cpf", label: "CPF", type: "cpf", required: true },
      ],
    },
    {
      title: "Dados da Locação",
      fields: [
        { name: "imovel_endereco", label: "Endereço do imóvel", type: "text", required: true },
        { name: "data_contrato_original", label: "Data do contrato original", type: "date", required: true },
        { name: "data_distrato", label: "Data do distrato", type: "date", required: true },
        { name: "motivo", label: "Motivo da rescisão", type: "textarea", placeholder: "Acordo mútuo entre as partes..." },
        { name: "multa_aplicavel", label: "Multa aplicável", type: "currency" },
        { name: "debitos_pendentes", label: "Débitos pendentes", type: "currency" },
      ],
    },
  ],
  faq: [
    { question: "Quando usar um distrato de locação?", answer: "Quando locador e locatário concordam em encerrar o contrato antes do prazo. É diferente de uma rescisão unilateral, pois ambas as partes assinam e concordam com os termos." },
    { question: "É obrigatório pagar multa no distrato?", answer: "Depende do acordo entre as partes. No distrato amigável, as partes podem negociar a multa ou dispensá-la completamente." },
  ],
  relatedSlugs: ["contrato-de-aluguel-residencial", "contrato-de-aluguel-comercial", "termo-de-vistoria-de-imovel"],
};

const termoVistoria: Template = {
  slug: "termo-de-vistoria-de-imovel",
  title: "Modelo de Termo de Vistoria de Imóvel",
  shortTitle: "Termo de Vistoria",
  category: "imobiliario",
  description: "Termo de vistoria para documentar o estado do imóvel na entrada ou saída do inquilino. Proteja-se juridicamente.",
  longDescription: "O termo de vistoria é fundamental para documentar as condições do imóvel no momento da entrega e devolução das chaves. Nosso modelo permite registrar detalhadamente cada cômodo, instalações elétricas, hidráulicas, pintura e mobília. Essa documentação protege tanto o locador quanto o locatário em caso de contestação.",
  metaTitle: "Termo de Vistoria de Imóvel 2025 - Modelo Grátis | Documind",
  metaDescription: "Documente o estado do imóvel na entrada ou saída. Termo de vistoria completo para proteger locador e inquilino. Baixe em PDF grátis.",
  keywords: ["termo de vistoria", "vistoria imóvel", "vistoria aluguel", "laudo vistoria imóvel"],
  isPremium: false,
  sections: [
    {
      title: "Dados da Vistoria",
      fields: [
        { name: "tipo_vistoria", label: "Tipo da vistoria", type: "select", options: ["Entrada", "Saída"], required: true },
        { name: "data_vistoria", label: "Data da vistoria", type: "date", required: true },
        { name: "imovel_endereco", label: "Endereço do imóvel", type: "text", required: true },
        { name: "locador_nome", label: "Nome do locador", type: "text", required: true },
        { name: "locatario_nome", label: "Nome do locatário", type: "text", required: true },
      ],
    },
    {
      title: "Estado do Imóvel",
      fields: [
        { name: "estado_geral", label: "Estado geral", type: "select", options: ["Ótimo", "Bom", "Regular", "Ruim"] },
        { name: "pintura", label: "Estado da pintura", type: "textarea", placeholder: "Descreva o estado da pintura..." },
        { name: "pisos", label: "Estado dos pisos", type: "textarea", placeholder: "Descreva o estado dos pisos..." },
        { name: "instalacoes_eletricas", label: "Instalações elétricas", type: "textarea", placeholder: "Descreva o estado..." },
        { name: "instalacoes_hidraulicas", label: "Instalações hidráulicas", type: "textarea", placeholder: "Descreva o estado..." },
        { name: "observacoes", label: "Observações gerais", type: "textarea" },
      ],
    },
  ],
  faq: [
    { question: "A vistoria é obrigatória?", answer: "Não é legalmente obrigatória, mas é altamente recomendada. Sem ela, fica difícil provar o estado do imóvel e cobrar reparos do inquilino na devolução." },
  ],
  relatedSlugs: ["contrato-de-aluguel-residencial", "distrato-de-locacao"],
};

// ════════════════════════════════════════════════════
// COMERCIAL
// ════════════════════════════════════════════════════

const contratoPrestacaoServico: Template = {
  slug: "contrato-de-prestacao-de-servico",
  title: "Modelo de Contrato de Prestação de Serviço",
  shortTitle: "Prestação de Serviço",
  category: "comercial",
  description: "Contrato de prestação de serviço para autônomos e empresas. Escopo, prazo, valor e cláusulas de responsabilidade.",
  longDescription: "O contrato de prestação de serviço regulamenta a relação entre contratante e prestador sem vínculo empregatício. Nosso modelo inclui cláusulas essenciais como descrição detalhada dos serviços, prazo de execução, valor e forma de pagamento, obrigações das partes, confidencialidade, propriedade intelectual e rescisão. Ideal para freelancers, consultores e empresas.",
  metaTitle: "Contrato de Prestação de Serviço 2025 - Modelo Grátis | Documind",
  metaDescription: "Modelo de contrato de prestação de serviço profissional. Para autônomos e empresas. Escopo, pagamento e cláusulas de proteção. Baixe em PDF.",
  keywords: ["contrato prestação de serviço", "contrato de serviço", "contrato freelancer", "contrato autônomo", "modelo prestação serviço"],
  isPremium: false,
  sections: [
    {
      title: "Contratante",
      fields: [
        { name: "contratante_nome", label: "Nome/Razão social", type: "text", required: true },
        { name: "contratante_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
        { name: "contratante_endereco", label: "Endereço", type: "text", required: true },
      ],
    },
    {
      title: "Prestador de Serviço",
      fields: [
        { name: "prestador_nome", label: "Nome/Razão social", type: "text", required: true },
        { name: "prestador_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
        { name: "prestador_endereco", label: "Endereço", type: "text", required: true },
      ],
    },
    {
      title: "Detalhes do Serviço",
      fields: [
        { name: "descricao_servico", label: "Descrição dos serviços", type: "textarea", required: true, placeholder: "Descreva detalhadamente os serviços..." },
        { name: "valor_total", label: "Valor total", type: "currency", required: true },
        { name: "forma_pagamento", label: "Forma de pagamento", type: "select", options: ["À vista", "Parcelado", "Por etapa", "Mensal"] },
        { name: "prazo_execucao", label: "Prazo de execução", type: "text", placeholder: "Ex: 30 dias corridos" },
        { name: "data_inicio", label: "Data de início", type: "date", required: true },
      ],
    },
  ],
  faq: [
    { question: "Contrato de prestação de serviço configura vínculo empregatício?", answer: "Não, desde que o serviço seja prestado sem subordinação, habitualidade, pessoalidade e onerosidade cumulativas. O contrato deve deixar claro a autonomia do prestador." },
    { question: "É necessário emitir nota fiscal?", answer: "Se o prestador for pessoa jurídica, sim. Se for autônomo (pessoa física), deve haver recolhimento do ISS e emissão de RPA (Recibo de Pagamento Autônomo)." },
  ],
  relatedSlugs: ["contrato-de-freelancer", "modelo-de-orcamento", "termo-de-confidencialidade-nda"],
};

const modeloOrcamento: Template = {
  slug: "modelo-de-orcamento",
  title: "Modelo de Orçamento / Proposta Comercial",
  shortTitle: "Orçamento / Proposta",
  category: "comercial",
  description: "Modelo profissional de orçamento e proposta comercial. Inclui descrição dos serviços, valores e condições.",
  longDescription: "Uma proposta comercial bem estruturada aumenta suas chances de fechar negócios. Nosso modelo inclui apresentação da empresa, descrição dos serviços ou produtos, valores detalhados, condições de pagamento, prazo de validade e termos gerais. A IA personaliza automaticamente para o seu tipo de negócio.",
  metaTitle: "Modelo de Orçamento e Proposta Comercial 2025 | Documind",
  metaDescription: "Crie orçamentos e propostas comerciais profissionais. Modelo com valores, condições e termos. Personalize com IA e envie ao cliente.",
  keywords: ["modelo orçamento", "proposta comercial", "modelo proposta", "orçamento profissional"],
  isPremium: true,
  sections: [
    {
      title: "Sua Empresa",
      fields: [
        { name: "empresa_nome", label: "Nome da empresa", type: "text", required: true },
        { name: "empresa_cnpj", label: "CNPJ", type: "cnpj" },
        { name: "empresa_contato", label: "Contato", type: "text" },
      ],
    },
    {
      title: "Cliente",
      fields: [
        { name: "cliente_nome", label: "Nome do cliente", type: "text", required: true },
        { name: "cliente_empresa", label: "Empresa", type: "text" },
      ],
    },
    {
      title: "Proposta",
      fields: [
        { name: "descricao", label: "Descrição dos serviços/produtos", type: "textarea", required: true },
        { name: "valor_total", label: "Valor total", type: "currency", required: true },
        { name: "forma_pagamento", label: "Condições de pagamento", type: "text" },
        { name: "prazo_entrega", label: "Prazo de entrega", type: "text" },
        { name: "validade_proposta", label: "Validade da proposta", type: "text", placeholder: "Ex: 15 dias" },
      ],
    },
  ],
  faq: [
    { question: "Um orçamento tem validade jurídica?", answer: "O orçamento aprovado e assinado pelo cliente pode ter força de contrato, especialmente se contém os elementos essenciais de um acordo (partes, objeto, preço)." },
  ],
  relatedSlugs: ["contrato-de-prestacao-de-servico", "contrato-de-parceria-comercial"],
};

const contratoParceria: Template = {
  slug: "contrato-de-parceria-comercial",
  title: "Modelo de Contrato de Parceria Comercial",
  shortTitle: "Parceria Comercial",
  category: "comercial",
  description: "Contrato de parceria para formalizar acordos comerciais entre empresas ou profissionais. Divisão de lucros e responsabilidades.",
  longDescription: "O contrato de parceria comercial formaliza a colaboração entre duas ou mais partes para atingir objetivos em comum. Nosso modelo define claramente as responsabilidades de cada parceiro, divisão de lucros/prejuízos, prazo, exclusividade, propriedade intelectual e condições de saída. Ideal para joint ventures, co-produções e parcerias estratégicas.",
  metaTitle: "Contrato de Parceria Comercial 2025 - Modelo | Documind",
  metaDescription: "Formalize sua parceria comercial com segurança. Modelo com divisão de responsabilidades, lucros e cláusulas de proteção. Baixe em PDF.",
  keywords: ["contrato de parceria", "parceria comercial", "contrato parceria empresarial", "acordo de parceria"],
  isPremium: true,
  sections: [
    {
      title: "Parceiro 1",
      fields: [
        { name: "parceiro1_nome", label: "Nome/Razão social", type: "text", required: true },
        { name: "parceiro1_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
      ],
    },
    {
      title: "Parceiro 2",
      fields: [
        { name: "parceiro2_nome", label: "Nome/Razão social", type: "text", required: true },
        { name: "parceiro2_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
      ],
    },
    {
      title: "Termos da Parceria",
      fields: [
        { name: "objetivo", label: "Objetivo da parceria", type: "textarea", required: true },
        { name: "responsabilidades", label: "Responsabilidades de cada parte", type: "textarea" },
        { name: "divisao_lucros", label: "Divisão de lucros/prejuízos", type: "text", placeholder: "Ex: 50%/50%" },
        { name: "prazo", label: "Prazo da parceria", type: "text" },
        { name: "exclusividade", label: "Exclusividade?", type: "select", options: ["Sim", "Não"] },
      ],
    },
  ],
  faq: [
    { question: "Parceria comercial e sociedade são a mesma coisa?", answer: "Não. A parceria é um acordo de cooperação sem constituir uma nova pessoa jurídica. A sociedade implica na criação de uma empresa com CNPJ. A parceria é mais flexível e informal." },
  ],
  relatedSlugs: ["contrato-de-prestacao-de-servico", "termo-de-confidencialidade-nda"],
};

const termoNDA: Template = {
  slug: "termo-de-confidencialidade-nda",
  title: "Modelo de Termo de Confidencialidade (NDA)",
  shortTitle: "NDA / Confidencialidade",
  category: "comercial",
  description: "Termo de confidencialidade para proteger informações sigilosas em negociações e parcerias. Modelo NDA bilateral.",
  longDescription: "O NDA (Non-Disclosure Agreement) ou Termo de Confidencialidade protege informações sigilosas compartilhadas entre as partes. Nosso modelo é bilateral (protege ambas as partes) e inclui definição de informações confidenciais, obrigações, prazo de sigilo, exceções, penalidades e foro competente.",
  metaTitle: "Modelo de NDA / Termo de Confidencialidade 2025 | Documind",
  metaDescription: "Proteja suas informações sigilosas com NDA profissional. Modelo bilateral com cláusulas de sigilo, penalidades e prazos. Baixe em PDF.",
  keywords: ["NDA", "termo de confidencialidade", "acordo confidencialidade", "non disclosure agreement", "sigilo comercial"],
  isPremium: false,
  sections: [
    {
      title: "Parte Reveladora",
      fields: [
        { name: "reveladora_nome", label: "Nome/Razão social", type: "text", required: true },
        { name: "reveladora_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
      ],
    },
    {
      title: "Parte Receptora",
      fields: [
        { name: "receptora_nome", label: "Nome/Razão social", type: "text", required: true },
        { name: "receptora_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
      ],
    },
    {
      title: "Termos",
      fields: [
        { name: "tipo_informacao", label: "Tipo de informação confidencial", type: "textarea", placeholder: "Descreva o que é confidencial..." },
        { name: "prazo_sigilo", label: "Prazo de sigilo", type: "text", placeholder: "Ex: 5 anos" },
        { name: "penalidade", label: "Penalidade por descumprimento", type: "currency" },
        { name: "bilateral", label: "Tipo", type: "select", options: ["Bilateral (ambas as partes)", "Unilateral (apenas uma parte)"] },
      ],
    },
  ],
  faq: [
    { question: "NDA tem validade no Brasil?", answer: "Sim. Embora o termo seja em inglês, o Termo de Confidencialidade é plenamente válido no Brasil, baseado nos artigos 421 e 422 do Código Civil." },
  ],
  relatedSlugs: ["contrato-de-parceria-comercial", "contrato-de-prestacao-de-servico", "contrato-de-freelancer"],
};

const contratoFreelancer: Template = {
  slug: "contrato-de-freelancer",
  title: "Modelo de Contrato de Freelancer",
  shortTitle: "Contrato de Freelancer",
  category: "comercial",
  description: "Contrato específico para projetos freelancer. Define escopo, entregas, prazo, valor e propriedade intelectual.",
  longDescription: "O contrato de freelancer é essencial para proteger tanto o profissional quanto o cliente. Diferente do contrato de prestação de serviço genérico, este modelo é voltado para projetos com entregas definidas, marcos de pagamento, revisões, propriedade intelectual e direito de uso do material produzido.",
  metaTitle: "Contrato de Freelancer 2025 - Modelo Grátis | Documind",
  metaDescription: "Modelo de contrato para freelancers. Escopo, entregas, pagamento por marco e propriedade intelectual. Proteja seu trabalho. Baixe em PDF.",
  keywords: ["contrato freelancer", "contrato freelance", "contrato projeto", "contrato designer freelancer", "contrato desenvolvedor freelancer"],
  isPremium: false,
  sections: [
    {
      title: "Cliente",
      fields: [
        { name: "cliente_nome", label: "Nome/Empresa", type: "text", required: true },
        { name: "cliente_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
      ],
    },
    {
      title: "Freelancer",
      fields: [
        { name: "freelancer_nome", label: "Nome completo", type: "text", required: true },
        { name: "freelancer_cpf", label: "CPF", type: "cpf", required: true },
        { name: "freelancer_especialidade", label: "Especialidade", type: "text", placeholder: "Ex: Design gráfico, Desenvolvimento web" },
      ],
    },
    {
      title: "Projeto",
      fields: [
        { name: "nome_projeto", label: "Nome do projeto", type: "text", required: true },
        { name: "escopo", label: "Escopo / Entregas", type: "textarea", required: true },
        { name: "valor", label: "Valor total", type: "currency", required: true },
        { name: "forma_pagamento", label: "Forma de pagamento", type: "select", options: ["50% início + 50% entrega", "Por marco/milestone", "100% na entrega", "Mensal"] },
        { name: "prazo", label: "Prazo de entrega", type: "text", required: true },
        { name: "revisoes", label: "Número de revisões incluídas", type: "number", placeholder: "3" },
      ],
    },
  ],
  faq: [
    { question: "O contrato de freelancer cria vínculo empregatício?", answer: "Não, desde que não haja subordinação, horário fixo e pessoalidade. O freelancer deve ter autonomia sobre como realizar o trabalho." },
    { question: "Quem fica com os direitos autorais?", answer: "Depende do contrato. Por padrão, a Lei de Direitos Autorais (Lei 9.610/98) atribui os direitos ao autor. Mas o contrato pode transferir total ou parcialmente esses direitos ao contratante." },
  ],
  relatedSlugs: ["contrato-de-prestacao-de-servico", "termo-de-confidencialidade-nda", "modelo-de-orcamento"],
};

// ════════════════════════════════════════════════════
// TRABALHISTA
// ════════════════════════════════════════════════════

const contratoCLT: Template = {
  slug: "contrato-de-trabalho-clt",
  title: "Modelo de Contrato de Trabalho CLT",
  shortTitle: "Contrato de Trabalho CLT",
  category: "trabalhista",
  description: "Contrato de trabalho CLT com todas as cláusulas exigidas pela legislação trabalhista. Prazo determinado e indeterminado.",
  longDescription: "O contrato de trabalho CLT é obrigatório para formalizar a relação de emprego. Nosso modelo segue a CLT (Consolidação das Leis do Trabalho) e inclui identificação das partes, função, salário, jornada de trabalho, benefícios, período de experiência e cláusulas adicionais como confidencialidade e não-concorrência.",
  metaTitle: "Contrato de Trabalho CLT 2025 - Modelo | Documind",
  metaDescription: "Modelo de contrato de trabalho CLT atualizado. Com todas as cláusulas legais: salário, jornada, benefícios e experiência. Baixe em PDF.",
  keywords: ["contrato de trabalho", "contrato CLT", "modelo contrato emprego", "contrato trabalhista"],
  isPremium: true,
  sections: [
    {
      title: "Empregador",
      fields: [
        { name: "empregador_nome", label: "Razão social", type: "text", required: true },
        { name: "empregador_cnpj", label: "CNPJ", type: "cnpj", required: true },
        { name: "empregador_endereco", label: "Endereço", type: "text", required: true },
      ],
    },
    {
      title: "Empregado",
      fields: [
        { name: "empregado_nome", label: "Nome completo", type: "text", required: true },
        { name: "empregado_cpf", label: "CPF", type: "cpf", required: true },
        { name: "empregado_ctps", label: "Número CTPS", type: "text" },
      ],
    },
    {
      title: "Condições de Trabalho",
      fields: [
        { name: "funcao", label: "Função / Cargo", type: "text", required: true },
        { name: "salario", label: "Salário", type: "currency", required: true },
        { name: "jornada", label: "Jornada semanal", type: "select", options: ["44h semanais", "40h semanais", "36h semanais", "30h semanais"] },
        { name: "tipo_contrato", label: "Tipo", type: "select", options: ["Prazo indeterminado", "Prazo determinado", "Experiência (90 dias)"] },
        { name: "data_admissao", label: "Data de admissão", type: "date", required: true },
        { name: "beneficios", label: "Benefícios", type: "textarea", placeholder: "VT, VR, plano de saúde..." },
      ],
    },
  ],
  faq: [
    { question: "O período de experiência é obrigatório?", answer: "Não é obrigatório, mas é muito comum. O período máximo é de 90 dias, podendo ser dividido em dois períodos (ex: 45 + 45 dias)." },
    { question: "Qual a diferença entre prazo determinado e indeterminado?", answer: "O contrato por prazo determinado tem data de término definida (máximo 2 anos). O de prazo indeterminado não tem data final e é o mais comum nas relações de emprego." },
  ],
  relatedSlugs: ["contrato-de-estagio", "termo-de-rescisao", "acordo-de-trabalho-home-office"],
};

const contratoEstagio: Template = {
  slug: "contrato-de-estagio",
  title: "Modelo de Contrato de Estágio",
  shortTitle: "Contrato de Estágio",
  category: "trabalhista",
  description: "Termo de compromisso de estágio conforme a Lei do Estágio. Inclui bolsa auxílio, carga horária e supervisão.",
  longDescription: "O termo de compromisso de estágio é regulado pela Lei 11.788/2008 e deve envolver três partes: a empresa, o estagiário e a instituição de ensino. Nosso modelo inclui todas as cláusulas obrigatórias: atividades, carga horária (máx. 6h/dia), bolsa auxílio, auxílio-transporte, recesso, seguro e supervisão.",
  metaTitle: "Contrato de Estágio 2025 - Modelo com Lei 11.788 | Documind",
  metaDescription: "Termo de compromisso de estágio conforme Lei 11.788/2008. Com bolsa auxílio, carga horária e todas as exigências legais. Baixe em PDF.",
  keywords: ["contrato de estágio", "termo de estágio", "modelo estágio", "estágio obrigatório", "estágio remunerado"],
  isPremium: true,
  sections: [
    {
      title: "Empresa Concedente",
      fields: [
        { name: "empresa_nome", label: "Razão social", type: "text", required: true },
        { name: "empresa_cnpj", label: "CNPJ", type: "cnpj", required: true },
        { name: "supervisor_nome", label: "Nome do supervisor", type: "text", required: true },
      ],
    },
    {
      title: "Estagiário",
      fields: [
        { name: "estagiario_nome", label: "Nome completo", type: "text", required: true },
        { name: "estagiario_cpf", label: "CPF", type: "cpf", required: true },
        { name: "instituicao", label: "Instituição de ensino", type: "text", required: true },
        { name: "curso", label: "Curso", type: "text", required: true },
      ],
    },
    {
      title: "Condições do Estágio",
      fields: [
        { name: "atividades", label: "Atividades a serem desenvolvidas", type: "textarea", required: true },
        { name: "bolsa", label: "Bolsa auxílio", type: "currency" },
        { name: "carga_horaria", label: "Carga horária diária", type: "select", options: ["4 horas", "6 horas"] },
        { name: "data_inicio", label: "Data de início", type: "date", required: true },
        { name: "data_fim", label: "Data de término", type: "date", required: true },
        { name: "tipo_estagio", label: "Tipo", type: "select", options: ["Obrigatório", "Não obrigatório"] },
      ],
    },
  ],
  faq: [
    { question: "Estagiário tem direito a férias?", answer: "Sim, após 12 meses de estágio, o estagiário tem direito a 30 dias de recesso remunerado (se recebe bolsa). Se o estágio for menor que 12 meses, o recesso é proporcional." },
    { question: "Estágio cria vínculo empregatício?", answer: "Não, desde que siga as regras da Lei 11.788/2008. Se descumpridas (ex: funções incompatíveis, ausência de supervisão), pode ser reconhecido vínculo empregatício." },
  ],
  relatedSlugs: ["contrato-de-trabalho-clt", "termo-de-rescisao"],
};

const termoRescisao: Template = {
  slug: "termo-de-rescisao",
  title: "Modelo de Termo de Rescisão de Contrato de Trabalho",
  shortTitle: "Termo de Rescisão",
  category: "trabalhista",
  description: "TRCT - Termo de Rescisão do Contrato de Trabalho com cálculo de verbas rescisórias e quitação.",
  longDescription: "O Termo de Rescisão do Contrato de Trabalho (TRCT) formaliza o encerramento da relação de emprego. Nosso modelo inclui dados do empregador e empregado, motivo da rescisão, verbas rescisórias devidas, deduções e quitação. Adequado para demissão sem justa causa, pedido de demissão, demissão por justa causa e acordo.",
  metaTitle: "Termo de Rescisão Trabalhista 2025 - TRCT Modelo | Documind",
  metaDescription: "Modelo de TRCT - Termo de Rescisão do Contrato de Trabalho. Verbas rescisórias, FGTS, aviso prévio e quitação. Baixe em PDF.",
  keywords: ["termo de rescisão", "TRCT", "rescisão trabalhista", "verbas rescisórias", "demissão"],
  isPremium: true,
  sections: [
    {
      title: "Empregador",
      fields: [
        { name: "empregador_nome", label: "Razão social", type: "text", required: true },
        { name: "empregador_cnpj", label: "CNPJ", type: "cnpj", required: true },
      ],
    },
    {
      title: "Empregado",
      fields: [
        { name: "empregado_nome", label: "Nome completo", type: "text", required: true },
        { name: "empregado_cpf", label: "CPF", type: "cpf", required: true },
        { name: "funcao", label: "Função exercida", type: "text", required: true },
      ],
    },
    {
      title: "Dados da Rescisão",
      fields: [
        { name: "data_admissao", label: "Data de admissão", type: "date", required: true },
        { name: "data_demissao", label: "Data de demissão", type: "date", required: true },
        { name: "motivo", label: "Motivo da rescisão", type: "select", options: ["Demissão sem justa causa", "Pedido de demissão", "Demissão por justa causa", "Acordo mútuo (Art. 484-A)", "Término de contrato"], required: true },
        { name: "salario", label: "Último salário", type: "currency", required: true },
        { name: "aviso_previo", label: "Aviso prévio", type: "select", options: ["Trabalhado", "Indenizado", "Dispensado"] },
      ],
    },
  ],
  faq: [
    { question: "Quais verbas são devidas na demissão sem justa causa?", answer: "Saldo de salário, aviso prévio (trabalhado ou indenizado), férias vencidas e proporcionais + 1/3, 13° proporcional, multa de 40% do FGTS e liberação do FGTS." },
    { question: "O que muda no acordo mútuo (Art. 484-A)?", answer: "O trabalhador recebe metade do aviso prévio indenizado, 20% da multa do FGTS (em vez de 40%), pode sacar 80% do FGTS, mas não tem direito ao seguro-desemprego." },
  ],
  relatedSlugs: ["contrato-de-trabalho-clt", "acordo-de-trabalho-home-office"],
};

const acordoHomeOffice: Template = {
  slug: "acordo-de-trabalho-home-office",
  title: "Modelo de Acordo de Trabalho Home Office / Teletrabalho",
  shortTitle: "Acordo Home Office",
  category: "trabalhista",
  description: "Aditivo contratual para regulamentar o trabalho remoto. Equipamentos, jornada, despesas e ergonomia.",
  longDescription: "O acordo de teletrabalho é exigido pela CLT (Art. 75-C e seguintes) para formalizar o trabalho remoto. Nosso modelo inclui cláusulas sobre jornada, controle de atividades, equipamentos fornecidos pela empresa, reembolso de despesas (internet, energia), ergonomia, segurança da informação e condições para retorno ao presencial.",
  metaTitle: "Acordo de Trabalho Home Office 2025 - Modelo | Documind",
  metaDescription: "Modelo de acordo de teletrabalho / home office conforme CLT. Equipamentos, despesas, jornada e segurança da informação. Baixe em PDF.",
  keywords: ["acordo home office", "contrato teletrabalho", "trabalho remoto CLT", "aditivo home office"],
  isPremium: true,
  sections: [
    {
      title: "Empregador",
      fields: [
        { name: "empregador_nome", label: "Razão social", type: "text", required: true },
        { name: "empregador_cnpj", label: "CNPJ", type: "cnpj", required: true },
      ],
    },
    {
      title: "Empregado",
      fields: [
        { name: "empregado_nome", label: "Nome completo", type: "text", required: true },
        { name: "empregado_cpf", label: "CPF", type: "cpf", required: true },
        { name: "funcao", label: "Função", type: "text", required: true },
      ],
    },
    {
      title: "Condições do Teletrabalho",
      fields: [
        { name: "modalidade", label: "Modalidade", type: "select", options: ["100% remoto", "Híbrido (parcial)", "Remoto com idas ao escritório"] },
        { name: "equipamentos", label: "Equipamentos fornecidos", type: "textarea", placeholder: "Notebook, monitor, cadeira..." },
        { name: "reembolso_mensal", label: "Reembolso mensal (internet/energia)", type: "currency" },
        { name: "jornada", label: "Controle de jornada", type: "select", options: ["Por tarefa (sem controle)", "Ponto eletrônico", "Sistema de registro"] },
        { name: "data_inicio", label: "Início do teletrabalho", type: "date", required: true },
      ],
    },
  ],
  faq: [
    { question: "A empresa é obrigada a pagar internet e energia?", answer: "A CLT determina que os custos de infraestrutura devem ser definidos em contrato. Não há obrigatoriedade legal, mas é recomendado para evitar questionamentos futuros." },
  ],
  relatedSlugs: ["contrato-de-trabalho-clt", "termo-de-rescisao"],
};

// ════════════════════════════════════════════════════
// PESSOAL / GERAL
// ════════════════════════════════════════════════════

const procuracaoSimples: Template = {
  slug: "procuracao-simples",
  title: "Modelo de Procuração Simples",
  shortTitle: "Procuração Simples",
  category: "pessoal",
  description: "Procuração particular para representação em atos específicos. Outorga poderes a terceiros de forma simples.",
  longDescription: "A procuração simples (instrumento particular) é utilizada para autorizar outra pessoa a agir em seu nome em situações específicas, como receber documentos, representar em reuniões, resolver assuntos bancários ou assinar contratos. Nosso modelo inclui identificação do outorgante e outorgado, poderes concedidos, prazo de validade e condições.",
  metaTitle: "Modelo de Procuração Simples 2025 - Grátis | Documind",
  metaDescription: "Gere uma procuração simples online. Modelo para representação em atos específicos. Personalize e baixe em PDF. Grátis.",
  keywords: ["procuração simples", "modelo de procuração", "procuração particular", "procuração para terceiros"],
  isPremium: false,
  sections: [
    {
      title: "Outorgante (quem dá os poderes)",
      fields: [
        { name: "outorgante_nome", label: "Nome completo", type: "text", required: true },
        { name: "outorgante_cpf", label: "CPF", type: "cpf", required: true },
        { name: "outorgante_rg", label: "RG", type: "text" },
        { name: "outorgante_endereco", label: "Endereço", type: "text", required: true },
      ],
    },
    {
      title: "Outorgado (quem recebe os poderes)",
      fields: [
        { name: "outorgado_nome", label: "Nome completo", type: "text", required: true },
        { name: "outorgado_cpf", label: "CPF", type: "cpf", required: true },
        { name: "outorgado_rg", label: "RG", type: "text" },
      ],
    },
    {
      title: "Poderes",
      fields: [
        { name: "poderes", label: "Poderes concedidos", type: "textarea", required: true, placeholder: "Descreva os poderes que está concedendo..." },
        { name: "finalidade", label: "Finalidade", type: "text", placeholder: "Ex: Representação junto ao INSS" },
        { name: "validade", label: "Validade", type: "text", placeholder: "Ex: 90 dias, Indeterminada" },
      ],
    },
  ],
  faq: [
    { question: "Procuração simples precisa de reconhecimento de firma?", answer: "Não é obrigatório, mas muitos órgãos e instituições exigem. É recomendável reconhecer firma em cartório para maior aceitação." },
    { question: "Qual a diferença entre procuração pública e particular?", answer: "A procuração pública é feita em cartório e é obrigatória para atos que exigem escritura pública (como compra de imóveis). A particular pode ser feita de forma privada para atos mais simples." },
  ],
  relatedSlugs: ["declaracao-de-residencia", "recibo-de-pagamento"],
};

const reciboPagamento: Template = {
  slug: "recibo-de-pagamento",
  title: "Modelo de Recibo de Pagamento",
  shortTitle: "Recibo de Pagamento",
  category: "pessoal",
  description: "Recibo de pagamento para comprovar transações financeiras. Serve como comprovante de quitação.",
  longDescription: "O recibo de pagamento é o documento que comprova que um valor foi pago e recebido. É essencial para manter registros financeiros e serve como prova de quitação. Nosso modelo inclui identificação de quem paga e quem recebe, valor, referência do pagamento, data e forma de pagamento.",
  metaTitle: "Modelo de Recibo de Pagamento 2025 - Grátis | Documind",
  metaDescription: "Gere recibos de pagamento profissionais. Modelo para comprovar transações e quitação. Personalize e baixe em PDF grátis.",
  keywords: ["recibo de pagamento", "modelo de recibo", "recibo online", "comprovante de pagamento"],
  isPremium: false,
  sections: [
    {
      title: "Recebedor",
      fields: [
        { name: "recebedor_nome", label: "Nome/Razão social", type: "text", required: true },
        { name: "recebedor_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
      ],
    },
    {
      title: "Pagador",
      fields: [
        { name: "pagador_nome", label: "Nome/Razão social", type: "text", required: true },
        { name: "pagador_cpf_cnpj", label: "CPF/CNPJ", type: "text" },
      ],
    },
    {
      title: "Dados do Pagamento",
      fields: [
        { name: "valor", label: "Valor", type: "currency", required: true },
        { name: "referente_a", label: "Referente a", type: "text", required: true, placeholder: "Ex: Pagamento de aluguel ref. Janeiro/2025" },
        { name: "forma_pagamento", label: "Forma de pagamento", type: "select", options: ["PIX", "Dinheiro", "Transferência bancária", "Cartão de crédito", "Boleto", "Cheque"] },
        { name: "data_pagamento", label: "Data do pagamento", type: "date", required: true },
      ],
    },
  ],
  faq: [
    { question: "Recibo tem validade como comprovante de pagamento?", answer: "Sim. O recibo assinado serve como prova de pagamento e pode ser utilizado judicialmente. Recomenda-se que ambas as partes assinem e que se mencione a forma de pagamento." },
  ],
  relatedSlugs: ["procuracao-simples", "contrato-de-prestacao-de-servico"],
};

const declaracaoResidencia: Template = {
  slug: "declaracao-de-residencia",
  title: "Modelo de Declaração de Residência",
  shortTitle: "Declaração de Residência",
  category: "pessoal",
  description: "Declaração de residência para comprovar endereço quando não possui comprovante em seu nome.",
  longDescription: "A declaração de residência é utilizada quando a pessoa não possui comprovante de endereço em seu nome (contas de água, luz, etc.). Serve para abrir conta em banco, matricular em escola, solicitar documentos e outros fins. Nosso modelo segue o formato aceito pela maioria das instituições.",
  metaTitle: "Declaração de Residência 2025 - Modelo Grátis | Documind",
  metaDescription: "Modelo de declaração de residência para comprovar endereço. Aceito por bancos e órgãos públicos. Personalize e baixe em PDF grátis.",
  keywords: ["declaração de residência", "comprovante de residência", "declaração endereço", "comprovante endereço"],
  isPremium: false,
  sections: [
    {
      title: "Declarante",
      fields: [
        { name: "declarante_nome", label: "Nome completo", type: "text", required: true },
        { name: "declarante_cpf", label: "CPF", type: "cpf", required: true },
        { name: "declarante_rg", label: "RG", type: "text" },
      ],
    },
    {
      title: "Endereço",
      fields: [
        { name: "endereco", label: "Endereço completo", type: "text", required: true },
        { name: "bairro", label: "Bairro", type: "text", required: true },
        { name: "cidade", label: "Cidade", type: "text", required: true },
        { name: "estado", label: "Estado (UF)", type: "text", required: true },
        { name: "cep", label: "CEP", type: "text", required: true },
        { name: "finalidade", label: "Finalidade", type: "text", placeholder: "Ex: Abertura de conta bancária" },
      ],
    },
  ],
  faq: [
    { question: "A declaração de residência precisa ser registrada em cartório?", answer: "Não é obrigatório, mas muitas instituições podem exigir reconhecimento de firma. Algumas aceitam a declaração simples, enquanto outras pedem o registro em cartório." },
  ],
  relatedSlugs: ["procuracao-simples", "termo-de-responsabilidade"],
};

const termoResponsabilidade: Template = {
  slug: "termo-de-responsabilidade",
  title: "Modelo de Termo de Responsabilidade",
  shortTitle: "Termo de Responsabilidade",
  category: "pessoal",
  description: "Termo de responsabilidade para uso de equipamentos, veículos, menores ou atividades de risco.",
  longDescription: "O termo de responsabilidade é um documento em que uma pessoa assume a responsabilidade por algo — equipamentos, veículos, menores de idade ou participação em atividades. Nosso modelo é flexível e pode ser adaptado para diversas situações: empréstimo de equipamentos, autorização para menores, uso de espaços e atividades de risco.",
  metaTitle: "Termo de Responsabilidade 2025 - Modelo Grátis | Documind",
  metaDescription: "Modelo de termo de responsabilidade para equipamentos, menores ou atividades. Personalize com IA e baixe em PDF grátis.",
  keywords: ["termo de responsabilidade", "modelo termo responsabilidade", "termo equipamento", "termo atividade"],
  isPremium: false,
  sections: [
    {
      title: "Responsável",
      fields: [
        { name: "responsavel_nome", label: "Nome completo", type: "text", required: true },
        { name: "responsavel_cpf", label: "CPF", type: "cpf", required: true },
        { name: "responsavel_endereco", label: "Endereço", type: "text" },
      ],
    },
    {
      title: "Detalhes",
      fields: [
        { name: "objeto", label: "Objeto da responsabilidade", type: "textarea", required: true, placeholder: "Ex: Notebook Dell modelo XYZ, patrimônio #123" },
        { name: "finalidade", label: "Finalidade", type: "text" },
        { name: "data_inicio", label: "Data de início", type: "date", required: true },
        { name: "data_fim", label: "Data de devolução/término", type: "date" },
        { name: "condicoes", label: "Condições especiais", type: "textarea" },
      ],
    },
  ],
  faq: [
    { question: "O termo de responsabilidade isenta totalmente de responsabilidade?", answer: "Não necessariamente. Ele demonstra ciência e aceitação das condições, mas a legislação brasileira não permite cláusulas que isentem completamente de responsabilidade por dolo ou negligência grave." },
  ],
  relatedSlugs: ["autorizacao-de-uso-de-imagem", "declaracao-de-residencia"],
};

const autorizacaoImagem: Template = {
  slug: "autorizacao-de-uso-de-imagem",
  title: "Modelo de Autorização de Uso de Imagem",
  shortTitle: "Autorização de Imagem",
  category: "pessoal",
  description: "Autorização para uso de imagem, voz e nome em fotos, vídeos e materiais publicitários.",
  longDescription: "A autorização de uso de imagem é essencial para qualquer uso comercial de fotos, vídeos ou gravações de uma pessoa. Baseada no Art. 20 do Código Civil e na LGPD, nosso modelo define claramente os fins do uso, mídias autorizadas, prazo, remuneração (se houver) e condições de revogação.",
  metaTitle: "Autorização de Uso de Imagem 2025 - Modelo | Documind",
  metaDescription: "Modelo de autorização de uso de imagem para fotos, vídeos e publicidade. Conforme Código Civil e LGPD. Baixe em PDF.",
  keywords: ["autorização de imagem", "uso de imagem", "cessão de imagem", "autorização fotos", "LGPD imagem"],
  isPremium: false,
  sections: [
    {
      title: "Autorizante (titular da imagem)",
      fields: [
        { name: "autorizante_nome", label: "Nome completo", type: "text", required: true },
        { name: "autorizante_cpf", label: "CPF", type: "cpf", required: true },
      ],
    },
    {
      title: "Autorizado (quem usará a imagem)",
      fields: [
        { name: "autorizado_nome", label: "Nome/Empresa", type: "text", required: true },
        { name: "autorizado_cpf_cnpj", label: "CPF/CNPJ", type: "text", required: true },
      ],
    },
    {
      title: "Condições",
      fields: [
        { name: "finalidade", label: "Finalidade do uso", type: "textarea", required: true, placeholder: "Ex: Material publicitário, redes sociais..." },
        { name: "midias", label: "Mídias autorizadas", type: "textarea", placeholder: "Ex: Instagram, site, TV, impressos..." },
        { name: "prazo", label: "Prazo de autorização", type: "text", placeholder: "Ex: 1 ano, Indeterminado" },
        { name: "remuneracao", label: "Remuneração", type: "currency", helperText: "Deixe vazio se não houver remuneração" },
        { name: "territorial", label: "Território", type: "select", options: ["Brasil", "Nacional e internacional", "Específico"] },
      ],
    },
  ],
  faq: [
    { question: "A autorização de uso de imagem pode ser revogada?", answer: "Sim. A pessoa pode revogar a autorização a qualquer momento. Porém, materiais já publicados antes da revogação permanecem válidos (a menos que cause dano)." },
  ],
  relatedSlugs: ["termo-de-responsabilidade", "termo-de-confidencialidade-nda"],
};

const contratoEmprestimo: Template = {
  slug: "contrato-de-emprestimo-entre-pessoas",
  title: "Modelo de Contrato de Empréstimo entre Pessoas (Mútuo)",
  shortTitle: "Empréstimo entre Pessoas",
  category: "pessoal",
  description: "Contrato de mútuo para formalizar empréstimo de dinheiro entre pessoas físicas. Valor, juros e prazo de devolução.",
  longDescription: "O contrato de mútuo (empréstimo entre pessoas) formaliza o empréstimo de dinheiro entre pessoas físicas, protegendo ambas as partes. Nosso modelo inclui identificação das partes, valor emprestado, juros (quando aplicáveis), prazo de devolução, forma de pagamento e multa por atraso. É regulado pelos artigos 586 a 592 do Código Civil.",
  metaTitle: "Contrato de Empréstimo entre Pessoas 2025 - Modelo | Documind",
  metaDescription: "Modelo de contrato de mútuo para empréstimo entre pessoas físicas. Valor, juros e prazo de pagamento. Baixe em PDF e formalize.",
  keywords: ["contrato empréstimo", "empréstimo entre pessoas", "contrato mútuo", "empréstimo particular", "contrato empréstimo dinheiro"],
  isPremium: false,
  sections: [
    {
      title: "Mutuante (quem empresta)",
      fields: [
        { name: "mutuante_nome", label: "Nome completo", type: "text", required: true },
        { name: "mutuante_cpf", label: "CPF", type: "cpf", required: true },
        { name: "mutuante_endereco", label: "Endereço", type: "text" },
      ],
    },
    {
      title: "Mutuário (quem recebe)",
      fields: [
        { name: "mutuario_nome", label: "Nome completo", type: "text", required: true },
        { name: "mutuario_cpf", label: "CPF", type: "cpf", required: true },
        { name: "mutuario_endereco", label: "Endereço", type: "text" },
      ],
    },
    {
      title: "Condições do Empréstimo",
      fields: [
        { name: "valor", label: "Valor emprestado", type: "currency", required: true },
        { name: "juros", label: "Juros mensais (%)", type: "number", placeholder: "Ex: 1 (para 1% ao mês)" },
        { name: "data_emprestimo", label: "Data do empréstimo", type: "date", required: true },
        { name: "data_devolucao", label: "Data de devolução", type: "date", required: true },
        { name: "forma_pagamento", label: "Forma de pagamento", type: "select", options: ["Parcela única", "Parcelas mensais", "PIX", "Transferência bancária"] },
        { name: "numero_parcelas", label: "Número de parcelas", type: "number" },
      ],
    },
  ],
  faq: [
    { question: "É legal cobrar juros em empréstimo entre pessoas?", answer: "Sim, desde que não ultrapasse 1% ao mês (12% ao ano). Juros acima desse limite podem ser considerados usura, conforme o Decreto 22.626/33 (Lei de Usura)." },
    { question: "Precisa declarar no Imposto de Renda?", answer: "Sim. Empréstimos acima de R$5.000 devem ser declarados na DIRPF tanto por quem emprestou quanto por quem recebeu." },
  ],
  relatedSlugs: ["recibo-de-pagamento", "procuracao-simples"],
};

// ════════════════════════════════════════════════════
// EXPORT ALL TEMPLATES
// ════════════════════════════════════════════════════

export const ALL_TEMPLATES: Template[] = [
  // Imobiliário
  contratoAluguelResidencial,
  contratoAluguelComercial,
  contratoCompraVenda,
  distratoLocacao,
  termoVistoria,
  // Comercial
  contratoPrestacaoServico,
  modeloOrcamento,
  contratoParceria,
  termoNDA,
  contratoFreelancer,
  // Trabalhista
  contratoCLT,
  contratoEstagio,
  termoRescisao,
  acordoHomeOffice,
  // Pessoal
  procuracaoSimples,
  reciboPagamento,
  declaracaoResidencia,
  termoResponsabilidade,
  autorizacaoImagem,
  contratoEmprestimo,
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return ALL_TEMPLATES.find((t) => t.slug === slug);
}

export function getTemplatesByCategory(category: string): Template[] {
  return ALL_TEMPLATES.filter((t) => t.category === category);
}

export function searchTemplates(query: string): Template[] {
  const q = query.toLowerCase();
  return ALL_TEMPLATES.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q))
  );
}
