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
    name: 'Gemini 3.5 Flash', // Preço e janela de contexto atualizados para Gemini 3.5 Flash em maio de 2026.
    provider: 'Google',
    inputPricePerM: 1.50, // Preço atualizado para Gemini 3.5 Flash.
    outputPricePerM: 9.00, // Preço atualizado para Gemini 3.5 Flash.
    contextWindow: '1M tokens', // Janela de contexto para Gemini 3.5 Flash.
    description: 'Modelo equilibrado para velocidade e capacidade da nova geração Gemini 3.5.',
  },
  {
    name: 'Gemini 3.1 Pro', // Preço e janela de contexto atualizados para Gemini 3.1 Pro em maio de 2026.
    provider: 'Google',
    inputPricePerM: 4.00, // Preço atualizado para contextos acima de 200K tokens para Gemini 3.1 Pro.
    outputPricePerM: 18.00, // Preço atualizado para contextos acima de 200K tokens para Gemini 3.1 Pro.
    contextWindow: '1M tokens', // Janela de contexto atualizada para Gemini 3.1 Pro.
    description: 'Topo de linha da Google com 1M de contexto (preço para >200K tokens) e raciocínio avançado (versão 3.1).',
  },
  {
    name: 'Gemini 3.1 Flash-Lite', // Preço e janela de contexto atualizados para Gemini 3.1 Flash-Lite em maio de 2026.
    provider: 'Google',
    inputPricePerM: 0.25, // Preço atualizado do Gemini 3.1 Flash-Lite.
    outputPricePerM: 1.50, // Preço atualizado do Gemini 3.1 Flash-Lite.
    contextWindow: '1M tokens', // Janela de contexto atualizada para o modelo 'Lite'.
    description: 'Modelo econômico e de alta velocidade da nova geração Gemini 3.1, com suporte multimodal.',
  },
  // OpenAI
  {
    name: 'GPT-5.4', // GPT-5.4 é listado como disponível em maio de 2026.
    provider: 'OpenAI',
    inputPricePerM: 2.50, // Preço atualizado do GPT-5.4.
    outputPricePerM: 15.00, // Preço atualizado do GPT-5.4.
    contextWindow: '1M tokens', // Janela de contexto para o GPT-5.4.
    description: 'Modelo flagship da OpenAI com raciocínio avançado e capacidade multimodal.',
  },
  {
    name: 'GPT-5.4 Mini', // Atualizado de GPT-4o mini para GPT-5.4 Mini, relevante em maio de 2026.
    provider: 'OpenAI',
    inputPricePerM: 0.75, // Preço atualizado do GPT-5.4 Mini.
    outputPricePerM: 4.50, // Preço atualizado do GPT-5.4 Mini.
    contextWindow: '128K tokens', // Janela de contexto para o GPT-5.4 Mini.
    description: 'Versão compacta do GPT-5.4 — rápida e econômica para tarefas do dia a dia.',
  },
  {
    name: 'GPT-5.5', // Modelo flagship mais recente da OpenAI para maio de 2026.
    provider: 'OpenAI',
    inputPricePerM: 5.00, // Preço do GPT-5.5.
    outputPricePerM: 30.00, // Preço do GPT-5.5.
    contextWindow: '1M tokens', // Janela de contexto do GPT-5.5.
    description: 'Modelo flagship mais recente da OpenAI, com raciocínio superior e 1M de contexto.',
  },
  // Anthropic
  {
    name: 'Claude 4.7 Opus', // Atualizado para a versão 4.7, conforme referências de maio de 2026.
    provider: 'Anthropic',
    inputPricePerM: 5.00, // Preço atualizado do Claude 4.7 Opus.
    outputPricePerM: 25.00, // Preço atualizado do Claude 4.7 Opus.
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude 4.7 Opus.
    description: 'O modelo mais inteligente da Anthropic para raciocínio complexo e tarefas agênticas (versão 4.7).',
  },
  {
    name: 'Claude 4.6 Sonnet', // Atualizado para a versão 4.6, conforme referências de maio de 2026.
    provider: 'Anthropic',
    inputPricePerM: 3.00, // Preço atualizado do Claude 4.6 Sonnet.
    outputPricePerM: 15.00, // Preço atualizado do Claude 4.6 Sonnet.
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude 4.6 Sonnet.
    description: 'Referência em geração de código e raciocínio lógico (versão 4.6).',
  },
  {
    name: 'Claude 4.5 Haiku', // Atualizado para a versão 4.5, conforme referências de maio de 2026.
    provider: 'Anthropic',
    inputPricePerM: 1.00, // Preço atualizado do Claude 4.5 Haiku.
    outputPricePerM: 5.00, // Preço atualizado do Claude 4.5 Haiku.
    contextWindow: '200K tokens', // Janela de contexto atual do Claude 4.5 Haiku.
    description: 'O modelo rápido e econômico da Anthropic com 200k contexto (versão 4.5).',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash', // Atualizado de DeepSeek V3.2 para DeepSeek V4 Flash.
    provider: 'DeepSeek',
    inputPricePerM: 0.14, // Preço atualizado do DeepSeek V4 Flash (cache miss).
    outputPricePerM: 0.28, // Preço atualizado do DeepSeek V4 Flash.
    contextWindow: '1M tokens', // Janela de contexto atualizada para DeepSeek V4 Flash.
    description: 'Versão Flash do DeepSeek V4 com alta performance e 1M de contexto.',
  },
  {
    name: 'DeepSeek V4 Pro', // Novo modelo adicionado.
    provider: 'DeepSeek',
    inputPricePerM: 1.74, // Preço do DeepSeek V4 Pro (cache miss).
    outputPricePerM: 3.48, // Preço do DeepSeek V4 Pro.
    contextWindow: '1M tokens', // Janela de contexto do DeepSeek V4 Pro.
    description: 'Versão Pro do DeepSeek V4 com raciocínio de ponta e 1M de contexto.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B', // Atualizado para Llama 3.3 70B, com preços da Together AI.
    provider: 'Meta (via API)',
    inputPricePerM: 0.88, // Preço atualizado do Llama 3.3 70B via Together AI.
    outputPricePerM: 0.88, // Preço atualizado do Llama 3.3 70B via Together AI.
    contextWindow: '131K tokens', // Janela de contexto atualizada do Llama 3.3 70B.
    description: 'Open source poderoso — pode ser usado local ou via API (preço via Together AI).',
  },
  {
    name: 'Llama 3.1 8B Instruct', // Atualizado de Llama 3.1 8B para Llama 3.1 8B Instruct.
    provider: 'Meta (via API)',
    inputPricePerM: 0.18, // Preço do Llama 3.1 8B Instruct via Together AI.
    outputPricePerM: 0.18, // Preço do Llama 3.1 8B Instruct via Together AI.
    contextWindow: '16K tokens', // Janela de contexto do Llama 3.1 8B Instruct.
    description: 'Versão leve e econômica da família Llama 3.1 Instruct.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3', // Adicionado como modelo flagship da Mistral AI, com preços para maio de 2026.
    provider: 'Mistral AI',
    inputPricePerM: 0.50, // Preço do Mistral Large 3.
    outputPricePerM: 1.50, // Preço do Mistral Large 3.
    contextWindow: '262K tokens', // Janela de contexto do Mistral Large 3.
    description: 'Modelo flagship da Mistral AI, com raciocínio e capacidades multimodais.',
  },
  // Cohere
  {
    name: 'Command R+', // Adicionado como modelo de ponta da Cohere.
    provider: 'Cohere',
    inputPricePerM: 3.00, // Preço do Command R+.
    outputPricePerM: 15.00, // Preço do Command R+.
    contextWindow: '128K tokens', // Janela de contexto do Command R+.
    description: 'Modelo robusto da Cohere, otimizado para RAG e tarefas empresariais.',
  },
];