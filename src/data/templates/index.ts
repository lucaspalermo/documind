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
  longDescription: "O contrato de aluguel residencial é o documento jurídico indispensável que formaliza a relação entre locador (proprietário) e locatário (inquilino), estabelecendo direitos e deveres de ambas as partes durante toda a vigência da locação. Trata-se de um dos contratos mais comuns no Brasil, utilizado diariamente por milhões de pessoas que buscam moradia em imóveis alugados.\n\nA importância desse documento vai muito além de uma simples formalidade. Sem um contrato de aluguel residencial bem redigido, tanto o proprietário quanto o inquilino ficam desprotegidos em caso de inadimplência, danos ao imóvel, necessidade de despejo ou qualquer outro conflito que possa surgir durante a locação. O contrato é a principal prova jurídica da relação locatícia e é exigido em ações judiciais de despejo, cobrança e revisional de aluguel.\n\nVocê precisa de um contrato de aluguel residencial sempre que for alugar um imóvel para fins de moradia, seja casa, apartamento, kitnet ou qualquer outro tipo de habitação. Mesmo entre familiares ou amigos, a formalização por escrito é altamente recomendada para evitar desentendimentos futuros. O contrato também é necessário para que o inquilino comprove residência perante bancos, escolas e órgãos públicos.\n\nA legislação brasileira que rege as locações residenciais é a Lei do Inquilinato (Lei nº 8.245/1991), complementada pelo Código Civil (Lei nº 10.406/2002). A Lei do Inquilinato define regras específicas sobre prazos, garantias locatícias, reajuste de aluguel, direito de preferência na compra do imóvel, benfeitorias e procedimentos de despejo. É fundamental que o contrato esteja em conformidade com essa legislação para ter validade jurídica plena.\n\nAs cláusulas essenciais que todo contrato de aluguel residencial deve conter incluem: qualificação completa das partes (locador e locatário) com CPF, RG e endereço; descrição detalhada do imóvel com endereço completo e matrícula; valor do aluguel mensal e data de vencimento; índice de reajuste anual (geralmente IGP-M ou IPCA); prazo de vigência do contrato (recomenda-se 30 meses para garantir o direito à denúncia vazia); modalidade de garantia locatícia (caução, fiança, seguro-fiança ou cessão fiduciária); obrigações do locador e do locatário; condições para rescisão antecipada e multa proporcional; responsabilidade por reparos e benfeitorias; e cláusula de vistoria do imóvel.\n\nEntre os erros mais comuns ao elaborar um contrato de aluguel residencial estão: não realizar a vistoria detalhada do imóvel na entrada e saída; deixar de registrar todas as garantias exigidas; não especificar claramente quem é responsável por cada tipo de reparo; omitir o índice de reajuste anual; não prever cláusula de multa proporcional em caso de rescisão antecipada; exigir mais de uma modalidade de garantia simultaneamente (o que é vedado pela Lei do Inquilinato); e não incluir cláusula sobre sublocação e cessão.\n\nO Documind gera seu contrato de aluguel residencial personalizado com inteligência artificial em poucos minutos. Basta preencher os dados das partes e do imóvel, e o sistema cria automaticamente um documento completo, em conformidade com a Lei do Inquilinato e pronto para assinatura. Economize tempo e tenha segurança jurídica sem precisar contratar um advogado para situações simples de locação.",
  metaTitle: "Modelo de Contrato de Aluguel Residencial 2026 - Grátis | Documind",
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
  longDescription: "O contrato de aluguel comercial é o instrumento jurídico que regula a locação de imóveis destinados ao exercício de atividades empresariais, comerciais ou profissionais. Diferente do contrato residencial, a locação comercial possui regras específicas previstas na Lei do Inquilinato (Lei nº 8.245/1991) que protegem o fundo de comércio e o ponto comercial do locatário, tornando esse documento ainda mais estratégico para ambas as partes.\n\nA relevância do contrato de aluguel comercial está diretamente ligada à proteção do investimento realizado pelo empresário no imóvel locado. Quando um negócio se estabelece em determinado endereço, constrói uma clientela local, investe em reformas e adaptações, e desenvolve um fundo de comércio que pode valer mais do que o próprio negócio. Sem um contrato bem estruturado, todo esse investimento pode ser perdido em caso de não renovação ou despejo.\n\nEsse contrato é necessário sempre que um imóvel for locado para fins comerciais, industriais ou de prestação de serviços. Isso inclui lojas, escritórios, consultórios, galpões, restaurantes, salões de beleza e qualquer outro estabelecimento comercial. Mesmo em espaços de coworking ou salas comerciais compartilhadas, é fundamental ter um contrato que defina as condições da ocupação.\n\nA legislação aplicável é a Lei do Inquilinato (Lei nº 8.245/1991), especialmente os artigos 51 a 57 que tratam da locação não residencial. O artigo 51 é particularmente importante, pois garante ao locatário o direito à ação renovatória — o direito de renovar compulsoriamente o contrato por igual período — desde que o contrato tenha prazo determinado de no mínimo 5 anos (ou a soma de contratos sucessivos atinja esse prazo) e o locatário explore o mesmo ramo de atividade por no mínimo 3 anos ininterruptos. O Código Civil também se aplica subsidiariamente.\n\nAs cláusulas fundamentais de um contrato de aluguel comercial incluem: qualificação completa das partes (pessoa física ou jurídica) com CNPJ ou CPF; descrição detalhada do imóvel e sua destinação específica (ramo de atividade permitido); valor do aluguel, encargos e índice de reajuste; prazo de vigência (recomenda-se no mínimo 5 anos para garantir o direito à ação renovatória); modalidade de garantia locatícia; cláusula sobre benfeitorias e direito de indenização; previsão sobre luvas (valor pago pelo ponto comercial); responsabilidade por reformas e adequações; cláusula de exclusividade ou não concorrência, se aplicável; condições para cessão e sublocação; e previsão sobre o destino das benfeitorias ao término do contrato.\n\nOs erros mais frequentes em contratos de aluguel comercial são: definir prazo inferior a 5 anos, perdendo o direito à ação renovatória; não especificar claramente a atividade permitida no imóvel; omitir cláusulas sobre benfeitorias e quem terá direito à indenização; não prever condições para cessão do contrato em caso de venda do negócio; deixar de incluir cláusula sobre luvas quando aplicável; não regulamentar o uso de áreas comuns em centros comerciais; e esquecer de prever a possibilidade de revisional de aluguel.\n\nCom o Documind, você gera um contrato de aluguel comercial completo e personalizado por inteligência artificial em minutos. O sistema considera as particularidades da locação comercial, incluindo cláusulas de proteção ao ponto comercial, e gera um documento pronto para assinatura, em conformidade com a Lei do Inquilinato e adequado às necessidades do seu negócio.",
  metaTitle: "Modelo de Contrato de Aluguel Comercial 2026 - Grátis | Documind",
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
  longDescription: "O contrato de compra e venda de imóvel é o instrumento particular que formaliza a negociação entre comprador e vendedor, estabelecendo todas as condições da transação imobiliária. É um dos documentos mais importantes na vida de qualquer pessoa, já que a compra de um imóvel costuma ser o maior investimento financeiro realizado por uma família ou empresa.\n\nA importância desse contrato reside na segurança jurídica que ele proporciona a ambas as partes. Ele serve como compromisso formal da transação, definindo preço, condições de pagamento, prazos e penalidades. Sem um contrato bem elaborado, tanto o comprador quanto o vendedor ficam expostos a riscos graves, como perda de valores pagos, litígios sobre a propriedade ou até mesmo fraudes imobiliárias.\n\nO contrato de compra e venda de imóvel deve ser utilizado em qualquer negociação de aquisição de propriedade, seja casa, apartamento, terreno, sala comercial ou imóvel rural. Ele é necessário tanto em transações à vista quanto em vendas parceladas, financiadas ou com permuta. Mesmo quando o pagamento será feito por meio de financiamento bancário, o contrato particular entre as partes é uma etapa essencial do processo.\n\nA legislação que rege a compra e venda de imóveis no Brasil inclui o Código Civil (Lei nº 10.406/2002), especialmente os artigos 481 a 532 (compra e venda) e 1.225 a 1.510 (direitos reais). É importante observar que, conforme o artigo 108 do Código Civil, para imóveis com valor superior a 30 salários mínimos, a escritura pública lavrada em cartório é obrigatória para a transferência da propriedade. O registro no Cartório de Registro de Imóveis é indispensável para que a propriedade seja efetivamente transferida, conforme o princípio de que \"quem não registra não é dono\". A Lei nº 6.015/1973 (Lei de Registros Públicos) também é aplicável.\n\nAs cláusulas essenciais de um contrato de compra e venda de imóvel incluem: qualificação completa das partes (comprador e vendedor) com CPF, RG, estado civil e regime de bens; descrição detalhada do imóvel com matrícula, inscrição imobiliária e endereço completo; preço total e condições de pagamento (à vista, parcelado, com sinal/arras); cláusula de arras confirmatórias ou penitenciais; prazo para lavratura da escritura e registro; condições suspensivas (obtenção de financiamento, certidões negativas); cláusula sobre ônus, dívidas e tributos pendentes; responsabilidade por IPTU e condomínio; prazo para entrega das chaves e imissão na posse; cláusula de evicção e vícios ocultos; e multa por descumprimento.\n\nOs erros mais comuns na compra e venda de imóveis incluem: não verificar a matrícula atualizada do imóvel; não exigir certidões negativas do vendedor (cíveis, trabalhistas, fiscais e de protesto); não especificar o regime de arras (confirmatórias ou penitenciais); omitir condições suspensivas necessárias; não prever cláusula sobre vícios ocultos; deixar de estipular quem arcará com despesas de escritura, ITBI e registro; e assinar o contrato sem verificar a regularidade fiscal do imóvel.\n\nO Documind gera seu contrato de compra e venda de imóvel personalizado com inteligência artificial, incluindo todas as cláusulas necessárias para uma transação segura. O documento é gerado em conformidade com o Código Civil e pronto para uso, agilizando o processo de negociação imobiliária.",
  metaTitle: "Contrato de Compra e Venda de Imóvel 2026 - Modelo Grátis | Documind",
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
  longDescription: "O distrato de locação é o documento jurídico que formaliza o encerramento amigável e consensual de um contrato de aluguel, seja residencial ou comercial, antes do término do prazo originalmente pactuado. Trata-se de um instrumento essencial para garantir que ambas as partes — locador e locatário — tenham seus direitos resguardados e obrigações claramente definidas no momento da devolução do imóvel.\n\nA importância do distrato de locação não pode ser subestimada. Sem esse documento, o encerramento informal de uma locação pode gerar disputas futuras sobre valores devidos, estado do imóvel, devolução de caução ou fiança, e responsabilidade por débitos de condomínio, IPTU ou contas de consumo. O distrato serve como prova definitiva de que a relação locatícia foi encerrada de comum acordo e que todas as pendências foram resolvidas.\n\nVocê precisa de um distrato de locação sempre que o contrato de aluguel for encerrado antes do prazo final por acordo entre as partes. Isso inclui situações como mudança de cidade do inquilino, venda do imóvel pelo proprietário, renegociação com novo contrato, ou simplesmente quando ambas as partes concordam em encerrar a locação antecipadamente. Mesmo quando o contrato termina no prazo previsto, o distrato é recomendável para formalizar a quitação mútua.\n\nA base legal do distrato de locação está no artigo 472 do Código Civil (Lei nº 10.406/2002), que estabelece que o distrato deve ser feito pela mesma forma exigida para o contrato. A Lei do Inquilinato (Lei nº 8.245/1991) também é aplicável, especialmente no que se refere às multas por rescisão antecipada (art. 4º), que devem ser proporcionais ao tempo restante do contrato conforme entendimento consolidado dos tribunais. A Lei nº 12.112/2009 trouxe importantes alterações à Lei do Inquilinato que devem ser observadas.\n\nAs cláusulas fundamentais de um distrato de locação incluem: referência ao contrato original de locação com data e dados das partes; data efetiva do encerramento da locação; declaração de devolução das chaves e vistoria do imóvel; levantamento de eventuais débitos pendentes (aluguel, condomínio, IPTU, contas de consumo); previsão sobre multa rescisória e forma de cálculo proporcional; condições para devolução da garantia locatícia (caução, fiança ou seguro-fiança); declaração sobre o estado do imóvel na devolução; cláusula de quitação mútua e recíproca; e previsão sobre reparos necessários e prazo para execução.\n\nOs erros mais comuns ao elaborar um distrato de locação incluem: não realizar vistoria detalhada do imóvel no momento da devolução; não confrontar a vistoria de saída com a vistoria de entrada; deixar de mencionar débitos pendentes de condomínio ou IPTU; não calcular corretamente a multa proporcional; esquecer de prever a devolução ou liberação da garantia locatícia; não obter assinatura de todos os envolvidos (incluindo fiadores, se houver); e assinar o distrato sem verificar se todas as contas de consumo foram quitadas.\n\nO Documind gera o distrato de locação personalizado com inteligência artificial, incluindo todas as cláusulas necessárias para um encerramento seguro da locação. Basta informar os dados do contrato original e as condições acordadas para o encerramento, e o sistema cria um documento completo, pronto para assinatura por ambas as partes.",
  metaTitle: "Modelo de Distrato de Locação 2026 - Grátis | Documind",
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
  longDescription: "O termo de vistoria de imóvel é o documento técnico que registra detalhadamente as condições físicas de um imóvel em um determinado momento, servindo como referência oficial para comparação futura. É utilizado principalmente em locações (na entrada e saída do inquilino) e em transações de compra e venda, sendo um dos documentos mais importantes para prevenir conflitos entre as partes envolvidas.\n\nA importância do termo de vistoria é imensa porque ele funciona como uma fotografia documental do estado do imóvel. Sem esse registro, torna-se praticamente impossível comprovar quais danos já existiam antes da ocupação e quais foram causados pelo locatário ou comprador. Em disputas judiciais, o termo de vistoria é uma das provas mais valorizadas pelos juízes para determinar responsabilidades por reparos e indenizações.\n\nO termo de vistoria deve ser realizado sempre que houver transferência de posse de um imóvel. Na locação, ele é obrigatório no momento da entrega das chaves ao inquilino (vistoria de entrada) e na devolução do imóvel ao proprietário (vistoria de saída). Na compra e venda, é recomendável realizá-lo antes da assinatura do contrato e no momento da entrega efetiva do imóvel. Também é utilizado em entregas de imóveis novos por construtoras e incorporadoras.\n\nA Lei do Inquilinato (Lei nº 8.245/1991) estabelece no artigo 22, inciso V, que o locador é obrigado a entregar o imóvel em estado de servir ao uso a que se destina, e no artigo 23, inciso III, que o locatário deve restituir o imóvel no estado em que o recebeu, salvo deteriorações decorrentes do uso normal. O Código de Defesa do Consumidor (Lei nº 8.078/1990) também se aplica nas relações com construtoras e incorporadoras. O termo de vistoria é a prova principal para verificar o cumprimento dessas obrigações.\n\nOs itens essenciais que devem constar em um termo de vistoria completo incluem: identificação das partes e do imóvel; data e hora da vistoria; descrição detalhada de cada cômodo (paredes, piso, teto, portas, janelas); estado da pintura e revestimentos; condições das instalações elétricas (tomadas, interruptores, luminárias); condições das instalações hidráulicas (torneiras, registros, descargas, ralos); estado dos vidros, fechaduras e maçanetas; funcionamento de equipamentos inclusos (ar-condicionado, aquecedor, chuveiro); condições de áreas externas (garagem, quintal, varanda); registro de mobília, se houver; e espaço para fotos ou referência a anexo fotográfico.\n\nOs erros mais comuns na elaboração do termo de vistoria incluem: ser genérico demais nas descrições (ex: \"bom estado\" sem detalhar); não registrar fotografias como anexo ao documento; não verificar o funcionamento de torneiras, descargas e instalações elétricas; esquecer de vistoriar áreas menos visíveis como teto, parte interna de armários e área de serviço; não realizar a vistoria de saída comparando com a vistoria de entrada; deixar de anotar a leitura dos medidores de água, luz e gás; e não coletar a assinatura de ambas as partes no documento.\n\nO Documind gera termos de vistoria detalhados e personalizados com inteligência artificial, organizados por cômodo e com campos específicos para cada item a ser inspecionado. O documento gerado é profissional, abrangente e pronto para uso em locações ou transações imobiliárias.",
  metaTitle: "Termo de Vistoria de Imóvel 2026 - Modelo Grátis | Documind",
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
  longDescription: "O contrato de prestação de serviço é o instrumento jurídico que regulamenta a relação entre o contratante (tomador do serviço) e o prestador (pessoa física ou jurídica que executa o serviço), sem que se configure vínculo empregatício entre as partes. É um dos contratos mais utilizados no mercado brasileiro, abrangendo desde serviços profissionais especializados até atividades operacionais terceirizadas.\n\nA importância desse contrato está na proteção que ele oferece a ambas as partes. Para o contratante, o documento garante que o serviço será executado conforme as especificações acordadas, dentro do prazo e com a qualidade esperada. Para o prestador, o contrato assegura o recebimento do valor combinado e define claramente o escopo do trabalho, evitando que sejam exigidas atividades não previstas. Além disso, um contrato bem redigido evita a caracterização de vínculo empregatício, protegendo o contratante de reclamações trabalhistas.\n\nEsse contrato é necessário sempre que uma pessoa ou empresa contratar outra para a execução de serviços específicos sem subordinação hierárquica. Isso inclui consultorias, desenvolvimento de software, serviços de marketing, contabilidade, advocacia, arquitetura, reformas, manutenção, limpeza terceirizada, treinamentos, coaching e qualquer outra atividade prestada de forma autônoma. É essencial tanto para profissionais liberais quanto para empresas de todos os portes.\n\nA base legal do contrato de prestação de serviço é o Código Civil (Lei nº 10.406/2002), nos artigos 593 a 609, que regulam a prestação de serviço. A Lei nº 13.429/2017 (Lei da Terceirização) e a Reforma Trabalhista (Lei nº 13.467/2017) também são relevantes, especialmente para definir os limites entre a prestação de serviço autônoma e o vínculo empregatício. O Código de Defesa do Consumidor (Lei nº 8.078/1990) aplica-se quando o contratante é consumidor final.\n\nAs cláusulas essenciais de um contrato de prestação de serviço incluem: qualificação completa das partes com CPF/CNPJ; descrição detalhada dos serviços a serem prestados (escopo); cronograma de execução com marcos e entregas; valor total ou por etapa e condições de pagamento; obrigações específicas do contratante e do prestador; cláusula de confidencialidade e sigilo; propriedade intelectual sobre o material produzido; responsabilidade por materiais e equipamentos; condições para alterações no escopo; cláusula de não exclusividade (quando aplicável); hipóteses de rescisão e multa; garantia sobre os serviços prestados; e foro competente para resolução de disputas.\n\nOs erros mais comuns ao elaborar um contrato de prestação de serviço incluem: ser vago na descrição do escopo, gerando divergências sobre o que está incluso; não definir critérios objetivos de aceitação das entregas; omitir cláusula sobre propriedade intelectual do material produzido; não prever condições para solicitações extras fora do escopo; incluir cláusulas que configurem subordinação (horário fixo, exclusividade obrigatória, pessoalidade), o que pode gerar vínculo empregatício; deixar de estipular prazo para pagamento após a entrega; e não incluir cláusula de confidencialidade quando houver acesso a informações sensíveis.\n\nO Documind gera contratos de prestação de serviço personalizados com inteligência artificial, adaptados ao tipo específico de serviço e às necessidades de cada relação comercial. O documento é gerado em conformidade com a legislação vigente, com cláusulas claras e equilibradas para ambas as partes.",
  metaTitle: "Contrato de Prestação de Serviço 2026 - Modelo Grátis | Documind",
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
  longDescription: "O modelo de orçamento e proposta comercial é o documento profissional que apresenta sua empresa, seus serviços ou produtos e suas condições comerciais a um potencial cliente. Mais do que uma simples lista de preços, uma proposta comercial bem elaborada é uma ferramenta de vendas poderosa que demonstra profissionalismo, transmite confiança e aumenta significativamente as chances de fechar negócios.\n\nA importância de uma proposta comercial estruturada vai além da apresentação de valores. Ela funciona como o primeiro contrato informal entre as partes, estabelecendo expectativas claras sobre o que será entregue, em qual prazo e por qual valor. Uma proposta profissional diferencia sua empresa da concorrência, especialmente em processos de cotação onde o cliente compara múltiplos fornecedores. Além disso, a proposta aceita pode servir como base para o contrato formal de prestação de serviço.\n\nVocê precisa de uma proposta comercial sempre que for apresentar seus serviços ou produtos a um potencial cliente, participar de cotações e licitações, formalizar condições comerciais negociadas verbalmente, ou responder a solicitações de orçamento. É utilizada por prestadores de serviço, consultores, agências, desenvolvedores, arquitetos, engenheiros, empresas de tecnologia, fornecedores de produtos e profissionais de todas as áreas.\n\nEmbora a proposta comercial não tenha uma legislação específica que a regulamente, ela está amparada pelo Código Civil (Lei nº 10.406/2002) nos artigos que tratam da formação dos contratos (arts. 427 a 435). O artigo 427 estabelece que a proposta de contrato obriga o proponente, ou seja, uma proposta comercial aceita gera obrigação de cumprimento. O Código de Defesa do Consumidor (Lei nº 8.078/1990) também é aplicável quando o destinatário é consumidor final, especialmente no que se refere à vinculação da oferta (art. 30). Por isso, é fundamental que os valores e condições apresentados sejam precisos.\n\nOs elementos essenciais de uma proposta comercial profissional incluem: apresentação da empresa (breve histórico, diferenciais, clientes atendidos); contextualização do problema ou necessidade do cliente; descrição detalhada dos serviços ou produtos oferecidos; escopo de trabalho com entregas e marcos definidos; cronograma de execução; tabela de preços com valores unitários e total; condições de pagamento (à vista, parcelado, entrada); prazo de validade da proposta; termos e condições gerais; exclusões (o que não está incluso na proposta); garantias oferecidas; e dados para contato e aceite.\n\nOs erros mais comuns ao elaborar uma proposta comercial incluem: não personalizar a proposta para o cliente específico; ser genérico demais na descrição dos serviços; não definir claramente o escopo e as exclusões; apresentar valores sem explicar o que está incluso em cada item; não estabelecer prazo de validade para a proposta; omitir condições de pagamento e reajuste; não incluir cronograma de entregas; usar linguagem excessivamente técnica que o cliente não entende; e não incluir casos de sucesso ou referências que gerem credibilidade.\n\nO Documind gera propostas comerciais profissionais e personalizadas com inteligência artificial, adaptadas ao seu segmento de atuação e ao perfil do cliente. Basta informar os dados da sua empresa e os serviços oferecidos, e o sistema cria um documento visualmente atraente e comercialmente eficaz, pronto para enviar ao seu potencial cliente.",
  metaTitle: "Modelo de Orçamento e Proposta Comercial 2026 | Documind",
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
  longDescription: "O contrato de parceria comercial é o instrumento jurídico que formaliza a colaboração entre duas ou mais partes — pessoas físicas ou jurídicas — para alcançar objetivos empresariais em comum, compartilhando recursos, conhecimentos, riscos e resultados. É um documento fundamental no cenário empresarial moderno, onde alianças estratégicas e parcerias são cada vez mais comuns para expandir mercados, desenvolver novos produtos e aumentar a competitividade.\n\nA importância do contrato de parceria comercial está na clareza que ele traz à relação entre os parceiros. Sem um documento formal, expectativas diferentes sobre contribuições, divisão de lucros, responsabilidades e poder de decisão frequentemente levam a conflitos que podem destruir tanto a parceria quanto os negócios individuais de cada parte. O contrato estabelece as regras do jogo desde o início, prevenindo desentendimentos e protegendo os interesses de todos os envolvidos.\n\nEsse contrato é necessário em diversas situações comerciais, como joint ventures entre empresas, parcerias de distribuição, acordos de co-desenvolvimento de produtos, colaborações entre influenciadores e marcas, parcerias entre profissionais de áreas complementares, consórcios para participação em licitações, acordos de compartilhamento de infraestrutura, parcerias de marketing e vendas cruzadas, e qualquer outra forma de colaboração empresarial estruturada.\n\nA base legal do contrato de parceria comercial está no Código Civil (Lei nº 10.406/2002), nos artigos que regulam os contratos em geral (arts. 421 a 480) e a sociedade em conta de participação (arts. 991 a 996), quando a parceria envolve contribuição de capital. Dependendo da estrutura da parceria, podem ser aplicáveis também a Lei das Sociedades Anônimas (Lei nº 6.404/1976), o Código Comercial e a legislação tributária específica. É importante distinguir a parceria comercial da sociedade formal, pois as implicações tributárias e trabalhistas são diferentes.\n\nAs cláusulas essenciais de um contrato de parceria comercial incluem: qualificação completa de todas as partes envolvidas; objeto e finalidade da parceria; contribuições de cada parceiro (capital, know-how, infraestrutura, contatos, mão de obra); definição clara de responsabilidades e atribuições de cada parte; forma de divisão de lucros e rateio de prejuízos; governança e processo de tomada de decisões; cláusula de exclusividade ou não concorrência; propriedade intelectual desenvolvida na parceria; confidencialidade e sigilo de informações; prazo de vigência e condições de renovação; hipóteses de dissolução e procedimento de saída; distribuição de ativos e passivos em caso de encerramento; e foro competente para resolução de disputas.\n\nOs erros mais comuns em contratos de parceria comercial incluem: não definir com precisão as contribuições de cada parceiro; ser vago na divisão de lucros e responsabilidade por prejuízos; não prever mecanismo de resolução de impasses em decisões conjuntas; omitir cláusula sobre propriedade intelectual desenvolvida durante a parceria; não estabelecer critérios claros para dissolução e saída de um parceiro; confundir parceria comercial com sociedade, gerando implicações tributárias indesejadas; não prever cláusula de não concorrência durante e após a parceria; e deixar de definir como será feita a prestação de contas entre os parceiros.\n\nO Documind gera contratos de parceria comercial personalizados com inteligência artificial, adaptados ao tipo específico de colaboração e ao perfil dos parceiros. O sistema cria um documento equilibrado, com cláusulas claras que protegem todas as partes envolvidas, em conformidade com a legislação brasileira.",
  metaTitle: "Contrato de Parceria Comercial 2026 - Modelo | Documind",
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
  longDescription: "O Termo de Confidencialidade, também conhecido como NDA (Non-Disclosure Agreement) ou Acordo de Não Divulgação, é o instrumento jurídico que protege informações sigilosas compartilhadas entre as partes durante negociações, parcerias, prestação de serviços ou relações de trabalho. Em um mundo cada vez mais competitivo e digital, a proteção de informações confidenciais tornou-se uma necessidade estratégica para empresas e profissionais de todos os setores.\n\nA importância do NDA é crucial porque informações como planos de negócio, listas de clientes, estratégias de marketing, fórmulas, códigos-fonte, dados financeiros e segredos industriais representam ativos valiosíssimos de uma empresa. O vazamento dessas informações pode causar prejuízos financeiros irreparáveis, perda de vantagem competitiva e danos à reputação. O termo de confidencialidade cria uma obrigação legal de sigilo, permitindo que a parte prejudicada busque reparação judicial em caso de violação.\n\nVocê precisa de um termo de confidencialidade em diversas situações: antes de iniciar negociações para parceria, fusão ou aquisição de empresas; ao contratar prestadores de serviço ou consultores que terão acesso a informações sensíveis; no início de relações de trabalho com funcionários de áreas estratégicas; ao compartilhar projetos ou ideias com potenciais investidores; em processos de due diligence; ao contratar empresas de tecnologia para desenvolvimento de sistemas; e sempre que houver necessidade de compartilhar informações sigilosas com terceiros.\n\nA proteção da confidencialidade no Brasil está fundamentada em diversas normas: o Código Civil (Lei nº 10.406/2002), nos artigos 186 e 927 (responsabilidade civil por danos); a Lei de Propriedade Industrial (Lei nº 9.279/1996), que protege segredos de negócio no artigo 195, incisos XI e XII (crime de concorrência desleal); a Lei Geral de Proteção de Dados - LGPD (Lei nº 13.709/2018), quando envolve dados pessoais; a CLT, nos artigos que tratam de fidelidade do empregado; e a Constituição Federal, que protege a propriedade e a livre iniciativa.\n\nAs cláusulas fundamentais de um termo de confidencialidade incluem: qualificação das partes (parte reveladora e parte receptora, ou acordo bilateral); definição ampla e detalhada do que constitui informação confidencial; obrigações da parte receptora (não divulgar, não usar para fins próprios, limitar acesso interno); exceções à confidencialidade (informações públicas, obtidas de terceiros, desenvolvidas independentemente, exigidas por ordem judicial); prazo de vigência do sigilo (geralmente 2 a 5 anos, podendo ser indefinido para segredos industriais); penalidades em caso de violação (multa fixa, indenização por perdas e danos); obrigação de devolução ou destruição das informações ao término; procedimento para notificação em caso de vazamento acidental; e foro competente.\n\nOs erros mais comuns em termos de confidencialidade incluem: definição vaga ou excessivamente ampla do que constitui informação confidencial; não especificar as exceções à confidencialidade; estipular multas desproporcionais que podem ser consideradas abusivas pelo judiciário; não definir prazo de vigência do sigilo; não prever obrigação de devolução das informações; esquecer de incluir cláusula sobre violação involuntária; não adequar o NDA à LGPD quando envolve dados pessoais; e usar modelo unilateral quando o compartilhamento de informações é mútuo.\n\nO Documind gera termos de confidencialidade personalizados com inteligência artificial, disponíveis nas versões unilateral e bilateral, adaptados ao contexto específico da relação entre as partes. O documento é gerado em conformidade com a legislação brasileira e com cláusulas equilibradas que oferecem proteção efetiva às informações confidenciais.",
  metaTitle: "Modelo de NDA / Termo de Confidencialidade 2026 | Documind",
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
  longDescription: "O contrato de freelancer é o documento jurídico específico para profissionais autônomos que prestam serviços por projeto, regulamentando a relação entre o freelancer e o cliente de forma clara e profissional. Diferente do contrato de prestação de serviço genérico, este modelo é desenhado para a dinâmica do trabalho freelance, com foco em entregas definidas, marcos de pagamento, ciclos de revisão e propriedade intelectual do material produzido.\n\nA importância do contrato de freelancer cresceu exponencialmente com a expansão da economia gig e do trabalho remoto no Brasil. Segundo dados recentes, milhões de brasileiros atuam como freelancers em áreas como design, programação, redação, tradução, marketing digital, fotografia, vídeo e consultoria. Sem um contrato formal, esses profissionais ficam vulneráveis a calotes, mudanças de escopo não remuneradas, uso indevido de seu trabalho e disputas sobre prazos e qualidade das entregas.\n\nEsse contrato deve ser utilizado sempre que um profissional freelancer for contratado para executar um projeto específico, seja por pessoa física ou jurídica. É essencial em trabalhos de design gráfico, desenvolvimento web e mobile, produção de conteúdo, fotografia e vídeo, consultoria especializada, tradução, edição, social media, ilustração, e qualquer outro serviço prestado de forma autônoma e por projeto. Mesmo em projetos pequenos ou entre conhecidos, a formalização evita problemas futuros.\n\nA base legal do contrato de freelancer está no Código Civil (Lei nº 10.406/2002), nos artigos 593 a 609 (prestação de serviço) e nos artigos sobre direitos autorais e propriedade intelectual. A Lei de Direitos Autorais (Lei nº 9.610/1998) é especialmente relevante, pois define que os direitos sobre a obra criada pertencem ao autor, salvo disposição contratual em contrário. A Lei nº 13.467/2017 (Reforma Trabalhista) também é importante, pois regulamenta o trabalho autônomo e ajuda a distingui-lo do vínculo empregatício. A Lei do Software (Lei nº 9.609/1998) aplica-se a projetos de desenvolvimento de sistemas.\n\nAs cláusulas essenciais de um contrato de freelancer incluem: qualificação das partes (freelancer e cliente); descrição detalhada do projeto e escopo de trabalho; lista de entregas (deliverables) com especificações técnicas; cronograma com marcos de entrega; valor total e forma de pagamento (por marco, por entrega, antecipado); número de revisões inclusas e custo de revisões adicionais; cessão ou licenciamento de propriedade intelectual e direitos autorais; direito de uso do trabalho no portfólio do freelancer; cláusula de kill fee (pagamento em caso de cancelamento pelo cliente); confidencialidade; prazo para feedback e aprovação do cliente; condições de rescisão; e cláusula de não exclusividade (permitindo ao freelancer atender outros clientes).\n\nOs erros mais comuns em contratos de freelancer incluem: não definir o número de revisões inclusas no preço, gerando ciclos infinitos de alterações; não estabelecer claramente a quem pertence a propriedade intelectual do trabalho; omitir cláusula de kill fee, ficando sem remuneração se o cliente cancelar o projeto; não prever pagamento antecipado ou por marcos, assumindo risco total de inadimplência; não especificar o formato e as especificações técnicas das entregas; deixar de definir prazo para o cliente fornecer materiais e feedback; e incluir cláusulas de exclusividade ou subordinação que possam configurar vínculo empregatício.\n\nO Documind gera contratos de freelancer personalizados com inteligência artificial, adaptados ao tipo de projeto e à área de atuação do profissional. O sistema cria um documento profissional que protege tanto o freelancer quanto o cliente, com cláusulas claras sobre escopo, pagamento e propriedade intelectual.",
  metaTitle: "Contrato de Freelancer 2026 - Modelo Grátis | Documind",
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
  longDescription: "O contrato de trabalho CLT é o documento que formaliza a relação de emprego entre empregador e empregado, estabelecendo os termos e condições do vínculo empregatício conforme a Consolidação das Leis do Trabalho. É um documento obrigatório para toda contratação formal no Brasil, sendo a base legal que define direitos, deveres e expectativas de ambas as partes durante toda a vigência do vínculo de emprego.\n\nA importância do contrato de trabalho CLT é fundamental tanto para o empregador quanto para o empregado. Para o empregador, o contrato documenta as condições acordadas, a função a ser exercida, o salário e benefícios, servindo como proteção em eventuais reclamações trabalhistas. Para o empregado, o contrato garante seus direitos e formaliza condições como jornada, remuneração e benefícios. Embora a CLT reconheça o contrato verbal, o documento escrito é fortemente recomendado por oferecer segurança jurídica muito superior.\n\nO contrato de trabalho deve ser elaborado sempre que houver contratação de funcionário com vínculo empregatício, ou seja, quando presentes os requisitos do artigo 3º da CLT: pessoalidade, habitualidade, subordinação e onerosidade. Isso inclui contratações por prazo indeterminado, contratos de experiência (máximo de 90 dias), contratos por prazo determinado, contratos intermitentes (incluídos pela Reforma Trabalhista) e contratos de trabalho temporário.\n\nA legislação aplicável é a Consolidação das Leis do Trabalho - CLT (Decreto-Lei nº 5.452/1943), com as alterações da Reforma Trabalhista (Lei nº 13.467/2017) e da Lei da Liberdade Econômica (Lei nº 13.874/2019). A Constituição Federal de 1988, em seu artigo 7º, estabelece os direitos fundamentais dos trabalhadores. Convenções e Acordos Coletivos de Trabalho também são aplicáveis e devem ser observados na elaboração do contrato. A LGPD (Lei nº 13.709/2018) também é relevante no tratamento de dados pessoais do empregado.\n\nAs cláusulas essenciais de um contrato de trabalho CLT incluem: qualificação completa do empregador e do empregado com CPF/CNPJ; cargo ou função a ser exercida com descrição das atividades; data de admissão e modalidade do contrato (indeterminado, experiência, determinado); local de trabalho; jornada de trabalho e regime de compensação; salário e forma de pagamento; benefícios oferecidos (vale-transporte, vale-refeição, plano de saúde); período de experiência (se aplicável, máximo 90 dias); cláusula de confidencialidade e sigilo; cláusula de não concorrência (com remuneração compensatória); acordo sobre propriedade intelectual de criações do empregado; banco de horas, se aplicável; e referência à convenção ou acordo coletivo aplicável.\n\nOs erros mais comuns ao elaborar um contrato de trabalho CLT incluem: não verificar a convenção coletiva da categoria antes de definir salário e benefícios; estipular jornada de trabalho em desacordo com a legislação; omitir o período de experiência (se não constar, considera-se contrato por prazo indeterminado desde o início); incluir cláusula de não concorrência sem remuneração compensatória; não especificar o local de trabalho, especialmente relevante para trabalho remoto; deixar de mencionar benefícios obrigatórios como vale-transporte; não adequar o contrato às alterações da Reforma Trabalhista; e não considerar as regras da LGPD no tratamento de dados do empregado.\n\nO Documind gera contratos de trabalho CLT personalizados com inteligência artificial, adaptados à função, ao regime de contratação e à categoria profissional do empregado. O documento é gerado em conformidade com a CLT, a Reforma Trabalhista e as melhores práticas de gestão de pessoas.",
  metaTitle: "Contrato de Trabalho CLT 2026 - Modelo | Documind",
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
  longDescription: "O contrato de estágio, formalmente denominado Termo de Compromisso de Estágio (TCE), é o documento obrigatório que formaliza a relação entre a empresa concedente, o estagiário e a instituição de ensino. Trata-se de um instrumento jurídico tripartite com características próprias que o diferenciam de qualquer outro tipo de contratação, sendo regulamentado por legislação específica que visa proteger o estudante e garantir que o estágio cumpra seu papel educacional.\n\nA importância do contrato de estágio vai muito além da formalidade legal. Sem o Termo de Compromisso de Estágio devidamente assinado pelas três partes, a relação pode ser descaracterizada como estágio e reconhecida como vínculo empregatício pela Justiça do Trabalho, gerando obrigações trabalhistas retroativas para a empresa, incluindo pagamento de FGTS, férias, 13º salário e demais verbas. O TCE também protege o estagiário, garantindo seus direitos a bolsa-auxílio, recesso remunerado e seguro contra acidentes pessoais.\n\nO Termo de Compromisso de Estágio é necessário sempre que uma empresa ou profissional liberal contratar um estudante para atividades de estágio, seja obrigatório (exigido pela grade curricular) ou não obrigatório (voluntário). O estagiário deve estar regularmente matriculado em instituição de ensino superior, educação profissional, ensino médio, educação especial ou nos anos finais do ensino fundamental (na modalidade profissional da educação de jovens e adultos). O estágio pode ser realizado em empresas privadas, órgãos públicos, ONGs e profissionais liberais.\n\nA legislação que rege o estágio no Brasil é a Lei nº 11.788/2008 (Lei do Estágio), que substituiu a Lei nº 6.494/1977. Esta lei define regras claras e específicas: a carga horária máxima é de 6 horas diárias e 30 horas semanais para estudantes de ensino superior e educação profissional (ou 4 horas diárias para ensino médio e fundamental); o estágio não obrigatório exige bolsa-auxílio e auxílio-transporte; o estagiário tem direito a recesso remunerado de 30 dias a cada 12 meses de estágio; é obrigatória a contratação de seguro contra acidentes pessoais; o estágio de um mesmo estagiário na mesma empresa é limitado a 2 anos (exceto PCD); e a empresa deve designar um supervisor com formação na área.\n\nAs cláusulas obrigatórias do Termo de Compromisso de Estágio incluem: qualificação das três partes (empresa, estagiário e instituição de ensino); curso e período que o estagiário está cursando; descrição das atividades a serem desenvolvidas (compatíveis com a formação); horário e carga horária do estágio; data de início e término (prazo máximo de 2 anos); valor da bolsa-auxílio e forma de pagamento; concessão de auxílio-transporte; dados da apólice de seguro contra acidentes pessoais; nome do supervisor na empresa; nome do orientador na instituição de ensino; condições para rescisão; e previsão de entrega de relatórios periódicos.\n\nOs erros mais comuns ao elaborar um contrato de estágio incluem: não obter a assinatura da instituição de ensino, tornando o TCE inválido; atribuir atividades incompatíveis com a formação do estagiário; exceder a carga horária máxima permitida; não contratar seguro contra acidentes pessoais; não designar supervisor qualificado; ultrapassar o limite de 2 anos de estágio; não conceder o recesso remunerado de 30 dias; utilizar o estagiário como mão de obra substituta de empregados regulares; exceder o número máximo de estagiários permitido pelo porte da empresa; e não elaborar relatórios periódicos de acompanhamento.\n\nO Documind gera Termos de Compromisso de Estágio personalizados com inteligência artificial, em total conformidade com a Lei nº 11.788/2008 e com todas as cláusulas obrigatórias. Basta informar os dados das partes e as condições do estágio, e o sistema cria um documento completo e pronto para assinatura.",
  metaTitle: "Contrato de Estágio 2026 - Modelo com Lei 11.788 | Documind",
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
  longDescription: "O Termo de Rescisão do Contrato de Trabalho (TRCT) é o documento oficial que formaliza o encerramento da relação de emprego, detalhando todas as verbas rescisórias devidas ao empregado e as deduções aplicáveis. É um dos documentos mais importantes do Direito do Trabalho brasileiro, exigido em todas as modalidades de desligamento e essencial para que o trabalhador possa sacar o FGTS, dar entrada no seguro-desemprego e comprovar o encerramento do vínculo.\n\nA importância do TRCT é inquestionável tanto para o empregador quanto para o empregado. Para o empregador, o termo documenta todas as verbas pagas e serve como prova de quitação em eventuais reclamações trabalhistas. Para o empregado, é o documento que discrimina os valores recebidos e permite o acesso a direitos como saque do FGTS e habilitação ao seguro-desemprego. Erros no TRCT podem gerar passivos trabalhistas significativos e multas administrativas.\n\nO Termo de Rescisão é obrigatório em todas as modalidades de encerramento do contrato de trabalho: demissão sem justa causa, pedido de demissão pelo empregado, demissão por justa causa, rescisão indireta (justa causa do empregador), acordo mútuo (incluído pela Reforma Trabalhista), término de contrato por prazo determinado, falecimento do empregado e aposentadoria. Cada modalidade possui regras específicas sobre quais verbas são devidas.\n\nA legislação que rege a rescisão contratual está na CLT (Decreto-Lei nº 5.452/1943), especialmente nos artigos 477 a 486, com as alterações da Reforma Trabalhista (Lei nº 13.467/2017). A Reforma trouxe mudanças significativas: eliminou a obrigatoriedade de homologação sindical para contratos com mais de 1 ano; criou a modalidade de rescisão por acordo mútuo (art. 484-A), onde o empregado recebe metade do aviso prévio e da multa do FGTS, podendo sacar 80% do fundo; e estabeleceu prazo único de 10 dias para pagamento das verbas rescisórias, independentemente do tipo de aviso prévio.\n\nOs itens essenciais que devem constar no Termo de Rescisão incluem: dados completos do empregador (CNPJ, razão social) e do empregado (CPF, CTPS, PIS); data de admissão e data de desligamento; motivo da rescisão (código conforme tabela); remuneração do último mês; saldo de salário; aviso prévio (trabalhado ou indenizado); férias vencidas e proporcionais com adicional de 1/3; 13º salário proporcional; multa de 40% do FGTS (ou 20% em caso de acordo); horas extras pendentes; adicional noturno, periculosidade ou insalubridade devidos; deduções legais (INSS, IRRF, adiantamentos, vale-transporte); valor líquido a receber; e dados bancários para depósito.\n\nOs erros mais comuns na elaboração do Termo de Rescisão incluem: calcular incorretamente a projeção do aviso prévio proporcional (3 dias por ano de serviço); não considerar a média de horas extras e comissões nas verbas rescisórias; errar o cálculo de férias proporcionais (considerar a fração igual ou superior a 15 dias como mês completo); não pagar dentro do prazo de 10 dias, gerando multa equivalente a um salário; esquecer de dar baixa na CTPS; não emitir as guias para saque do FGTS e seguro-desemprego; aplicar incorretamente as regras da rescisão por acordo mútuo; e não considerar estabilidades provisórias (gestante, acidentado, membro da CIPA).\n\nO Documind gera Termos de Rescisão personalizados com inteligência artificial, calculando automaticamente todas as verbas rescisórias conforme a modalidade de desligamento escolhida. O sistema considera a legislação trabalhista atualizada e gera um documento completo, facilitando o processo de rescisão para empresas e departamentos de RH.",
  metaTitle: "Termo de Rescisão Trabalhista 2026 - TRCT Modelo | Documind",
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
  longDescription: "O acordo de home office, também denominado acordo de teletrabalho ou trabalho remoto, é o documento jurídico que formaliza as condições do trabalho realizado fora das dependências da empresa, conforme exigido pela CLT. Com a aceleração do trabalho remoto no Brasil, especialmente após a pandemia, esse documento tornou-se indispensável para empresas de todos os portes que adotaram total ou parcialmente o modelo de trabalho à distância.\n\nA importância do acordo de teletrabalho está na segurança jurídica que ele proporciona para ambas as partes. Sem formalização, a empresa fica exposta a reclamações trabalhistas sobre jornada de trabalho, horas extras, equipamentos, despesas com internet e energia, acidentes de trabalho em home office e questões ergonômicas. O empregado, por sua vez, fica sem garantias claras sobre seus direitos e responsabilidades no trabalho remoto. A formalização também é exigida pela legislação trabalhista brasileira.\n\nEsse acordo é necessário sempre que um empregado CLT exercer suas atividades preponderantemente fora das dependências da empresa, seja de forma integral (100% remoto) ou no modelo híbrido (alternando entre presencial e remoto). Aplica-se a todas as funções compatíveis com o trabalho à distância, como atividades administrativas, desenvolvimento de software, atendimento ao cliente, marketing, design, consultoria, gestão de projetos, entre outras. É válido tanto para novos contratos quanto para alteração de contratos existentes.\n\nA legislação que regulamenta o teletrabalho está nos artigos 75-A a 75-F da CLT, incluídos pela Reforma Trabalhista (Lei nº 13.467/2017) e alterados pela Lei nº 14.442/2022 (conversão da MP 1.108/2022). Entre as principais disposições: o teletrabalho deve constar expressamente no contrato de trabalho ou em aditivo; a responsabilidade pela aquisição e manutenção de equipamentos deve ser definida em contrato; o empregador deve instruir o empregado sobre precauções para evitar doenças e acidentes; a alteração do regime presencial para remoto requer acordo mútuo; e o retorno ao presencial pode ser determinado pelo empregador com prazo mínimo de 15 dias. A NR-17 (ergonomia) também se aplica ao home office.\n\nAs cláusulas essenciais do acordo de home office incluem: identificação das partes e referência ao contrato de trabalho original; definição do regime (100% remoto, híbrido com dias específicos); jornada de trabalho e forma de controle de ponto (ou isenção conforme art. 62, III da CLT); responsabilidade pela aquisição e manutenção de equipamentos (notebook, monitor, cadeira, headset); reembolso de despesas (internet, energia elétrica, telefone); orientações de ergonomia e saúde ocupacional; regras de segurança da informação e proteção de dados; política de uso de VPN e ferramentas corporativas; condições para convocação ao escritório; prazo e condições para retorno ao regime presencial; responsabilidade por acidentes de trabalho no home office; e confidencialidade de informações acessadas remotamente.\n\nOs erros mais comuns ao elaborar um acordo de home office incluem: não formalizar a alteração do regime presencial para remoto em aditivo contratual; omitir a definição de responsabilidade pelos equipamentos; não prever reembolso de despesas como internet e energia; ignorar questões de ergonomia e saúde ocupacional; não estabelecer regras de segurança da informação; definir controle de jornada incompatível com o modelo de trabalho; não prever condições para convocação presencial em caso de necessidade; esquecer de orientar o empregado sobre prevenção de acidentes de trabalho em casa; e não adequar o acordo à LGPD quando o empregado acessa dados pessoais de clientes.\n\nO Documind gera acordos de home office personalizados com inteligência artificial, em conformidade com a CLT e a Lei nº 14.442/2022. O sistema cria um documento completo que cobre todos os aspectos do teletrabalho, desde equipamentos até segurança da informação, protegendo empresa e empregado.",
  metaTitle: "Acordo de Trabalho Home Office 2026 - Modelo | Documind",
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
  longDescription: "A procuração simples, também chamada de procuração particular ou instrumento particular de mandato, é o documento jurídico pelo qual uma pessoa (outorgante/mandante) concede a outra (outorgado/mandatário) poderes para agir em seu nome em situações específicas. É um dos documentos pessoais mais utilizados no dia a dia dos brasileiros, permitindo que terceiros representem seus interesses quando não é possível ou conveniente comparecer pessoalmente.\n\nA importância da procuração simples está na praticidade e na segurança jurídica que ela proporciona. Em um país com dimensões continentais como o Brasil, nem sempre é possível estar presente para resolver questões burocráticas, assinar documentos ou representar-se em reuniões. A procuração permite que uma pessoa de confiança aja legalmente em nome do outorgante, com limites claros e definidos, evitando transtornos e atrasos na resolução de assuntos pessoais e profissionais.\n\nVocê precisa de uma procuração simples em diversas situações cotidianas: para autorizar alguém a receber documentos, encomendas ou correspondências em seu nome; para representação em reuniões de condomínio, assembleias ou órgãos públicos; para resolver assuntos bancários específicos; para retirar veículos em pátio ou oficina; para matricular dependentes em escolas; para representação junto a concessionárias de serviços públicos; para assinar contratos de menor complexidade; e para diversas outras situações que não exijam procuração pública (lavrada em cartório).\n\nA base legal da procuração está no Código Civil (Lei nº 10.406/2002), nos artigos 653 a 692, que regulamentam o mandato. O artigo 654 estabelece que a procuração particular é válida quando a lei não exigir instrumento público. Importante destacar que determinados atos exigem procuração pública (lavrada em cartório): venda de imóveis, casamento, abertura e movimentação de contas bancárias em alguns casos, e atos que exijam escritura pública. A procuração com poderes para o foro (representação judicial) deve ter firma reconhecida e poderes especiais conforme o artigo 105 do CPC (Lei nº 13.105/2015).\n\nAs cláusulas essenciais de uma procuração simples incluem: qualificação completa do outorgante (quem concede os poderes) com nome, CPF, RG, nacionalidade, estado civil e endereço; qualificação completa do outorgado (quem recebe os poderes) com os mesmos dados; descrição clara e específica dos poderes concedidos; finalidade da procuração; prazo de validade (se omisso, considera-se vigente até revogação); local e data; assinatura do outorgante; e assinatura de duas testemunhas (recomendável, embora nem sempre obrigatório).\n\nOs erros mais comuns ao elaborar uma procuração simples incluem: conceder poderes excessivamente amplos ou vagos, expondo o outorgante a riscos; não especificar prazo de validade, deixando a procuração vigente indefinidamente; não exigir reconhecimento de firma quando necessário; usar procuração particular para atos que exigem procuração pública; não revogar procuração antiga quando os poderes não são mais necessários; omitir dados de identificação das partes; não qualificar testemunhas; confundir procuração simples com procuração ad judicia (para representação judicial); e não verificar se a instituição destinatária aceita procuração particular.\n\nO Documind gera procurações simples personalizadas com inteligência artificial, adaptadas à finalidade específica e com poderes adequados à situação. Basta informar os dados das partes e a finalidade da procuração, e o sistema cria um documento formal e juridicamente válido, pronto para assinatura.",
  metaTitle: "Modelo de Procuração Simples 2026 - Grátis | Documind",
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
  longDescription: "O recibo de pagamento é o documento que comprova formalmente que um determinado valor foi pago por uma parte e recebido por outra, servindo como prova irrefutável de quitação de uma obrigação financeira. É um dos documentos mais simples e ao mesmo tempo mais importantes no cotidiano das relações comerciais e pessoais, sendo utilizado diariamente por milhões de brasileiros em transações de todos os tipos.\n\nA importância do recibo de pagamento é frequentemente subestimada, mas trata-se de um documento fundamental para a organização financeira e a proteção jurídica. Sem um recibo, torna-se extremamente difícil comprovar que um pagamento foi realizado, especialmente em transações em dinheiro. Em disputas judiciais, o recibo é uma das provas mais valorizadas para demonstrar quitação. Além disso, recibos são necessários para declaração de Imposto de Renda, prestação de contas, auditoria, reembolsos e controle financeiro empresarial.\n\nVocê precisa emitir ou solicitar um recibo de pagamento em diversas situações: pagamento de aluguel (especialmente quando não há boleto bancário); pagamento de serviços prestados por autônomos (eletricistas, encanadores, diaristas, professores particulares); pagamento de mensalidades escolares; reembolso de despesas; quitação de dívidas entre pessoas físicas; doações; pagamento de honorários profissionais; transações em dinheiro ou PIX entre pessoas físicas; e qualquer situação onde seja necessário comprovar que um pagamento foi efetuado.\n\nA base legal do recibo de pagamento está no Código Civil (Lei nº 10.406/2002), especialmente no artigo 320, que estabelece que \"a quitação regular deve designar o valor e a espécie da dívida quitada, o nome do devedor, o tempo e o lugar do pagamento\". O artigo 319 determina que o devedor que paga tem direito à quitação regular, e o credor é obrigado a fornecê-la. A Lei do Inquilinato (Lei nº 8.245/1991) obriga o locador a fornecer recibo detalhado ao locatário. Para fins tributários, o Regulamento do Imposto de Renda e a legislação previdenciária também exigem documentação comprobatória de pagamentos.\n\nOs elementos essenciais de um recibo de pagamento incluem: identificação completa de quem paga (nome, CPF/CNPJ); identificação completa de quem recebe (nome, CPF/CNPJ); valor pago em algarismos e por extenso; referência ou descrição do que está sendo pago (aluguel, serviço, produto, parcela); forma de pagamento (dinheiro, PIX, transferência, cheque, cartão); data do pagamento; local; número do recibo (para controle); e assinatura de quem recebe o valor. Para recibos de aluguel, devem constar também os encargos discriminados (aluguel, condomínio, IPTU).\n\nOs erros mais comuns ao elaborar recibos de pagamento incluem: não escrever o valor por extenso (apenas em algarismos), facilitando adulterações; não especificar a que se refere o pagamento; omitir a data do pagamento; não incluir CPF/CNPJ das partes; não identificar a forma de pagamento; não manter via do recibo para quem pagou; usar recibos genéricos sem numeração para controle; não emitir recibo para pagamentos em PIX (o comprovante bancário não substitui o recibo em todas as situações); e confundir recibo com nota fiscal quando há obrigação tributária.\n\nO Documind gera recibos de pagamento profissionais e personalizados com inteligência artificial, formatados adequadamente e com todos os campos obrigatórios preenchidos. O documento é gerado em segundos, pronto para impressão e assinatura, garantindo validade jurídica como comprovante de quitação.",
  metaTitle: "Modelo de Recibo de Pagamento 2026 - Grátis | Documind",
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
        { name: "referente_a", label: "Referente a", type: "text", required: true, placeholder: "Ex: Pagamento de aluguel ref. Janeiro/2026" },
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
  longDescription: "A declaração de residência é o documento particular pelo qual uma pessoa declara, sob as penas da lei, que reside em determinado endereço. É amplamente utilizada no Brasil como alternativa ao comprovante de residência tradicional (contas de água, luz, telefone) quando a pessoa não possui essas contas em seu nome, situação extremamente comum entre jovens, cônjuges, dependentes, moradores de imóveis alugados informalmente e pessoas que vivem em imóvel de familiares.\n\nA importância da declaração de residência é enorme na vida prática dos brasileiros. Inúmeros serviços e procedimentos exigem comprovação de endereço, e nem todos os cidadãos possuem contas de consumo em seu nome. Sem esse documento, a pessoa pode ficar impossibilitada de abrir conta bancária, obter cartão de crédito, matricular filhos em escolas, realizar cadastro em programas sociais, tirar ou renovar documentos como CNH e passaporte, se inscrever em concursos públicos, e acessar diversos outros serviços essenciais.\n\nA declaração de residência é necessária sempre que uma pessoa precisar comprovar seu endereço e não dispuser de contas de consumo (água, luz, gás, telefone, internet) ou outros documentos em seu nome que comprovem o endereço. As situações mais comuns incluem: abertura de conta bancária; solicitação de cartão de crédito; matrícula em instituições de ensino; inscrição em concursos públicos; obtenção ou renovação de documentos (RG, CPF, CNH, passaporte, título de eleitor); cadastro em programas sociais e do governo; registro em postos de saúde; alistamento militar; e registro em órgãos de classe profissional.\n\nA base legal da declaração de residência está na Lei nº 7.115/1983, que estabelece que declarações firmadas pelo interessado sob as penas da lei têm valor de prova, dispensando reconhecimento de firma. Isso significa que a declaração falsa configura crime de falsidade ideológica, previsto no artigo 299 do Código Penal (Decreto-Lei nº 2.848/1940), com pena de reclusão de 1 a 5 anos. A Lei nº 13.726/2018 (Lei da Desburocratização) reforçou a aceitação de declarações como substituto de documentos, e o Decreto nº 9.094/2017 também simplificou exigências documentais em órgãos públicos.\n\nOs elementos essenciais de uma declaração de residência incluem: identificação completa do declarante (nome, CPF, RG, nacionalidade, estado civil); endereço completo com CEP; declaração expressa de que reside no endereço informado; há quanto tempo reside no local; menção à Lei nº 7.115/1983 e ciência das penalidades em caso de declaração falsa; finalidade da declaração (para qual órgão ou instituição será apresentada); local e data; e assinatura do declarante. Quando a declaração é feita por terceiro (titular do imóvel), deve incluir também a qualificação do terceiro e sua relação com o declarante.\n\nOs erros mais comuns ao elaborar uma declaração de residência incluem: não mencionar a Lei nº 7.115/1983, que dá valor legal ao documento; não incluir a ciência das penalidades por declaração falsa; fornecer endereço incompleto (sem CEP, número ou complemento); não especificar a finalidade da declaração; apresentar a declaração sem documento de identidade válido; não incluir CPF e RG do declarante; esquecer de datar o documento; e desconhecer que algumas instituições exigem reconhecimento de firma em cartório, apesar de a lei dispensar essa exigência.\n\nO Documind gera declarações de residência personalizadas com inteligência artificial, formatadas conforme os padrões aceitos por bancos, escolas, órgãos públicos e demais instituições brasileiras. O documento é gerado em segundos, com todos os elementos legais obrigatórios, pronto para impressão e assinatura.",
  metaTitle: "Declaração de Residência 2026 - Modelo Grátis | Documind",
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
  longDescription: "O termo de responsabilidade é o documento jurídico pelo qual uma pessoa física ou jurídica assume formalmente a responsabilidade por algo — seja um bem, um equipamento, uma atividade, um menor de idade ou qualquer outra situação que exija a assunção expressa de compromisso e responsabilidade. É um documento extremamente versátil, utilizado em contextos empresariais, educacionais, esportivos, de saúde e em diversas situações do cotidiano.\n\nA importância do termo de responsabilidade reside na proteção jurídica que ele oferece a quem entrega um bem ou autoriza uma atividade. Ao assinar o termo, o responsável declara estar ciente das condições, riscos e obrigações envolvidas, assumindo as consequências em caso de dano, perda ou qualquer outro evento adverso. Sem esse documento, a pessoa ou empresa que entrega o bem ou autoriza a atividade assume integralmente o risco, sem possibilidade de responsabilizar terceiros.\n\nO termo de responsabilidade é necessário em inúmeras situações: empréstimo de equipamentos da empresa a funcionários (notebook, celular, ferramentas); entrega de veículos corporativos; autorização para menores participarem de atividades (excursões, eventos, viagens); uso de espaços e instalações por terceiros; participação em atividades esportivas ou de risco (trilhas, escaladas, mergulho); recebimento de materiais e produtos; guarda de documentos e objetos de valor; uso de laboratórios e equipamentos em instituições de ensino; e atividades que envolvam riscos à saúde ou integridade física.\n\nA base legal do termo de responsabilidade está no Código Civil (Lei nº 10.406/2002), especialmente nos artigos 186 e 927 (responsabilidade civil), artigos 582 a 592 (comodato — empréstimo gratuito de bens), artigos 627 a 652 (depósito) e artigos 932 e 933 (responsabilidade por ato de terceiros). O Estatuto da Criança e do Adolescente — ECA (Lei nº 8.069/1990) aplica-se quando o termo envolve menores de idade. O Código de Defesa do Consumidor (Lei nº 8.078/1990) é relevante em relações de consumo. É importante destacar que o termo de responsabilidade não isenta totalmente de responsabilidade quem promove atividade de risco, conforme jurisprudência consolidada dos tribunais.\n\nAs cláusulas essenciais de um termo de responsabilidade incluem: qualificação completa do responsável (nome, CPF, RG, endereço); descrição detalhada do bem, atividade ou situação objeto do termo; estado de conservação do bem (quando aplicável); prazo de vigência da responsabilidade; obrigações específicas do responsável (conservação, manutenção, devolução); condições de uso permitidas e restrições; responsabilidade por danos, perda ou deterioração; forma de indenização em caso de sinistro; seguro (quando aplicável); condições para devolução; e cláusula de ciência dos riscos envolvidos (para atividades de risco).\n\nOs erros mais comuns ao elaborar um termo de responsabilidade incluem: ser genérico demais na descrição do bem ou atividade; não detalhar o estado de conservação do bem no momento da entrega; omitir o valor do bem para fins de indenização; não especificar as condições de uso permitidas; incluir cláusula de isenção total de responsabilidade para atividades de risco (pode ser considerada abusiva); não prever prazo para devolução; esquecer de incluir cláusula sobre seguro; e não coletar assinatura de responsável legal quando envolver menores de idade.\n\nO Documind gera termos de responsabilidade personalizados com inteligência artificial, adaptados ao tipo específico de situação — empréstimo de equipamentos, atividades de risco, autorização para menores ou qualquer outra necessidade. O documento é gerado em conformidade com a legislação brasileira e pronto para uso imediato.",
  metaTitle: "Termo de Responsabilidade 2026 - Modelo Grátis | Documind",
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
  longDescription: "A autorização de uso de imagem é o documento jurídico pelo qual uma pessoa concede permissão expressa para que sua imagem, voz ou nome sejam utilizados por terceiros em materiais específicos, como campanhas publicitárias, conteúdos para redes sociais, vídeos institucionais, materiais educacionais, reportagens e qualquer outra forma de reprodução. É um documento indispensável no marketing, na publicidade, na produção audiovisual e em qualquer atividade que envolva a exposição da imagem de pessoas.\n\nA importância da autorização de uso de imagem é enorme e frequentemente negligenciada. No Brasil, o direito à imagem é um direito fundamental protegido pela Constituição Federal, e seu uso sem autorização pode gerar condenações judiciais significativas por danos morais e materiais. Empresas, agências de publicidade, produtoras, fotógrafos, influenciadores digitais e criadores de conteúdo precisam obter autorização formal de todas as pessoas que aparecem em seus materiais, sob pena de serem processados e condenados a pagar indenizações.\n\nVocê precisa de uma autorização de uso de imagem em diversas situações: produção de material publicitário (fotos, vídeos, anúncios); publicação de fotos e vídeos em redes sociais corporativas; criação de conteúdo para sites e blogs; produção de vídeos institucionais e depoimentos de clientes; materiais de treinamento e educação corporativa; cobertura fotográfica de eventos; produção de documentários e reportagens; campanhas com influenciadores digitais; uso de imagem de funcionários em materiais da empresa; e fotografias de eventos com menores de idade.\n\nA proteção da imagem no Brasil está fundamentada em múltiplas normas: a Constituição Federal de 1988, no artigo 5º, incisos V, X e XXVIII, que garante o direito à imagem como direito fundamental; o Código Civil (Lei nº 10.406/2002), no artigo 20, que proíbe a exposição ou utilização da imagem de uma pessoa sem autorização; a Lei Geral de Proteção de Dados — LGPD (Lei nº 13.709/2018), que classifica a imagem como dado pessoal sensível, exigindo consentimento específico para seu tratamento; o Estatuto da Criança e do Adolescente — ECA (Lei nº 8.069/1990), que requer autorização dos pais ou responsáveis para uso de imagem de menores; e a Lei de Direitos Autorais (Lei nº 9.610/1998), que protege obras fotográficas e audiovisuais.\n\nAs cláusulas essenciais de uma autorização de uso de imagem incluem: qualificação completa do autorizante (e do responsável legal, se menor); qualificação de quem está autorizado a usar a imagem; descrição específica das imagens, vídeos ou gravações autorizados; finalidade do uso (comercial, institucional, educacional, editorial); mídias e canais autorizados (redes sociais, TV, impressos, internet); território de veiculação (local, nacional, mundial); prazo de autorização (determinado ou indeterminado); exclusividade ou não; remuneração (se houver) e forma de pagamento; direito de revogação e suas condições; adequação à LGPD (base legal, finalidade, compartilhamento); e cláusula sobre edição e manipulação permitidas.\n\nOs erros mais comuns em autorizações de uso de imagem incluem: utilizar autorizações genéricas sem especificar a finalidade do uso; não definir prazo de vigência; omitir os canais e mídias autorizados; não adequar o documento à LGPD; esquecer de obter autorização dos pais para imagem de menores; não prever direito de revogação; autorizar uso de imagem sem prever remuneração quando devida; não especificar limites para edição e manipulação da imagem; e usar autorização verbal sem formalização por escrito.\n\nO Documind gera autorizações de uso de imagem personalizadas com inteligência artificial, em conformidade com o Código Civil, a LGPD e demais legislações aplicáveis. O documento é adaptado ao tipo de uso pretendido e inclui todas as cláusulas necessárias para proteção jurídica de ambas as partes.",
  metaTitle: "Autorização de Uso de Imagem 2026 - Modelo | Documind",
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
  longDescription: "O contrato de empréstimo pessoal, juridicamente denominado contrato de mútuo, é o instrumento que formaliza o empréstimo de dinheiro entre pessoas físicas (ou entre pessoa física e jurídica fora do sistema financeiro), estabelecendo as condições de valor, prazo, juros e forma de devolução. É um documento essencial para proteger tanto quem empresta quanto quem recebe o dinheiro, transformando um acordo verbal em uma obrigação legal exigível.\n\nA importância do contrato de empréstimo pessoal não pode ser subestimada. Empréstimos informais entre familiares, amigos e conhecidos são extremamente comuns no Brasil, mas a falta de formalização é uma das maiores fontes de conflitos pessoais e judiciais. Sem um contrato escrito, o credor pode ter enorme dificuldade em comprovar a existência da dívida e cobrar o valor emprestado, enquanto o devedor pode ser cobrado por valores diferentes do acordado. O contrato escrito previne desentendimentos e preserva relacionamentos.\n\nVocê precisa de um contrato de empréstimo pessoal sempre que for emprestar ou tomar emprestado dinheiro de outra pessoa. As situações mais comuns incluem: empréstimo entre familiares para compra de bens ou pagamento de dívidas; empréstimo entre amigos; financiamento informal de negócios; adiantamento de valores entre sócios; empréstimo com garantia de bem; e qualquer outra transferência de dinheiro com expectativa de devolução. Mesmo para valores pequenos, a formalização é recomendável para evitar constrangimentos futuros.\n\nA base legal do contrato de mútuo está no Código Civil (Lei nº 10.406/2002), nos artigos 586 a 592. O artigo 586 define o mútuo como o empréstimo de coisas fungíveis, onde o mutuário é obrigado a restituir ao mutuante o que dele recebeu em coisa do mesmo gênero, qualidade e quantidade. O artigo 591 permite a cobrança de juros no mútuo destinado a fins econômicos. Quanto aos juros, o Decreto nº 22.626/1933 (Lei de Usura) limita os juros entre pessoas físicas a 1% ao mês (12% ao ano), embora haja discussão jurisprudencial sobre esse limite. A taxa Selic pode ser utilizada como referência. O Código Penal, no artigo 4º da Lei nº 1.521/1951, tipifica como crime de usura a cobrança de juros abusivos.\n\nAs cláusulas essenciais de um contrato de empréstimo pessoal incluem: qualificação completa do mutuante (quem empresta) e do mutuário (quem recebe) com CPF, RG e endereço; valor do empréstimo em algarismos e por extenso; data da entrega do dinheiro e forma de transferência; taxa de juros (se houver) e forma de cálculo; prazo para devolução integral ou cronograma de parcelas; forma de pagamento das parcelas (PIX, transferência, boleto); multa por atraso e juros moratórios; correção monetária (índice aplicável); garantias oferecidas (avalista, penhor, alienação fiduciária, se houver); condições para antecipação do pagamento; cláusula de vencimento antecipado da dívida total em caso de inadimplência; e foro competente.\n\nOs erros mais comuns ao elaborar um contrato de empréstimo pessoal incluem: cobrar juros acima de 1% ao mês entre pessoas físicas (pode configurar usura); não registrar a forma como o dinheiro foi entregue (dificultando a comprovação); não definir claramente o prazo e a forma de devolução; omitir cláusula de correção monetária para empréstimos de longo prazo; não prever multa e juros moratórios para atraso; esquecer de incluir testemunhas (duas testemunhas tornam o contrato título executivo extrajudicial conforme art. 784, III do CPC); não declarar o empréstimo no Imposto de Renda (tanto credor quanto devedor devem declarar); e confundir empréstimo com doação, gerando problemas tributários.\n\nO Documind gera contratos de empréstimo pessoal personalizados com inteligência artificial, em conformidade com o Código Civil e com a legislação sobre juros e usura. O sistema calcula parcelas, juros e multas automaticamente, criando um documento completo e juridicamente válido como título executivo extrajudicial quando assinado com duas testemunhas.",
  metaTitle: "Contrato de Empréstimo entre Pessoas 2026 - Modelo | Documind",
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
