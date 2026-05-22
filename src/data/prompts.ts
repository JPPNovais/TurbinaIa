export interface Prompt {
  id: string;
  title: string;
  category: string;
  description: string;
  template: string;
  tags: string[];
}

export const PROMPTS: Prompt[] = [
  {
    id: 'copywriting-aida',
    title: 'Criação de Copy com Método AIDA',
    category: 'Marketing',
    description: 'Gere uma copy altamente persuasiva usando a consagrada estrutura AIDA (Atenção, Interesse, Desejo, Ação) para o seu produto.',
    template: 'Escreva um texto de vendas altamente persuasivo utilizando o método AIDA (Atenção, Interesse, Desejo, Ação) para promover o produto/serviço chamado "[Nome do Produto/Serviço]".\n\nDetalhes do produto:\n- O que faz: [O que o produto faz]\n- Público-Alvo: [Público-Alvo]\n- Principal benefício: [Principal Benefício]\n- Chamada para ação (CTA): [Ação que o leitor deve tomar]\n\nO tom de voz deve ser [Tom de Voz: Ex: confiante, urgente, amigável]. Formate o texto dividindo claramente as seções de Atenção, Interesse, Desejo e Ação, usando emojis e espaçamento adequado.',
    tags: ['Copywriting', 'Vendas', 'Marketing Digital'],
  },
  {
    id: 'dev-code-explainer',
    title: 'Explicação Didática de Código',
    category: 'Desenvolvimento',
    description: 'Explique um trecho de código complexo de forma simples, detalhando como funciona passo a passo.',
    template: 'Por favor, analise o seguinte trecho de código escrito em [Linguagem/Framework] e explique o seu funcionamento de forma simples e didática para um desenvolvedor [Nível de Experiência: Ex: iniciante, intermediário].\n\nCódigo:\n```\n[Cole o código aqui]\n```\n\nNa sua resposta:\n1. Forneça um resumo de uma frase sobre o que o código faz.\n2. Explique os principais blocos de lógica ou funções importantes.\n3. Se aplicável, aponte potenciais gargalos de desempenho ou melhorias de legibilidade.',
    tags: ['Programação', 'Refatoração', 'Estudo'],
  },
  {
    id: 'productivity-pareto-learning',
    title: 'Planejador de Aprendizado (Regra 80/20)',
    category: 'Produtividade',
    description: 'Crie um cronograma de estudos focado nos 20% de esforço que geram 80% dos resultados sobre qualquer assunto.',
    template: 'Quero aprender sobre "[Assunto/Habilidade]" do absoluto zero utilizando o princípio de Pareto (regra dos 80/20). Identifique quais são os 20% mais importantes desse assunto que me darão 80% do entendimento prático.\n\nCom base nisso:\n1. Crie um roteiro de estudos de [Duração: Ex: 4 semanas, 15 dias] dividindo os tópicos.\n2. Sugira exercícios práticos ou projetos rápidos para fixar cada tópico.\n3. Indique fontes ou palavras-chave importantes que devo pesquisar no Google/YouTube para aprofundar.',
    tags: ['Estudos', 'Foco', 'Pareto'],
  },
  {
    id: 'social-media-instagram-carousel',
    title: 'Roteiro de Carrossel para Instagram',
    category: 'Redes Sociais',
    description: 'Crie um roteiro completo de slides para um carrossel atraente e educativo no Instagram ou LinkedIn.',
    template: 'Crie um roteiro detalhado para um post em carrossel no Instagram focado no tema: "[Tema do Carrossel]". O objetivo principal é [Objetivo: Ex: educar o público, gerar leads, engajar].\n\nEstruture o carrossel em exatamente [Quantidade de Slides: Ex: 5 a 7] slides. Para cada slide, defina:\n- **Imagem/Visual sugerido:** O que deve conter de ilustração ou layout gráfico.\n- **Texto principal (Headline):** O texto curto e chamativo para ir na imagem.\n- **Notas de apoio (Legenda do slide):** Informações adicionais se aplicável.\n\nGaranta que o Slide 1 tenha um gancho (hook) irresistível e o último slide tenha um CTA claro para "[CTA: Ex: salvar o post, comentar, clicar no link da bio]".',
    tags: ['Instagram', 'LinkedIn', 'Marketing de Conteúdo'],
  },
  {
    id: 'writing-seo-article-outline',
    title: 'Esboço de Artigo Otimizado para SEO',
    category: 'Escrita',
    description: 'Crie um esqueleto completo de cabeçalhos H2 e H3 otimizados para ranquear uma palavra-chave específica.',
    template: 'Você é um especialista em SEO e marketing de conteúdo. Desenvolva um esboço de artigo estruturado (outline) focado na palavra-chave principal "[Palavra-Chave Principal]" e nas palavras-chave secundárias "[Palavras-Chave Secundárias]".\n\nO artigo tem como público-alvo [Público-Alvo] e seu objetivo é [Objetivo do Artigo].\n\nEstruture o esboço com:\n- Sugestão de 3 Títulos atrativos (H1) com limite de 60 caracteres.\n- Estrutura completa de tópicos usando H2 e H3 em ordem lógica.\n- Para cada seção (H2/H3), adicione uma breve frase explicando quais pontos de dor ou dúvidas do usuário devem ser respondidos ali.\n- Uma sugestão de gancho para a Introdução e Conclusão.',
    tags: ['SEO', 'Blogs', 'Criação de Conteúdo'],
  },
  {
    id: 'business-cold-email',
    title: 'E-mail de Prospecção Fria (Cold Email)',
    category: 'Marketing',
    description: 'Escreva um e-mail de prospecção de vendas direto e altamente convertido para potenciais clientes corporativos.',
    template: 'Escreva um e-mail curto e direto de prospecção fria para apresentar a nossa empresa "[Nome da Minha Empresa]" para o contato "[Nome do Lead]", que atua como "[Cargo do Lead]" na empresa "[Empresa do Lead]".\n\nNosso serviço/produto resolve o seguinte problema: [Problema Resolvido].\nQueremos propor uma rápida reunião de 15 minutos na próxima semana para discutir como podemos ajudá-los com [Benefício Esperado].\n\nRegras de escrita:\n- Assunto do e-mail curto e intrigante (máximo 6 palavras).\n- Sem jargões corporativos exagerados.\n- Tom profissional, amigável e focado no valor que geramos para eles, não em nós mesmos.\n- Máximo de 150 palavras.',
    tags: ['E-mail', 'Vendas', 'B2B'],
  },
];
