'use client';

import { useState, useMemo } from 'react';
import { AI_MODELS } from '@/data/calculator-models';
import { USD_BRL } from '@/data/exchange-rate';
import { DEFAULT_SCENARIO, DEFAULT_USD_BRL, fitsContext, formatMoney, ratesFor, requestCostUsd } from '@/lib/api-cost';
import { formatDateMedium } from '@/lib/date';
import './calculadora.css';

// Faixas dos controles deslizantes. A escala é logarítmica: de 100 a 1 milhão
// de tokens, cada trecho do controle cobre a mesma proporção, o que permite
// escolher 1.500 tokens (um chat) com a mesma precisão que 500 mil (um livro).
const INPUT_RANGE = { min: 100, max: 1_000_000 };
const OUTPUT_RANGE = { min: 50, max: 128_000 };
const REQUESTS_RANGE = { min: 1, max: 10_000_000 };
const SLIDER_STEPS = 1000;


/** Arredonda para 2 algarismos significativos (1.537 → 1.500). */
function roundNice(value: number): number {
  if (value < 100) return Math.max(1, Math.round(value));
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)) - 1);
  return Math.round(value / magnitude) * magnitude;
}

function toSlider(value: number, { min, max }: { min: number; max: number }): number {
  const clamped = Math.min(max, Math.max(min, value));
  return Math.round((Math.log(clamped / min) / Math.log(max / min)) * SLIDER_STEPS);
}

function fromSlider(position: number, { min, max }: { min: number; max: number }): number {
  return roundNice(min * Math.pow(max / min, position / SLIDER_STEPS));
}

interface CalculatorClientProps {
  breadcrumb?: React.ReactNode;
  /** Texto indexável entre o título e a ferramenta (vem do servidor). */
  intro?: React.ReactNode;
}

