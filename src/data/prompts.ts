export interface Prompt {
  id: string;
  title: string;
  category: string;
  description: string;
  template: string;
  tags: string[];
}

export const PROMPT_CATEGORIES = [
  'Todos',
  'Marketing',
  'Desenvolvimento',
  'Produtividade',
  'Redes Sociais',
  'Escrita',
  'Negócios',
  'IA & Automação',
  'Carreira',
  'Educação',
  'Finanças',
];

export const PROMPTS: Prompt[] = [
  // MARKETING
  {
    id: 'copywriting-aida',
    title: 'Criação de Copy com Método AIDA',
    category: 'Marketing',
    description: 'Gere uma copy altamente persuasiva usando a consagrada estrutura AIDA (Atenção, Interesse, Desejo, Ação) para o seu produto.',
    template: 'Escreva um texto de vendas altamente persuasivo utilizando o método AIDA (Atenção, Interesse, Desejo, Ação) para promover o produto/serviço chamado "[Nome do Produto/Serviço]".\n\nDetalhes do produto:\n- O que faz: [O que o produto faz]\n- Público-Alvo: [Público-Alvo]\n- Principal benefício: [Principal Benefício]\n- Chamada para ação (CTA): [Ação que o leitor deve tomar]\n\nO tom de voz deve ser [Tom de Voz: Ex: confiante, urgente, amigável]. Formate o texto dividindo claramente as seções de Atenção, Interesse, Desejo e Ação, usando emojis e espaçamento adequado.',
    tags: ['Copywriting', 'Vendas', 'Marketing Digital'],
  },
  {
    id: 'business-cold-email',
    title: 'E-mail de Prospecção Fria (Cold Email)',
    category: 'Marketing',
    description: 'Escreva um e-mail de prospecção de vendas direto e altamente convertido para potenciais clientes corporativos.',
    template: 'Escreva um e-mail curto e direto de prospecção fria para apresentar a nossa empresa "[Nome da Minha Empresa]" para o contato "[Nome do Lead]", que atua como "[Cargo do Lead]" na empresa "[Empresa do Lead]".\n\nNosso serviço/produto resolve o seguinte problema: [Problema Resolvido].\nQueremos propor uma rápida reunião de 15 minutos na próxima semana para discutir como podemos ajudá-los com [Benefício Esperado].\n\nRegras de escrita:\n- Assunto do e-mail curto e intrigante (máximo 6 palavras).\n- Sem jargões corporativos exagerados.\n- Tom profissional, amigável e focado no valor que geramos para eles, não em nós mesmos.\n- Máximo de 150 palavras.',
    tags: ['E-mail', 'Vendas', 'B2B'],
  },
  {
    id: 'marketing-persona',
    title: 'Criação de Persona de Cliente',
    category: 'Marketing',
    description: 'Construa uma persona detalhada do seu cliente ideal para guiar toda sua estratégia de marketing.',
    template: 'Crie uma persona de cliente ideal (ICP - Ideal Customer Profile) completa para uma empresa que vende [Produto/Serviço] para o mercado [B2B / B2C].\n\nContexto do negócio:\n- Segmento: [Ex: tecnologia, moda, educação]\n- Ticket médio: [Valor aproximado]\n- Problema principal que resolve: [Problema]\n\nA persona deve incluir:\n1. Nome fictício, idade, profissão e localização\n2. Objetivos pessoais e profissionais\n3. Principais dores e frustrações\n4. Canais digitais onde está presente\n5. Objeções comuns na hora de comprar\n6. Frase que essa persona diria ao encontrar a solução perfeita\n\nApresente em formato de ficha visual, usando seções e listas claras.',
    tags: ['Persona', 'ICP', 'Estratégia'],
  },
  {
    id: 'marketing-anuncio-google',
    title: 'Anúncios para Google Ads',
    category: 'Marketing',
    description: 'Gere variações de anúncios responsivos de pesquisa (RSA) otimizados para alta taxa de cliques no Google.',
    template: 'Crie 5 variações de anúncios para Google Ads (formato responsivo de pesquisa) para promover [Produto/Serviço].\n\nPalavra-chave principal: [Palavra-chave]\nDiferencial competitivo: [O que nos diferencia]\nCTA desejado: [Ex: Compre agora, Saiba mais, Solicite uma proposta]\nURL de destino: [Página de destino]\n\nPara cada anúncio, forneça:\n- 3 títulos (máximo 30 caracteres cada)\n- 2 descrições (máximo 90 caracteres cada)\n\nPriorize gatilhos mentais como urgência, prova social, benefício claro e número específico. Inclua a palavra-chave no primeiro título de pelo menos 3 variações.',
    tags: ['Google Ads', 'PPC', 'Tráfego Pago'],
  },
  {
    id: 'marketing-email-sequencia',
    title: 'Sequência de E-mails de Nutrição',
    category: 'Marketing',
    description: 'Crie uma sequência completa de e-mails de nutrição para converter leads em clientes ao longo de dias.',
    template: 'Desenvolva uma sequência de [Quantidade: Ex: 5] e-mails de nutrição para leads que baixaram [Isca Digital: Ex: um e-book, um webinar] sobre "[Tema da Isca]".\n\nPerfil do lead: [Cargo / Problema que tem]\nObjetivo final da sequência: [Ex: agendar uma demo, realizar uma compra]\nTom de voz da marca: [Ex: consultivo, direto, descontraído]\n\nPara cada e-mail, forneça:\n- Dia de envio (Dia 0, Dia 2, Dia 4, etc.)\n- Assunto (gere 2 opções A/B)\n- Corpo do e-mail completo\n- CTA principal\n\nO arco narrativo deve ir de educação → problema → solução → prova social → oferta.',
    tags: ['E-mail Marketing', 'Nutrição', 'Funil'],
  },

  // DESENVOLVIMENTO
  {
    id: 'dev-code-explainer',
    title: 'Explicação Didática de Código',
    category: 'Desenvolvimento',
    description: 'Explique um trecho de código complexo de forma simples, detalhando como funciona passo a passo.',
    template: 'Por favor, analise o seguinte trecho de código escrito em [Linguagem/Framework] e explique o seu funcionamento de forma simples e didática para um desenvolvedor [Nível de Experiência: Ex: iniciante, intermediário].\n\nCódigo:\n```\n[Cole o código aqui]\n```\n\nNa sua resposta:\n1. Forneça um resumo de uma frase sobre o que o código faz.\n2. Explique os principais blocos de lógica ou funções importantes.\n3. Se aplicável, aponte potenciais gargalos de desempenho ou melhorias de legibilidade.',
    tags: ['Programação', 'Refatoração', 'Estudo'],
  },
  {
    id: 'dev-refactor',
    title: 'Refatoração e Revisão de Código',
    category: 'Desenvolvimento',
    description: 'Receba críticas construtivas e sugestões concretas de melhoria para qualquer trecho de código.',
    template: 'Faça uma revisão de código (code review) completa do seguinte código em [Linguagem/Framework]:\n\n```\n[Cole o código aqui]\n```\n\nContexto do projeto: [Breve descrição do que esse código faz no sistema]\n\nAvalie e sugira melhorias nos seguintes aspectos:\n1. **Legibilidade:** Nomes de variáveis, comentários, estrutura geral\n2. **Performance:** Algoritmos ineficientes, N+1 queries, loops desnecessários\n3. **Segurança:** Vulnerabilidades como SQL injection, XSS, dados sensíveis expostos\n4. **Boas práticas:** Princípios SOLID, DRY, KISS\n5. **Testabilidade:** O código é fácil de testar?\n\nFornecça o código refatorado ao final.',
    tags: ['Code Review', 'Boas Práticas', 'SOLID'],
  },
  {
    id: 'dev-regex-gerador',
    title: 'Gerador e Explicador de Regex',
    category: 'Desenvolvimento',
    description: 'Gere expressões regulares complexas em português e entenda exatamente o que cada parte faz.',
    template: 'Preciso de uma expressão regular (regex) para [Linguagem: Ex: JavaScript, Python, PHP] que realize o seguinte:\n\n[Descreva o que a regex deve validar ou capturar. Ex: "validar um CPF brasileiro no formato XXX.XXX.XXX-XX", "extrair todos os e-mails de um texto", "validar senhas com mínimo 8 caracteres, 1 número e 1 símbolo"]\n\nExemplos de strings que DEVEM casar com a regex:\n- [Exemplo 1]\n- [Exemplo 2]\n\nExemplos de strings que NÃO devem casar:\n- [Exemplo 1]\n\nApós fornecer a regex, explique cada parte dela em detalhes, como se estivesse ensinando para um desenvolvedor júnior.',
    tags: ['Regex', 'Validação', 'Backend'],
  },
  {
    id: 'dev-sql-query',
    title: 'Criação de Queries SQL Complexas',
    category: 'Desenvolvimento',
    description: 'Descreva em português o que precisa e receba a query SQL otimizada com explicação.',
    template: 'Você é um especialista em banco de dados. Preciso de uma query SQL para [Banco de Dados: Ex: PostgreSQL, MySQL, SQLite].\n\nEstrutura das tabelas relevantes:\n```sql\n[Cole aqui o CREATE TABLE das tabelas envolvidas, ou descreva os campos]\n```\n\nO que a query deve retornar:\n[Descreva em português claro o resultado esperado. Ex: "Quero listar todos os usuários que fizeram pelo menos 2 pedidos nos últimos 30 dias, ordenados pelo valor total gasto (decrescente), incluindo o nome do usuário, quantidade de pedidos e valor total"]\n\nForneça:\n1. A query otimizada com aliases legíveis\n2. Explicação de cada cláusula principal\n3. Índices recomendados para a performance da query',
    tags: ['SQL', 'Banco de Dados', 'Backend'],
  },

  // PRODUTIVIDADE
  {
    id: 'productivity-pareto-learning',
    title: 'Planejador de Aprendizado (Regra 80/20)',
    category: 'Produtividade',
    description: 'Crie um cronograma de estudos focado nos 20% de esforço que geram 80% dos resultados sobre qualquer assunto.',
    template: 'Quero aprender sobre "[Assunto/Habilidade]" do absoluto zero utilizando o princípio de Pareto (regra dos 80/20). Identifique quais são os 20% mais importantes desse assunto que me darão 80% do entendimento prático.\n\nCom base nisso:\n1. Crie um roteiro de estudos de [Duração: Ex: 4 semanas, 15 dias] dividindo os tópicos.\n2. Sugira exercícios práticos ou projetos rápidos para fixar cada tópico.\n3. Indique fontes ou palavras-chave importantes que devo pesquisar no Google/YouTube para aprofundar.',
    tags: ['Estudos', 'Foco', 'Pareto'],
  },
  {
    id: 'productivity-meeting-notes',
    title: 'Ata de Reunião Profissional',
    category: 'Produtividade',
    description: 'Transforme anotações brutas de reunião em uma ata estruturada com próximos passos e responsáveis.',
    template: 'Transforme as notas brutas abaixo em uma ata de reunião profissional e bem estruturada.\n\nNotas da reunião:\n---\n[Cole suas anotações brutas aqui — podem ser desorganizadas e com abreviações]\n---\n\nMeta-dados:\n- Data: [Data]\n- Participantes: [Nomes e cargos]\n- Objetivo da reunião: [Tema principal]\n\nA ata deve conter:\n1. **Resumo executivo** (3-4 linhas)\n2. **Pontos discutidos** (em tópicos claros)\n3. **Decisões tomadas**\n4. **Próximos passos** com responsável e prazo para cada item\n5. **Pendências** (itens sem resolução)\n\nUse linguagem formal e objetiva.',
    tags: ['Reunião', 'Gestão', 'Comunicação'],
  },
  {
    id: 'productivity-weekly-planning',
    title: 'Planejamento Semanal Inteligente',
    category: 'Produtividade',
    description: 'Monte um plano de semana equilibrado com base nas suas metas, energia e compromissos.',
    template: 'Ajude-me a planejar minha semana de forma estratégica. Aqui estão minhas informações:\n\n**Metas da semana:**\n- [Meta 1 — profissional]\n- [Meta 2 — pessoal]\n- [Meta 3 — saúde/bem-estar]\n\n**Compromissos fixos:**\n- [Ex: Segunda 9h — reunião de equipe]\n- [Ex: Quinta 18h — academia]\n\n**Tarefas urgentes:**\n- [Lista de tarefas com prazo]\n\n**Meu pico de energia está em:** [Ex: manhã / tarde / noite]\n\nCrie um plano diário (Segunda a Sexta) com blocos de tempo sugeridos de 90 minutos, respeitando minha curva de energia e garantindo tempo para descanso e imprevistos.',
    tags: ['Planejamento', 'GTD', 'Time-blocking'],
  },

  // REDES SOCIAIS
  {
    id: 'social-media-instagram-carousel',
    title: 'Roteiro de Carrossel para Instagram',
    category: 'Redes Sociais',
    description: 'Crie um roteiro completo de slides para um carrossel atraente e educativo no Instagram ou LinkedIn.',
    template: 'Crie um roteiro detalhado para um post em carrossel no Instagram focado no tema: "[Tema do Carrossel]". O objetivo principal é [Objetivo: Ex: educar o público, gerar leads, engajar].\n\nEstruture o carrossel em exatamente [Quantidade de Slides: Ex: 5 a 7] slides. Para cada slide, defina:\n- **Imagem/Visual sugerido:** O que deve conter de ilustração ou layout gráfico.\n- **Texto principal (Headline):** O texto curto e chamativo para ir na imagem.\n- **Notas de apoio (Legenda do slide):** Informações adicionais se aplicável.\n\nGaranta que o Slide 1 tenha um gancho (hook) irresistível e o último slide tenha um CTA claro para "[CTA: Ex: salvar o post, comentar, clicar no link da bio]".',
    tags: ['Instagram', 'LinkedIn', 'Marketing de Conteúdo'],
  },
  {
    id: 'social-media-bio',
    title: 'Bio Magnética para Redes Sociais',
    category: 'Redes Sociais',
    description: 'Crie uma bio profissional e cativante para Instagram, LinkedIn ou X (Twitter) que converta visitantes em seguidores.',
    template: 'Escreva 3 versões de bio profissional para [Plataforma: Instagram / LinkedIn / X] para a seguinte pessoa:\n\n**Quem é:** [Nome, cargo ou área de atuação]\n**O que faz:** [Serviço, produto ou conteúdo que oferece]\n**Para quem:** [Público-alvo]\n**Diferencial:** [O que torna essa pessoa especial ou única]\n**CTA desejado:** [Ex: link na bio, DM para parcerias, baixar e-book]\n\nGere:\n- **Versão 1:** Profissional e direta\n- **Versão 2:** Criativa com humor ou personalidade\n- **Versão 3:** Orientada a resultados com números/prova social\n\nRespeite o limite de caracteres da plataforma escolhida.',
    tags: ['Bio', 'Instagram', 'LinkedIn', 'Branding Pessoal'],
  },
  {
    id: 'social-media-ideias-conteudo',
    title: '30 Ideias de Conteúdo para o Mês',
    category: 'Redes Sociais',
    description: 'Nunca fique sem ideia: gere um calendário completo de pautas para o mês inteiro.',
    template: 'Sou um criador de conteúdo no nicho de [Nicho: Ex: marketing digital, finanças pessoais, fitness] e preciso de 30 ideias de conteúdo para postar nas minhas redes sociais durante [Mês/Período].\n\nMeu público é composto por: [Descrição do público]\nMeu objetivo principal com conteúdo é: [Educação / Entretenimento / Vendas / Engajamento]\nFormatos que uso: [Ex: Reels, carrossel, story, texto longo no LinkedIn]\n\nOrganize as 30 ideias em 5 categorias temáticas (6 ideias por categoria) como: Educação, Bastidores, Polêmica/Opinião, Cases e Provas Sociais, e Entretenimento/Humor.\n\nPara cada ideia, forneça o formato sugerido e um possível gancho (primeiras palavras para parar o scroll).',
    tags: ['Calendário Editorial', 'Conteúdo', 'Criador de Conteúdo'],
  },

  // ESCRITA
  {
    id: 'writing-seo-article-outline',
    title: 'Esboço de Artigo Otimizado para SEO',
    category: 'Escrita',
    description: 'Crie um esqueleto completo de cabeçalhos H2 e H3 otimizados para ranquear uma palavra-chave específica.',
    template: 'Você é um especialista em SEO e marketing de conteúdo. Desenvolva um esboço de artigo estruturado (outline) focado na palavra-chave principal "[Palavra-Chave Principal]" e nas palavras-chave secundárias "[Palavras-Chave Secundárias]".\n\nO artigo tem como público-alvo [Público-Alvo] e seu objetivo é [Objetivo do Artigo].\n\nEstruture o esboço com:\n- Sugestão de 3 Títulos atrativos (H1) com limite de 60 caracteres.\n- Estrutura completa de tópicos usando H2 e H3 em ordem lógica.\n- Para cada seção (H2/H3), adicione uma breve frase explicando quais pontos de dor ou dúvidas do usuário devem ser respondidos ali.\n- Uma sugestão de gancho para a Introdução e Conclusão.',
    tags: ['SEO', 'Blogs', 'Criação de Conteúdo'],
  },
  {
    id: 'writing-story-brand',
    title: 'Storytelling de Marca',
    category: 'Escrita',
    description: 'Construa uma narrativa de marca poderosa usando o framework StoryBrand de Donald Miller.',
    template: 'Aplique o framework StoryBrand de Donald Miller para criar a narrativa de marca da empresa "[Nome da Empresa]".\n\nInformações da empresa:\n- O que faz: [Produto/Serviço]\n- Público-alvo: [Cliente ideal]\n- Problema que resolve: [Dor principal do cliente]\n- Solução oferecida: [Como resolve o problema]\n- Transformação prometida: [Como fica a vida do cliente após usar o produto]\n\nEstruture a narrativa nos 7 elementos do StoryBrand:\n1. O Herói (cliente)\n2. O Problema (vilão externo, interno e filosófico)\n3. O Guia (sua empresa) — com empatia e autoridade\n4. O Plano (3 passos simples para o cliente)\n5. A Chamada para Ação (direta e de transição)\n6. O Fracasso (o que acontece se não agir)\n7. O Sucesso (a transformação desejada)\n\nAo final, gere um parágrafo de "Declaração de Marca" com base nessa estrutura.',
    tags: ['Storytelling', 'Branding', 'Copywriting'],
  },
  {
    id: 'writing-thread-twitter',
    title: 'Thread Viral para X (Twitter)',
    category: 'Escrita',
    description: 'Crie uma thread educativa e envolvente que prende o leitor do início ao fim e gera compartilhamentos.',
    template: 'Crie uma thread para X (Twitter/X) sobre o tema "[Tema da Thread]".\n\nObjetivo da thread: [Educar / Gerar debate / Promover produto]\nPúblico-alvo: [Quem vai ler]\nTom: [Autoritativo / Conversacional / Provocativo]\n\nA thread deve ter [Quantidade: Ex: 8 a 12] tweets. Siga esta estrutura:\n- **Tweet 1 (Hook):** Uma afirmação surpreendente, estatística ou promessa que force o clique em "Mais"\n- **Tweets 2 a N-1:** Desenvolvimento com subtópicos, exemplos concretos e analogias\n- **Tweet final:** Conclusão + CTA (seguir, comentar, compartilhar) + oferta de valor\n\nCada tweet deve ter no máximo 280 caracteres e terminar com um gancho para continuar lendo.',
    tags: ['Twitter/X', 'Thread', 'Viralidade'],
  },

  // NEGÓCIOS
  {
    id: 'business-pitch-deck',
    title: 'Estrutura de Pitch Deck',
    category: 'Negócios',
    description: 'Monte o roteiro de uma apresentação de pitch convincente para investidores ou clientes corporativos.',
    template: 'Crie a estrutura completa de um pitch deck para a startup/empresa "[Nome da Empresa]".\n\nInformações base:\n- Problema que resolve: [Problema]\n- Solução: [Produto/Serviço]\n- Mercado-alvo (TAM/SAM/SOM): [Se souber, informe os números]\n- Modelo de negócio (como ganha dinheiro): [Modelo]\n- Estágio atual: [Ideia / MVP / Receita / Crescimento]\n- Objetivo do pitch: [Captar investimento / Fechar parceria / Vender contrato]\n\nPara cada um dos [Quantidade: Ex: 10] slides, forneça:\n- Título do slide\n- Conteúdo principal (bullet points)\n- Dica de design/visual\n- Pergunta que esse slide deve responder na mente do investidor',
    tags: ['Startup', 'Investimento', 'Apresentação'],
  },
  {
    id: 'business-plano-acao-90-dias',
    title: 'Plano de Ação de 90 Dias',
    category: 'Negócios',
    description: 'Estruture um plano operacional de 3 meses para lançar um produto, projeto ou meta de negócio.',
    template: 'Crie um plano de ação de 90 dias para atingir o objetivo: "[Objetivo Principal]".\n\nContexto:\n- Onde estou agora: [Situação atual — números, recursos, time]\n- Onde quero chegar: [Meta específica e mensurável ao fim dos 90 dias]\n- Recursos disponíveis: [Budget, pessoas, ferramentas]\n- Principais obstáculos previstos: [Listar 2-3]\n\nDivida o plano em 3 sprints de 30 dias:\n- **Sprint 1 (Dias 1-30):** Fundação e validação\n- **Sprint 2 (Dias 31-60):** Execução e ajuste\n- **Sprint 3 (Dias 61-90):** Escala e consolidação\n\nPara cada sprint, liste 5-7 tarefas concretas com responsável, prazo e KPI de sucesso.',
    tags: ['Planejamento', 'OKR', 'Estratégia'],
  },
  {
    id: 'business-proposta-comercial',
    title: 'Proposta Comercial Profissional',
    category: 'Negócios',
    description: 'Elabore uma proposta comercial completa e persuasiva para fechar negócios de maior valor.',
    template: 'Elabore uma proposta comercial profissional e persuasiva para apresentar ao cliente "[Nome/Empresa do Cliente]".\n\nDetalhes do projeto/serviço:\n- Serviço oferecido: [Descrição do serviço ou produto]\n- Escopo do trabalho: [O que está incluído]\n- Prazo de entrega: [Timeline]\n- Investimento total: [Valor ou faixa de preço]\n- Diferenciais: [Por que sua empresa é a melhor escolha]\n\nA proposta deve conter:\n1. Página de apresentação (contexto e entendimento do problema do cliente)\n2. Solução proposta e metodologia\n3. Entregáveis e cronograma\n4. Investimento com opções (se houver)\n5. Prova social (depoimentos, cases similares)\n6. Próximos passos e validade da proposta\n\nUse linguagem consultiva, focada nos resultados para o cliente.',
    tags: ['Vendas', 'B2B', 'Proposta'],
  },

  // IA & AUTOMAÇÃO
  {
    id: 'ai-automacao-processo',
    title: 'Mapeamento de Processo para Automatizar com IA',
    category: 'IA & Automação',
    description: 'Identifique quais etapas de um processo manual podem ser automatizadas com ferramentas de IA.',
    template: 'Analise o processo de trabalho descrito abaixo e identifique todas as oportunidades de automação com IA ou ferramentas no-code/low-code.\n\nProcesso atual:\n[Descreva passo a passo como o processo funciona hoje, incluindo quem faz o quê e quanto tempo leva]\n\nContexto:\n- Frequência do processo: [Diário / Semanal / Por demanda]\n- Volume: [Ex: 50 e-mails por dia, 200 pedidos por semana]\n- Equipe atual: [Quantas pessoas e perfil]\n- Stack de ferramentas atual: [Ex: Google Workspace, Slack, CRM X]\n\nPara cada etapa automatizável, sugira:\n1. A ferramenta de IA ou automação recomendada (ex: Zapier, Make, n8n, GPT API)\n2. Como configurar (alto nível)\n3. Estimativa de horas economizadas por semana\n4. Complexidade (Baixa / Média / Alta)',
    tags: ['Automação', 'No-code', 'Produtividade'],
  },
  {
    id: 'ai-system-prompt',
    title: 'Criação de System Prompt para Agente de IA',
    category: 'IA & Automação',
    description: 'Escreva um system prompt preciso e eficaz para configurar um agente de IA para qualquer finalidade.',
    template: 'Escreva um system prompt completo e otimizado para configurar um agente de IA com as seguintes características:\n\n**Papel do agente:** [Ex: Assistente de suporte ao cliente, Redator de blog, Analista financeiro]\n**Empresa/Contexto:** [Informações relevantes sobre a empresa ou projeto]\n**Tarefas principais:** [Liste de 3 a 5 as tarefas que o agente irá realizar]\n**Tom e personalidade:** [Ex: Formal, empático, direto, criativo]\n**Restrições:** [O que o agente NÃO deve fazer ou falar]\n**Formato de saída preferido:** [Ex: Listas com bullets, parágrafos curtos, JSON]\n\nO system prompt deve:\n- Começar com a definição de papel clara ("Você é...")\n- Incluir exemplos de como responder (few-shot examples)\n- Definir como lidar com perguntas fora do escopo\n- Ter instruções de formatação e idioma',
    tags: ['Agente IA', 'Prompt Engineering', 'LLM'],
  },
  {
    id: 'ai-analise-dados',
    title: 'Análise e Interpretação de Dados',
    category: 'IA & Automação',
    description: 'Peça para a IA analisar dados brutos e transformá-los em insights acionáveis e visualizações.',
    template: 'Analise os dados abaixo e transforme-os em um relatório de insights acionáveis.\n\nDados:\n```\n[Cole seus dados aqui — pode ser CSV, tabela, ou lista de números]\n```\n\nContexto:\n- O que esses dados representam: [Ex: vendas mensais, métricas de marketing, pesquisa com clientes]\n- Período coberto: [Ex: Janeiro a Junho de 2025]\n- Objetivo da análise: [O que preciso decidir ou entender com esses dados]\n\nForneça:\n1. **Sumário executivo** (3-4 insights mais importantes)\n2. **Tendências** identificadas (crescimento, queda, sazonalidade)\n3. **Anomalias** ou pontos de atenção\n4. **Recomendações** de ação (prioridades 1, 2 e 3)\n5. Sugestão de gráficos para visualização (descreva qual tipo e o que mostrar)',
    tags: ['Dados', 'Analytics', 'Relatório'],
  },

  // CARREIRA
  {
    id: 'career-linkedin-profile',
    title: 'Perfil LinkedIn Magnético',
    category: 'Carreira',
    description: 'Reescreva seu perfil do LinkedIn para atrair recrutadores e oportunidades alinhadas com seus objetivos.',
    template: 'Reescreva e otimize o meu perfil do LinkedIn com base nas informações abaixo.\n\n**Sobre mim atual:**\n[Cole seu "Sobre" atual ou descreva sua experiência]\n\n**Objetivo de carreira:**\n[Ex: Conseguir uma vaga como Desenvolvedor Sênior em startup de tecnologia, Migrar para área de dados, Atrair clientes como freelancer]\n\n**Experiências relevantes:**\n[Liste suas 3 principais experiências com conquistas mensuráveis]\n\n**Habilidades técnicas:** [Liste]\n**Habilidades soft:** [Liste]\n\nGere:\n1. **Título profissional** otimizado para busca (80 caracteres)\n2. **Seção "Sobre"** envolvente (300 palavras, em 1ª pessoa)\n3. **Descrição das 2 principais experiências** com foco em resultados\n4. **5 palavras-chave** para adicionar às Skills',
    tags: ['LinkedIn', 'Carreira', 'Recrutamento'],
  },
  {
    id: 'career-cv-tailoring',
    title: 'Currículo Adaptado para a Vaga',
    category: 'Carreira',
    description: 'Adapte seu currículo para uma vaga específica, alinhando suas experiências às palavras-chave do recrutador.',
    template: 'Adapte meu currículo para a vaga descrita abaixo, maximizando minha compatibilidade com os requisitos.\n\n**Descrição da vaga:**\n[Cole aqui o texto completo da vaga]\n\n**Meu currículo atual (resumo):**\n[Liste suas experiências, formação e habilidades]\n\nRealiz as seguintes tarefas:\n1. Identifique as 10 palavras-chave mais importantes da vaga (hard e soft skills)\n2. Sugira como reformular cada experiência do meu currículo usando essas palavras-chave\n3. Indique quais experiências são mais relevantes e devem aparecer primeiro\n4. Sugira um novo objetivo profissional específico para essa vaga\n5. Aponte lacunas no meu perfil e como endereçá-las na carta de apresentação',
    tags: ['Currículo', 'ATS', 'Job Search'],
  },
  {
    id: 'career-entrevista-prep',
    title: 'Preparação para Entrevista de Emprego',
    category: 'Carreira',
    description: 'Simule uma entrevista real e receba feedback detalhado sobre suas respostas com o método STAR.',
    template: 'Vou me preparar para uma entrevista de emprego. Atue como um recrutador experiente da empresa "[Nome da Empresa]" para a vaga de "[Cargo]".\n\nMeu perfil:\n[Breve descrição da sua experiência]\n\nInformações sobre a empresa (cole o que encontrar no site/LinkedIn da empresa):\n[Informações sobre a empresa, cultura, valores]\n\nPor favor:\n1. Faça as 5 perguntas comportamentais mais prováveis para essa vaga\n2. Após eu responder cada uma, avalie usando o método STAR (Situação, Tarefa, Ação, Resultado)\n3. Dê feedback sobre o que fortaleceu e o que pode melhorar\n4. Ao final, simule 2 perguntas difíceis (tipo "Qual seu maior defeito?" ou "Por que devo te contratar?") e forneça a resposta ideal',
    tags: ['Entrevista', 'STAR', 'Carreira'],
  },

  // EDUCAÇÃO
  {
    id: 'education-quiz-gerador',
    title: 'Gerador de Quiz e Questões de Estudo',
    category: 'Educação',
    description: 'Crie questões de múltipla escolha, verdadeiro/falso e dissertativas sobre qualquer conteúdo para fixação.',
    template: 'Crie um quiz de avaliação sobre o seguinte conteúdo:\n\n**Tema:** [Ex: Fotossíntese, Segunda Guerra Mundial, Álgebra Linear, React Hooks]\n**Nível:** [Fundamental / Médio / Superior / Profissional]\n**Quantidade:** [Ex: 10 questões]\n**Formatos:** [Múltipla escolha / Verdadeiro e Falso / Dissertativas — escolha um ou misture]\n\nMaterial de referência (opcional):\n[Cole o texto ou trecho que deve ser base para as questões]\n\nPara cada questão:\n- Enuncie de forma clara e objetiva\n- Para múltipla escolha: inclua 4 alternativas, com 1 correta e 3 distratores plausíveis\n- Ao final do quiz, forneça o gabarito comentado com a explicação de cada resposta correta',
    tags: ['Quiz', 'Educação', 'Revisão'],
  },
  {
    id: 'education-resumo-estudo',
    title: 'Resumo Inteligente para Estudo',
    category: 'Educação',
    description: 'Transforme qualquer texto longo em um resumo estruturado com mapa mental e pontos-chave para revisão.',
    template: 'Transforme o texto abaixo em um material de estudo completo e eficiente.\n\n**Texto original:**\n[Cole aqui o artigo, capítulo de livro, transcrição de aula ou qualquer conteúdo longo]\n\n**Meu objetivo de aprendizado:** [Ex: Passar em prova, Entender o tema para aplicar no trabalho]\n**Tempo disponível para estudo:** [Ex: 30 minutos]\n\nGere:\n1. **Resumo em 5 bullets** (os pontos mais importantes)\n2. **Glossário de termos-chave** (10 palavras com definição breve)\n3. **Mapa mental textual** (hierarquia de conceitos)\n4. **3 perguntas de fixação** para eu responder após ler\n5. **Analogia ou exemplo prático** para o conceito central',
    tags: ['Resumo', 'Mapa Mental', 'Fixação'],
  },

  // FINANÇAS
  {
    id: 'finance-analise-investimento',
    title: 'Análise Simplificada de Investimento',
    category: 'Finanças',
    description: 'Entenda os prós e contras de um ativo ou estratégia de investimento explicados de forma acessível.',
    template: 'Faça uma análise educacional e imparcial sobre [Tipo de Investimento: Ex: Tesouro Direto IPCA+, FIIs de logística, ações de small caps, ETFs internacionais].\n\nMeu perfil de investidor:\n- Horizonte de tempo: [Ex: 2 anos / 10 anos / aposentadoria]\n- Tolerância ao risco: [Conservador / Moderado / Arrojado]\n- Valor disponível para aportar: [Faixa de valor]\n- Objetivo: [Ex: Reserva de emergência, renda passiva, crescimento de patrimônio]\n\nAborde:\n1. O que é e como funciona (para leigos)\n2. Rentabilidade histórica (se aplicável)\n3. Riscos principais e como mitigá-los\n4. Para quem é mais indicado\n5. Como começar — passo a passo prático\n6. Comparação com 2 alternativas similares\n\n⚠️ Lembre-me que isso é apenas educação financeira, não consultoria de investimentos.',
    tags: ['Investimentos', 'Educação Financeira', 'Finanças Pessoais'],
  },
  {
    id: 'finance-orcamento-pessoal',
    title: 'Orçamento Pessoal Inteligente',
    category: 'Finanças',
    description: 'Monte um orçamento mensal detalhado com metas de economia e estratégias de corte de gastos.',
    template: 'Ajude-me a criar um orçamento pessoal mensal e estratégias para melhorar minhas finanças.\n\n**Renda mensal líquida:** R$ [Valor]\n\n**Gastos fixos mensais:**\n- Moradia (aluguel/financiamento): R$ [Valor]\n- Transporte: R$ [Valor]\n- Alimentação: R$ [Valor]\n- Planos (saúde, telefone, streaming): R$ [Valor]\n- Outros: R$ [Valor]\n\n**Gastos variáveis estimados:**\n- Lazer: R$ [Valor]\n- Compras: R$ [Valor]\n- Outros: R$ [Valor]\n\n**Objetivo financeiro:** [Ex: Criar reserva de emergência de 6 meses, Quitar dívida de R$ X em Y meses, Investir R$ X por mês]\n\nCom base nisso:\n1. Calcule o balanço atual (receita - despesas)\n2. Aplique a regra 50-30-20 e compare com minha realidade\n3. Aponte os 3 maiores cortes possíveis\n4. Monte um plano de ação de 3 meses para atingir meu objetivo',
    tags: ['Orçamento', 'Finanças Pessoais', 'Economia'],
  },
  {
    id: 'ai-conteudo-multiformato',
    title: 'Gerador de Conteúdo Multiformato com IA',
    category: 'IA & Automação',
    description: 'Reúna um conteúdo principal e gere automaticamente variações otimizadas para diferentes plataformas, economizando tempo na criação.',
    template: `Você é um especialista em reaproveitamento de conteúdo e criação para múltiplas plataformas. Seu objetivo é pegar um conteúdo base e transformá-lo em formatos otimizados para diferentes canais, garantindo coerência na mensagem e adaptação ao público e características de cada plataforma.

O conteúdo base é:
"""
[Conteúdo Principal - Texto do artigo, script de vídeo, resumo de podcast, etc.]
"""

As plataformas desejadas são:
[Lista de plataformas, ex: LinkedIn, Instagram (stories e feed), Twitter/X (thread), E-mail Marketing, TikTok, YouTube (shorts), Blog post resumido]

Público-alvo principal: [Público-alvo geral do conteúdo]
Tom de voz desejado: [Ex: Formal, informal, inspirador, educativo, divertido, profissional]

Para cada plataforma listada, crie:
1.  **LinkedIn Post:** Um post profissional e conciso, com foco em valor e engajamento, idealmente com uma pergunta ou CTA. Inclua 2-3 hashtags relevantes.
2.  **Instagram Post (Carrossel ou Imagem Única):**
    *   Sugestão de título/gancho visual para a primeira imagem.
    *   Legenda com no máximo 2200 caracteres, quebre em parágrafos curtos, utilize emojis relevantes e inclua uma CTA clara.
    *   Liste 5-8 hashtags populares e específicas.
3.  **Twitter/X Thread:** Uma sequência de 3-5 tweets que desdobra o conteúdo principal, com ganchos para manter o interesse, utilizando linguagem concisa e com CTAs/perguntas.
4.  **Email Marketing (segmento de newsletter):** Um trecho de 100-150 palavras que resume o conteúdo e convida o leitor a saber mais, com um título chamativo e um CTA para a fonte original.

Formate a saída de forma clara, separando o conteúdo por plataforma.`,
    tags: ['reaproveitamento', 'conteúdo', 'automação', 'marketing'],
  },
  {
    id: 'education-plano-estudo-personalizado',
    title: 'Criador de Plano de Estudo Personalizado',
    category: 'Educação',
    description: 'Obtenha um plano de estudo estruturado e adaptado aos seus objetivos e tempo disponível para aprender qualquer tema.',
    template: `Você é um tutor inteligente e organizador de planos de estudo personalizado. Seu objetivo é criar um plano de estudo semanal estruturado e eficaz para [seu nome], com base nas informações fornecidas. O plano deve ser realista, abrangente e focado em resultados.

Informações do aluno:
*   **Nome:** [Seu nome]
*   **Tópico/Matéria a ser estudada:** [Ex: Machine Learning para iniciantes, Marketing Digital Avançado, História do Brasil Colônia, Inglês para negócios]
*   **Objetivo de aprendizagem:** [Ex: Compreender os conceitos básicos de redes neurais, ser capaz de criar e otimizar campanhas de Google Ads, passar na prova de certificação A1 de inglês, dominar o uso de SQL para análise de dados]
*   **Conhecimento prévio sobre o tópico:** [Ex: Nenhum, básico, intermediário, já tenho alguma experiência]
*   **Tempo disponível por dia (média):** [Ex: 1 hora, 2 horas e 30 minutos, 45 minutos]
*   **Dias da semana preferenciais para estudar:** [Ex: Segunda a Sexta, Fins de semana, Terças e Quintas à noite]
*   **Recursos preferenciais (se houver):** [Ex: Vídeos no YouTube, artigos, livros didáticos, cursos online (mencionar plataforma), exercícios práticos]
*   **Dificuldades ou preferências de aprendizado:** [Ex: Prefiro aprender com exemplos práticos, tenho dificuldade em memorizar datas, preciso de pausas frequentes, gosto de mapas mentais]

Com base nessas informações, crie um plano de estudo semanal detalhado que inclua:

1.  **Visão Geral do Objetivo:** Reafirme o objetivo principal e como o plano ajudará a alcançá-lo.
2.  **Estrutura Semanal:** Divida o conteúdo em módulos ou tópicos menores, distribuídos pelos dias de estudo.
3.  **Sugestões de Atividades por Dia:** Para cada dia de estudo, liste tarefas específicas (ex: "Assistir aulas X e Y do curso", "Ler capítulos 1-3 do livro", "Fazer exercícios do módulo Z", "Revisar anotações").
4.  **Sugestões de Recursos:** Indique tipos de recursos (e se possível, exemplos genéricos ou dicas de onde encontrar) para cada tarefa.
5.  **Dicas de Produtividade/Estudo:** Inclua sugestões personalizadas com base nas dificuldades ou preferências mencionadas.
6.  **Marco/Revisão Semanal:** Proponha um pequeno resumo ou teste no final da semana para consolidar o aprendizado.

Formate a saída de forma clara, usando títulos e marcadores para facilitar a leitura.`,
    tags: ['aprendizagem', 'personalizado', 'autodesenvolvimento', 'habilidades'],
  },
  {
    id: 'finance-planejador-metas-ia',
    title: 'Planejador de Metas Financeiras com Cenários',
    category: 'Finanças',
    description: 'Defina uma meta financeira e receba um plano de ação detalhado, explorando diferentes cenários para atingir seu objetivo.',
    template: `Você é um consultor financeiro com IA, especializado em planejamento e análise de cenários. Seu objetivo é ajudar o usuário a criar um plano realista para atingir uma meta financeira específica, considerando suas condições atuais e projetando diferentes cenários.

Informações para o planejamento:
*   **Meta Financeira:** [Ex: Comprar um carro de R$80.000, aposentar-se com R$5.000 mensais em 20 anos, dar entrada em um imóvel de R$300.000 em 5 anos, viajar para a Europa em 2 anos com R$20.000]
*   **Valor Total Necessário (se aplicável):** [Ex: R$80.000 (se a meta for um carro, por exemplo)]
*   **Prazo Desejado:** [Ex: 3 anos, 18 meses, 20 anos]
*   **Economia Mensal Atual/Disponível:** [Ex: R$500, R$1.200, R$200]
*   **Valor já economizado para a meta (se houver):** [Ex: R$10.000, R$0]
*   **Renda Mensal Total:** [Ex: R$4.500]
*   **Despesas Mensais Fixas:** [Ex: R$2.000]
*   **Despesas Mensais Variáveis:** [Ex: R$1.000]
*   **Nível de Tolerância a Risco (para investimentos):** [Ex: Conservador, Moderado, Arrojado]
*   **Inflação Média Anual Estimada (Brasil):** [Ex: 4% (use um valor realista para 2026 e ajuste se necessário)]
*   **Expectativa de Rendimento Anual Bruto (antes de impostos) de Investimento (se houver):** [Ex: 8% para conservador, 12% para moderado, 18% para arrojado - ajuste conforme cenário de 2026 e tolerância a risco]

Com base nessas informações, elabore um plano financeiro que inclua:

1.  **Resumo da Meta:** Reafirme a meta e o prazo.
2.  **Análise de Viabilidade Inicial:** Calcule se a economia mensal atual é suficiente para atingir a meta no prazo desejado, sem considerar rendimentos.
3.  **Plano de Ação Sugerido:**
    *   **Economia Mensal Recomendada:** Qual seria o valor ideal para economizar mensalmente.
    *   **Sugestões de Corte de Gastos/Aumento de Renda:** Ideias práticas para atingir a economia recomendada.
    *   **Sugestão de Investimento:** Recomende tipos de investimento alinhados com a tolerância a risco e o prazo (ex: CDB, Tesouro Direto, Fundos de Investimento, Ações) e uma estimativa de rendimento líquido anual.
4.  **Cenários Projetados (considerando rendimentos):**
    *   **Cenário 1: Otimista:** Com aumento de [ex: 20%] na economia mensal e rendimento anual bruto um pouco acima da expectativa [ex: +1%]. Calcule o novo prazo ou o valor final acumulado.
    *   **Cenário 2: Base:** Com a economia mensal sugerida e a expectativa de rendimento anual bruto. Detalhe o cronograma de acúmulo e o valor final.
    *   **Cenário 3: Pessimista:** Com diminuição de [ex: 10%] na economia mensal e rendimento anual bruto um pouco abaixo da expectativa [ex: -1%]. Calcule o novo prazo ou o valor final acumulado.
5.  **Próximos Passos e Monitoramento:** Dicas para acompanhar o progresso e ajustar o plano.

Use tabelas ou listas para apresentar os cenários de forma clara. Inclua a fórmula básica para cálculo de juros compostos para transparência.`,
    tags: ['investimento', 'poupança', 'planejamento', 'metas'],
  },
  {
    id: 'dev-code-review-assistant',
    title: 'Assistente de Revisão de Código com IA',
    category: 'Desenvolvimento',
    description: 'Obtenha feedback detalhado sobre seu código, incluindo sugestões de melhoria, otimização e identificação de potenciais problemas.',
    template: `Você é um engenheiro de software experiente e um revisor de código meticuloso. Sua tarefa é analisar o código fornecido abaixo e oferecer um feedback construtivo e detalhado, focado em melhorias, otimização, segurança, legibilidade e conformidade com boas práticas.

Informações para a revisão:
*   **Linguagem de Programação:** [Ex: Python, JavaScript, Java, C#, Go, PHP, TypeScript]
*   **Contexto/Propósito do Código:** [Ex: Uma API REST para gerenciamento de usuários, um script para processamento de dados, um componente de UI em React, uma função de validação de formulário]
*   **Problemas/Dúvidas Específicas (opcional):** [Ex: "Estou preocupado com a performance desta parte", "Há alguma vulnerabilidade aqui?", "Como posso deixar este código mais modular?"]
*   **Boas Práticas a Seguir (opcional):** [Ex: Padrões de projeto SOLID, Clean Code, Test-Driven Development (TDD)]

O código a ser revisado é:
\`\`\`[Linguagem de Programação]
[Cole o código aqui]
\`\`\`

Sua revisão deve cobrir os seguintes pontos:

1.  **Melhorias de Legibilidade e Manutenibilidade:**
    *   Nomenclatura de variáveis, funções e classes.
    *   Comentários e documentação (necessidade, clareza).
    *   Estrutura do código, modularidade e organização.
    *   Uso de padrões de projeto (se aplicável).
2.  **Otimização de Performance:**
    *   Identificação de gargalos ou operações custosas.
    *   Sugestões para algoritmos mais eficientes ou estruturas de dados.
3.  **Segurança e Tratamento de Erros:**
    *   Potenciais vulnerabilidades (ex: injeção de SQL, XSS, exposição de dados sensíveis).
    *   Manejo de exceções e erros (robustez do código).
    *   Validação de entrada de dados.
4.  **Conformidade com Boas Práticas da Linguagem:**
    *   Idiomaticidades da linguagem.
    *   Uso correto de recursos e bibliotecas padrão.
5.  **Testabilidade:**
    *   Sugestões para tornar o código mais fácil de testar unitariamente.
6.  **Sugestões de Refatoração:**
    *   Pontos onde o código pode ser simplificado ou organizado de forma mais elegante.
7.  **Respostas a Dúvidas Específicas:**
    *   Aborde qualquer problema ou dúvida que o usuário tenha levantado.

Apresente o feedback de forma clara, utilizando marcadores, explicando a razão por trás de cada sugestão e, se possível, forneça exemplos de como a mudança pode ser implementada.`,
    tags: ['revisão', 'código', 'otimização', 'melhores-práticas'],
  },,
];
