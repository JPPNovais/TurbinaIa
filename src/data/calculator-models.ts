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
    inputPricePerM: 7.00, // Preço para contexto de 1M tokens
    outputPricePerM: 21.00, // Preço para contexto de 1M tokens
    contextWindow: '1M tokens',
    description: 'O modelo Pro atual da Google, com raciocínio avançado e contexto de até 1M tokens. Preço base para até 128K tokens é $3.50/M input e $10.50/M output. Para 1M tokens, os preços são $7.00/M input e $21.00/M output. Uma versão com 2M tokens de contexto também está disponível.',
  },
  {
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.70, // Preço para contexto de 1M tokens
    outputPricePerM: 2.10, // Preço para contexto de 1M tokens
    contextWindow: '1M tokens',
    description: 'O modelo Flash mais econômico da Google, otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. Preço base para até 128K tokens é $0.35/M input e $1.05/M output. Para 1M tokens, os preços são $0.70/M input e $2.10/M output.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 15.00,
    contextWindow: '128K tokens',
    description: 'O mais recente modelo flagship da OpenAI (lançado em Maio de 2024), com raciocínio avançado, capacidades multimodais e 128K de contexto. Oferece desempenho de ponta e é a principal escolha para tarefas complexas.',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'A versão mais econômica do GPT-4o da OpenAI (lançado em Julho de 2024), ideal para tarefas de baixo custo e alta escala, com 128K de contexto, mantendo alto desempenho.',
  },
  {
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    inputPricePerM: 10.00,
    outputPricePerM: 30.00,
    contextWindow: '128K tokens',
    description: 'O modelo de produção recomendado da OpenAI (versão de 2024-04-09), com capacidades avançadas e 128K de contexto. Ideal para cargas de trabalho empresariais, oferecendo forte desempenho.',
  },
  {
    name: 'GPT-3.5 Turbo',
    provider: 'OpenAI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '16K tokens',
    description: 'Modelo mais econômico da OpenAI (versão gpt-3.5-turbo-0125), ideal para tarefas de classificação, resumo e geração de texto simples, com 16K de contexto.',
  },
  // Anthropic
  {
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    inputPricePerM: 15.00,
    outputPricePerM: 75.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais inteligente da família Claude 3 da Anthropic (lançado em Março de 2024), para raciocínio complexo e tarefas agênticas, com 200K de contexto. Foco em honestidade e confiabilidade.',
  },
  {
    name: 'Claude 3 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '200K tokens',
    description: 'O modelo intermediário da família Claude 3 da Anthropic (lançado em Março de 2024), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 200K de contexto.',
  },
  {
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    inputPricePerM: 0.25,
    outputPricePerM: 1.25,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude 3 da Anthropic (lançado em Março de 2024), ideal para tarefas de alto volume e sensíveis à latência, com 200K de contexto.',
  },
  // DeepSeek
  {
    name: 'DeepSeek-V2',
    provider: 'DeepSeek',
    inputPricePerM: 0.10,
    outputPricePerM: 0.20,
    contextWindow: '128K tokens',
    description: 'Modelo MoE altamente eficiente e econômico da DeepSeek (lançado em Maio de 2024), oferecendo bom desempenho a um custo muito baixo, com 128K de contexto.',
  },
  // Meta (via API)
  {
    name: 'Llama 3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.59,
    outputPricePerM: 0.59,
    contextWindow: '8K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama 3 70B Instruct), poderosa via API Together AI (preços verificados em Junho de 2024), com 8K de contexto.',
  },
  // Mistral AI
  {
    name: 'Mistral Large',
    provider: 'Mistral AI',
    inputPricePerM: 8.00,
    outputPricePerM: 24.00,
    contextWindow: '32K tokens',
    description: 'Modelo flagship da Mistral AI (lançado em Fevereiro de 2024), com raciocínio e capacidades multimodais, suportando 32K de contexto.',
  },
  {
    name: 'Mistral Small',
    provider: 'Mistral AI',
    inputPricePerM: 2.00,
    outputPricePerM: 6.00,
    contextWindow: '32K tokens',
    description: 'Modelo otimizado da Mistral AI (lançado em Fevereiro de 2024), que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas, com 32K de contexto.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Modelo robusto da Cohere (versão 08-2024, lançada em Agosto de 2024), otimizado para RAG e tarefas empresariais complexas, com 128K de contexto. Flagship para uso geral de RAG e chat.',
  },
  {
    name: 'Command R',
    provider: 'Cohere',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'Modelo eficiente da Cohere (versão 08-2024, lançada em Agosto de 2024), adequado para cargas de trabalho de produção e RAG de menor custo, com 128K de contexto.',
  },
];