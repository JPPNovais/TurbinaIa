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
    name: 'ChatGPT Plus (GPT-5.5, GPT-5, GPT-4o)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com limites de uso, acesso a GPT-5.5 Instant, GPT-4o mini e ocasional a GPT-4o); ChatGPT Plus: US$ 20/mês (acesso prioritário e ilimitado a GPT-5.5 Thinking/Pro, GPT-5, GPT-4o e GPT-4o mini, com limites de mensagem até 5x maiores, recursos avançados como Advanced Data Analysis, navegação web, geração de imagens GPT Image 2, voz real-time (ChatGPT Voice) e Custom GPTs, janela de contexto de até 1M tokens para GPT-5 e 32K tokens para GPT-4o). API para GPT-4o: US$ 3.00/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída. Tokens de entrada em cache: US$ 2.50/milhão de tokens. API para GPT-4o Mini: US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída. A API para GPT-5.5 está disponível desde abril de 2026.',
    pros: [
      'GPT-5 (lançado em 7 de agosto de 2025) e GPT-4o são os modelos carro-chefe da OpenAI, oferecendo inteligência de ponta com velocidade significativa e capacidades multimodais aprimoradas em texto, voz e visão.',
      'GPT-5.5 (lançado em 23 de abril de 2026) oferece raciocínio aprimorado e está disponível para usuários pagos (Thinking/Pro) e gratuitos (Instant).',
      'Disponível para usuários gratuitos (com acesso limitado a GPT-5.5 Instant, GPT-4o mini e ocasional a GPT-4o) e assinantes Plus/Team/Enterprise (acesso completo e prioritário aos modelos mais recentes).',
      'Integração nativa com GPT Image 2 (lançado em 21 de abril de 2026) para geração de imagens de alta qualidade, sucedendo GPT Image 1 (lançado em março de 2025).',
      'Desempenho superior em compreensão de imagens e discussão de conteúdo visual (GPT Image 1 é multimodal, aceitando texto e imagem como entrada).',
      'Acesso a recursos como Advanced Data Analysis (anteriormente Code Interpreter), navegação web e Custom GPTs.',
      'Modo de voz avançado (ChatGPT Voice) com baixa latência e interações humanas fluídas, lançado em setembro de 2025.',
      'Suporte a mais de 50 idiomas e melhor desempenho em idiomas não ingleses.',
      'Novos recursos em 2025/2026: capacidades de pesquisa de compras, melhorias em uploads de arquivos, cópia de chat, e maior confiabilidade em conversas longas.',
      'Suporte para fine-tuning (personalização corporativa) para GPT-4o desde agosto de 2024.'
    ],
    cons: [
      'Usuários gratuitos têm acesso restrito a mensagens e recursos avançados, além de limites de uso durante picos.',
      'O custo da API pode ser elevado para uso em larga escala, especialmente para os modelos completos e para GPT Image 1/2.',
      'O conhecimento do GPT-4o é limitado até outubro de 2023 (embora a navegação web e os modelos mais recentes como GPT-5 e GPT-5.5 compensem isso para Plus).',
      'ChatGPT Plus possui um contexto de 32K tokens para GPT-4o, menor que algumas ofertas de API de concorrentes, embora o GPT-5 suporte até 1M de tokens de entrada.',
      'GPT-5.5 Thinking e Pro não estão disponíveis para usuários gratuitos.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelos modelos GPT-5.5 (lançado em abril de 2026) e GPT-5 (lançado em agosto de 2025), representa o auge da inteligência artificial generativa da OpenAI. O serviço oferece inteligência de ponta com uma velocidade significativamente maior e desempenho aprimorado. Os assinantes do ChatGPT Plus (US$ 20/mês) recebem acesso prioritário e ilimitado aos modelos mais recentes, juntamente com recursos como Advanced Data Analysis, navegação web, e geração de imagens através do GPT Image 2 (lançado em abril de 2026). Os modelos se destacam na compreensão de prompts complexos, análise de imagens e no modo de voz real-time (ChatGPT Voice).'
  },
  {
    id: 'claude-4-6-sonnet',
    name: 'Claude 4.6 Sonnet (e Claude Opus 4.7)',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude 4.6 Sonnet e limites de uso diários); Plano Pro: US$ 20/mês (acesso a Claude 4.6 Sonnet e Claude Opus 4.7 com limites de taxa significativamente mais altos). Planos Team: para equipes, com limites ainda maiores. API para Claude 4.6 Sonnet: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 1M tokens. API para Claude Opus 4.7: US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída, com janela de contexto de 1M tokens. (Claude Haiku 4.5: US$ 1.00/milhão de tokens de entrada e US$ 5.00/milhão de tokens de saída).',
    pros: [
      'Claude 4.6 Sonnet (sucedendo Claude 3.5 Sonnet) é um dos modelos mais avançados da Anthropic, superando modelos como Claude 3 Opus em benchmarks de raciocínio e conhecimento, com o mesmo preço do 3.5 Sonnet, mas melhor desempenho e 1M de tokens de contexto.',
      'Claude Opus 4.7 oferece desempenho superior para tarefas mais complexas e fluxos de trabalho agenticos.',
      'Opera com alta velocidade e eficiência em tarefas complexas e fluxos de trabalho de várias etapas.',
      'Janela de contexto de 1M tokens para Claude 4.6 Sonnet e Opus 4.7, ideal para processar grandes volumes de dados.',
      'Capacidades de codificação avançadas e introdução do Artifacts (workspace interativo para código).',
      'Excelente processamento visual, interpretando gráficos, imagens e transcrevendo texto de forma precisa.',
      'Excepcional uso de ferramentas e ótimo para tarefas agenticas complexas de várias etapas.',
      'Disponível gratuitamente no Claude.ai e no aplicativo iOS (com 4.6 Sonnet), com acesso a limites de taxa mais altos para assinantes Pro e Team.',
      'Foco em segurança e alinhamento com a constituição da Anthropic. Conhecimento limitado até 1º de abril de 2024.'
    ],
    cons: [
      'Não possui geração de imagem nativa (foco em compreensão visual e texto/código).',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança.',
      'O custo da API para Opus 4.7 é mais alto que o Sonnet 4.6.',
      'Ainda não possui um modelo multimodal de voz em tempo real comparável ao GPT-5.5.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude 4.6 Sonnet, e a versão superior Claude Opus 4.7, são os modelos de ponta da Anthropic, projetados para as tarefas mais complexas e fluxos de trabalho agenticos. O Sonnet 4.6 oferece o mesmo custo do 3.5 Sonnet, mas com desempenho aprimorado e uma janela de contexto de 1M tokens. O Opus 4.7, embora mais caro, é o mais capaz. Ambos se destacam na escrita natural, compreensão de nuances e capacidades avançadas de visão, interpretando gráficos e transcrevendo texto de imagens. A introdução do Artifacts aprimora ainda mais a experiência de desenvolvedores com um workspace interativo para código. Disponível através de uma assinatura Pro no Claude.ai e via API, a família Claude 4 oferece inteligência de ponta com um excelente equilíbrio entre desempenho e custo-benefício.'
  },
  {
    id: 'gemini-3-pro-flash',
    name: 'Gemini 3 Pro & 3.5 Flash (via Google AI Premium)',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano Google AI Pro (anteriormente Google One AI Premium): US$ 19.99/mês (inclui Gemini Advanced com acesso a Gemini 3 Pro, 2 TB de armazenamento e integração com Workspace). Plano Google AI Plus (US apenas): US$ 7.99/mês (acesso ao app Gemini, limites 2x maiores, 128K contexto). Plano Google AI Ultra: US$ 99.99/mês (até 20x mais limites, Deep Think e Gemini Spark). Para usuários gratuitos (US), Gemini 3.5 Flash alimenta o modelo "Auto" com limites diários. API para Gemini 1.5 Pro (para referência, preços para 3.x podem variar): US$ 7.00/milhão de tokens de entrada e US$ 21.00/milhão de tokens de saída para um contexto de até 1 milhão de tokens (preços sobem para contexto acima de 128K tokens). API para Gemini 1.5 Flash: US$ 0.35/milhão de tokens de entrada e US$ 1.05/milhão de tokens de saída, com contexto de até 1 milhão de tokens. Plano gratuito da API para Gemini 1.5 Flash disponível com limites de uso.',
    pros: [
      'Gemini 3 Pro é o modelo mais poderoso do Google para raciocínio complexo, e Gemini 3.5 Flash (lançado em maio de 2026 para usuários gratuitos nos EUA) é otimizado para velocidade e eficiência em tarefas de alto volume.',
      'Janela de contexto de até 1 milhão de tokens para Flash e Pro, e até 2 milhões de tokens para Pro (em pré-visualização, já disponível em julho de 2024 para Advanced), ideal para processamento de vastos volumes de dados (documentos, código, vídeo, áudio).',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição.',
      'Gemini 1.5 Flash oferece velocidade de saída superior (163.6 tokens por segundo) e é significativamente mais custo-efetivo que o Pro.',
      'Desempenho superior do Gemini 3 Pro em tarefas complexas que exigem raciocínio profundo, instrução e escrita criativa.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome) e recursos como Persistent AI Memory e função de chamada aprimorada.',
      'Modelos atualizados com janela de contexto mais longa (até 1 milhão de tokens) para o Gemini Advanced em julho de 2024.'
    ],
    cons: [
      'A API para Gemini 1.5 Pro é mais cara, especialmente para contexto completo e para prompts mais longos (acima de 128K tokens).',
      'Gemini 1.5 Flash, embora rápido e econômico, não é tão preciso ou capaz quanto o Pro para tarefas que exigem raciocínio mais profundo.',
      'O conhecimento dos modelos Gemini 1.5 é limitado até o início de 2024. Para Gemini 3.x, o conhecimento é mais recente, mas o corte exato pode variar por modelo.',
      'O contexto de 2 milhões de tokens ainda está em pré-visualização e não está amplamente disponível.'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.9,
      coding: 5.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 3.5 Flash e Gemini 3 Pro são os modelos de linguagem multimodal mais avançados do Google, oferecendo uma vasta janela de contexto de até 1 milhão de tokens (até 2 milhões para o Pro em pré-visualização) para análise de grandes volumes de informações em texto, imagem, áudio e vídeo. O Gemini 3.5 Flash é otimizado para velocidade e custo-benefício em tarefas de alto volume, enquanto o Gemini 3 Pro é projetado para raciocínio complexo e desempenho superior. Ambos estão disponíveis via assinatura Google AI Premium (Pro ou Ultra) e API. A família Gemini continua a evoluir rapidamente, com profunda integração no ecossistema Google, tornando-os ferramentas versáteis para diversas aplicações, desde criação de conteúdo até automação complexa.'
  },
  {
    id: 'llama-4-scout-maverick',
    name: 'Llama 4 (Scout & Maverick)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware, licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); uso comercial livre até 700 milhões de usuários por mês (a partir de abril de 2025). API para Llama 4 Scout: aproximadamente US$ 0.09/milhão de tokens (via Meta-llama ou provedores terceiros como Deepinfra). O custo aumenta para o Maverick.',
    pros: [
      'Llama 4 (lançado em 5 de abril de 2025) é a nova geração de modelos "open-weight" da Meta, com versões Scout e Maverick, permitindo uso local gratuito e fine-tuning.',
      'Os modelos Llama 4 utilizam arquitetura Mixture-of-Experts (MoE), otimizando desempenho e eficiência.',
      'Llama 4 Scout (17B parâmetros ativos) oferece uma janela de contexto de 10 milhões de tokens e roda em uma única GPU H100.',
      'Llama 4 é multimodal (aceita entrada de texto e imagem com saída de texto) e multilíngue (12 idiomas).',
      'O modelo Llama 4 Maverick apresenta desempenho competitivo, comparando-se favoravelmente a modelos proprietários.',
      'Ecosistema robusto com parceiros e suporte para fine-tuning.',
      'Um modelo maior, Llama 4 Behemoth (288B parâmetros ativos), está em treinamento e serve como "professor" para os modelos Scout e Maverick.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade e para modelos maiores.',
      'Os custos de infraestrutura para modelos maiores via API podem ser significativos e variam por provedor.',
      'O conhecimento dos modelos Llama 4 é limitado até agosto de 2024.',
      'Behemoth ainda não foi lançado publicamente.'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.8,
      coding: 4.8,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'Llama 4, lançado pela Meta em abril de 2025, representa a mais recente geração de modelos "open-weight" (Scout e Maverick). Ele utiliza a arquitetura Mixture-of-Experts (MoE) e é multimodal, aceitando entradas de texto e imagem. O Llama 4 Scout, com sua janela de contexto de 10M tokens e capacidade de rodar em uma única H100 GPU, é um modelo altamente eficiente e poderoso. Com sua natureza open-weight e suporte multilíngue, o Llama 4 oferece desempenho competitivo em benchmarks de ponta, rivalizando com modelos proprietários. Sua flexibilidade e eficiência de custos o tornam uma escolha poderosa para desenvolvedores e empresas que buscam controle, personalização e desempenho.'
  },
  {
    id: 'gpt-image-2',
    name: 'GPT Image 2 (via ChatGPT Plus)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a GPT-5.5, GPT-5, GPT-4o e limites de uso); Acesso gratuito limitado via Microsoft Designer. API para GPT Image 1: US$ 0.011 por imagem (1024x1024, baixa qualidade). GPT Image 1 Mini é 80% mais barato. Preços da API para GPT Image 2 a serem confirmados.',
    pros: [
      'GPT Image 2 (lançado em 21 de abril de 2026) é o modelo de geração de imagens mais avançado da OpenAI, com excelente compreensão de prompts complexos e narrativos.',
      'Sucede o GPT Image 1 (lançado em março de 2025), que já se destacava pela sua capacidade multimodal nativa, aceitando tanto texto quanto imagem como entradas.',
      'Gera resultados criativos, detalhados e visualmente impressionantes com boa fidelidade e diversas estéticas.',
      'Integração perfeita com ChatGPT, permitindo criação e modificação de imagens via conversação.',
      'Qualidade de imagem superior e renderização aprimorada de texto dentro das imagens em comparação com versões anteriores.',
      'Propriedade total das imagens geradas para uso comercial.',
      'Suporta múltiplas resoluções, incluindo 1024x1024, 1024x1536 e 1536x1024, com capacidade de gerar até 4096x4096 pixels.'
    ],
    cons: [
      'Ainda pode apresentar resultados que parecem "falsos" ou não atingir o fotorrealismo de alguns concorrentes em certos casos.',
      'A geração de imagens leva em média 20-30 segundos por imagem.',
      'O acesso completo e ilimitado requer assinatura do ChatGPT Plus.',
      'Menos recursos de edição direta de imagem em comparação com outras ferramentas.',
      'Preços da API podem ser elevados, especialmente para alta qualidade e resoluções maiores.'
    ],
    score: {
      reasoning: 4.6,
      writing: 3.5,
      coding: 1.0,
      speed: 4.0,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'GPT Image 2, lançado pela OpenAI em abril de 2026, é a mais recente geração de modelos de geração de imagens da empresa, sucedendo o GPT Image 1. Ele é totalmente integrado ao ChatGPT e se destaca pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização aprimorada de texto e adesão à instrução. Como modelo nativamente multimodal, o GPT Image 1 já aceitava entradas de texto e imagem. Disponível via assinatura ChatGPT Plus, a geração de imagens da OpenAI oferece uma experiência intuitiva e poderosa para designers, criadores de conteúdo e qualquer pessoa que busque gerar visuais criativos de alto nível. Apesar de algumas limitações em fotorrealismo extremo e velocidade, sua integração com o ChatGPT e a capacidade de compreender nuances de linguagem o tornam uma ferramenta de arte generativa líder.'
  },
  {
    id: 'midjourney-v7',
    name: 'Midjourney V7',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos (valores anuais/mensais, com base em 2026): Basic US$ 96/ano (~US$ 8/mês) ou US$ 10/mês, com ~200 gerações rápidas; Standard US$ 288/ano (~US$ 24/mês) ou US$ 30/mês, com gerações ilimitadas no modo Relax e ~15 horas de GPU rápida. Pro US$ 576/ano (~US$ 48/mês) ou US$ 60/mês, com ~30 horas de GPU rápida e modo Stealth. O Modo Turbo (2x mais rápido, 2x o custo) está disponível. O Modo Relax não está disponível para o V7 para gerações rápidas.',
    pros: [
      'Midjourney V7 (lançado em 3 de abril de 2025, tornando-se padrão em 17 de junho de 2025) é a versão mais recente e avançada, oferecendo qualidade de imagem excepcional, alta resolução e estética marcante.',
      'Apresenta ferramentas de texto-para-vídeo, capacidades 3D aprimoradas e modelagem 3D "NeRF-like".',
      'Processamento mais rápido, melhor fotorrealismo e interpretação de prompts mais precisa.',
      'O novo "Draft Mode" oferece 10x mais velocidade e 50% de redução de custo para iteração rápida.',
      'Melhor precisão na renderização de texto e maior coerência visual (mãos, corpos, objetos) com detalhes mais precisos e anatomia refinada.',
      'Editor web aprimorado com recursos de edição e personalização, incluindo "Style Tuner" para criar estilos personalizados e "Character Consistency" (--cref).',
      'A versão Niji 7, focada em estética oriental e anime, foi lançada em 9 de janeiro de 2026, com grande aumento na coerência.',
      'Oferece uma ampla gama de parâmetros para ajuste fino das saídas, proporcionando significativo controle criativo.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial.',
      'A interface principal ainda operava via Discord para alguns recursos (antes do Web Editor completo), embora o editor web esteja melhorando.',
      'Não possui API pública oficial, limitando a integração programática.',
      'O modo Relax, que oferece gerações ilimitadas mais lentas, não está disponível para o V7 para jobs rápidos.',
      'Curva de aprendizado para prompt engineering avançado.',
      'Pode apresentar um viés de "beleza convencional" em algumas gerações de pessoas.'
    ],
    score: {
      reasoning: 4.8,
      writing: 2.5,
      coding: 1.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney V7, lançado em abril de 2025 e tornando-se o padrão em junho de 2025, é a versão mais recente e aprimorada do popular gerador de imagens. Ele oferece um salto significativo em velocidade, qualidade visual e coerência, com novas ferramentas de texto-para-vídeo e capacidades 3D. Com o novo "Draft Mode" para iteração rápida e um editor web aprimorado com recursos como "Character Consistency", o V7 se destaca na criação de imagens artísticas e fotorrealistas. Embora a interface principal ainda utilize o Discord para alguns recursos e não haja plano gratuito oficial ou uma API pública, o Midjourney continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível.'
  },
  {
    id: 'stable-diffusion-3',
    name: 'Stable Diffusion 3.5 (Ultra/Core)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); para empresas com mais de US$ 1M de receita anual, licença Enterprise é necessária. API (sistema de créditos: 1 crédito = US$ 0.01): Stable Image Ultra (baseado em SD3.5 Large): US$ 0.08/imagem (maior qualidade). Stable Image Core: US$ 0.03/imagem (velocidade/eficiência). Planos Brand Studio: US$ 50/mês (inclui 5000 créditos/mês, com 25 créditos gratuitos para começar).',
    pros: [
      'Stable Diffusion 3 (lançado no início de 2024, com variantes de 800M a 8B parâmetros) com arquitetura Multimodal Diffusion Transformer (MMDiT), oferece controle aprimorado e melhorias notáveis na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista.',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto, privacidade e fine-tuning (LoRAs, ControlNet).',
      'Múltiplas variantes (Medium, Large, Stable Diffusion 3.5 Large), otimizadas para diferentes necessidades de hardware, velocidade e qualidade.',
      'Qualidade de imagem superior e aderência ao prompt; SD3 Large lidera em aderência ao prompt e rivaliza com modelos maiores em qualidade de imagem.',
      'Stable Image Ultra é o modelo de maior qualidade para fotorrealismo e prompts complexos, enquanto Stable Image Core prioriza velocidade e eficiência.',
      'Otimizado com TensorRT para NVIDIA RTX GPUs, resultando em desempenho aprimorado (SD3 Large requer ~24GB de VRAM).',
      'A Stability AI também oferece Stable Audio para geração de música com modelos open-weight e dados licenciados.',
      'Gera outputs diversos e representativos de diferentes tons de pele e características.',
      'Oferece versatilidade para gerar visuais em praticamente qualquer estilo.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente.',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente (SD3 Large requer aproximadamente 24GB de VRAM).',
      'Pode apresentar dificuldades em renderizar anatomia humana de forma perfeita, especialmente mãos e membros.',
      'A qualidade da saída pode variar mais sem fine-tuning em comparação com soluções gerenciadas.',
      'Preços da API podem ser mais complicados de prever devido ao sistema de créditos e variáveis.'
    ],
    score: {
      reasoning: 4.6,
      writing: 1.8,
      coding: 4.8,
      speed: 4.5,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 3, lançado pela Stability AI no início de 2024, com suas variantes Medium e Large (incluindo Stable Diffusion 3.5 Large), é a geração mais avançada e o padrão ouro para IA visual "open-source". Ele utiliza a arquitetura Multimodal Diffusion Transformer (MMDiT) para oferecer controle milimétrico sobre a geração de imagens, com melhorias significativas na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. Os modelos são "open-weight", permitindo uso local gratuito (com limites de receita para uso comercial) e personalização profunda via fine-tuning. A API da Stability AI oferece Stable Image Ultra (baseado em SD3.5 Large) para maior qualidade e Stable Image Core para velocidade e eficiência. Embora exija investimento em aprendizado e hardware potente para as versões maiores, sua flexibilidade e o custo-benefício o tornam ideal para profissionais que buscam personalização, eficiência e controle.'
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (Agentes de IA)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis (1.000 créditos/mês, 2 cenários ativos, inclui Agentes de IA, intervalo de 15 minutos); Plano Core: US$ 12/mês (anual) ou US$ 10.59/mês (mensal) para 10.000 créditos (cenários ilimitados, intervalo de 1 minuto, inclui Agentes de IA). Plano Pro: US$ 21/mês (anual) ou US$ 18.82/mês (mensal) para 10.000+ créditos (prioridade de execução, variáveis personalizadas, logs completos). Plano Teams: US$ 38/mês por usuário (anual) ou US$ 34.12/mês por usuário (mensal) para 10.000+ créditos (colaboração, gestão de equipes, prioridade de execução). Créditos podem ser comprados adicionalmente (10.000 créditos por US$ 9).',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos (If-else, Merge, Routers, Filters, Iterators, Aggregators, Error Handlers).',
      'Os "Make AI Agents" (disponíveis nos planos pagos) permitem automação inteligente e adaptativa com tomada de decisões em tempo real dentro do canvas, sem necessidade de código.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5/GPT-5/GPT-4o, Claude 4.6 Sonnet/Opus 4.7, Google Gemini 3 Pro/3.5 Flash) e milhares de APIs (3.000+ apps, mais integração via módulo HTTP).',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no fluxo de trabalho.',
      'Registros detalhados de execução (Make Grid) e busca de texto completo em logs (planos Pro e Teams) para depuração e visibilidade aprimoradas.',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier (3-5x mais barato por operação, embora as contagens de operações sejam diferentes).',
      'Funcional plano gratuito para prototipar automações.',
      'Lançamento de "Make Enterprise AI" com recursos de governança e personalização para grandes empresas.'
    ],
    cons: [
      'O consumo de créditos pode ser imprevisível e rápido em cenários complexos com muitos módulos e Agentes de IA (um agente pode consumir 43-50 créditos por execução).',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados e agentes de IA complexos, resultando em uma curva de aprendizado mais acentuada.',
      'Os recursos de colaboração e equipe são limitados nos planos Core e Pro, exigindo o plano Teams para funcionalidade completa.',
      'Cenários no plano Core podem entrar em fila durante picos de uso.',
      'Mensagens de erro podem ser pouco claras em módulos complexos.'
    ],
    score: {
      reasoning: 4.9,
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.6
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Lançou os "Make AI Agents", que permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-5.5, Google Gemini 3 Pro e Anthropic Claude 4.6 Sonnet. Com uma interface altamente intuitiva, o "Make Grid" para visualização em tempo real das automações, e módulos aprimorados de controle de fluxo e funções, é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em créditos, oferecem flexibilidade, tornando-o uma alternativa custo-efetiva para automações complexas, apesar do consumo de créditos poder ser imprevisível para tarefas de IA. O lançamento de "Make Enterprise AI" em 2025 expandiu suas capacidades para grandes corporações.'
  }
];