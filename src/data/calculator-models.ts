export interface CalculatorModel {
  name: string;
  provider: string;
  inputPricePerM: number;
  outputPricePerM: number;
  contextWindow: string;
  description: string;
}

export const AI_MODELS: CalculatorModel[] = [
  // Google
  {
    name: 'Gemini 3.1 Pro',
    provider: 'Google',
    inputPricePerM: 2.00, // Preço padrão para <200K tokens
    outputPricePerM: 12.00, // Preço padrão para <200K tokens
    contextWindow: '1M tokens',
    description: 'O modelo Pro mais recente da Google, com raciocínio avançado e contexto de até 1M tokens. Preços e janela de contexto baseados na precificação do Gemini 3.1 Pro a partir de Julho de 2026. Note que para prompts acima de 200K tokens, os preços sobem para $4.00/M de entrada e $18.00/M de saída.',
  },
  {
    name: 'Gemini 3.1 Flash-Lite',
    provider: 'Google',
    inputPricePerM: 0.25,
    outputPricePerM: 1.50,
    contextWindow: '1M tokens',
    description: 'O modelo Flash-Lite da Google (versão 3.1), otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. É o modelo mais econômico da série Gemini 3. Preços e janela de contexto baseados na precificação do Gemini 3.1 Flash-Lite a partir de Julho de 2026.',
  },
  // OpenAI
  {
    name: 'GPT-5.6 Terra',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'Um modelo poderoso da família GPT-5.6 da OpenAI, oferecendo um bom equilíbrio entre desempenho e custo, com 1M de contexto. Preços e janela de contexto baseados no GPT-5.6 Terra a partir de Julho de 2026.',
  },
  {
    name: 'GPT-5.6 Sol',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 30.00,
    contextWindow: '1M tokens',
    description: 'O modelo flagship mais recente da OpenAI (GPT-5.6 Sol), para raciocínio avançado e capacidades multimodais, com 1M de contexto. Preços e janela de contexto baseados no GPT-5.6 Sol a partir de Julho de 2026.',
  },
  {
    name: 'GPT-5.6 Luna',
    provider: 'OpenAI',
    inputPricePerM: 1.00,
    outputPricePerM: 6.00,
    contextWindow: '1M tokens',
    description: 'O modelo mais econômico da família GPT-5.6 da OpenAI, ideal para tarefas de baixo custo e alta escala, com 1M de contexto. Preços e janela de contexto baseados no GPT-5.6 Luna a partir de Julho de 2026.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.8',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '1M tokens',
    description: 'O modelo mais inteligente da família Claude da Anthropic (Claude Opus 4.8), para raciocínio complexo e tarefas agênticas, com 1M de contexto. Preços e janela de contexto baseados no Claude Opus 4.8 a partir de Julho de 2026.',
  },
  {
    name: 'Claude Sonnet 5',
    provider: 'Anthropic',
    inputPricePerM: 3.00, // Preço padrão a partir de Setembro de 2026
    outputPricePerM: 15.00, // Preço padrão a partir de Setembro de 2026
    contextWindow: '1M tokens',
    description: 'O modelo intermediário da família Claude da Anthropic (Claude Sonnet 5), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 1M de contexto. Preços e janela de contexto baseados na precificação padrão do Claude Sonnet 5 a partir de Setembro de 2026 (preço introdutório até 31 de Agosto de 2026 é $2.00/M de entrada e $10.00/M de saída).',
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPricePerM: 1.00,
    outputPricePerM: 5.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude da Anthropic (Claude Haiku 4.5), ideal para tarefas de alto desempenho e baixo custo, com até 200K de contexto. Preços e janela de contexto baseados no Claude Haiku 4.5 a partir de Julho de 2026.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'O modelo DeepSeek V4 Flash, com bom desempenho e um custo muito baixo, suportando 1M de contexto. Preços e janela de contexto baseados no DeepSeek V4 Flash (taxa regular) a partir de Julho de 2026. Note que há precificação diferenciada para horários de pico e cache de entrada.',
  },
  // Meta (via API)
  {
    name: 'Llama 3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 1.04,
    outputPricePerM: 1.04,
    contextWindow: '128K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama-3-70b-chat-hf), poderosa via API Together AI. Oferece 128K de contexto. Preços e janela de contexto baseados na precificação do Llama 3.3 70B Instruct via Together AI a partir de Julho de 2026.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '256K tokens',
    description: 'O modelo flagship da Mistral AI (Mistral Large 3), com raciocínio avançado e capacidades multimodais, suportando 256K de contexto. Preços e janela de contexto baseados no Mistral Large 3 a partir de Julho de 2026.',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '256K tokens',
    description: 'O modelo otimizado da Mistral AI (Mistral Small 4), que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas, com 256K de contexto. Preços e janela de contexto baseados no Mistral Small 4 a partir de Julho de 2026.',
  },
  {
    name: 'Mixtral 8x7B',
    provider: 'Mistral AI',
    inputPricePerM: 0.70,
    outputPricePerM: 0.70,
    contextWindow: '32K tokens',
    description: 'Modelo Sparse Mixture-of-Experts da Mistral AI, com excelente desempenho e eficiência, suportando 32K de contexto. Preços e janela de contexto baseados no Mixtral 8x7B a partir de Julho de 2026.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O modelo flagship da Cohere (Command R+), com uma janela de contexto de 128K tokens e otimizado para raciocínio avançado e fluxos de trabalho agênticos. Preços e janela de contexto baseados no Command R+ a partir de Julho de 2026.',
  },
  {
    name: 'Command R',
    provider: 'Cohere',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'Modelo eficiente da Cohere (Command R), adequado para cargas de trabalho de produção e RAG de menor custo, com 128K de contexto. Preços e janela de contexto confirmados em Julho de 2026 para o Command R.',
  },
];