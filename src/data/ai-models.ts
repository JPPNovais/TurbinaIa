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
    name: 'ChatGPT Plus (GPT-5, GPT-4o)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com limites de uso, acesso a GPT-4o mini, acesso ocasional a GPT-4o); ChatGPT Plus: US$ 20/mês (acesso prioritário e ilimitado a GPT-5, GPT-4o e GPT-4o mini, o1-preview e o1-mini, com limites de mensagem até 5x maiores, recursos avançados como Advanced Data Analysis, navegação web, geração de imagens GPT Image 1, voz real-time e Custom GPTs, 32K token context window). API para GPT-4o: US$ 3.00/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída. Tokens de entrada em cache: US$ 2.50/milhão de tokens. API para GPT-4o Mini: US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída.',
    pros: [
      'GPT-5 (lançado em agosto de 2025) e GPT-4o (reintroduzido para usuários Plus) são os modelos carro-chefe da OpenAI, oferecendo inteligência de ponta com velocidade significativa e capacidades multimodais aprimoradas em texto, voz e visão.',
      'Disponível para usuários gratuitos (com acesso limitado a GPT-4o mini e ocasional a GPT-4o) e assinantes Plus/Team/Enterprise (acesso completo e prioritário aos modelos mais recentes).',
      'Integração nativa com GPT Image 1 (substituto do DALL-E 3 a partir de Março de 2025) para geração de imagens de alta qualidade.',
      'Desempenho superior em compreensão de imagens e discussão de conteúdo visual.',
      'Acesso a recursos como Advanced Data Analysis (anteriormente Code Interpreter), navegação web e Custom GPTs.',
      'Modo de voz avançado com baixa latência (média de 0.32 segundos) e interações humanas fluídas, lançado em setembro de 2024.',
      'Suporte a mais de 50 idiomas e melhor desempenho em idiomas não ingleses.',
      'Novos recursos em 2026: melhorias em uploads de arquivos (até 20 arquivos, mais formatos), cópia de chat, e maior confiabilidade em conversas longas ("Thinking" chats).',
      'Suporte para fine-tuning (personalização corporativa) para GPT-4o desde agosto de 2024.'
    ],
    cons: [
      'Usuários gratuitos têm acesso restrito a mensagens e recursos avançados, além de limites de uso durante picos.',
      'O custo da API pode ser elevado para uso em larga escala, especialmente para os modelos completos.',
      'O conhecimento do GPT-4o é limitado até outubro de 2023 (embora a navegação web e os modelos mais recentes como GPT-5 compensem isso para Plus).',
      'ChatGPT Plus possui um contexto de 32K tokens, menor que algumas ofertas de API de concorrentes ou do próprio GPT-4o API (128K).',
      'A OpenAI reverteu uma atualização do GPT-4o em abril de 2025 devido a "respostas excessivamente complacentes (bajulação)".'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelos modelos GPT-5 e GPT-4o (reintroduzido após o lançamento do GPT-5), representa o auge da inteligência artificial generativa da OpenAI. O GPT-4o, cujo "o" significa "omni", e o GPT-5, o modelo mais recente, combinam perfeitamente texto, áudio e imagem para interações mais ricas e eficientes. O serviço oferece inteligência de ponta com uma velocidade significativamente maior e desempenho aprimorado. Os assinantes do ChatGPT Plus (US$ 20/mês) recebem acesso prioritário e ilimitado aos modelos GPT-5, GPT-4o e GPT-4o mini, juntamente com recursos como Advanced Data Analysis, navegação web, e geração de imagens através do GPT Image 1. Os modelos se destacam na compreensão de prompts complexos, análise de imagens e no modo de voz real-time com latência média de 0.32 segundos. Atualizações em 2026 trouxeram melhorias em uploads de arquivos, cópia de chats e confiabilidade para conversas longas.'
  },
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude 3.5 Sonnet e limites de uso diários); Plano Pro: US$ 20/mês (acesso a Claude 3.5 Sonnet com limites de taxa significativamente mais altos). Planos Team: para equipes, com limites ainda maiores. API para Claude 3.5 Sonnet: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 200K tokens.',
    pros: [
      'Claude 3.5 Sonnet (lançado em 20 de junho de 2024) é o modelo mais avançado da Anthropic, superando Claude 3 Opus, GPT-4o e Gemini 1.5 Pro em benchmarks para raciocínio de nível de pós-graduação e conhecimento de nível universitário.',
      'Opera com o dobro da velocidade do Claude 3 Opus, melhorando a eficiência em tarefas complexas e fluxos de trabalho de várias etapas.',
      'Janela de contexto de 200.000 tokens, ideal para processar grandes volumes de dados.',
      'Capacidades de codificação avançadas, resolvendo 64% das tarefas do SWE-Bench Pro e introduzindo o Artifacts (workspace interativo para código).',
      'Excelente processamento visual, interpretando gráficos, imagens e transcrevendo texto de forma precisa.',
      'Excepcional uso de ferramentas e ótimo para tarefas agenticas complexas de várias etapas.',
      'Disponível gratuitamente no Claude.ai e no aplicativo iOS, com acesso a limites de taxa mais altos para assinantes Pro e Team.',
      'Foco em segurança e alinhamento com a constituição da Anthropic.'
    ],
    cons: [
      'Não possui geração de imagem nativa (foco em compreensão visual e texto/código).',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança.',
      'O custo da API é competitivo, mas mais alto que o Haiku.',
      'O contexto de 200K tokens é generoso, mas menor que alguns modelos concorrentes para cenários de uso extremo de contexto (ex: Gemini 1.5 Pro com 1M/2M tokens).',
      'Ainda não possui um modelo multimodal de voz em tempo real comparável ao GPT-4o.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude 3.5 Sonnet, lançado pela Anthropic em 20 de junho de 2024, é o modelo de ponta da empresa, projetado para as tarefas mais complexas e fluxos de trabalho agenticos. Ele estabelece novos benchmarks em raciocínio de nível de pós-graduação, conhecimento universitário e proficiência em codificação, superando modelos como Claude 3 Opus, GPT-4o e Gemini 1.5 Pro. Com uma janela de contexto de 200.000 tokens, é ideal para análise profunda de grandes volumes de informações e opera com o dobro da velocidade de seu antecessor, o Claude 3 Opus. O Claude 3.5 Sonnet se destaca na escrita natural, compreensão de nuances e capacidades avançadas de visão, interpretando gráficos e transcrevendo texto de imagens. A introdução do Artifacts aprimora ainda mais a experiência de desenvolvedores com um workspace interativo para código. Disponível através de uma assinatura Pro no Claude.ai e via API, o Claude 3.5 Sonnet oferece inteligência de ponta com um excelente equilíbrio entre desempenho e custo-benefício.'
  },
  {
    id: 'gemini-1-5-flash-pro',
    name: 'Gemini 1.5 Flash & Pro (via Gemini Advanced)',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano Google One AI Premium: US$ 19.99/mês (inclui Gemini Advanced com acesso a Gemini 1.5 Pro, 2 TB de armazenamento e integração com Workspace). API para Gemini 1.5 Pro: US$ 7.00/milhão de tokens de entrada e US$ 21.00/milhão de tokens de saída para um contexto de até 1 milhão de tokens (preços sobem para contexto acima de 128K tokens). API para Gemini 1.5 Flash (lançado em maio de 2024): US$ 0.35/milhão de tokens de entrada e US$ 1.05/milhão de tokens de saída, com contexto de até 1 milhão de tokens. Plano gratuito da API para Gemini 1.5 Flash disponível com limites de uso.',
    pros: [
      'Gemini 1.5 Pro (lançado em fevereiro de 2024) é o modelo mais poderoso do Google para raciocínio complexo, e Gemini 1.5 Flash (lançado em maio de 2024) é otimizado para velocidade e eficiência em tarefas de alto volume.',
      'Janela de contexto de até 1 milhão de tokens para Flash e Pro, e até 2 milhões de tokens para Pro em pré-visualização, ideal para processamento de vastos volumes de dados (documentos, código, vídeo, áudio).',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição.',
      'Gemini 1.5 Flash oferece velocidade de saída superior (163.6 tokens por segundo) e é significativamente mais custo-efetivo que o Pro.',
      'Desempenho superior do Gemini 1.5 Pro em tarefas complexas que exigem raciocínio profundo, instrução e escrita criativa.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome) e recursos como Persistent AI Memory e função de chamada aprimorada.',
      'Modelos atualizados com janela de contexto mais longa (até 1 milhão de tokens) para o Gemini Advanced em julho de 2024.'
    ],
    cons: [
      'A API para Gemini 1.5 Pro é mais cara, especialmente para contexto completo e para prompts mais longos (acima de 128K tokens).',
      'Gemini 1.5 Flash, embora rápido e econômico, não é tão preciso ou capaz quanto o 1.5 Pro para tarefas que exigem raciocínio mais profundo.',
      'O conhecimento dos modelos Gemini 1.5 é limitado até o início de 2024.',
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
    description: 'Gemini 1.5 Flash (lançado em maio de 2024) e Gemini 1.5 Pro (lançado em fevereiro de 2024) são os modelos de linguagem multimodal mais avançados do Google, oferecendo uma vasta janela de contexto de até 1 milhão de tokens (até 2 milhões para o Pro em pré-visualização) para análise de grandes volumes de informações em texto, imagem, áudio e vídeo. O Gemini 1.5 Flash é otimizado para velocidade e custo-benefício em tarefas de alto volume, enquanto o 1.5 Pro é projetado para raciocínio complexo e desempenho superior. Ambos estão disponíveis via assinatura Google One AI Premium e API. A família Gemini continua a evoluir rapidamente, com profunda integração no ecossistema Google, tornando-os ferramentas versáteis para diversas aplicações, desde criação de conteúdo até automação complexa.'
  },
  {
    id: 'llama-3-8b-70b',
    name: 'Llama 3 (8B & 70B)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware, licença comunitária). API para Llama 3 8B: a partir de US$ 0.05/milhão de tokens de entrada e US$ 0.08/milhão de tokens de saída (via Meta-llama ou provedores terceiros como Deepinfra). O custo aumenta para o modelo 70B.',
    pros: [
      'Llama 3 (lançado em abril de 2024) é a nova geração de modelos "open-weight" da Meta, com versões 8B e 70B parâmetros, permitindo uso local gratuito e fine-tuning.',
      'O modelo Llama 3 70B apresenta desempenho competitivo, comparando-se favoravelmente a modelos proprietários como Gemini Pro 1.5 e Claude 3 Sonnet.',
      'Excelentes habilidades de conversação e suporte multilíngue (mais de 100 idiomas).',
      'Eficiente e custo-efetivo para implementações em larga escala, especialmente quando auto-hospedado.',
      'Um modelo maior de 405B parâmetros está em treinamento e foi confirmado como multimodal (texto + imagem).',
      'Ecosistema robusto com parceiros e suporte para fine-tuning.',
      'Versão "Llama 3.1" ou "Llama 4" esperada em breve, com melhorias significativas.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade e para modelos maiores.',
      'As versões 8B e 70B são atualmente apenas de texto.',
      'Os custos de infraestrutura para modelos maiores via API podem ser significativos e variam por provedor.',
      'O conhecimento dos modelos Llama 3 é limitado até o período de treinamento (dados até março de 2023).'
    ],
    score: {
      reasoning: 4.8,
      writing: 4.7,
      coding: 4.7,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'Llama 3, lançado pela Meta em abril de 2024, representa a mais recente geração de modelos "open-weight" (8B e 70B parâmetros). Ele oferece desempenho altamente competitivo em benchmarks de ponta, rivalizando com modelos proprietários, e se destaca por suas excelentes habilidades de conversação e suporte multilíngue em mais de 100 idiomas. Com sua natureza open-weight, o Llama 3 permite uso local com hardware adequado ou acesso via API com preços competitivos através de diversos provedores. A Meta continua a inovar com a série Llama, com um modelo de 405B parâmetros multimodal (texto + imagem) ainda em treinamento. Sua flexibilidade e eficiência de custos o tornam uma escolha poderosa para desenvolvedores e empresas que buscam controle, personalização e desempenho. Uma próxima geração (Llama 3.1 ou Llama 4) é esperada em breve.'
  },
  {
    id: 'dall-e-3',
    name: 'DALL-E 3 (via ChatGPT Plus / GPT Image 1)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a GPT-5, GPT-4o e limites de uso); Acesso gratuito limitado via Microsoft Designer (com 15 créditos mensais). API para DALL-E 3: a partir de US$ 0.02 por imagem (1024x1024). O GPT Image 1, baseado em GPT-4o, substituiu DALL-E 3 em março de 2025 para usuários ChatGPT.',
    pros: [
      'DALL-E 3 (anunciado em setembro de 2023) e seu sucessor, GPT Image 1 (Março 2025), são os modelos de geração de imagens da OpenAI, com excelente compreensão de prompts complexos e narrativos.',
      'Gera resultados criativos, detalhados e visualmente impressionantes com boa fidelidade e diversas estéticas.',
      'Integração perfeita com ChatGPT, permitindo criação e modificação de imagens via conversação.',
      'Qualidade de imagem superior e renderização aprimorada de texto dentro das imagens em comparação com versões anteriores.',
      'Propriedade total das imagens geradas para uso comercial.',
      'Fácil de usar para iniciantes e profissionais, com interface intuitiva via ChatGPT.'
    ],
    cons: [
      'Ainda pode apresentar resultados que parecem "falsos" ou não atingir o fotorrealismo de alguns concorrentes em certos casos.',
      'A geração de imagens leva em média 20-30 segundos por imagem.',
      'O acesso completo e ilimitado requer assinatura do ChatGPT Plus.',
      'Menos recursos de edição direta de imagem em comparação com outras ferramentas.',
      'Propenso a erros em algumas situações.',
      'Substituído por GPT Image 1 no ChatGPT em março de 2025.'
    ],
    score: {
      reasoning: 4.5,
      writing: 3.5,
      coding: 1.0,
      speed: 4.0,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'DALL-E 3, anunciado em setembro de 2023, foi o modelo de geração de imagens mais avançado da OpenAI, totalmente integrado ao ChatGPT. Ele se destacava pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização aprimorada de texto. A partir de março de 2025, o GPT Image 1, baseado em GPT-4o, substituiu o DALL-E 3 no ChatGPT. Disponível via assinatura ChatGPT Plus, a geração de imagens da OpenAI oferece uma experiência intuitiva e poderosa para designers, criadores de conteúdo e qualquer pessoa que busque gerar visuais criativos de alto nível. Apesar de algumas limitações em fotorrealismo extremo e velocidade, sua integração com o ChatGPT e a capacidade de compreender nuances de linguagem o tornam uma ferramenta de arte generativa líder.'
  },
  {
    id: 'midjourney-v6-1',
    name: 'Midjourney V6.1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos (valores anuais/mensais): Basic US$ 96/ano (~US$ 8/mês) ou US$ 10/mês, com ~3.3 horas de GPU rápida; Standard US$ 288/ano (~US$ 24/mês) ou US$ 30/mês, com ~15 horas de GPU rápida e modo Relax (para V6); Pro US$ 576/ano (~US$ 48/mês) ou US$ 60/mês, com ~30 horas de GPU rápida e modo Stealth. O modo Relax não está disponível para o V6.1. O Modo Turbo (2x mais rápido, 2x o custo) foi lançado em julho de 2024.',
    pros: [
      'Midjourney V6.1 (lançado em maio de 2024) é a versão mais recente e avançada, oferecendo qualidade de imagem excepcional, alta resolução e estética marcante.',
      'Aproximadamente 25% mais rápido para trabalhos de imagem padrão que versões anteriores; o Modo Turbo (julho de 2024) duplica a velocidade.',
      'Melhor precisão na renderização de texto e maior coerência visual (mãos, corpos, objetos) com detalhes mais precisos e anatomia refinada.',
      'Gera imagens HD (1024x1024 pixels e outros aspect ratios) com alta qualidade.',
      'Editor web em evolução com recursos de edição e personalização para aprender o estilo do usuário; o recurso "Style Tuner" permite criar estilos personalizados.',
      'Oferece uma ampla gama de parâmetros para ajuste fino das saídas, proporcionando significativo controle criativo.',
      'Capacidade de gerar "variations region" (edição iterativa) e usar "pan", "zoom" e "remix" para criar novas composições a partir de imagens existentes.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial.',
      'A interface principal ainda opera via Discord para alguns recursos, embora o editor web esteja melhorando.',
      'Não possui API pública oficial, limitando a integração programática.',
      'A geração de vídeo é do tipo "image-to-video" (clipes curtos), não "text-to-video" completo, e não inclui áudio.',
      'O modo Relax, que oferece gerações ilimitadas mais lentas, não está disponível para o V6.1.',
      'Curva de aprendizado para prompt engineering avançado.',
      'Os modelos V7 e V8 estão em desenvolvimento, potencialmente superando o V6.1 no futuro.'
    ],
    score: {
      reasoning: 4.7,
      writing: 2.5,
      coding: 1.0,
      speed: 5.0,
      value: 4.6
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney V6.1, lançado em maio de 2024, é a versão mais recente e aprimorada do popular gerador de imagens, oferecendo um salto significativo em velocidade, qualidade visual e coerência. Com capacidades de renderização de texto aprimoradas e detalhes mais precisos em elementos complexos como mãos e corpos, o V6.1 se destaca na criação de imagens artísticas e fotorrealistas. A introdução do Modo Turbo em julho de 2024 permitiu dobrar a velocidade de geração, e o "Style Tuner" oferece personalização de estilo. Embora a interface principal ainda utilize o Discord para alguns recursos e não haja plano gratuito oficial ou uma API pública, o Midjourney continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível. As versões V7 e V8 estão em desenvolvimento.'
  },
  {
    id: 'stable-diffusion-3',
    name: 'Stable Diffusion 3 (Medium/Large)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware). Para empresas com mais de US$ 1M de receita anual, é necessária uma licença Enterprise. Pago via API (preços variam por provedor): Stable Image Ultra (baseado em SD3 Large): US$ 0.08/imagem. Stable Image Core: US$ 0.03/imagem. Stable Diffusion 3 Large: US$ 0.065/imagem. Stable Diffusion 3 Large Turbo: US$ 0.04/imagem. A API da Stability AI usa um sistema de créditos (1 crédito = US$ 0.01).',
    pros: [
      'Stable Diffusion 3 (lançado no início de 2024, com variantes de 800M a 8B parâmetros) com arquitetura Multimodal Diffusion Transformer (MMDiT), oferece controle aprimorado e melhorias notáveis na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista.',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto, privacidade e fine-tuning (LoRAs, ControlNet).',
      'Múltiplas variantes (Medium, Large, Large Turbo), otimizadas para diferentes necessidades de hardware, velocidade e qualidade.',
      'Qualidade de imagem superior e aderência ao prompt; SD3 Large lidera em aderência ao prompt e rivaliza com modelos maiores em qualidade de imagem.',
      'Otimizado com TensorRT para NVIDIA RTX GPUs, resultando em desempenho aprimorado (SD3 Large requer ~24GB de VRAM).',
      'A Stability AI também oferece Stable Audio para geração de música com modelos open-weight e dados licenciados.',
      'Gera outputs diversos e representativos de diferentes tons de pele e características.',
      'Oferece versatilidade para gerar visuais em praticamente qualquer estilo.',
      'Stable Cascade e Stable Diffusion XL (SDXL) também disponíveis como modelos populares.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente.',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente (SD3 Large requer aproximadamente 24GB de VRAM).',
      'Pode apresentar dificuldades em renderizar anatomia humana de forma perfeita, especialmente mãos e membros.',
      'A qualidade da saída pode variar mais sem fine-tuning em comparação com soluções gerenciadas.',
      'Preços da API podem ser mais complicados de prever devido ao sistema de créditos e variáveis.'
    ],
    score: {
      reasoning: 4.5,
      writing: 1.8,
      coding: 4.8,
      speed: 4.5,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 3, lançado pela Stability AI no início de 2024, com suas variantes Medium e Large, é a geração mais avançada e o padrão ouro para IA visual "open-source". Ele utiliza a arquitetura Multimodal Diffusion Transformer (MMDiT) para oferecer controle milimétrico sobre a geração de imagens, com melhorias significativas na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. Os modelos são "open-weight", permitindo uso local gratuito (com limites de receita para uso comercial) e personalização profunda via fine-tuning. Embora exija investimento em aprendizado e hardware potente para as versões maiores (SD3 Large requer ~24GB de VRAM), sua flexibilidade e o custo-benefício o tornam ideal para profissionais que buscam personalização, eficiência e controle. A plataforma também inclui Stable Audio para geração de música, e modelos como Stable Cascade e SDXL continuam populares.'
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (com Agentes de IA)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis (1.000 créditos/mês, 2 cenários ativos, inclui Agentes de IA, intervalo de 15 minutos); Plano Core: US$ 10.59/mês (mensal) ou US$ 9/mês (anual) para 10.000 créditos (cenários ilimitados, intervalo de 1 minuto, inclui Agentes de IA). Plano Pro: US$ 18.82/mês (mensal) ou US$ 16/mês (anual) para 10.000+ créditos (prioridade de execução, variáveis personalizadas, logs completos). Plano Teams: US$ 34.12/mês por usuário (mensal) ou US$ 29/mês por usuário (anual) para 10.000+ créditos (colaboração, gestão de equipes, prioridade de execução). Créditos podem ser comprados adicionalmente (10.000 créditos por US$ 9).',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos (If-else, Merge, Routers, Filters, Iterators, Aggregators, Error Handlers).',
      'Os "Make AI Agents" (disponíveis nos planos pagos) permitem automação inteligente e adaptativa com tomada de decisões em tempo real dentro do canvas, sem necessidade de código.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-4o/GPT-5, Claude 3.5 Sonnet, Google Gemini 1.5 Pro) e milhares de APIs (3.000+ apps, mais integração via módulo HTTP).',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no fluxo de trabalho.',
      'Registros detalhados de execução (Make Grid) e busca de texto completo em logs (planos Pro e Teams) para depuração e visibilidade aprimoradas.',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier (3-4x mais barato).',
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
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Lançou os "Make AI Agents", que permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-5/GPT-4o, Google Gemini 1.5 Pro e Anthropic Claude 3.5 Sonnet. Com uma interface altamente intuitiva, o "Make Grid" para visualização em tempo real das automações, e módulos aprimorados de controle de fluxo e funções, é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em créditos, oferecem flexibilidade, tornando-o uma alternativa custo-efetiva para automações complexas, apesar do consumo de créditos poder ser imprevisível para tarefas de IA. O lançamento de "Make Enterprise AI" em 2025 expandiu suas capacidades para grandes corporações.'
  }
];