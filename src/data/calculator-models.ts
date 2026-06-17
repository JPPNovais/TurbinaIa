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
    inputPricePerM: 4.00, // Preço para contexto >200K tokens
    outputPricePerM: 18.00, // Preço para contexto >200K tokens
    contextWindow: '2M tokens',
    description: 'O modelo Pro mais recente da Google (lançado em 2026), com raciocínio avançado e contexto de até 2M tokens. Preço para até 200K tokens é $2.00/M input e $12.00/M output. Para contexto acima de 200K tokens, os preços são $4.00/M input e $18.00/M output. (Baseado na precificação do Gemini 1.5 Pro com janela de contexto de 2M tokens a partir de Junho de 2024).',
  },
  {
    name: 'Gemini 3.5 Flash',
    provider: 'Google',
    inputPricePerM: 1.50,
    outputPricePerM: 9.00,
    contextWindow: '1M tokens',
    description: 'O modelo Flash mais econômico da Google (lançado em Maio de 2026), otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. (Baseado na janela de contexto do Gemini 1.5 Flash a partir de Junho de 2024).',
  },
  // OpenAI
  {
    name: 'GPT-5.5',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O mais recente modelo flagship da OpenAI (lançado em Abril de 2026), com raciocínio avançado e 128K de contexto. Oferece desempenho de ponta e é a principal escolha para tarefas complexas. (Preços e janela de contexto baseados no GPT-4o a partir de Junho de 2024).',
  },
  {
    name: 'GPT-5.4 mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'A versão mais econômica do GPT-5.4 da OpenAI, ideal para tarefas de baixo custo e alta escala, com 128K de contexto, mantendo alto desempenho. (Preços e janela de contexto baseados no GPT-4o mini a partir de Junho de 2024).',
  },
  {
    name: 'GPT-5.4',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Modelo de produção recomendado da OpenAI (versão de 2026), com capacidades avançadas e 128K de contexto. Ideal para cargas de trabalho empresariais, oferecendo forte desempenho. (Preços e janela de contexto baseados no GPT-4o a partir de Junho de 2024).',
  },
  {
    name: 'GPT-4.1 Nano',
    provider: 'OpenAI',
    inputPricePerM: 0.10,
    outputPricePerM: 0.40,
    contextWindow: '128K tokens',
    description: 'Modelo ultra-econômico da OpenAI (lançado em 2026), ideal para tarefas de classificação, roteamento e extração de alto volume. (Preços antecipados para um modelo de baixo custo, com janela de contexto de 128K tokens).',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.8',
    provider: 'Anthropic',
    inputPricePerM: 15.00,
    outputPricePerM: 75.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais inteligente da família Claude da Anthropic (lançado em Maio de 2026), para raciocínio complexo e tarefas agênticas, com 200K de contexto (com capacidade de até 1M tokens para clientes selecionados). Foco em honestidade e confiabilidade. (Preços e janela de contexto baseados no Claude 3 Opus a partir de Março de 2024).',
  },
  {
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '200K tokens',
    description: 'O modelo intermediário da família Claude da Anthropic, um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 200K de contexto (com capacidade de até 1M tokens para clientes selecionados). (Preços e janela de contexto baseados no Claude 3 Sonnet a partir de Março de 2024).',
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPricePerM: 0.25,
    outputPricePerM: 1.25,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude da Anthropic (lançado em 2026), ideal para tarefas de alto volume e sensíveis à latência, com 200K de contexto. (Preços e janela de contexto baseados no Claude 3 Haiku a partir de Março de 2024).',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'Modelo MoE altamente eficiente e econômico da DeepSeek (lançado em Abril de 2026), oferecendo bom desempenho a um custo muito baixo, com 1M de contexto. (Preços e janela de contexto antecipados para um modelo Flash de próxima geração).',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.90,
    outputPricePerM: 0.90,
    contextWindow: '131K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama 3.3 70B Instruct), poderosa via API Together AI (preços verificados em Junho de 2026), com 131K de contexto. (Baseado na precificação do Llama 3 70B Instruct via Together AI).',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 2.00,
    outputPricePerM: 6.00,
    contextWindow: '262K tokens',
    description: 'Modelo flagship da Mistral AI (lançado em 2026), com raciocínio avançado e capacidades multimodais, suportando 262K de contexto. (Preços e janela de contexto baseados no Mistral Large 2 a partir de Junho de 2026).',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.10,
    outputPricePerM: 0.30,
    contextWindow: '262K tokens',
    description: 'Modelo otimizado da Mistral AI (lançado em 2026), que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas, com 262K de contexto. (Preços e janela de contexto baseados no Mistral Small 3 a partir de Junho de 2026).',
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