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
    contextWindow: '2M tokens', // Atualizado de 1M para 2M tokens
    description: 'O modelo Pro mais recente da Google, com raciocínio avançado e contexto de até 2M tokens. Preços e janela de contexto baseados na precificação do Gemini 3.1 Pro a partir de Julho de 2026. Note que para prompts acima de 200K tokens, os preços sobem para $4.00/M de entrada e $18.00/M de saída.',
  },
  {
    name: 'Gemini 3.5 Flash-Lite', // Atualizado de Gemini 3.1 Flash-Lite
    provider: 'Google',
    inputPricePerM: 0.30, // Preços atualizados para Gemini 3.5 Flash-Lite
    outputPricePerM: 2.50, // Preços atualizados para Gemini 3.5 Flash-Lite
    contextWindow: '1M tokens',
    description: 'O modelo Flash-Lite da Google (versão 3.5), otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. É o modelo mais econômico da série Gemini 3. Preços e janela de contexto baseados na precificação do Gemini 3.5 Flash-Lite a partir de Julho de 2026.',
  },
  // OpenAI
  {
    name: 'GPT-5.6 Terra', // Atualizado de GPT-4 Turbo
    provider: 'OpenAI',
    inputPricePerM: 2.50, // Preços atualizados para GPT-5.6 Terra
    outputPricePerM: 15.00, // Preços atualizados para GPT-5.6 Terra
    contextWindow: '128K tokens', // Janela de contexto padrão
    description: 'Um modelo poderoso da família GPT-5 da OpenAI (GPT-5.6 Terra), oferecendo alto desempenho para diversas tarefas, com 128K de contexto. Preços e janela de contexto baseados no GPT-5.6 Terra a partir de Julho de 2026.',
  },
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50, // Preços confirmados para GPT-4o
    outputPricePerM: 10.00, // Preços confirmados para GPT-4o
    contextWindow: '128K tokens', // Janela de contexto confirmada para GPT-4o
    description: 'O modelo flagship mais recente da OpenAI (GPT-4o), para raciocínio avançado e capacidades multimodais, com 128K de contexto. Preços e janela de contexto baseados na precificação do GPT-4o a partir de Julho de 2026.',
  },
  {
    name: 'GPT-5.6 Luna', // Atualizado de GPT-3.5 Turbo (16K)
    provider: 'OpenAI',
    inputPricePerM: 1.00, // Preços atualizados para GPT-5.6 Luna
    outputPricePerM: 6.00, // Preços atualizados para GPT-5.6 Luna
    contextWindow: '128K tokens', // Janela de contexto padrão
    description: 'O modelo econômico da família GPT-5 da OpenAI (GPT-5.6 Luna), ideal para tarefas de baixo custo e alta escala, com 128K de contexto. Preços e janela de contexto baseados no GPT-5.6 Luna a partir de Julho de 2026.',
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
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '200K tokens',
    description: 'O modelo intermediário da família Claude da Anthropic (Claude 3.5 Sonnet), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 200K de contexto. Preços e janela de contexto baseados na precificação do Claude 3.5 Sonnet a partir de Julho de 2026. Este modelo sucede as versões anteriores do Sonnet.',
  },
  {
    name: 'Claude 3 Haiku', // Atualizado de Claude Haiku 4.5
    provider: 'Anthropic',
    inputPricePerM: 0.25, // Preços atualizados para Claude 3 Haiku
    outputPricePerM: 1.25, // Preços atualizados para Claude 3 Haiku
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude da Anthropic (Claude 3 Haiku), ideal para tarefas de alto desempenho e baixo custo, com até 200K de contexto. Preços e janela de contexto baseados no Claude 3 Haiku a partir de Julho de 2026.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash', // Atualizado de DeepSeek-V2
    provider: 'DeepSeek',
    inputPricePerM: 0.14, // Preços atualizados para DeepSeek V4 Flash
    outputPricePerM: 0.28, // Preços atualizados para DeepSeek V4 Flash
    contextWindow: '1M tokens', // Janela de contexto atualizada para DeepSeek V4 Flash
    description: 'O modelo DeepSeek V4 Flash, com bom desempenho e um custo muito baixo, suportando 1M de contexto. Preços e janela de contexto baseados no DeepSeek V4 Flash a partir de Julho de 2026.',
  },
  // Meta (via API)
  {
    name: 'Llama 3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88, // Preços atualizados para Llama 3 70B Instruct via Together AI
    outputPricePerM: 0.88, // Preços atualizados para Llama 3 70B Instruct via Together AI
    contextWindow: '8K tokens', // Janela de contexto confirmada para Llama 3 70B Instruct via Together AI
    description: 'Versão avançada do modelo open-source Llama 3 (Llama-3-70b-chat), poderosa via API Together AI. Oferece 8K de contexto. Preços e janela de contexto baseados na precificação do Llama 3.3 70B Instruct via Together AI a partir de Julho de 2026.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '131K tokens', // Janela de contexto confirmada para Mistral Large 3
    description: 'O modelo flagship da Mistral AI (Mistral Large 3), com raciocínio avançado e capacidades multimodais, suportando 131K de contexto. Preços e janela de contexto baseados no Mistral Large 3 a partir de Julho de 2026.',
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
    name: 'Mistral Medium 3.5', // Atualizado de Mixtral 8x7B
    provider: 'Mistral AI',
    inputPricePerM: 1.50, // Preços atualizados para Mistral Medium 3.5
    outputPricePerM: 7.50, // Preços atualizados para Mistral Medium 3.5
    contextWindow: '128K tokens', // Janela de contexto para Mistral Medium 3.5
    description: 'O modelo intermediário da Mistral AI (Mistral Medium 3.5), oferecendo um equilíbrio entre inteligência e custo. Preços e janela de contexto baseados no Mistral Medium 3.5 a partir de Julho de 2026.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O modelo flagship da Cohere (Command R+), com uma janela de contexto de 128K tokens e otimizado para raciocínio avançado e fluxos de trabalho agênticos. Preços e janela de contexto baseados no Command R+ 08-2024 a partir de Julho de 2026.',
  },
  {
    name: 'Command R',
    provider: 'Cohere',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'Modelo eficiente da Cohere (Command R), adequado para cargas de trabalho de produção e RAG de menor custo, com 128K de contexto. Preços e janela de contexto confirmados para Command R 08-2024 em Julho de 2026.',
  },
];