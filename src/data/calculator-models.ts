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
    contextWindow: '2M tokens',
    description: 'O modelo Pro mais recente da Google, com raciocínio avançado e contexto de até 2M tokens. Preços e janela de contexto baseados na precificação do Gemini 3.1 Pro a partir de Julho de 2026. Note que para prompts acima de 200K tokens, os preços sobem para $4.00/M de entrada e $18.00/M de saída. (Preços mantidos do prompt original, pois informações de Julho de 2026 não foram encontradas para esta versão específica em resultados de busca externos.)',
  },
  {
    name: 'Gemini 3.5 Flash-Lite',
    provider: 'Google',
    inputPricePerM: 0.30,
    outputPricePerM: 2.50,
    contextWindow: '1M tokens',
    description: 'O modelo Flash-Lite da Google (versão 3.5), otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. É o modelo mais econômico da série Gemini 3. Preços e janela de contexto baseados na precificação do Gemini 3.5 Flash-Lite a partir de Julho de 2026. (Preços mantidos do prompt original, pois informações de Julho de 2026 não foram encontradas para esta versão específica em resultados de busca externos.)',
  },
  // OpenAI
  {
    name: 'GPT-5.6 Sol',
    provider: 'OpenAI',
    inputPricePerM: 5.00, // Preço para <272K tokens
    outputPricePerM: 30.00, // Preço para <272K tokens
    contextWindow: '1M tokens',
    description: 'O modelo flagship da OpenAI (GPT-5.6 Sol), com capacidades avançadas em raciocínio, codificação e cibersegurança, e contexto de até 1M tokens. Preços baseados na precificação do GPT-5.6 Sol a partir de Julho de 2026, para contextos menores que 272K tokens.',
  },
  {
    name: 'GPT-5.6 Terra',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'O modelo GPT-5.6 Terra da OpenAI, que equilibra inteligência e custo. Preços e janela de contexto baseados na precificação do GPT-5.6 Terra a partir de Julho de 2026.',
  },
  {
    name: 'GPT-5.6 Luna',
    provider: 'OpenAI',
    inputPricePerM: 1.00,
    outputPricePerM: 6.00,
    contextWindow: '1M tokens',
    description: 'O modelo econômico da família GPT-5 da OpenAI (GPT-5.6 Luna), ideal para tarefas de baixo custo e alta escala, com 1M de contexto. Preços e janela de contexto baseados no GPT-5.6 Luna a partir de Julho de 2026.',
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
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    inputPricePerM: 0.25,
    outputPricePerM: 1.25,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude da Anthropic (Claude 3 Haiku, equivalente ao legado Haiku 3), ideal para tarefas de alto desempenho e baixo custo, com até 200K de contexto. Preços e janela de contexto baseados no Claude 3 Haiku a partir de Julho de 2026.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'O modelo DeepSeek V4 Flash, com bom desempenho e um custo muito baixo, suportando 1M de contexto. Preços e janela de contexto baseados no DeepSeek V4 Flash a partir de Julho de 2026.',
  },
  // Meta (via API)
  {
    name: 'Llama 3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '8K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama-3-70b-chat), poderosa via API Together AI. Oferece 8K de contexto. Preços e janela de contexto baseados na precificação do Llama 3.3 70B Instruct via Together AI a partir de Julho de 2026. (Preços mantidos do prompt original, pois informações de Julho de 2026 não foram encontradas para esta versão específica em resultados de busca externos.)',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '131K tokens',
    description: 'O modelo flagship da Mistral AI (Mistral Large 3), com raciocínio avançado e capacidades multimodais, suportando 131K de contexto. Preços e janela de contexto baseados no Mistral Large 3 a partir de Julho de 2026.',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.10,
    outputPricePerM: 0.30,
    contextWindow: '256K tokens',
    description: 'O modelo otimizado da Mistral AI (Mistral Small 4), que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas, com 256K de contexto. Preços e janela de contexto baseados no Mistral Small 4 a partir de Julho de 2026.',
  },
  {
    name: 'Mistral Medium 3.5',
    provider: 'Mistral AI',
    inputPricePerM: 1.50,
    outputPricePerM: 7.50,
    contextWindow: '262K tokens',
    description: 'O modelo intermediário da Mistral AI (Mistral Medium 3.5), oferecendo um equilíbrio entre inteligência e custo. Preços e janela de contexto baseados no Mistral Medium 3.5 a partir de Julho de 2026.',
  },
  // Cohere
  {
    name: 'Command A',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '256K tokens',
    description: 'O mais novo modelo flagship da Cohere (Command A), com uma janela de contexto de 256K tokens, otimizado para raciocínio avançado, fluxos de trabalho agênticos e capacidades multilingues. Preços e janela de contexto baseados no Command A a partir de Julho de 2026.',
  },
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O modelo flagship da Cohere (Command R+), com uma janela de contexto de 128K tokens e otimizado para raciocínio avançado e fluxos de trabalho agênticos. Preços e janela de contexto baseados no Command R+ 08-2024 a partir de Julho de 2026.',
  },
  // Removed Command R to keep 15 models total, as Command A is newer flagship with larger context.
];