export default function CalculatorClient({ breadcrumb, intro }: CalculatorClientProps) {
  const [inputTokens, setInputTokens] = useState<number>(DEFAULT_SCENARIO.input);
  const [outputTokens, setOutputTokens] = useState<number>(DEFAULT_SCENARIO.output);
  const [requestsCount, setRequestsCount] = useState<number>(DEFAULT_SCENARIO.requests);
  const [period, setPeriod] = useState<'daily' | 'monthly'>('monthly');
  const [currency, setCurrency] = useState<'USD' | 'BRL'>('BRL');
  // Texto livre para o leitor poder apagar e digitar (aceita vírgula ou ponto)
  const [rateText, setRateText] = useState<string>(DEFAULT_USD_BRL.toFixed(2).replace('.', ','));

  const parsedRate = parseFloat(rateText.replace(',', '.'));
  const exchangeRate = parsedRate > 0 ? parsedRate : DEFAULT_USD_BRL;
  const toCurrency = (usd: number) => (currency === 'BRL' ? usd * exchangeRate : usd);

  const handleNumberChange = (val: string, setter: (n: number) => void, range: { min: number; max: number }) => {
    const num = parseInt(val.replace(/\D/g, ''), 10) || 0;
    // O campo de texto aceita até 10x o máximo do controle deslizante
    setter(Math.min(range.max * 10, Math.max(range.min, num)));
  };

  const calculatedCosts = useMemo(() => {
    const results = AI_MODELS.map((model) => {
      const costPerRequestUsd = requestCostUsd(model, inputTokens, outputTokens);
      return {
        ...model,
        rates: ratesFor(model, inputTokens),
        fits: fitsContext(model, inputTokens, outputTokens),
        costPerRequestUsd,
        // requestsCount já é o volume do período escolhido (dia ou mês)
        totalCostUsd: costPerRequestUsd * requestsCount,
      };
    });
    // Mais barato primeiro; os que não comportam a requisição vão para o fim
    return results.sort((a, b) => Number(b.fits) - Number(a.fits) || a.totalCostUsd - b.totalCostUsd);
  }, [inputTokens, outputTokens, requestsCount]);

  const periodLabel = period === 'daily' ? 'dia' : 'mês';

  return (
    <section className="calculadora-section container">
      {breadcrumb}
      <div className="calculadora-header">
        <h1>Calculadora de Custos de APIs de IA ⚡</h1>
        <p>
          Simule o consumo de tokens e compare os preços cobrados pelas principais provedoras do mercado
          (OpenAI, Anthropic, Google, DeepSeek, Meta, Mistral e Cohere). Encontre a opção mais barata para o seu projeto.
        </p>
      </div>

      {intro}

      <div className="calculadora-grid" id="calcular">
        {/* Panel of sliders and inputs */}
        <aside className="inputs-panel">
          <div className="input-field-group">
            <div className="field-header">
              <label htmlFor="inputTokens">Tokens de entrada por requisição</label>
              <span className="field-value-badge">
                {inputTokens.toLocaleString('pt-BR')}
              </span>
            </div>
            <input
              id="inputTokensSlider"
              type="range"
              min="0"
              max={SLIDER_STEPS}
              value={toSlider(inputTokens, INPUT_RANGE)}
              onChange={(e) => setInputTokens(fromSlider(Number(e.target.value), INPUT_RANGE))}
              className="slider-input"
              aria-label="Tokens de entrada por requisição"
            />
            <input
              id="inputTokens"
              type="text"
              inputMode="numeric"
              value={inputTokens.toLocaleString('pt-BR')}
              onChange={(e) => handleNumberChange(e.target.value, setInputTokens, INPUT_RANGE)}
              className="text-number-input"
            />
            <span className="field-hint">
              Instruções, histórico da conversa, pergunta e arquivos enviados. Uma página de texto tem cerca de 700 tokens.
            </span>
          </div>

          <div className="input-field-group">
            <div className="field-header">
              <label htmlFor="outputTokens">Tokens de saída por requisição</label>
              <span className="field-value-badge">
                {outputTokens.toLocaleString('pt-BR')}
              </span>
            </div>
            <input
              id="outputTokensSlider"
              type="range"
              min="0"
              max={SLIDER_STEPS}
              value={toSlider(outputTokens, OUTPUT_RANGE)}
              onChange={(e) => setOutputTokens(fromSlider(Number(e.target.value), OUTPUT_RANGE))}
              className="slider-input"
              aria-label="Tokens de saída por requisição"
            />
            <input
              id="outputTokens"
              type="text"
              inputMode="numeric"
              value={outputTokens.toLocaleString('pt-BR')}
              onChange={(e) => handleNumberChange(e.target.value, setOutputTokens, OUTPUT_RANGE)}
              className="text-number-input"
            />
            <span className="field-hint">
              A resposta do modelo. Em modelos de raciocínio, os tokens de &quot;pensamento&quot; também são cobrados como saída.
            </span>
          </div>

          {/* Period Toggle */}
          <div className="input-field-group">
            <span className="field-header">Período da estimativa</span>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              {(['daily', 'monthly'] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  className="btn"
                  aria-pressed={period === value}
                  style={{
                    flex: 1,
                    background: period === value ? 'var(--primary)' : 'var(--bg-tertiary)',
                    color: period === value ? 'white' : 'var(--text-primary)',
                    borderColor: 'var(--border-color)',
                    padding: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                  onClick={() => setPeriod(value)}
                >
                  {value === 'daily' ? 'Por dia' : 'Por mês'}
                </button>
              ))}
            </div>
          </div>

          <div className="input-field-group">
            <div className="field-header">
              <label htmlFor="requestsCount">Requisições por {periodLabel}</label>
              <span className="field-value-badge">
                {requestsCount.toLocaleString('pt-BR')}
              </span>
            </div>
            <input
              id="requestsCountSlider"
              type="range"
              min="0"
              max={SLIDER_STEPS}
              value={toSlider(requestsCount, REQUESTS_RANGE)}
              onChange={(e) => setRequestsCount(fromSlider(Number(e.target.value), REQUESTS_RANGE))}
              className="slider-input"
              aria-label={`Requisições por ${periodLabel}`}
            />
            <input
              id="requestsCount"
              type="text"
              inputMode="numeric"
              value={requestsCount.toLocaleString('pt-BR')}
              onChange={(e) => handleNumberChange(e.target.value, setRequestsCount, REQUESTS_RANGE)}
              className="text-number-input"
            />
          </div>

          {/* Exchange Rate Customizer */}
          {currency === 'BRL' && (
            <div className="input-field-group" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              <div className="field-header">
                <label htmlFor="exchangeRate">Câmbio (US$ 1 = R$)</label>
                <span className="field-value-badge">R$ {exchangeRate.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}</span>
              </div>
              <input
                id="exchangeRate"
                type="text"
                inputMode="decimal"
                value={rateText}
                onChange={(e) => setRateText(e.target.value.replace(/[^\d.,]/g, ''))}
                className="text-number-input"
                style={{ fontFamily: 'monospace' }}
              />
              <span className="field-hint">
                Padrão: PTAX do Banco Central de {formatDateMedium(USD_BRL.date)}. O cartão de crédito costuma somar IOF e spread.
              </span>
            </div>
          )}
        </aside>

        {/* Results Panel */}
        <div className="results-panel">
          <div className="results-header-bar">
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Custo estimado por {periodLabel}</h2>

            <div className="currency-toggle">
              <button
                type="button"
                className={`currency-btn ${currency === 'BRL' ? 'active' : ''}`}
                onClick={() => setCurrency('BRL')}
              >
                BRL (R$)
              </button>
              <button
                type="button"
                className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                USD ($)
              </button>
            </div>
          </div>

          <div className="models-cost-list">
            {calculatedCosts.map((model, idx) => {
              const isCheapest = idx === 0 && model.fits;
              const rate = (usd: number) => toCurrency(usd).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
              const symbol = currency === 'BRL' ? 'R$' : 'US$';
              return (
                <article
                  key={model.name}
                  className={`cost-card ${isCheapest ? 'cheapest' : ''} ${model.fits ? '' : 'unavailable'}`}
                >
                  {isCheapest && (
                    <span className="cheapest-badge">Mais barato para este uso 🏆</span>
                  )}

                  <div className="model-meta-info">
                    <h3>{model.name}</h3>
                    <span>Provedora: {model.provider} • Contexto: {model.contextWindow}</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: '1.4' }}>
                      {model.description}
                    </p>
                    {!model.fits && (
                      <p className="cost-warning">
                        Entrada + saída passam da janela de contexto deste modelo ({model.contextWindow}).
                      </p>
                    )}
                  </div>

                  <div className="model-rates">
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', display: 'block' }}>
                      Preço por 1M de tokens:
                    </span>
                    <span>Entrada: {symbol} {rate(model.rates.input)}</span>
                    <span>Saída: {symbol} {rate(model.rates.output)}</span>
                    {model.rates.longContext && model.longContext && (
                      <span className="cost-tier-note">
                        Faixa de prompt longo (acima de {model.longContext.aboveTokens.toLocaleString('pt-BR')} tokens)
                      </span>
                    )}
                  </div>

                  <div className="model-total-cost">
                    <span className={`cost-value ${isCheapest ? 'success-text' : ''}`}>
                      {formatMoney(toCurrency(model.totalCostUsd), currency)}
                    </span>
                    <span className="cost-per-req">
                      {formatMoney(toCurrency(model.costPerRequestUsd), currency)} / requisição
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                      Total por {periodLabel} ({requestsCount.toLocaleString('pt-BR')} requisições)
                    </span>
                    {period === 'daily' && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        ≈ {formatMoney(toCurrency(model.totalCostUsd * 30), currency)} por mês (30 dias)
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
