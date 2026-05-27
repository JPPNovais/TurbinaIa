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
    name: 'Gemini 3 Flash', // Nome ajustado para consistência com o pricing encontrado para maio de 2026.
    provider: 'Google',
    inputPricePerM: 0.30, // Preço atualizado para Gemini 3 Flash (MetaCTO, maio de 2026).
    outputPricePerM: 2.50, // Preço atualizado para Gemini 3 Flash (MetaCTO, maio de 2026).
    contextWindow: '1M tokens', // Janela de contexto confirmada para modelos Flash em maio de 2026.
    description: 'Modelo equilibrado para velocidade e capacidade da nova geração Gemini 3 Flash.',
  },
  {
    name: 'Gemini 3.1 Pro', // Preço e janela de contexto atualizados para Gemini 3.1 Pro em maio de 2026.
    provider: 'Google',
    inputPricePerM: 4.00, // Preço atualizado para contextos acima de 200K tokens para Gemini 3.1 Pro (MetaCTO, maio de 2026).
    outputPricePerM: 18.00, // Preço atualizado para contextos acima de 200K tokens para Gemini 3.1 Pro (MetaCTO, maio de 2026).
    contextWindow: '1M tokens', // Janela de contexto atualizada para Gemini 3.1 Pro (MetaCTO, maio de 2026, com 2M max).
    description: 'Topo de linha da Google com 1M de contexto (preço para >200K tokens) e raciocínio avançado (versão 3.1).',
  },
  {
    name: 'Gemini 3.1 Flash-Lite', // Preço e janela de contexto atualizados para Gemini 3.1 Flash-Lite em maio de 2026.
    provider: 'Google',
    inputPricePerM: 0.25, // Preço atualizado do Gemini 3.1 Flash-Lite (MetaCTO, maio de 2026), conforme contexto do prompt.
    outputPricePerM: 1.50, // Preço atualizado do Gemini 3.1 Flash-Lite (MetaCTO, maio de 2026), conforme contexto do prompt.
    contextWindow: '1M tokens', // Janela de contexto mantida para o modelo 'Lite'.
    description: 'Modelo econômico e de alta velocidade da nova geração Gemini 3.1, com suporte multimodal.',
  },
  // OpenAI
  {
    name: 'GPT-5.4', // GPT-5.4 é listado como disponível em maio de 2026.
    provider: 'OpenAI',
    inputPricePerM: 2.50, // Preço atualizado do GPT-5.4 (Flowlyn, MetaCTO, TypingMind, Price Per Token, maio de 2026).
    outputPricePerM: 15.00, // Preço atualizado do GPT-5.4 (Flowlyn, MetaCTO, TypingMind, Price Per Token, maio de 2026).
    contextWindow: '1M tokens', // Janela de contexto para o GPT-5.4 (MetaCTO, maio de 2026).
    description: 'Modelo flagship da OpenAI com raciocínio avançado e capacidade multimodal.',
  },
  {
    name: 'GPT-5.4 Mini', // Atualizado de GPT-4o mini para GPT-5.4 Mini, relevante em maio de 2026.
    provider: 'OpenAI',
    inputPricePerM: 0.75, // Preço atualizado do GPT-5.4 Mini (Flowlyn, MetaCTO, maio de 2026).
    outputPricePerM: 4.50, // Preço atualizado do GPT-5.4 Mini (Flowlyn, MetaCTO, maio de 2026).
    contextWindow: '128K tokens', // Janela de contexto para o GPT-5.4 Mini (MetaCTO, maio de 2026).
    description: 'Versão compacta do GPT-5.4 — rápida e econômica para tarefas do dia a dia.',
  },
  {
    name: 'GPT-5.5', // Modelo flagship mais recente da OpenAI para maio de 2026.
    provider: 'OpenAI',
    inputPricePerM: 5.00, // Preço do GPT-5.5 (Verdent AI, TypingMind, MetaCTO, maio de 2026).
    outputPricePerM: 30.00, // Preço do GPT-5.5 (Verdent AI, TypingMind, MetaCTO, maio de 2026).
    contextWindow: '1M tokens', // Janela de contexto do GPT-5.5 (MetaCTO, maio de 2026).
    description: 'Modelo flagship mais recente da OpenAI, com raciocínio superior e 1M de contexto.',
  },
  // Anthropic
  {
    name: 'Claude 4.7 Opus', // Atualizado para a versão 4.7, conforme referências de maio de 2026.
    provider: 'Anthropic',
    inputPricePerM: 5.00, // Preço atualizado do Claude 4.7 Opus (MetaCTO, CloudZero, maio de 2026).
    outputPricePerM: 25.00, // Preço atualizado do Claude 4.7 Opus (MetaCTO, CloudZero, maio de 2026).
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude 4.7 Opus (MetaCTO, maio de 2026).
    description: 'O modelo mais inteligente da Anthropic para raciocínio complexo e tarefas agênticas (versão 4.7).',
  },
  {
    name: 'Claude 4.6 Sonnet', // Atualizado para a versão 4.6, conforme referências de maio de 2026.
    provider: 'Anthropic',
    inputPricePerM: 3.00, // Preço atualizado do Claude 4.6 Sonnet (MetaCTO, CloudZero, maio de 2026).
    outputPricePerM: 15.00, // Preço atualizado do Claude 4.6 Sonnet (MetaCTO, CloudZero, maio de 2026).
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude 4.6 Sonnet (MetaCTO, maio de 2026).
    description: 'Referência em geração de código e raciocínio lógico (versão 4.6).',
  },
  {
    name: 'Claude 4.5 Haiku', // Atualizado para a versão 4.5, conforme referências de maio de 2026.
    provider: 'Anthropic',
    inputPricePerM: 1.00, // Preço atualizado do Claude 4.5 Haiku (MetaCTO, CloudZero, maio de 2026).
    outputPricePerM: 5.00, // Preço atualizado do Claude 4.5 Haiku (MetaCTO, CloudZero, maio de 2026).
    contextWindow: '200K tokens', // Janela de contexto atual do Claude 4.5 Haiku (MetaCTO, maio de 2026).
    description: 'O modelo rápido e econômico da Anthropic com 200k contexto (versão 4.5).',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash', // Mantido como DeepSeek V4 Flash.
    provider: 'DeepSeek',
    inputPricePerM: 0.14, // Preço atualizado para DeepSeek V4 Flash (DeepSeek official pricing, Verdent AI, CostGoat, abril-maio de 2026).
    outputPricePerM: 0.28, // Preço atualizado para DeepSeek V4 Flash (DeepSeek official pricing, Verdent AI, CostGoat, abril-maio de 2026).
    contextWindow: '1M tokens', // Janela de contexto confirmada para DeepSeek V4 Flash (DeepSeek, CostGoat, maio de 2026).
    description: 'Versão Flash do DeepSeek V4 com alta performance e 1M de contexto.',
  },
  {
    name: 'DeepSeek V4 Pro', // Mantido como DeepSeek V4 Pro.
    provider: 'DeepSeek',
    inputPricePerM: 1.74, // Preço atualizado para DeepSeek V4 Pro (DeepSeek official pricing, Verdent AI, CostGoat, abril-maio de 2026, preço regular).
    outputPricePerM: 3.48, // Preço atualizado para DeepSeek V4 Pro (DeepSeek official pricing, Verdent AI, CostGoat, abril-maio de 2026, preço regular).
    contextWindow: '1M tokens', // Janela de contexto confirmada para DeepSeek V4 Pro (DeepSeek, CostGoat, maio de 2026).
    description: 'Versão Pro do DeepSeek V4 com raciocínio de ponta e 1M de contexto.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B', // Mantido como Llama 3.3 70B.
    provider: 'Meta (via API)',
    inputPricePerM: 0.88, // Preço atualizado para Llama 3.3 70B via Together AI (Together AI, TypingMind, TokenMix, dezembro de 2024 - abril de 2026).
    outputPricePerM: 0.88, // Preço atualizado para Llama 3.3 70B via Together AI (Together AI, TypingMind, TokenMix, dezembro de 2024 - abril de 2026).
    contextWindow: '131K tokens', // Janela de contexto atualizada para Llama 3.3 70B (Together AI, TypingMind, dezembro de 2024).
    description: 'Open source poderoso — pode ser usado local ou via API (preço via Together AI).',
  },
  {
    name: 'Llama 3.1 8B Instruct', // Mantido como Llama 3.1 8B Instruct.
    provider: 'Meta (via API)',
    inputPricePerM: 0.18, // Preço atualizado do Llama 3.1 8B Instruct via Together AI (Together AI, maio de 2026).
    outputPricePerM: 0.18, // Preço atualizado do Llama 3.1 8B Instruct via Together AI (Together AI, maio de 2026).
    contextWindow: '16K tokens', // Janela de contexto mantida para Llama 3.1 8B Instruct (compatível com modelos 8B).
    description: 'Versão leve e econômica da família Llama 3.1 Instruct.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3', // Adicionado como modelo flagship da Mistral AI, com preços para maio de 2026.
    provider: 'Mistral AI',
    inputPricePerM: 0.50, // Preço atualizado do Mistral Large 3 (Inworld AI, Price Per Token, MarginDash, Flowlyn, maio de 2026).
    outputPricePerM: 1.50, // Preço atualizado do Mistral Large 3 (Inworld AI, Price Per Token, MarginDash, Flowlyn, maio de 2026).
    contextWindow: '262K tokens', // Janela de contexto atualizada do Mistral Large 3 (Inworld AI, Price Per Token, maio de 2026).
    description: 'Modelo flagship da Mistral AI, com raciocínio e capacidades multimodais.',
  },
  // Cohere
  {
    name: 'Command R+', // Adicionado como modelo de ponta da Cohere.
    provider: 'Cohere',
    inputPricePerM: 2.50, // Preço atualizado do Command R+ (MetaCTO, TypingMind, AI Pricing Guru, Price Per Token, maio de 2026).
    outputPricePerM: 10.00, // Preço atualizado do Command R+ (MetaCTO, TypingMind, AI Pricing Guru, Price Per Token, maio de 2026).
    contextWindow: '128K tokens', // Janela de contexto atualizada do Command R+ (MetaCTO, TypingMind, AI Pricing Guru, Price Per Token, maio de 2026).
    description: 'Modelo robusto da Cohere, otimizado para RAG e tarefas empresariais.',
  },
];