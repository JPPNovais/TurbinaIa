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
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    inputPricePerM: 7.00,
    outputPricePerM: 21.00,
    contextWindow: '1M tokens',
    description: 'O modelo Pro mais recente da Google, com raciocínio avançado e contexto de até 1M tokens (2M em preview). Preços atualizados a partir de Setembro de 2024 para contextos acima de 128K tokens. Para contextos até 128K, os preços são $1.26/M de entrada e $5.04/M de saída.',
  },
  {
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '1M tokens',
    description: 'O modelo Flash da Google, otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. É o modelo mais econômico da série Gemini 1.5. Preços atualizados a partir de Agosto de 2024 para contextos acima de 128K tokens. Para contextos até 128K, os preços são $0.075/M de entrada e $0.30/M de saída.',
  },
  // OpenAI
  {
    name: 'GPT-5.6 Sol',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 30.00,
    contextWindow: '1.05M tokens',
    description: 'O modelo flagship da OpenAI (GPT-5.6 Sol), com capacidades avançadas em raciocínio, codificação e cibersegurança, e contexto de até 1.05M tokens. Preços atualizados a partir de Julho de 2026, para contextos menores que o limite de longo contexto. Para contextos longos, os preços são $10.00/M de entrada e $45.00/M de saída.',
  },
  {
    name: 'GPT-5.6 Terra',
    provider: 'OpenAI',
    inputPricePerM: 2.00,
    outputPricePerM: 12.00,
    contextWindow: '1.05M tokens',
    description: 'O modelo GPT-5.6 Terra da OpenAI, que equilibra inteligência e custo. Preços e janela de contexto atualizados a partir de Julho de 2026, para contextos menores que o limite de longo contexto. Para contextos longos, os preços são $4.00/M de entrada e $18.00/M de saída.',
  },
  {
    name: 'GPT-5.6 Luna',
    provider: 'OpenAI',
    inputPricePerM: 0.20,
    outputPricePerM: 1.20,
    contextWindow: '1.05M tokens',
    description: 'O modelo econômico da família GPT-5 da OpenAI (GPT-5.6 Luna), ideal para tarefas de baixo custo e alta escala, com 1.05M de contexto. Preços e janela de contexto atualizados a partir de Julho de 2026, para contextos menores que o limite de longo contexto. Para contextos longos, os preços são $0.40/M de entrada e $1.80/M de saída.',
  },
  // Anthropic
  {
    name: 'Claude Opus 5',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais inteligente da família Claude da Anthropic (Claude Opus 5), para raciocínio complexo e tarefas agênticas, com 200K de contexto. Preços atualizados a partir de Agosto de 2026.',
  },
  {
    name: 'Claude Sonnet 5',
    provider: 'Anthropic',
    inputPricePerM: 2.00,
    outputPricePerM: 10.00,
    contextWindow: '200K tokens',
    description: 'O modelo intermediário da família Claude da Anthropic (Claude Sonnet 5), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 200K de contexto. Preços atualizados a partir de Agosto de 2026.',
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPricePerM: 1.00,
    outputPricePerM: 5.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude da Anthropic (Claude Haiku 4.5), ideal para tarefas de alto desempenho e baixo custo, com até 200K de contexto. Preços atualizados a partir de Agosto de 2026.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'O modelo DeepSeek V4 Flash, com bom desempenho e um custo muito baixo, suportando 1M de contexto. Preços atualizados a partir de Agosto de 2026. Os preços de entrada são para cache miss; para cache hit, o custo é de $0.0028/M tokens.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '131K tokens',
    description: 'Versão avançada do modelo open-source Llama 3.3 (Llama-3.3-70b-instruct), poderosa via API Together AI. Oferece 131K de contexto. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '256K tokens',
    description: 'O modelo flagship da Mistral AI (Mistral Large 3), com raciocínio avançado e capacidades multimodais, suportando 256K de contexto. Preços e janela de contexto atualizados a partir de Julho de 2026.',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '256K tokens',
    description: 'O modelo otimizado da Mistral AI (Mistral Small 4), que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas, com 256K de contexto. Preços e janela de contexto atualizados a partir de Julho de 2026.',
  },
  {
    name: 'Mistral Medium 3.5',
    provider: 'Mistral AI',
    inputPricePerM: 1.50,
    outputPricePerM: 7.50,
    contextWindow: '256K tokens',
    description: 'O modelo intermediário da Mistral AI (Mistral Medium 3.5), oferecendo um equilíbrio entre inteligência e custo, com 256K de contexto. Preços e janela de contexto atualizados a partir de Julho de 2026.',
  },
  // Cohere
  {
    name: 'Command A',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O mais novo modelo flagship da Cohere (Command A), com uma janela de contexto de 128K tokens, otimizado para raciocínio avançado, fluxos de trabalho agênticos e capacidades multilingues. Preços e janela de contexto atualizados a partir de Julho de 2026.',
  },
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O modelo flagship da Cohere (Command R+), com uma janela de contexto de 128K tokens e otimizado para raciocínio avançado e fluxos de trabalho agênticos. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
];