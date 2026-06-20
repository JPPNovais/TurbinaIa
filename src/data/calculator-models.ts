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
    description: 'O modelo Pro mais recente da Google, com raciocínio avançado e contexto de até 1M tokens. Preços baseados na precificação do Gemini 1.5 Pro (Standard Pricing) a partir de Junho de 2026.',
  },
  {
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.35,
    outputPricePerM: 1.05,
    contextWindow: '128K tokens',
    description: 'O modelo Flash mais econômico da Google, otimizado para tarefas de alta frequência e baixo custo, com até 128K de contexto. Preços baseados na precificação do Gemini 1.5 Flash (Standard Pricing) a partir de Junho de 2026.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 15.00,
    contextWindow: '128K tokens',
    description: 'O mais recente modelo flagship da OpenAI (lançado em Maio de 2024), com raciocínio avançado, capacidades multimodais e 128K de contexto. Oferece desempenho de ponta e é a principal escolha para tarefas complexas. (Preços e janela de contexto baseados no GPT-4o a partir de Junho de 2026).',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'A versão mais econômica do GPT-4o da OpenAI (lançada em Julho de 2024), ideal para tarefas de baixo custo e alta escala, com 128K de contexto, mantendo alto desempenho. (Preços e janela de contexto baseados no GPT-4o mini a partir de Junho de 2026).',
  },
  {
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    inputPricePerM: 10.00,
    outputPricePerM: 30.00,
    contextWindow: '128K tokens',
    description: 'Modelo de produção recomendado da OpenAI (versão 2024), com capacidades avançadas e 128K de contexto. Ideal para cargas de trabalho empresariais, oferecendo forte desempenho. (Preços e janela de contexto baseados no GPT-4 Turbo a partir de Junho de 2026).',
  },
  // Anthropic
  {
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    inputPricePerM: 15.00,
    outputPricePerM: 75.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais inteligente da família Claude da Anthropic (lançado em Março de 2024), para raciocínio complexo e tarefas agênticas, com 200K de contexto (com capacidade de até 1M tokens). Foco em honestidade e confiabilidade. (Preços e janela de contexto baseados no Claude 3 Opus a partir de Junho de 2026).',
  },
  {
    name: 'Claude 3 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '200K tokens',
    description: 'O modelo intermediário da família Claude da Anthropic (lançado em Março de 2024), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 200K de contexto (com capacidade de até 1M tokens). (Preços e janela de contexto baseados no Claude 3 Sonnet a partir de Junho de 2026).',
  },
  {
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    inputPricePerM: 0.25,
    outputPricePerM: 1.25,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude da Anthropic (lançado em Março de 2024), ideal para tarefas de alto volume e sensíveis à latência, com 200K de contexto. (Preços e janela de contexto baseados no Claude 3 Haiku a partir de Junho de 2026).',
  },
  // DeepSeek
  {
    name: 'DeepSeek-V2',
    provider: 'DeepSeek',
    inputPricePerM: 0.10,
    outputPricePerM: 0.20,
    contextWindow: '128K tokens',
    description: 'Modelo MoE altamente eficiente e econômico da DeepSeek (lançado em Junho de 2024), oferecendo bom desempenho a um custo muito baixo, com 128K de contexto. (Preços e janela de contexto baseados no DeepSeek-V2 a partir de Junho de 2026).',
  },
  // Meta (via API)
  {
    name: 'Llama 3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.90,
    outputPricePerM: 0.90,
    contextWindow: '8K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama 3 70B Instruct), poderosa via API Together AI (preços verificados em Junho de 2024), com 8K de contexto. (Baseado na precificação do Llama 3 70B Instruct via Together AI a partir de Junho de 2026).',
  },
  // Mistral AI
  {
    name: 'Mistral Large',
    provider: 'Mistral AI',
    inputPricePerM: 2.00,
    outputPricePerM: 6.00,
    contextWindow: '128K tokens',
    description: 'Modelo flagship da Mistral AI, com raciocínio avançado e capacidades multimodais, suportando 128K de contexto. (Preços e janela de contexto baseados no Mistral Large 2 a partir de Junho de 2026).',
  },
  {
    name: 'Mistral Small',
    provider: 'Mistral AI',
    inputPricePerM: 0.10,
    outputPricePerM: 0.30,
    contextWindow: '32K tokens',
    description: 'Modelo otimizado da Mistral AI, que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas, com 32K de contexto. (Preços e janela de contexto baseados no Mistral Small 3 a partir de Junho de 2026).',
  },
  {
    name: 'Mistral Tiny',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.45,
    contextWindow: '32K tokens',
    description: 'Modelo ultra-econômico da Mistral AI, ideal para tarefas de alto volume e sensíveis à latência, com 32K de contexto. (Preços e janela de contexto baseados no Mistral Tiny a partir de Junho de 2026).',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Modelo robusto da Cohere (versão 08-2024), otimizado para RAG e tarefas empresariais complexas, com 128K de contexto. Flagship para uso geral de RAG e chat. Preços e janela de contexto confirmados em Junho de 2026.',
  },
  {
    name: 'Command R',
    provider: 'Cohere',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'Modelo eficiente da Cohere (versão 08-2024), adequado para cargas de trabalho de produção e RAG de menor custo, com 128K de contexto. Preços e janela de contexto confirmados em Junho de 2026.',
  },
];