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
  },
  {
    id: 'ai-agente-pesquisa',
    title: 'Agente de Pesquisa Autônomo com IA',
    category: 'IA & Automação',
    description: 'Cria um plano de pesquisa detalhado e executa a busca de informações sobre um tópico específico, simulando um agente autônomo de IA.',
    template: `Atue como um Agente de Pesquisa com IA. Sua tarefa é elaborar e executar um plano de pesquisa sobre o seguinte tópico: "[Tópico da Pesquisa]".

Objetivo da Pesquisa: [Qual informação específica você busca ou qual problema quer resolver com esta pesquisa? Ex: "Entender o mercado de IA no Brasil", "Analisar as tendências de consumo da Geração Z".]
Público-alvo da informação (quem vai ler): [Gerente, cliente, colega, público geral, investidor]
Fontes preferenciais (se houver): [Artigos acadêmicos, notícias de mercado, blogs técnicos, relatórios de indústria, entrevistas, pesquisas de opinião. Se não souber, deixe em branco.]
Restrições ou pontos de atenção: [Ex: Evitar fontes não verificadas, focar em dados dos últimos 2 anos, considerar apenas o mercado brasileiro, ignorar opiniões pessoais.]
Formato de saída desejado: [Resumo executivo, lista de pontos-chave, análise comparativa, relatório completo, tabela de dados, apresentação de slides (esqueleto).]

Passos que você deve seguir:
1.  **Planejamento**: Apresente um plano de pesquisa detalhado, incluindo palavras-chave, possíveis fontes e a estrutura do relatório final.
2.  **Execução (Simulada)**: Com base no plano, "simule" a pesquisa, apresentando os principais achados e dados relevantes que você encontraria.
3.  **Síntese**: Organize as informações coletadas no formato de saída desejado, destacando os insights mais importantes e respondendo ao objetivo da pesquisa.

Inicie o plano de pesquisa.`,
    tags: ['Pesquisa', 'Automação', 'Agente IA', 'Informação'],
  },
  {
    id: 'negocios-analise-cenarios',
    title: 'Análise de Cenários para Tomada de Decisão',
    category: 'Negócios',
    description: 'Ajuda a analisar uma decisão de negócio complexa, explorando diferentes cenários, seus riscos e oportunidades, com base em dados e premissas fornecidas.',
    template: `Atue como um consultor estratégico especializado em análise de cenários. Estou enfrentando uma decisão importante e preciso explorar suas implicações em diferentes contextos.

A Decisão em Questão: [Descreva a decisão que precisa ser tomada, por exemplo: "Lançar um novo produto X no mercado Y", "Expandir para uma nova região Z", "Adotar uma nova tecnologia A", "Alterar o modelo de preços B".]
Objetivo Principal: [Qual resultado você espera alcançar com a decisão? Ex: "Aumentar faturamento em 20%", "Reduzir custos operacionais em 15%", "Aumentar participação de mercado em 5%", "Melhorar a satisfação do cliente".]
Fatores Relevantes: [Liste os fatores mais importantes que influenciam a decisão e seus resultados. Ex: "Custo de matéria-prima", "Taxa de juros", "Regulamentação governamental", "Comportamento do consumidor", "Ações da concorrência", "Avanços tecnológicos".]
Dados e Premissas Atuais: [Forneça quaisquer dados ou premissas importantes que você já tenha. Ex: "Custo atual de produção é R$ X", "Crescimento de mercado esperado de Y% ao ano", "Budget disponível de R$ Z", "Nosso market share atual é de K%".]
Cenários a serem explorados: [Liste os tipos de cenários que você gostaria de analisar. Ex: "Otimista", "Realista", "Pessimista", "Cenário de recessão econômica", "Cenário de alta concorrência". Se não souber, pode pedir para a IA sugerir.]

Com base nestas informações, para cada cenário, eu preciso que você:
1.  Descreva o cenário em termos de como os fatores relevantes podem se comportar.
2.  Identifique os riscos e desafios associados à decisão dentro desse cenário.
3.  Identifique as oportunidades e potenciais benefícios.
4.  Sugira ações estratégicas ou planos de mitigação/contingência para cada cenário.
5.  Apresente um resumo comparativo dos cenários, destacando os prós e contras de cada um em relação à decisão.`,
    tags: ['Decisão', 'Estratégia', 'Análise', 'Negócios'],
  },
  {
    id: 'produtividade-workflow-optimizer',
    title: 'Otimizador de Fluxo de Trabalho (Workflow)',
    category: 'Produtividade',
    description: 'Analisa seu fluxo de trabalho atual (pessoal ou de equipe) e sugere melhorias, automações e ferramentas para aumentar a eficiência e reduzir gargalos.',
    template: `Atue como um especialista em otimização de processos e automação. Meu objetivo é melhorar a eficiência de um fluxo de trabalho específico.

Descreva o fluxo de trabalho atual:
[Liste as etapas do fluxo de trabalho em ordem cronológica. Ex:
1.  Receber solicitação de cliente por e-mail (Gmail).
2.  Classificar solicitação (tipo A, B ou C) e inserir em planilha (Excel).
3.  Atribuir a membro da equipe X ou Y (Trello).
4.  Membro da equipe executa tarefa e atualiza status no Trello.
5.  Revisão do gerente, que envia feedback por Slack.
6.  Enviar feedback final e status ao cliente por e-mail.]

Ferramentas e sistemas atualmente utilizados: [Ex: Gmail, Trello, Slack, Planilha Excel, CRM, Software ERP, Asana, Monday.com]
Principais problemas ou gargalos observados: [Ex: Demora na classificação, muitas interrupções por mensagens, tarefas manuais repetitivas, falta de comunicação entre as etapas, atrasos nas revisões, erros de digitação.]
Objetivo da otimização: [Ex: Reduzir tempo de execução em X%, diminuir erros em Y%, liberar tempo da equipe para tarefas mais estratégicas, melhorar a experiência do cliente, aumentar a capacidade de processamento.]
Restrições ou recursos disponíveis: [Ex: Budget limitado para novas ferramentas (máx. R$500/mês), equipe não tem tempo para treinamento complexo, integração com sistemas existentes é prioritária, preferência por ferramentas de código aberto.]

Com base nas informações acima, por favor:
1.  Identifique os 3 a 5 pontos mais críticos para otimização no fluxo de trabalho.
2.  Para cada ponto, sugira melhorias específicas, detalhando como elas poderiam ser implementadas (ex: mudança de processo, adoção de uma nova rotina).
3.  Proponha ferramentas ou automações de IA/software que poderiam ser integradas para aumentar a eficiência, justificando o porquê.
4.  Estime o potencial impacto dessas melhorias no objetivo da otimização (ex: "redução de X% no tempo da etapa Y").
5.  Apresente um plano de ação gradual para implementação das mudanças, com prioridades.`,
    tags: ['Eficiência', 'Automação', 'Processos', 'Otimização'],
  },
  {
    id: 'marketing-tendencias-mercado',
    title: 'Gerador de Insights de Tendências de Mercado',
    category: 'Marketing',
    description: 'Identifica e analisa tendências emergentes em um setor específico, fornecendo insights sobre oportunidades e ameaças para seu negócio ou produto.',
    template: `Atue como um analista de tendências de mercado com IA. Sua tarefa é pesquisar e gerar insights sobre tendências emergentes que afetam o seguinte setor: "[Setor ou nicho de mercado]".

Produto/Serviço Específico (se houver): [Se você tem um produto ou serviço em mente, mencione-o. Ex: "Software de gestão para pequenas empresas", "Alimentos plant-based", "Tecnologia wearable para saúde", "Plataformas de educação a distância".]
Período de Análise: [Ex: Próximos 1-3 anos, 2026-2030, tendências atuais.]
Objetivo da Análise: [Ex: "Identificar novas oportunidades de produto", "Entender o comportamento do consumidor", "Prever mudanças na concorrência", "Validar uma nova estratégia de marketing", "Avaliar o impacto de novas regulamentações".]
Geografia de interesse: [Ex: Brasil, América Latina, Global, Cidades específicas como São Paulo, Rio de Janeiro.]
Quais aspectos focar: [Ex: Tecnológicos, sociais, econômicos, ambientais, regulatórios, culturais, demográficos.]

Com base nestas informações, por favor, realize as seguintes análises:
1.  **Identificação de Tendências**: Identifique as 3 a 5 principais tendências emergentes no setor, com uma breve descrição de cada uma.
2.  **Impacto no Mercado e Consumidores**: Para cada tendência, explique seu impacto potencial no mercado (oferta, demanda, concorrência) e nos comportamentos dos consumidores.
3.  **Oportunidades**: Destaque oportunidades concretas que essas tendências podem gerar para um negócio ou produto como o meu (ou para o setor em geral, se não houver um produto específico).
4.  **Ameaças e Desafios**: Sinalize possíveis ameaças ou desafios que essas tendências podem apresentar, incluindo riscos competitivos ou operacionais.
5.  **Recomendações Estratégicas**: Sugira ações estratégicas ou adaptações que um negócio poderia considerar para capitalizar as oportunidades ou mitigar as ameaças.`,
    tags: ['Marketing', 'Tendências', 'Mercado', 'Estratégia'],
  },
  {
    id: 'ai-revisao-documento-legal',
    title: 'Agente de Revisão de Documentos Legais',
    category: 'IA & Automação',
    description: 'Analisa e sugere melhorias para documentos jurídicos ou contratuais, identificando riscos, inconsistências e cláusulas importantes.',
    template: "Você atuará como um agente de revisão jurídica altamente especializado. Sua tarefa é analisar o seguinte documento [Tipo de Documento: ex. contrato de serviço, termo de parceria, política de privacidade] e realizar as seguintes ações:\n\n1.  **Identificação de Cláusulas Chave:** Liste e explique as 5 a 10 cláusulas mais importantes do documento para [Parte Principal Envolvida: ex. minha empresa, o contratante].\n2.  **Análise de Riscos e Oportunidades:**\n    *   Identifique pelo menos 3 riscos potenciais para [Parte Principal Envolvida] e sugira modificações para mitigar esses riscos.\n    *   Identifique pelo menos 2 oportunidades que poderiam ser melhor exploradas ou adicionadas ao documento para [Parte Principal Envolvida].\n3.  **Inconsistências e Ambiguidade:** Aponte quaisquer inconsistências, ambiguidades ou linguagem vaga no documento e sugira reformulações.\n4.  **Conformidade (Opcional):** Se aplicável, com base na legislação [Legislação Relevante: ex. LGPD, Código de Defesa do Consumidor, legislação trabalhista] em [País/Região: ex. Brasil], analise se o documento está em conformidade e aponte áreas que precisam de ajuste. (Se não for aplicável, ignore este ponto).\n5.  **Sugestões de Linguagem/Clareza:** Proponha melhorias na clareza e objetividade da linguagem para o público [Público Alvo do Documento: ex. clientes, parceiros, funcionários].\n\nApresente suas análises de forma estruturada, com títulos e marcadores para cada item.\n\n**Documento para Análise:**\n```\n[Cole o texto completo do documento aqui]\n```",
    tags: ['jurídico', 'contrato', 'análise', 'automação'],
  },
  {
    id: 'produtividade-decisao-estrategica',
    title: 'Assistente de Decisão Estratégica com IA',
    category: 'Produtividade',
    description: 'Ajuda a estruturar e analisar decisões complexas, considerando múltiplos fatores, prós, contras, riscos e potenciais resultados para uma escolha mais assertiva.',
    template: "Você é um consultor estratégico de IA especializado em facilitar processos de tomada de decisão. Meu objetivo é tomar uma decisão informada sobre [Descreva brevemente a decisão que precisa ser tomada: ex. 'se devo expandir meu negócio para um novo mercado', 'qual nova tecnologia devo implementar', 'qual candidato contratar para a vaga de gerente'].\n\nPara me ajudar, siga estes passos:\n\n1.  **Contexto da Decisão:**\n    *   Qual é o principal problema ou oportunidade que esta decisão busca resolver? [Descreva o problema/oportunidade]\n    *   Quais são os objetivos primários ao tomar esta decisão? [Liste 2-3 objetivos claros]\n2.  **Opções Consideradas:**\n    *   Opção 1: [Descreva a Opção 1]\n    *   Opção 2: [Descreva a Opção 2]\n    *   Opção 3 (opcional): [Descreva a Opção 3]\n    *   (Adicione mais opções se houver)\n3.  **Critérios de Avaliação:**\n    *   Quais são os critérios mais importantes para avaliar cada opção? (Ex: Custo, Retorno sobre Investimento (ROI), Risco, Tempo de Implementação, Impacto na Marca, Alinhamento Estratégico, Recursos Necessários). Liste os [Número] critérios mais relevantes e atribua um peso de 1 (baixo) a 5 (alto) para cada um:\n        *   Critério A ([Peso A])\n        *   Critério B ([Peso B])\n        *   Critério C ([Peso C])\n        *   Critério D ([Peso D])\n4.  **Informações Adicionais (se houver):** [Quaisquer dados, pesquisas, informações de mercado ou restrições relevantes que devem ser consideradas.]\n\nCom base nas informações fornecidas, faça o seguinte:\n\n*   **Análise de Prós e Contras:** Para cada opção, detalhe os principais prós e contras, relacionando-os com os critérios de avaliação.\n*   **Identificação de Riscos:** Para cada opção, identifique pelo menos 2 riscos potenciais e sugira estratégias de mitigação.\n*   **Recomendação Ponderada:** Apresente uma recomendação final, justificando-a com base na análise dos critérios, prós, contras e riscos, e sugira os próximos passos.\n*   **Perguntas para Reflexão:** Liste 3-5 perguntas adicionais para me ajudar a aprofundar a reflexão sobre a decisão.\n\nFormate sua resposta de forma clara, com seções distintas para cada ponto.",
    tags: ['decisão', 'estratégia', 'análise', 'planejamento'],
  },
  {
    id: 'social-media-roteiro-video-curto',
    title: 'Gerador de Roteiro de Vídeo Curto Viral',
    category: 'Redes Sociais',
    description: 'Cria um roteiro detalhado para vídeos curtos (Reels, TikTok, Shorts) com potencial viral, incluindo gancho, call to action, elementos visuais e de áudio, otimizado para engajamento.',
    template: "Você é um especialista em conteúdo viral para redes sociais (TikTok, Instagram Reels, YouTube Shorts). Crie um roteiro detalhado para um vídeo curto com o objetivo de [Objetivo do Vídeo: ex. educar sobre X, promover Y produto, entreter sobre Z, gerar leads].\n\n**Informações Essenciais:**\n\n*   **Tópico/Tema do Vídeo:** [Descreva o tópico ou a mensagem central do vídeo. Ex: 'Como fazer café gelado perfeito em casa', '3 dicas de produtividade para estudantes', 'Desmascarando mitos sobre investimentos']\n*   **Público-alvo:** [Descreva o público que você quer alcançar. Ex: 'Jovens adultos interessados em culinária', 'Empreendedores iniciantes', 'Estudantes universitários']\n*   **Duração Desejada:** [Ex: 15-30 segundos, 30-60 segundos, 60-90 segundos]\n*   **Call to Action (CTA):** [Qual ação você quer que o espectador tome? Ex: 'Siga para mais dicas', 'Comente sua opinião', 'Visite o link na bio', 'Compartilhe com um amigo']\n*   **Tom de Voz:** [Ex: Engraçado, informativo, inspirador, sério, motivacional]\n*   **Elementos Visuais/Sonoros Desejados (Opcional):** [Alguma ideia inicial para música, transições, legendas específicas, efeitos visuais? Ex: 'Música popular do TikTok', 'Transições rápidas', 'Texto na tela']\n\n**Estrutura do Roteiro:**\n\n1.  **Gancho (0-3 segundos):** Frase ou cena que prende a atenção imediatamente.\n2.  **Problema/Contexto (3-7 segundos):** Apresente o problema ou estabeleça o contexto de forma rápida e impactante.\n3.  **Solução/Conteúdo Principal (7-X segundos):** Entregue a informação principal, a solução, a dica, etc., de forma clara e concisa. Use elementos visuais para reforçar.\n4.  **Quebra de Padrão/Engajamento (Opcional):** Um momento de humor, uma pergunta direta, uma reviravolta para manter o espectador engajado.\n5.  **Call to Action (CTA) (Últimos segundos):** Reforce o que você quer que o espectador faça.\n\nO roteiro deve incluir:\n*   Divisão por tempo (aproximado).\n*   Descrição da cena e ação (Visual).\n*   O que será dito (Áudio/Narração/Legenda).\n*   Sugestões de texto na tela (se aplicável).\n*   Sugestões de músicas ou sons relevantes.\n*   Hashtags relevantes (5-8).\n\nSeja criativo e pense em como maximizar o potencial viral!",
    tags: ['vídeo', 'tiktok', 'reels', 'viral', 'conteúdo'],
  },
  {
    id: 'education-simulador-debate',
    title: 'Simulador de Debate e Argumentação',
    category: 'Educação',
    description: 'Simula um debate sobre um tópico específico, gerando argumentos para ambos os lados e ajudando o usuário a refinar sua própria argumentação e pensamento crítico.',
    template: "Você é um moderador de debates e um gerador de argumentos. Vamos simular um debate focado em aprimorar minhas habilidades de argumentação e pensamento crítico sobre o tema [Tópico do Debate: ex. 'É a inteligência artificial uma ameaça ou uma oportunidade para a sociedade?', 'A educação a distância é tão eficaz quanto a presencial?', 'Governos deveriam implementar uma renda básica universal?'].\n\n**Minha Posição:** [Sua Posição: ex. 'Sou a favor', 'Sou contra', 'Acredito que é uma oportunidade', 'Penso que não é tão eficaz']\n**Meu Objetivo no Debate:** [O que você quer alcançar com este debate? Ex. 'Refinar meus argumentos a favor', 'Entender os contra-argumentos para me preparar melhor', 'Explorar nuances da questão']\n**Nível de Profundidade:** [Ex. 'Introdução', 'Intermediário', 'Avançado - com dados e referências']\n**Persona do Oponente (Opcional):** [Ex. 'Um cético conservador', 'Um entusiasta tecnológico otimista', 'Um especialista em economia social']\n\nSua tarefa é agir como meu oponente virtual. Siga estas etapas:\n\n1.  **Apresente a Posição Inicial do Oponente:** Com base no meu tópico e posição, gere 3-4 argumentos iniciais fortes e bem fundamentados para a posição contrária à minha. Se eu não especificar a 'Persona do Oponente', adote uma persona de um especialista bem-informado e com visão oposta à minha.\n2.  **Solicite Minha Réplica:** Após apresentar seus argumentos, me peça para refutar cada um deles ou apresentar meus próprios argumentos iniciais.\n3.  **Análise e Contra-Argumentação:** Uma vez que eu apresentar meus pontos, você deverá:\n    *   Analisar a força dos meus argumentos.\n    *   Apresentar 2-3 contra-argumentos ou questionamentos que desafiem meus pontos.\n    *   Sugerir áreas onde minha argumentação poderia ser fortalecida (se aplicável).\n4.  **Loop do Debate:** Continuaremos este ciclo, onde você me desafia e eu respondo, aprofundando a discussão.\n\nA cada turno, mantenha uma linguagem formal e respeitosa, mas desafiadora. O foco é a troca de ideias e o aprimoramento da argumentação, não a vitória.",
    tags: ['debate', 'argumentação', 'pensamento crítico', 'educação'],
  },
  {
    id: 'marketing-case-study-b2b',
    title: 'Gerador de Estudo de Caso B2B',
    category: 'Marketing',
    description: 'Crie um estudo de caso persuasivo para marketing B2B, destacando o problema do cliente, a solução fornecida e os resultados obtidos, com foco na geração de leads.',
    template: `Atue como um redator de marketing B2B. Meu objetivo é criar um estudo de caso detalhado e persuasivo para atrair [Tipo de Cliente Ideal] e demonstrar o valor da nossa [Seu Produto/Serviço].

Use o seguinte formato e informações:

**Título do Estudo de Caso:** (Um título que capture a atenção e o benefício principal)

**1. O Desafio do Cliente:**
*   **Nome do Cliente:** [Nome do Cliente]
*   **Indústria do Cliente:** [Indústria do Cliente]
*   **Problema Principal:** [Descreva o problema ou a dor que o cliente enfrentava antes da sua solução. Ex: Baixa eficiência, altos custos, falta de visibilidade, etc.]
*   **Impacto do Problema:** [Qual o impacto negativo desse problema no negócio do cliente? Ex: Perda de receita, insatisfação de clientes, tempo desperdiçado.]

**2. A Solução da [Sua Empresa]:**
*   **Nosso Produto/Serviço:** [Descreva como o seu produto/serviço [Seu Produto/Serviço] foi implementado para resolver o problema.]
*   **Como a Solução Funcionou:** [Explique as etapas, recursos ou funcionalidades específicas que foram utilizadas.]
*   **Diferencial:** [Por que nossa solução foi a ideal para este cliente?]

**3. Os Resultados Obtidos:**
*   **Principais Métricas de Sucesso:** [Liste 2-3 métricas concretas e quantificáveis. Ex: Aumento de X% na eficiência, redução de Y% nos custos, Z% de melhoria na satisfação.]
*   **Depoimento do Cliente:** [Insira um depoimento real ou fictício que valide os resultados. Ex: "Graças à [Sua Empresa], vimos uma melhoria significativa em [Área de Melhoria]..."]
*   **Impacto Geral no Negócio:** [Como os resultados impactaram positivamente o negócio do cliente a longo prazo?]

**4. Conclusão e Chamada para Ação:**
*   **Resumo dos Benefícios:** [Reafirme brevemente os principais benefícios da solução.]
*   **Chamada para Ação (CTA):** [Qual ação você quer que o leitor tome? Ex: "Agende uma demonstração", "Baixe nosso e-book", "Fale com um especialista".]

**Observações Adicionais (contexto para o prompt, não para o estudo de caso final):**
*   **Tom de Voz:** [Profissional, autoritário, empático, direto]
*   **Extensão Desejada:** [Curta (500 palavras), Média (800 palavras), Longa (1200+ palavras)]

Por favor, crie o estudo de caso completo seguindo estas diretrizes.`,
    tags: ['B2B', 'marketing de conteúdo', 'vendas', 'estudo de caso'],
  },
  {
    id: 'ai-plano-desenvolvimento-habilidade',
    title: 'IA para Plano de Desenvolvimento de Habilidades',
    category: 'IA & Automação',
    description: 'Crie um plano de aprendizado estratégico e personalizado para adquirir uma nova habilidade, usando a IA para recomendar recursos e etapas práticas.',
    template: `Você é um especialista em planejamento de aprendizado e desenvolvimento pessoal assistido por IA. Minha meta é adquirir a habilidade de [Habilidade Específica que deseja aprender].

Com base nas minhas informações, crie um plano de desenvolvimento de habilidade detalhado, com foco em resultados práticos e aplicação no mundo real.

**Minhas informações:**
*   **Habilidade Alvo:** [Habilidade específica, ex: "Programação Python para análise de dados", "Gestão de Projetos Ágeis", "Marketing Digital para PMEs"]
*   **Nível de Conhecimento Atual:** [Iniciante, Intermediário, Avançado. Forneça detalhes se houver, ex: "Sei o básico de Python, mas não para análise de dados."]
*   **Tempo Disponível por Semana:** [Número de horas, ex: "5 horas", "10 horas"]
*   **Estilo de Aprendizagem Preferido:** [Visual (vídeos, diagramas), Auditivo (podcasts, palestras), Leitura/Escrita (livros, artigos), Cinestésico (projetos práticos, exercícios)]
*   **Objetivo ao Aprender a Habilidade:** [Ex: "Conseguir uma promoção", "Mudar de carreira", "Iniciar um projeto pessoal", "Melhorar desempenho no trabalho atual"]
*   **Recursos Atuais/Preferências:** [Ex: "Tenho acesso a Coursera", "Prefiro livros gratuitos", "Busco certificações", "Gosto de aprender com mentores"]

**Formato do Plano de Desenvolvimento:**

**1. Visão Geral e Objetivo SMART:**
*   Defina um objetivo SMART (Específico, Mensurável, Atingível, Relevante, Temporal) para a aquisição da habilidade.

**2. Módulos/Etapas de Aprendizado (progressivo):**
*   Divida a habilidade em módulos lógicos, do fundamental ao avançado.
*   Para cada módulo, sugira:
    *   **Tópicos Chave:** O que precisa ser aprendido.
    *   **Recursos Recomendados:** (Ex: Cursos online, livros, artigos, tutoriais, podcasts, projetos práticos). Seja específico com exemplos se possível (ex: "Curso X da plataforma Y", "Livro Z").
    *   **Atividades Práticas/Projetos:** Sugira exercícios ou projetos para aplicar o conhecimento.
    *   **Tempo Estimado:** Quanto tempo dedicar a este módulo.

**3. Estratégias de Reforço e Avaliação:**
*   Como revisar o conteúdo? (Ex: Flashcards, resumos, discussões).
*   Como medir o progresso? (Ex: Quizzes, feedback de projetos, simulações).

**4. Cronograma Sugerido:**
*   Um cronograma semanal ou mensal para os primeiros [Número de semanas/meses, ex: "3 meses"] meses.

**5. Próximos Passos e Otimização Contínua:**
*   Sugestões para manter a motivação e ajustar o plano conforme o progresso.

Crie o plano de desenvolvimento de habilidade, focando em um caminho claro e acionável.`,
    tags: ['aprendizado', 'carreira', 'IA', 'planejamento', 'desenvolvimento pessoal'],
  },
  {
    id: 'produtividade-foco-digital',
    title: 'Plano de Foco Profundo e Desintoxicação Digital',
    category: 'Produtividade',
    description: 'Crie um plano de ação personalizado para otimizar períodos de foco intenso e implementar uma desintoxicação digital eficaz, visando aumentar a produtividade e o bem-estar.',
    template: `Atue como um coach de produtividade e bem-estar digital. Meu objetivo é criar um plano prático para melhorar meu foco em tarefas importantes e reduzir a distração digital, seja em períodos de trabalho intenso ou para uma desintoxicação regular.

**Minhas informações e desafios:**
*   **Período/Contexto:** [Período específico (ex: "Jornada de trabalho diária", "Fim de semana para desintoxicação", "Sessão de estudo intensivo") ou tipo de desafio (ex: "Muitas notificações", "Dificuldade em desconectar")]
*   **Duração Desejada do Foco/Desintoxicação:** [Ex: "2 horas de foco por manhã", "4 horas no sábado", "Um dia completo por semana"]
*   **Principais Fontes de Distração:** [Ex: "Redes sociais (Instagram, TikTok)", "Emails constantes", "Notificações do celular", "Notícias online", "Multitarefas"]
*   **Ferramentas Atuais/Disponíveis:** [Ex: "App de bloqueio de sites", "Modo Não Perturbe do celular", "Fone de ouvido com cancelamento de ruído"]
*   **Objetivo Final:** [Ex: "Concluir projeto X com qualidade", "Reduzir estresse e ansiedade", "Ter mais tempo para hobbies", "Melhorar a qualidade do sono"]

**Crie um plano de foco profundo e/ou desintoxicação digital com as seguintes seções:**

**1. Preparação (Pré-Foco/Desintoxicação):**
*   Como preparar o ambiente físico e digital.
*   Definição de objetivos claros para o período.
*   Configurações de dispositivos (notificações, apps).

**2. Estratégias Durante o Período de Foco/Desintoxicação:**
*   Técnicas de Foco (Ex: Pomodoro, Time Blocking, Deep Work).
*   Como lidar com interrupções inevitáveis.
*   Atividades alternativas para preencher o tempo (se for desintoxicação).
*   Sugestões para "recompensas" e pausas significativas.

**3. Pós-Período (Retorno/Integração):**
*   Como reavaliar o progresso e ajustar o plano.
*   Estratégias para um retorno consciente ao ambiente digital.
*   Manutenção de hábitos saudáveis.

**4. Ferramentas e Recursos Recomendados:**
*   Sugestões de aplicativos, softwares ou métodos que possam auxiliar.

**Observações Adicionais:**
*   **Tom de Voz:** [Prático, motivador, encorajador]
*   **Nível de Detalhe:** [Básico, Moderado, Detalhado]

Por favor, elabore um plano acionável e personalizado para minha situação.`,
    tags: ['bem-estar', 'produtividade', 'foco', 'desintoxicação digital'],
  },
  {
    id: 'negocios-analise-concorrencia-ia',
    title: 'Análise de Concorrência com IA Assistida',
    category: 'Negócios',
    description: 'Realize uma análise detalhada dos principais concorrentes, incluindo suas estratégias de mercado, pontos fortes, fracos, oportunidades e ameaças (SWOT), para informar sua própria estratégia de negócios.',
    template: `Atue como um analista de estratégia de negócios e IA, capaz de simular a análise de grandes volumes de dados de mercado para identificar insights competitivos. Meu objetivo é entender melhor meus concorrentes e posicionar meu negócio de forma mais eficaz.

**Informações sobre o Meu Negócio:**
*   **Nome do Meu Negócio/Produto:** [Nome da Sua Empresa/Produto]
*   **Meu Principal Produto/Serviço:** [Descrição breve do que você oferece]
*   **Meu Mercado-Alvo:** [Quem são seus clientes ideais? Demografia, psicografia, necessidades]
*   **Meus Principais Diferenciadores (atuais):** [O que já te faz único ou melhor que a concorrência?]

**Informações sobre os Concorrentes (forneça para 2-3 concorrentes):**
*   **Concorrente 1:**
    *   **Nome:** [Nome do Concorrente 1]
    *   **Principal Produto/Serviço:** [O que eles oferecem?]
    *   **Mercado-Alvo:** [Quem são os clientes deles?]
    *   **Pontos Fortes Percebidos:** [Ex: Marca forte, tecnologia avançada, excelente atendimento ao cliente, preço baixo]
    *   **Pontos Fracos Percebidos:** [Ex: Má reputação, falta de inovação, serviço ao cliente deficiente, preço alto]
    *   **Estratégias Conhecidas:** [Marketing, vendas, precificação, inovação, canais de distribuição]
*   **Concorrente 2:** (Mesmas informações acima)
*   **Concorrente 3:** (Mesmas informações acima, se aplicável)

**Sua Análise Deve Incluir:**

**1. Perfil de Cada Concorrente:**
*   Um resumo conciso do modelo de negócios, proposta de valor e posicionamento de mercado de cada concorrente.

**2. Análise SWOT Detalhada para Cada Concorrente:**
*   **Strengths (Forças):** Internas, vantagens competitivas.
*   **Weaknesses (Fraquezas):** Internas, desvantagens competitivas.
*   **Opportunities (Oportunidades):** Externas, favoráveis ao concorrente.
*   **Threats (Ameaças):** Externas, desafios ao concorrente.

**3. Identificação de Padrões e Tendências:**
*   Quais são as estratégias comuns ou distintivas entre os concorrentes?
*   Há lacunas no mercado que nenhum concorrente está atendendo efetivamente?

**4. Recomendações Estratégicas para o Meu Negócio:**
*   **Diferenciação:** Como meu negócio pode se diferenciar ou se posicionar de forma única?
*   **Oportunidades a Explorar:** Onde posso ganhar vantagem competitiva?
*   **Ameaças a Mitigar:** Como devo me proteger contra as estratégias dos concorrentes?
*   **Melhores Práticas a Adotar:** O que posso aprender e adaptar dos meus concorrentes?

**Observações Adicionais:**
*   **Tom da Análise:** [Objetivo, estratégico, analítico]
*   **Nível de Detalhe:** [Apresente uma análise aprofundada, com justificativas para as observações.]

Por favor, forneça uma análise de concorrência abrangente e acionável.`,
    tags: ['estratégia', 'concorrência', 'negócios', 'análise de mercado'],
  },
  {
    id: 'negocios-cold-email-hiperpersonalizado',
    title: 'Cold Email Hiper-Personalizado com IA',
    category: 'Negócios',
    description: 'Crie um cold email que realmente se conecta com o prospect, usando insights específicos gerados por IA para personalizar a mensagem e aumentar a taxa de resposta.',
    template: `Assuma o papel de um especialista em vendas B2B e IA, com profundo conhecimento em gatilhos mentais e personalização. Seu objetivo é criar um cold email altamente persuasivo e personalizado para um potencial cliente.

Para isso, utilize as seguintes informações sobre o prospect e a sua empresa:

**Informações do Prospect:**
- Nome do Prospect: [Nome do Prospect]
- Cargo do Prospect: [Cargo do Prospect]
- Empresa do Prospect: [Empresa do Prospect]
- Detalhe Específico do Prospect/Empresa (ex: postagem recente no LinkedIn sobre 'X', projeto inovador 'Y', notícia sobre 'Z', desafio comum do setor): [Detalhe Específico do Prospect/Empresa]

**Informações sobre Seu Produto/Serviço:**
- Seu Produto/Serviço: [Nome do Seu Produto/Serviço]
- Principal Benefício que resolve o problema do prospect: [Principal Benefício do Seu Produto/Serviço]
- Prova Social (opcional, ex: "Similar ao que fizemos para a empresa [Empresa Cliente], resultando em [Resultado]"): [Prova Social, se aplicável]
- Call to Action (CTA) Desejado (ex: "Agendar uma rápida conversa de 15 minutos", "Demonstração gratuita", "Acesso a um estudo de caso"): [Call to Action Desejado]

**Instruções:**
1.  Comece o email referenciando diretamente o [Detalhe Específico do Prospect/Empresa], mostrando que você fez sua lição de casa e que a mensagem é relevante.
2.  Conecte este detalhe com um problema ou desafio que o [Seu Produto/Serviço] pode resolver, de forma empática e sem ser excessivamente comercial.
3.  Apresente brevemente o [Principal Benefício do Seu Produto/Serviço] como a solução para este desafio.
4.  Inclua a [Prova Social] de forma concisa, se fornecida.
5.  Finalize com um [Call to Action Desejado] claro e de baixo compromisso.
6.  Use uma linguagem profissional, concisa e amigável.

**Estrutura do Email:**
- Assunto: Personalizado e intrigante, relacionado ao [Detalhe Específico do Prospect/Empresa].
- Abertura: Reconhecimento e conexão imediata.
- Corpo: Problema, solução (seu produto/serviço), benefício.
- Prova Social (opcional).
- Fechamento: CTA claro.

Gere o email completo, incluindo uma linha de assunto persuasiva.`,
    tags: ['vendas', 'prospecção', 'email marketing', 'personalização'],
  },
  {
    id: 'ai-gerador-ideias-criativas',
    title: 'Gerador de Ideias Criativas com IA',
    category: 'IA & Automação',
    description: 'Gere ideias inovadoras para qualquer desafio, projeto ou tópico, usando técnicas avançadas de brainstorming e criatividade assistida por IA.',
    template: `Você é um facilitador de brainstorming criativo e um especialista em gerar ideias inovadoras, utilizando diversas técnicas de criatividade (ex: SCAMPER, associações forçadas, inversão).

Seu objetivo é gerar uma lista de ideias criativas e práticas baseadas no [Tópico/Desafio Principal] e no [Objetivo do Brainstorming], considerando o [Público-alvo (se aplicável)].

**Detalhes para a geração de ideias:**
- Tópico/Desafio Principal: [Tópico/Desafio Principal (ex: "Como aumentar o engajamento na nossa comunidade online", "Ideias para um novo produto de bem-estar", "Soluções para reduzir o desperdício de alimentos")]
- Objetivo do Brainstorming: [Objetivo do Brainstorming (ex: "Gerar 10 conceitos de produtos", "Desenvolver 5 estratégias de marketing inovadoras", "Encontrar 3 soluções para um problema específico")]
- Público-alvo (se aplicável): [Público-alvo (ex: "Jovens adultos entre 18-25 anos", "Profissionais de marketing digital", "Famílias com crianças pequenas")]
- Tipo de ideias desejadas (ex: marketing, produto, serviço, conteúdo, solução de problema, automação): [Tipo de ideias desejadas]
- Restrições/Limitações (se houver, ex: "baixo orçamento", "uso de tecnologias existentes", "foco em sustentabilidade"): [Restrições/Limitações]
- Número de ideias desejado: [Número de ideias desejado (ex: 5, 10, 15)]

**Instruções:**
1.  Aplique pelo menos duas técnicas de criatividade (que você pode citar brevemente) para expandir o escopo das ideias.
2.  Gere o número de ideias solicitado, listando cada uma de forma clara e concisa.
3.  Para cada ideia, forneça uma breve descrição e sugira como ela se alinha ao [Objetivo do Brainstorming] e às [Restrições/Limitações].
4.  Certifique-se de que as ideias sejam relevantes para o [Público-alvo (se aplicável)].

Apresente as ideias em um formato de lista numerada, com título e breve descrição para cada uma.`,
    tags: ['brainstorming', 'inovação', 'criatividade', 'ideias'],
  },
  {
    id: 'finance-simulador-cenarios',
    title: 'Simulador de Cenários Financeiros Pessoais',
    category: 'Finanças',
    description: 'Explore o impacto de diferentes decisões financeiras (investimentos, dívidas, poupança) em seu futuro, analisando múltiplos cenários com projeções detalhadas.',
    template: `Você é um planejador financeiro com IA, especializado em modelagem e simulação de cenários. Seu papel é analisar a situação financeira de um indivíduo e projetar o impacto de diferentes decisões e eventos em seu futuro financeiro.

**Detalhes da Situação Financeira Atual:**
- Renda Mensal Líquida: [Renda Mensal Líquida (ex: R$5.000)]
- Despesas Mensais Fixas: [Despesas Mensais Fixas (ex: R$2.500)]
- Despesas Mensais Variáveis: [Despesas Mensais Variáveis (ex: R$1.000)]
- Poupança/Investimentos Atuais: [Valor de Poupança/Investimentos Atuais (ex: R$10.000 em um CDB, R$20.000 em ações)]
- Dívidas Atuais (tipo, valor, juros, parcela mensal): [Dívidas Atuais (ex: Cartão de Crédito R$3.000, 10% a.m., R$300/mês; Financiamento Imobiliário R$200.000, 0.8% a.m., R$1.800/mês)]
- Taxa de Retorno Média Esperada dos Investimentos (anual): [Taxa de Retorno Média Esperada (ex: 8% a.a.)]
- Inflação Média Esperada (anual): [Inflação Média Esperada (ex: 4% a.a.)]

**Objetivo Financeiro Principal:** [Objetivo Financeiro Principal (ex: "Aposentar-se em 20 anos com R$2.000.000", "Comprar um imóvel de R$500.000 em 5 anos", "Quitar todas as dívidas em 2 anos")]
**Horizonte de Tempo da Simulação:** [Horizonte de Tempo (em anos, ex: 5, 10, 20)]

**Cenários a Simular:**
1.  **Cenário Base (Manutenção da Situação Atual):** Projeção mantendo as condições atuais.
2.  **Cenário 1: [Descrição da decisão/evento do Cenário 1 (ex: "Aumento de 15% na renda em 1 ano e investimento de 50% do valor adicional", "Redução de despesas variáveis em R$500/mês", "Investimento extra de R$1.000/mês em um ativo com 10% a.a.")]**
3.  **Cenário 2: [Descrição da decisão/evento do Cenário 2 (ex: "Corte de uma dívida com juros altos, redirecionando o pagamento para o objetivo", "Perda de 20% da renda por 6 meses", "Compra de um carro de R$80.000 com financiamento de R$1.500/mês")]**
4.  **Cenário 3 (Opcional): [Descrição da decisão/evento do Cenário 3]**

**Instruções:**
1.  Para cada cenário, calcule e apresente uma projeção anual do patrimônio líquido, do fluxo de caixa e do progresso em relação ao [Objetivo Financeiro Principal] ao longo do [Horizonte de Tempo].
2.  Descreva brevemente as premissas e os impactos de cada cenário.
3.  Compare os resultados dos cenários, destacando os pontos fortes e fracos de cada abordagem em relação ao objetivo.
4.  Forneça uma recomendação final, indicando o cenário mais favorável e as ações chave para alcançá-lo.

Apresente os resultados de forma clara, utilizando tabelas ou listas para as projeções e texto explicativo para as análises e recomendações.`,
    tags: ['finanças', 'planejamento', 'simulação', 'decisões'],
  },
  {
    id: 'career-case-study-creator',
    title: 'Criador de Case Study para Portfólio',
    category: 'Carreira',
    description: 'Desenvolva um case study impactante para seu portfólio, destacando o problema, sua solução, o processo e os resultados, ideal para designers, desenvolvedores, profissionais de marketing e mais.',
    template: `Você é um especialista em storytelling de carreira e branding pessoal, com experiência em criar cases de sucesso que capturam a atenção de recrutadores e clientes. Seu objetivo é estruturar um case study persuasivo para um portfólio profissional.

**Detalhes do Projeto/Trabalho:**
- Título do Projeto/Trabalho: [Título do Projeto/Trabalho (ex: "Redesign da Interface do Aplicativo X", "Campanha de Marketing Digital para Marca Y", "Desenvolvimento de Ferramenta Interna Z")]
- Empresa/Cliente (se aplicável): [Empresa/Cliente]
- Seu Papel no Projeto: [Seu Papel no Projeto (ex: "UI/UX Designer", "Gerente de Projeto", "Desenvolvedor Full-stack", "Especialista em SEO")]
- Período do Projeto: [Período do Projeto (ex: "Março a Junho de 2025")]

**O Desafio/Problema:**
- Problema Inicial/Desafio Principal: [Problema Inicial/Desafio Principal (ex: "Baixa taxa de conversão no site", "Dificuldade dos usuários em encontrar funcionalidades", "Processo manual ineficiente")]
- Consequências do Problema (antes da sua intervenção): [Consequências do Problema (ex: "Perda de receita", "Insatisfação do cliente", "Aumento de custos operacionais")]

**Sua Abordagem/Solução:**
- Processo ou Metodologia Utilizada (ex: Design Thinking, Metodologia Ágil, Testes A/B, Pesquisa de Mercado): [Processo ou Metodologia Utilizada]
- Suas Ações e Decisões Chave: [Suas Ações e Decisões Chave (ex: "Realizei pesquisa com usuários", "Implementei nova arquitetura de código", "Criei campanha multicanal")]
- Ferramentas e Tecnologias Usadas: [Ferramentas e Tecnologias Usadas (ex: Figma, React, Google Analytics, Salesforce)]

**Resultados e Impacto:**
- Resultados Quantitativos (se houver, ex: "Aumento de X% na conversão", "Redução de Y% no tempo de carregamento", "Geração de Z leads"): [Resultados Quantitativos]
- Resultados Qualitativos (ex: "Melhora significativa na experiência do usuário", "Feedback positivo da equipe", "Reconhecimento da diretoria"): [Resultados Qualitativos]
- Como os resultados resolveram o problema inicial: [Como os resultados resolveram o problema inicial]

**Conclusão e Aprendizados:**
- Lições Aprendidas: [Lições Aprendidas (ex: "Importância da validação contínua", "Desafios na comunicação interdisciplinar")]
- Próximos Passos/Recomendações (se aplicável): [Próximos Passos/Recomendações]
- Público-alvo do portfólio (ex: "Recrutadores de startups", "Diretores de agências de marketing", "Clientes potenciais para freelances"): [Público-alvo do portfólio]

**Instruções:**
1.  Estruture o case study com as seguintes seções claras: "Título", "Visão Geral", "O Desafio", "A Solução", "Os Resultados", "Conclusão e Aprendizados".
2.  Use uma linguagem profissional e orientada a resultados, destacando o impacto do seu trabalho.
3.  Mantenha o texto conciso e focado, utilizando bullet points para facilitar a leitura onde apropriado.
4.  Adapte o tom e o nível de detalhe para o [Público-alvo do portfólio].

Gere o case study completo no formato solicitado.`,
    tags: ['portfólio', 'carreira', 'marketing pessoal', 'cases'],
  },
  {
    id: 'escrita-gerador-conteudo-longo',
    title: 'Gerador de Conteúdo Longo (Artigo/Ebook)',
    category: 'Escrita',
    description: 'Cria um rascunho detalhado e uma estrutura para um artigo longo, post de blog, ebook ou material semelhante, com base em um tema e público-alvo.',
    template: `Você é um especialista em marketing de conteúdo e escrita. Sua tarefa é criar um plano detalhado e um rascunho para um conteúdo longo.

**Informações:**
- **Tipo de Conteúdo:** [Ex: Artigo de blog, eBook, Whitepaper, Guia completo]
- **Tema Principal:** [Ex: "Os impactos da IA na produtividade de pequenas empresas"]
- **Público-Alvo:** [Ex: Empreendedores e gerentes de pequenas e médias empresas no Brasil, interessados em otimizar processos.]
- **Objetivo do Conteúdo:** [Ex: Educar sobre a IA, gerar leads, posicionar a marca como líder de pensamento.]
- **Tom de Voz:** [Ex: Informativo, autoritário, amigável, inspirador.]
- **Palavras-chave (opcional):** [Ex: IA para pequenas empresas, produtividade IA, automação empresarial.]

**Instruções:**
1.  **Título Sugerido:** Crie 3-5 opções de títulos otimizados para o tema e público.
2.  **Introdução:** Desenvolva um parágrafo introdutório que capture a atenção do leitor e apresente o problema ou a questão central.
3.  **Estrutura Detalhada:** Crie uma estrutura de tópicos hierárquica (H2, H3, H4) para o conteúdo. Para cada seção, forneça uma breve descrição do que deve ser abordado e sugira pontos-chave, exemplos ou dados a serem incluídos.
4.  **Conclusão e Chamada para Ação (CTA):** Escreva um parágrafo de conclusão que resuma os pontos principais e uma CTA clara e relevante para o objetivo do conteúdo.
5.  **Sugestões Adicionais:** Inclua ideias para elementos visuais, links internos/externos ou recursos adicionais que poderiam enriquecer o conteúdo.

**Formato da Resposta:**

**Títulos Sugeridos:**
- [Título 1]
- [Título 2]
- ...

**Introdução:**
[Parágrafo introdutório]

**Estrutura do Conteúdo:**
## [H2 Tópico Principal 1]
    - Descrição: [Breve descrição do que será abordado.]
    - Pontos-chave:
        - [Ponto 1]
        - [Ponto 2]
        - [Ponto 3]
    ### [H3 Subtópico 1.1]
        - Descrição: [Breve descrição.]
        - Exemplos/Dados: [Sugestões específicas.]
    ### [H3 Subtópico 1.2]
        - Descrição: [Breve descrição.]

## [H2 Tópico Principal 2]
    - Descrição: ...
    - Pontos-chave: ...
    ### [H3 Subtópico 2.1]
    ...

**Conclusão:**
[Parágrafo de conclusão]

**Chamada para Ação (CTA):**
[Frase de CTA clara]

**Sugestões Adicionais:**
- Elementos Visuais: [Ex: Infográficos, gráficos, imagens relevantes.]
- Recursos: [Ex: links para estudos, outras publicações.]
- Otimização SEO: [Ex: Sugestões de linkagem interna.]
`,
    tags: ['conteúdo', 'escrita', 'marketing', 'seo'],
  },
  {
    id: 'education-plano-aula-curso',
    title: 'Criador de Plano de Aula/Módulo de Curso',
    category: 'Educação',
    description: 'Gera um plano de aula detalhado ou a estrutura de um módulo de curso, incluindo objetivos, tópicos, atividades e recursos, para um tema e público específicos.',
    template: `Você é um especialista em design instrucional e criação de conteúdo educacional. Sua tarefa é desenvolver um plano de aula ou um módulo de curso detalhado.

**Informações:**
- **Tipo:** [Ex: Plano de aula, Módulo de curso, Workshop.]
- **Título do Módulo/Aula:** [Ex: "Introdução à Programação Python para Iniciantes"]
- **Público-Alvo:** [Ex: Estudantes do ensino médio, Profissionais em transição de carreira, Crianças de 8-10 anos.]
- **Nível de Dificuldade:** [Ex: Básico, Intermediário, Avançado.]
- **Duração Estimada:** [Ex: 1 hora, 4 semanas (com 2 aulas por semana), 8 horas de workshop.]
- **Objetivo Geral de Aprendizagem:** [Ex: Ao final do módulo/aula, o aluno será capaz de compreender os fundamentos da IA e aplicar ferramentas básicas para otimizar suas tarefas diárias.]
- **Recursos Disponíveis (opcional):** [Ex: Acesso à internet, sala de aula, livros didáticos, software específico.]

**Instruções:**
1.  **Objetivos de Aprendizagem Específicos:** Liste 3-5 objetivos específicos e mensuráveis que os alunos devem alcançar ao final do módulo/aula. Use verbos de ação (ex: "Identificar", "Descrever", "Aplicar").
2.  **Pré-requisitos:** Indique qualquer conhecimento ou habilidade prévia que os alunos devem possuir.
3.  **Estrutura do Conteúdo:** Divida o módulo/aula em seções lógicas com tópicos e subtópicos. Para cada seção, sugira os principais conceitos a serem abordados.
4.  **Metodologia e Atividades:** Para cada seção ou tópico principal, descreva as atividades de aprendizagem propostas (ex: leitura, discussão em grupo, exercícios práticos, estudos de caso, projetos).
5.  **Recursos e Materiais:** Sugira materiais de apoio necessários ou recomendados (ex: links para artigos, vídeos, livros, ferramentas online).
6.  **Avaliação:** Proponha métodos de avaliação para verificar a compreensão e o alcance dos objetivos (ex: quiz, projeto final, discussão, apresentação).
7.  **Dicas para o Facilitador (opcional):** Inclua qualquer dica pedagógica ou de gerenciamento de tempo.

**Formato da Resposta:**

**Título do Módulo/Aula:** [Título Gerado]

**Público-Alvo:** [Público-Alvo]
**Nível de Dificuldade:** [Nível]
**Duração Estimada:** [Duração]

**Objetivo Geral de Aprendizagem:**
[Objetivo Geral]

**Objetivos de Aprendizagem Específicos:**
- [Objetivo 1]
- [Objetivo 2]
- ...

**Pré-requisitos:**
[Lista de pré-requisitos ou "Nenhum"]

**Estrutura do Conteúdo e Atividades:**

### Seção 1: [Título da Seção] ([Tempo estimado, ex: 15 min])
    - **Tópicos:**
        - [Tópico 1.1]
        - [Tópico 1.2]
    - **Atividades Propostas:** [Ex: Discussão inicial, Leitura de artigo X.]
    - **Materiais/Recursos:** [Ex: Slide 1-5, Artigo "Título do Artigo".]

### Seção 2: [Título da Seção] ([Tempo estimado, ex: 30 min])
    - **Tópicos:**
        - [Tópico 2.1]
        - [Tópico 2.2]
    - **Atividades Propostas:** [Ex: Exercício prático Y, Estudo de caso.]
    - **Materiais/Recursos:** [Ex: Ferramenta Z, Arquivo de dados.]

... (Continue para as demais seções)

**Avaliação:**
- [Método de Avaliação 1]
- [Método de Avaliação 2]

**Dicas para o Facilitador:**
- [Dica 1]
- [Dica 2]
`,
    tags: ['educação', 'ensino', 'aprendizagem', 'didática'],
  },
  {
    id: 'social-media-campanha-lancamento',
    title: 'Plano de Campanha de Lançamento em Redes Sociais',
    category: 'Redes Sociais',
    description: 'Desenvolve um plano estratégico para o lançamento de um produto ou serviço em redes sociais, incluindo fases, tipos de conteúdo e canais recomendados.',
    template: `Você é um especialista em marketing digital e gestão de redes sociais, com foco em campanhas de lançamento. Sua tarefa é criar um plano detalhado para o lançamento de um novo produto ou serviço nas redes sociais.

**Informações:**
- **Nome do Produto/Serviço:** [Ex: "App FitLife: Treinos Personalizados com IA"]
- **Breve Descrição do Produto/Serviço:** [Ex: Um aplicativo móvel que usa IA para criar rotinas de treino e planos de nutrição personalizados para o usuário, com acompanhamento de progresso.]
- **Público-Alvo Principal:** [Ex: Pessoas de 25-45 anos, interessadas em saúde, fitness e tecnologia, que buscam praticidade.]
- **Objetivo Principal da Campanha:** [Ex: Gerar 10.000 downloads do app no primeiro mês, Aumentar o reconhecimento da marca, Gerar leads qualificados.]
- **Data de Lançamento Oficial:** [Ex: 15 de julho de 2026]
- **Principais Redes Sociais a Serem Usadas:** [Ex: Instagram, TikTok, Facebook, LinkedIn.]
- **Orçamento (opcional):** [Ex: Médio, Alto (para anúncios pagos), Baixo (orgânico).]
- **Diferencial Competitivo:** [Ex: Planos realmente personalizados pela IA, biblioteca de exercícios em vídeo 3D.]

**Instruções:**
1.  **Visão Geral da Campanha:** Um parágrafo conciso sobre o objetivo e a abordagem geral da campanha.
2.  **Fases da Campanha:** Divida a campanha em 3 fases principais: Pré-Lançamento, Lançamento e Pós-Lançamento.
3.  **Para cada fase, detalhe:**
    *   **Objetivos Específicos da Fase:** O que se espera alcançar nesta fase.
    *   **Tipos de Conteúdo e Formatos:** Ideias de posts, stories, vídeos, carrosséis, lives, etc., específicos para as redes sociais escolhidas.
    *   **Mensagens Chave:** Quais mensagens devem ser comunicadas.
    *   **Chamadas para Ação (CTAs):** Exemplos de CTAs relevantes para a fase.
    *   **Métricas/KPIs Sugeridos:** Como medir o sucesso de cada fase.
4.  **Sugestões Adicionais:** Inclua ideias para parcerias com influenciadores, promoções ou anúncios pagos.

**Formato da Resposta:**

**Plano de Campanha de Lançamento: [Nome do Produto/Serviço]**

**Visão Geral:**
[Parágrafo com a visão geral da campanha.]

---

### Fase 1: Pré-Lançamento (Aquecimento e Antecipação)
-   **Duração Sugerida:** [Ex: 2-3 semanas antes do lançamento]
-   **Objetivos:** [Ex: Gerar curiosidade, construir lista de e-mails, educar sobre o problema que o produto resolve.]
-   **Tipos de Conteúdo e Formatos:**
    -   Instagram: [Ex: Teasers em Stories, carrosséis com "problema x solução", Reels com "bastidores".]
    -   TikTok: [Ex: Vídeos curtos com humor ou desafios relacionados ao problema.]
    -   Facebook: [Ex: Posts com perguntas engajadoras, enquetes.]
    -   LinkedIn (se aplicável): [Ex: Artigos curtos sobre a inovação por trás do produto.]
-   **Mensagens Chave:** [Ex: "Prepare-se para uma revolução", "Diga adeus a X", "Uma nova era está chegando".]
-   **CTAs:** [Ex: "Cadastre-se na lista VIP", "Siga para não perder as novidades", "Qual seu maior desafio em X?"]
-   **Métricas/KPIs:** [Ex: Crescimento de seguidores, engajamento (curtidas, comentários, compartilhamentos), cadastros de e-mail.]

---

### Fase 2: Lançamento (Impacto e Conversão)
-   **Duração Sugerida:** [Ex: 1 semana após o lançamento]
-   **Objetivos:** [Ex: Gerar downloads/vendas, maximizar o alcance, criar urgência.]
-   **Tipos de Conteúdo e Formatos:**
    -   Instagram: [Ex: Live de lançamento, tutoriais rápidos em Reels/Stories, depoimentos de primeiros usuários.]
    -   TikTok: [Ex: Vídeos mostrando o produto em ação, desafios de uso.]
    -   Facebook: [Ex: Anúncios direcionados, posts com link direto para o produto, eventos online.]
    -   LinkedIn (se aplicável): [Ex: Post oficial de lançamento, cases de uso.]
-   **Mensagens Chave:** [Ex: "Chegou o [Nome do Produto]!", "Experimente agora", "Oferta especial de lançamento."]
-   **CTAs:** [Ex: "Baixe o app agora!", "Compre aqui", "Agende sua demonstração gratuita!"]
-   **Métricas/KPIs:** [Ex: Número de downloads/vendas, tráfego para a página do produto, cliques nos CTAs, alcance e impressões dos posts de lançamento.]

---

### Fase 3: Pós-Lançamento (Engajamento e Retenção)
-   **Duração Sugerida:** [Ex: Contínua, 3-4 semanas após o lançamento inicial]
-   **Objetivos:** [Ex: Manter o engajamento, coletar feedback, incentivar o uso contínuo, criar comunidade.]
-   **Tipos de Conteúdo e Formatos:**
    -   Instagram: [Ex: Dicas de uso, Q&A com os desenvolvedores, conteúdo gerado pelo usuário (UGC), enquetes sobre novas funcionalidades.]
    -   TikTok: [Ex: Tutoriais avançados, desafios com o produto, interação com comentários.]
    -   Facebook: [Ex: Criação de grupo de usuários, posts de suporte, novidades e atualizações.]
    -   LinkedIn (se aplicável): [Ex: Artigos sobre o impacto do produto, entrevistas com usuários.]
-   **Mensagens Chave:** [Ex: "Aproveite ao máximo seu [Nome do Produto]", "Seu feedback importa", "Junte-se à nossa comunidade."]
-   **CTAs:** [Ex: "Deixe sua avaliação", "Participe do nosso grupo", "Envie suas sugestões!"]
-   **Métricas/KPIs:** [Ex: Engajamento contínuo, feedback de usuários, menções da marca, retenção de usuários.]

**Sugestões Adicionais:**
-   **Influenciadores:** [Ex: Parceria com influenciadores fitness para o lançamento.]
-   **Anúncios Pagos:** [Ex: Campanha de tráfego e conversão no Facebook/Instagram Ads focada na Fase de Lançamento.]
-   **Email Marketing:** [Ex: Sequência de e-mails para nutrir leads cadastrados no pré-lançamento.]
`,
    tags: ['redes sociais', 'marketing', 'lançamento', 'estratégia'],
  },
  {
    id: 'ai-prompt-geracao-imagens',
    title: 'Criador de Prompt para Geração de Imagens',
    category: 'IA & Automação',
    description: 'Gera prompts detalhados e otimizados para ferramentas de IA de geração de imagens (ex: Midjourney, DALL-E, Stable Diffusion), a partir de uma ideia simples.',
    template: `Você é um prompt engineer especializado em IA generativa de imagens, como Midjourney, DALL-E ou Stable Diffusion. Sua tarefa é transformar uma ideia simples em prompts de alta qualidade e detalhados para obter resultados visuais impressionantes.

**Informações da Imagem Desejada:**
- **Ideia Central/Objeto Principal:** [Ex: "Um astronauta flutuando no espaço."]
- **Estilo Artístico:** [Ex: "Realismo fotográfico", "Pintura a óleo de Van Gogh", "Cyberpunk neon", "Desenho animado 3D Pixar", "Aquarela minimalista", "Vaporwave estético", "Fantasia épica".]
- **Detalhes Específicos/Elementos Chave:** [Ex: "Com um capacete reflexivo mostrando a Terra", "Luzes neon azuis e roxas", "Flores de cerejeira caindo", "Robô amigável ao lado".]
- **Atmosfera/Emoção:** [Ex: "Misteriosa e serena", "Energética e futurista", "Calma e introspectiva", "Grandiosa e épica".]
- **Cores Predominantes (opcional):** [Ex: "Tons de azul e dourado", "Paleta pastel", "Cores vibrantes e contrastantes".]
- **Composição/Perspectiva (opcional):** [Ex: "Close-up", "Visão panorâmica", "Ângulo holandês", "Retrato", "Paisagem".]
- **Iluminação (opcional):** [Ex: "Luz dourada do pôr do sol", "Iluminação dramática com sombras fortes", "Luz ambiente suave".]
- **Ferramenta de IA (se tiver preferência):** [Ex: Midjourney V6, DALL-E 3, Stable Diffusion XL.]

**Instruções:**
1.  **Prompt Principal Otimizado:** Crie um prompt único, coeso e detalhado que combine todos os elementos fornecidos, utilizando uma linguagem descritiva e específica para ferramentas de IA de imagem.
2.  **Variações de Prompt:** Crie 2-3 variações do prompt principal, alterando ligeiramente o estilo, a atmosfera ou adicionando/removendo um elemento para explorar diferentes resultados.
3.  **Parâmetros Técnicos Sugeridos (se aplicável à ferramenta):** Liste sugestões de parâmetros como aspect ratio (\`--ar\`), stylize (\`--s\`), chaos (\`--c\`), seed (\`--seed\`), negative prompt, etc., conforme a ferramenta de IA preferida.

**Formato da Resposta:**

**Ideia Original:** [Ideia Central/Objeto Principal]

---

**Prompt Principal Otimizado:**
[Seu prompt detalhado aqui, ex: "An astronaut floating gracefully in deep space, hyperrealistic photography, intricate details on the reflective helmet showing a vibrant Earth, surrounded by ethereal nebulae in shades of cosmic blues and purples, serene and mysterious atmosphere, cinematic lighting, ultra-high resolution, 8k --ar 16:9 --v 6"]

---

**Variações de Prompt:**

1.  **Variação 1 (Estilo Diferente):**
    [Ex: "An astronaut floating in space, stylized as a retro 80s vaporwave aesthetic painting, neon glow from the visor, pastel pinks and blues, mysterious and serene, synthwave art --ar 16:9"]

2.  **Variação 2 (Elemento Adicional/Removido):**
    [Ex: "Close-up of an astronaut's helmet in space, detailed reflections of distant galaxies, a single cherry blossom petal floating past, ethereal lighting, mysterious and serene, photo realistic, 8k --ar 2:3"]

---

**Parâmetros Técnicos Sugeridos (Baseados em [Ferramenta de IA Escolhida, ou Geral]):**
-   **Proporção de Aspecto (Aspect Ratio):** \`--ar [Ex: 16:9 para paisagem, 9:16 para retrato, 1:1 para quadrado]\`
-   **Estilização (Stylize):** \`--s [Ex: 250 (baixa), 750 (média), 1000 (alta) - para Midjourney]\`
-   **Caos (Chaos):** \`--c [Ex: 0 (pouco), 50 (moderado), 100 (muito) - para Midjourney]\`
-   **Seed:** \`--seed [Um número específico se desejar reproduzir resultados ou explorar variações menores]\`
-   **Negative Prompt (Opcional):** \`[Ex: "low quality, blurry, mutated, ugly, bad anatomy, deformed"]\`
-   **Qualidade:** \`[Ex: "detailed, ultra high resolution, 8k, photorealistic"]\`
`,
    tags: ['ia generativa', 'prompt engineering', 'arte digital', 'imagens'],
  },
];
