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
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '1M tokens',
    description: 'Flash mais rápido com raciocínio nativo e excelente custo-benefício.',
  },
  {
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    inputPricePerM: 1.25,
    outputPricePerM: 10.00,
    contextWindow: '2M tokens',
    description: 'Topo de linha da Google com 2M de contexto e raciocínio avançado.',
  },
  {
    name: 'Gemini 2.0 Flash',
    provider: 'Google',
    inputPricePerM: 0.10,
    outputPricePerM: 0.40,
    contextWindow: '1M tokens',
    description: 'Modelo econômico de nova geração com suporte multimodal.',
  },
  // OpenAI
  {
    name: 'GPT-4.1',
    provider: 'OpenAI',
    inputPricePerM: 2.00,
    outputPricePerM: 8.00,
    contextWindow: '1M tokens',
    description: 'Melhor fidelidade a instruções longas e contexto de 1M tokens.',
  },
  {
    name: 'GPT-4.1 mini',
    provider: 'OpenAI',
    inputPricePerM: 0.40,
    outputPricePerM: 1.60,
    contextWindow: '1M tokens',
    description: 'Versão compacta do 4.1 — rápida e econômica para tarefas do dia a dia.',
  },
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128k tokens',
    description: 'Modelo multimodal de ponta — texto, áudio e visão em tempo real.',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128k tokens',
    description: 'Rápido e incrivelmente barato para tarefas rotineiras.',
  },
  // Anthropic
  {
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '200k tokens',
    description: 'Melhor da família Claude 4 para código e tasks agênticas.',
  },
  {
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '200k tokens',
    description: 'Referência em geração de código e raciocínio lógico.',
  },
  {
    name: 'Claude 3.5 Haiku',
    provider: 'Anthropic',
    inputPricePerM: 0.80,
    outputPricePerM: 4.00,
    contextWindow: '200k tokens',
    description: 'O modelo rápido e econômico da Anthropic com 200k contexto.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V3',
    provider: 'DeepSeek',
    inputPricePerM: 0.27,
    outputPricePerM: 1.10,
    contextWindow: '128k tokens',
    description: 'Performance de GPT-4 por uma fração do custo.',
  },
  {
    name: 'DeepSeek R1',
    provider: 'DeepSeek',
    inputPricePerM: 0.55,
    outputPricePerM: 2.19,
    contextWindow: '128k tokens',
    description: 'Raciocínio avançado open source, rival do o1 da OpenAI.',
  },
  // Meta
  {
    name: 'Llama 3.1 70B',
    provider: 'Meta (via API)',
    inputPricePerM: 0.70,
    outputPricePerM: 0.90,
    contextWindow: '128k tokens',
    description: 'Open source poderoso — pode ser usado local ou via API.',
  },
];
