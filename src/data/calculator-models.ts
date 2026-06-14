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
    inputPricePerM: 2.00, // Price for up to 200K tokens
    outputPricePerM: 12.00, // Price for up to 200K tokens
    contextWindow: '2M tokens',
    description: 'O modelo Pro atual da Google (lançado em Fevereiro de 2026), com raciocínio avançado e contexto de até 2M tokens. Preço base para até 200K tokens. Acima de 200K tokens, os preços são $4.00/M input e $18.00/M output.',
  },
  {
    name: 'Gemini 3.1 Flash-Lite',
    provider: 'Google',
    inputPricePerM: 0.25,
    outputPricePerM: 1.50,
    contextWindow: '1M tokens',
    description: 'O modelo Flash mais econômico da Google (lançado em Março de 2026), otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. É o modelo budget de Nível 1 mais barato do mercado.',
  },
  {
    name: 'Gemini 3.5 Flash',
    provider: 'Google',
    inputPricePerM: 1.50,
    outputPricePerM: 9.00,
    contextWindow: '1M tokens',
    description: 'O mais novo modelo Flash da Google (lançado em Maio de 2026), projetado para capacidades agenticas e codificação, com 1M de contexto. Supera o Gemini 3.1 Pro em alguns benchmarks de codificação com custo menor.',
  },
  // OpenAI
  {
    name: 'GPT-5.5',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 30.00,
    contextWindow: '1.05M tokens',
    description: 'O mais recente modelo flagship da OpenAI (lançado em Abril de 2026), com raciocínio avançado, capacidades multimodais e 1.05M de contexto. Oferece desempenho de ponta e é a principal escolha para tarefas complexas.',
  },
  {
    name: 'GPT-5.4',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'O modelo de produção recomendado da OpenAI (lançado em Março de 2026), com capacidades avançadas e 1M de contexto. Substituiu todos os modelos pré-GPT-5.4 e é o flagship de uso geral.',
  },
  {
    name: 'GPT-5.4 Nano',
    provider: 'OpenAI',
    inputPricePerM: 0.20,
    outputPricePerM: 1.25,
    contextWindow: '1M tokens',
    description: 'A versão mais econômica da família GPT-5.4 (lançado em Março de 2026), ideal para classificação, roteamento e tarefas de extração simples, com 1M de contexto.',
  },
  {
    name: 'GPT-5.4 Mini',
    provider: 'OpenAI',
    inputPricePerM: 0.75,
    outputPricePerM: 4.50,
    contextWindow: '1M tokens',
    description: 'Uma versão mais rápida e acessível do GPT-5.4 (lançado em Março de 2026), que mantém forte desempenho de raciocínio e codificação para a maioria das cargas de trabalho de produção, com 1M de contexto.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.8',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '1M tokens',
    description: 'A versão mais recente do modelo Opus da Anthropic para raciocínio complexo e tarefas agênticas (lançado em Maio de 2026), com 1M de contexto. Ideal para agentes de longo horizonte e tarefas de visão de alta resolução, com foco em honestidade e confiabilidade.',
  },
  {
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'A versão mais recente do modelo Sonnet da Anthropic (lançado em Fevereiro de 2026), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 1M de contexto. É o melhor equilíbrio para cargas de trabalho de produção.',
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPricePerM: 1.00,
    outputPricePerM: 5.00,
    contextWindow: '200K tokens',
    description: 'A versão mais recente do modelo Haiku da Anthropic (lançado em Outubro de 2025), o mais rápido e econômico, com 200K de contexto. Ideal para tarefas de alto volume e sensíveis à latência.',
  },
  // DeepSeek
  {
    name: 'DeepSeek-V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'Modelo MoE eficiente e econômico da DeepSeek (lançado em Abril de 2026), com 1M de contexto, oferecendo bom desempenho a baixo custo. É o API frontier-class mais barato disponível.',
  },
  {
    name: 'DeepSeek-V4 Pro',
    provider: 'DeepSeek',
    inputPricePerM: 1.74,
    outputPricePerM: 3.48,
    contextWindow: '1M tokens',
    description: 'Modelo flagship da DeepSeek (lançado em Abril de 2026), oferece raciocínio avançado com 1M de contexto a um preço competitivo, superando significativamente o GPT-5.5 e Claude Opus 4.8 em termos de custo-benefício.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.1 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '131K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama 3.1 70B Instruct), poderoso via API Together AI (preços verificados em Junho de 2026), com 131K de contexto.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '256K tokens',
    description: 'Modelo flagship da Mistral AI (Mistral Large 3), com raciocínio e capacidades multimodais, suportando 256K de contexto. Preço agressivo, subcotando GPT-5.4 em 80% na entrada e 90% na saída.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Modelo robusto da Cohere (lançado em Agosto de 2024), otimizado para RAG e tarefas empresariais, com 128K de contexto. Flagship para uso geral de RAG e chat.',
  },
];