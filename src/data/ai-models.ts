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
    name: 'ChatGPT Plus (GPT-5.5, GPT-5)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com limites de uso, acesso a GPT-5.5 Instant e recursos básicos, com anúncios nos EUA); ChatGPT Go: US$ 8/mês (global, desde janeiro de 2026, com 10x mais mensagens, GPT-5.3 Instant, upload de arquivos, Custom GPTs, e GPT-5.5 em Codex, com anúncios nos EUA). ChatGPT Plus: US$ 20/mês (acesso prioritário e ilimitado a GPT-5.5 Thinking/Pro, GPT-5 e GPT Image 2; inclui Deep Research, Sora, Codex, Agent Mode, Custom GPTs, navegação web, Advanced Data Analysis, e voz real-time ChatGPT Voice). ChatGPT Pro US$ 100/mês (lançado em abril de 2026, com 5x os limites do Plus, inclui GPT-5.5 Pro e o1 Pro). ChatGPT Pro US$ 200/mês (20x os limites do Plus, 1M tokens de contexto, GPT-5.5 Pro e 250 Deep Research runs/mês). API para GPT-5.5: US$ 3.00/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída. (Preços API para GPT Image 2: US$ 8/milhão de tokens de entrada e US$ 30/milhão de tokens de saída para imagem).',
    pros: [
      'GPT-5.5 (lançado em abril de 2026) e GPT-5 (lançado em agosto de 2025) são os modelos carro-chefe da OpenAI, oferecendo inteligência de ponta com velocidade significativa e capacidades multimodais aprimoradas em texto, voz e visão. GPT-5.5 é otimizado para tarefas agenticas complexas, recuperação de erros e uso eficiente de ferramentas.',
      'GPT-5.5 Instant (lançado em maio de 2026) está disponível para usuários gratuitos, oferecendo respostas mais inteligentes, precisas e personalizadas.',
      'Disponível para usuários gratuitos (com acesso limitado a GPT-5.5 Instant e recursos básicos) e assinantes Plus/Pro/Business/Enterprise (acesso completo e prioritário aos modelos mais recentes como GPT-5.5 Thinking/Pro e GPT-5).',
      'Integração nativa com GPT Image 2 (lançado em abril de 2026), o modelo de geração de imagens mais avançado da OpenAI, com excelente compreensão de prompts complexos, renderização aprimorada de texto multilíngue e suporte a resolução 2K.',
      'Desempenho superior em compreensão de imagens e discussão de conteúdo visual. GPT Image 2 inclui raciocínio embutido e planejamento agentico.',
      'Acesso a recursos como Advanced Data Analysis (anteriormente Code Interpreter), navegação web, Custom GPTs, Deep Research, Sora (geração de vídeo) e Agent Mode (automação multi-passo).',
      'Modo de voz avançado (ChatGPT Voice) com baixa latência e interações humanas fluídas, unificando todos os usuários em setembro de 2025.',
      'Suporte a mais de 50 idiomas e melhor desempenho em idiomas não ingleses.',
      'Novos recursos em 2025/2026: capacidades de pesquisa de compras (novembro de 2025), melhorias em uploads de arquivos, cópia de chat, e maior confiabilidade em conversas longas.'
    ],
    cons: [
      'Usuários gratuitos e do plano Go têm acesso restrito a mensagens e recursos avançados, além de limites de uso durante picos e exibição de anúncios nos EUA.',
      'O custo da API pode ser elevado para uso em larga escala, especialmente para os modelos completos e para GPT Image 2.',
      'GPT-4o foi retirado do ChatGPT para usuários do Plus em fevereiro de 2026, com foco nos modelos GPT-5.x.',
      'O contexto de 1M tokens para GPT-5 e GPT-5.5 Pro está disponível em planos Pro de US$ 200/mês ou API, não no Plus básico.',
      'A geração de imagens no GPT Image 2 leva em média 20-30 segundos por imagem.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelos modelos GPT-5.5 (lançado em abril de 2026) e GPT-5 (lançado em agosto de 2025), representa o auge da inteligência artificial generativa da OpenAI. O serviço oferece inteligência de ponta com uma velocidade significativamente maior e desempenho aprimorado, especialmente para tarefas agenticas complexas e uso de ferramentas. Os assinantes do ChatGPT Plus (US$ 20/mês) recebem acesso prioritário e ilimitado aos modelos mais recentes, juntamente com recursos como Advanced Data Analysis, navegação web, Deep Research, Sora e geração de imagens através do GPT Image 2 (lançado em abril de 2026). Os modelos se destacam na compreensão de prompts complexos, análise de imagens e no modo de voz real-time (ChatGPT Voice). Novos planos como Go, Pro US$ 100 e Pro US$ 200 oferecem opções com diferentes limites e capacidades.'
  },
  {
    id: 'claude-opus-4-7',
    name: 'Claude Opus 4.7 e Sonnet 4.6',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude Sonnet 4.6 e Haiku 4.5 e limites de uso diários). Plano Pro: US$ 20/mês (ou US$ 17/mês anual) com acesso a Claude Opus 4.7, Sonnet 4.6 e Haiku 4.5, e limites de taxa significativamente mais altos. Planos Max 5x: US$ 100/mês; Max 20x: US$ 200/mês (para usuários intensivos com 5x ou 20x a capacidade do Pro). Planos Team Standard: US$ 25/mês por usuário (US$ 20 anual, apenas Sonnet e Haiku). Planos Team Premium: US$ 125/mês por usuário (US$ 100 anual, com Claude Code e acesso a Opus). API para Claude Opus 4.7: US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída, com janela de contexto de 1M tokens. API para Claude Sonnet 4.6: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 1M tokens. API para Claude Haiku 4.5: US$ 1.00/milhão de tokens de entrada e US$ 5.00/milhão de tokens de saída, com janela de contexto de 200K tokens.',
    pros: [
      'Claude Opus 4.7 (lançado em abril de 2026) é o modelo mais avançado da Anthropic, oferecendo desempenho superior para tarefas mais complexas, fluxos de trabalho agenticos, e melhor compreensão de instruções. Possui melhor visão para imagens de alta resolução (até 2,576 pixels).',
      'Claude Sonnet 4.6 (lançado em fevereiro de 2026) é um modelo mid-tier altamente otimizado, entregando inteligência de nível Opus em codificação, uso de computador e tarefas agenticas a um custo inferior, superando versões anteriores do Opus em testes.',
      'Claude Haiku 4.5 (lançado em outubro de 2025) é o modelo mais rápido e custo-efetivo, ideal para tarefas em tempo real e de alto volume, com desempenho próximo ao Sonnet 4.',
      'Janela de contexto de 1M tokens para Claude Opus 4.7 e Sonnet 4.6, ideal para processar grandes volumes de dados.',
      'Capacidades de codificação avançadas com o Claude Code (incluído em planos pagos) e introdução do Artifacts (workspace interativo para código, documentos e microaplicativos com armazenamento persistente).',
      'Excelente processamento visual e multimodal, interpretando gráficos, imagens e transcrevendo texto de forma precisa.',
      'Introdução do Claude Design (abril de 2026), uma ferramenta de criação visual colaborativa alimentada por Opus 4.7.',
      'Memória do histórico de chat disponível para todos os usuários desde março de 2026.',
      'Foco em segurança e alinhamento com a constituição da Anthropic. Conhecimento limitado até 28 de fevereiro de 2025 (para Haiku 4.5). Conhecimento de Opus 4.7 é mais recente.'
    ],
    cons: [
      'Não possui geração de imagem nativa (foco em compreensão visual e texto/código), embora haja o Claude Design para criação visual.',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança.',
      'O custo da API para Opus 4.7 é o mais alto entre os modelos da Anthropic.',
      'O modelo Claude Mythos, focado em segurança, está restrito a parceiros e não está publicamente disponível devido a riscos.',
      'A janela de contexto de 1M tokens não é aplicada a todas as versões (ex: Haiku 4.5 API tem 200K tokens de contexto).'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude Opus 4.7 (lançado em abril de 2026) e Sonnet 4.6 (lançado em fevereiro de 2026) são os modelos de ponta da Anthropic, projetados para as tarefas mais complexas e fluxos de trabalho agenticos. O Opus 4.7 é o modelo carro-chefe, com desempenho superior em codificação e visão de alta resolução. O Sonnet 4.6 oferece inteligência de nível Opus a um custo mais acessível. Ambos se destacam na escrita natural, compreensão de nuances, e capacidades avançadas de visão, interpretando gráficos e transcrevendo texto de imagens. A introdução dos Artifacts, agora com armazenamento persistente e funcionalidade de microaplicativo, aprimora ainda mais a experiência de desenvolvedores com um workspace interativo para código e documentos. Com o Claude Code e o novo Claude Design, a família Claude 4 oferece inteligência de ponta com um excelente equilíbrio entre desempenho e custo-benefício.'
  },
  {
    id: 'gemini-3-5-flash',
    name: 'Gemini 3.5 Flash e Gemini 3 Pro (via Google AI Premium)',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com acesso ao Gemini app, Gemini 3.5 Flash e recursos básicos). Google AI Plus: US$ 7.99/mês (2x os limites do plano gratuito, 200 GB de armazenamento). Google AI Pro (anteriormente Google One AI Premium/Gemini Advanced): US$ 19.99/mês (acesso a Gemini 3 Pro/3.1 Pro, Gemini 3.5 Flash, 5 TB de armazenamento, integração com Workspace, YouTube Premium Lite, 4x os limites do plano gratuito). Google AI Ultra US$ 100/mês (5x os limites do AI Pro, Gemini 3.5 Flash, acesso prioritário ao Google Antigravity, 20 TB de armazenamento, YouTube Premium individual, beta do Gemini Spark nos EUA). Google AI Ultra US$ 200/mês (20x os limites do AI Pro, 30 TB de armazenamento, Project Genie, Gemini Spark). API para Gemini 3.5 Flash: US$ 1.50/milhão de tokens de entrada e US$ 9.00/milhão de tokens de saída, com janela de contexto de 1 milhão de tokens. Tokens de entrada em cache: US$ 0.15/milhão de tokens. API para Gemini 3.1 Pro: US$ 2.00/milhão de tokens de entrada e US$ 12.00/milhão de tokens de saída para um contexto de até 200K tokens (preços sobem para contexto acima de 200K tokens). API para Gemini 3.1 Ultra: US$ 12.00/milhão de tokens de entrada e US$ 36.00/milhão de tokens de saída, com janela de contexto de 2 milhões de tokens.',
    pros: [
      'Gemini 3.5 Flash (lançado em maio de 2026) é o modelo mais recente do Google, otimizado para velocidade e eficiência em tarefas de alto volume, agentes e codificação, superando o Gemini 3.1 Pro em benchmarks e sendo 4x mais rápido que modelos concorrentes. É o modelo padrão no Gemini app e AI Mode em Search.',
      'Gemini 3 Pro (lançado em novembro de 2025 em preview, com 3.1 Pro em fevereiro de 2026, e 3.5 Pro em breve) e Gemini 3.1 Ultra (lançado em março de 2026) são os modelos mais poderosos do Google para raciocínio complexo, multimodality e capacidades agenticas.',
      'Janela de contexto de até 1 milhão de tokens para 3.5 Flash e 3.1 Pro, e até 2 milhões de tokens para Gemini 1.5 Pro e 3.1 Ultra, ideal para processamento de vastos volumes de dados (documentos, código, vídeo, áudio).',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição. Gemini Omni permitirá geração de vídeo a partir de qualquer entrada.',
      'Gemini Spark é um novo agente de IA pessoal 24/7 (alimentado por 3.5 Flash) que ajuda a realizar tarefas proativamente no Workspace, web e outros.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome) e recursos como Persistent AI Memory e função de chamada aprimorada. Nova UI "Neural Expressive" no Gemini app.',
      'Preços de API de 3.5 Flash são competitivos, sendo mais econômicos que 3.1 Pro para tarefas de codificação e agentes.'
    ],
    cons: [
      'A API para modelos Gemini 3.x Pro e Ultra é mais cara, especialmente para contexto completo e para prompts mais longos.',
      'O conhecimento dos modelos Gemini 3.x é mais recente, mas o corte exato pode variar por modelo.',
      'A precificação via "compute-used credit system" para API pode ser imprevisível para tarefas complexas como vídeo.',
      'A funcionalidade de "Gemini Spark" e outras integrações podem ter lançamento restrito por região (ex: EUA para Spark beta).',
      'A segmentação de imagem não é suportada nos modelos Gemini 3.x.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 3.5 Flash e Gemini 3 Pro (e as versões como 3.1 Ultra) são os modelos de linguagem multimodal mais avançados do Google, oferecendo uma vasta janela de contexto de até 2 milhões de tokens para análise de grandes volumes de informações em texto, imagem, áudio e vídeo. O Gemini 3.5 Flash (lançado em maio de 2026) é otimizado para velocidade e custo-benefício em tarefas de alto volume, enquanto o Gemini 3 Pro (e 3.1 Ultra) é projetado para raciocínio complexo e desempenho superior, com recursos como o Gemini Spark (agente pessoal de IA) e o futuro Gemini Omni para geração de vídeo. Disponível via assinatura Google AI Premium (Plus, Pro, Ultra) e API, a família Gemini continua a evoluir rapidamente, com profunda integração no ecossistema Google, tornando-os ferramentas versáteis para diversas aplicações, desde criação de conteúdo até automação complexa.'
  },
  {
    id: 'llama-4-scout-maverick',
    name: 'Llama 4 (Scout, Maverick) e Muse Spark',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware, licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); uso comercial livre até 700 milhões de usuários por mês (a partir de abril de 2025 para Llama 4). API para Llama 4 Scout: US$ 0.08/milhão de tokens de entrada e US$ 0.30/milhão de tokens de saída (via Meta-llama ou provedores terceiros). API para Llama 4 Maverick: US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída. (Muse Spark, lançado em abril de 2026, é um substituto da série Llama da Meta Superintelligence Labs, com detalhes de precificação via API a serem confirmados).',
    pros: [
      'Llama 4 (lançado em abril de 2025) é a nova geração de modelos "open-weight" da Meta, com versões Scout e Maverick, permitindo uso local gratuito e fine-tuning.',
      'Os modelos Llama 4 utilizam arquitetura Mixture-of-Experts (MoE), otimizando desempenho e eficiência.',
      'Llama 4 Scout (17B parâmetros ativos) oferece uma janela de contexto de 10 milhões de tokens e roda em uma única GPU H100, ideal para aplicações que demandam longo contexto.',
      'Llama 4 é multimodal (aceita entrada de texto e imagem com saída de texto) e multilíngue (12 idiomas).',
      'O modelo Llama 4 Maverick apresenta desempenho competitivo, comparando-se favoravelmente a modelos proprietários.',
      'Llama 3.1 (lançado em julho de 2024) e 3.2 (lançado em setembro de 2024, primeiro Llama multimodal) introduziram janelas de contexto de 128K tokens e suporte a múltiplos idiomas.',
      'Ecosistema robusto com parceiros e suporte para fine-tuning.',
      'Muse Spark, lançado em abril de 2026 pela Meta Superintelligence Labs, é o substituto dos modelos Llama, indicando uma nova fronteira de inteligência da Meta.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade e para modelos maiores.',
      'Os custos de infraestrutura para modelos maiores via API podem ser significativos e variam por provedor.',
      'O modelo Llama 4 Behemoth (2T parâmetros) ainda está em treinamento e não foi lançado publicamente, com atrasos relatados.',
      'O conhecimento dos modelos Llama 4 é limitado até agosto de 2024.',
      'As versões multimodais do Llama 3.2 não foram lançadas na Europa devido a incertezas regulatórias.'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.8,
      coding: 4.8,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'Llama 4, lançado pela Meta em abril de 2025, representa a mais recente geração de modelos "open-weight" (Scout e Maverick). Ele utiliza a arquitetura Mixture-of-Experts (MoE) e é multimodal, aceitando entradas de texto e imagem. O Llama 4 Scout, com sua janela de contexto de 10M tokens e capacidade de rodar em uma única H100 GPU, é um modelo altamente eficiente e poderoso. Com sua natureza open-weight e suporte multilíngue, o Llama 4 oferece desempenho competitivo em benchmarks de ponta, rivalizando com modelos proprietários. No entanto, a Meta Superintelligence Labs lançou Muse Spark em abril de 2026 como um substituto para a série Llama, indicando um avanço significativo em sua estratégia de IA. A flexibilidade e eficiência de custos do Llama 4 o tornam uma escolha poderosa para desenvolvedores e empresas que buscam controle, personalização e desempenho, enquanto aguardam mais informações sobre o Muse Spark.'
  },
  {
    id: 'gpt-image-2',
    name: 'GPT Image 2 (via ChatGPT Plus)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a GPT-5.5, GPT-5 e limites de uso). Acesso gratuito limitado via Microsoft Designer. API para GPT Image 2: US$ 8.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída para imagem (custo por imagem 1024x1024 de baixa qualidade ~$0.006, alta qualidade ~$0.211). Preços variam com resolução, qualidade e edições. (Para referência, API para GPT Image 1.5: US$ 8.00/milhão de tokens de entrada e US$ 32.00/milhão de tokens de saída para imagem).',
    pros: [
      'GPT Image 2 (lançado em abril de 2026) é o modelo de geração de imagens mais avançado da OpenAI, com excelente compreensão de prompts complexos e narrativos.',
      'Gera resultados criativos, detalhados e visualmente impressionantes com boa fidelidade e diversas estéticas.',
      'Integração perfeita com ChatGPT, permitindo criação e modificação de imagens via conversação.',
      'Qualidade de imagem superior e renderização aprimorada de texto multilíngue (incluindo CJK, Hindi, Bengali, Árabe) dentro das imagens em comparação com versões anteriores.',
      'Primeiro modelo de imagem agentico com pesquisa pré-geração, planejamento, raciocínio e autocorreção ("Thinking Mode").',
      'Pode gerar QR codes escaneáveis e lidar com layouts de múltiplos painéis com alta precisão.',
      '4x mais rápido na geração de imagens em comparação com versões anteriores.',
      'Suporta múltiplas resoluções, incluindo 2K, e uma ampla gama de proporções.',
      'Propriedade total das imagens geradas para uso comercial.'
    ],
    cons: [
      'Ainda pode apresentar resultados que parecem "falsos" ou não atingir o fotorrealismo de alguns concorrentes em certos casos.',
      'A geração de imagens leva em média 20-30 segundos por imagem (apesar de ser 4x mais rápido que versões anteriores, ainda pode ser percebido como lento).',
      'O acesso completo e ilimitado requer assinatura do ChatGPT Plus ou planos superiores.',
      'Menos recursos de edição direta de imagem em comparação com outras ferramentas especializadas.',
      'Preços da API podem ser elevados, especialmente para alta qualidade e resoluções maiores.'
    ],
    score: {
      reasoning: 4.8,
      writing: 3.5,
      coding: 1.0,
      speed: 4.5,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'GPT Image 2, lançado pela OpenAI em abril de 2026, é a mais recente geração de modelos de geração de imagens da empresa. Totalmente integrado ao ChatGPT, ele se destaca pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização aprimorada de texto multilíngue e adesão à instrução. Como o primeiro modelo de imagem agentico, o GPT Image 2 incorpora raciocínio e planejamento pré-geração, permitindo a criação de QR codes e layouts multi-painéis. Disponível via assinatura ChatGPT Plus, a geração de imagens da OpenAI oferece uma experiência intuitiva e poderosa para designers, criadores de conteúdo e qualquer pessoa que busque gerar visuais criativos de alto nível. Com uma velocidade de geração 4x maior, o GPT Image 2 é uma ferramenta de arte generativa líder, apesar de algumas limitações em fotorrealismo extremo e o custo da API para uso em larga escala.'
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney V8.1 (e V7)',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos: Basic US$ 10/mês (US$ 96/ano) com ~200 gerações rápidas. Standard US$ 30/mês (US$ 288/ano) com ~15 horas de GPU rápida (equivalente a ~900 imagens) e gerações ilimitadas no modo Relax. Pro US$ 60/mês (US$ 576/ano) com ~30 horas de GPU rápida, modo Relax ilimitado e modo Stealth (privacidade). Mega US$ 120/mês (US$ 1152/ano) com ~60 horas de GPU rápida, modo Relax ilimitado e modo Stealth. O Modo Turbo (2x mais rápido, 2x o custo) e o Draft Mode (10x mais rápido, 50% de redução de custo) estão disponíveis. O Modo Relax não está disponível para gerações rápidas em V7/V8.',
    pros: [
      'Midjourney V8.1 (lançado em abril de 2026) é a versão mais recente e avançada, oferecendo qualidade de imagem excepcional, alta resolução (até 2K HD) e estética marcante, com 4-5x mais velocidade que versões anteriores.',
      'Midjourney V7 (lançado em abril de 2025, padrão em junho de 2025) introduziu precisão impressionante em prompts de texto e imagem, texturas mais ricas e detalhes mais coerentes (especialmente em corpos e mãos).',
      'Apresenta ferramentas de texto-para-vídeo (de 5 a 21 segundos), capacidades 3D aprimoradas e modelagem 3D "NeRF-like" planejadas para 2026.',
      'O "Draft Mode" (em V7 e V8) oferece 10x mais velocidade e 50% de redução de custo para iteração rápida e conversacional.',
      'Melhor precisão na renderização de texto (V8) e maior coerência visual (mãos, corpos, objetos) com detalhes mais precisos e anatomia refinada (V7 e Niji 7).',
      'Editor web aprimorado com recursos de edição e personalização, incluindo "Style Tuner" para criar estilos personalizados e "Omni-Reference" (--cref) para consistência de caracteres em V7.',
      'A versão Niji 7, focada em estética oriental e anime, foi lançada em janeiro de 2026, com grande aumento na coerência, clareza dos olhos e precisão do prompt.',
      'Oferece uma ampla gama de parâmetros para ajuste fino das saídas, proporcionando significativo controle criativo.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial.',
      'Não possui API pública oficial, limitando a integração programática.',
      'O modo Relax, que oferece gerações ilimitadas mais lentas, não está disponível para jobs rápidos em V7/V8.',
      'O modo Stealth (privacidade) está disponível apenas nos planos Pro e Mega.',
      'Curva de aprendizado para prompt engineering avançado.',
      'Pode apresentar um viés de "beleza convencional" em algumas gerações de pessoas.',
      'A consistência de múltiplos caracteres ainda pode ser um desafio em cenários complexos.'
    ],
    score: {
      reasoning: 4.8,
      writing: 2.5,
      coding: 1.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney V8.1, lançado em abril de 2026, é a versão mais recente e aprimorada do popular gerador de imagens. Ele oferece um salto significativo em velocidade (4-5x mais rápido), qualidade visual (até 2K HD) e coerência. A versão anterior, V7 (lançada em abril de 2025), introduziu inovações como o "Draft Mode" para iteração rápida e o "Omni-Reference" para consistência de caracteres. Com um editor web aprimorado e a versão Niji 7 para estética anime, o Midjourney se destaca na criação de imagens artísticas e fotorrealistas. Apesar de não ter plano gratuito oficial ou uma API pública, o Midjourney continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível, com planos futuros para capacidades de vídeo e 3D.'
  },
  {
    id: 'stable-diffusion-4-ultra',
    name: 'Stable Diffusion 4 Ultra (e 3.5)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); para empresas com mais de US$ 1M de receita anual, licença Enterprise é necessária. API (sistema de créditos: 1 crédito = US$ 0.01): Stable Image Ultra (baseado em SD 3.5 Large): 8 créditos/imagem (US$ 0.08/imagem). Stable Image Core: 3 créditos/imagem (US$ 0.03/imagem). Stable Diffusion 3.5 Large: 6.5 créditos/imagem (US$ 0.065/imagem). Stable Diffusion 3.5 Large Turbo: 4 créditos/imagem (US$ 0.04/imagem). Stable Diffusion 3.5 Medium: 3.5 créditos/imagem (US$ 0.035/imagem). Créditos gratuitos (25) para começar. Planos Brand Studio: US$ 50/mês (inclui 5000 créditos/mês, com 25 créditos gratuitos para começar).',
    pros: [
      'Stable Diffusion 4 Ultra (lançado em março de 2026) é a versão mais avançada, com arquitetura Diffusion Transformer (DiT) e fotorrealismo de ponta, renderização de texto significativamente melhorada, anatomia e mãos corretas, e simulação de iluminação cinematográfica.',
      'Os modelos Stable Diffusion 3.5 (lançados em outubro de 2024, com variantes Large, Large Turbo, Medium) utilizam arquitetura Multimodal Diffusion Transformer (MMDiT), oferecendo controle aprimorado e melhorias notáveis na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista.',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto, privacidade e fine-tuning (LoRAs, ControlNet).',
      'Múltiplas variantes otimizadas para diferentes necessidades de hardware, velocidade e qualidade. Stable Diffusion 3.5 Medium requer ~9.9GB de VRAM, enquanto Large Turbo é 4x mais rápido.',
      'Stable Image Ultra é o modelo de maior qualidade para fotorrealismo e prompts complexos, enquanto Stable Image Core prioriza velocidade e eficiência.',
      'Otimizado com TensorRT para NVIDIA RTX GPUs, resultando em desempenho aprimorado.',
      'A Stability AI também oferece Stable Audio 3.0 (lançado em maio de 2026) para geração de música e efeitos sonoros (modelos open-weight para Small/Medium, API para Large) e Stable Point Aware 3D (SPAR3D) para geração e edição 3D.',
      'Gera outputs diversos e representativos de diferentes tons de pele e características.',
      'Oferece versatilidade para gerar visuais em praticamente qualquer estilo.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente.',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente (SD 3.5 Large requer aproximadamente 14GB de VRAM, SD 3.5 Medium ~9.9GB).',
      'Ainda pode apresentar dificuldades em renderizar anatomia humana de forma perfeita em versões mais antigas (SD 4 Ultra promete melhorias).',
      'A qualidade da saída pode variar mais sem fine-tuning em comparação com soluções gerenciadas.',
      'Preços da API podem ser mais complicados de prever devido ao sistema de créditos e variáveis.'
    ],
    score: {
      reasoning: 4.8,
      writing: 1.8,
      coding: 4.8,
      speed: 4.7,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 4 Ultra (lançado em março de 2026), com sua arquitetura Diffusion Transformer (DiT), é a mais recente e avançada geração de modelos "open-weight" da Stability AI para IA visual, destacando-se pelo fotorrealismo, renderização de texto e anatomia. A família Stable Diffusion 3.5 (lançada em outubro de 2024), com suas variantes Large, Large Turbo e Medium, utiliza a arquitetura Multimodal Diffusion Transformer (MMDiT) para oferecer controle milimétrico sobre a geração de imagens, com melhorias significativas na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. Os modelos são "open-weight", permitindo uso local gratuito (com limites de receita para uso comercial) e personalização profunda via fine-tuning. A API da Stability AI oferece Stable Image Ultra (baseado em SD 3.5 Large) para maior qualidade e Stable Image Core para velocidade e eficiência. Além disso, a Stability AI agora oferece Stable Audio 3.0 para geração de música e SPAR3D para modelagem 3D. Embora exija investimento em aprendizado e hardware potente para as versões maiores, sua flexibilidade e o custo-benefício o tornam ideal para profissionais que buscam personalização, eficiência e controle.'
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (Agentes de IA)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis: 1.000 créditos/mês, 2 cenários ativos, inclui Make AI Agents (beta), intervalo de 15 minutos. Plano Core: US$ 10.59/mês (ou US$ 9/mês anual) para 10.000 créditos (cenários ilimitados, intervalo de 1 minuto, inclui Make AI Agents). Plano Pro: US$ 18.82/mês (ou US$ 16/mês anual) para 10.000+ créditos (prioridade de execução, variáveis personalizadas, logs completos). Plano Teams: US$ 34.12/mês por usuário (ou US$ 29/mês por usuário anual) para 10.000+ créditos (colaboração, gestão de equipes, prioridade de execução). Plano Enterprise: precificação personalizada. Créditos podem ser comprados adicionalmente (10.000 créditos por US$ 9). Créditos não utilizados são transferidos por um mês em planos pagos.',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos (If-else, Merge, Routers, Filters, Iterators, Aggregators, Error Handlers).',
      'Os "Make AI Agents" (nova app lançada em fevereiro de 2026, disponível em todos os planos, com provedor próprio da Make e opção de conectar outros) permitem automação inteligente e adaptativa com tomada de decisões em tempo real dentro do canvas, com visibilidade total do processo.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5/GPT-5/GPT-4o/Sora/Whisper, Claude Opus 4.7/Sonnet 4.6, Google Gemini 3 Pro/3.5 Flash, Mistral AI) e milhares de APIs (3.000+ apps, mais integração via módulo HTTP).',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no fluxo de trabalho, usando bases de conhecimento.',
      'Registros detalhados de execução (Make Grid) e busca de texto completo em logs (planos Pro e Teams) para depuração e visibilidade aprimoradas.',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier (3-5x mais barato por operação).',
      'Funcional plano gratuito para prototipar automações.',
      'Lançamento de "Make Enterprise AI" com recursos de governança e personalização para grandes empresas, refletindo o crescimento da IA agentica no mercado corporativo.'
    ],
    cons: [
      'O consumo de créditos pode ser imprevisível e rápido em cenários complexos com muitos módulos e Agentes de IA.',
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
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Lançou os "Make AI Agents" (nova app em fevereiro de 2026), que permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-5.5, Google Gemini 3.5 Flash e Anthropic Claude Opus 4.7. Com uma interface altamente intuitiva, o "Make Grid" para visualização em tempo real das automações, e módulos aprimorados de controle de fluxo e funções, é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em créditos, oferecem flexibilidade, tornando-o uma alternativa custo-efetiva para automações complexas, apesar do consumo de créditos poder ser imprevisível para tarefas de IA. O lançamento de "Make Enterprise AI" em 2025 expandiu suas capacidades para grandes corporações.'
  }
];