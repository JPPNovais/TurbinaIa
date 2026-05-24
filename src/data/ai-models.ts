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
    pricing: 'Plano gratuito disponível (com limites de uso, acesso a GPT-5.5 Instant, que substituiu GPT-5.3 Instant em 5 de maio de 2026); ChatGPT Go: US$ 8/mês (GPT-5.5 Instant ilimitado, criação de imagens, uploads de arquivos); ChatGPT Plus: US$ 20/mês (acesso prioritário ao GPT-5.5 Thinking, Sora, Deep Research, imagens 2.0); ChatGPT Pro (US$ 100/mês ou US$ 200/mês) para limites de uso mais altos. API GPT-5.5 Thinking: Preços a partir de US$ 40/milhão de tokens (GPT for Work, sem chave API). API GPT-5: US$ 40/milhão de tokens. API GPT-4o: US$ 2.50/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída. API GPT-4o mini: US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de milhões de tokens de saída.',
    pros: [
      'GPT-5.5 (lançado em abril de 2026) é o modelo carro-chefe da OpenAI, com capacidades multimodais avançadas e raciocínio aprimorado, sucedendo GPT-5 (lançado em agosto de 2025).',
      'Disponível para usuários gratuitos (com acesso ao GPT-5.5 Instant, o modelo padrão para todos os usuários desde 5 de maio de 2026) e assinantes Plus/Pro/Business/Enterprise.',
      'Integração nativa com DALL-E (agora ChatGPT Images 2.0) para geração de imagens de alta qualidade.',
      'Desempenho superior em benchmarks de linguagem, programação (74.9% no SWE-bench Verified) e visão, com melhor interpretação de prompts e 80% menos alucinações que GPT-4o.',
      'Acesso a recursos como Advanced Data Analysis (anteriormente Code Interpreter) e navegação web.',
      'Modo de voz avançado com GPT-5 (que integra as capacidades de GPT-4o), mantido para usuários Plus.',
      'O sistema GPT-5/5.5 usa um roteador que decide automaticamente qual modelo usar (fast, high-throughput ou deeper reasoning), e o GPT-5.5 Thinking e Pro oferecem níveis de raciocínio mais profundos.',
      'GPT-4o, apesar de ter sido descontinuado do ChatGPT em fevereiro de 2026, foi reintroduzido para assinantes Plus após feedback dos usuários e permanece disponível via API.',
      'Capacidade de processar e integrar texto, código e imagens dentro da mesma requisição, com raciocínio coordenado entre formatos.',
      'Contexto total de até 400.000 tokens (272K de entrada + 128K de saída) para o GPT-5.'
    ],
    cons: [
      'Ainda pode apresentar alucinações e vieses, embora os modelos mais recentes busquem minimizar isso.',
      'Modelos anteriores como GPT-4o e GPT-5 têm conhecimento limitado até agosto de 2024 e agosto de 2025, respectivamente, embora a navegação web e atualizações de modelos como GPT-5.5 minimizem isso.',
      'Acesso completo aos recursos mais avançados (Thinking/Pro) requer planos pagos.',
      'Preços da API podem ser caros para uso em larga escala, especialmente para os modelos mais avançados como GPT-5 e GPT-5.5 Thinking.',
      'Embora o GPT-5.5 seja o modelo principal, o trabalho em sua "personalidade" para torná-lo "mais caloroso" ainda está em andamento.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelo modelo GPT-5.5 (lançado em abril de 2026), representa o auge da inteligência artificial generativa da OpenAI. O GPT-5.5, que inclui versões Instant (padrão para todos os usuários), Thinking e Pro, oferece capacidades multimodais avançadas, combinando perfeitamente texto, áudio e imagem para interações mais ricas e eficientes. Lançado em agosto de 2025, o GPT-5 já estabeleceu novos benchmarks em raciocínio, programação (74.9% no SWE-bench Verified) e geração criativa, com 80% menos alucinações que seu predecessor GPT-4o. Os assinantes do ChatGPT Plus (US$ 20/mês) recebem acesso prioritário ao GPT-5.5 Thinking, o mais recente da série 5, juntamente com recursos como Sora (geração de vídeo), Deep Research e o aprimorado ChatGPT Images 2.0. A arquitetura do GPT-5.5 utiliza um roteador inteligente para selecionar automaticamente o nível de raciocínio necessário, e o modelo oferece um contexto total de até 400.000 tokens. A OpenAI continua a aprimorar seus modelos, oferecendo um ecossistema versátil para diversas aplicações, desde criação de conteúdo até automação complexa.'
  },
  {
    id: 'claude-opus-4-7',
    name: 'Claude Opus 4.7',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso ao Sonnet 4.6 e limites de uso diários); Plano Pro US$ 20/mês (global, acesso ao Claude Opus 4.7 e Sonnet 4.6); Planos Max: US$ 100/mês (5x Pro) ou US$ 200/mês (20x Pro). API para Claude Opus 4.7: US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída. API para Claude Sonnet 4.6: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída. API para Claude Haiku 4.5: US$ 1.00/milhão de tokens de entrada e US$ 5.00/milhão de tokens de saída. Prompt caching oferece 90% de economia e Batch API oferece 50% de desconto.',
    pros: [
      'Claude Opus 4.7 (lançado em abril de 2026) é o modelo mais avançado da Anthropic, otimizado para raciocínio complexo, fluxos de trabalho agenticos e análise de longo contexto, com melhorias notáveis em engenharia de software avançada e tarefas de codificação difíceis.',
      'Janela de contexto de 1 milhão de tokens para Opus 4.7, Opus 4.6 e Sonnet 4.6, ideal para processar vastos volumes de dados.',
      'Define novos padrões em raciocínio de nível de pós-graduação, conhecimento de nível de graduação e proficiência em codificação.',
      'Desempenho superior em codificação (Claude Code), visão (compreensão visual aprimorada, com maior resolução de imagens) e tarefas complexas de várias etapas.',
      'Estilo de escrita natural e humanizado, com melhor compreensão de nuances e humor.',
      'Capacidades de visão de ponta, interpretando gráficos e transcrevendo texto de imagens imperfeitas.',
      'Novos recursos como "Computer Use" (beta em outubro de 2024) para controle direto do computador, "Agent Teams" (com Opus 4.6) para orquestração de sub-agentes, e o lançamento de Claude Design (ferramenta de criação visual) em abril de 2026 para usuários pagos.',
      'Sonnet 4.6 (lançado em fevereiro de 2026) oferece um excelente equilíbrio entre inteligência, velocidade e custo, superando o antigo Claude 3 Opus em benchmarks.',
      'Opus 4.7 introduz um novo nível de esforço \'xhigh\' para controle mais refinado entre raciocínio e latência.'
    ],
    cons: [
      'Sem geração de imagem nativa (foco em compreensão visual e texto/código).',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança.',
      'O custo da API para Opus, embora reduzido em relação às versões anteriores, ainda é mais alto para uso intensivo em comparação com modelos Flash de concorrentes.',
      'Planos Max são apenas mensais, sem desconto anual.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 4.8,
      value: 4.6
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude Opus 4.7, lançado pela Anthropic em abril de 2026, é o modelo de ponta da empresa, projetado para as tarefas mais complexas e fluxos de trabalho agenticos. Ele estabelece novos benchmarks em raciocínio de nível de pós-graduação, conhecimento universitário e proficiência em codificação, com melhorias notáveis em engenharia de software avançada. Com uma vasta janela de contexto de 1 milhão de tokens (também disponível no Opus 4.6 e Sonnet 4.6), é ideal para análise profunda de grandes volumes de informações, incluindo bases de código inteiras e documentos extensos. O Opus 4.7 se destaca na escrita natural, compreensão de nuances e capacidades avançadas de visão, como a interpretação de gráficos e a transcrição de texto de imagens imperfeitas, suportando imagens de maior resolução. Recursos como "Claude Code", "Computer Use" e a nova ferramenta "Claude Design" (lançada em abril de 2026) ampliam sua versatilidade, permitindo interações mais diretas com sistemas externos e criação visual. Disponível através de assinatura Pro no Claude.ai e via API, o Opus 4.7 oferece inteligência de ponta a um custo-benefício aprimorado em relação aos seus antecessores.'
  },
  {
    id: 'gemini-3-5-flash-pro',
    name: 'Gemini 3.5 Flash & Pro (via Gemini Advanced)',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano Google One AI Premium: US$ 19.99/mês (inclui Gemini Advanced com acesso a modelos Pro, 2 TB de armazenamento e outros benefícios Google One). Planos Google AI Pro: US$ 19.99/mês (inclui Gemini 2.5 Pro, Deep Research, geração de vídeo, 1.000 créditos AI/mês). Google AI Ultra: US$ 100/mês ou US$ 200/mês para limites de uso mais altos. API para Gemini 3.5 Flash (lançado em maio de 2026): US$ 1.50/milhão de tokens de entrada e US$ 9.00/milhão de tokens de saída para um contexto de 1 milhão de tokens. API para Gemini 3.1 Pro: US$ 2.00/milhão de tokens de entrada e US$ 12.00/milhão de tokens de saída para contexto de até 200K tokens. US$ 4.00/milhão de tokens de entrada e US$ 18.00/milhão de tokens de saída para contexto acima de 200K tokens (até 2M tokens). API para Gemini 2.5 Flash-Lite: US$ 0.10/milhão de tokens de entrada e US$ 0.40/milhão de tokens de saída. Google AI Studio é gratuito para experimentação com modelos Flash e Flash-Lite. Gemini 3.5 Pro será lançado em junho de 2026, com preços ainda a serem anunciados.',
    pros: [
      'Gemini 3.5 Flash (lançado em maio de 2026) é o modelo mais inteligente do Google para desempenho contínuo em tarefas agenticas e de codificação, superando o Gemini 3.1 Pro em benchmarks e sendo 4 vezes mais rápido.',
      'Gemini 3.1 Pro (lançado em fevereiro de 2026) é um modelo poderoso e versátil, com excelente equilíbrio entre qualidade, desempenho e custo.',
      'Janela de contexto de até 2 milhões de tokens para modelos Pro (Gemini 2.0 Pro e 3.1 Pro), e 1 milhão de tokens para Gemini 3.5 Flash, ideal para processamento de grandes volumes de dados (documentos, código, vídeo, áudio).',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição, com saídas multimodais nativas.',
      'Desempenho superior em tarefas complexas que exigem raciocínio profundo, instrução e escrita criativa.',
      'Arquitetura Mixture-of-Experts (MoE) para maior eficiência computacional (presente no 1.5 Pro).',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome) e recursos como Personal Intelligence, Deep Research e Gemini Spark (agente de IA pessoal com 3.5 Flash).',
      'Gemini Omni (lançado em maio de 2026) permite a criação de vídeos cinematográficos a partir de prompts de texto, imagem e vídeo.',
      'Gemini 3.5 Pro será lançado em junho de 2026.'
    ],
    cons: [
      'API pode ser mais cara para contexto completo de 2M de tokens em comparação com modelos mais leves, e o preço muda com o tamanho do contexto.',
      'Modelos Pro são agora pagos na Google AI Studio (desde abril de 2026).',
      'Alguns filtros de segurança podem ser rigorosos.',
      'Apesar da janela de 2M tokens, alguns usuários relataram problemas de interrupção com outputs longos, indicando que o limite de tokens de saída (8192 para 3.1 Pro, 65536 para 3.5 Flash) pode ser um gargalo.',
      'Pode ser mais verboso e lento que alguns concorrentes para tarefas simples.',
      'O conhecimento do Gemini 3.5 Flash é limitado até janeiro de 2025.'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.9,
      coding: 5.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 3.5 Flash, lançado em maio de 2026, é o modelo de linguagem multimodal mais avançado do Google para tarefas agenticas e de codificação, e o primeiro da série 3.5. Ele oferece uma vasta janela de contexto de até 1 milhão de tokens para o Flash e 2 milhões para o 3.1 Pro (estável em fevereiro de 2026), permitindo a análise de grandes volumes de informações em texto, imagem, áudio e vídeo, e se baseia em uma arquitetura Mixture-of-Experts (MoE) para eficiência. Aprimorado para raciocínio complexo, geração de conteúdo e codificação, o Gemini 3.5 Flash está disponível via assinatura Google One AI Premium e API. O Gemini 3.5 Pro será lançado em junho de 2026. A família Gemini continua a evoluir rapidamente com o lançamento do Gemini Omni (maio de 2026) para geração de vídeo cinematográfico a partir de diversas entradas. Sua profunda integração com o Google Workspace e recursos como Personal Intelligence e Gemini Spark (agente de IA pessoal) o tornam uma ferramenta versátil para diversas aplicações, com preços de API adaptáveis ao uso do contexto e um desempenho 4 vezes mais rápido para o Flash.'
  },
  {
    id: 'llama-4-maverick',
    name: 'Llama 4 Maverick',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware). API para Llama 4 Maverick: a partir de US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída (via provedores como Deepinfra). Groq oferece a partir de US$ 0.59/milhão de tokens de entrada e US$ 0.79/milhão de tokens de saída (com alta velocidade). Azure oferece US$ 5.33/milhão de tokens de entrada e US$ 16.00/milhão de tokens de saída. API para Llama 4 Scout: a partir de US$ 0.08/milhão de tokens de entrada e US$ 0.30/milhão de tokens de saída. Os modelos Llama 4 Scout e Maverick foram lançados em 5 de abril de 2025.',
    pros: [
      'Llama 4 (lançado em abril de 2025) é a nova geração de modelos "open-weight" da Meta, com arquitetura Mixture-of-Experts (MoE) para eficiência.',
      'Llama 4 Maverick (17B active parameters, 128 experts) oferece desempenho competitivo com modelos proprietários e capacidades nativamente multimodais e multilíngues (12 idiomas).',
      'Janela de contexto estendida: 1 milhão de tokens para Maverick e até 10 milhões de tokens para Llama 4 Scout. Llama 3.1 já tinha 128K tokens.',
      'Pode rodar localmente no seu computador (com hardware adequado), oferecendo controle absoluto e privacidade.',
      'Otimizado para "tool use", facilitando a interface com programas externos para pesquisa, geração de imagens, execução de código e raciocínio matemático.',
      'Llama 4 Behemoth (ainda em treinamento) promete superar GPT-4.5, Claude Sonnet 3.7 e Gemini 2.0 Pro em benchmarks STEM.',
      'Ecossistema robusto com parceiros e suporte para fine-tuning.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade, especialmente para modelos maiores.',
      'Os custos de infraestrutura para modelos maiores via API podem ser significativos e variam por provedor.',
      'O conhecimento limitado (cutoff de agosto de 2024 para Llama 4) pode ser menos atualizado que modelos proprietários com integração de pesquisa em tempo real.',
      'Apesar de ser nativamente multimodal, Llama 3.2 (versão anterior) usava adaptadores para visão.'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.8,
      coding: 4.8,
      speed: 5.0,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'Llama 4 Maverick, lançado pela Meta em abril de 2025 como parte da família Llama 4, representa a mais recente geração de modelos "open-weight" com uma arquitetura Mixture-of-Experts (MoE) para maior eficiência. Ele oferece desempenho altamente competitivo em benchmarks de ponta, rivalizando com modelos proprietários, e é nativamente multimodal e multilíngue, suportando até 12 idiomas. Com uma janela de contexto impressionante de 1 milhão de tokens (e 10 milhões para Llama 4 Scout), é ideal para análise de grandes bases de código e conversas extensas. O Llama 4 Maverick permite uso local com hardware adequado ou acesso via API com preços competitivos através de diversos provedores. A Meta continua a inovar com a série Llama, com o Llama 4 Behemoth ainda em treinamento e um ecossistema robusto que solidifica sua posição como uma escolha poderosa e flexível para desenvolvedores e empresas que buscam controle, personalização e eficiência de custos.'
  },
  {
    id: 'chatgpt-images-2-0',
    name: 'ChatGPT Images 2.0 (GPT Image 1.5)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com limites de uso para o Thinking Mode); Grátis no ChatGPT Free (Instant Mode) e Microsoft Copilot (com limitações); API para GPT Image 1.5: a partir de US$ 0.009 por imagem. API para GPT Image 1: a partir de US$ 0.011 por imagem (qualidade baixa) até US$ 0.167 por imagem (qualidade alta e alta resolução). API para GPT Image 1 Mini: a partir de US$ 0.005 por imagem (qualidade baixa). DALL-E 3 (agora modelo legado): a partir de US$ 0.04 por imagem (qualidade padrão).',
    pros: [
      'ChatGPT Images 2.0 (lançado em abril de 2026, impulsionado por GPT Image 1.5) é o modelo de geração de imagens carro-chefe da OpenAI, com excelente compreensão de prompts conversacionais.',
      'Qualidade de imagem superior e renderização precisa de texto dentro das imagens (melhor que DALL-E 3 e Midjourney v7).',
      'Gera resultados criativos, detalhados e visualmente impressionantes com alta fidelidade e diversas estéticas.',
      'Fácil de usar para iniciantes e profissionais, com interface intuitiva via ChatGPT e capacidade de reescrever prompts para melhores resultados.',
      'Melhor consistência visual em séries de imagens relacionadas.',
      'Suporte a inputs multimodais (texto e imagem) com saída de imagem.',
      'Disponível para usuários gratuitos (Instant Mode) e assinantes Plus (Thinking Mode).'
    ],
    cons: [
      'O modo Thinking (com recursos avançados) requer assinatura do ChatGPT Plus.',
      'Pode ser mais lento que DALL-E 3 devido à etapa adicional de reescrita de prompt, embora a qualidade compense.',
      'Pode não atingir o fotorrealismo artístico e estilização de outros geradores em certos casos (como Midjourney).',
      'Menos controle preciso sobre detalhes como layout e posicionamento de caracteres em comparação com ferramentas mais especializadas.',
      'DALL-E 3 (modelo anterior) foi aposentado do ChatGPT em fevereiro de 2026, embora ainda disponível via API e para alguns usos legados.'
    ],
    score: {
      reasoning: 4.9,
      writing: 1.0, // Score for general writing is irrelevant in this category, keeping it low.
      coding: 1.0, // Score for coding is irrelevant in this category, keeping it low.
      speed: 4.5,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Images 2.0, impulsionado pelo modelo GPT Image 1.5 (lançado em dezembro de 2025), é o modelo de geração de imagens mais avançado da OpenAI. Totalmente integrado ao ChatGPT, ele se destaca pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização precisa de texto. Lançado em abril de 2026, o ChatGPT Images 2.0 oferece um "Instant Mode" gratuito e um "Thinking Mode" mais avançado para assinantes Plus, com raciocínio, pesquisa na web e consistência de caracteres. Sua arquitetura multimodal (processa texto e imagem) garante maior fidelidade e aderência ao prompt, superando o DALL-E 3 (agora modelo legado) em muitos aspectos de qualidade e precisão. É uma ferramenta intuitiva e poderosa para designers, criadores de conteúdo e qualquer pessoa que busque gerar visuais criativos de alto nível, embora possa ser ligeiramente mais lento em alguns cenários devido ao processamento inteligente de prompts.'
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney v8.1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos (valores mensais): Basic US$ 10/mês (ou US$ 8/mês anual) com ~3.3 horas de GPU rápida; Standard US$ 30/mês (ou US$ 24/mês anual) com ~15 horas de GPU rápida e modo Relax ilimitado; Pro US$ 60/mês (ou US$ 48/mês anual) com ~30 horas de GPU rápida, modo Relax e modo Stealth; Mega US$ 120/mês (ou US$ 1152/ano) com ~60 horas de GPU rápida, modo Relax e modo Stealth.',
    pros: [
      'Midjourney v8.1 (lançado em abril de 2026) é a versão mais rápida e avançada, oferecendo fotorealismo aprimorado e texturas mais ricas.',
      'Aproximadamente 4-5 vezes mais rápido para trabalhos de imagem padrão que versões anteriores (v8.1).',
      'Melhor precisão na renderização de texto, com melhorias significativas em comparação com as versões anteriores.',
      'Melhor coerência de imagem (mãos, corpos, objetos) e detalhes mais precisos.',
      'Novos upscalers 2x com melhor qualidade de imagem/textura e capacidade de gerar imagens HD (2K).',
      'Editor web moderno (lançado em agosto de 2024) com recursos de edição, organização, inpainting, outpainting, e "Personalization" para aprender o estilo do usuário.',
      'Introdução de ferramentas de texto-para-vídeo e capacidades 3D com o v7.',
      'Modo Relax ilimitado disponível nos planos Standard e superiores.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial.',
      'A interface principal ainda opera via Discord para alguns recursos, embora o editor web esteja melhorando.',
      'Ainda pode ter vieses de "beleza convencional" em imagens de pessoas.',
      'Menos preciso que o GPT Image 2 para texto complexo e fotorrealismo técnico/comercial.',
      'Não possui API pública oficial, limitando a integração programática.'
    ],
    score: {
      reasoning: 4.7,
      writing: 2.5, // Contextualized to text in images, not general writing.
      coding: 1.0, // Irrelevant.
      speed: 5.0,
      value: 4.6
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney v8.1, lançado em abril de 2026, é a versão mais recente e aprimorada do popular gerador de imagens, oferecendo um salto significativo em velocidade, qualidade visual e coerência. Com capacidades de renderização de texto aprimoradas e detalhes mais precisos em elementos complexos como mãos e corpos, o v8.1 se destaca na criação de imagens artísticas e fotorrealistas. A introdução do editor web (agosto de 2024) e do recurso "Personalization" (v7) facilita a edição e adaptação ao estilo do usuário. A versão 7 (abril de 2025) também trouxe ferramentas de texto-para-vídeo e capacidades 3D, expandindo as possibilidades criativas. Embora ainda não ofereça um plano gratuito oficial ou uma API pública, o Midjourney continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível, com planos de assinatura que incluem um modo "Relax" ilimitado para gerações mais econômicas.'
  },
  {
    id: 'stable-diffusion-3-5',
    name: 'Stable Diffusion 3.5 (Medium/Large/Turbo)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware). Licença Creator (Professional): a partir de US$ 20/mês para empresas menores (acima de US$ 1M de receita anual). Pago via API (preços variam por provedor e variante): SD3.5 Large: estimado em US$ 0.065/imagem. SD3.5 Turbo: estimado em US$ 0.040/imagem. Stable Diffusion 3.0 (base): a partir de US$ 0.003/imagem (512x512) até US$ 0.08/imagem (1536x1536). A Stability AI anunciou um aumento de preços para serviços de API selecionados a partir de 1º de agosto de 2025.',
    pros: [
      'Stable Diffusion 3.5 (lançado em outubro de 2024), com arquitetura Multimodal Diffusion Transformer (MMDiT), oferece controle milimétrico e melhorias notáveis na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista.',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto, privacidade e fine-tuning (LoRAs, ControlNet).',
      'Múltiplas variantes (Medium, Large, Turbo) otimizadas para diferentes necessidades de hardware, velocidade e qualidade (SD3.5 Medium com 2.5B, Large com 8.1B).',
      'Qualidade de imagem superior e aderência ao prompt, superando concorrentes em avaliações humanas em muitos aspectos.',
      'Otimizado com TensorRT para NVIDIA RTX GPUs, resultando em 2.3x mais desempenho e 40% menos memória (SD3.5 Large necessita de 11GB de VRAM após otimização, Medium cerca de 9.9GB).',
      'Lançamento de Stable Audio 3.0 (maio de 2026) para geração de música com modelos open-weight e dados licenciados, capazes de gerar composições de até 6 minutos e 20 segundos.',
      'API oferece opções de preços competitivas e planos para diferentes volumes de uso.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado (interface complexa para controle total).',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente (SD3.5 Large, mesmo otimizado, requer 11GB VRAM; Medium requer 9.9GB VRAM).',
      'Configuração inicial trabalhosa para uso local avançado.',
      'GPT Image 2 pode ser superior em renderização de texto complexo e fotorrealismo de pele humana.',
      'A qualidade da saída pode variar mais sem fine-tuning em comparação com soluções gerenciadas.'
    ],
    score: {
      reasoning: 4.5,
      writing: 1.8, // Contextualized to text in images, not general writing.
      coding: 4.8, // Reflects customization and open-source nature.
      speed: 4.5,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 3.5, lançado pela Stability AI em outubro de 2024, com suas variantes Medium, Large e Turbo, é a geração mais avançada e o padrão ouro para IA visual "open-source". Ele utiliza a arquitetura Multimodal Diffusion Transformer (MMDiT) para oferecer controle milimétrico sobre a geração de imagens, com melhorias significativas na compreensão de prompts complexos, renderização de texto (abordando uma fraqueza histórica) e qualidade fotorrealista. Os modelos são "open-weight", permitindo uso local gratuito (com limites de receita para uso comercial) e personalização profunda via fine-tuning e ferramentas como ControlNet. Embora exija investimento em aprendizado e hardware potente para as versões maiores (SD3.5 Large, otimizado, requer 11GB de VRAM), sua flexibilidade e o custo-benefício (especialmente com otimizações para GPUs NVIDIA que aumentam o desempenho em 2.3x) o tornam ideal para profissionais que buscam personalização, eficiência e controle. A plataforma também foi expandida com o lançamento do Stable Audio 3.0 em maio de 2026 para geração de música com modelos open-weight e dados licenciados, capaz de criar composições de até 6 minutos e 20 segundos.'
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (com Agentes de IA)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis (1.000 créditos/mês, 2 cenários ativos, inclui Agentes de IA); Plano Core: US$ 9/mês (anual) ou US$ 10.59/mês (mensal) para 10.000 créditos. Plano Pro: US$ 16/mês (anual) ou US$ 18.82/mês (mensal) para 10.000+ créditos (prioridade de execução, variáveis personalizadas). Plano Teams: US$ 29/mês por usuário (anual) ou US$ 34.12/mês por usuário (mensal) para 10.000+ créditos (colaboração, gestão de equipes). Créditos não utilizados acumulam por um mês nos planos pagos.',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos (If-else, Merge, Routers, Filters, Iterators, Aggregators).',
      'Introdução dos "Make AI Agents" (lançados em fevereiro de 2026) para automação inteligente e adaptativa, com tomada de decisões em tempo real dentro do canvas.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5, Claude Opus 4.7, Google Gemini 3.1 Pro) e milhares de APIs.',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no fluxo de trabalho.',
      'Chat no canvas para refinamento de agentes de IA em tempo real, com radical transparência das decisões do agente.',
      'Registros detalhados de execução (Make Grid) e funções visuais (Make Functions) para depuração e visibilidade aprimoradas.',
      'Make AI Web Search (beta) para buscas em tempo real em cenários, sem necessidade de APIs externas.',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier.',
      'Créditos não utilizados são acumulados por um mês nos planos pagos.'
    ],
    cons: [
      'O consumo de créditos pode ser imprevisível e rápido em cenários complexos com muitos módulos (gatilhos, filtros, iteradores contam como operações separadas).',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados e agentes de IA complexos.',
      'Curva de aprendizado mais acentuada para fluxos avançados e o uso de AI Agents em comparação com ferramentas mais simples.',
      'Suporte via e-mail apenas nos planos mais básicos.',
      'Recursos de colaboração e equipe são limitados nos planos Core e Pro, exigindo o plano Teams para funcionalidade completa.'
    ],
    score: {
      reasoning: 4.9,
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.6
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Em fevereiro de 2026, lançou a próxima geração de "Make AI Agents", que permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-5.5, Google Gemini 3.1 Pro e Anthropic Claude Opus 4.7. Com uma interface altamente intuitiva, o "Make Grid" para visualização em tempo real das automações, "Make AI Web Search" para dados atualizados, e módulos aprimorados de controle de fluxo e funções, é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em créditos, oferecem flexibilidade, com opções anuais e mensais e o benefício de acúmulo de créditos não utilizados, tornando-o uma alternativa custo-efetiva para automações complexas.'
  }
];