import type { CalculatorModel } from '@/data/calculator-models';
import { USD_BRL } from '@/data/exchange-rate';

/**
 * Conta de custo das APIs de IA, usada pela calculadora (cliente) e pelos
 * textos e FAQ da /calculadora (servidor) — os dois mostram o mesmo número.
 */

/**
 * Cenário padrão da calculadora e do exemplo do texto: um chatbot de
 * atendimento (instruções + histórico + pergunta, e uma resposta de alguns
 * parágrafos), com 10 mil conversas por mês.
 */
export const DEFAULT_SCENARIO = { input: 2_000, output: 500, requests: 10_000 };

/** Câmbio padrão (PTAX) com 2 casas: o mesmo na ferramenta e no texto da página. */
export const DEFAULT_USD_BRL = Math.round(USD_BRL.rate * 100) / 100;

export interface Rates {
  input: number;
  output: number;
  /** true quando o prompt passou do limite e vale a faixa mais cara. */
  longContext: boolean;
}

/** Preço por milhão de tokens que vale para um prompt deste tamanho. */
export function ratesFor(model: CalculatorModel, inputTokens: number): Rates {
  const tier = model.longContext && inputTokens > model.longContext.aboveTokens ? model.longContext : null;
  return {
    input: tier ? tier.inputPricePerM : model.inputPricePerM,
    output: tier ? tier.outputPricePerM : model.outputPricePerM,
    longContext: Boolean(tier),
  };
}

/** Custo de uma requisição em US$. */
export function requestCostUsd(model: CalculatorModel, inputTokens: number, outputTokens: number): number {
  const rates = ratesFor(model, inputTokens);
  return (inputTokens / 1_000_000) * rates.input + (outputTokens / 1_000_000) * rates.output;
}

/** "1.05M tokens" → 1.050.000; "128K tokens" → 128.000. */
export function parseContextWindow(value: string): number | null {
  const match = value.replace(',', '.').match(/([\d.]+)\s*([KM])/i);
  if (!match) return null;
  return Math.round(parseFloat(match[1]) * (match[2].toUpperCase() === 'M' ? 1_000_000 : 1_000));
}

/** A requisição (entrada + saída) cabe na janela de contexto do modelo? */
export function fitsContext(model: CalculatorModel, inputTokens: number, outputTokens: number): boolean {
  const window = parseContextWindow(model.contextWindow);
  return window === null || inputTokens + outputTokens <= window;
}

export function formatMoney(value: number, currency: 'USD' | 'BRL'): string {
  const small = value > 0 && value < 0.1;
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency,
    minimumFractionDigits: small ? 4 : 2,
    maximumFractionDigits: small ? 6 : 2,
  });
}
