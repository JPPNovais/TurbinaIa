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
    name: 'ChatGPT Plus (GPT-5.5)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'US$ 20/mês para o plano ChatGPT Plus (inclui GPT-5.5, GPT Image 1.5 e outros recursos); Plano gratuito disponível com acesso limitado ao GPT-4o Mini e recursos limitados. API GPT-5.1: a partir de US$ 15/milhão de tokens de entrada (custos de saída provavelmente mais elevados). GPT-4o Mini (modelo base do plano gratuito) tem custos de API mais baixos.',
    pros: [
      'GPT-5.5 é o modelo carro-chefe da OpenAI para trabalho de agente, tarefas multifásicas e contextos longos',
      'Capacidades multimodais unificadas (texto, áudio e imagem) através da integração com GPT Image 1.5',
      'Interações de voz em tempo real com baixa latência',
      'Visão avançada e raciocínio visual',
      'Disponível para usuários gratuitos com algumas restrições (usando GPT-4o Mini)',
      'Melhor experiência do usuário e interface intuitiva',
      'Geração de imagens integrada (GPT Image 1.5) e possibilidade de refinar imagens por conversação',
      'Melhor desempenho em idiomas diferentes do inglês'
    ],
    cons: [
      'O modelo GPT-4o foi aposentado em fevereiro de 2026, exigindo migração para GPT-5.x',
      'Custo operacional da API pode ser alto para projetos menores, com aumento de preços para GPT-5.1 em comparação com GPT-4o',
      'Pode alucinar e apresentar vieses, como outros modelos generativos de IA',
      'Pode ter uma curva de aprendizado mais acentuada para recursos avançados'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.9,
      coding: 5.0,
      speed: 5.0,
      value: 4.5
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelo modelo GPT-5.5, é a ferramenta de IA multimodal carro-chefe da OpenAI. Após a aposentadoria do GPT-4o em fevereiro de 2026, o GPT-5.5 se posiciona como o modelo mais avançado para tarefas complexas, trabalho de agente e processamento de contextos longos. Ele processa e gera informações em texto, áudio e imagem de forma coesa e em tempo real, oferecendo respostas de baixa latência e recursos avançados de visão. Integrado com o GPT Image 1.5 para geração de imagens, o GPT-5.5 se destaca pela sua velocidade e capacidade de compreender e interagir com nuances emocionais, oferecendo uma experiência criativa e de produtividade abrangente.'
  },
  {
    id: 'claude-opus-4-7',
    name: 'Claude Opus 4.7',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Grátis no Claude.ai e no aplicativo iOS (com acesso a Sonnet 4.6 e Haiku 4.5 e limites de uso diários); Plano Pro US$ 20/mês (ou US$ 17/mês faturado anualmente); Plano Max 5x US$ 100/mês; Plano Max 20x US$ 200/mês; Plano Team a partir de US$ 25/assento/mês. API: US$ 5/milhão de tokens de entrada e US$ 25/milhão de tokens de saída para Opus 4.7.',
    pros: [
      'Claude Opus 4.7 é o modelo carro-chefe da Anthropic para tarefas longas e multifásicas',
      'Define novos padrões de referência para raciocínio de nível de pós-graduação, conhecimento de nível de graduação e proficiência em codificação, superando versões anteriores do Opus',
      'Estilo de escrita extremamente natural e humanizado, com melhor compreensão de nuances e humor',
      'Capacidades de visão de ponta, interpretando gráficos e transcrevendo texto de imagens imperfeitas',
      'Pode escrever, editar e executar código de forma autônoma com raciocínio sofisticado',
      'Janela de contexto de 1 milhão de tokens, ideal para cargas de trabalho pesadas em documentos e agentes',
      'Opus 4.6 (e por extensão 4.7) é 3x mais barato que o antigo Opus 3 na API, sendo mais capaz'
    ],
    cons: [
      'Plano gratuito pode ser restritivo em limites de uso diários',
      'Sem geração de imagem nativa (foco em compreensão visual e texto/código)',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança',
      'Alto custo operacional da API para uso intensivo de saída, apesar da redução em relação às versões anteriores',
      'Modelos anteriores como Claude 3.5 Sonnet e Claude 3 Opus são agora legados'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 4.9,
      value: 4.6 // Adjusted value slightly due to higher API costs compared to some alternatives, but still good given the power.
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude Opus 4.7, o modelo de ponta da Anthropic, é otimizado para tarefas complexas e multifásicas, oferecendo um equilíbrio ideal entre inteligência e velocidade. Ele estabelece novos benchmarks em raciocínio, conhecimento e codificação, superando significativamente seus predecessores. O modelo se destaca em escrita natural, compreensão de nuances e capacidades avançadas de visão, operando em dobro da velocidade de seu predecessor. Com uma vasta janela de contexto de 1 milhão de tokens, é ideal para tarefas profissionais complexas, como codificação, atendimento ao cliente e análise de dados, com um custo de API 3x menor que o Claude 3 Opus.'
  },
  {
    id: 'gemini-1-5-pro',
    name: 'Gemini 1.5 Pro',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano Google AI Pro (anteriormente Gemini Advanced) para consumidores: US$ 19.99/mês. Grátis no Google AI Studio para testes. API: US$ 7.00/milhão de tokens de entrada e US$ 21.00/milhão de tokens de saída.',
    pros: [
      'Modelo mais poderoso e versátil do Google, com melhor equilíbrio entre qualidade, desempenho e custo',
      'Janela de contexto de até 2 milhões de tokens, ideal para processamento de grandes volumes de dados (documentos, código, vídeo, áudio)',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição',
      'Desempenho superior em tarefas complexas que exigem raciocínio profundo, instrução nuances e escrita criativa',
      'Integração aprimorada com o ecossistema Google (Docs, Drive, Gmail)',
      'Suporte a modo JSON e chamada de função na API',
      'Arquitetura Mixture-of-Experts (MoE) para maior eficiência computacional',
      'Entendimento aprimorado de imagem e vídeo, além de compreensão nativa de áudio'
    ],
    cons: [
      'Ligeiramente mais lento que o Gemini 1.5 Flash',
      'Mais caro que o Gemini 1.5 Flash na API',
      'Interface do Google AI Pro (anteriormente Gemini Advanced) às vezes simplifica respostas técnicas [usuário original]',
      'Filtros de segurança podem ser excessivamente rígidos [usuário original]'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.8,
      coding: 5.0,
      speed: 4.7,
      value: 4.8
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 1.5 Pro é o modelo de linguagem multimodal mais avançado do Google, lançado em fevereiro de 2024 (com atualizações contínuas). Ele se destaca por sua vasta janela de contexto de até 2 milhões de tokens, permitindo a análise de quantidades massivas de informações em texto, imagem, áudio e vídeo. O modelo é otimizado para raciocínio complexo, geração de conteúdo e codificação, com desempenho superior em tarefas que exigem compreensão profunda e nuances. É uma ferramenta versátil para desenvolvedores e empresas, oferecendo integração profunda com o ecossistema Google.'
  },
  {
    id: 'llama-4-maverick',
    name: 'Llama 4 Maverick',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware). API para Llama 4 Maverick: a partir de US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída (via provedores de API gerenciados, como DeepInfra). Em hyperscalers como AWS Bedrock, custa US$ 0.50/milhão de tokens de entrada.',
    pros: [
      'Llama 4 Maverick é a nova geração de modelos "open-weight" da Meta, oferecendo arquitetura Mixture-of-Experts (MoE)',
      'Significativa redução de custo (82-93%) em comparação com Llama 3.1 405B',
      'Código "open-weight", pode rodar localmente no seu computador (com hardware adequado)',
      'Janela de contexto expandida (detalhes específicos para Maverick devem ser verificados, mas Llama 3.1 já tinha 128K)',
      'Capacidades multilingues (com base nas melhorias do Llama 3.1)',
      'Ferramentas de uso de estado da arte e raciocínio aprimorado',
      'Licença mais permissiva, permitindo o uso de outputs para melhorar outros modelos',
      'Ecosistema robusto com parceiros (AWS, NVIDIA, Google Cloud)',
      'Suporte para geração de dados sintéticos e destilação de modelos'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade',
      'Custos de infraestrutura aumentam rapidamente para modelos maiores',
      'Requer conhecimento técnico para fine-tuning e implantação',
      'Não é "plug-and-play" automaticamente para todas as tarefas',
      'Ainda sem acesso nativo à internet na versão bruta [usuário original]'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.7,
      coding: 4.9,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://meta.ai',
    description: 'Llama 4 Maverick é a mais recente geração de modelos "open-weight" da Meta, sucedendo o Llama 3.1. Este modelo, baseado em arquitetura Mixture-of-Experts (MoE), oferece uma notável redução de custos de 82-93% em comparação com o Llama 3.1 405B. O Llama 4 Maverick mantém o controle e a flexibilidade dos modelos "open-weight", permitindo uso local com hardware potente ou acesso via API com preços altamente competitivos. É ideal para desenvolvedores e empresas que buscam desempenho de ponta e eficiência de custos em cargas de trabalho multimodais e de longo contexto.'
  },
  {
    id: 'gpt-image-1-5',
    name: 'GPT Image 1.5',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês); Grátis no Microsoft Copilot (com limitações). API: a partir de US$ 0.04 por imagem (para qualidade padrão).',
    pros: [
      'Substitui DALL-E 3 como o modelo de geração de imagens da OpenAI',
      'Melhor qualidade de imagem, renderização de texto aprimorada e saídas mais consistentes em comparação com DALL-E 3',
      'Excelente compreensão do prompt, inclusive prompts complexos e com múltiplos componentes',
      'Integração total com ChatGPT (permite refinar imagens conversando)',
      'Gera resultados criativos, detalhados e visualmente impressionantes',
      'Mantém consistência visual em séries de imagens relacionadas',
      'Acessível para iniciantes e profissionais, com interface intuitiva'
    ],
    cons: [
      'Ainda pode ter dificuldades com interpretação de frases muito sutis ou composições excessivamente complexas',
      'Pode ficar aquém da qualidade fotorrealista de outros geradores em certos casos (como Midjourney)',
      'Oferece menos controle preciso sobre detalhes como layout e posicionamento de caracteres em comparação com ferramentas mais especializadas',
      'Resolução máxima pode ser limitada em comparação com concorrentes que oferecem 2048x2048 ou superior'
    ],
    score: {
      reasoning: 4.8, // Improved over DALL-E 3
      writing: 1.0, // Image generation, not writing text
      coding: 1.0,  // Image generation, not coding
      speed: 4.5, // Likely faster than DALL-E 3
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'GPT Image 1.5 é a próxima geração do modelo de imagem da OpenAI, lançado para substituir o DALL-E 3 em maio de 2026. Ele retém a integração com o ChatGPT e a capacidade de prompt conversacional que tornaram o DALL-E 3 fácil de usar, ao mesmo tempo em que promete qualidade de imagem aprimorada, melhor renderização de texto e saídas mais consistentes. É uma ferramenta poderosa para criadores, designers e profissionais de marketing que buscam visualizar ideias de forma eficiente e criativa, com acesso incluído no ChatGPT Plus e disponível via API.'
  },
  {
    id: 'midjourney',
    name: 'Midjourney v8.1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'A partir de US$ 10/mês (Plano Básico, ou US$ 96/ano); Planos Standard US$ 30/mês (ou US$ 288/ano), Pro US$ 60/mês (ou US$ 576/ano), Mega US$ 120/mês (ou US$ 1152/ano). Sem plano gratuito no site oficial.',
    pros: [
      'Qualidade fotorrealista e estética aprimorada, restaurando o estilo do V7',
      'V8.1 é 4-5 vezes mais rápido que versões anteriores em trabalhos padrão, e modo HD é 3x mais rápido e 3x mais barato que V8.0',
      'Excelente interpretação de iluminação, texturas e estilos artísticos',
      'Melhor interpretação de prompt e retenção de detalhes',
      'Editor web moderno disponível para assinantes, com recursos de edição, organização e unificação de ferramentas',
      'Geração nativa de imagens em 2K (2048x2048) por padrão no modo HD, sem necessidade de upscaling',
      'Modo Raw para maior aderência ao prompt e estética mais natural',
      'Melhor renderização de mãos e texto dentro das imagens (em comparação com versões anteriores)',
      'Direitos de uso comercial inclusos em todos os planos pagos',
      'Parâmetro "seed" de volta e mais confiável, permitindo consistência em testes de variação de prompt'
    ],
    cons: [
      'Interface principal ainda roda dentro do Discord para alguns recursos',
      'Não possui plano de testes gratuito no site oficial',
      'Ainda pode apresentar dificuldades com renderização de textos muito complexos dentro da imagem',
      'Sem API pública oficial',
      'V8.1 perdeu referências de personagem, referências omni, multi-prompting e o parâmetro de qualidade',
      'Sem upscaler integrado no V8.1',
      'Geração de vídeo é limitada a image-to-video, não suporta texto-para-vídeo diretamente'
    ],
    score: {
      reasoning: 4.0,
      writing: 2.5,
      coding: 1.0,
      speed: 5.0, // Confirmed 5x faster, HD 3x faster
      value: 4.5
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney v8.1, lançada em 30 de abril de 2026, é a versão mais rápida e avançada para geração de imagens artísticas e fotorrealistas. Oferece imagens nativas em 2K no modo HD por padrão, interpretação de prompts aprimorada e melhor renderização de texto e mãos. O V8.1 restaurou a estética familiar do V7 e é significativamente mais rápido e mais barato para gerações padrão e HD. Com a reintrodução do parâmetro "seed" com alta confiabilidade e um editor web moderno, é a ferramenta ideal para designers e criadores que buscam qualidade visual de altíssimo nível, apesar da perda de alguns recursos como referências de personagem.'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion 3.0 (Medium/Large/Turbo)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código aberto (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware). Licença Creator: a partir de US$ 20/mês para empresas menores. Pago via API: SD3.0 Large: US$ 0.065/imagem. SD3.0 Turbo: US$ 0.040/imagem.',
    pros: [
      'Controle absoluto sobre a geração (via ferramentas como ControlNet) [usuário original]',
      'Permite treinar modelos com seu próprio rosto ou produto [usuário original]',
      'Pode rodar 100% grátis localmente no seu computador (para uso não comercial e comercial até US$ 1M de receita anual)',
      'Arquitetura aprimorada Multimodal Diffusion Transformer (MMDiT) para melhor compreensão de texto e precisão ortográfica',
      'Ideal para geração em volume e necessidades de privacidade [usuário original]',
      'Múltiplas variantes (Medium, Large, Large Turbo) otimizadas para diferentes necessidades de hardware e velocidade',
      'SD3.0 demonstrou excelência consistente em seguir prompts, tipografia e estética visual, superando concorrentes',
      'Qualidade de imagem superior e aderência ao prompt',
      'Pesos do SD3 Medium liberados para uso público em junho de 2024'
    ],
    cons: [
      'Curva de aprendizado muito acentuada (interface complexa para uso avançado) [usuário original]',
      'Exige uma placa de vídeo dedicada muito potente para uso local eficiente (SD3 Large requer VRAM elevada) [usuário original]',
      'Configuração inicial trabalhosa para uso local avançado [usuário original]',
      'Modelos maiores (SD3 Large) podem ser mais lentos na renderização em comparação com variantes Turbo ou modelos menores [usuário original]'
    ],
    score: {
      reasoning: 4.0,
      writing: 1.8,
      coding: 1.0,
      speed: 4.5,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 3.0, com suas variantes Medium, Large e Turbo, é a geração mais avançada da Stability AI e o padrão ouro para IA visual open-source. Lançado com a arquitetura Multimodal Diffusion Transformer (MMDiT), oferece controle milimétrico sobre a geração de imagens, com notáveis melhorias na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. Disponível para uso local gratuito e via API, é ideal para profissionais que buscam personalização, eficiência e controle, aproximando a qualidade de modelos comerciais, mas exigindo investimento em aprendizado e hardware potente para as versões maiores.'
  },
  {
    id: 'make-automation',
    name: 'Make.com',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis (1.000 créditos/mês, 2 cenários ativos). Planos pagos (valores anuais): Core US$ 9/mês (10.000 créditos/mês); Pro US$ 16/mês (10.000+ créditos/mês, execução prioritária); Teams US$ 29/mês por usuário (10.000+ créditos/mês, colaboração). O custo final depende do consumo de créditos (cada operação é um crédito).',
    pros: [
      'Interface visual de arrastar e soltar muito intuitiva',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5, Claude Opus 4.7, Google Gemini 1.5 Pro) e centenas de APIs',
      'Permite criar roteiros condicionais complexos (se isso, faça aquilo), aprimorado com módulos If-else aninhados e Merge',
      'Oferece agentes de IA (Make AI Agents) e toolkit de IA para automação inteligente e adaptativa',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs',
      'Chat no canvas para refinamento de agentes de IA em tempo real',
      'Registros detalhados de execução para facilitar a depuração e visibilidade com Make Grid',
      'Integração com milhares de aplicativos (mais de 3.000)',
      'Make AI Web Search para buscas em tempo real em cenários, sem necessidade de APIs externas',
      'Make Functions app para transformações de dados passo a passo'
    ],
    cons: [
      'Pode se tornar caro se o volume de execuções mensais (créditos) for muito alto e complexo (cada operação conta como um crédito)',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados',
      'Documentação de alguns aplicativos integrados é escassa [usuário original]',
      'Curva de aprendizado acentuada para fluxos avançados',
      'Custo por usuário nos planos Teams pode escalar rapidamente para equipes maiores (preço por usuário)'
    ],
    score: {
      reasoning: 4.8, // Slightly increased due to advanced AI agent capabilities and nested logic.
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.7 // Slightly adjusted due to potential cost increases with credit consumption, but still good value.
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que permite conectar sistemas e integrar as principais IAs (OpenAI GPT-5.5, Google Gemini 1.5 Pro, Anthropic Claude Opus 4.7, etc.) sem programação. Lançou os "Make AI Agents" em abril de 2025, transformando-se em uma plataforma de orquestração de fluxos de trabalho inteligentes que tomam decisões adaptativas. A plataforma agora oferece suporte multimodal para seus agentes de IA, permitindo a análise e geração de diversos tipos de arquivos. Com uma interface intuitiva, o "Make Grid" para visualização em tempo real das automações, "Make AI Web Search" para dados em tempo real, e módulos aprimorados de controle de fluxo (como if-else aninhado) e funções, é uma ferramenta versátil para automação de rotinas empresariais.'
  }
];