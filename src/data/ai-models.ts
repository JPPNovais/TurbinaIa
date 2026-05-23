export interface AIModel {
  id: string;
  name: string;
  developer: string;
  category: 'Texto & Código' | 'Geração de Imagem' | 'Automação';
  pricing: string;
  pros: string[];
  cons: string[];
  score: {
    reasoning: number;      // Raciocínio Lógico
    writing: number;        // Escrita Criativa
    coding: number;         // Programação
    speed: number;          // Velocidade de Resposta
    value: number;          // Custo-benefício
  };
  affiliateUrl: string;
  description: string;
}

export const aiModels: AIModel[] = [
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus (GPT-4o)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com limites de uso); ChatGPT Plus: US$ 20/mês (inclui GPT-4o, navegação, geração de imagens DALL-E 3); API GPT-4o: US$ 2.50/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída. GPT-4o mini (lançado em julho de 2024): US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída.',
    pros: [
      'GPT-4o é o modelo carro-chefe da OpenAI, lançado em maio de 2024, otimizado para velocidade e capacidades multimodais nativas.',
      'Processa e gera texto, áudio e imagem de forma coesa e em tempo real, com baixa latência de resposta.',
      'Disponível para usuários gratuitos (com limites) e assinantes Plus.',
      'Melhor desempenho em benchmarks de linguagem, visão e áudio.',
      'API com preço reduzido comparado ao GPT-4 Turbo.',
      'Suporte para 50+ idiomas.'
    ],
    cons: [
      'O modo de voz avançado com GPT-4o foi lançado gradualmente após maio de 2024.',
      'Contexto de 128K tokens, menor que alguns concorrentes como Gemini 1.5 Pro.',
      'Conhecimento limitado até outubro de 2023.',
      'Ainda pode alucinar e apresentar vieses.'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.9,
      coding: 4.8,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, impulsionado pelo modelo GPT-4o, é o carro-chefe multimodal da OpenAI, lançado em maio de 2024. O "o" significa "omni", destacando sua capacidade de processar e gerar texto, áudio e imagem de forma nativa e em tempo real. Oferece interações de baixa latência e recursos avançados de visão, com melhor desempenho em diversos benchmarks e suporte a mais de 50 idiomas. Disponível para usuários gratuitos com limites e para assinantes Plus, o GPT-4o também oferece uma API com custo-benefício aprimorado em comparação com versões anteriores, tornando-o versátil para diversas aplicações.'
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Grátis no Claude.ai e no aplicativo iOS (com acesso a Sonnet e Haiku e limites de uso diários); Plano Pro US$ 20/mês (global, acesso ao Claude 3 Opus); API: US$ 15/milhão de tokens de entrada e US$ 75/milhão de tokens de saída para Claude 3 Opus.',
    pros: [
      'Claude 3 Opus é o modelo carro-chefe da Anthropic, lançado em 4 de março de 2024, para tarefas complexas que exigem análise profunda e compreensão de longo contexto.',
      'Define novos padrões de referência para raciocínio de nível de pós-graduação, conhecimento de nível de graduação e proficiência em codificação.',
      'Desempenho mais forte em codificação, visão e tarefas complexas de várias etapas.',
      'Estilo de escrita natural e humanizado, com melhor compreensão de nuances.',
      'Capacidades de visão de ponta, interpretando gráficos e transcrevendo texto de imagens imperfeitas.',
      'Janela de contexto de 200K tokens.'
    ],
    cons: [
      'Plano gratuito pode ser restritivo em limites de uso diários.',
      'Sem geração de imagem nativa (foco em compreensão visual e texto/código).',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança.',
      'Custo da API é mais alto comparado ao GPT-4o.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 4.8,
      value: 4.2
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude 3 Opus, lançado em 4 de março de 2024, é o modelo de ponta da Anthropic, otimizado para as tarefas mais complexas e multifásicas. Ele estabelece novos benchmarks em raciocínio, conhecimento e codificação, superando significativamente seus predecessores. O modelo se destaca em escrita natural, compreensão de nuances e capacidades avançadas de visão, como a interpretação de gráficos e transcrição de texto de imagens. Com uma janela de contexto de 200K tokens, é ideal para cargas de trabalho profissionais exigentes. Disponível via assinatura Pro no Claude.ai e através de API.'
  },
  {
    id: 'gemini-1-5-pro',
    name: 'Gemini 1.5 Pro',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano Google One AI Premium: US$ 19.99/mês (inclui Gemini Advanced com 1.5 Pro, 2 TB de armazenamento, e outros benefícios Google One); API para Gemini 1.5 Pro: US$ 7.00/milhão de tokens de entrada e US$ 21.00/milhão de tokens de saída para contexto de até 1M de tokens. Reduções de preço de até 64% para tokens de entrada e 52% para tokens de saída para prompts com menos de 128K tokens, efetivas a partir de 1º de outubro de 2024.',
    pros: [
      'Modelo mais poderoso e versátil do Google, com excelente equilíbrio entre qualidade, desempenho e custo.',
      'Janela de contexto de até 1 milhão de tokens (com acesso a 2 milhões de tokens para desenvolvedores), ideal para processamento de grandes volumes de dados (documentos, código, vídeo, áudio).',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição.',
      'Desempenho superior em tarefas complexas que exigem raciocínio profundo, instrução e escrita criativa.',
      'Arquitetura Mixture-of-Experts (MoE) para maior eficiência computacional.',
      'Context caching para reduzir custos em prompts repetidos.'
    ],
    cons: [
      'API pode ser mais cara para contexto completo de 1M de tokens em comparação com alguns concorrentes.',
      'Disponibilidade do contexto de 2 milhões de tokens para todos os usuários pode ser gradual.',
      'Filtros de segurança podem ser excessivamente rígidos.'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.8,
      coding: 5.0,
      speed: 4.7,
      value: 4.6
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 1.5 Pro é o modelo de linguagem multimodal mais avançado do Google, lançado em fevereiro de 2024, com vasta janela de contexto de até 1 milhão de tokens, e acesso a 2 milhões para desenvolvedores, permitindo a análise de grandes volumes de informações em texto, imagem, áudio e vídeo. Baseado em uma arquitetura Mixture-of-Experts (MoE), ele é otimizado para raciocínio complexo, geração de conteúdo e codificação. Os planos de API e a assinatura Google One AI Premium foram atualizados para refletir seu desempenho e versatilidade. Com o lançamento do context caching, busca oferecer um melhor custo-benefício, especialmente para casos de uso com prompts repetidos.'
  },
  {
    id: 'llama-3',
    name: 'Llama 3 (8B/70B)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware). API para Llama 3 (8B): a partir de US$ 0.05/milhão de tokens de entrada e US$ 0.08/milhão de tokens de saída. API para Llama 3 (70B): a partir de US$ 0.59/milhão de tokens de entrada e US$ 0.79/milhão de tokens de saída (via provedores como Groq, Perplexity, etc.).',
    pros: [
      'Llama 3 é a nova geração de modelos "open-weight" da Meta, lançada em 18 de abril de 2024 (versões 8B e 70B).',
      'Desempenho competitivo com modelos proprietários em benchmarks chave, especialmente a versão 70B.',
      'Código "open-weight", pode rodar localmente no seu computador (com hardware adequado).',
      'Janela de contexto de 8K tokens para 8B, e 128K para 70B (via API providers ou planejado para Llama 3.1).',
      'Planos para tornar o Llama 3 multilíngue e multimodal, com contexto mais longo e melhor codificação/raciocínio.',
      'Ecossistema robusto com parceiros e suporte para fine-tuning.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade, especialmente para 70B.',
      'Custos de infraestrutura para modelos maiores via API podem ser significativos.',
      'Ainda não é intrinsecamente multimodal e multilíngue (Llama 3.0).',
      'A janela de contexto nativa (8K) é menor que os modelos proprietários de ponta (para a versão 8B).'
    ],
    score: {
      reasoning: 4.8,
      writing: 4.7,
      coding: 4.7,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'Llama 3, lançado pela Meta em 18 de abril de 2024, é a mais recente geração de modelos "open-weight" em versões de 8B e 70B parâmetros. Ele oferece desempenho competitivo em benchmarks de ponta, rivalizando com modelos proprietários mais caros. O Llama 3 permite uso local com hardware adequado ou acesso via API com preços altamente competitivos. A Meta tem planos ambiciosos para expandir o Llama 3 com capacidades multimodais, multilingues e janelas de contexto mais longas, solidificando sua posição como uma escolha poderosa e flexível para desenvolvedores e empresas que buscam controle e eficiência de custos.'
  },
  {
    id: 'dall-e-3-chatgpt',
    name: 'DALL-E 3 (via ChatGPT Plus)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês); Grátis no Microsoft Copilot (com limitações); API para DALL-E 3: a partir de US$ 0.04 por imagem (para qualidade padrão).',
    pros: [
      'DALL-E 3 é o modelo de geração de imagens da OpenAI, integrado ao ChatGPT (agora impulsionado por GPT-4o), oferecendo excelente compreensão de prompts conversacionais.',
      'Alta qualidade de imagem e boa renderização de texto simples dentro das imagens.',
      'Gera resultados criativos, detalhados e visualmente impressionantes.',
      'Fácil de usar para iniciantes e profissionais, com interface intuitiva via ChatGPT.',
      'Melhor consistência visual em séries de imagens relacionadas.'
    ],
    cons: [
      'Requer assinatura do ChatGPT Plus para uso completo.',
      'Ainda pode ter dificuldades com interpretação de frases muito sutis ou composições excessivamente complexas.',
      'Pode não atingir o fotorrealismo de outros geradores em certos casos (como Midjourney).',
      'Menos controle preciso sobre detalhes como layout e posicionamento de caracteres em comparação com ferramentas mais especializadas.',
      'Resolução máxima pode ser limitada em comparação com concorrentes.'
    ],
    score: {
      reasoning: 4.8,
      writing: 1.0,
      coding: 1.0,
      speed: 4.5,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'DALL-E 3 é o modelo de geração de imagens da OpenAI, totalmente integrado ao ChatGPT, que agora é impulsionado pelo GPT-4o. Ele se destaca pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade e com boa renderização de texto. Disponível para assinantes do ChatGPT Plus, oferece uma experiência de usuário intuitiva para visualizar ideias e gerar conteúdo visual criativo. Apesar de sua facilidade de uso e resultados impressionantes, pode não oferecer o mesmo nível de fotorrealismo ou controle detalhado de ferramentas mais especializadas como Midjourney.'
  },
  {
    id: 'midjourney-v6-1',
    name: 'Midjourney v6.1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'A partir de US$ 10/mês (Plano Básico, ou US$ 96/ano); Planos Standard US$ 30/mês (ou US$ 288/ano), Pro US$ 60/mês (ou US$ 576/ano), Mega US$ 120/mês (ou US$ 1152/ano). Sem plano gratuito no site oficial.',
    pros: [
      'Midjourney v6.1 oferece melhor coerência de imagem (mãos, corpos, etc.), qualidade de imagem aprimorada e texturas mais realistas.',
      'Aproximadamente 25% mais rápido para trabalhos de imagem padrão.',
      'Melhor precisão na renderização de texto (quando usado entre aspas no prompt).',
      'Novos upscalers 2x com melhor qualidade de imagem/textura.',
      'Editor web moderno disponível para assinantes, com recursos de edição e organização.',
      'Melhor interpretação de iluminação, texturas e estilos artísticos.'
    ],
    cons: [
      'Interface principal ainda opera via Discord para alguns recursos.',
      'Não possui plano de testes gratuito no site oficial.',
      'Ainda pode ter vieses de "beleza convencional" em imagens de pessoas.',
      'Não possui um modelo de inpainting/outpainting em V6.1 (volta para V6.0 para esses recursos).',
      'Sem API pública oficial.'
    ],
    score: {
      reasoning: 4.5,
      writing: 2.5,
      coding: 1.0,
      speed: 5.0,
      value: 4.6
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney v6.1, lançado em abril de 2024 como uma atualização do V6, é a versão mais recente para geração de imagens artísticas e fotorrealistas. Ele aprimora a coerência da imagem, a qualidade visual e a precisão na renderização de texto, além de ser aproximadamente 25% mais rápido para gerações padrão. Com novos upscalers e um editor web moderno, é uma ferramenta ideal para designers e criadores que buscam resultados visuais de altíssimo nível. Embora ainda utilize o Discord para algumas interações e não tenha um plano gratuito oficial, sua performance e os aprimoramentos contínuos o mantêm na vanguarda da geração de imagens por IA.'
  },
  {
    id: 'stable-diffusion-3-0',
    name: 'Stable Diffusion 3.0 (Medium/Large/Turbo)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código aberto (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware). Licença Creator: a partir de US$ 20/mês para empresas menores. Pago via API (preços em fase de definição): SD3.0 Large: estimado em US$ 0.065/imagem. SD3.0 Turbo: estimado em US$ 0.040/imagem.',
    pros: [
      'Stable Diffusion 3.0, com arquitetura Multimodal Diffusion Transformer (MMDiT), oferece controle milimétrico e notáveis melhorias na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista.',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto e privacidade.',
      'Múltiplas variantes (Medium, Large, Turbo) otimizadas para diferentes necessidades de hardware e velocidade.',
      'Qualidade de imagem superior e aderência ao prompt, superando concorrentes em avaliações humanas.',
      'Pesos do SD3 Medium (2.5B) já foram liberados para uso público em junho de 2024.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado (interface complexa para controle total).',
      'Exige uma placa de vídeo dedicada muito potente para uso local eficiente (SD3 Large requer ~24GB VRAM, Medium ~12-16GB).',
      'Configuração inicial trabalhosa para uso local avançado.',
      'Modelos maiores podem ser mais lentos na renderização em comparação com variantes Turbo ou modelos menores.'
    ],
    score: {
      reasoning: 4.0,
      writing: 1.8,
      coding: 1.0,
      speed: 4.5,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 3.0, com suas variantes Medium, Large e Turbo, é a geração mais avançada da Stability AI e o padrão ouro para IA visual "open-source". Anunciado em fevereiro de 2024 e com os pesos do SD3 Medium liberados em junho de 2024, ele utiliza a arquitetura Multimodal Diffusion Transformer (MMDiT) para oferecer controle milimétrico sobre a geração de imagens. Destaca-se pelas melhorias na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. Disponível para uso local gratuito e via API, é ideal para profissionais que buscam personalização, eficiência e controle, aproximando a qualidade de modelos comerciais, mas exigindo investimento em aprendizado e hardware potente para as versões maiores.'
  },
  {
    id: 'make-automation',
    name: 'Make.com',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis (1.000 créditos/mês, 2 cenários ativos). Planos pagos (valores anuais): Core US$ 9/mês (10.000 créditos/mês); Pro US$ 16/mês (10.000+ créditos/mês, execução prioritária); Teams US$ 29/mês por usuário (10.000+ créditos/mês, colaboração). Os planos mensais são ligeiramente mais caros (ex: Core US$ 10.59/mês, Pro US$ 18.82/mês, Teams US$ 34.12/mês). O custo final depende do consumo de créditos (cada operação é um crédito), e cenários complexos ou frequentes podem consumir créditos rapidamente.',
    pros: [
      'Interface visual de arrastar e soltar muito intuitiva.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-4o, Claude 3 Opus, Google Gemini 1.5 Pro) e centenas de APIs.',
      'Permite criar roteiros condicionais complexos com módulos If-else aninhados e Merge.',
      'Oferece agentes de IA (Make AI Agents) e toolkit de IA para automação inteligente e adaptativa.',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs.',
      'Chat no canvas para refinamento de agentes de IA em tempo real.',
      'Registros detalhados de execução para facilitar a depuração e visibilidade com Make Grid.',
      'Integração com milhares de aplicativos (mais de 3.000).',
      'Make AI Web Search para buscas em tempo real em cenários, sem necessidade de APIs externas.',
      'Make Functions app para transformações de dados passo a passo.'
    ],
    cons: [
      'Pode se tornar caro se o volume de execuções mensais (créditos) for muito alto e complexo, pois cada operação conta como um crédito e cenários complexos ou frequentes podem esgotar os créditos rapidamente.',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados.',
      'Documentação de alguns aplicativos integrados é escassa.',
      'Curva de aprendizado acentuada para fluxos avançados.',
      'Custo por usuário nos planos Teams pode escalar rapidamente para equipes maiores.'
    ],
    score: {
      reasoning: 4.9,
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.6
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que permite conectar sistemas e integrar as principais IAs (OpenAI GPT-4o, Google Gemini 1.5 Pro, Anthropic Claude 3 Opus, etc.) sem programação. Seus "Make AI Agents" permitem a orquestração de fluxos de trabalho inteligentes que tomam decisões adaptativas, com suporte multimodal para análise e geração de diversos tipos de arquivos. Com uma interface intuitiva, o "Make Grid" para visualização em tempo real das automações, "Make AI Web Search" para dados em tempo real, e módulos aprimorados de controle de fluxo e funções, é uma ferramenta versátil para automação de rotinas empresariais. Os planos de preços foram atualizados, com opções anuais e mensais para Core, Pro e Teams.'
  }
];