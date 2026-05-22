'use client';

import { useState, useMemo } from 'react';
import './calculadora.css';

interface AIModel {
  name: string;
  provider: string;
  inputPricePerM: number; // USD per 1M tokens
  outputPricePerM: number; // USD per 1M tokens
  contextWindow: string;
  description: string;
}

const AI_MODELS: AIModel[] = [
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

export default function CalculatorClient() {
  const [inputTokens, setInputTokens] = useState<number>(50000);
  const [outputTokens, setOutputTokens] = useState<number>(10000);
  const [requestsCount, setRequestsCount] = useState<number>(1000);
  const [period, setPeriod] = useState<'daily' | 'monthly'>('monthly');
  const [currency, setCurrency] = useState<'USD' | 'BRL'>('BRL');
  const [exchangeRate, setExchangeRate] = useState<number>(5.80);

  // Synchronize inputs between slider and number inputs
  const handleInputChange = (val: string, setter: (n: number) => void, min: number = 0) => {
    const num = parseInt(val.replace(/\D/g, '')) || 0;
    setter(Math.max(min, num));
  };

  // Perform cost calculations
  const calculatedCosts = useMemo(() => {
    const results = AI_MODELS.map((model) => {
      // Pricing is per 1M tokens
      const singleInputCost = (inputTokens / 1_000_000) * model.inputPricePerM;
      const singleOutputCost = (outputTokens / 1_000_000) * model.outputPricePerM;
      const costPerRequestUsd = singleInputCost + singleOutputCost;

      // Period scaling
      const multiplier = period === 'daily' ? 1 : 1; // requestsCount is already absolute for the chosen period view
      const totalCostUsd = costPerRequestUsd * requestsCount * multiplier;

      // Currency conversion
      const multiplierCurrency = currency === 'BRL' ? exchangeRate : 1;
      const totalCost = totalCostUsd * multiplierCurrency;
      const costPerRequest = costPerRequestUsd * multiplierCurrency;

      return {
        ...model,
        costPerRequest,
        totalCost,
        rawTotalCostUsd: totalCostUsd, // keep USD for absolute comparison/sorting
      };
    });

    // Sort by total cost ascending
    return [...results].sort((a, b) => a.totalCost - b.totalCost);
  }, [inputTokens, outputTokens, requestsCount, period, currency, exchangeRate]);

  const currencySymbol = currency === 'BRL' ? 'R$' : 'US$';

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: value < 0.1 ? 4 : 2,
      maximumFractionDigits: value < 0.1 ? 6 : 2,
    });
  };

  return (
    <section className="calculadora-section container">
      <div className="calculadora-header">
        <h1>Calculadora de Custos de APIs de IA ⚡</h1>
        <p>
          Simule o consumo de tokens e compare os preços cobrados pelas principais provedoras do mercado
          (Google, OpenAI, Anthropic, DeepSeek e Meta). Encontre a opção mais custo-benefício para o seu projeto.
        </p>
      </div>

      <div className="calculadora-grid">
        {/* Panel of sliders and inputs */}
        <aside className="inputs-panel">
          <div className="input-field-group">
            <div className="field-header">
              <label htmlFor="inputTokens">Tokens de Entrada (Prompt)</label>
              <span className="field-value-badge">
                {inputTokens.toLocaleString('pt-BR')} tokens
              </span>
            </div>
            <input
              id="inputTokensSlider"
              type="range"
              min="1000"
              max="500000"
              step="1000"
              value={inputTokens}
              onChange={(e) => setInputTokens(Number(e.target.value))}
              className="slider-input"
            />
            <input
              id="inputTokens"
              type="text"
              pattern="[0-9]*"
              value={inputTokens.toLocaleString('pt-BR')}
              onChange={(e) => handleInputChange(e.target.value, setInputTokens, 100)}
              className="text-number-input"
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem', display: 'block' }}>
              Ex: Perguntas, arquivos, histórico da conversa.
            </span>
          </div>

          <div className="input-field-group">
            <div className="field-header">
              <label htmlFor="outputTokens">Tokens de Saída (Resposta)</label>
              <span className="field-value-badge">
                {outputTokens.toLocaleString('pt-BR')} tokens
              </span>
            </div>
            <input
              id="outputTokensSlider"
              type="range"
              min="500"
              max="100000"
              step="500"
              value={outputTokens}
              onChange={(e) => setOutputTokens(Number(e.target.value))}
              className="slider-input"
            />
            <input
              id="outputTokens"
              type="text"
              pattern="[0-9]*"
              value={outputTokens.toLocaleString('pt-BR')}
              onChange={(e) => handleInputChange(e.target.value, setOutputTokens, 10)}
              className="text-number-input"
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem', display: 'block' }}>
              Ex: A resposta gerada pelo modelo.
            </span>
          </div>

          <div className="input-field-group">
            <div className="field-header">
              <label htmlFor="requestsCount">Volume de Requisições</label>
              <span className="field-value-badge">
                {requestsCount.toLocaleString('pt-BR')} / {period === 'daily' ? 'dia' : 'mês'}
              </span>
            </div>
            <input
              id="requestsCountSlider"
              type="range"
              min="100"
              max="100000"
              step="100"
              value={requestsCount}
              onChange={(e) => setRequestsCount(Number(e.target.value))}
              className="slider-input"
            />
            <input
              id="requestsCount"
              type="text"
              pattern="[0-9]*"
              value={requestsCount.toLocaleString('pt-BR')}
              onChange={(e) => handleInputChange(e.target.value, setRequestsCount, 1)}
              className="text-number-input"
            />
          </div>

          {/* Period Toggle */}
          <div className="input-field-group">
            <label className="field-header">Frequência da Estimativa</label>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button
                type="button"
                className="btn"
                style={{
                  flex: 1,
                  background: period === 'daily' ? 'var(--primary)' : 'var(--bg-tertiary)',
                  color: period === 'daily' ? 'white' : 'var(--text-primary)',
                  borderColor: 'var(--border-color)',
                  padding: '0.5rem',
                  fontSize: '0.9rem',
                }}
                onClick={() => setPeriod('daily')}
              >
                Diária
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  flex: 1,
                  background: period === 'monthly' ? 'var(--primary)' : 'var(--bg-tertiary)',
                  color: period === 'monthly' ? 'white' : 'var(--text-primary)',
                  borderColor: 'var(--border-color)',
                  padding: '0.5rem',
                  fontSize: '0.9rem',
                }}
                onClick={() => setPeriod('monthly')}
              >
                Mensal
              </button>
            </div>
          </div>

          {/* Exchange Rate Customizer */}
          {currency === 'BRL' && (
            <div className="input-field-group" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              <div className="field-header">
                <label htmlFor="exchangeRate">Taxa de Câmbio (USD → BRL)</label>
                <span className="field-value-badge">R$ {exchangeRate.toFixed(2)}</span>
              </div>
              <input
                id="exchangeRate"
                type="number"
                step="0.05"
                min="1.00"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(Number(e.target.value) || 5.80)}
                className="text-number-input"
                style={{ fontFamily: 'monospace' }}
              />
            </div>
          )}
        </aside>

        {/* Results Panel */}
        <main className="results-panel">
          <div className="results-header-bar">
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Estimativa de Custo Comparado</h2>
            
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
              const isCheapest = idx === 0;
              return (
                <article
                  key={model.name}
                  className={`cost-card ${isCheapest ? 'cheapest' : ''}`}
                >
                  {isCheapest && (
                    <span className="cheapest-badge">Melhor Custo-Benefício 🏆</span>
                  )}

                  <div className="model-meta-info">
                    <h3>{model.name}</h3>
                    <span>Provedora: {model.provider} • Contexto: {model.contextWindow}</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: '1.4' }}>
                      {model.description}
                    </p>
                  </div>

                  <div className="model-rates">
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', display: 'block' }}>
                      Tarifas base (1M tokens):
                    </span>
                    <span>Entrada: {currencySymbol} {(model.inputPricePerM * (currency === 'BRL' ? exchangeRate : 1)).toFixed(2)}</span>
                    <span>Saída: {currencySymbol} {(model.outputPricePerM * (currency === 'BRL' ? exchangeRate : 1)).toFixed(2)}</span>
                  </div>

                  <div className="model-total-cost">
                    <span className={`cost-value ${isCheapest ? 'success-text' : ''}`}>
                      {formatCurrency(model.totalCost)}
                    </span>
                    <span className="cost-per-req">
                      {formatCurrency(model.costPerRequest)} / req
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                      Total {period === 'daily' ? 'diário' : 'mensal'} ({requestsCount.toLocaleString('pt-BR')} reqs)
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </main>
      </div>
    </section>
  );
}
