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
    id: 'chatgpt-plus-gpt-5-5',
    name: 'ChatGPT Plus (GPT-5.5)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com limites de uso, acesso a GPT-5.5 Instant, o modelo padrão para todos os usuários desde 5 de maio de 2026); ChatGPT Go: US$ 8/mês (acesso limitado a GPT-5.5 Instant, com raciocínio mais limitado e anúncios nos EUA); ChatGPT Plus: US$ 20/mês (acesso prioritário ao GPT-5.5 Thinking, Sora 2, Deep Research, ChatGPT Images 2.0, Custom GPTs, uploads de arquivos); ChatGPT Pro: US$ 100/mês (5x o uso do Plus, acesso ao GPT-5.5 Pro e o1 Pro mode) ou US$ 200/mês (20x o uso do Plus, 1M contexto, o1 Pro mode exclusivo). API para GPT-5.5: US$ 5.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída. API para GPT-5.5 Pro: US$ 30.00/milhão de tokens de entrada e US$ 180.00/milhão de tokens de saída. API para GPT-5.4: US$ 2.50/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída. API para GPT-4o mini: US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída. Prompt caching e Batch API disponíveis para economia de custos.',
    pros: [
      'GPT-5.5 (lançado em 23 de abril de 2026) é o modelo carro-chefe da OpenAI, com capacidades multimodais avançadas e raciocínio aprimorado, sucedendo GPT-5.4 (lançado em março de 2026).',
      'Disponível para usuários gratuitos (com acesso ao GPT-5.5 Instant, o modelo padrão para todos os usuários desde 5 de maio de 2026) e assinantes Plus/Pro/Business/Enterprise.',
      'Integração nativa com ChatGPT Images 2.0 (DALL-E 4) para geração de imagens de alta qualidade, com suporte a resolução de até 2K (via API) ou 4K (via hosts de terceiros), e renderização precisa de texto em várias línguas (incluindo CJK, Hindi, Bengali, Árabe).',
      'Desempenho superior em benchmarks de linguagem, programação (Terminal-Bench 2.0: 82.7%, Expert-SWE: 73.1%, SWE-Bench Pro: 58.6%) e visão (BrowseComp com GPT-5.5 Pro: 90.1%), com melhor interpretação de prompts e redução de alucinações.',
      'Acesso a recursos como Advanced Data Analysis (anteriormente Code Interpreter) e navegação web.',
      'Modo de voz avançado e conversas por voz disponíveis para usuários Plus.',
      'O sistema GPT-5.5 usa um roteador inteligente que decide automaticamente qual modelo usar (Instant, Thinking ou Pro), oferecendo níveis de raciocínio mais profundos.',
      'Capacidade de processar e integrar texto, código e imagens dentro da mesma requisição, com raciocínio coordenado entre formatos.',
      'Contexto total de até 1.000.000 tokens (API) para o GPT-5.5 (400.000 tokens para Codex).',
      'Capacidades de "Agentic Coding" e "Computer Use" para execução autônoma de tarefas complexas e interação com softwares.'
    ],
    cons: [
      'Ainda pode apresentar alucinações e vieses, embora o GPT-5.5 Instant e os modelos mais recentes busquem minimizar isso.',
      'Acesso completo aos recursos mais avançados (Thinking/Pro) requer planos pagos.',
      'Preços da API podem ser caros para uso em larga escala, especialmente para os modelos mais avançados como GPT-5.5 e GPT-5.5 Pro.',
      'Modelos anteriores como GPT-4o e GPT-5 (Instant, Thinking) foram descontinuados da interface do ChatGPT em fevereiro de 2026 e abril de 2026, respectivamente, embora o acesso via API para alguns modelos ainda possa existir.',
      'Apesar dos esforços, o trabalho em sua "personalidade" para torná-lo "mais caloroso" ainda está em andamento.',
      'O conhecimento dos modelos GPT-5.5 é limitado até dezembro de 2025 para alguns recursos e o GPT-5.5 Instant utiliza web search para informações mais recentes.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelo modelo GPT-5.5 (lançado em abril de 2026), representa o auge da inteligência artificial generativa da OpenAI. O GPT-5.5, que inclui versões Instant (padrão para todos os usuários), Thinking e Pro, oferece capacidades multimodais avançadas, combinando perfeitamente texto, áudio e imagem para interações mais ricas e eficientes. O GPT-5.5 estabelece novos benchmarks em raciocínio, programação (Terminal-Bench 2.0: 82.7%) e geração criativa, com redução de alucinações. Os assinantes do ChatGPT Plus (US$ 20/mês) recebem acesso prioritário ao GPT-5.5 Thinking, o mais recente da série 5, juntamente com recursos como Sora 2 (geração de vídeo), Deep Research e o aprimorado ChatGPT Images 2.0. A arquitetura do GPT-5.5 utiliza um roteador inteligente para selecionar automaticamente o nível de raciocínio necessário, e o modelo oferece um contexto total de até 1.000.000 tokens (via API). A OpenAI continua a aprimorar seus modelos, oferecendo um ecossistema versátil para diversas aplicações, desde criação de conteúdo até automação complexa. O GPT-4o foi descontinuado da interface do ChatGPT em fevereiro de 2026, mas o GPT-5.5 Instant, lançado em 5 de maio de 2026, é o modelo padrão para todos os usuários.'
  },
  {
    id: 'claude-opus-4-7',
    name: 'Claude Opus 4.7',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso ao Sonnet 4.6 e limites de uso diários); Plano Pro: US$ 20/mês (US$ 17/mês anual) global, acesso ao Claude Opus 4.7 e Sonnet 4.6. Planos Max: US$ 100/mês (Max 5x, 5x uso do Pro) ou US$ 200/mês (Max 20x, 20x uso do Pro); Planos Max são apenas mensais, sem desconto anual. API para Claude Opus 4.7: US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída. (Inference US-only 1.1x). API para Claude Opus 4.7 (Fast): US$ 30.00/milhão de tokens de entrada e US$ 150.00/milhão de tokens de saída. API para Claude Sonnet 4.6: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída. API para Claude Haiku 4.5: US$ 1.00/milhão de tokens de entrada e US$ 5.00/milhão de tokens de saída. Prompt caching oferece até 90% de economia e Batch API oferece 50% de desconto.',
    pros: [
      'Claude Opus 4.7 (lançado em 16 de abril de 2026) é o modelo mais avançado da Anthropic, otimizado para raciocínio complexo, fluxos de trabalho agenticos e análise de longo contexto, com melhorias notáveis em engenharia de software avançada e tarefas de codificação difíceis (CursorBench: 70%, SWE-bench Pro: 64.3%).',
      'Janela de contexto de 1 milhão de tokens para Opus 4.7, Opus 4.6 e Sonnet 4.6 (beta na API), ideal para processar vastos volumes de dados.',
      'Define novos padrões em raciocínio de nível de pós-graduação, conhecimento de nível de graduação e proficiência em codificação.',
      'Desempenho superior em codificação (Claude Code), visão (compreensão visual aprimorada, com maior resolução de imagens de até 2.576 pixels) e tarefas complexas de várias etapas.',
      'Capacidades de visão de ponta, interpretando gráficos e transcrevendo texto de imagens imperfeitas.',
      'Novos recursos como "Computer Use" (beta, introduzido com Claude 3.5 Sonnet em outubro de 2024) para controle direto do computador, "Agent Teams" (com Opus 4.6) para orquestração de sub-agentes, e o lançamento de Claude Design (ferramenta de criação visual, 17 de abril de 2026) para usuários pagos.',
      'Sonnet 4.6 (lançado em 17 de fevereiro de 2026) oferece um excelente equilíbrio entre inteligência, velocidade e custo, superando o antigo Claude 3 Opus e o Opus 4.5 em benchmarks de codificação.',
      'Opus 4.7 introduz um novo nível de esforço \'xhigh\' para controle mais refinado entre raciocínio e latência, e a estética retornou à de V7.',
      'O novo tokenizer melhora como o modelo processa o texto, e há melhorias na fidelidade à instrução.'
    ],
    cons: [
      'Sem geração de imagem nativa (foco em compreensão visual e texto/código); Claude Design é uma ferramenta separada.',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança.',
      'O custo da API para Opus 4.7, embora competitivo, pode levar a um consumo de tokens 10-35% maior devido ao novo tokenizer, efetivamente aumentando os custos. A versão "Fast" é 6x mais cara.',
      'Planos Max são apenas mensais, sem desconto anual.',
      'Opus 4.7 teve uma regressão no desempenho de busca agentica em comparação com o Opus 4.6.',
      'A interpretação mais literal das instruções do Opus 4.7 pode exigir que prompts existentes sejam reajustados para evitar resultados inesperados.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 4.8,
      value: 4.6
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude Opus 4.7, lançado pela Anthropic em 16 de abril de 2026, é o modelo de ponta da empresa, projetado para as tarefas mais complexas e fluxos de trabalho agenticos. Ele estabelece novos benchmarks em raciocínio de nível de pós-graduação, conhecimento universitário e proficiência em codificação, com melhorias notáveis em engenharia de software avançada. Com uma vasta janela de contexto de 1 milhão de tokens (também disponível no Opus 4.6 e Sonnet 4.6), é ideal para análise profunda de grandes volumes de informações. O Opus 4.7 se destaca na escrita natural, compreensão de nuances e capacidades avançadas de visão, como a interpretação de gráficos e a transcrição de texto de imagens imperfeitas, suportando imagens de maior resolução. Recursos como "Claude Code", "Computer Use" (em beta) e a nova ferramenta "Claude Design" (lançada em abril de 2026) ampliam sua versatilidade, permitindo interações mais diretas com sistemas externos e criação visual. Disponível através de assinatura Pro no Claude.ai e via API, o Opus 4.7 oferece inteligência de ponta a um custo-benefício aprimorado em relação aos seus antecessores, embora o novo tokenizer possa aumentar o consumo efetivo de tokens.'
  },
  {
    id: 'gemini-3-5-flash-pro',
    name: 'Gemini 3.5 Flash & Pro (via Gemini Advanced)',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano Google One AI Premium: US$ 19.99/mês (inclui Gemini Advanced com acesso a modelos Pro e Flash mais recentes, 2 TB de armazenamento e YouTube Premium Lite). Planos Google AI Ultra: US$ 100/mês (5x uso do AI Pro, Gemini 3.5 Flash, 20TB armazenamento, acesso ao Google Antigravity) ou US$ 200/mês (limites de uso mais altos, YouTube Premium completo). API para Gemini 3.5 Flash (lançado em 19 de maio de 2026): US$ 1.50/milhão de tokens de entrada e US$ 9.00/milhão de tokens de saída para um contexto de 1 milhão de tokens (cached input: US$ 0.15/milhão de tokens, non-global regions: US$ 1.65/US$ 9.90). API para Gemini 3.1 Pro (lançado em fevereiro de 2026): US$ 2.00/milhão de tokens de entrada e US$ 12.00/milhão de tokens de saída para contexto de até 200K tokens. US$ 4.00/milhão de tokens de entrada e US$ 18.00/milhão de tokens de saída para contexto acima de 200K tokens (até 2M tokens). API para Gemini 3.1 Flash-Lite: US$ 0.25/milhão de tokens de entrada e US$ 1.50/milhão de tokens de saída. API para Gemini 2.5 Flash-Lite: US$ 0.10/milhão de tokens de entrada e US$ 0.40/milhão de tokens de saída. Google AI Studio é gratuito para experimentação com modelos Flash e Flash-Lite. Gemini 3.5 Pro será lançado em junho de 2026, com preços ainda a serem anunciados.',
    pros: [
      'Gemini 3.5 Flash (lançado em 19 de maio de 2026 no Google I/O) é o modelo mais inteligente do Google para desempenho contínuo em tarefas agenticas e de codificação, superando o Gemini 3.1 Pro em benchmarks (Terminal-Bench 2.1: 76.2%) e sendo 4 vezes mais rápido que modelos comparáveis.',
      'Gemini 3.1 Pro (lançado em 19 de fevereiro de 2026) é um modelo poderoso e versátil, com excelente equilíbrio entre qualidade, desempenho e custo.',
      'Janela de contexto de até 2 milhões de tokens para Gemini 3.1 Pro, e 1 milhão de tokens para Gemini 3.5 Flash, ideal para processamento de grandes volumes de dados (documentos, código, vídeo, áudio).',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição, com saídas multimodais nativas.',
      'Desempenho superior em tarefas complexas que exigem raciocínio profundo, instrução e escrita criativa.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome) e recursos como Personal Intelligence, Deep Research e Gemini Spark (agente de IA pessoal 24/7 com 3.5 Flash).',
      'Gemini Omni Flash (lançado em 19 de maio de 2026) permite a criação de vídeos cinematográficos a partir de prompts de texto, imagem, áudio e vídeo, atuando como um "world model" com física avançada.',
      'Gemini 3.5 Pro será lançado em junho de 2026.'
    ],
    cons: [
      'A API para modelos Pro pode ser mais cara para contexto completo de 2M de tokens, e o preço muda com o tamanho do contexto (dobra acima de 200K tokens).',
      'Modelos Pro são agora pagos na Google AI Studio (desde 1º de abril de 2026), embora modelos Flash e Flash-Lite mantenham tiers gratuitos com cotas reduzidas.',
      'O conhecimento do Gemini 3.5 Flash é limitado até janeiro de 2026.',
      'Apesar da otimização para velocidade, alguns modelos Gemini mais antigos (e.g., 2.5 Pro) podem ser mais verbosos e lentos que alguns concorrentes para tarefas simples.',
      'Limites de tokens de saída (65.536 para 3.5 Flash) podem ser um gargalo para outputs muito longos, embora não haja relatos recentes de interrupções.'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.9,
      coding: 5.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 3.5 Flash, lançado em 19 de maio de 2026, é o modelo de linguagem multimodal mais avançado do Google para tarefas agenticas e de codificação, e o primeiro da série 3.5. Ele oferece uma vasta janela de contexto de até 1 milhão de tokens para o Flash e 2 milhões para o 3.1 Pro (estável em fevereiro de 2026), permitindo a análise de grandes volumes de informações em texto, imagem, áudio e vídeo. Baseado em uma arquitetura eficiente, é aprimorado para raciocínio complexo, geração de conteúdo e codificação. O Gemini 3.5 Flash está disponível via assinatura Google One AI Premium e API, e é 4 vezes mais rápido que modelos concorrentes em sua classe, superando o Gemini 3.1 Pro em benchmarks de codificação. O Gemini 3.5 Pro será lançado em junho de 2026. A família Gemini continua a evoluir rapidamente com o lançamento do Gemini Omni Flash (maio de 2026) para geração de vídeo cinematográfico a partir de diversas entradas. Sua profunda integração com o Google Workspace e recursos como Gemini Spark (agente de IA pessoal) o tornam uma ferramenta versátil, com preços de API adaptáveis ao uso do contexto.'
  },
  {
    id: 'llama-4-maverick',
    name: 'Llama 4 Maverick',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware, licença comunitária para uso comercial até US$ 1M de receita anual). API para Llama 4 Maverick: a partir de US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída (via Deepinfra). Groq oferece US$ 0.50/milhão de tokens de entrada e US$ 0.77/milhão de tokens de saída. Azure oferece US$ 0.25/milhão de tokens de entrada e US$ 1.00/milhão de tokens de saída. API para Llama 4 Scout: a partir de US$ 0.08/milhão de tokens de entrada e US$ 0.30/milhão de tokens de saída (via Deepinfra). Azure oferece US$ 0.20/milhão de tokens de entrada e US$ 0.78/milhão de tokens de saída. Os modelos Llama 4 Scout e Maverick foram lançados em 5 de abril de 2025.',
    pros: [
      'Llama 4 (lançado em 5 de abril de 2025) é a nova geração de modelos "open-weight" da Meta, com arquitetura Mixture-of-Experts (MoE) para eficiência.',
      'Llama 4 Maverick (17B parâmetros ativos, 128 experts, 400B parâmetros totais) oferece desempenho competitivo com modelos proprietários e capacidades nativamente multimodais (texto e imagem) e multilíngues (12 idiomas).',
      'Janela de contexto estendida: 1 milhão de tokens para Maverick e até 10 milhões de tokens para Llama 4 Scout, ideal para processamento de grandes volumes de dados.',
      'Pode rodar localmente no seu computador (com hardware adequado), oferecendo controle absoluto e privacidade.',
      'Otimizado para "tool use" e "function calling", facilitando a interface com programas externos para pesquisa, geração de imagens, execução de código e raciocínio matemático.',
      'Llama 4 Behemoth (288B parâmetros ativos, ainda em treinamento) serviu como modelo "professor" e promete superar GPT-4.5, Claude Sonnet 3.7 e Gemini 2.0 Pro em benchmarks STEM.',
      'Ecossistema robusto com parceiros e suporte para fine-tuning.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade, especialmente para modelos maiores (Llama 4 Scout requer uma NVIDIA H100 GPU).',
      'Os custos de infraestrutura para modelos maiores via API podem ser significativos e variam por provedor.',
      'O conhecimento dos modelos Llama 4 (Scout e Maverick) é limitado até agosto de 2024, sendo menos atualizado que modelos proprietários com integração de pesquisa em tempo real.',
      'Existem restrições de uso na União Europeia e para organizações com mais de 700 milhões de usuários ativos mensais (requer aprovação da Meta).',
      'Alguns desenvolvedores relataram que modelos Llama 3.1 dense podem ser mais confiáveis para tarefas de codificação text-first devido à sua estabilidade e previsibilidade.'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.8,
      coding: 4.8,
      speed: 5.0,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'Llama 4 Maverick, lançado pela Meta em 5 de abril de 2025 como parte da família Llama 4, representa a mais recente geração de modelos "open-weight" com uma arquitetura Mixture-of-Experts (MoE) para maior eficiência. Ele oferece desempenho altamente competitivo em benchmarks de ponta, rivalizando com modelos proprietários, e é nativamente multimodal (texto e imagem) e multilíngue, suportando até 12 idiomas. Com uma janela de contexto impressionante de 1 milhão de tokens (e 10 milhões para Llama 4 Scout), é ideal para análise de grandes bases de código e conversas extensas. O Llama 4 Maverick permite uso local com hardware adequado ou acesso via API com preços competitivos através de diversos provedores. A Meta continua a inovar com a série Llama, com o Llama 4 Behemoth ainda em treinamento e um ecossistema robusto que solidifica sua posição como uma escolha poderosa e flexível para desenvolvedores e empresas que buscam controle, personalização e eficiência de custos.'
  },
  {
    id: 'chatgpt-images-2-0',
    name: 'ChatGPT Images 2.0 (GPT Image 2.0)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com limites de uso para o Thinking Mode); Grátis no ChatGPT Free (Instant Mode, com limitações de uso); API para GPT Image 2.0 (a partir de início de maio de 2026): US$ 8.00/milhão de tokens de entrada de imagem, US$ 2.00/milhão de tokens de entrada de imagem em cache, US$ 30.00/milhão de tokens de saída de imagem, mais US$ 5.00/milhão de tokens de entrada de texto. Preços estimados por imagem (1024x1024): US$ 0.006 (qualidade baixa), US$ 0.053 (qualidade média), US$ 0.211 (qualidade alta). API para GPT Image 1.5: a partir de US$ 0.009 por imagem (1024x1024, qualidade baixa). API para GPT Image 1 Mini: a partir de US$ 0.005 por imagem (qualidade baixa). DALL-E 2 e DALL-E 3 foram descontinuados oficialmente em 12 de maio de 2026.',
    pros: [
      'ChatGPT Images 2.0 (lançado em 21 de abril de 2026, impulsionado por GPT Image 2.0) é o modelo de geração de imagens carro-chefe da OpenAI, com excelente compreensão de prompts conversacionais.',
      'Qualidade de imagem superior e renderização precisa de texto dentro das imagens (melhor que DALL-E 3 e Midjourney v8.1 para texto complexo e layout), com suporte a múltiplas línguas (CJK, Hindi, Bengali, Árabe).',
      'Gera resultados criativos, detalhados e visualmente impressionantes com alta fidelidade e diversas estéticas.',
      'Fácil de usar para iniciantes e profissionais, com interface intuitiva via ChatGPT e capacidade de usar o "Thinking Mode" para melhores resultados.',
      'Melhor consistência visual em séries de imagens relacionadas e caracteres através do modo "Thinking".',
      'Suporte a inputs multimodais (texto e imagem) com saída de imagem, e edição iterativa através de prompts conversacionais.',
      'Disponível para usuários gratuitos (Instant Mode) e assinantes Plus (Thinking Mode).',
      'Suporte a resolução de até 2K via API e 4K através de hosts de terceiros, e capacidade de gerar até oito imagens coerentes a partir de um único prompt.',
      'Primeiro modelo de imagem com raciocínio nativo e capacidades agenticas, permitindo pesquisa pré-geração, planejamento e auto-correção.'
    ],
    cons: [
      'O modo Thinking (com recursos avançados) requer assinatura do ChatGPT Plus (ou Pro/Business).',
      'Pode ser mais lento que alguns concorrentes (e.g., Gemini Nano Banana 2 é 2x mais rápido), com tempos de geração de 40 segundos a mais de um minuto.',
      'Pode não atingir o fotorrealismo artístico e estilização de outros geradores em certos casos (como Midjourney).',
      'A edição iterativa pode degradar após duas ou três rodadas de revisão, exigindo o início de um novo chat.',
      'A API é baseada em tokens, não por imagem, e os custos podem variar de forma imprevisível com base na complexidade do prompt, tamanho, qualidade e edições.',
      'DALL-E 2 e DALL-E 3 foram descontinuados oficialmente em 12 de maio de 2026.'
    ],
    score: {
      reasoning: 4.9,
      writing: 1.0, // Score for general writing is irrelevant in this category, keeping it low.
      coding: 1.0, // Score for coding is irrelevant in this category, keeping it low.
      speed: 4.5,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Images 2.0, impulsionado pelo modelo GPT Image 2.0 (lançado em 21 de abril de 2026), é o modelo de geração de imagens mais avançado da OpenAI. Totalmente integrado ao ChatGPT, ele se destaca pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização precisa de texto em diversas línguas, superando DALL-E 3 em muitos aspectos. Lançado em abril de 2026, oferece um "Instant Mode" gratuito e um "Thinking Mode" mais avançado para assinantes Plus, com raciocínio, pesquisa na web e consistência de caracteres. Sua arquitetura multimodal garante maior fidelidade e aderência ao prompt, com capacidades agenticas de planejamento e auto-correção. É uma ferramenta intuitiva e poderosa para designers, criadores de conteúdo e qualquer pessoa que busque gerar visuais criativos de alto nível, apesar de ser mais lento que alguns concorrentes em algumas gerações. DALL-E 3 foi descontinuado em 12 de maio de 2026.'
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney v8.1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos (valores mensais): Basic US$ 10/mês (ou US$ 8/mês anual) com ~3.3 horas de GPU rápida; Standard US$ 30/mês (ou US$ 24/mês anual) com ~15 horas de GPU rápida e modo Relax ilimitado (para V7, em desenvolvimento para V8.1); Pro US$ 60/mês (ou US$ 48/mês anual) com ~30 horas de GPU rápida, modo Relax (para V7) e modo Stealth; Mega US$ 120/mês (ou US$ 1152/ano) com ~60 horas de GPU rápida, modo Relax (para V7) e modo Stealth. O modo Relax não está disponível para o V8.1 no momento.',
    pros: [
      'Midjourney v8.1 (lançado em 30 de abril de 2026, após alpha em 14 de abril) é a versão mais rápida e avançada, oferecendo fotorealismo aprimorado e texturas mais ricas.',
      'Aproximadamente 4-5 vezes mais rápido para trabalhos de imagem padrão que versões anteriores, e o modo HD é 3x mais rápido e 3x mais barato que o V8.0.',
      'Melhor precisão na renderização de texto, com melhorias significativas em comparação com as versões anteriores, embora ainda não seja tão preciso quanto o GPT Image 2.0 para texto complexo.',
      'Melhor coerência de imagem (mãos, corpos, objetos) e detalhes mais precisos, com anatomia refinada.',
      'Geração de imagens HD (2K) nativa (2048x2048 pixels) sem etapa de upscaling separada, com upscalers 2x em desenvolvimento.',
      'Editor web moderno (lançado em agosto de 2024) com recursos de edição, organização, inpainting (Repaint), outpainting (Reframe), e "Personalization" para aprender o estilo do usuário (introduzido em junho de 2024 com V7 e compatível com V8.1).',
      'Introdução de "Image Prompts" e "Image Weights" no V8.1.',
      'Novo "Prompt Shortener" e ferramenta "Describe" atualizada no V8.1.',
      'A estética do V8.1 retornou à do V7 após feedback da comunidade sobre o V8.0.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial.',
      'A interface principal ainda opera via Discord para alguns recursos, embora o editor web esteja melhorando; não possui aplicativo nativo para Mac.',
      'Menos preciso que o GPT Image 2.0 para texto complexo e fotorrealismo técnico/comercial.',
      'Não possui API pública oficial, limitando a integração programática.',
      'A geração de vídeo é do tipo "image-to-video" (clipes de 5 segundos, extensíveis até 21 segundos), não "text-to-video", e não inclui áudio.',
      'Não aceita modelos 3D diretamente como entrada para renderização.',
      'O modo Relax, que oferece gerações ilimitadas mais lentas, não está disponível para o V8.1 (apenas para o V7 e anteriores); o V8.1 opera apenas em modo "Fast".',
      'A edição iterativa (Vary Region, Remix) é mais limitada em comparação com as ferramentas de edição baseadas em texto de outros modelos.',
      'Prompts para o V8.1 podem precisar de reajuste, pois ele segue as instruções mais literalmente do que o V7, o que pode quebrar prompts que dependiam de uma interpretação mais flexível.'
    ],
    score: {
      reasoning: 4.7,
      writing: 2.5, // Contextualized to text in images, not general writing.
      coding: 1.0, // Irrelevant.
      speed: 5.0,
      value: 4.6
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney v8.1, lançado em 30 de abril de 2026, é a versão mais recente e aprimorada do popular gerador de imagens, oferecendo um salto significativo em velocidade, qualidade visual e coerência. Com capacidades de renderização de texto aprimoradas e detalhes mais precisos em elementos complexos como mãos e corpos, o v8.1 se destaca na criação de imagens artísticas e fotorrealistas. A introdução do editor web (agosto de 2024) e do recurso "Personalization" (V7) facilita a edição e adaptação ao estilo do usuário. Embora o Midjourney ofereça recursos de "image-to-video" (clipes curtos sem áudio), ele não suporta entrada direta de modelos 3D ou geração de vídeo completo. Não há plano gratuito oficial ou uma API pública, e o modo "Relax" não está disponível para V8.1. No entanto, ele continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível, com planos de assinatura que agora incluem um modo HD 2K padrão mais eficiente.'
  },
  {
    id: 'stable-diffusion-3-5',
    name: 'Stable Diffusion 3.5 (Medium/Large/Turbo)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware). Para empresas com mais de US$ 1M de receita anual, é necessária uma licença Enterprise (contatar Stability AI para preços). Pago via API (preços variam por provedor): Stable Image Ultra (baseado em SD3.5 Large): estimado em US$ 0.08/imagem. Stable Image Core: estimado em US$ 0.03/imagem. API para SD3.5 Large via AWS Bedrock: US$ 0.08/imagem. A API da Stability AI usa um sistema de créditos (1 crédito = US$ 0.01), com a maioria das imagens custando 3-6 créditos. Um aumento de preços para serviços de API selecionados foi anunciado a partir de 1º de agosto de 2025.',
    pros: [
      'Stable Diffusion 3.5 (lançado em 22 de outubro de 2024, com Medium em 29 de outubro) com arquitetura Multimodal Diffusion Transformer (MMDiT), oferece controle milimétrico e melhorias notáveis na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista.',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto, privacidade e fine-tuning (LoRAs, ControlNet).',
      'Múltiplas variantes: Medium (2.5B parâmetros, 9.9GB VRAM), Large (8.1B parâmetros, 1MP resolução), e Large Turbo (destilado para geração mais rápida em 4 passos), otimizadas para diferentes necessidades de hardware, velocidade e qualidade.',
      'Qualidade de imagem superior e aderência ao prompt; SD3.5 Large lidera em aderência ao prompt e rivaliza com modelos maiores em qualidade de imagem.',
      'Otimizado com TensorRT para NVIDIA RTX GPUs, resultando em 2.3x mais desempenho e 40% menos memória (SD3.5 Large necessita de 11GB de VRAM após otimização, Medium cerca de 9.9GB).',
      'Lançamento de Stable Audio 3.0 (20 de maio de 2026) para geração de música com modelos open-weight (Small SFX, Small, Medium) e dados licenciados, capazes de gerar composições de até 6 minutos e 20 segundos (Large via API).',
      'API oferece opções de preços competitivas via créditos e planos para diferentes volumes de uso.',
      'Gera outputs diversos e representativos de diferentes tons de pele e características, sem necessidade de prompts extensivos.',
      'Oferece versatilidade para gerar visuais em praticamente qualquer estilo, de 3D e fotografia a pintura e arte linear.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado, exigindo configuração técnica para uso local eficiente.',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente (SD3.5 Large otimizado requer 11GB de VRAM; Medium requer 9.9GB de VRAM).',
      'GPT Image 2.0 pode ser superior em renderização de texto complexo e fotorrealismo de pele humana (SD3.5 apresentou artefatos em 38% das mãos humanas em testes).',
      'A qualidade da saída pode variar mais sem fine-tuning em comparação com soluções gerenciadas.',
      'A Stability AI atualizou sua Política de Uso Aceitável (AUP) em 31 de julho de 2025, proibindo a geração de conteúdo sexualmente explícito com SD3.5.',
      'As versões base do Stable Diffusion 3.5 (Medium/Large) podem ser lentas (e.g., 12-14 segundos por imagem) em comparação com concorrentes como Google Veo ou FluxNote.',
      'Um aumento de preços para serviços de API selecionados foi anunciado a partir de 1º de agosto de 2025.'
    ],
    score: {
      reasoning: 4.5,
      writing: 1.8, // Contextualized to text in images, not general writing.
      coding: 4.8, // Reflects customization and open-source nature.
      speed: 4.5,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 3.5, lançado pela Stability AI em outubro de 2024, com suas variantes Medium, Large e Large Turbo, é a geração mais avançada e o padrão ouro para IA visual "open-source". Ele utiliza a arquitetura Multimodal Diffusion Transformer (MMDiT) para oferecer controle milimétrico sobre a geração de imagens, com melhorias significativas na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. Os modelos são "open-weight", permitindo uso local gratuito (com limites de receita para uso comercial) e personalização profunda via fine-tuning e ferramentas como ControlNet. Embora exija investimento em aprendizado e hardware potente para as versões maiores (SD3.5 Large otimizado requer 11GB de VRAM), sua flexibilidade e o custo-benefício (especialmente com otimizações para GPUs NVIDIA que aumentam o desempenho em 2.3x) o tornam ideal para profissionais que buscam personalização, eficiência e controle. A plataforma também foi expandida com o lançamento do Stable Audio 3.0 em 20 de maio de 2026 para geração de música com modelos open-weight e dados licenciados, capaz de criar composições de até 6 minutos e 20 segundos.'
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (com Agentes de IA)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis (1.000 créditos/mês, 2 cenários ativos, inclui Agentes de IA, intervalo de 15 minutos); Plano Core: US$ 10.59/mês (mensal) ou US$ 9/mês (anual) para 10.000 créditos (cenários ilimitados, intervalo de 1 minuto, sem prioridade de execução). Plano Pro: US$ 18.82/mês (mensal) ou US$ 16/mês (anual) para 10.000+ créditos (prioridade de execução, variáveis personalizadas, logs completos). Plano Teams: US$ 34.12/mês por usuário (mensal) ou US$ 29/mês por usuário (anual) para 10.000+ créditos (colaboração, gestão de equipes, prioridade de execução). Créditos podem ser comprados adicionalmente nos planos pagos. A política de acúmulo de créditos não utilizados não foi confirmada nas últimas verificações.',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos (If-else, Merge, Routers, Filters, Iterators, Aggregators, Error Handlers).',
      'Introdução dos "Make AI Agents" (beta lançado em 14 de abril de 2025; próxima geração com suporte multimodal anunciada em 11 de fevereiro de 2026) para automação inteligente e adaptativa, com tomada de decisões em tempo real dentro do canvas.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5, Claude Opus 4.7, Google Gemini 3.1 Pro, Perplexity AI, Deepseek, Eleven Labs) e milhares de APIs (3.000+ apps, mais integração via módulo HTTP).',
      'Suporte multimodal para AI Agents (a partir de fevereiro de 2026), permitindo entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no fluxo de trabalho.',
      'Chat no canvas para refinamento de agentes de IA em tempo real, com radical transparência das decisões do agente e um "Reasoning Panel" para depuração.',
      'Registros detalhados de execução (Make Grid) e busca de texto completo em logs (planos Pro e Teams) para depuração e visibilidade aprimoradas.',
      'Make AI Web Search (beta, introduzido em dezembro de 2025) para buscas em tempo real em cenários, sem necessidade de APIs externas, e alimentando AI Agents com contexto atualizado.',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier (3-4x mais barato).'
    ],
    cons: [
      'O consumo de créditos pode ser imprevisível e rápido em cenários complexos com muitos módulos; módulos de IA com o provedor interno do Make usam créditos baseados em tokens, o que pode ser mais caro.',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados e agentes de IA complexos.',
      'Curva de aprendizado mais acentuada para fluxos avançados e o uso de AI Agents em comparação com ferramentas mais simples como Zapier.',
      'Os recursos de colaboração e equipe são limitados nos planos Core e Pro, exigindo o plano Teams para funcionalidade completa.',
      'Cenários no plano Core podem entrar em fila durante picos de uso, resultando em atrasos, enquanto planos Pro e Teams oferecem prioridade de execução.',
      'Apesar das melhorias, a natureza relativamente recente dos AI Agents (beta desde abril de 2025) implica que o desenvolvimento ainda está em andamento, e "comportamentos estranhos" ou travamentos foram relatados em testes anteriores.'
    ],
    score: {
      reasoning: 4.9,
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.6
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Lançou os "Make AI Agents" (beta em abril de 2025, próxima geração em fevereiro de 2026), que permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-5.5, Google Gemini 3.1 Pro e Anthropic Claude Opus 4.7. Com uma interface altamente intuitiva, o "Make Grid" para visualização em tempo real das automações, "Make AI Web Search" (beta) para dados atualizados, e módulos aprimorados de controle de fluxo e funções, é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em créditos, oferecem flexibilidade, tornando-o uma alternativa custo-efetiva para automações complexas, apesar do consumo de créditos poder ser imprevisível para tarefas de IA.'
  }
];