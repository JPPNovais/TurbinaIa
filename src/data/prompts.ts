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
  {
    id: 'produtividade-plano-projeto-ia',
    title: 'Gerador de Plano de Projeto Detalhado com IA',
    category: 'Produtividade',
    description: 'Transforma uma ideia complexa de projeto em um plano de ação detalhado, incluindo fases, tarefas, estimativas de prazo, recursos e riscos.',
    template: `Atue como um especialista em gerenciamento de projetos e IA. Meu objetivo é que você me ajude a criar um plano de projeto detalhado para [nome do projeto].

Considere as seguintes informações:
- **Objetivo principal do projeto:** [Qual é o resultado final desejado? Ex: Lançar um novo produto, otimizar um processo interno, organizar um evento.]
- **Metas específicas:** [Liste 2-3 metas SMART (Específicas, Mensuráveis, Atingíveis, Relevantes, Temporizáveis) para o projeto. Ex: Aumentar as vendas em 15% em 6 meses, reduzir o tempo de onboarding em 20%.]
- **Prazo total desejado:** [Ex: 3 meses, 6 semanas, até 2026-12-31.]
- **Recursos disponíveis (humanos e financeiros):** [Ex: Equipe de 3 pessoas (1 dev, 1 designer, 1 PM), orçamento de R$10.000, acesso a ferramentas X, Y, Z.]
- **Principais desafios ou restrições conhecidas:** [Ex: Dependência de terceiros para aprovações, falta de conhecimento técnico em área específica, alta complexidade de integração.]
- **Entregáveis esperados:** [Liste os principais produtos ou resultados que o projeto deve gerar. Ex: MVP funcional, relatório de mercado, campanha de marketing lançada.]

Com base nisso, por favor, gere um plano de projeto que inclua:
1.  **Fases do Projeto:** Divida o projeto em fases lógicas (Ex: Iniciação, Planejamento, Execução, Monitoramento e Controle, Encerramento).
2.  **Tarefas Detalhadas por Fase:** Para cada fase, liste as tarefas específicas necessárias para completá-la, com breve descrição.
3.  **Estimativa de Prazo:** Estime um prazo para cada fase e para tarefas críticas (em dias/semanas).
4.  **Recursos Sugeridos:** Indique quais recursos (habilidades, ferramentas) seriam ideais para cada fase ou tarefa, se diferentes dos disponíveis.
5.  **Potenciais Riscos e Estratégias de Mitigação:** Identifique pelo menos 3 riscos principais e como mitigá-los ou gerenciá-los.
6.  **Métricas de Sucesso:** Como o sucesso do projeto será medido? (Ex: KPIs, feedback do cliente).
7.  **Próximos Passos Imediatos:** Quais as 3-5 primeiras ações a serem tomadas para iniciar o projeto após a aprovação deste plano?

Formate a saída de forma clara, usando listas e seções, fácil de ser compreendida e implementada.`,
    tags: ['gerenciamento de projetos', 'planejamento', 'automação', 'eficiência'],
  },
  {
    id: 'negocios-analise-mercado-expansao-ia',
    title: 'Especialista em Análise de Expansão de Mercado com IA',
    category: 'Negócios',
    description: 'Avalia a viabilidade de entrada em novos mercados, identificando oportunidades, desafios e estratégias para seu produto ou serviço.',
    template: `Atue como um consultor de estratégia de negócios com expertise em análise de mercado e IA. Meu objetivo é avaliar a viabilidade de expandir [meu produto/serviço: ex: software de gestão financeira, rede de academias, consultoria de marketing digital] para um novo mercado.

Considere as seguintes informações:
- **Produto/Serviço:** [Descreva brevemente o que você oferece, seu valor único e seu público-alvo atual, se houver. Ex: Plataforma SaaS para pequenas empresas com foco em automação financeira.]
- **Mercado Alvo Potencial:** [País, região, segmento demográfico ou setor industrial específico que você está considerando. Ex: Mercado de PMEs na Colômbia, Geração Z no Nordeste do Brasil, setor de agronegócios.]
- **Objetivos de Expansão:** [Ex: Aumentar faturamento em X% no novo mercado em 2 anos, conquistar Y% de market share, diversificar base de clientes, testar aceitação internacional.]
- **Recursos Disponíveis:** [Ex: Orçamento de R$X para entrada no mercado, equipe de vendas interna, capacidade de produção escalável, parcerias potenciais.]
- **Principais Preocupações/Dúvidas:** [Ex: Regulação local, intensidade da concorrência, necessidade de adaptação cultural do produto, desafios logísticos, custo de aquisição de clientes.]

Com base nisso, por favor, gere uma análise detalhada que inclua:
1.  **Visão Geral do Mercado Potencial:** Tamanho do mercado, tendências de crescimento, dados demográficos/econômicos relevantes, perfil do consumidor.
2.  **Análise da Concorrência:** Quem são os principais players, seus pontos fortes e fracos, e como seu produto/serviço se diferencia no mercado potencial.
3.  **Barreiras de Entrada:** Regulações governamentais, custos iniciais (marketing, infraestrutura, legal), requisitos de infraestrutura, desafios culturais e de linguagem.
4.  **Oportunidades de Mercado:** Lacunas, nichos inexplorados, tendências favoráveis (tecnológicas, sociais, econômicas), sinergias com produtos/serviços existentes.
5.  **Análise SWOT para o Novo Mercado:** Pontos Fortes e Fracos (internos da sua empresa em relação ao novo mercado), Oportunidades e Ameaças (externas do novo mercado).
6.  **Estratégias de Entrada Sugeridas:** Modelos de negócios (ex: parceria, aquisição, exportação direta), canais de distribuição, estratégias de precificação, posicionamento de marca adaptado.
7.  **Métricas de Sucesso:** Como o progresso e o sucesso da expansão serão medidos e quais KPIs seriam relevantes.

Formate a saída de forma profissional, com seções claras, dados (se puder simular) e insights acionáveis para uma tomada de decisão estratégica.`,
    tags: ['estratégia de negócios', 'expansão', 'pesquisa de mercado', 'inovação'],
  },
  {
    id: 'escrita-especialista-reaproveitamento-conteudo',
    title: 'Especialista em Reaproveitamento de Conteúdo Multicanal com IA',
    category: 'Escrita',
    description: 'Transforma um conteúdo fonte em formatos otimizados para diversas plataformas (blog, redes sociais, email, vídeo), mantendo a coerência e a mensagem.',
    template: `Atue como um estrategista de conteúdo e especialista em IA para reaproveitamento de material. Meu objetivo é adaptar um conteúdo fonte para diferentes plataformas, maximizando seu alcance e impacto junto ao meu público.

Aqui está o conteúdo fonte:
[COLE AQUI O CONTEÚDO ORIGINAL. Pode ser um artigo de blog completo, roteiro de podcast, transcrição de vídeo, ebook, etc. Quanto mais detalhado, melhor.]

Considere as seguintes informações para o reaproveitamento:
- **Público-alvo principal:** [Descreva brevemente seu público para este conteúdo. Ex: Empreendedores iniciantes, desenvolvedores back-end, mães de primeira viagem.]
- **Objetivo da adaptação:** [Ex: Gerar leads, aumentar engajamento, educar sobre um tópico, construir autoridade da marca, direcionar tráfego para o site.]
- **Plataformas de destino:** [Liste as plataformas que deseja atingir. Ex: Instagram (Stories, Reels, Carrossel), LinkedIn (Post, Artigo), Twitter/X (Thread), YouTube (Shorts), Newsletter por Email, Blog, TikTok.]
- **Tom de voz:** [Ex: Formal, informal, inspirador, técnico, divertido, autoritário, amigável.]
- **Palavras-chave principais (se houver):** [Liste até 3-5 palavras-chave relevantes que devem ser incorporadas. Ex: "produtividade com IA", "marketing digital para PMEs".]

Por favor, gere as seguintes adaptações, otimizadas para cada plataforma e com chamada para ação (CTA) relevante:

1.  **Para Instagram:**
    *   Um roteiro curto para um Reel/Story de [duração estimada, ex: 30-60 segundos] com gancho inicial, desenvolvimento dos pontos-chave do conteúdo fonte e um CTA visual e claro.
    *   Sugestões de 3-5 frases impactantes para um post de carrossel, com tópicos ou dicas visuais, incluindo a estrutura do carrossel (slide 1: título, slides 2-4: conteúdo, slide 5: CTA).
    *   5-7 hashtags relevantes para o nicho.
2.  **Para LinkedIn:**
    *   Um post breve com gancho que capture a atenção, valor do conteúdo e um CTA para engajamento (comentários) ou direcionamento para o conteúdo completo.
    *   Sugestões de 3-5 perguntas ou pontos de debate inspirados no conteúdo para iniciar uma discussão.
3.  **Para Twitter/X:**
    *   Uma thread de 3-5 tweets com os pontos-chave condensados do conteúdo e um CTA claro para aprofundamento ou interação.
4.  **Para Newsletter por Email:**
    *   Um rascunho de email de [tamanho, ex: curto/médio] com linha de assunto atraente, introdução envolvente, um breve resumo dos pontos principais e um CTA forte para ler o conteúdo completo ou agir.
5.  **Para YouTube Shorts / TikTok (se aplicável):**
    *   Um roteiro super curto de [duração estimada, ex: 15-30 segundos] com uma dica rápida ou um "momento aha!" do conteúdo fonte, com foco em retenção e um CTA verbal/textual.

Mantenha a essência do conteúdo original, mas adapte a linguagem, a estrutura e o estilo para as expectativas de cada formato e plataforma, maximizando o valor para o público.`,
    tags: ['criação de conteúdo', 'marketing digital', 'copywriting', 'otimização'],
  },
  {
    id: 'ia-gerador-cenarios-teste',
    title: 'Gerador Inteligente de Cenários de Teste para Sistemas e IAs',
    category: 'IA & Automação',
    description: 'Cria cenários de teste abrangentes, incluindo casos de uso padrão, extremos e de falha, para sistemas de software ou modelos de IA.',
    template: `Atue como um engenheiro de QA (Quality Assurance) com profundo conhecimento em IA e criação de cenários de teste. Meu objetivo é que você gere cenários de teste detalhados para [nome do sistema/funcionalidade/modelo de IA] para garantir sua robustez e confiabilidade.

Aqui estão as informações sobre o sistema/funcionalidade:
- **Nome do Sistema/Funcionalidade:** [Ex: Sistema de recomendação de produtos e-commerce, chatbot de atendimento ao cliente para suporte técnico, módulo de cálculo de impostos para sistema ERP, modelo de IA de detecção de fraude bancária.]
- **Descrição Breve:** [O que o sistema faz? Quais são seus principais inputs (entradas) e outputs (saídas) esperados? Ex: Recebe histórico de compras do usuário e retorna 5 produtos relevantes.]
- **Casos de Uso Principais Conhecidos:** [Liste os cenários de uso mais comuns ou esperados. Ex: Usuário logado compra item X, usuário não logado busca item Y.]
- **Tecnologias Envolvidas (Opcional):** [Ex: Python, TensorFlow, SQL, API REST, Web frontend.]
- **Público-alvo/Usuários:** [Quem irá usar este sistema? Ex: Clientes finais, funcionários internos, analistas de fraude.]
- **Restrições/Requisitos (se houver):** [Ex: Tempo de resposta máximo de 2 segundos, precisão mínima de 95% para detecção, segurança de dados em conformidade com a LGPD.]

Com base nessas informações, por favor, gere os seguintes tipos de cenários de teste:

1.  **Casos de Teste Positivos (Uso Comum):**
    *   Detalhe pelo menos 3 cenários de uso normal e bem-sucedido, com inputs esperados e outputs desejados.
2.  **Casos de Teste Negativos (Erros Esperados/Tratamento de Exceções):**
    *   Detalhe pelo menos 3 cenários onde a entrada é inválida, faltante, fora dos limites aceitáveis ou mal-formatada, e o sistema deve se comportar de forma controlada (ex: exibir mensagens de erro claras, realizar validações).
3.  **Casos de Teste de Borda/Extremos:**
    *   Detalhe pelo menos 2 cenários com inputs nos limites máximos/mínimos (valores muito grandes, muito pequenos, strings muito longas), ou situações que raramente ocorrem, mas são possíveis e cruciais para a estabilidade.
4.  **Casos de Teste de Performance/Carga (Ideias):**
    *   Sugira tipos de testes para avaliar o desempenho do sistema sob diferentes níveis de carga (ex: múltiplos usuários simultâneos, grande volume de dados processados, estresse do sistema).
5.  **Casos de Teste de Segurança (Ideias):**
    *   Sugira tipos de testes para identificar vulnerabilidades de segurança (ex: injeção de SQL, cross-site scripting (XSS), acessos não autorizados, falhas de autenticação/autorização).
6.  **Casos de Teste Específicos para IA (se aplicável):**
    *   Se for um modelo de IA, sugira testes para:
        *   **Vieses:** Entradas que podem expor vieses no modelo (ex: dados demográficos específicos).
        *   **Robustez:** Comportamento do modelo com entradas "adversariais" (pequenas perturbações que mudam a saída).
        *   **Explicabilidade:** Como o modelo justifica suas decisões em casos críticos.
        *   **Degradação:** Como o modelo se comporta com dados sujos ou ausentes.

Para cada cenário, inclua (quando relevante):
*   **ID do Cenário:** (Ex: CT-001, CT-NEG-001)
*   **Descrição:** Breve explicação do cenário a ser testado.
*   **Pré-condições:** O que deve ser verdade ou configurado antes do teste ser executado.
*   **Passos do Teste:** Ações detalhadas a serem realizadas pelo testador.
*   **Dados de Entrada:** Exemplos concretos de inputs a serem usados.
*   **Resultados Esperados:** O que o sistema deve produzir ou como deve se comportar.
*   **Pós-condições:** O estado do sistema após a execução bem-sucedida do teste.

Formate a saída de forma clara e estruturada, utilizando listas aninhadas ou um formato tabular para cada cenário, facilitando a implementação por uma equipe de QA.`,
    tags: ['engenharia de software', 'QA', 'inteligência artificial', 'automação de testes'],
  },
  {
    id: 'ia-design-workflow-agente',
    title: 'Design de Workflow para Agentes de IA',
    category: 'IA & Automação',
    description: 'Ajuda a planejar e estruturar um workflow complexo de IA, definindo etapas, ferramentas e interações para automatizar um processo específico.',
    template: `Você é um especialista em arquitetura de agentes de IA e automação de processos. Sua tarefa é criar um design detalhado de workflow para um agente de IA, descrevendo cada etapa, as ações a serem tomadas, as ferramentas envolvidas e os resultados intermediários.

**Objetivo Principal do Workflow:** [Exemplo: Automatizar o processo de triagem e resposta inicial a leads de vendas]
**Entrada Inicial de Dados:** [Exemplo: Novos leads recebidos via formulário web com nome, email, telefone, empresa e mensagem]
**Ferramentas/APIs disponíveis (se houver):** [Exemplo: CRM (HubSpot), Ferramenta de enriquecimento de dados (Clearbit), Gerador de texto de IA (GPT-4), Sistema de e-mail (SendGrid)]
**Restrições ou Considerações Específicas:** [Exemplo: Deve priorizar leads de empresas com mais de 50 funcionários. Respostas devem ser personalizadas e em tom formal.]
**Exemplo de Resultado Esperado:** [Exemplo: Lead classificado, enriquecido com dados adicionais, e-mail inicial personalizado enviado, tarefa criada no CRM para o vendedor.]

---

**Sua Saída Deverá Conter:**

1.  **Visão Geral do Workflow:** Uma breve descrição do fluxo de ponta a ponta.
2.  **Passos Detalhados do Workflow:**
    *   **Etapa 1: [Nome da Etapa]**
        *   **Ação:** O que o agente de IA faz nesta etapa.
        *   **Entrada:** Quais dados ou informações são utilizados.
        *   **Ferramentas Envolvidas:** Quais ferramentas são acionadas.
        *   **Saída/Resultado Intermediário:** O que é produzido ou para onde os dados são encaminhados.
        *   **Lógica de Decisão (se houver):** Condições para avançar ou ramificar o fluxo.
    *   ... (Repita para as etapas seguintes, pensando em no mínimo 5-7 etapas para um workflow complexo)
3.  **Mapeamento de Ferramentas:** Um resumo de quais ferramentas são usadas em quais etapas.
4.  **Pontos de Monitoramento e Otimização:** Onde o workflow pode ser avaliado e melhorado.
5.  **Recomendações para Implementação:** Sugestões para colocar este workflow em prática.`,
    tags: ['automação', 'agentes de ia', 'workflow', 'estratégia'],
  },
  {
    id: 'marketing-analise-sentimento-feedback',
    title: 'Análise de Sentimento e Feedback do Cliente com IA',
    category: 'Marketing',
    description: 'Processa e analisa grandes volumes de feedback de clientes ou dados de redes sociais para identificar sentimentos, temas e insights acionáveis.',
    template: `Você é um analista de marketing com expertise em inteligência artificial para insights de clientes. Sua tarefa é analisar um conjunto de dados de feedback para extrair sentimentos, temas recorrentes e recomendações acionáveis.

**Fonte dos Dados:** [Exemplo: Comentários de usuários em um aplicativo de delivery]
**Contexto dos Dados:** [Exemplo: Avaliações e críticas na App Store e Google Play Store sobre a versão 3.0 do aplicativo]
**Volume de Dados (aproximado):** [Exemplo: 500 avaliações recentes]
**Período de Análise:** [Exemplo: Últimos 3 meses (2026-02 a 2026-05)]
**Aspectos Chave a Analisar:** [Exemplo: Usabilidade do app, velocidade de entrega, qualidade da comida, atendimento ao cliente, preço, novas funcionalidades]
**Formato de Saída Desejado:** [Exemplo: Relatório com tópicos principais, tabela de sentimentos, recomendações]

---

**Sua Análise Deve Incluir:**

1.  **Resumo Executivo:** Uma visão geral dos principais achados e do sentimento geral.
2.  **Análise de Sentimento Agregada:**
    *   Porcentagem de sentimentos (positivo, negativo, neutro).
    *   Principais termos e frases associados a cada sentimento.
3.  **Identificação de Tópicos e Temas Recorrentes:**
    *   Lista dos 5-10 temas mais mencionados.
    *   Para cada tema, o sentimento predominante associado e exemplos de citações.
4.  **Insights Acionáveis por Categoria:**
    *   Para cada um dos "Aspectos Chave a Analisar", forneça:
        *   Um resumo do feedback.
        *   O sentimento dominante.
        *   Sugestões concretas para a equipe de produto, marketing ou suporte.
5.  **Identificação de "Pain Points" e Oportunidades:**
    *   Quais são as maiores dores dos clientes?
    *   Onde há oportunidades claras para melhoria ou inovação?
6.  **Recomendações Estratégicas:** Sugestões de ações de curto e médio prazo baseadas nos insights.
7.  **Pontos Fortes a Serem Reforçados:** O que os clientes amam e deve ser comunicado ou expandido.`,
    tags: ['análise de dados', 'feedback', 'marketing digital', 'insights'],
  },
  {
    id: 'dev-gerador-testes-ia',
    title: 'Gerador de Testes de Unidade e Integração com IA',
    category: 'Desenvolvimento',
    description: 'Cria testes de unidade e/ou integração para um bloco de código fornecido, garantindo cobertura e identificando casos de borda e sucesso.',
    template: `Você é um engenheiro de software especialista em testes automatizados. Sua tarefa é criar testes robustos de unidade e/ou integração para o trecho de código fornecido.

**Trecho de Código ou Função:**
\`\`\`[Linguagem de Programação]
[Cole o trecho de código aqui. Exemplo:
function calculateTotalPrice(items, discountRate) {
  let total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (discountRate) {
    total -= total * discountRate;
  }
  return total;
}
]
\`\`\`

**Linguagem de Programação:** [Exemplo: JavaScript, Python, Java, C#]
**Framework de Testes Desejado:** [Exemplo: Jest (para JS), Pytest (para Python), JUnit (para Java), NUnit (para C#)]
**Contexto Adicional (se houver):** [Exemplo: Funções dependentes, estruturas de dados de entrada/saída esperadas, mocks necessários.]
**Tipo de Teste Desejado:** [Unidade, Integração, Ambos]
**Nível de Cobertura Desejado:** [Básico (caminhos principais), Médio (inclui alguns casos de borda), Abrangente (todos os caminhos, erros, borda)]

---

**Sua Saída Deverá Incluir:**

1.  **Explicação da Função:** Uma breve descrição do que a função/código faz.
2.  **Testes de Unidade (se solicitado):**
    *   **Setup:** Quaisquer configurações necessárias para rodar os testes.
    *   **Testes de Sucesso:** Múltiplos cenários de uso normal com entradas e saídas esperadas.
    *   **Testes de Casos de Borda:** Entradas vazias, nulas, valores máximos/mínimos, formatos inesperados (se aplicável).
    *   **Testes de Erro (se aplicável):** Comportamento esperado para entradas inválidas ou condições de falha.
3.  **Testes de Integração (se solicitado):**
    *   **Setup:** Simular a integração com dependências externas (ex: chamadas a API, banco de dados, mocks).
    *   **Cenários de Integração:** Como a função interage com outros componentes ou serviços.
4.  **Mocks e Stubs (se necessário):** Definições de como simular dependências externas para isolar o código em teste.
5.  **Recomendações:** Sugestões para melhorar a testabilidade do código ou adicionar mais testes.

**Formato da Saída:** O código dos testes deve ser fornecido no framework e linguagem especificados, pronto para ser copiado e executado.
`,
    tags: ['testes', 'qualidade de código', 'automação', 'desenvolvimento'],
  },
  {
    id: 'negocios-estrategia-esg-ia',
    title: 'Estratégia ESG Assistida por IA',
    category: 'Negócios',
    description: 'Desenvolve uma estratégia Ambiental, Social e de Governança (ESG) personalizada para sua empresa, identificando riscos, oportunidades e métricas de impacto.',
    template: `Você é um consultor de sustentabilidade e negócios com profunda expertise em ESG e aplicação de IA. Sua tarefa é criar uma estratégia ESG personalizada para uma empresa, identificando pilares, ações, métricas e recomendações para implementação.

**Nome da Empresa:** [Exemplo: Soluções Verdes Ltda.]
**Setor de Atuação:** [Exemplo: Tecnologia de energias renováveis]
**Tamanho da Empresa:** [Exemplo: Pequena a média (50 funcionários)]
**Principais Produtos/Serviços:** [Exemplo: Software de otimização para painéis solares, consultoria em eficiência energética]
**Valores e Missão da Empresa (se houver):** [Exemplo: Inovar para um futuro sustentável, com transparência e responsabilidade social]
**Recursos Disponíveis para ESG (financeiros, humanos):** [Exemplo: Orçamento limitado, equipe de 2 pessoas dedicada a projetos de impacto, parceria com universidade]
**Objetivos ESG Atuais (se houver):** [Exemplo: Reduzir a pegada de carbono, melhorar a diversidade na liderança, aumentar o engajamento comunitário]
**Legislação ou Padrões Relevantes (se conhecido):** [Exemplo: Regulamentações brasileiras de resíduos sólidos, padrões ISO 14001, ODS da ONU]

---

**Sua Saída Deverá Conter:**

1.  **Análise de Materialidade (IA-driven):**
    *   Identificação dos temas ESG mais relevantes para o setor e para a empresa, considerando riscos e oportunidades.
    *   Como a IA pode ajudar a monitorar e analisar esses temas.
2.  **Pilares da Estratégia ESG:**
    *   Definição clara dos principais pilares ESG (Ambiental, Social, Governança) para a empresa.
    *   Para cada pilar, os objetivos estratégicos específicos e alinhados com os ODS da ONU, se aplicável.
3.  **Plano de Ação Detalhado (3-5 Ações por Pilar):**
    *   Para cada pilar, liste ações concretas e implementáveis (ex: adoção de energia limpa, programa de voluntariado, política de diversidade).
    *   Para cada ação, inclua: Responsável, Prazo estimado, Recursos necessários.
4.  **Métricas de Desempenho (KPIs ESG):**
    *   Sugestão de KPIs mensuráveis para cada pilar, utilizando abordagens baseadas em IA para coleta e análise de dados (ex: monitoramento de consumo de energia, análise de sentimento de clima organizacional).
    *   Metas quantitativas e qualitativas para cada KPI.
5.  **Comunicação e Transparência:**
    *   Recomendações sobre como comunicar o progresso ESG a stakeholders internos e externos.
    *   Sugestões de formatos de relatório (ex: relatório de sustentabilidade, seção no site).
6.  **Gerenciamento de Riscos e Oportunidades:**
    *   Identificação de riscos ESG específicos e como mitigá-los.
    *   Oportunidades de inovação e vantagem competitiva através da estratégia ESG.
7.  **Recomendações para Integração da IA:** Como a inteligência artificial pode ser utilizada para otimizar o monitoramento, a análise e a tomada de decisões relacionadas à estratégia ESG.`,
    tags: ['sustentabilidade', 'esg', 'negócios', 'estratégia'],
  },
  {
    id: 'ai-base-conhecimento-pessoal',
    title: 'Construtor de Base de Conhecimento Pessoal com IA',
    category: 'IA & Automação',
    description: 'Crie uma base de conhecimento pessoal estruturada a partir de seus documentos e notas, otimizada para consulta e aprendizado.',
    template: `Você é um assistente de IA especialista em gerenciamento de conhecimento e construção de bases de dados. Seu objetivo é me ajudar a criar uma base de conhecimento pessoal otimizada e fácil de consultar, extraindo informações de diversas fontes e organizando-as de forma lógica.

As fontes de informação que você deve considerar são: [Lista de tipos de documentos/mídias, ex: notas de reunião, artigos científicos, trechos de livros, transcrições de vídeos, e-mails, etc.].

O tema central da base de conhecimento será: [Tema principal, ex: "Produtividade Pessoal e Hábitos", "Desenvolvimento Frontend", "Estratégias de Marketing Digital"].

Meu objetivo principal ao construir esta base é: [Objetivo, ex: "Ter um repositório centralizado para consulta rápida", "Organizar meus estudos para uma certificação", "Gerar novas ideias a partir da conexão de conceitos"].

Por favor, crie uma estrutura sugerida para a base de conhecimento, incluindo categorias principais e subcategorias. Para cada categoria/subcategoria, liste os tipos de informação que seriam armazenados e sugira metadados relevantes (tags, autores, datas, links, etc.) que ajudariam na recuperação.

Além disso, descreva como a IA pode processar os dados brutos de cada tipo de fonte (ex: resumir artigos, extrair pontos-chave de reuniões, identificar termos técnicos) e como essa informação seria indexada para facilitar buscas complexas.

No final, forneça 3 exemplos de perguntas complexas que eu poderia fazer à minha base de conhecimento para obter insights valiosos, e como a IA utilizaria a estrutura que você propôs para respondê-las.`,
    tags: ['Conhecimento', 'Organização', 'Aprendizado', 'Dados'],
  },
  {
    id: 'marketing-calendario-conteudo-ia',
    title: 'Calendário de Conteúdo Preditivo com IA',
    category: 'Marketing',
    description: 'Gere um calendário de conteúdo otimizado por IA, prevendo tópicos e formatos com base em tendências e desempenho.',
    template: `Você é um estrategista de marketing digital e especialista em IA, encarregado de criar um calendário de conteúdo preditivo para o próximo [Período, ex: "trimestre", "mês"].

O nicho/indústria do meu negócio é: [Nicho/Indústria].
Minha persona principal é: [Breve descrição da persona ou link para documento de persona].
Meus principais canais de distribuição de conteúdo são: [Ex: Instagram, LinkedIn, Blog, YouTube, Newsletter].
Meus objetivos de conteúdo para este período são: [Ex: Aumentar engajamento em 15%, Gerar 100 leads qualificados, Aumentar tráfego orgânico em 20%].
Dados de desempenho anteriores (se disponíveis): [Ex: Tópicos mais populares, formatos com maior engajamento, horários de pico, conteúdo de concorrentes com bom desempenho. Se não tiver, diga "Nenhum dado anterior"].

Com base nessas informações, e considerando as tendências atuais e futuras de [Ano atual + 1 ou 2, ex: "2026-2027"] para [Nicho/Indústria], crie um calendário de conteúdo detalhado.

Para cada [Número] semanas, inclua:
1.  **Tópicos Sugeridos:** 3-5 ideias de tópicos altamente relevantes e com potencial de alto engajamento/conversão.
2.  **Formato:** Para cada tópico, sugira o formato ideal (ex: Carrossel no Instagram, Artigo de Blog, Vídeo Curto, Thread no LinkedIn, Infográfico).
3.  **Chamada para Ação (CTA):** Uma CTA específica e alinhada ao objetivo.
4.  **Justificativa Preditiva:** Explique *por que* a IA sugere este tópico/formato, referenciando tendências, dados da persona ou objetivos.
5.  **Palavras-chave/Hashtags:** Sugestões de SEO e alcance.
6.  **Sugestão de Data/Hora de Publicação:** Otimizada para o público.

Apresente o resultado em formato de tabela Markdown, fácil de visualizar.`,
    tags: ['Marketing', 'Conteúdo', 'Estratégia', 'Previsão'],
  },
  {
    id: 'dev-design-arquitetura-microsservicos',
    title: 'Design de Arquitetura de Microsserviços com IA',
    category: 'Desenvolvimento',
    description: 'Obtenha um design de arquitetura de microsserviços detalhado e otimizado para um novo projeto ou refatoração.',
    template: `Você é um arquiteto de software sênior com vasta experiência em design de sistemas distribuídos e microsserviços, utilizando as melhores práticas do mercado e considerando as capacidades de IA para otimização.

Estou projetando um novo sistema (ou refatorando um existente) para [Descreva o sistema/aplicação, ex: "uma plataforma de e-commerce de produtos artesanais", "um sistema de gestão de frota para logística", "uma aplicação de streaming de vídeo"].

Os principais requisitos funcionais são: [Liste os requisitos funcionais, ex: "Autenticação de usuário", "Catálogo de produtos", "Processamento de pedidos", "Gestão de inventário", "Notificações em tempo real", "Análise de dados de uso"].

Os requisitos não funcionais incluem: [Liste requisitos não funcionais, ex: "Alta disponibilidade (99.9%)", "Escalabilidade para X usuários/transações por segundo", "Latência abaixo de Y ms", "Segurança robusta", "Manutenibilidade", "Custo-efetividade"].

As tecnologias preferenciais (ou restrições) são: [Ex: "Backend em Python/Django, Frontend em React", "Banco de dados PostgreSQL e Redis", "Mensageria Kafka", "Orquestração com Kubernetes", "Cloud AWS"].

Com base nestas informações, por favor, elabore um plano de design de arquitetura de microsserviços que inclua:

1.  **Identificação de Microsserviços:** Sugira a divisão funcional em microsserviços lógicos, justificando cada um.
2.  **Responsabilidades de Cada Microsserviço:** Descreva as principais funções e dados gerenciados por cada microsserviço.
3.  **Comunicação entre Microsserviços:** Proponha os padrões de comunicação (ex: REST, gRPC, Event-Driven, filas de mensagens) e tecnologias para cada interação.
4.  **Gerenciamento de Dados:** Como os dados seriam persistidos e acessados por cada microsserviço (ex: banco de dados por serviço, data lake).
5.  **Estratégias de Escalabilidade e Resiliência:** Sugira padrões como Circuit Breaker, Retries, Load Balancing, Autoscating.
6.  **Observabilidade:** Como monitorar e depurar (ex: logging, tracing distribuído, métricas).
7.  **Considerações de Segurança:** Recomendações para autenticação, autorização e proteção de dados.
8.  **Fluxo de Dados:** Um exemplo de fluxo de dados para um cenário chave (ex: "realizar um pedido").

Apresente sua resposta de forma clara e estruturada, como se fosse um documento de design inicial.`,
    tags: ['Arquitetura', 'Microsserviços', 'Desenvolvimento', 'Sistemas'],
  },
  {
    id: 'education-rota-aprendizagem-adaptativa',
    title: 'Gerador de Rota de Aprendizagem Adaptativa com IA',
    category: 'Educação',
    description: 'Crie um plano de estudo personalizado e adaptável com base em seus objetivos, conhecimentos atuais e estilo de aprendizado.',
    template: `Você é um tutor de IA especializado em design instrucional e neurociência da aprendizagem, com foco em rotas de estudo adaptativas.

Meu objetivo principal de aprendizagem é: [Ex: "Dominar Python para análise de dados", "Preparar para o exame PMP", "Aprender marketing digital do zero", "Aprofundar em Machine Learning"].

Meu nível de conhecimento atual sobre o tema é: [Ex: "Iniciante absoluto", "Conhecimento básico, sei alguns conceitos", "Intermediário, já programei um pouco", "Avançado em outras áreas, mas novo nesta"].

Meu estilo de aprendizado preferencial é (selecione um ou mais): [Ex: "Visual (diagramas, vídeos)", "Auditivo (podcasts, palestras)", "Leitura/Escrita (livros, artigos, anotações)", "Cinestésico (projetos práticos, exercícios)", "Social (grupos de estudo, discussões)"].

Quanto tempo disponível tenho por dia/semana para dedicar aos estudos? [Ex: "1 hora por dia", "3 horas nos finais de semana", "Flexível, mas quero concluir em 3 meses"].

Com base nessas informações, e considerando que o plano deve ser adaptável e dinâmico, crie uma "Rota de Aprendizagem Adaptativa" detalhada, incluindo:

1.  **Módulos de Aprendizagem:** Divida o objetivo em módulos lógicos, com uma sequência recomendada.
2.  **Recursos Sugeridos por Módulo:** Para cada módulo, liste 3-5 tipos de recursos alinhados ao meu estilo de aprendizado (ex: livros específicos, cursos online, tutoriais em vídeo, exercícios práticos, projetos open source, artigos).
3.  **Avaliações e Feedback:** Sugira formas de autoavaliação ou projetos práticos para verificar o progresso em cada módulo.
4.  **Estratégias de Adaptação:** Descreva como a rota pode se adaptar se eu:
    *   Tiver dificuldades em um tópico (recursos adicionais, exercícios mais simples).
    *   Demonstrar domínio rápido (saltar tópicos básicos, avançar para desafios).
    *   Mudar meu tempo disponível (sugestões para compactar ou estender o plano).
5.  **Dicas de Produtividade:** Sugestões para manter o foco e otimizar o tempo de estudo.

Apresente o plano de forma estruturada, com títulos e marcadores, facilitando a visualização.`,
    tags: ['Educação', 'Aprendizado', 'Personalização', 'Estudo'],
  },
  {
    id: 'ia-design-agente-tarefas',
    title: 'Design de Agente de IA para Gestão de Projetos e Tarefas',
    category: 'IA & Automação',
    description: 'Crie um perfil detalhado para um agente de IA autônomo focado em otimizar sua gestão de projetos e tarefas diárias.',
    template: `Você é um especialista em design de agentes de IA para produtividade. Preciso que você crie um perfil detalhado para um agente de IA autônomo que me auxiliará na gestão de projetos e tarefas.

Considere os seguintes parâmetros:

1.  **Nome do Agente:** [Nome do Agente, ex: "Orchestrator", "TaskMaster Pro"]
2.  **Objetivo Principal:** [Otimizar a execução de projetos, garantir o cumprimento de prazos, aumentar a eficiência da equipe, etc.]
3.  **Persona/Estilo de Comunicação:** [Formal e direto, amigável e motivador, analítico e baseado em dados, etc.]
4.  **Capacidades Essenciais:**
    *   **Análise de Tarefas:** [Descrever como ele deve analisar tarefas, ex: quebrar tarefas complexas em subtarefas, identificar pré-requisitos.]
    *   **Priorização Inteligente:** [Descrever critérios de priorização, ex: urgência, impacto, dependências, esforço.]
    *   **Gerenciamento de Prazos:** [Como ele deve monitorar e alertar sobre prazos, ex: lembretes proativos, recalibrar cronogramas.]
    *   **Identificação de Gargalos:** [Como ele deve identificar e sugerir soluções para gargalos, ex: sobrecarga de um membro da equipe, dependências não resolvidas.]
    *   **Geração de Relatórios:** [Que tipo de relatórios ele deve gerar, ex: progresso semanal, distribuição de carga de trabalho, riscos potenciais.]
    *   **Integração de Ferramentas (Opcional):** [Quais ferramentas externas ele deve simular integração, ex: Trello, Asana, Google Calendar, Slack.]
5.  **Entradas Esperadas do Usuário:** [Ex: Lista de projetos, descrição de tarefas, prazos, membros da equipe, status atual.]
6.  **Saídas Desejadas do Agente:** [Ex: Planos de ação detalhados, sugestões de realocação de recursos, alertas de atraso, sumários de progresso, perguntas para esclarecimento.]
7.  **Restrições/Considerações:** [Ex: Deve operar com autonomia limitada, sempre pedir confirmação para ações críticas, priorizar a privacidade dos dados.]

Com base nessas informações, estruture o perfil do agente, suas funções, fluxo de interação e como ele agrega valor para o usuário.

**Minha entrada:**
1.  **Nome do Agente:** [Meu Agente Produtivo]
2.  **Objetivo Principal:** [Otimizar a gestão diária de tarefas e auxiliar na progressão de projetos pessoais e profissionais, focando em entregas contínuas.]
3.  **Persona/Estilo de Comunicação:** [Direto, objetivo, mas com um tom encorajador. Fornece feedback construtivo e sugestões proativas.]
4.  **Capacidades Essenciais:**
    *   **Análise de Tarefas:** [Decompor grandes tarefas em passos acionáveis, estimar tempo e identificar recursos necessários.]
    *   **Priorização Inteligente:** [Utilizar a Matriz de Eisenhower (Urgência/Importância) e considerar impacto nos objetivos de longo prazo.]
    *   **Gerenciamento de Prazos:** [Monitorar prazos de tarefas e projetos, enviar lembretes com 24h e 4h de antecedência, e sugerir reagendamentos inteligentes em caso de atraso.]
    *   **Identificação de Gargalos:** [Alertar quando uma tarefa depende de outra que está atrasada ou quando minha carga de trabalho está desequilibrada.]
    *   **Geração de Relatórios:** [Relatórios diários com "Top 3 Prioridades" e "Progresso do Dia", e um resumo semanal de conquistas e desafios.]
    *   **Integração de Ferramentas (Opcional):** [Simular integração com meu Google Calendar para bloqueio de tempo e Notion para listas de tarefas.]
5.  **Entradas Esperadas do Usuário:** [Lista de afazeres diários, objetivos de projeto (SMART), eventos de calendário, e feedback sobre o progresso das tarefas.]
6.  **Saídas Desejadas do Agente:** [Lista de tarefas priorizadas para o dia, um plano de ação para cada projeto, alertas e lembretes proativos, e perguntas para refinar meu entendimento de tarefas.]
7.  **Restrições/Considerações:** [Deve aprender com meu estilo de trabalho e preferências ao longo do tempo. Não deve sobrecarregar com notificações, mas sim otimizar a atenção.]`,
    tags: ['IA', 'Agentes', 'Automação', 'Produtividade'],
  },
  {
    id: 'marketing-conteudo-multimodal-lancamento',
    title: 'Plano de Conteúdo Multimodal para Lançamento de Produto/Serviço',
    category: 'Marketing',
    description: 'Gere um plano de conteúdo detalhado para o lançamento de um produto/serviço, abrangendo diversos formatos e plataformas.',
    template: `Você é um estrategista de marketing digital especializado em lançamentos e conteúdo multimodal. Crie um plano de conteúdo abrangente para o lançamento de [Nome do Produto/Serviço], considerando uma abordagem multimodal em diferentes plataformas.

**Informações do Produto/Serviço:**
*   **Nome:** [Nome do Produto/Serviço, ex: "Plataforma IA para Pequenas Empresas"]
*   **Descrição:** [Breve descrição do que o produto/serviço faz, ex: "Uma ferramenta de IA que automatiza o atendimento ao cliente e gera relatórios de vendas para PMEs."]
*   **Benefícios Principais:** [Lista de 3-5 benefícios para o cliente, ex: "Redução de custos, otimização de tempo, insights de dados."]
*   **Diferenciais:** [O que o torna único no mercado, ex: "Interface intuitiva, integração com 50+ ferramentas, suporte 24/7."]
*   **Público-Alvo:** [Detalhes do público-alvo, ex: "Pequenos e médios empresários, gestores de e-commerce, equipes de marketing."]
*   **Data de Lançamento (Alvo):** [Data ou período do lançamento, ex: "Meio de julho de 2026."]
*   **Fases do Lançamento:** [Pré-Lançamento (Teaser), Lançamento (Anúncio Oficial), Pós-Lançamento (Sustentação).]

**Plataformas de Distribuição:**
*   [Ex: Instagram, LinkedIn, YouTube, Blog do site, E-mail Marketing, TikTok, Podcast.]

**Tom de Voz da Marca:**
*   [Ex: Inovador, profissional, acessível, divertido, autoritário.]

Com base nessas informações, crie um plano de conteúdo em formato de tabela (ou lista estruturada), com as seguintes colunas para cada fase do lançamento:
*   **Fase do Lançamento**
*   **Plataforma**
*   **Formato do Conteúdo (Multimodal)**
*   **Ideia Central/Título**
*   **Chamada para Ação (CTA)**
*   **Objetivo da Peça de Conteúdo**

Sugira uma variedade de formatos multimodais (texto, imagem, vídeo curto, vídeo longo, áudio, infográfico, quiz interativo, etc.).

**Minha entrada:**
*   **Nome:** "App EcoConnect"
*   **Descrição:** "Um aplicativo móvel que conecta consumidores a produtores locais de alimentos orgânicos e sustentáveis, facilitando compras diretas e entregas."
*   **Benefícios Principais:** "Alimentos frescos e saudáveis, apoio à economia local, redução da pegada de carbono, praticidade."
*   **Diferenciais:** "Mapa interativo com produtores, sistema de avaliação de sustentabilidade, rota otimizada de entrega."
*   **Público-Alvo:** "Consumidores urbanos conscientes, famílias jovens, entusiastas da alimentação saudável e sustentável."
*   **Data de Lançamento (Alvo):** "Início de setembro de 2026."
*   **Fases do Lançamento:** "Pré-Lançamento (1 mês antes), Lançamento (1ª semana de Setembro), Pós-Lançamento (1º mês após)."
*   **Plataformas de Distribuição:** "Instagram, Blog, E-mail Marketing, YouTube Shorts, Podcast (participação como convidado)."
*   **Tom de Voz da Marca:** "Inspirador, comunitário, educativo, transparente."`,
    tags: ['Marketing', 'Conteúdo', 'Lançamento', 'Multimodal'],
  },
  {
    id: 'finance-fluxo-caixa-pequenas-empresas',
    title: 'Análise e Projeção de Fluxo de Caixa com IA para [Nome da Empresa]',
    category: 'Finanças',
    description: 'Realize uma análise detalhada do fluxo de caixa atual e projete cenários futuros para sua pequena empresa com base em dados fornecidos.',
    template: `Você é um consultor financeiro com expertise em análise de dados e projeção de fluxo de caixa para pequenas e médias empresas, utilizando capacidades de IA. Analise o fluxo de caixa da [Nome da Empresa] e forneça insights e projeções.

**Dados da Empresa:**
*   **Nome da Empresa:** [Nome da Empresa]
*   **Setor de Atuação:** [Ex: Varejo online, Serviços de TI, Consultoria, Restaurante]
*   **Tipo de Negócio:** [Ex: Produto físico, Serviço recorrente, SaaS, Projeto único]
*   **Dados de Receitas (últimos 3-6 meses):**
    *   [Mês 1]: R$ [Valor]
    *   [Mês 2]: R$ [Valor]
    *   [Mês 3]: R$ [Valor]
    *   *(Adicione mais meses se tiver)*
*   **Dados de Despesas (últimos 3-6 meses):**
    *   **Despesas Fixas Mensais:** [Ex: Aluguel R$X, Salários R$Y, Licenças R$Z. Liste os principais.]
    *   **Despesas Variáveis Mensais (estimativa ou média):** [Ex: Custo de Mercadoria Vendida (CMV) X% da receita, Marketing R$Y, Transporte R$Z. Liste os principais.]
    *   [Mês 1 (Total)]: R$ [Valor]
    *   [Mês 2 (Total)]: R$ [Valor]
    *   [Mês 3 (Total)]: R$ [Valor]
    *   *(Adicione mais meses se tiver)*
*   **Saldo Atual em Caixa/Banco:** R$ [Valor]
*   **Metas de Crescimento (próximos 6-12 meses):** [Ex: Aumentar vendas em 20%, lançar novo produto, expandir equipe em 2 pessoas.]
*   **Desafios Atuais (Opcional):** [Ex: Flutuação de vendas, sazonalidade, altos custos de aquisição de clientes.]

Com base nessas informações, forneça:

1.  **Análise do Fluxo de Caixa Atual:**
    *   Avaliação da saúde financeira com base nos dados fornecidos.
    *   Identificação de padrões (sazonalidade, picos/quedas).
    *   Principais categorias de despesas e onde há oportunidade de otimização.
2.  **Projeção de Fluxo de Caixa (próximos 6 meses):**
    *   Cenário Base (Manutenção do status quo ou crescimento moderado conforme metas).
    *   Cenário Otimista (Com base em [Fator positivo, ex: aumento de vendas em X%]).
    *   Cenário Pessimista (Com base em [Fator negativo, ex: queda de vendas em Y%, aumento de custos]).
    *   Para cada cenário, apresente uma estimativa de saldo final de caixa por mês.
3.  **Recomendações Estratégicas:**
    *   Sugestões para melhorar a gestão do fluxo de caixa.
    *   Conselhos para alcançar as metas de crescimento de forma sustentável.
    *   Alertas sobre riscos potenciais e como mitigá-los.

Formate a resposta de forma clara e estruturada, utilizando listas e talvez uma tabela simples para as projeções.

**Minha entrada:**
*   **Nome da Empresa:** "Café Aroma Puro"
*   **Setor de Atuação:** "Cafeteria e Produtos de Café Artesanal"
*   **Tipo de Negócio:** "Varejo físico e e-commerce de produtos"
*   **Dados de Receitas (últimos 3 meses):**
    *   Fevereiro: R$ 15.000
    *   Março: R$ 18.000
    *   Abril: R$ 17.500
*   **Dados de Despesas (últimos 3 meses):**
    *   **Despesas Fixas Mensais:** Aluguel R$2.500, Salários (2 func.) R$4.000, Contas de consumo R$800.
    *   **Despesas Variáveis Mensais (média):** Custo de Ingredientes e Produtos 35% da receita, Marketing R$500, Manutenção R$200.
    *   Fevereiro (Total): R$ 12.000
    *   Março (Total): R$ 13.500
    *   Abril (Total): R$ 13.000
*   **Saldo Atual em Caixa/Banco:** R$ 8.000
*   **Metas de Crescimento (próximos 6 meses):** "Aumentar vendas em 15%, lançar um novo blend de café exclusivo, otimizar estoque."
*   **Desafios Atuais:** "Aumento do preço dos grãos, concorrência local acirrada."`,
    tags: ['Finanças', 'Negócios', 'PME', 'Análise de Dados'],
  },
  {
    id: 'education-microlearning-personalizado',
    title: 'Criação de Módulo de Microlearning Personalizado',
    category: 'Educação',
    description: 'Desenvolva um módulo de microlearning interativo e personalizado para um tópico específico, focado em retenção rápida e aplicação prática.',
    template: `Você é um especialista em design instrucional e criador de conteúdo educacional com IA, focado em metodologias de microlearning. Crie um módulo de microlearning personalizado para o tópico [Tópico do Módulo], visando a máxima retenção e aplicação prática.

**Informações para Personalização:**
*   **Tópico do Módulo:** [Tópico específico, ex: "Fundamentos de Python para Ciência de Dados", "Boas Práticas de Gestão de Tempo", "Introdução à Culinária Vegana"]
*   **Público-Alvo:** [Quem vai aprender, ex: "Profissionais iniciantes em tecnologia", "Estudantes universitários", "Amadores de cozinha"]
*   **Objetivo de Aprendizado:** [O que o aluno deve ser capaz de fazer após o módulo, ex: "Escrever scripts Python básicos para manipulação de dados", "Aplicar 3 técnicas de gestão de tempo no dia a dia", "Preparar 2 pratos veganos simples."]
*   **Duração Desejada:** [Tempo estimado para o módulo, ex: "15-20 minutos", "30 minutos (com atividades)", "1 hora (dividida em sessões curtas)."]
*   **Formatos Preferidos (escolha 2-3):** [Ex: Vídeos curtos, texto conciso, infográficos, quizzes interativos, flashcards, simulações rápidas, estudos de caso.]
*   **Conhecimento Prévio dos Alunos (Opcional):** [O que eles já sabem sobre o tópico, ex: "Básico de programação", "Nenhuma experiência em gestão de tempo", "Conhecimento superficial de culinária."]
*   **Contexto de Aplicação (Opcional):** [Como eles aplicarão o conhecimento, ex: "No trabalho diário", "Para melhorar a vida pessoal", "Para um hobby."]

Com base nessas informações, estruture o módulo de microlearning, incluindo:

1.  **Título do Módulo e Introdução (gancho):** Breve e envolvente.
2.  **Conteúdo Dividido em 'Microsessões' (3-5):** Para cada microsessão, forneça:
    *   Um subtítulo claro.
    *   O principal conceito a ser abordado.
    *   Sugestão de formato de conteúdo (conforme preferência).
    *   Um breve resumo do conteúdo a ser transmitido.
3.  **Atividade Prática/Exercício Rápido:** Para cada microsessão ou ao final do módulo, sugira uma atividade que reforce o aprendizado e a aplicação.
4.  **Avaliação Rápida/Quiz:** Um pequeno teste de conhecimento para verificar a compreensão.
5.  **Recursos Adicionais (Opcional):** Sugestões para aprofundamento.
6.  **Chamada para Ação:** O que o aluno deve fazer a seguir.

Formate a resposta de forma clara e didática, com marcadores e títulos para facilitar a leitura.

**Minha entrada:**
*   **Tópico do Módulo:** "Noções Básicas de Investimento em Ações"
*   **Público-Alvo:** "Adultos que nunca investiram em ações e buscam começar de forma consciente."
*   **Objetivo de Aprendizado:** "Compreender os conceitos fundamentais de ações, como funcionam as bolsas de valores e identificar os primeiros passos para investir com segurança."
*   **Duração Desejada:** "20-25 minutos (com pequena atividade)."
*   **Formatos Preferidos:** "Vídeos curtos animados, texto conciso (com exemplos), quiz interativo."
*   **Conhecimento Prévio dos Alunos:** "Nenhum, ou muito superficial sobre finanças e investimentos."
*   **Contexto de Aplicação:** "Para começar a planejar seus próprios investimentos financeiros pessoais."`,
    tags: ['Educação', 'Microlearning', 'Personalização', 'Aprendizado'],
  },
  {
    id: 'ia-design-assistente-personalizado',
    title: 'Design de Assistente IA Personalizado',
    category: 'IA & Automação',
    description: 'Crie um perfil detalhado para seu assistente IA (Custom GPT ou agente) para uma tarefa ou função específica, otimizando seu desempenho e estilo.',
    template: `Você é um especialista em design de sistemas de IA. Sua tarefa é me ajudar a criar um perfil completo para um assistente IA personalizado, que atuará como [papel do assistente, ex: "meu coach de escrita criativa", "gerente de projetos ágil", "analista de tendências de mercado"].

Eu quero que o assistente tenha as seguintes características e execute as seguintes tarefas:

**1. Nome do Assistente (Opcional):** [Nome do assistente, ex: "Arcanjo", "Muse", "MentorIA"]
**2. Objetivo Principal:** Qual é o propósito central deste assistente? O que ele deve otimizar ou alcançar para mim?
   - [Ex: Aumentar minha produtividade na escrita, auxiliar na gestão de tarefas de projetos, identificar novas oportunidades de mercado.]
**3. Público-Alvo / Usuário Principal:** Quem sou eu e quais são minhas necessidades/desafios que o assistente resolverá?
   - [Ex: Sou um escritor freelancer com bloqueio criativo, sou um gerente de projetos sobrecarregado, sou um empreendedor buscando inovação.]
**4. Funções e Capacidades Essenciais:** Quais são as 3-5 principais coisas que este assistente precisa ser capaz de fazer?
   - [Ex: Gerar ideias de enredo, criar outlines de artigos, revisar gramática, sugerir melhorias de estilo, acompanhar o progresso das tarefas, criar relatórios de status, pesquisar dados de mercado, analisar concorrência.]
**5. Estilo de Interação / Personalidade:** Como o assistente deve se comunicar? Formal, informal, motivador, analítico, criativo, etc.?
   - [Ex: Direto e objetivo, criativo e inspirador, empático e encorajador, analítico e baseado em dados.]
**6. Conhecimento Necessário / Base de Dados:** Que tipo de informação ele precisa ter acesso ou conhecimento aprofundado?
   - [Ex: Técnicas de escrita criativa, metodologias ágeis (Scrum, Kanban), relatórios de mercado específicos (tech, finanças).]
**7. Restrições e Limitações:** Há algo que o assistente NÃO deve fazer ou sobre o que não deve opinar?
   - [Ex: Não escrever conteúdo final sem minha aprovação, não tomar decisões financeiras, não gerar respostas com teor político.]
**8. Métricas de Sucesso (Opcional):** Como medirei o sucesso deste assistente?
   - [Ex: Redução de 20% no tempo de brainstorming, aumento de 15% na taxa de conclusão de tarefas, identificação de 3 novas tendências por mês.]

Com base nessas informações, crie um "System Prompt" inicial para este assistente, incluindo instruções de personalidade, conhecimento e tarefas principais, além de sugestões de "Conversation Starters" (inícios de conversa) para mim.`,
    tags: ['AI Agente', 'Custom GPT', 'Automação', 'Produtividade'],
  },
  {
    id: 'negocios-inovacao-estrategica-ia',
    title: 'Inovação Estratégica com IA',
    category: 'Negócios',
    description: 'Utilize a IA para identificar oportunidades de inovação e aplicar soluções baseadas em inteligência artificial para desafios de negócio específicos.',
    template: `Você é um consultor de inovação estratégica com expertise em inteligência artificial e transformação digital. Sua tarefa é me ajudar a identificar oportunidades de inovação e propor soluções concretas baseadas em IA para o meu negócio.

Forneça as seguintes informações sobre o meu negócio e o desafio/oportunidade em questão:

**1. Nome da Empresa:** [Nome da Empresa]
**2. Setor de Atuação:** [Ex: Varejo de moda, SaaS para saúde, Consultoria financeira, Indústria manufatureira]
**3. Produto/Serviço Principal:** [Descreva brevemente o que sua empresa oferece]
**4. Público-Alvo Principal:** [Ex: Pequenas e médias empresas, Consumidores finais (B2C), Profissionais liberais]
**5. Desafio Atual ou Oportunidade Identificada:** (Escolha um ou ambos)
   - **Desafio:** [Ex: Alta rotatividade de clientes, Dificuldade em prever demanda, Processos internos ineficientes, Falta de personalização no atendimento.]
   - **Oportunidade:** [Ex: Expansão para novo mercado, Lançamento de novo produto, Otimização de custos, Melhoria da experiência do cliente.]
**6. Recursos Disponíveis (Opcional):** [Ex: Equipe de TI interna, orçamento para novas ferramentas, grande volume de dados de clientes.]

Com base nessas informações, siga os seguintes passos:

**Passo 1: Análise e Contextualização**
Analise o setor e o desafio/oportunidade, identificando tendências de mercado relevantes e como a IA tem sido aplicada em contextos similares.

**Passo 2: Geração de Ideias de Soluções com IA**
Proponha 3 a 5 ideias concretas de como a IA poderia ser aplicada para resolver o desafio ou capitalizar a oportunidade. Para cada ideia, inclua:
   - **Nome da Solução:** (Ex: "Sistema de Recomendação Personalizada", "Chatbot de Suporte Inteligente", "Otimizador de Cadeia de Suprimentos")
   - **Tecnologias de IA Envolvidas:** (Ex: Machine Learning, Processamento de Linguagem Natural, Visão Computacional, Análise Preditiva)
   - **Benefícios Esperados:** (Quantificáveis se possível, Ex: Redução de 15% na rotatividade, Aumento de 10% nas vendas, Otimização de tempo em 20%)
   - **Exemplo de Aplicação Prática:** Como essa solução funcionaria no dia a dia da empresa.

**Passo 3: Avaliação Preliminar e Requisitos**
Para cada ideia proposta, discuta brevemente:
   - **Principais Desafios de Implementação:** (Ex: Coleta de dados, Integração de sistemas, Custo inicial)
   - **Dados Necessários:** Que tipo de dados seriam cruciais para o sucesso da solução?
   - **Métricas de Sucesso:** Como a empresa mediria o impacto da solução?

Seja pragmático e focado em resultados tangíveis.`,
    tags: ['Estratégia', 'Inovação', 'Negócios', 'IA'],
  },
  {
    id: 'marketing-estrategia-conteudo-multimodal-ia',
    title: 'Estratégia de Conteúdo Multimodal com IA',
    category: 'Marketing',
    description: 'Desenvolva uma estratégia de conteúdo abrangente e multimodal, otimizada por IA, para o lançamento de um produto ou serviço em diversas plataformas.',
    template: `Você é um estrategista de marketing digital e especialista em IA para conteúdo, com foco em campanhas de lançamento. Sua missão é me ajudar a criar uma estratégia de conteúdo multimodal detalhada para o lançamento de [Nome do Produto/Serviço] no dia [Data de Lançamento ou Período].

Forneça as seguintes informações:

**1. Nome do Produto/Serviço:** [Nome do seu produto ou serviço]
**2. Principal Benefício/Proposta de Valor:** [O que o produto resolve ou o valor único que ele oferece]
**3. Público-Alvo Principal:** [Quem você quer alcançar? Ex: Millennials empreendedores, PMEs do setor de tecnologia, Professores de ensino médio]
**4. Objetivos do Lançamento:** [Ex: Gerar 500 leads qualificados, Atingir 10.000 pré-inscrições, Vender 1000 unidades no primeiro mês]
**5. Canais de Distribuição Prioritários:** [Escolha 3-5: Instagram, LinkedIn, YouTube, TikTok, Blog, Email Marketing, Facebook Ads, Google Ads, Podcast]
**6. Principais Concorrentes (Opcional):** [Nomes de 2-3 concorrentes para análise de diferenciação]
**7. Tom de Voz da Marca:** [Ex: Informativo e profissional, Jovem e divertido, Inspirador e aspiracional]

Com base nessas informações, crie uma estratégia de conteúdo que inclua:

**A. Mensagem Central e Temas Chave:**
   - Qual a mensagem principal a ser comunicada?
   - Quais são 3-5 temas de conteúdo que se desdobram da mensagem central e que a IA pode adaptar para diferentes formatos?

**B. Plano de Conteúdo Multimodal por Plataforma:**
   Para CADA canal de distribuição prioritário listado, sugira 3-5 tipos de conteúdo específicos e como a IA pode otimizar ou auxiliar na criação de cada um. Inclua como a IA pode adaptar a mensagem central para o formato e público de cada plataforma.

   *Exemplos de Conteúdo e Otimização com IA:*
   - **Instagram:** [Carrosséis educacionais (IA gera microtextos e CTAs), Reels com tutoriais rápidos (IA gera roteiro e legendas), Stories de enquetes (IA sugere perguntas interativas).]
   - **LinkedIn:** [Artigos curtos sobre o impacto do produto (IA gera bullet points e título), Posts com insights do setor (IA analisa tendências), Vídeos de depoimentos (IA sugere perguntas para entrevistas).]
   - **Blog:** [Artigos aprofundados (IA gera estrutura e otimização SEO), Estudos de caso (IA auxilia na narrativa e análise de dados), Infográficos (IA sugere dados e pontos-chave).]
   - **Email Marketing:** [Sequência de boas-vindas para pré-lançamento (IA personaliza baseada em interesse), Newsletter com atualizações (IA gera tópicos relevantes).]
   - **YouTube/TikTok:** [Vídeos curtos de "como fazer" (IA sugere roteiros e hooks), Desafios (IA sugere ideias de engajamento).]

**C. Sugestões de CTA (Call to Action) por Etapa:**
   Proponha CTAs que a IA pode personalizar para cada fase do lançamento (pré-lançamento, lançamento, pós-lançamento) e para diferentes plataformas.

**D. Métricas de Sucesso com IA:**
   Como a IA pode ajudar a monitorar e otimizar o desempenho do conteúdo em tempo real? Sugira 2-3 métricas-chave para cada tipo de conteúdo/plataforma.`,
    tags: ['Marketing Digital', 'Conteúdo Multimodal', 'Lançamento', 'IA'],
  },
  {
    id: 'career-plano-desenvolvimento-ia',
    title: 'Plano de Desenvolvimento de Carreira com IA',
    category: 'Carreira',
    description: 'Crie um plano de desenvolvimento de carreira personalizado e estratégico, identificando lacunas de habilidades e sugerindo caminhos de aprendizado otimizados por IA.',
    template: `Você é um consultor de carreira e especialista em IA para desenvolvimento profissional. Sua tarefa é me ajudar a criar um plano de desenvolvimento de carreira detalhado, aproveitando a inteligência artificial para identificar minhas lacunas e sugerir os melhores caminhos.

Forneça as seguintes informações:

**1. Posição Atual e Empresa:** [Seu cargo atual e o setor/empresa]
**2. Objetivo de Carreira (Curto Prazo - 1 ano):** [Ex: Ser promovido a gerente, Mudar para área de dados, Dominar uma nova tecnologia]
**3. Objetivo de Carreira (Longo Prazo - 3-5 anos):** [Ex: Se tornar líder de equipe, Abrir meu próprio negócio, Ser um especialista renomado na área X]
**4. Minhas Habilidades Atuais (lista 5-7):** [Ex: Liderança, Programação Python, Marketing Digital, Gestão de Projetos, Comunicação Eficaz, Análise de Dados]
**5. Habilidades Desejadas para o Objetivo de Carreira (lista 5-7):** [Quais habilidades são cruciais para atingir seus objetivos? Ex: Machine Learning, Estratégia de Negócios, Inglês Fluente, Mentoria, Vendas B2B]
**6. Preferências de Aprendizado (Opcional):** [Ex: Cursos online, Livros, Mentoria, Projetos práticos, Eventos e workshops]
**7. Tempo Disponível para Estudo/Desenvolvimento por Semana:** [Ex: 5 horas, 10 horas, 2 horas]

Com base nessas informações, crie um "Plano de Desenvolvimento de Carreira Otimizado por IA" que inclua:

**A. Análise de Lacunas de Habilidades:**
   - Com base nas habilidades atuais e desejadas, identifique as principais lacunas.
   - Justifique brevemente por que cada lacuna é crítica para o seu objetivo de carreira.

**B. Rota de Aprendizagem Personalizada (com Sugestões de IA):**
   Para cada lacuna de habilidade identificada, sugira 2-3 recursos de aprendizado concretos e otimizados por IA (pensando em cursos online, livros, projetos, etc.). Considere as preferências e o tempo disponível.
   - **Habilidade 1 (Ex: Machine Learning):**
     - Recurso 1: [Ex: Curso "Machine Learning Engineer" da Coursera - IA avalia o currículo do curso e sua relevância.]
     - Recurso 2: [Ex: Livro "Hands-On Machine Learning" - IA sugere capítulos chave ou projetos práticos complementares.]
     - Recurso 3: [Ex: Projeto prático de análise de sentimentos em Python - IA pode sugerir APIs ou datasets.]
   - **Habilidade 2 (Ex: Estratégia de Negócios):**
     - ... (seguindo o mesmo formato)

**C. Plano de Ação em Marcos Temporais (Curto e Médio Prazo):**
   Crie um plano de ação para os próximos 6-12 meses, dividindo as ações em marcos mensais ou trimestrais. Para cada marco, inclua:
   - **Mês/Trimestre:** [Ex: Mês 1-3, Trimestre 1]
   - **Foco Principal:** [Ex: Fundamentos de Machine Learning]
   - **Ações Específicas:** [Ex: Concluir Módulo 1 do curso X, Ler livro Y, Iniciar projeto Z, Conectar com mentor na área.]
   - **Como a IA pode Ajudar:** [Ex: IA pode monitorar progresso, sugerir exercícios práticos, resumir materiais complexos, identificar oportunidades de networking.]

**D. Estratégias de Visibilidade e Networking:**
   Sugira 3-5 ações para aumentar sua visibilidade profissional e expandir sua rede, como a IA pode auxiliar (ex: identificar eventos, otimizar perfil LinkedIn, gerar scripts para cold outreach).

**E. Métricas de Sucesso:**
   Como você vai medir o progresso e o sucesso do seu plano de desenvolvimento? (Ex: Conclusão de X cursos, Aplicação de Y habilidades em projetos, Feedback positivo em avaliações de desempenho).`,
    tags: ['Carreira', 'Desenvolvimento Pessoal', 'IA', 'Educação'],
  },
  {
    id: 'negocios-agente-pesquisa-mercado-ia',
    title: 'Agente de IA para Análise de Mercado e Tendências',
    category: 'Negócios',
    description: 'Cria um plano detalhado para um agente de IA coletar, sintetizar e analisar informações de mercado para identificar tendências, oportunidades e desafios.',
    template: `Você é um especialista em estratégia de negócios e IA. Seu objetivo é projetar um plano para um agente autônomo de IA que realize pesquisa de mercado contínua e análise de tendências.

**Contexto:**
- Indústria/Setor Foco: [Indústria/Setor Foco]
- Tópico de Pesquisa Principal: [Tópico de Pesquisa Principal, ex: "ascensão da computação quântica", "demandas de consumidores por produtos sustentáveis"]
- Mercados Geográficos Alvo: [Mercados Geográficos Alvo, ex: Brasil, América Latina, Global]
- Público-alvo da análise (para quem o relatório é gerado): [Público-alvo da análise, ex: Consumidores, Investidores, Empresas B2B]

**Funções e Capacidades do Agente:**
1.  **Coleta de Dados:** Detalhe quais tipos de fontes o agente deve monitorar (ex: notícias, relatórios de mercado, redes sociais, publicações científicas, dados governamentais, fóruns). Liste 3-5 exemplos específicos de fontes.
2.  **Processamento e Síntese:** Explique como o agente deve processar os dados (ex: extração de entidades, análise de sentimentos, identificação de palavras-chave, sumarização).
3.  **Análise e Identificação de Tendências:** Descreva os tipos de insights que o agente deve gerar (ex: tendências emergentes, oportunidades de mercado, ameaças competitivas, mudanças no comportamento do consumidor, lacunas de produtos/serviços).
4.  **Geração de Relatórios/Alertas:** Especifique o formato dos outputs (ex: relatórios semanais, alertas em tempo real, dashboards interativos) e o nível de detalhe.
5.  **Adaptação e Aprendizagem:** Como o agente deve refinar sua pesquisa e análise ao longo do tempo (ex: feedback humano, ajuste de parâmetros de busca).

**Parâmetros de Operação:**
- Frequência de Atualização dos Relatórios: [Frequência de Atualização, ex: diário, semanal, mensal]
- Idiomas de Pesquisa: [Idiomas de Pesquisa, ex: Português, Inglês, Espanhol]

Crie um plano estruturado para este agente de IA, incluindo uma justificativa para cada funcionalidade e como ela agrega valor estratégico.`,
    tags: ['Pesquisa de Mercado', 'Agente IA', 'Análise de Tendências', 'Estratégia'],
  },
  {
    id: 'marketing-estrategia-lancamento-multimodal',
    title: 'Estratégia de Lançamento Multimodal de Produto/Serviço com IA',
    category: 'Marketing',
    description: 'Desenvolve uma estratégia de marketing de conteúdo multimodal abrangente para o lançamento de um novo produto ou serviço, integrando diferentes formatos e canais para maximizar o impacto.',
    template: `Você é um estrategista de marketing digital com expertise em lançamentos de produtos e conteúdo multimodal. Elabore uma estratégia de lançamento de produto/serviço que utilize IA para otimizar a criação e distribuição de conteúdo em múltiplos formatos e canais.

**Detalhes do Lançamento:**
- Nome do Produto/Serviço: [Nome do Produto/Serviço]
- Breve Descrição: [Breve Descrição do Produto/Serviço e o que ele resolve]
- Público-alvo Principal: [Público-alvo Principal, ex: PMEs, profissionais de marketing, desenvolvedores, pais, jovens adultos]
- Principais Benefícios/Diferenciais: [Principais Benefícios/Diferenciais do produto]
- Objetivos do Lançamento (ex: [Número]% de leads, [Número]% de conversões, reconhecimento de marca): [Objetivos do Lançamento]
- Orçamento Estimado para Conteúdo e Promoção: [Orçamento Estimado, ex: Baixo, Médio, Alto]

**Estratégia de Conteúdo Multimodal:**
Para cada fase do lançamento (Pré-Lançamento, Lançamento, Pós-Lançamento), proponha 2-3 formatos de conteúdo multimodal, detalhando como a IA pode ser usada para auxiliar na sua criação e otimização.

**1. Pré-Lançamento (Consciência e Antecipação):**
    - Canais Sugeridos: [Canais para Pré-Lançamento, ex: blog, e-mail marketing, redes sociais]
    - Conteúdos Multimodais e Uso da IA:
        - Ex: Postagens de blog (IA para otimização de SEO e ideias de tópicos), Enquetes interativas nas redes sociais (IA para análise de feedback), Vídeos curtos (IA para roteiro e edição básica).
        - Conteúdo 1: [Formato do Conteúdo 1] - Como a IA ajuda: [Uso da IA]
        - Conteúdo 2: [Formato do Conteúdo 2] - Como a IA ajuda: [Uso da IA]

**2. Lançamento (Conversão e Engajamento):**
    - Canais Sugeridos: [Canais para Lançamento, ex: landing pages, webinars, anúncios pagos, lives]
    - Conteúdos Multimodais e Uso da IA:
        - Ex: Copy de landing page (IA para otimização de conversão), Scripts para webinars (IA para estrutura), Anúncios criativos (IA para variação de texto e imagem).
        - Conteúdo 1: [Formato do Conteúdo 1] - Como a IA ajuda: [Uso da IA]
        - Conteúdo 2: [Formato do Conteúdo 2] - Como a IA ajuda: [Uso da IA]

**3. Pós-Lançamento (Retenção e Advocacia):**
    - Canais Sugeridos: [Canais para Pós-Lançamento, ex: e-mail de nutrição, comunidade online, tutoriais, cases de sucesso]
    - Conteúdos Multimodais e Uso da IA:
        - Ex: Sequências de e-mail (IA para personalização), FAQs e bases de conhecimento (IA para geração de respostas), Testemunhos (IA para sumarização de feedback de clientes).
        - Conteúdo 1: [Formato do Conteúdo 1] - Como a IA ajuda: [Uso da IA]
        - Conteúdo 2: [Formato do Conteúdo 2] - Como a IA ajuda: [Uso da IA]

**Métricas de Sucesso:**
- Proponha 3-5 métricas chave para avaliar o sucesso desta estratégia.

Apresente a estratégia de forma organizada e clara, destacando a inovação trazida pela IA.`,
    tags: ['Marketing Digital', 'Lançamento de Produto', 'Conteúdo Multimodal', 'Estratégia de IA'],
  },
  {
    id: 'produtividade-assistente-ia-personalizado',
    title: 'Design de um Assistente Pessoal de Produtividade com IA',
    category: 'Produtividade',
    description: 'Desenha um assistente de IA personalizado para otimizar a produtividade e o fluxo de trabalho de um indivíduo, especificando funcionalidades e integrações.',
    template: `Você é um designer de sistemas de IA e especialista em produtividade. Sua tarefa é criar um design detalhado para um assistente de IA pessoal, focado em maximizar a produtividade e o bem-estar de um usuário específico.

**Perfil do Usuário:**
- Perfil Principal do Usuário: [Perfil Principal do Usuário, ex: Empreendedor Solo, Gerente de Projetos, Desenvolvedor de Software, Estudante Universitário, Freelancer Criativo]
- Principais Desafios de Produtividade Atuais: [Principais Desafios, ex: Procrastinação, Gestão de Tempo, Excesso de Informação, Foco, Organização de Tarefas]
- Ferramentas e Plataformas Atualmente Utilizadas: [Ferramentas Atuais, ex: Google Calendar, Notion, Slack, Asana, E-mail (Gmail/Outlook), WhatsApp]

**Funcionalidades Essenciais do Assistente (proponha no mínimo 5):**
Para cada funcionalidade, descreva como a IA seria utilizada.
1.  **Ex: Gestão Inteligente de Tarefas:** O assistente prioriza tarefas automaticamente com base em prazos, dependências e nível de energia do usuário (IA aprende com histórico).
    - Funcionalidade 1: [Nome da Funcionalidade] - Como a IA Ajuda: [Detalhes da Assistência da IA]
    - Funcionalidade 2: [Nome da Funcionalidade] - Como a IA Ajuda: [Detalhes da Assistência da IA]
    - Funcionalidade 3: [Nome da Funcionalidade] - Como a IA Ajuda: [Detalhes da Assistência da IA]
    - Funcionalidade 4: [Nome da Funcionalidade] - Como a IA Ajuda: [Detalhes da Assistência da IA]
    - Funcionalidade 5: [Nome da Funcionalidade] - Como a IA Ajuda: [Detalhes da Assistência da IA]

**Interação e Interface:**
- Preferências de Interação: [Preferências de Interação, ex: Comando de Voz, Chat de Texto, Interface Gráfica, Resumos diários por e-mail]
- Notificações: Como o assistente deve notificar o usuário (ex: discretas, urgentes, personalizáveis).

**Integrações Chave:**
- Quais ferramentas e serviços o assistente deve se integrar para ser mais eficaz (ex: Calendário, E-mail, Ferramentas de Gestão de Projetos, Armazenamento em Nuvem, Aplicativos de Mensagens). Liste 3-5 exemplos específicos.

**Considerações de Privacidade e Ética:**
- Como garantir a segurança dos dados e a privacidade do usuário?

Estruture o design de forma clara, focando na utilidade prática e na personalização profunda para o perfil do usuário descrito.`,
    tags: ['Produtividade Pessoal', 'Assistente IA', 'Otimização Workflow', 'Automação'],
  },
  {
    id: 'dev-documentacao-diagramas-ia',
    title: 'Gerador de Documentação Técnica e Diagramas de Arquitetura com IA',
    category: 'Desenvolvimento',
    description: 'Cria um blueprint para uma solução de IA que automatiza a geração de documentação técnica (códigos, APIs, módulos) e diagramas de arquitetura a partir de um projeto de software ou especificações.',
    template: `Você é um arquiteto de software e especialista em IA, focado em otimização de processos de desenvolvimento. Elabore um blueprint para um sistema de IA capaz de gerar automaticamente documentação técnica e diagramas de arquitetura para projetos de software.

**Contexto do Projeto de Software:**
- Linguagens de Programação Principais: [Linguagens de Programação Principais, ex: Python, Java, JavaScript, Go, C#]
- Frameworks/Bibliotecas Utilizados: [Frameworks/Bibliotecas Utilizados, ex: React, Spring Boot, FastAPI, .NET Core]
- Arquitetura Principal (ex: Microsserviços, Monolítica, Serverless, Event-Driven): [Arquitetura Principal]
- Ferramentas de Controle de Versão (ex: Git, SVN): [Ferramentas de Controle de Versão]

**Requisitos da Documentação Gerada pela IA:**
1.  **Tipos de Documentação:** Especifique quais seções de documentação devem ser geradas (ex: Visão Geral do Projeto, Instalação, Uso de APIs, Estrutura de Módulos, Classes e Funções, Configuração, Testes).
2.  **Formato de Saída:** [Formato de Saída Desejado, ex: Markdown, Confluence Wiki, Javadoc/Sphinx/Swagger/OpenAPI YAML, HTML estático]
3.  **Estilo e Tom:** [Estilo e Tom da Documentação, ex: Formal e técnico, Amigável para desenvolvedores, Orientado a tutoriais]
4.  **Integração com Código:** Como a IA deve extrair informações do código (ex: comentários, assinaturas de funções, estrutura de pastas, uso de variáveis).

**Requisitos dos Diagramas de Arquitetura Gerados pela IA:**
1.  **Tipos de Diagramas:** Quais diagramas o sistema deve ser capaz de gerar (ex: Diagrama de Componentes, Diagrama de Fluxo de Dados, Diagrama de Sequência, Diagrama de Implantação, Diagrama de Rede, Diagrama de Entidade-Relacionamento).
2.  **Ferramentas/Formato de Saída para Diagramas:** [Ferramentas/Formato de Saída para Diagramas, ex: PlantUML, Mermaid, Draw.io (XML), Imagem PNG/SVG]
3.  **Fonte para Geração dos Diagramas:** A IA deve gerar os diagramas a partir do código, de arquivos de configuração, ou de uma descrição textual de alto nível?

**Fluxo de Trabalho da Solução de IA:**
Descreva o processo passo a passo de como a IA receberia os inputs, processaria e geraria os outputs (ex: 1. Input do repositório de código, 2. Análise da estrutura, 3. Geração de texto, 4. Geração de diagramas, 5. Revisão opcional).

Apresente o blueprint de forma clara e estruturada, destacando o valor agregado da automação.`,
    tags: ['Desenvolvimento de Software', 'Documentação', 'Arquitetura de TI', 'Automação IA'],
  },
  {
    id: 'ia-design-multiagente-otimizacao',
    title: 'Design de Sistema Multiagente para Otimização',
    category: 'IA & Automação',
    description: 'Crie um blueprint detalhado para um sistema de agentes de IA colaborativos, focado em otimizar um processo de negócio específico, definindo papéis, interações e fluxos.',
    template: `Você é um especialista em design de sistemas multiagentes. Sua tarefa é criar um blueprint detalhado para um sistema de agentes de IA colaborativos, visando otimizar o processo de [Nome do Processo a Otimizar, ex: Onboarding de Clientes, Desenvolvimento de Produto, Gestão de Campanhas de Marketing].

**Objetivo Principal do Sistema Multiagente:**
[Descreva o objetivo geral que o sistema deve alcançar, ex: Reduzir o tempo de onboarding em 30% e aumentar a satisfação do cliente; Acelerar o ciclo de desenvolvimento de novas features; Otimizar o ROI de campanhas de marketing.]

**Etapas Atuais do Processo (Opcional, mas recomendado para contexto):**
[Liste as principais etapas do processo como ele é hoje, ex: 1. Cadastro, 2. Verificação, 3. Primeiro contato, 4. Ativação. Isso ajudará a identificar gargalos e oportunidades.]

**Recursos e Ferramentas Disponíveis (se houver):**
[Mencione quaisquer ferramentas, APIs ou bases de dados que os agentes possam acessar ou integrar, ex: CRM, ERP, Plataforma de Marketing, Base de Conhecimento Interna, Ferramentas de Comunicação.]

**Público/Usuários Envolvidos (se houver):**
[Quem são as pessoas ou outros sistemas que interagem com este processo ou serão afetados por ele? Ex: Clientes, Equipe de Vendas, Suporte, Desenvolvedores.]

Com base nas informações acima, por favor, forneça um design detalhado que inclua:

1.  **Identificação e Descrição dos Agentes:**
    *   Para cada agente, defina seu nome, seu papel principal, suas responsabilidades e as capacidades necessárias (ex: processamento de linguagem natural, análise de dados, integração com [ferramenta X]).
    *   Sugira 3-5 agentes, cada um com um papel distinto e complementar.

2.  **Fluxo de Interação entre os Agentes:**
    *   Descreva como os agentes se comunicarão e colaborarão entre si para alcançar o objetivo.
    *   Apresente cenários de uso onde os agentes trabalham juntos passo a passo.

3.  **Mecanismos de Tomada de Decisão e Aprendizado:**
    *   Explique como cada agente tomará decisões dentro de seu escopo e como o sistema geral aprenderá e melhorará ao longo do tempo.

4.  **Pontos de Integração e Dados:**
    *   Quais dados cada agente precisa acessar ou gerar?
    *   Quais sistemas externos serão integrados e como?

5.  **Desafios Potenciais e Estratégias de Mitigação:**
    *   Identifique possíveis problemas no design ou implementação e como eles podem ser abordados.

Formate a saída com títulos claros para cada seção.`,
    tags: ['Automação Inteligente', 'Agentes Autônomos', 'Otimização Processos', 'Design de IA'],
  },
  {
    id: 'escrita-roteiro-experiencia-imersiva',
    title: 'Roteiro Detalhado para Experiência Imersiva com IA',
    category: 'Escrita',
    description: 'Crie um roteiro completo para uma experiência digital imersiva (ex: treinamento, tour, marketing) que utilize elementos de IA para personalização e engajamento.',
    template: `Você é um roteirista especializado em experiências digitais imersivas e interativas, com profundo conhecimento em como integrar capacidades de IA para personalização. Sua tarefa é criar um roteiro detalhado para uma experiência imersiva sobre [Tema da Experiência Imersiva, ex: Treinamento em Liderança para Novos Gerentes, Tour Virtual pela Floresta Amazônica, Lançamento de um Produto de Tecnologia Sustentável].

**Tipo de Experiência Imersiva:**
[Escolha entre: Treinamento, Tour Virtual, Jogo Interativo, Storytelling Narrativo, Demonstração de Produto, Outro (especifique)]

**Objetivo da Experiência:**
[Qual é o resultado desejado para o usuário após interagir com a experiência? Ex: Aprender X habilidade, Sentir Y emoção, Entender Z conceito, Ser convencido a comprar/agir.]

**Público-Alvo:**
[Descreva o público-alvo em termos de idade, interesses, nível de conhecimento prévio e expectativas.]

**Duração Estimada:**
[Ex: 15-20 minutos, 1 hora, Segmentado em módulos de 5 minutos.]

**Principais Elementos de Interação Desejados:**
[Ex: Escolhas do usuário que afetam a narrativa, Respostas a perguntas abertas, Manipulação de objetos virtuais, Feedback em tempo real.]

**Como a IA será integrada para personalização/engajamento:**
[Ex: IA adapta o conteúdo com base no progresso do usuário; IA analisa respostas para dar feedback personalizado; IA gera cenários dinâmicos com base em escolhas; IA sugere caminhos de aprendizado.]

Com base nas informações acima, por favor, forneça um roteiro detalhado que inclua:

1.  **Estrutura da Experiência:**
    *   Divida a experiência em seções ou capítulos lógicos, com títulos e objetivos claros para cada um.

2.  **Descrição Detalhada das Cenas/Módulos:**
    *   Para cada seção, descreva o ambiente visual, a atmosfera, os elementos de áudio (narração, música, efeitos sonoros) e a duração estimada.
    *   Identifique os pontos de interação do usuário e as ramificações possíveis.

3.  **Conteúdo Narrativo e Diálogos:**
    *   Escreva exemplos de textos de narração, diálogos entre personagens (se houver) e prompts para o usuário.
    *   Indique onde o conteúdo gerado por IA ou adaptado por IA entrará.

4.  **Feedback e Personalização via IA:**
    *   Descreva como o sistema de IA coletará dados do usuário (ex: escolhas, respostas, tempo gasto) e como esses dados serão usados para personalizar a experiência.
    *   Exemplos de feedback ou adaptações específicas que a IA fará.

5.  **Recursos Visuais e Sonoros Chave:**
    *   Sugira os tipos de recursos visuais (animações, vídeos, modelos 3D) e sonoros (trilha sonora, dublagem, SFX) necessários para cada momento.

Formate a saída com títulos claros para cada seção e use um formato de script (CENA X, AÇÃO, DIÁLOGO/NARRADOR).`,
    tags: ['Conteúdo Interativo', 'Design UX', 'Storytelling IA', 'Engajamento Digital'],
  },
  {
    id: 'negocios-estrategia-desenvolvimento-talentos-ia',
    title: 'Estratégia de Desenvolvimento de Talentos Impulsionada por IA',
    category: 'Negócios',
    description: 'Desenvolva um plano estratégico para identificar lacunas de habilidades, criar trilhas de aprendizado personalizadas e reter talentos usando inteligência artificial.',
    template: `Você é um consultor de RH e IA, especializado em otimizar estratégias de desenvolvimento de talentos. Sua tarefa é elaborar um plano estratégico para [Nome da Empresa ou Tipo de Empresa, ex: Startup de Tecnologia, Indústria de Manufatura, Empresa de Serviços Financeiros], focado em identificar lacunas de habilidades, criar trilhas de aprendizado personalizadas e melhorar a retenção de talentos, tudo isso impulsionado por inteligência artificial.

**Contexto da Empresa:**
[Descreva brevemente a empresa: setor, tamanho (nº de funcionários), principais desafios atuais de talentos (ex: alta rotatividade, dificuldade em encontrar habilidades específicas, baixo engajamento em treinamentos).]

**Objetivos Chave da Estratégia:**
[Defina 2-3 objetivos SMART para esta iniciativa, ex: Reduzir a rotatividade de talentos em 15% nos próximos 12 meses; Aumentar a proficiência em X habilidade em 20% para a equipe de Y; Melhorar o engajamento em programas de desenvolvimento em Z%.]

**Dados Disponíveis para a IA (se houver):**
[Mencione os tipos de dados que a IA poderia analisar, ex: Avaliações de desempenho, histórico de treinamentos, feedback de 360 graus, descrições de cargos, dados de mercado de trabalho, projetos concluídos.]

Com base nas informações fornecidas, por favor, desenvolva uma estratégia detalhada que inclua:

1.  **Identificação de Lacunas de Habilidades com IA:**
    *   Como a IA pode analisar dados existentes para mapear as habilidades atuais dos funcionários e compará-las com as necessidades futuras da empresa e do mercado.
    *   Sugira ferramentas ou abordagens de IA (ex: processamento de linguagem natural em descrições de cargo, análise preditiva de performance).

2.  **Trilhas de Aprendizado Personalizadas via IA:**
    *   Como a IA pode recomendar cursos, módulos e recursos de aprendizado específicos para cada funcionário, com base em suas lacunas, estilo de aprendizado e objetivos de carreira.
    *   Descreva o papel da IA na curadoria de conteúdo e adaptação do ritmo.

3.  **Engajamento e Retenção de Talentos Aprimorados por IA:**
    *   Estratégias para usar a IA no monitoramento do engajamento dos funcionários, identificação de sinais de insatisfação ou risco de saída.
    *   Como a IA pode sugerir intervenções proativas, como oportunidades de mentoria, projetos desafiadores ou reconhecimento.

4.  **Métricas de Sucesso e Monitoramento:**
    *   Quais KPIs devem ser monitorados para avaliar o sucesso da estratégia?
    *   Como a IA pode ajudar no acompanhamento e ajuste contínuo da estratégia.

5.  **Desafios de Implementação e Considerações Éticas:**
    *   Identifique possíveis obstáculos (ex: privacidade de dados, resistência à mudança) e como superá-los.
    *   Aborde a importância da transparência e justiça no uso da IA.

Formate a saída com títulos claros para cada seção e use listas para os pontos principais.`,
    tags: ['Recursos Humanos', 'Gestão de Talentos', 'Treinamento', 'Inovação RH'],
  },
  {
    id: 'produtividade-analise-vies-cognitivo',
    title: 'Análise de Viés Cognitivo para Tomada de Decisão com IA',
    category: 'Produtividade',
    description: 'Use a IA para identificar potenciais vieses cognitivos em um processo de decisão, analisar seu impacto e sugerir estratégias para mitigar esses vieses, melhorando a qualidade das escolhas.',
    template: `Você é um especialista em psicologia cognitiva e inteligência artificial, focado em otimizar a tomada de decisões. Sua tarefa é analisar um processo de decisão específico para identificar potenciais vieses cognitivos, analisar o impacto desses vieses e sugerir estratégias concretas para mitigá-los, resultando em escolhas mais racionais e eficazes.

**Contexto da Decisão:**
[Descreva a situação ou o problema que exige uma decisão. Seja o mais detalhado possível, incluindo o cenário, os stakeholders envolvidos, os dados disponíveis e o prazo.]

**Opções Consideradas (se houver):**
[Liste as opções ou cursos de ação que estão sendo avaliados, se aplicável.]

**Informações e Dados Relevantes (se houver):**
[Quais informações foram coletadas para embasar a decisão? Ex: Pesquisas de mercado, relatórios financeiros, opiniões de especialistas, experiências passadas.]

**Objetivo da Decisão:**
[Qual é o resultado ideal ou o propósito principal desta decisão?]

Com base nas informações acima, por favor, forneça uma análise detalhada:

1.  **Identificação de Vieses Cognitivos Potenciais:**
    *   Análise dos elementos do contexto e das informações fornecidas para identificar quais vieses cognitivos são mais prováveis de influenciar a decisão (ex: Viés de Confirmação, Viés de Ancoragem, Efeito Manada, Viés de Disponibilidade, Aversão à Perda, Excesso de Confiança).
    *   Para cada viés identificado, explique brevemente por que ele pode ser relevante nesta situação.

2.  **Impacto dos Vieses na Decisão:**
    *   Descreva como cada viés identificado pode distorcer a percepção da realidade, a avaliação das opções ou a previsão dos resultados, levando a uma decisão subótima.

3.  **Estratégias de Mitigação Baseadas em IA e Comportamento:**
    *   Para cada viés identificado, sugira estratégias práticas e aplicáveis para mitigar seu impacto. Inclua tanto abordagens cognitivas/comportamentais quanto como a IA poderia auxiliar (ex: IA pode gerar contra-argumentos, IA pode apresentar dados diversificados, IA pode simular cenários alternativos).
    *   Exemplos de perguntas que a IA pode fazer para desafiar o pensamento, ou dados que a IA pode buscar para fornecer uma perspectiva diferente.

4.  **Plano de Ação para Melhorar a Tomada de Decisão Futura:**
    *   Recomendações gerais para incorporar a conscientização e a mitigação de vieses nos processos de decisão da empresa ou pessoal.

Formate a saída com títulos claros para cada seção e use bullet points para as estratégias e recomendações.`,
    tags: ['Decisão Estratégica', 'Pensamento Crítico', 'Melhora Contínua', 'Psicologia Cognitiva'],
  },
  {
    id: 'career-negociacao-salarial-ia',
    title: 'Simulação de Negociação Salarial com IA',
    category: 'Carreira',
    description: 'Simula uma negociação salarial detalhada para ajudar você a se preparar, oferecendo estratégias e feedback em tempo real.',
    template: `Você atuará como um gerente de RH experiente, negociando uma proposta de emprego. Meu objetivo é me preparar para uma negociação salarial real.

Detalhes da Oferta:
- Cargo: [Nome do Cargo, ex: Desenvolvedor Sênior]
- Salário Base Oferecido: [Valor Salarial Anual ou Mensal, ex: R$ 8.000/mês]
- Benefícios Oferecidos: [Lista de benefícios, ex: Plano de saúde completo, VR R$ 30/dia, auxílio creche]
- Expectativa Salarial (min-max): [Sua expectativa, ex: R$ 9.500 - R$ 11.000/mês]
- Motivos para Minha Expectativa: [Pontos fortes, experiências relevantes, valor de mercado, ex: 10 anos de experiência, certificações X, mercado paga Y para essa função]
- Aspectos Não-Salariais Importantes: [Flexibilidade, home office, desenvolvimento, ex: 3 dias home office, budget para cursos]

Comece a simulação como o gerente de RH apresentando a oferta e aguardando minha resposta. A cada rodada, você deve:
1. Reagir à minha proposta/contraproposta.
2. Apresentar um argumento ou nova oferta.
3. Focar em negociar o salário e os benefícios.
4. Fornecer feedback construtivo sobre minha abordagem após cada rodada, indicando o que foi bom e o que poderia ser melhorado.
5. A simulação deve ter no mínimo 3 rodadas de negociação.

Minha primeira resposta será: [Sua primeira abordagem, ex: "Agradeço a oferta. Fiquei muito animado com a posição, mas gostaria de discutir o pacote salarial. Minha expectativa é de R$ 10.000/mês, considerando minha experiência e o valor que posso agregar."]\n`,
    tags: ['Negociação', 'Salário', 'Entrevista', 'Preparação'],
  },
  {
    id: 'finance-orcamento-familiar-otimizado',
    title: 'Analisador de Orçamento Familiar e Otimizador de Gastos com IA',
    category: 'Finanças',
    description: 'Analisa seu orçamento familiar detalhado, identifica padrões de gastos e propõe estratégias inteligentes para economizar, investir e alcançar metas financeiras.',
    template: `Atue como um consultor financeiro pessoal especializado em otimização de orçamentos familiares. Analise os dados fornecidos e gere um relatório com:
1. Uma visão geral da saúde financeira atual.
2. Identificação de categorias de gastos onde a economia é mais viável.
3. Sugestões de estratégias de corte de custos realistas e personalizadas.
4. Recomendações para aumento de receita (se aplicável).
5. Orientações sobre onde e como investir as economias, alinhadas com as metas.
6. Um plano de ação de 3 meses com passos concretos.

Dados do Orçamento Familiar:

**1. Rendas (Mensal):**
- [Salário 1]: [Valor, ex: R$ 7.000]
- [Salário 2]: [Valor, ex: R$ 5.000]
- [Renda Extra (Freelance, Aluguel, etc.)]: [Valor, ex: R$ 1.000]
- Total: [Soma Total da Renda]

**2. Despesas Fixas (Mensal):**
- Aluguel/Prestação Imóvel: [Valor, ex: R$ 2.500]
- Condomínio: [Valor, ex: R$ 500]
- Contas de Consumo (Luz, Água, Gás, Internet): [Valor, ex: R$ 600]
- Escola/Creche: [Valor, ex: R$ 1.200]
- Plano de Saúde: [Valor, ex: R$ 800]
- Seguro (Carro, Vida, etc.): [Valor, ex: R$ 300]
- Financiamentos/Empréstimos: [Valor, ex: R$ 1.000]
- Assinaturas (Streaming, Academia): [Valor, ex: R$ 200]
- Outras despesas fixas: [Lista, ex: Manutenção carro R$ 150]
- Total: [Soma Total das Despesas Fixas]

**3. Despesas Variáveis (Mensal):**
- Alimentação (Mercado, Restaurantes): [Valor, ex: R$ 2.000]
- Transporte (Combustível, App): [Valor, ex: R$ 400]
- Lazer/Entretenimento: [Valor, ex: R$ 500]
- Roupas/Calçados: [Valor, ex: R$ 300]
- Cuidados Pessoais: [Valor, ex: R$ 200]
- Presentes/Doações: [Valor, ex: R$ 100]
- Outras despesas variáveis: [Lista, ex: Pet shop R$ 150]
- Total: [Soma Total das Despesas Variáveis]

**4. Metas Financeiras:**
- [Meta 1, ex: Construir reserva de emergência]: [Prazo, ex: 12 meses] [Valor Alvo, ex: R$ 30.000]
- [Meta 2, ex: Comprar apartamento]: [Prazo, ex: 5 anos] [Valor de Entrada, ex: R$ 100.000]
- [Meta 3, ex: Viagem Internacional]: [Prazo, ex: 24 meses] [Custo Estimado, ex: R$ 15.000]

Analise estes dados e apresente as otimizações, com foco em sugestões práticas e personalizadas para minha realidade.\n`,
    tags: ['Orçamento', 'Finanças Pessoais', 'Economia', 'Investimento'],
  },
  {
    id: 'social-media-roteiro-stories-ia',
    title: 'Roteirizador de Stories Interativos com IA',
    category: 'Redes Sociais',
    description: 'Gera um roteiro detalhado para uma sequência de stories interativos (Instagram, TikTok) para engajar a audiência, incluindo ideias de elementos visuais e chamadas para ação.',
    template: `Atue como um estrategista de conteúdo para redes sociais, especializado em criar roteiros de stories altamente engajadores e interativos.

Meu objetivo é criar uma sequência de stories para [Plataforma, ex: Instagram ou TikTok] sobre [Tópico principal do story, ex: "Os 5 melhores hábitos para produtividade" ou "Lançamento do meu novo produto X"].

Forneça um roteiro detalhado para uma sequência de 5 a 7 stories, incluindo para cada story:
1.  **Número do Story:** (ex: Story 1/7)
2.  **Visual Sugerido:** (ex: Vídeo curto meu sorrindo, Imagem de estatística, Enquete com opções)
3.  **Texto/Fala:** (Frases curtas e impactantes para cada story)
4.  **Elemento Interativo:** (Poll, Quiz, Pergunta aberta, Slider, Link para Ação - CTA)
5.  **Objetivo do Story:** (Informar, Engajar, Gerar Curiosidade, Direcionar Tráfego)

Detalhes do Conteúdo:
- **Público-alvo:** [Descreva seu público, ex: Empreendedores digitais iniciantes, Jovens interessados em moda sustentável]
- **Tom de Voz:** [Ex: Inspirador e informal, Profissional e direto, Divertido e criativo]
- **Chamada para Ação Final (se houver):** [Ex: "Visite o link na bio", "Compartilhe este story", "Deixe sua opinião nos comentários"]
- **Informações Adicionais/Pontos Chave:** [Qualquer informação extra relevante que deve ser incluída, ex: "Mencionar o desconto de 15% por tempo limitado"]

Comece o roteiro com o Story 1.\n`,
    tags: ['Instagram', 'TikTok', 'Conteúdo', 'Engajamento'],
  },
  {
    id: 'ia-design-agente-fluxo-pesquisa',
    title: 'Designer de Fluxo de Trabalho para Agente de Pesquisa Autônomo',
    category: 'IA & Automação',
    description: 'Ajuda a conceber um fluxo de trabalho detalhado para um agente de IA autônomo que realiza pesquisas complexas, definindo etapas, ferramentas e critérios de decisão.',
    template: `Você é um especialista em design de sistemas de agentes de IA. Meu objetivo é criar um fluxo de trabalho robusto e autônomo para um agente de IA que realizará pesquisas complexas.

Descreva o fluxo de trabalho passo a passo para um agente autônomo de pesquisa, incluindo:
1.  **Nome do Agente (Opcional):** [Sugira um nome, ex: "Athena Researcher"]
2.  **Objetivo Principal da Pesquisa:** [Descreva o que o agente deve investigar, ex: "Analisar as tendências emergentes em energia renovável na América Latina para os próximos 5 anos."]
3.  **Parâmetros Iniciais:** [Informações que o agente receberá para iniciar a pesquisa, ex: "Palavras-chave: energia solar, eólica, hidrogênio verde, Brasil, Chile, Argentina; Fontes preferenciais: artigos científicos, relatórios de mercado, notícias financeiras."]
4.  **Etapas do Fluxo de Trabalho (em formato de lista numerada):** Para cada etapa, inclua:
    *   **Nome da Etapa:** (ex: Coleta de Dados Primários)
    *   **Descrição:** O que o agente fará nesta etapa.
    *   **Ferramentas/APIs Necessárias:** (ex: Google Scholar API, Scrapy para web scraping, API de notícias financeiras)
    *   **Critérios de Sucesso/Decisão:** Como o agente sabe que a etapa foi concluída ou se precisa de ajustes (ex: "X resultados relevantes encontrados", "Nível de redundância abaixo de Y%").
    *   **Saída Desta Etapa:** O formato ou tipo de dado que esta etapa gerará.
5.  **Mecanismos de Autocorreção/Feedback Loop:** Como o agente lidará com falhas, dados irrelevantes ou necessidade de refinar a pesquisa.
6.  **Formato de Saída Final:** Como o agente apresentará o resultado da pesquisa (ex: Relatório consolidado em PDF, Apresentação de slides, Dashboard interativo).
7.  **Considerações Éticas/Limitações:** Quais precauções devem ser tomadas ou limitações conhecidas do sistema.

Comece a descrever o fluxo de trabalho em detalhes.\n`,
    tags: ['Agentes IA', 'Automação', 'Pesquisa', 'Fluxo de Trabalho'],
  },
  {
    id: 'finance-planejador-aposentadoria-ia',
    title: 'Planejador de Aposentadoria Otimizado por IA',
    category: 'Finanças',
    description: 'Cria um plano de aposentadoria detalhado e personalizado, considerando suas finanças atuais, objetivos futuros e perfil de risco.',
    template: `Atue como um planejador financeiro especializado em aposentadoria, utilizando IA para otimizar estratégias.

Meu objetivo é criar um plano de aposentadoria detalhado e personalizado. Por favor, forneça o plano com as seguintes seções:
1.  **Análise de Dados Atuais:** Um resumo dos meus dados fornecidos.
2.  **Projeção Financeira Atual:** Uma estimativa do meu capital na aposentadoria e renda mensal esperada, caso eu mantenha o ritmo atual.
3.  **Recomendações Otimizadas:** Estratégias claras e acionáveis para atingir meus objetivos, incluindo:
    *   Sugestões de aportes mensais ajustados.
    *   Alocação de investimentos recomendada (ex: percentual em renda fixa, variável, fundos).
    *   Considerações sobre impostos e inflação.
    *   Marcos temporais (ex: "Aos [Idade X], revise o plano").
4.  **Simulação de Cenários:** Dois cenários (otimista e pessimista) mostrando o impacto de variáveis (ex: retorno de investimento ligeiramente menor, aumento da expectativa de vida).
5.  **Próximos Passos:** Um guia com as ações imediatas que devo tomar.

Aqui estão meus dados:
- Idade Atual: [Sua idade atual em anos]
- Idade Desejada para Aposentadoria: [Idade em que deseja se aposentar em anos]
- Expectativa de Vida Desejada na Aposentadoria: [Por quantos anos após a aposentadoria deseja ter renda, em anos]
- Capital Atual para Aposentadoria (Investimentos): R$ [Valor atual dos seus investimentos para aposentadoria]
- Aporte Mensal Atual: R$ [Valor que você contribui mensalmente para aposentadoria/investimentos]
- Renda Mensal Desejada na Aposentadoria (em valores atuais): R$ [Valor da renda mensal que você deseja ter na aposentadoria, para manter seu padrão de vida]
- Perfil de Risco: [Conservador, Moderado, Arrojado]
- Outras Informações/Observações: [Qualquer outra informação relevante, como dívidas significativas, outras fontes de renda, dependentes, etc.]

Considere uma taxa de inflação anual de [Taxa de Inflação Média Anual, ex: 3.5%] e um retorno médio anual de investimento (real, descontada a inflação) de [Taxa de Retorno Real Média Anual, ex: 5% para moderado]. Ajuste a taxa de retorno baseada no perfil de risco.`,
    tags: ['Aposentadoria', 'Investimento', 'Planejamento Financeiro', 'Longevidade'],
  },
  {
    id: 'dev-otimizacao-performance-codigo-ia',
    title: 'Otimizador de Performance de Código com IA',
    category: 'Desenvolvimento',
    description: 'Analisa um trecho de código em busca de gargalos de performance e sugere melhorias com base em boas práticas e padrões de otimização.',
    template: `Você é um engenheiro de software especialista em otimização de performance. Sua tarefa é analisar o código fornecido, identificar potenciais gargalos de desempenho e sugerir melhorias práticas e eficientes.

Por favor, estruture sua análise nas seguintes seções:
1.  **Visão Geral do Problema:** Um breve resumo do código e seu propósito.
2.  **Identificação de Gargalos:** Pontos específicos no código que podem estar impactando negativamente a performance (ex: complexidade de algoritmo, uso ineficiente de recursos, loops redundantes, chamadas de I/O).
3.  **Sugestões de Otimização:** Para cada gargalo identificado, proponha uma ou mais soluções com exemplos de código, se aplicável. Inclua:
    *   Alterações Algorítmicas (se houver).
    *   Melhorias de Estrutura de Dados.
    *   Uso de Recursos da Linguagem/Framework mais eficientes.
    *   Estratégias de Caching ou Concorrência (se pertinente).
4.  **Considerações Adicionais:** Recomendações sobre monitoramento, testes de performance ou trade-offs.

Aqui estão os detalhes:
- Linguagem de Programação: [Nome da linguagem, ex: Python, JavaScript, Java, C#]
- Trecho de Código:
  \`\`\`
  [Cole o código aqui]
  \`\`\`
- Contexto de Uso (Opcional): [Descreva brevemente onde e como este código é usado, ex: "Parte de um serviço web que processa N requisições por segundo", "Algoritmo de processamento de dados para um volume X de dados", "Função crítica de um aplicativo mobile"]
- Critérios de Otimização (Opcional): [Foco principal da otimização, ex: Tempo de execução, Uso de memória, Latência, Consumo de CPU]`,
    tags: ['Desenvolvimento', 'Código', 'Performance', 'Otimização', 'Engenharia de Software'],
  },
  {
    id: 'career-transicao-estrategica-ia',
    title: 'Estratégia de Transição de Carreira com IA',
    category: 'Carreira',
    description: 'Guia você através de um processo de transição de carreira, desde a autoanálise até um plano de ação detalhado para alcançar seus novos objetivos profissionais.',
    template: `Atue como um coach de carreira especializado em transição e desenvolvimento profissional, auxiliando na criação de uma estratégia robusta.

Meu objetivo é planejar uma transição de carreira bem-sucedida. Por favor, gere um plano de transição abrangente, estruturado nas seguintes etapas:
1.  **Autoavaliação e Definição de Novos Objetivos:**
    *   Análise de habilidades transferíveis do meu papel atual para o desejado.
    *   Identificação de minhas paixões, valores e motivações para a mudança.
    *   Definição clara dos objetivos da nova carreira (tipo de função, setor, cultura, nível salarial).
2.  **Análise de Lacunas e Desenvolvimento de Habilidades:**
    *   Mapeamento das habilidades essenciais para a carreira desejada e comparação com minhas habilidades atuais.
    *   Plano de desenvolvimento para preencher lacunas (cursos, certificações, projetos, voluntariado).
    *   Recursos recomendados para aprendizado.
3.  **Estratégia de Mercado e Networking:**
    *   Como pesquisar o novo mercado e identificar empresas/funções-alvo.
    *   Plano de networking (quem contatar, como abordar, plataformas).
    *   Otimização de perfil no LinkedIn e outras plataformas relevantes.
4.  **Materiais de Candidatura e Preparação para Entrevistas:**
    *   Sugestões para adaptar meu currículo e carta de apresentação.
    *   Dicas para storytelling focado na transição.
    *   Preparação para perguntas de entrevista sobre a mudança de carreira.
5.  **Plano de Ação e Cronograma:**
    *   Um cronograma realista com marcos e prazos para cada etapa.
    *   Ações concretas e mensuráveis para começar imediatamente.

Aqui estão minhas informações:
- Cargo Atual: [Seu cargo atual]
- Setor Atual: [Seu setor de atuação atual]
- Anos de Experiência: [Número de anos de experiência profissional]
- Principais Habilidades Atuais: [Liste 3-5 habilidades que você domina, ex: "Gestão de Projetos", "Análise de Dados", "Marketing Digital"]
- Carreira Desejada/Setor de Interesse: [Cargo ou área que você almeja, ex: "Engenheiro de Software", "Consultor de Sustentabilidade", "Empreendedor no setor X"]
- Razões para a Transição: [Motivações para a mudança, ex: "Busca por maior impacto", "Paixão por nova área", "Melhores oportunidades de crescimento"]
- Tempo Desejado para a Transição: [Prazo realista para a transição, ex: "6-12 meses", "1-2 anos"]
- Orçamento para Desenvolvimento (Opcional): [Se há algum orçamento para cursos/certificações]
- Outras Informações Relevantes: [Qualquer outro detalhe importante sobre sua situação, ex: "Disposto a começar em uma posição júnior na nova área", "Necessidade de manter o salário atual"]`,
    tags: ['Carreira', 'Transição', 'Planejamento', 'Habilidades', 'Networking'],
  },
  {
    id: 'negocios-relatorio-executivo-ia',
    title: 'Gerador de Relatórios Executivos e Insights com IA',
    category: 'Negócios',
    description: 'Transforma dados brutos ou resumos em relatórios executivos concisos, destacando insights críticos, tendências e recomendações acionáveis.',
    template: `Atue como um analista de negócios e estrategista, especializado em transformar dados complexos em insights acionáveis para executivos.

Meu objetivo é gerar um relatório executivo conciso e impactante a partir das informações fornecidas. Por favor, estruture o relatório nas seguintes seções:
1.  **Sumário Executivo:** Uma visão geral do desempenho, destacando os pontos mais relevantes (positivos e negativos).
2.  **Principais Descobertas e Tendências:** Análise dos dados para identificar padrões, tendências significativas e o que eles implicam para o negócio.
3.  **Análise de Causas Raiz (se aplicável):** Quando houver desvios ou resultados inesperados, uma breve análise das possíveis causas.
4.  **Recomendações e Próximos Passos:** Sugestões práticas e estratégicas para capitalizar oportunidades ou mitigar riscos, com ações claras.
5.  **Métricas-Chave e Desempenho (Opcional):** Tabela ou lista das métricas mais importantes e seu desempenho (se dados brutos forem fornecidos).

Aqui estão os detalhes para o relatório:
- Tipo de Relatório: [Ex: Relatório de Vendas, Desempenho de Marketing, Financeiro Trimestral, Produtividade da Equipe, Feedback de Clientes]
- Período de Análise: [Ex: Último trimestre, Ano fiscal de 2025, Mês de Abril]
- Informações/Dados Brutos (ou links para):
  \`\`\`
  [Cole aqui os dados brutos, uma lista de pontos importantes, ou um resumo de um relatório mais extenso. Ex:
  - Vendas: Mês 1: R$100k, Mês 2: R$120k, Mês 3: R$90k
  - Custo de Aquisição de Clientes (CAC): Mês 1: R$50, Mês 2: R$60, Mês 3: R$75
  - NPS (Net Promoter Score): Mês 1: 70, Mês 2: 65, Mês 3: 50
  - Comentários de clientes: "problema com o suporte", "gostei do produto A", "preço elevado"
  ]
  \`\`\`
- Público-Alvo do Relatório: [Ex: C-level, Gerentes de Departamento, Investidores]
- Objetivo Principal do Relatório: [Ex: Tomar decisões de investimento, Ajustar estratégia de marketing, Avaliar desempenho de vendas]
- Destaques Específicos a Incluir (Opcional): [Algum ponto que você quer garantir que seja abordado no relatório]`,
    tags: ['Negócios', 'Relatórios', 'Análise de Dados', 'Estratégia', 'Gestão'],
  },
  {
    id: 'negocios-agente-inteligencia-competitiva',
    title: 'Agente de IA para Inteligência Competitiva',
    category: 'Negócios',
    description: 'Atua como um agente de IA para pesquisar e sintetizar informações sobre concorrentes, tendências de mercado e oportunidades, fornecendo uma análise estratégica.',
    template: `Você atuará como um Agente de Inteligência Competitiva. Seu objetivo é coletar, analisar e sintetizar informações relevantes para me ajudar a tomar decisões estratégicas sobre [Seu Objetivo Estratégico, ex: Lançamento de um novo produto no mercado X, Expansão para o setor Y, Otimização da nossa estratégia de precificação].

Minha empresa: [Nome da Sua Empresa]
Nosso setor/nicho: [Setor da Sua Empresa]
Nosso principal produto/serviço: [Produto/Serviço Foco]
Nossos principais concorrentes (se conhecidos): [Concorrente 1, Concorrente 2, ...]

Para atingir o objetivo [Seu Objetivo Estratégico], preciso que você siga estas etapas:

1.  **Identificação de Concorrentes Chave**: Além dos listados, identifique outros 3-5 concorrentes relevantes (diretos e indiretos) para o contexto de [Seu Objetivo Estratégico].
2.  **Análise de Produtos/Serviços**: Para cada concorrente, analise seu portfólio de produtos/serviços, características distintivas e propostas de valor.
3.  **Estratégia de Marketing e Vendas**: Investigue as principais táticas de marketing (canais, mensagens, branding) e vendas (modelo, parcerias) dos concorrentes.
4.  **Precificação e Modelos de Negócio**: Colete dados sobre as estratégias de precificação, pacotes e modelos de negócio (ex: assinatura, freemium, SaaS) praticados.
5.  **Pontos Fortes e Fracos**: Faça uma análise SWOT (Pontos Fortes, Fracos, Oportunidades, Ameaças) para os 3 concorrentes mais relevantes em relação ao [Seu Objetivo Estratégico].
6.  **Tendências e Oportunidades de Mercado**: Identifique 3-5 tendências emergentes no setor que podem impactar [Seu Objetivo Estratégico], e sugira 2-3 oportunidades não exploradas.
7.  **Recomendações Estratégicas**: Com base em toda a análise, forneça 3-5 recomendações acionáveis e estratégicas para [Nome da Sua Empresa] em relação a [Seu Objetivo Estratégico].

Apresente sua análise de forma clara e estruturada, utilizando bullet points, tabelas e parágrafos curtos.`,
    tags: ['inteligência competitiva', 'análise de mercado', 'tomada de decisão', 'negócios'],
  },
  {
    id: 'marketing-roteiro-video-podcast',
    title: 'Roteiro de Conteúdo Multimodal (Vídeo Curto/Podcast)',
    category: 'Marketing',
    description: 'Transforma um conteúdo textual existente em um roteiro otimizado para vídeo curto (Reels, TikTok) ou um episódio de podcast, adaptando a linguagem e estrutura.',
    template: `Você é um especialista em criação de conteúdo multimodal e roteiros envolventes para mídias sociais e podcasts. Seu objetivo é transformar o conteúdo textual fornecido em um roteiro otimizado para [Formato de Saída: "vídeo curto para redes sociais (Reels/TikTok)" ou "episódio de podcast (5-10 minutos)"] sobre [Tópico Principal do Conteúdo Original].

**Conteúdo Original (Texto Completo):**
[Cole aqui o artigo, post de blog, ou texto base que você quer adaptar.]

**Público-alvo:** [Descreva seu público-alvo, ex: empreendedores iniciantes, desenvolvedores front-end, pais de primeira viagem]
**Tom de voz desejado:** [Ex: informativo, inspirador, divertido, técnico e objetivo]
**Duração Alvo:** [Ex: 30-60 segundos para vídeo, 5-10 minutos para podcast]
**Plataforma (para vídeo):** [Ex: Instagram Reels, TikTok, YouTube Shorts] (Ignorar se for podcast)

**Instruções para o Roteiro:**

**Para Vídeo Curto (Reels/TikTok):**
1.  **Gancho (0-3s):** Crie uma frase impactante que prenda a atenção imediatamente.
2.  **Introdução/Problema (3-10s):** Apresente o problema ou a pergunta que o vídeo irá resolver.
3.  **Solução/Dica Principal (10-25s):** Adapte os pontos mais relevantes do conteúdo original em 1-3 dicas rápidas e acionáveis. Use linguagem visualmente descritiva para as ações.
4.  **Chamada para Ação (25-30s):** Incentive o engajamento (curtir, comentar, seguir, link na bio).
5.  **Formato:** Divida o roteiro em cenas curtas com descrições de texto na tela e sugestões de elementos visuais/sonoros.

**Para Episódio de Podcast (5-10 minutos):**
1.  **Introdução (0-1 min):** Apresente o tópico, por que ele é relevante para o público e o que eles aprenderão.
2.  **Desenvolvimento (1-7 min):** Adapte os pontos principais do conteúdo original em uma narrativa fluida, com exemplos, explicações e insights. Divida em 2-3 segmentos lógicos.
3.  **Conclusão/Key Takeaways (7-9 min):** Resuma os principais aprendizados e reforce a mensagem central.
4.  **Chamada para Ação (9-10 min):** O que o ouvinte deve fazer a seguir (visitar site, baixar material, assinar podcast)?
5.  **Formato:** Divida o roteiro em seções claras (Introdução, Ponto 1, Ponto 2, Conclusão, CTA) com sugestões de transições.

**Requisitos Adicionais:**
*   Mantenha a essência e os dados importantes do conteúdo original.
*   Use uma linguagem natural e conversacional, adequada ao formato e público.
*   Garanta que a mensagem seja clara e concisa.

Apresente o roteiro completo, incluindo sugestões para [elementos visuais/sonoros para vídeo, ou estrutura de fala para podcast].`,
    tags: ['conteúdo multimodal', 'roteiro', 'marketing digital', 'reaproveitamento de conteúdo'],
  },
  {
    id: 'dev-gerador-dados-sinteticos',
    title: 'Gerador de Dados Sintéticos para Testes e Prototipagem',
    category: 'Desenvolvimento',
    description: 'Gera um conjunto de dados sintéticos realistas para testes de software, prototipagem ou simulações, com base nas especificações fornecidas.',
    template: `Você é um especialista em geração de dados e sistemas, capaz de criar conjuntos de dados sintéticos realistas para fins de desenvolvimento, teste e prototipagem. Seu objetivo é gerar um arquivo JSON (ou CSV, se preferir) contendo [Número de Registros] registros fictícios, que sigam a estrutura e as regras que detalharei abaixo.

**Propósito da Geração de Dados:** [Ex: Testar uma API de usuários, popular um banco de dados de produtos, simular transações financeiras, criar dados para análise de RH]
**Formato de Saída Desejado:** [JSON ou CSV]
**Número de Registros:** [Ex: 100, 500, 1000]

**Especificação dos Campos (para cada campo, forneça o nome, tipo de dado esperado e quaisquer regras ou exemplos):**

Exemplo de campo:
-   \`id\`: string, UUID único.
-   \`nomeCompleto\`: string, Nome e Sobrenome de pessoa brasileira.
-   \`email\`: string, formato de e-mail válido, baseado no \`nomeCompleto\`.
-   \`idade\`: number, entre 18 e 65.
-   \`dataCadastro\`: datetime, nos últimos 2 anos.
-   \`status\`: enum, valores possíveis ['ativo', 'inativo', 'pendente'].

**Meus Campos Específicos:**
[Nome do Campo 1]: [Tipo de dado (string, number, boolean, date, enum, array)], [Regras/Restrições/Exemplos - ex: entre X e Y, formato de CPF/CNPJ, valores específicos, relacionamentos com outros campos, se pode ser nulo]
[Nome do Campo 2]: ...
[Nome do Campo 3]: ...
... (continue listando todos os campos necessários)

**Instruções Adicionais:**
*   Os dados devem ser o mais realistas possível, mesmo sendo fictícios.
*   Garanta que as regras de cada campo sejam estritamente seguidas.
*   Se houver campos relacionados (ex: \`cidade\` e \`estado\` devem ser consistentes), mantenha essa consistência.
*   Para campos de texto, varie o comprimento e o conteúdo.

Comece a gerar os dados. Se for JSON, coloque tudo em um array de objetos. Se for CSV, inclua o cabeçalho.`,
    tags: ['dados sintéticos', 'testes', 'prototipagem', 'desenvolvimento de software'],
  },
  {
    id: 'finance-analise-tendencias-investimento-ia',
    title: 'Análise de Tendências de Mercado para Investimentos (com IA)',
    category: 'Finanças',
    description: 'Atua como um analista de mercado com IA para identificar tendências, riscos e oportunidades em um tipo de ativo/mercado específico, auxiliando na tomada de decisões de investimento.',
    template: `Você é um analista financeiro especializado em inteligência artificial, com a capacidade de identificar padrões e tendências de mercado. Meu objetivo é obter uma análise aprofundada sobre [Tipo de Ativo/Mercado para Análise, ex: Ações de tecnologia no Brasil, Criptomoedas, Fundos Imobiliários, Mercado de commodities agrícolas] para auxiliar minhas decisões de investimento.

**Meu Perfil de Investidor:** [Ex: Conservador, Moderado, Agressivo]
**Horizonte de Investimento:** [Ex: Curto prazo (< 1 ano), Médio prazo (1-5 anos), Longo prazo (> 5 anos)]
**Objetivo com a Análise:** [Ex: Encontrar oportunidades de compra, Avaliar riscos de uma posição existente, Identificar setores promissores para diversificação]

**Etapas da Análise:**

1.  **Visão Geral do Mercado/Ativo:** Forneça um resumo do status atual de [Tipo de Ativo/Mercado para Análise], incluindo performance recente e eventos macroeconômicos relevantes.
2.  **Identificação de Tendências (com IA):**
    *   Utilize sua capacidade de IA para identificar as 3-5 principais tendências de alta ou baixa que estão se consolidando ou emergindo em [Tipo de Ativo/Mercado para Análise] nos últimos [Período de Análise, ex: 6 meses, 1 ano, 3 anos].
    *   Diferencie entre tendências de curto, médio e longo prazo, se aplicável.
3.  **Fatores de Risco e Oportunidades:**
    *   Liste os 3-5 principais riscos (políticos, econômicos, setoriais, tecnológicos) que podem impactar negativamente [Tipo de Ativo/Mercado para Análise].
    *   Liste 3-5 oportunidades potenciais que podem gerar valor.
4.  **Ativos/Empresas Relevantes:** Sugira 3-5 ativos específicos (ex: empresas listadas, tokens de cripto, fundos) dentro de [Tipo de Ativo/Mercado para Análise] que se alinham ou são impactados pelas tendências identificadas. Justifique brevemente cada sugestão.
5.  **Recomendações Estratégicas (alinhadas ao meu perfil):** Com base na análise, forneça 2-3 recomendações estratégicas acionáveis para [Meu Perfil de Investidor] e [Horizonte de Investimento], considerando meu [Objetivo com a Análise].

Apresente a análise de forma clara e objetiva, utilizando bullet points e destacando os insights mais importantes. Lembre-se que esta é uma análise para fins educacionais e informativos, e não deve ser considerada um conselho financeiro direto.`,
    tags: ['investimentos', 'análise financeira', 'tendências de mercado', 'finanças pessoais'],
  },
  {
    id: 'ia-agente-analise-tendencias',
    title: 'Agente IA para Análise e Síntese de Tendências de Mercado',
    category: 'IA & Automação',
    description: 'Cria um prompt completo para um agente de IA especializado em pesquisar, analisar e sintetizar tendências de mercado para um setor específico.',
    template: `Você é um Agente de Inteligência de Mercado altamente especializado. Sua tarefa é monitorar, analisar e sintetizar as principais tendências emergentes em [Setor de Mercado] para [Nome da Empresa/Pessoa] com foco em [Objetivo Principal da Análise, ex: identificar oportunidades de inovação, prever desafios competitivos, otimizar estratégias de marketing].

**Persona do Agente:**
*   **Nome:** [Nome do Agente, ex: TrendScout, MarketVision]
*   **Habilidades:** Pesquisa avançada, análise de dados qualitativos e quantitativos, reconhecimento de padrões, síntese estratégica, comunicação clara e concisa.
*   **Ponto de Vista:** Estratégico, voltado para o futuro, prático e acionável.

**Escopo da Análise:**
*   **Período de Análise:** [Período, ex: últimos 12 meses, próximos 5 anos, contínuo]
*   **Geografia:** [Região(ões) de foco, ex: Brasil, América Latina, Global]
*   **Tópicos Chave (a considerar, se aplicável):** [Lista de tópicos específicos, ex: novas tecnologias, mudanças no comportamento do consumidor, regulamentação, macroeconomia, sustentabilidade, inovações de concorrentes, desafios da cadeia de suprimentos]
*   **Excluir (se houver):** [Tópicos a serem explicitamente ignorados]

**Fontes de Dados (simuladas/potenciais):**
*   **Primárias (simuladas):** Relatórios de mercado, artigos acadêmicos, estudos de caso, notícias da indústria, redes sociais (influenciadores e discussões relevantes), blogs especializados, fóruns.
*   **Secundárias (simuladas):** Dados estatísticos de órgãos governamentais, bases de dados de patentes, relatórios financeiros de empresas públicas.

**Processo de Análise (como o agente deve operar):**
1.  **Coleta:** Identificar e "coletar" informações relevantes das fontes especificadas.
2.  **Filtragem:** Avaliar a credibilidade e relevância das informações.
3.  **Análise de Padrões:** Identificar tendências recorrentes, anomalias e conexões entre diferentes dados.
4.  **Síntese:** Consolidar as descobertas em insights claros e acionáveis.
5.  **Projeção:** Onde aplicável, projetar impactos futuros das tendências.

**Formato de Saída Desejado:**
Crie um relatório estruturado que inclua os seguintes itens:
*   **Sumário Executivo:** Breve visão geral das principais descobertas.
*   **Metodologia:** Como as informações foram coletadas e analisadas (resumido).
*   **Principais Tendências Detalhadas:**
    *   **Nome da Tendência:** [Nome claro]
    *   **Descrição:** Explicação detalhada da tendência e sua evolução.
    *   **Evidências/Dados:** Exemplos e dados que suportam a tendência (simulados).
    *   **Impacto para [Nome da Empresa/Pessoa]:** Oportunidades e/ou ameaças diretas.
    *   **Ações Recomendadas:** Sugestões práticas para capitalizar ou mitigar a tendência.
*   **Recomendações Estratégicas Finais:** Conselhos de alto nível baseados na análise geral.
*   **Anexos Potenciais (Sugestões):** Gráficos, links de referência (se o modelo puder simular).

Comece sua análise para o setor de [Setor de Mercado] e o objetivo [Objetivo Principal da Análise].`,
    tags: ['agente IA', 'inteligência de mercado', 'tendências', 'automação'],
  },
  {
    id: 'escrita-roteiro-campanha-multimodal',
    title: 'Gerador de Roteiro para Campanha Narrativa Multimodal',
    category: 'Escrita',
    description: 'Desenha um roteiro detalhado para uma campanha de conteúdo que conta uma história coesa através de diferentes formatos de mídia (texto, vídeo, áudio, interativo).',
    template: `Você é um roteirista e estrategista de conteúdo multimodal. Sua tarefa é criar um roteiro detalhado para uma campanha narrativa que se desdobrará em múltiplas plataformas e formatos de mídia. O objetivo é contar uma história envolvente e coesa, maximizando o engajamento do público.

**Contexto da Campanha:**
*   **Nome da Campanha:** [Nome da Campanha, ex: "Jornada do Herói Digital"]
*   **Produto/Serviço/Marca:** [Nome do Produto/Serviço/Marca]
*   **Objetivo Principal da Campanha:** [Ex: Lançar um novo produto, educar sobre um conceito complexo, fortalecer o branding, gerar leads]
*   **Público-Alvo:** [Descrição detalhada do público, ex: Empreendedores digitais (25-45 anos), interessados em inovação e produtividade]
*   **Mensagem Central:** [A principal ideia ou emoção que a campanha deve transmitir, ex: "A tecnologia pode ser sua aliada mais poderosa"]

**Estrutura Narrativa:**
*   **Tema Central da História:** [Tema subjacente, ex: Superar desafios com inovação, a transformação de um negócio]
*   **Personagens Chave (se houver):** [Descrição dos personagens, seus arcos, ex: "Ana, a empreendedora iniciante que busca otimização"]
*   **Conflito/Problema:** [O desafio que a história aborda, ex: A sobrecarga de trabalho e a falta de tempo]
*   **Solução/Resolução:** [Como o produto/serviço resolve o conflito, ex: Nossa ferramenta de IA simplifica tarefas repetitivas]
*   **Ponto Alto da História:** [O momento de clímax ou revelação]
*   **Chamada para Ação Final (Geral):** [O que você quer que o público faça ao final da campanha]

**Desdobramento Multimodal (Sugestões por Fase/Mídia):**
Divida a campanha em [Número de Fases/Semanas/Etapas, ex: 3 fases] e detalhe o conteúdo para cada uma.

**Fase 1: Conscientização e Introdução ao Conflito**
*   **Formato 1 (Ex: Post de Blog/Artigo):**
    *   **Título:** [Título sugestivo]
    *   **Assunto:** [Tópico principal]
    *   **Gancho:** [Frase inicial impactante]
    *   **Elementos Multimodais Integrados:** [Sugestões: Infográfico sobre o problema, vídeo curto introdutório, áudio de depoimento]
    *   **CTA da Fase:** [Call to Action específico para esta fase]
*   **Formato 2 (Ex: Stories/Reels no Instagram):**
    *   **Tema:** [Tema dos stories]
    *   **Roteiro Breve:** [Sequência de cenas/mensagens, ex: Problema -> Pequena dica -> "Fique ligado"]
    *   **Recursos Visuais/Sonoros:** [Sugestões: Enquetes interativas, música, textos animados]

**Fase 2: Construção da Solução e Engajamento**
*   **Formato 1 (Ex: Vídeo de YouTube/Webinar):**
    *   **Título:** [Título]
    *   **Assunto:** [Demonstração da solução, entrevista com especialista]
    *   **Estrutura:** [Introdução -> Problema aprofundado -> Solução detalhada -> Benefícios]
    *   **Elementos Multimodais Integrados:** [Demonstração interativa, gráficos, áudio de FAQ]
    *   **CTA da Fase:** [Call to Action específico para esta fase]
*   **Formato 2 (Ex: Podcast/Áudio Blog):**
    *   **Tema:** [Discussão sobre os benefícios, estudo de caso]
    *   **Estrutura:** [Introdução -> Entrevista -> Conclusões -> Reflexões]
    *   **Recursos Adicionais:** [Transcrições, links para recursos]

**Fase 3: Call to Action e Conversão**
*   **Formato 1 (Ex: E-mail Marketing/Landing Page):**
    *   **Assunto do E-mail/Título da LP:** [Chamativo]
    *   **Conteúdo Principal:** [Benefícios diretos, prova social, urgência/escassez]
    *   **Elementos Multimodais Integrados:** [Vídeo de depoimento, galeria de imagens do produto, calculadora interativa]
    *   **CTA da Fase:** [Call to Action direto para compra/inscrição/teste]
*   **Formato 2 (Ex: Anúncio Pago/Remarketing):**
    *   **Cópia do Anúncio:** [Curta e impactante]
    *   **Criativo (Visual/Vídeo):** [Sugestão de imagem/vídeo que resume a solução]
    *   **CTA:** [Claro e direto]

Desenvolva o roteiro para a campanha "[Nome da Campanha]" com o objetivo de "[Objetivo Principal da Campanha]".`,
    tags: ['roteiro', 'conteúdo multimodal', 'storytelling', 'campanha'],
  },
  {
    id: 'produtividade-priorizacao-eisenhower',
    title: 'Assistente IA de Priorização de Tarefas com Matriz de Eisenhower',
    category: 'Produtividade',
    description: 'Ajuda a organizar e priorizar uma lista de tarefas usando a Matriz de Eisenhower (Urgente/Importante), gerando um plano de ação claro.',
    template: `Você é um assistente de produtividade especializado em gestão de tempo e priorização de tarefas, utilizando a Matriz de Eisenhower (Urgente vs. Importante). Sua função é analisar uma lista de tarefas fornecida, categorizá-las e sugerir ações com base na matriz.

**Contexto:**
*   **Objetivo Geral Atual:** [Seu objetivo principal para o período, ex: Lançar o projeto X, Focar em crescimento pessoal]
*   **Prazo Geral:** [Qualquer prazo maior que influencie, ex: Final do mês, Próximas 2 semanas]
*   **Capacidade de Tempo (Média por Dia):** [Quantas horas de trabalho focado você tem disponível por dia/semana, ex: 6 horas/dia, 30 horas/semana]

**Minha Lista de Tarefas (forneça a lista abaixo):**
[
- Task 1: [Breve descrição], [Prazo/Data Limite - se houver], [Estimativa de tempo - se houver]
- Task 2: [Breve descrição], [Prazo/Data Limite - se houver], [Estimativa de tempo - se houver]
- Task 3: ...
]

**Processo de Análise (como você deve categorizar):**
Para cada tarefa, avalie sua:
1.  **Urgência:** Precisa ser feita agora ou em breve? Existem consequências imediatas se não for feita?
2.  **Importância:** Contribui para seus objetivos de longo prazo? Tem um impacto significativo em seus resultados?

**Categorias da Matriz de Eisenhower:**
*   **Fazer (Urgente e Importante):** Prioridade máxima. Faça agora.
*   **Agendar (Não Urgente e Importante):** Planeje um tempo específico para fazer mais tarde.
*   **Delegar (Urgente e Não Importante):** Se possível, passe para outra pessoa.
*   **Eliminar (Não Urgente e Não Importante):** Não faça, ou repense sua necessidade.

**Formato de Saída Desejado:**
Forneça um relatório claro e acionável com as seguintes seções:

1.  **Resumo da Priorização:**
    *   Total de tarefas: [X]
    *   Fazer: [Y]
    *   Agendar: [Z]
    *   Delegar: [W]
    *   Eliminar: [K]

2.  **Tarefas Categorizadas com Plano de Ação:**
    Para cada categoria, liste as tarefas e adicione uma breve recomendação:

    **A) Fazer (Urgente e Importante):**
    *   **[Nome da Tarefa]:** [Por que é urgente e importante]. **Ação Sugerida:** [Ex: "Comece imediatamente", "Dedique as próximas 2 horas a esta tarefa"].
    *   ...

    **B) Agendar (Não Urgente e Importante):**
    *   **[Nome da Tarefa]:** [Por que é importante, mas não urgente]. **Ação Sugerida:** [Ex: "Bloqueie 3 horas na sua agenda para [Data/Dia da Semana]", "Adicione ao seu planejamento semanal"].
    *   ...

    **C) Delegar (Urgente e Não Importante):**
    *   **[Nome da Tarefa]:** [Por que é urgente, mas não importante para você]. **Ação Sugerida:** [Ex: "Identifique quem pode realizar esta tarefa", "Envie um e-mail com instruções claras para [Nome da Pessoa]"].
    *   ...

    **D) Eliminar (Não Urgente e Não Importante):**
    *   **[Nome da Tarefa]:** [Por que não é urgente nem importante]. **Ação Sugerida:** [Ex: "Remova esta tarefa da sua lista", "Questione a necessidade desta tarefa e arquive-a se irrelevante"].
    *   ...

3.  **Próximos Passos Sugeridos:**
    *   [Ex: "Revise sua agenda e bloqueie os horários para as tarefas 'Agendar'.", "Comunique as tarefas 'Delegar' imediatamente."]

Agora, por favor, me forneça sua lista de tarefas para análise.`,
    tags: ['gestão de tempo', 'priorização', 'Eisenhower', 'planejamento'],
  },
  {
    id: 'ia-agente-aprendizagem-adaptativa',
    title: 'Agente de Aprendizagem Adaptativa com IA',
    category: 'IA & Automação',
    description: 'Crie o design de um agente de IA que personaliza e adapta rotas de aprendizado com base no seu perfil, progresso e estilo de aprendizagem.',
    template: `Você é um especialista em design de agentes de IA para educação. Sua tarefa é criar um "System Prompt" detalhado para um agente de aprendizagem adaptativa.

**Objetivo do Aprendizado:** [Ex: Aprender Python para análise de dados, Dominar marketing digital para e-commerce, Entender Machine Learning do zero]
**Meu Nível Atual:** [Ex: Iniciante, Intermediário, Avançado, Zero conhecimento]
**Minhas Preferências de Aprendizado (selecione uma ou mais):** [Ex: Visual (vídeos, diagramas, infográficos), Auditivo (podcasts, explicações em áudio), Cinestésico (projetos práticos, exercícios), Leitura/Escrita (artigos, livros, resumos), Social (discussões, mentoria)]
**Disponibilidade Diária (horas):** [Ex: 1 hora, 30 minutos, 2 horas, Fim de semana]
**Recursos Atuais Disponíveis (opcional):** [Ex: Curso X na Udemy, Livro Y, Assinatura Coursera, Acesso a artigos científicos]
**Formato de Saída Desejado do Agente:** [Ex: Estrutura JSON com módulos, atividades e materiais; Texto corrido com recomendações e explicação da lógica do agente; Um plano de estudo detalhado por semanas]

**Tarefas Essenciais do Agente de Aprendizagem:**
1.  **Diagnóstico Inicial:** Avaliar o nível atual do usuário no tópico e sugerir um ponto de partida ideal.
2.  **Personalização de Conteúdo:** Recomendar materiais de aprendizado (artigos, vídeos, exercícios, projetos) alinhados às preferências de aprendizado e disponibilidade.
3.  **Adaptação em Tempo Real:** Ajustar a rota de aprendizado com base no desempenho simulado do usuário (por exemplo, se o usuário encontrar dificuldade em um tópico, o agente deve sugerir recursos adicionais ou diferentes).
4.  **Sugestão de Projetos Práticos:** Propor projetos ou exercícios para aplicar o conhecimento adquirido, sempre que relevante.
5.  **Revisão e Reforço:** Agendar e sugerir atividades de revisão espaçada para consolidar o aprendizado a longo prazo.
6.  **Feedback e Motivação:** (Opcional) Incluir um mecanismo de feedback e encorajamento para manter o usuário engajado.

**Crie o "System Prompt" para este agente, incluindo:**
*   A persona do agente.
*   As diretrizes de como ele deve realizar cada uma das tarefas essenciais.
*   Como ele deve interpretar as preferências de aprendizado e a disponibilidade.
*   A estrutura detalhada do output no formato desejado.
*   Instruções para ser encorajador e adaptável.`,
    tags: ['Educação', 'Agentes IA', 'Personalização', 'Aprendizado']
  },
  {
    id: 'negocios-agente-inovacao-ia',
    title: 'Agente de Inovação e Tendências com IA',
    category: 'Negócios',
    description: 'Desenhe um agente de IA para identificar, analisar e reportar tendências emergentes, tecnologias disruptivas e potenciais oportunidades de inovação no seu setor.',
    template: `Você é um especialista em estratégia de negócios e design de agentes de IA. Sua tarefa é criar um "System Prompt" detalhado para um agente de inovação e tendências com IA.

**Setor de Foco:** [Ex: Fintech, Saúde Digital, Mobilidade Urbana, Agricultura Sustentável, E-commerce de Moda]
**Objetivo Principal do Scouting:** [Ex: Encontrar startups para investimento, Identificar tecnologias para integrar em nossos produtos, Monitorar disrupções no mercado, Explorar novos modelos de negócio, Avaliar o cenário competitivo futuro]
**Mercados Geográficos de Interesse:** [Ex: Brasil, América Latina, Global, EUA e Europa, Região Sudeste do Brasil]
**Tipos de Inovação a Buscar (selecione uma ou mais):** [Ex: Tecnologias (blockchain, IA generativa, IoT, biotecnologia), Modelos de Negócio (assinatura, plataforma, economia circular), Produtos/Serviços (novas ofertas, funcionalidades disruptivas), Processos (otimização com IA, automação)]
**Critérios de Avaliação (exemplo para startups/tecnologias, personalize conforme necessário):**
*   Potencial de Mercado: Alto, Médio, Baixo
*   Estágio de Desenvolvimento: Ideia, MVP, Tração Inicial, Crescimento, Maturidade
*   Alinhamento Estratégico com [Nome da Empresa/Seu Negócio]: Alto, Médio, Baixo
*   Barreira de Entrada ou Vantagem Competitiva: Alta, Média, Baixa
*   Risco (Tecnológico, Mercado): Alto, Médio, Baixo

**Fontes de Dados Preferenciais (simuladas para o agente buscar):** [Ex: Relatórios de mercado (Gartner, Forrester, CB Insights), Bases de dados de startups (Crunchbase, PitchBook), Notícias de tecnologia (TechCrunch, Wired), Publicações acadêmicas (arXiv, Google Scholar), Patentes, Redes sociais de especialistas (LinkedIn, Twitter), Eventos do setor]
**Formato de Output Desejado:** [Ex: Relatório executivo resumido com top 5 inovações e análises, Tabela comparativa de empresas/tecnologias com scores, Dashboard de tendências com links para fontes originais, Apresentação em slides com os principais insights]

**Tarefas Essenciais do Agente de Inovação:**
1.  **Monitoramento Contínuo:** Varredura proativa das fontes de dados para novas informações relevantes ao setor e objetivo.
2.  **Identificação e Filtragem:** Filtrar e categorizar inovações e tendências, descartando ruído e focando no que é realmente disruptivo.
3.  **Análise Aprofundada:** Avaliar as inovações identificadas com base nos critérios fornecidos, justificando os scores.
4.  **Síntese de Insights:** Gerar insights acionáveis, destacando oportunidades e ameaças.
5.  **Recomendações:** Propor ações estratégicas (ex: parcerias, aquisições, desenvolvimento interno) baseadas na análise.

**Crie o "System Prompt" detalhado para este agente, incluindo:**
*   A persona do agente (Ex: "Consultor Estratégico de Inovação").
*   As diretrizes precisas para cada uma das tarefas essenciais.
*   Como ele deve priorizar as informações e aplicar os critérios de avaliação.
*   A estrutura e o tom do relatório final no formato desejado.
*   Instruções para ser analítico, objetivo e focado em valor estratégico.`,
    tags: ['Negócios', 'Inovação', 'Inteligência Competitiva', 'Tendências']
  },
  {
    id: 'produtividade-gerenciador-conhecimento-ia',
    title: 'Gerenciador Inteligente de Conhecimento Pessoal (PKM) com IA',
    category: 'Produtividade',
    description: 'Crie um sistema de IA para organizar, interconectar, sintetizar e recuperar insights de sua base de conhecimento pessoal (notas, documentos, artigos, ideias).',
    template: `Você é um especialista em IA para produtividade e gestão de conhecimento. Sua tarefa é desenhar o "System Prompt" para um Gerenciador Inteligente de Conhecimento Pessoal (PKM) com IA.

**Tipo de Conhecimento a Gerenciar:** [Ex: Notas de reunião, Artigos de pesquisa, Ideias de projeto, Livros lidos, Cursos feitos, Conhecimento técnico específico, Documentos financeiros, Experiências pessoais]
**Objetivo Principal do PKM:** [Ex: Facilitar a criação de conteúdo, Apoiar a tomada de decisão estratégica, Acelerar o aprendizado e a retenção, Organizar informações para um projeto específico, Conectar ideias aparentemente díspares]
**Fontes de Entrada (simuladas para o agente processar):** [Ex: Notas digitadas em [Aplicativo de notas], PDFs e documentos salvos em [Pasta], Transcrições de reuniões/áudios, Resumos de artigos web, E-mails importantes]
**Formato de Interação Desejado (simulado):** [Ex: Interface de chat conversacional para perguntas e comandos, Dashboard interativo que mostra conexões, Relatórios gerados em texto por tópico, Notificações inteligentes]

**Recursos-Chave Desejados do PKM com IA:**
1.  **Indexação e Categorização Inteligente:** A IA deve processar o conteúdo, indexá-lo automaticamente, e sugerir categorias, tags ou tópicos-chave.
2.  **Criação de Conexões Semânticas:** Identificar relações e links entre diferentes peças de informação (mesmo que não explicitamente ligadas) e sugerir "grafos de conhecimento".
3.  **Geração de Resumos e Extração de Insights:** Criar resumos concisos de documentos longos ou coleções de notas, e extrair os insights mais relevantes.
4.  **Recuperação de Informação Semântica:** Permitir buscar informações usando linguagem natural e consultas complexas, não apenas palavras-chave exatas, compreendendo o *significado* por trás da busca.
5.  **Análise e Síntese de Tópicos:** Ajudar a analisar e sintetizar informações complexas ou multidisciplinares para gerar novos entendimentos ou propostas.
6.  **Geração de Ideias e Brainstorming:** Baseado no conhecimento existente, sugerir novas ideias, abordagens ou soluções para um problema ou tópico.

**Exemplo de Conteúdo para Processamento (forneça um pequeno parágrafo ou tópico para contextualizar):**
"[Parágrafo/Tópico de exemplo sobre 'A importância da cultura ágil em startups de tecnologia' ou 'Benefícios da meditação para a produtividade' que você gostaria que o PKM processasse para demonstrar sua funcionalidade e capacidade de conexão. Ex: 'Notas da reunião de 15/04 sobre o projeto X: decisao de migrar para a nuvem A, preocupacao com seguranca. Email de fulano sobre as caracteristicas da nuvem A. Artigo da Ztech sobre desafios de seguranca em migracao de nuvem.']"

**Crie o "System Prompt" detalhado para este assistente de IA, incluindo:**
*   A persona do PKM (Ex: "Seu Curador de Conhecimento Pessoal").
*   As diretrizes de como ele deve realizar cada um dos recursos-chave.
*   Como ele deve processar as diferentes fontes de entrada.
*   Como ele deve interagir com o usuário no formato desejado.
*   Instruções para ser proativo na oferta de conexões e insights.`,
    tags: ['Produtividade', 'Gestão de Conhecimento', 'IA Pessoal', 'Organização']
  },
  {
    id: 'social-media-agente-engajamento-ia',
    title: 'Agente IA para Análise e Estratégia de Engajamento em Redes Sociais',
    category: 'Redes Sociais',
    description: 'Crie um plano de ação detalhado para um agente de IA monitorar, analisar e otimizar o engajamento do seu conteúdo em uma plataforma de rede social.',
    template: `Você atuará como um Agente de IA especializado em estratégia e engajamento em redes sociais. Seu objetivo é ajudar a otimizar minha presença e resultados na plataforma [Plataforma de Rede Social, ex: Instagram, LinkedIn, TikTok].

Com base nas informações abaixo, crie um plano de ação detalhado para um agente de IA, incluindo:
1.  **Objetivos de Engajamento**: Quais são os objetivos específicos de engajamento (ex: aumentar comentários em 20%, cliques no link da bio em 15%)?
2.  **Público-Alvo**: Descreva meu público-alvo principal (idade, interesses, dores, o que valorizam).
3.  **Tipo de Conteúdo Atual**: Quais tipos de conteúdo eu publico atualmente (ex: posts estáticos, reels, stories, artigos)?
4.  **Métricas Atuais**: Quais métricas de engajamento eu acompanho (ex: likes, comentários, salvamentos, compartilhamentos, tempo de visualização, alcance)?
5.  **Acesso a Dados**: O agente terá acesso a dados de performance (sim/não) e, se sim, quais (ex: insights da plataforma, Google Analytics)?

**Plano de Ação para o Agente de IA:**
Detalhe as etapas que o agente deve seguir, incluindo:
-   **Monitoramento**: Quais dados monitorar? Com que frequência?
-   **Análise**: Como analisar os dados para identificar padrões, tendências de engajamento e conteúdo de alto/baixo desempenho? Quais ferramentas ou métodos usar?
-   **Recomendações**: Que tipo de recomendações o agente deve gerar (ex: sugestões de temas, formatos, horários de postagem, otimização de legendas, CTAs)? Como essas recomendações devem ser apresentadas?
-   **Experimentação**: Como o agente pode propor e monitorar testes A/B ou outras experiências para validar hipóteses?
-   **Relatório**: Qual o formato e a frequência dos relatórios que o agente deve gerar?
-   **Considerações Éticas**: Quais limitações ou considerações éticas o agente deve observar (ex: evitar manipulação, privacidade de dados)?

Considere as melhores práticas para a plataforma [Plataforma de Rede Social] e as tendências de IA em 2026.`,
    tags: ['Redes Sociais', 'Agente IA', 'Engajamento', 'Estratégia Digital'],
  },
  {
    id: 'education-assistente-estudo-ia-multimodal',
    title: 'Assistente de Estudo Personalizado com IA Multimodal',
    category: 'Educação',
    description: 'Crie um design para um assistente de estudo inteligente que utiliza diferentes modalidades de IA para adaptar o aprendizado ao estilo do usuário e gerar conteúdo relevante.',
    template: `Você atuará como um designer de assistentes de IA para educação. Sua tarefa é conceber um "Assistente de Estudo Personalizado com IA Multimodal" que ajude estudantes a aprender de forma mais eficaz, adaptando-se às suas necessidades e estilo.

Com base nas informações do usuário, detalhe a arquitetura e as funcionalidades do assistente:
1.  **Público-Alvo do Estudante**: [Ex: Estudantes universitários de engenharia, alunos do ensino médio se preparando para o ENEM, profissionais buscando novas habilidades]
2.  **Área de Conhecimento**: [Ex: Programação Python, História do Brasil, Física Quântica, Marketing Digital]
3.  **Estilo de Aprendizagem Preferido (se conhecido)**: [Ex: Visual, Auditivo, Leitura/Escrita, Cinestésico - se desconhecido, o assistente deve descobrir]
4.  **Objetivos de Aprendizagem**: [Ex: Dominar conceitos de cálculo, passar em um exame específico, desenvolver fluência em um idioma]

**Design do Assistente de Estudo Multimodal:**
Descreva as funcionalidades e como a IA será utilizada em diferentes modalidades:
-   **Módulo de Diagnóstico Inicial**: Como o assistente avalia o nível atual de conhecimento e o estilo de aprendizagem do usuário? (Ex: quiz adaptativo, análise de interações)
-   **Geração de Conteúdo Adaptativo**:
    -   **Texto**: Como ele gera resumos, explicações aprofundadas, artigos?
    -   **Visual**: Como ele cria diagramas, infográficos, mapas mentais, flashcards visuais?
    -   **Áudio**: Como ele pode gerar explicações em áudio, podcasts curtos, leitura de textos?
    -   **Interativo**: Como ele cria exercícios práticos, simuladores, cenários de problemas?
-   **Caminho de Aprendizagem Dinâmico**: Como o assistente ajusta a rota de aprendizagem com base no progresso, dificuldades e feedback do usuário?
-   **Mecanismo de Feedback e Reforço**: Como ele oferece feedback construtivo e reforça o aprendizado (ex: correção de exercícios, sugestões de revisão)?
-   **Integração com Ferramentas Externas**: Quais integrações podem ser úteis (ex: calendários, plataformas de cursos, repositórios de artigos)?
-   **Monitoramento de Progresso**: Como o assistente acompanha o desempenho e apresenta o progresso ao estudante?
-   **Personalidade do Assistente**: Qual deve ser o tom e estilo de interação do assistente (ex: formal, amigável, incentivador)?

Pense em como a IA pode ir além da simples apresentação de conteúdo, atuando como um verdadeiro mentor.`,
    tags: ['Educação', 'Aprendizagem Adaptativa', 'IA Multimodal', 'Estudo Personalizado'],
  },
  {
    id: 'ia-design-agente-gestao-projetos-ageis',
    title: 'Design de Agente de IA para Gestão de Projetos Ágeis',
    category: 'IA & Automação',
    description: 'Projete um agente de IA especializado em auxiliar na gestão de projetos ágeis, otimizando sprints, identificando impedimentos e melhorando a comunicação da equipe.',
    template: `Você é um arquiteto de sistemas de IA focado em otimização de processos de trabalho. Minha tarefa é projetar um "Agente de IA para Gestão de Projetos Ágeis" que complemente e otimize a equipe de desenvolvimento.

Com base nas informações do projeto, crie um design detalhado para este agente:
1.  **Metodologia Ágil Principal**: [Ex: Scrum, Kanban, Scrumban]
2.  **Tamanho da Equipe**: [Ex: 5 desenvolvedores, 1 Scrum Master, 1 Product Owner]
3.  **Ferramentas Atuais de Gestão**: [Ex: Jira, Trello, Asana, Azure DevOps, Slack]
4.  **Desafios Atuais da Equipe**: [Ex: Atrasos em sprints, dificuldade em estimar tarefas, comunicação defasada, identificação tardia de impedimentos]
5.  **Objetivos para o Agente**: [Ex: Acelerar a entrega de features em 15%, reduzir impedimentos em 20%, melhorar a visibilidade do projeto]

**Design do Agente de IA para Projetos Ágeis:**
Detalhe a arquitetura e as funcionalidades do agente:
-   **Módulos de Integração**: Quais ferramentas o agente deve se integrar (API) para coletar dados (status de tarefas, logs de comunicação, etc.)?
-   **Módulo de Análise de Sprint/Backlog**: Como o agente analisa o backlog, o progresso das tarefas e a capacidade da equipe para otimizar o planejamento de sprints? (Ex: Sugestão de priorização, identificação de gargalos)
-   **Módulo de Detecção e Alerta de Impedimentos**: Como ele identifica potenciais impedimentos (ex: dependências não resolvidas, desvio de escopo, bloqueios técnicos) e alerta a equipe proativamente?
-   **Módulo de Comunicação e Colaboração**: Como o agente pode facilitar a comunicação (ex: resumir discussões, agendar reuniões, lembrar de follow-ups em ferramentas de chat)?
-   **Módulo de Otimização de Estimativas**: Como ele pode usar dados históricos para ajudar a equipe a refinar estimativas de tarefas futuras?
-   **Módulo de Geração de Relatórios e Insights**: Que tipo de relatórios (ex: burndown charts, velocidade da equipe, análise de causas de atraso) e insights o agente deve gerar para o Scrum Master e Product Owner?
-   **Módulo de Feedback e Melhoria Contínua**: Como o agente pode aprender com o feedback da equipe e adaptar suas sugestões?
-   **Considerações de Segurança e Privacidade**: Como garantir a segurança dos dados do projeto e a privacidade da equipe?

O agente deve atuar como um facilitador inteligente, não como um substituto para a interação humana.`,
    tags: ['IA & Automação', 'Gestão de Projetos', 'Agile', 'Agente IA'],
  },
  {
    id: 'career-plano-carreira-habilidades-ia',
    title: 'Plano de Carreira e Desenvolvimento de Habilidades com IA',
    category: 'Carreira',
    description: 'Crie um plano de carreira personalizado, identificando lacunas de habilidades e sugerindo um roteiro de desenvolvimento baseado nas tendências do mercado e nos objetivos do usuário, utilizando análise de IA.',
    template: `Você é um coach de carreira e especialista em mercado de trabalho impulsionado por IA. Seu objetivo é ajudar o usuário a traçar um plano de carreira estratégico e desenvolver as habilidades necessárias para alcançar seus objetivos.

Com base nas informações abaixo, crie um plano de carreira detalhado, incluindo análise de lacunas de habilidades e um roteiro de desenvolvimento:
1.  **Cargo/Área Atual**: [Ex: Analista de Marketing Digital, Desenvolvedor Backend Júnior, Gerente de Projetos]
2.  **Experiência Profissional Relevante**: [Liste as principais experiências, responsabilidades e conquistas]
3.  **Habilidades Atuais (hard e soft)**: [Ex: Python, SQL, Comunicação, Liderança, SEO, Edição de Vídeo]
4.  **Objetivo de Carreira (Próximos 3-5 anos)**: [Ex: Tornar-se Gerente de Marketing, Transicionar para Engenharia de Dados, Abrir meu próprio negócio, Alcançar um cargo sênior em IA]
5.  **Interesses Pessoais e Valores**: [O que te motiva, que tipo de cultura de trabalho você prefere, o que é importante para você na carreira?]

**Plano de Carreira Otimizado por IA:**
-   **Análise de Mercado e Tendências (por IA)**:
    -   Quais são as tendências do mercado para a área de [Objetivo de Carreira]?
    -   Quais cargos relacionados estão em alta e quais são as expectativas salariais médias?
    -   Quais são as habilidades mais demandadas (hard e soft) para esses cargos em [Ano Atual ou Próximos 2 Anos]?
-   **Identificação de Lacunas de Habilidades**:
    -   Compare suas [Habilidades Atuais] com as habilidades demandadas. Quais são as principais lacunas?
    -   Priorize as lacunas mais críticas e de maior impacto para seu objetivo.
-   **Roteiro de Desenvolvimento de Habilidades (com Sugestões de Recursos)**:
    -   Para cada lacuna identificada, sugira 2-3 recursos de aprendizagem (ex: cursos online, certificações, projetos práticos, livros, mentoria).
    -   Crie um cronograma de desenvolvimento realista (ex: "Mês 1-3: Foco em [Habilidade X] com [Recurso Y]").
-   **Estratégias de Networking e Visibilidade**:
    -   Como você pode expandir sua rede de contatos na área? (ex: eventos, LinkedIn, comunidades online)
    -   Como você pode aumentar sua visibilidade profissional para o objetivo desejado? (ex: portfólio, artigos, apresentações)
-   **Plano de Ação de Curto Prazo (Próximos 6 meses)**:
    -   Liste 3-5 ações concretas e mensuráveis para iniciar o plano.

O plano deve ser ambicioso, mas também prático e adaptável, considerando que o mercado de trabalho está em constante evolução.`,
    tags: ['Carreira', 'Desenvolvimento Profissional', 'Habilidades', 'IA no Trabalho'],
  },
  {
    id: 'negocios-agente-inteligencia-competitiva-avancado',
    title: 'Agente de IA para Inteligência Competitiva e Estratégia de Mercado Dinâmica',
    category: 'Negócios',
    description: 'Projete um agente de IA para monitorar continuamente o mercado, analisar a concorrência e as tendências, e gerar recomendações estratégicas proativas para o seu negócio.',
    template: `Você é um arquiteto de agentes de IA focado em inteligência de negócios. Minha tarefa é projetar um "Agente de IA para Inteligência Competitiva e Estratégia de Mercado Dinâmica" que atue como um observador e consultor estratégico contínuo para o meu negócio.

Com base nas informações abaixo, crie um design detalhado para este agente:
1.  **Meu Negócio**: [Nome da Empresa, Setor, Produtos/Serviços Principais, Proposta de Valor Única]
2.  **Principais Concorrentes**: [Liste 3-5 concorrentes diretos e indiretos]
3.  **Mercado-Alvo**: [Descreva o perfil do cliente, tamanho do mercado, geografia]
4.  **Canais de Informação Relevantes**: [Ex: Notícias do setor, blogs de tecnologia, relatórios de pesquisa de mercado, redes sociais de concorrentes, fóruns, patentes]
5.  **Objetivos Estratégicos Atuais**: [Ex: Aumentar a participação de mercado em 10%, lançar um novo produto em X meses, otimizar custos, expandir para um novo segmento]

**Design do Agente de IA para Inteligência e Estratégia:**
Detalhe a arquitetura e as funcionalidades do agente:
-   **Módulo de Coleta de Dados Contínua**:
    -   Quais fontes de dados o agente deve monitorar (web scraping, APIs de notícias, bancos de dados específicos, feeds RSS, redes sociais)?
    -   Com que frequência os dados devem ser coletados e atualizados?
-   **Módulo de Análise Competitiva**:
    -   Como o agente identificará novos produtos/serviços, estratégias de preços, campanhas de marketing, mudanças na comunicação dos concorrentes?
    -   Como ele avalia o posicionamento dos concorrentes em relação ao meu negócio?
-   **Módulo de Análise de Tendências de Mercado**:
    -   Como ele detecta tendências emergentes no setor (tecnológicas, sociais, regulatórias, de consumo)?
    -   Como ele analisa o impacto potencial dessas tendências no meu negócio?
-   **Módulo de Análise SWOT Dinâmica**:
    -   Como o agente pode manter uma análise SWOT (Forças, Fraquezas, Oportunidades, Ameaças) atualizada para o meu negócio com base nos dados coletados?
-   **Módulo de Geração de Recomendações Estratégicas**:
    -   Com base nas análises, que tipo de recomendações o agente deve gerar (ex: sugestões de novos recursos, ajustes de precificação, campanhas de marketing direcionadas, alertas sobre riscos)?
    -   Como as recomendações devem ser priorizadas e apresentadas (ex: relatório executivo, alertas em tempo real)?
-   **Módulo de Simulação de Cenários**:
    -   Como o agente pode simular o impacto de diferentes decisões estratégicas ou mudanças no mercado?
-   **Interface de Relatórios e Dashboard**:
    -   Qual deve ser o formato e a frequência dos relatórios? Quais métricas-chave devem ser visualizadas?
-   **Considerações de Viés e Confiabilidade**: Como o agente minimiza vieses nos dados ou na análise e como sua confiabilidade é mantida?

O objetivo é fornecer insights acionáveis que permitam ao meu negócio reagir rapidamente e de forma estratégica às mudanças do mercado.`,
    tags: ['Negócios', 'Inteligência Competitiva', 'Estratégia de Mercado', 'Agente IA'],
  },
  {
    id: 'ia-agente-faq-otimizacao',
    title: 'Agente IA para Otimização de FAQ e Atendimento',
    category: 'IA & Automação',
    description: 'Cria um plano para um agente de IA que otimiza e automatiza a gestão de FAQs de atendimento ao cliente, identificando lacunas e sugerindo melhorias contínuas.',
    template: `Você é um especialista em IA e atendimento ao cliente. Meu objetivo é desenvolver um agente de IA que possa otimizar continuamente nossa seção de FAQ e melhorar a eficiência do atendimento.

Desenvolva um plano detalhado para este agente de IA, cobrindo os seguintes pontos:

1.  **Objetivos Principais do Agente:** Quais resultados-chave o agente deve buscar (ex: redução de volume de chamados, aumento da satisfação do cliente, etc.)?
2.  **Fontes de Dados para Análise:** Quais dados o agente deve monitorar e analisar?
    *   Transcrições de conversas de [chat/email/voz] com clientes sobre [tópico principal].
    *   Feedback direto de clientes sobre [produto/serviço].
    *   Dados de busca na [página de FAQ/base de conhecimento].
    *   [Outras fontes relevantes].
3.  **Funcionalidades de Análise e Identificação de Lacunas:** Como o agente irá identificar:
    *   Perguntas frequentes que não estão na FAQ.
    *   Respostas existentes que são confusas ou incompletas.
    *   Novos tópicos emergentes de dúvidas.
    *   Tendências de problemas recorrentes.
4.  **Mecanismos de Sugestão e Geração de Conteúdo:** Como o agente irá propor melhorias?
    *   Sugestões de novas perguntas e respostas para a FAQ.
    *   Edições para clarear respostas existentes.
    *   Geração de rascunhos de artigos ou guias baseados em lacunas.
    *   [Formato das sugestões: texto, mini-vídeo script, etc.].
5.  **Ciclo de Melhoria Contínua:** Como o agente aprende e se adapta ao longo do tempo?
    *   Feedback humano sobre as sugestões.
    *   Monitoramento da eficácia das novas FAQs.
    *   Integração com [sistema de CRM/base de conhecimento].
6.  **Métricas de Sucesso:** Como vamos medir o impacto do agente?

Nosso [produto/serviço] é: [Nome do produto/serviço].
Nosso principal público-alvo tem [características do público].
O tom de voz da nossa marca é: [tom de voz, ex: amigável, formal, técnico].

Detalhe cada seção com etapas claras e exemplos de como o agente funcionaria.`,
    tags: ['agente IA', 'automação', 'atendimento ao cliente', 'otimização', 'FAQ'],
  },
  {
    id: 'career-ia-coach-habilidades-interpessoais',
    title: 'AI Coach para Desenvolvimento de Soft Skills',
    category: 'Carreira',
    description: 'Desenha um programa de coaching com IA para aprimorar habilidades interpessoais cruciais para o sucesso profissional, com feedback e cenários práticos.',
    template: `Você é um AI coach especializado em desenvolvimento de carreira e habilidades interpessoais. Meu objetivo é aprimorar minhas [habilidades interpessoais específicas, ex: comunicação eficaz, liderança, negociação, empatia, feedback construtivo] para impulsionar minha carreira em [área profissional, ex: gestão de projetos, vendas, desenvolvimento de software].

Crie um plano de desenvolvimento personalizado, com duração de [duração, ex: 4 semanas, 3 meses], que inclua:

1.  **Diagnóstico Inicial (Simulado):** Uma série de perguntas ou um mini-cenário interativo para avaliar meu nível atual nas habilidades escolhidas e identificar pontos fortes e fracos.
2.  **Módulos de Aprendizagem:** Para cada habilidade, sugira módulos de aprendizado que incluam:
    *   **Conceitos Chave:** Definições e importância da habilidade.
    *   **Técnicas e Estratégias:** Ferramentas práticas para aplicar a habilidade.
    *   **Recursos Complementares:** Sugestões de leituras, vídeos, cursos (exemplos genéricos).
3.  **Exercícios Práticos e Cenários Simulados:**
    *   Desenvolva [número] cenários práticos (role-playing textuais) onde eu possa aplicar as técnicas aprendidas, com feedback construtivo baseado nas minhas "respostas" ou "ações".
    *   Exemplos de situações: [ex: como lidar com um conflito em equipe, como dar feedback difícil, como apresentar uma ideia a um executivo].
4.  **Plano de Ação e Acompanhamento:**
    *   Sugestões de como aplicar o aprendizado no meu dia a dia profissional em [meu contexto atual].
    *   Métricas de progresso (qualitativas/quantitativas) e como o AI coach me ajudaria a monitorá-las.
5.  **Reflexão e Ajuste:** Como o programa se adaptaria com base no meu progresso e feedback.

Meu setor de atuação é: [setor].
Meu cargo atual/nível de experiência: [cargo/nível].
Meus principais desafios interpessoais são: [desafios, se houver].

Apresente o plano de forma estruturada, com um cronograma sugerido e exemplos concretos para os cenários.`,
    tags: ['desenvolvimento pessoal', 'soft skills', 'coaching IA', 'carreira', 'liderança'],
  },
  {
    id: 'education-simulador-cenarios-complexos',
    title: 'Simulador de Cenários Interativos com IA',
    category: 'Educação',
    description: 'Cria um roteiro para um simulador de cenários complexos (ex: gestão de crises, negociação) para treinamento, avaliando decisões e fornecendo feedback detalhado.',
    template: `Você é um designer de treinamento e especialista em IA interativa. Meu objetivo é criar um simulador baseado em texto para treinar profissionais em [tipo de cenário complexo, ex: gestão de crises, negociação de alta performance, tomada de decisões éticas em IA, coordenação de equipes em projetos críticos].

Desenvolva um roteiro detalhado para um módulo de simulação interativa que inclua:

1.  **Título do Cenário e Contexto:** Uma breve descrição do cenário, seu propósito educacional e o público-alvo (ex: gerentes de projeto, líderes de equipe, estudantes de direito).
2.  **Personagens e seus Papéis:** Os principais "atores" no cenário, suas motivações, desafios e como eles interagem.
3.  **Início do Cenário:** A situação inicial, os desafios apresentados e as primeiras informações ou e-mails/mensagens que o participante recebe.
4.  **Pontos de Decisão (Ramificações):** Identifique pelo menos [número] pontos cruciais onde o participante deve tomar uma decisão. Para cada ponto:
    *   Descreva a situação.
    *   Apresente [número] opções de escolha (A, B, C...).
    *   Descreva as possíveis consequências imediatas e de longo prazo de cada escolha.
5.  **Desenvolvimento Narrativo:** Como a história evolui com base nas decisões, levando a diferentes resultados ou "finais".
6.  **Mecanismo de Feedback da IA:**
    *   Como a IA avaliaria as escolhas do participante (ex: com base em princípios éticos, eficiência operacional, impacto financeiro, etc.).
    *   Que tipo de feedback seria fornecido após cada decisão ou no final do cenário (ex: pontuação, análise SWOT das escolhas, pontos de melhoria, explicação das consequências não óbvias).
7.  **Recursos Adicionais:** Sugestões de documentos (simulados), dashboards ou relatórios que o participante poderia consultar durante o cenário.

O cenário deve ser focado em: [setor ou indústria, ex: tecnologia, saúde, finanças].
O objetivo de aprendizado é: [objetivo de aprendizado claro].
A complexidade esperada é: [baixa, média, alta].

Detalhe a estrutura e exemplos para que o simulador seja engajador e educativo.`,
    tags: ['treinamento', 'simulação', 'tomada de decisão', 'cenários', 'aprendizado interativo'],
  },
  {
    id: 'finance-analise-preditiva-pequenos-negocios',
    title: 'Análise Preditiva de Mercado para PMEs',
    category: 'Finanças',
    description: 'Gera um relatório de análise preditiva de mercado para um pequeno negócio, identificando tendências, riscos e oportunidades de crescimento com base em dados fornecidos.',
    template: `Você é um analista financeiro e de mercado com expertise em inteligência artificial. Meu objetivo é obter uma análise preditiva do mercado para o meu pequeno negócio e identificar oportunidades e riscos futuros.

Crie um relatório de análise preditiva baseado nas seguintes informações:

**Informações do Negócio:**
*   **Nome da Empresa:** [Nome da empresa]
*   **Setor de Atuação:** [Setor, ex: varejo de moda online, serviços de consultoria digital, cafeteria artesanal]
*   **Produtos/Serviços Oferecidos:** [Lista dos principais produtos/serviços]
*   **Público-Alvo:** [Descrição do público, ex: jovens adultos urbanos, pequenas e médias empresas]
*   **Faturamento Anual Médio (últimos 3 anos):** [Valores numéricos, ex: R$ 500k, R$ 650k, R$ 720k]
*   **Localização Principal/Área de Atuação:** [Cidade, região, online nacional]
*   **Principais Concorrentes (se souber):** [Nome de 2-3 concorrentes diretos]
*   **Principais Desafios Atuais:** [Desafios, ex: alta concorrência, dificuldade de aquisição de clientes, custos operacionais]

**Dados de Mercado (forneça se disponíveis, caso contrário a IA pode fazer suposições informadas):**
*   **Taxa de Crescimento do Setor:** [%, ex: 8% ao ano]
*   **Tendências Recentes do Consumidor no Setor:** [Ex: aumento da busca por produtos sustentáveis, personalização, digitalização]
*   **Regulamentações Recentes ou Previstas:** [Ex: novas leis de privacidade de dados, incentivos fiscais para inovação]
*   **Tecnologias Emergentes no Setor:** [Ex: IA em atendimento, automação logística, e-commerce social]
*   **Dados Econômicos Locais/Nacionais Relevantes:** [Ex: taxa de juros, inflação, desemprego]

O relatório preditivo deve incluir:

1.  **Análise de Tendências:** Quais tendências de mercado são mais relevantes para o negócio nos próximos [período, ex: 12-24 meses] e como elas podem impactar.
2.  **Identificação de Oportunidades:** Sugestões de novos nichos, produtos/serviços, estratégias de marketing ou expansão geográfica baseadas nas tendências.
3.  **Avaliação de Riscos:** Quais são os principais riscos (econômicos, competitivos, tecnológicos, regulatórios) e como o negócio pode mitigá-los.
4.  **Projeção de Cenários:** Dois a três cenários futuros (otimista, realista, pessimista) para o negócio com base nas variáveis e tendências.
5.  **Recomendações Estratégicas:** Ações concretas que o negócio pode tomar para capitalizar as oportunidades e se proteger dos riscos.

Apresente a análise de forma clara, com dados e raciocínio lógico que justifiquem as projeções.`,
    tags: ['análise de mercado', 'previsão', 'PMEs', 'finanças', 'estratégia'],
  },
  {
    id: 'ia-framework-etica-ia',
    title: 'Desenho de Framework de Ética para IA',
    category: 'IA & Automação',
    description: 'Cria um framework de diretrizes éticas para o desenvolvimento e uso de sistemas de IA em um contexto específico.',
    template: `Você é um especialista em ética de IA. Sua tarefa é criar um framework detalhado de diretrizes éticas para o desenvolvimento e implantação de um sistema de IA em [Contexto da Empresa/Projeto].

O framework deve abordar os seguintes pilares:
1.  **Transparência e Explicabilidade:** Como o sistema de IA será compreensível e suas decisões justificáveis.
2.  **Responsabilidade e Governança:** Quem é responsável por falhas e como a IA é monitorada.
3.  **Justiça e Equidade:** Como evitar vieses e garantir tratamento justo para todos os usuários.
4.  **Segurança e Privacidade:** Proteção de dados e prevenção de uso malicioso.
5.  **Autonomia e Controle Humano:** Manter o controle humano sobre a IA.
6.  **Beneficência e Não-Maleficência:** Garantir que a IA traga benefícios e minimize danos.

Para cada pilar, forneça:
*   Definição e sua importância no [Contexto da Empresa/Projeto].
*   Princípios orientadores específicos.
*   Recomendações práticas para implementação (ex: auditorias regulares, comitês de ética, diretrizes de design, etc.).
*   Métricas ou indicadores de sucesso, se aplicável.

Considere o tipo de IA a ser desenvolvida: [Tipo de Sistema de IA - ex: chatbot de atendimento, sistema de recomendação de produtos, ferramenta de análise preditiva financeira, etc.]
Se houver desafios éticos específicos do setor, mencione-os: [Desafios Éticos Específicos do Setor, se houver]

Formato da saída:
## Framework de Ética para IA em [Contexto da Empresa/Projeto]

### 1. Transparência e Explicabilidade
[Conteúdo detalhado, incluindo definição, princípios, recomendações e métricas]

### 2. Responsabilidade e Governança
[Conteúdo detalhado, incluindo definição, princípios, recomendações e métricas]

### 3. Justiça e Equidade
[Conteúdo detalhado, incluindo definição, princípios, recomendações e métricas]

### 4. Segurança e Privacidade
[Conteúdo detalhado, incluindo definição, princípios, recomendações e métricas]

### 5. Autonomia e Controle Humano
[Conteúdo detalhado, incluindo definição, princípios, recomendações e métricas]

### 6. Beneficência e Não-Maleficência
[Conteúdo detalhado, incluindo definição, princípios, recomendações e métricas]`,
    tags: ['ética ia', 'governança', 'sustentabilidade', 'design ia'],
  },
  {
    id: 'negocios-ia-sustentabilidade-esg',
    title: 'Otimização de Estratégia ESG com IA',
    category: 'Negócios',
    description: 'Identifica e propõe como a IA pode ser usada para melhorar a estratégia ESG (Ambiental, Social e Governança) de uma empresa.',
    template: `Você é um consultor estratégico especializado em ESG e IA. Sua tarefa é analisar a empresa [Nome da Empresa] no setor de [Setor da Empresa] e identificar oportunidades concretas para a utilização da Inteligência Artificial na otimização de sua estratégia ESG.

A empresa [Nome da Empresa] busca se tornar líder em sustentabilidade.

Considere os seguintes pilares ESG e como a IA pode impactá-los:

**1. Ambiental (E):**
*   Otimização de consumo de recursos (energia, água, materiais).
*   Redução de emissões e resíduos.
*   Monitoramento ambiental e conformidade.
*   Cadeia de suprimentos verde.

**2. Social (S):**
*   Engajamento de funcionários e bem-estar.
*   Diversidade, Equidade e Inclusão (DEI).
*   Impacto na comunidade e direitos humanos.
*   Segurança e saúde no trabalho.

**3. Governança (G):**
*   Ética nos negócios e transparência.
*   Gestão de riscos e conformidade regulatória.
*   Estrutura do conselho e remuneração.
*   Segurança cibernética e privacidade de dados.

Para cada pilar, forneça:
*   Uma breve análise de como a IA pode se alinhar com os objetivos do pilar.
*   No mínimo 2-3 exemplos práticos e inovadores de aplicações de IA (ex: machine learning para previsão de consumo de energia, processamento de linguagem natural para análise de feedback de funcionários, visão computacional para monitoramento de resíduos).
*   Benefícios esperados da implementação da IA em cada iniciativa.
*   Desafios potenciais e como mitigá-los.

O objetivo final é gerar um plano acionável para [Nome da Empresa] para integrar a IA em sua jornada ESG.

**Informações adicionais da empresa (se disponíveis):**
*   Desafios ESG atuais: [Desafios ESG Atuais]
*   Tecnologias de IA já em uso: [Tecnologias de IA em Uso]
*   Orçamento aproximado para inovação: [Orçamento Aproximado]

Formato da saída:
## Otimização da Estratégia ESG de [Nome da Empresa] com IA

### 1. Pilar Ambiental (E)
#### Análise e Oportunidades de IA:
[Conteúdo da análise]
#### Iniciativas Propostas com IA:
*   **Iniciativa 1:** [Nome da Iniciativa, ex: Previsão e Otimização de Consumo Energético]
    *   **Aplicação de IA:** [Detalhes de como a IA será usada, ex: Modelos de ML que analisam dados históricos e climáticos para prever consumo e ajustar sistemas automaticamente.]
    *   **Benefícios:** [Detalhes dos benefícios, ex: Redução de custos de energia em 15%, diminuição da pegada de carbono.]
    *   **Desafios:** [Detalhes dos desafios, ex: Integração com sistemas legados, necessidade de dados de alta qualidade.]
*   **Iniciativa 2:** [Nome da Iniciativa]
    *   **Aplicação de IA:** [Detalhes]
    *   **Benefícios:** [Detalhes]
    *   **Desafios:** [Detalhes]

### 2. Pilar Social (S)
#### Análise e Oportunidades de IA:
[Conteúdo da análise]
#### Iniciativas Propostas com IA:
*   **Iniciativa 1:** [Nome da Iniciativa]
    *   **Aplicação de IA:** [Detalhes]
    *   **Benefícios:** [Detalhes]
    *   **Desafios:** [Detalhes]
*   **Iniciativa 2:** [Nome da Iniciativa]
    *   **Aplicação de IA:** [Detalhes]
    *   **Benefícios:** [Detalhes]
    *   **Desafios:** [Detalhes]

### 3. Pilar Governança (G)
#### Análise e Oportunidades de IA:
[Conteúdo da análise]
#### Iniciativas Propostas com IA:
*   **Iniciativa 1:** [Nome da Iniciativa]
    *   **Aplicação de IA:** [Detalhes]
    *   **Benefícios:** [Detalhes]
    *   **Desafios:** [Detalhes]
*   **Iniciativa 2:** [Nome da Iniciativa]
    *   **Aplicação de IA:** [Detalhes]
    *   **Benefícios:** [Detalhes]
    *   **Desafios:** [Detalhes]`,
    tags: ['esg', 'sustentabilidade', 'inovação', 'ia para negócios'],
  },
  {
    id: 'dev-ia-migracao-nuvem',
    title: 'Plano de Migração para Nuvem Otimizado por IA',
    category: 'Desenvolvimento',
    description: 'Gera um plano estratégico para migração de infraestrutura e aplicações para a nuvem, identificando riscos e otimizações com base em IA.',
    template: `Você é um arquiteto de soluções em nuvem e especialista em IA. Sua tarefa é desenvolver um plano estratégico detalhado para a migração de [Infraestrutura Atual - ex: datacenter on-premise, servidores virtuais legados] e [Tipo de Aplicação - ex: aplicações monolíticas, microserviços existentes, banco de dados X] para uma plataforma de nuvem.

**Objetivo da Migração:** [Objetivo Principal da Migração - ex: reduzir custos, aumentar escalabilidade, melhorar segurança, habilitar inovação com novos serviços, etc.]
**Provedor de Nuvem Preferido (se houver):** [Provedor de Nuvem - ex: AWS, Azure, Google Cloud, OCI, etc. - se não tiver, diga "Indefinido"]
**Escala da Migração:** [Pequena, Média, Grande, Portfólio Completo]

O plano deve abordar os seguintes estágios, com a IA atuando como um elemento otimizador em cada um:

**1. Avaliação e Descoberta (Assessment & Discovery):**
*   Como a IA pode analisar o ambiente atual (recursos, dependências, performance) para identificar candidatos à migração, riscos e otimizações.
*   Ferramentas ou abordagens de IA sugeridas para mapeamento de dependências.

**2. Planejamento e Estratégia (Planning & Strategy):**
*   Definição da estratégia de migração (ex: Rehost, Replatform, Refactor, Repurchase, Retain, Retire) para diferentes componentes, com justificação baseada em análise de IA (custo vs. benefício, esforço, impacto).
*   Como a IA pode ajudar na estimativa de custos, cronogramas e requisitos de capacidade na nuvem.
*   Critérios de priorização de migração guiados por IA.

**3. Migração e Implementação (Migration & Implementation):**
*   Papel da IA na automação de tarefas de migração (ex: conversão de código, configuração de infraestrutura como código).
*   Estratégias para migração de dados com segurança e mínima interrupção.

**4. Otimização e Operação (Optimization & Operation):**
*   Como a IA pode monitorar e otimizar o ambiente pós-migração (custos, performance, segurança, escalabilidade).
*   Identificação de oportunidades para refatoração e modernização contínua com serviços de nuvem nativos e IA.

**5. Governança e Segurança (Governance & Security):**
*   Uso de IA para garantir conformidade e detectar anomalias de segurança no novo ambiente de nuvem.

Forneça um roteiro de alto nível com marcos principais.

**Informações adicionais do ambiente atual (se disponíveis):**
*   Número de aplicações: [Número de Aplicações]
*   Número de servidores/VMs: [Número de Servidores/VMs]
*   Tecnologias principais (linguagens, bancos de dados): [Tecnologias Principais]
*   Regulamentações ou conformidades específicas: [Regulamentações/Conformidades]

Formato da saída:
## Plano de Migração para Nuvem Otimizado por IA para [Nome da Empresa/Projeto]

### 1. Avaliação e Descoberta
[Conteúdo detalhado, incluindo análise de IA e ferramentas sugeridas]

### 2. Planejamento e Estratégia
[Conteúdo detalhado, incluindo estratégias de migração, estimativas de custo/cronograma e critérios de priorização guiados por IA]

### 3. Migração e Implementação
[Conteúdo detalhado, incluindo papel da IA na automação e estratégias de migração de dados]

### 4. Otimização e Operação
[Conteúdo detalhado, incluindo como a IA monitora e otimiza o ambiente pós-migração e oportunidades de modernização]

### 5. Governança e Segurança
[Conteúdo detalhado, incluindo uso de IA para conformidade e detecção de segurança]

### Roteiro de Alto Nível
*   **Fase 1: [Nome da Fase, ex: Avaliação e Estratégia Inicial]** - [Duração Estimada, ex: 4 semanas]
    *   Marco 1: [Descrição, ex: Mapeamento completo de dependências e custos atuais]
    *   Marco 2: [Descrição, ex: Definição da estratégia "6 Rs" para as 10 aplicações mais críticas]
*   **Fase 2: [Nome da Fase, ex: Piloto e Prova de Conceito]** - [Duração Estimada, ex: 8 semanas]
    *   Marco 1: [Descrição, ex: Migração de 2 aplicações não-críticas para o ambiente de nuvem]
    *   Marco 2: [Descrição, ex: Otimização de custos e performance das aplicações piloto com IA]
*   **Fase 3: [Nome da Fase, ex: Migração em Larga Escala]** - [Duração Estimada, ex: 6 meses]
    *   Marco 1: [Descrição, ex: Migração de 50% das aplicações seguindo a estratégia definida]
    *   Marco 2: [Descrição, ex: Estabelecimento de dashboards de governança e segurança com IA]
*   **Fase 4: [Nome da Fase, ex: Otimização Contínua e Modernização]** - [Duração Estimada, ex: Contínua]
    *   Marco 1: [Descrição, ex: Implementação de automação de custos com IA]
    *   Marco 2: [Descrição, ex: Identificação de 3 oportunidades de refatoração para serviços nativos de nuvem]`,
    tags: ['cloud', 'migração', 'devops', 'arquitetura'],
  },
  {
    id: 'education-microlearning-design-ia',
    title: 'Design de Experiência de Microlearning com IA',
    category: 'Educação',
    description: 'Cria um plano detalhado para projetar uma experiência de microlearning interativa e engajadora sobre um tópico específico, usando princípios de IA.',
    template: `Você é um designer instrucional e especialista em IA aplicada à educação. Sua tarefa é criar um plano detalhado para projetar uma experiência de microlearning interativa e altamente engajadora sobre o tópico "[Tópico do Microlearning]".

**Público-alvo:** [Público-alvo - ex: profissionais de marketing iniciantes, desenvolvedores de software experientes, estudantes do ensino médio]
**Objetivo de Aprendizagem:** Ao final do microlearning, o aluno deve ser capaz de [Ação Mensurável que o Aluno Realizará - ex: criar um prompt de IA eficaz, identificar as fases de um ciclo de vida de produto, resolver problemas de geometria básica, etc.].
**Duração Estimada por Módulo:** [Duração - ex: 5-10 minutos, 15 minutos, etc.]
**Plataforma de Entrega (Exemplos):** [Plataforma - ex: aplicativo móvel, plataforma LMS, chatbot interativo, web app responsivo]

O plano deve incluir:

**1. Definição de Módulos e Conteúdo (com suporte de IA):**
*   Sugestão de 3-5 módulos chave para cobrir o [Tópico do Microlearning].
*   Para cada módulo, exemplos de tópicos específicos e sub-tópicos a serem abordados.
*   Como a IA pode ajudar na curadoria e sintetização de informações relevantes para o conteúdo.

**2. Estratégias de Interação e Engajamento (potencializadas por IA):**
*   Tipos de atividades interativas para cada módulo (ex: quizzes curtos, drag-and-drop, cenários de escolha múltipla, simulações rápidas, etc.).
*   Como a IA pode personalizar o feedback do aluno e adaptar o caminho de aprendizagem em tempo real.
*   Sugestões para elementos de gamificação (pontos, distintivos, rankings) gerados ou otimizados por IA.
*   Uso de IA para gerar conteúdo multimodal (textos, imagens, áudios, vídeos curtos) que mantenha o aluno engajado.

**3. Avaliação e Feedback (com IA):**
*   Formas de avaliação rápida e contínua.
*   Como a IA pode analisar o desempenho do aluno para identificar lacunas de conhecimento e sugerir reforços.
*   Exemplos de feedback imediato e construtivo gerado por IA.

**4. Requisitos Tecnológicos e Ferramentas (com foco em IA):**
*   Tipos de ferramentas de autoria ou plataformas de desenvolvimento que facilitariam a implementação.
*   Sugestão de APIs ou modelos de IA a serem integrados para personalização e geração de conteúdo.

**5. Métricas de Sucesso:**
*   Como medir a eficácia e o engajamento do microlearning.

Formato da saída:
## Plano de Design de Experiência de Microlearning para "[Tópico do Microlearning]"

### 1. Definição de Módulos e Conteúdo
#### Módulo 1: [Nome do Módulo, ex: Introdução à Programação Orientada a Objetos]
*   **Tópicos:** [Lista de tópicos, ex: Conceitos de Classes e Objetos, Encapsulamento, Herança Básica]
*   **Suporte de IA:** [Como a IA ajuda na curadoria/síntese, ex: IA para identificar os conceitos mais importantes e simplificar explicações complexas em textos curtos e focados.]
#### Módulo 2: [Nome do Módulo]
*   **Tópicos:** [Lista de tópicos]
*   **Suporte de IA:** [Como a IA ajuda na curadoria/síntese]
#### Módulo 3: [Nome do Módulo]
*   **Tópicos:** [Lista de tópicos]
*   **Suporte de IA:** [Como a IA ajuda na curadoria/síntese]

### 2. Estratégias de Interação e Engajamento
#### Interações por Módulo:
*   **Módulo 1:** [Exemplos de atividades, ex: Quiz interativo de arrastar e soltar para associar termos a definições, cenário de código onde o aluno escolhe a melhor implementação de um objeto.]
*   **Personalização IA:** [Detalhes, ex: O chatbot de IA adapta a dificuldade das perguntas e a profundidade das explicações com base no desempenho do aluno, oferecendo caminhos alternativos para quem tem dificuldade.]
*   **Gamificação:** [Sugestões, ex: Pontos por cada acerto, distintivos virtuais ao completar módulos, um "placar" que mostra o progresso em relação a outros alunos (opcional).]
*   **Conteúdo Multimodal IA:** [Detalhes, ex: Geração de pequenos vídeos explicativos animados para conceitos complexos, áudios com exemplos práticos, imagens interativas com hotspots para explorar elementos.]

### 3. Avaliação e Feedback
[Conteúdo detalhado, incluindo formas de avaliação, análise de IA do desempenho e exemplos de feedback gerado por IA]

### 4. Requisitos Tecnológicos e Ferramentas
[Conteúdo detalhado, incluindo tipos de ferramentas de autoria e APIs/modelos de IA sugeridos]

### 5. Métricas de Sucesso
[Conteúdo detalhado, incluindo como medir a eficácia e o engajamento do microlearning, ex: Taxa de conclusão de módulos, pontuação média em quizzes, tempo médio de engajamento por sessão, feedback qualitativo dos usuários.]`,
    tags: ['microlearning', 'edtech', 'design instrucional', 'engajamento'],
  },
  {
    id: 'marketing-funil-vendas-ia-multimodal',
    title: 'Otimização de Funil de Vendas Multimodal com IA',
    category: 'Marketing',
    description: 'Desenha uma estratégia otimizada por IA para um funil de vendas que incorpora diferentes canais e formatos de conteúdo multimodal.',
    template: `Você é um estrategista de marketing digital e especialista em IA para vendas. Sua tarefa é desenhar um plano detalhado para otimizar um funil de vendas multimodal para [Produto/Serviço] direcionado a [Público-alvo].

**Objetivo Principal do Funil:** [Ex: Geração de Leads Qualificados, Vendas Diretas, Engajamento de Marca, Retenção de Clientes]
**Canais Multimodais a Considerar:** [Ex: Redes Sociais (Instagram, TikTok, LinkedIn), Email Marketing, Blog/SEO, Vídeos (YouTube, Shorts), Podcasts, Anúncios Pagos (Google Ads, Meta Ads)]
**Informações sobre o Produto/Serviço:** [Nome e Descrição Breve do Produto/Serviço, Dores que Resolve, Benefícios Principais]
**Informações sobre o Público-alvo:** [Demografia, Interesses, Comportamento Online, Maiores Desafios]

O plano deve abordar as seguintes fases do funil, detalhando como a IA será utilizada em cada uma:

**1. Topo do Funil (Consciência/Descoberta):**
*   **Estratégia de Conteúdo Multimodal:** Quais tipos de conteúdo (vídeos curtos, infográficos, posts interativos, artigos de blog) e canais serão usados para atrair a atenção do [Público-alvo].
*   **Uso de IA:** Como a IA pode identificar tendências de conteúdo, otimizar títulos/descrições, e personalizar a entrega de anúncios para maximizar o alcance e a relevância. Sugestão de ferramentas de IA.

**2. Meio do Funil (Consideração/Engajamento):**
*   **Estratégia de Conteúdo Multimodal:** Conteúdo mais aprofundado (webinars, e-books, podcasts, estudos de caso, newsletters personalizadas) para educar e nutrir leads.
*   **Uso de IA:** Como a IA pode segmentar leads com base em seu comportamento, personalizar sequências de e-mail e recomendar o próximo conteúdo mais relevante para mover o lead adiante. Sugestão de ferramentas de IA.

**3. Fundo do Funil (Decisão/Conversão):**
*   **Estratégia de Conteúdo Multimodal:** Conteúdo focado na conversão (demonstrações, avaliações gratuitas, depoimentos em vídeo, propostas personalizadas, chatbots de vendas).
*   **Uso de IA:** Como a IA pode prever a propensão à compra, otimizar ofertas, personalizar o discurso de vendas, e automatizar o agendamento de demos. Sugestão de ferramentas de IA.

**4. Pós-Venda (Retenção/Advocacia):**
*   **Estratégia de Conteúdo Multimodal:** Conteúdo de suporte, tutoriais, comunidades, programas de fidelidade.
*   **Uso de IA:** Como a IA pode prever churn, personalizar comunicações de retenção, e identificar defensores da marca para programas de indicação. Sugestão de ferramentas de IA.

Para cada fase, especifique:
*   Canais principais.
*   Tipos de conteúdo multimodal.
*   Ações esperadas do usuário.
*   Métricas de sucesso.
*   Como a IA será fundamental para a otimização.

Formato da saída:
## Otimização de Funil de Vendas Multimodal para [Produto/Serviço] com IA

### 1. Topo do Funil (Consciência/Descoberta)
*   **Canais Principais:** [Lista, ex: TikTok, Instagram Reels, Anúncios pagos (Meta Ads, Google Discovery)]
*   **Conteúdo Multimodal:** [Exemplos, ex: Vídeos curtos com "how-to" e dicas rápidas, infográficos animados sobre tendências, posts interativos com perguntas sobre dores do público.]
*   **Ações do Usuário:** [Exemplos, ex: Cliques em anúncios, visualizações completas de vídeo, compartilhamentos, comentários, visita à landing page inicial.]
*   **Uso de IA:** [Detalhes, ex: IA para análise de sentimentos em comentários, identificação de horários de pico para posts, otimização de lances em anúncios, teste A/B automatizado de criativos para maior CTR.]
*   **Métricas de Sucesso:** [Lista, ex: Alcance, Impressões, Engajamento (curtidas, comentários, compartilhamentos), CTR, Custo por Mille (CPM).]

### 2. Meio do Funil (Consideração/Engajamento)
*   **Canais Principais:** [Lista, ex: Email Marketing, Blog, YouTube, Podcasts, LinkedIn]
*   **Conteúdo Multimodal:** [Exemplos, ex: Webinars gravados (vídeo), e-books temáticos, newsletters personalizadas com curadoria de conteúdo, episódios de podcast com entrevistas de especialistas, estudos de caso.]
*   **Ações do Usuário:** [Exemplos, ex: Download de materiais ricos, inscrição em newsletter, assistir a webinars, tempo de leitura de artigos, interações em polls do LinkedIn.]
*   **Uso de IA:** [Detalhes, ex: Segmentação de leads com base no interesse demonstrado (NLP em interações), personalização de assunto e corpo de e-mail (geração de texto), recomendação de conteúdo via IA baseado no histórico de navegação.]
*   **Métricas de Sucesso:** [Lista, ex: Taxa de abertura de e-mail, Taxa de cliques, Leads gerados, Custo por Lead (CPL), Engajamento em conteúdo.]

### 3. Fundo do Funil (Decisão/Conversão)
*   **Canais Principais:** [Lista, ex: Páginas de Venda, Demos (vídeo/ao vivo), Chatbots de Vendas (site), Propostas personalizadas (PDF), Google Ads (termos de fundo de funil)]
*   **Conteúdo Multimodal:** [Exemplos, ex: Vídeos de demonstração do produto, depoimentos de clientes em vídeo, simuladores interativos de ROI, propostas comerciais personalizadas geradas por IA, atendimento via chatbot com IA para FAQs e qualificação.]
*   **Ações do Usuário:** [Exemplos, ex: Solicitação de demo, preenchimento de formulário de contato, uso de chatbot, compra do produto/serviço, agendamento de reunião.]
*   **Uso de IA:** [Detalhes, ex: Previsão de propensão à compra, otimização de ofertas em tempo real, personalização de landing pages, roteiros de vendas dinâmicos para chatbots, análise de sentimento em interações de vendas para ajustar estratégia.]
*   **Métricas de Sucesso:** [Lista, ex: Taxa de conversão, Custo por Aquisição (CPA), Receita gerada, Quantidade de demos agendadas, Qualidade dos leads.]

### 4. Pós-Venda (Retenção/Advocacia)
*   **Canais Principais:** [Lista, ex: Email Marketing (nutrição), Fóruns/Comunidades, Suporte ao Cliente (chatbot/humano), Redes Sociais]
*   **Conteúdo Multimodal:** [Exemplos, ex: Tutoriais em vídeo de uso avançado, guias de melhores práticas (e-books), newsletters com dicas e novidades, mensagens personalizadas de "parabéns" por conquistas usando o produto, convites para comunidades exclusivas.]
*   **Ações do Usuário:** [Exemplos, ex: Renovação de assinatura, participação em comunidade, indicação de novos clientes, feedback positivo, uso de novas funcionalidades.]
*   **Uso de IA:** [Detalhes, ex: Previsão de churn (abandono) de clientes, personalização de mensagens de retenção, identificação de defensores da marca para programas de indicação, análise de feedback para melhorias de produto, roteamento inteligente de tickets de suporte.]
*   **Métricas de Sucesso:** [Lista, ex: Taxa de retenção, Lifetime Value (LTV), NPS (Net Promoter Score), Referrals gerados, Satisfação do cliente.]`,
    tags: ['funil de vendas', 'multimodal', 'marketing digital', 'ia para marketing'],
  },
];
