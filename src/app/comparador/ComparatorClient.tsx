'use client';

import { useState } from 'react';
import { aiModels, AIModel } from '@/data/ai-models';
import './comparador.css';

export default function ComparatorClient() {
  const [modelAId, setModelAId] = useState<string>('chatgpt-plus');
  const [modelBId, setModelBId] = useState<string>('claude-sonnet');

  const modelA = aiModels.find((m) => m.id === modelAId) || aiModels[0];
  const modelB = aiModels.find((m) => m.id === modelBId) || aiModels[1];

  const getAverageScore = (model: AIModel) => {
    const s = model.score;
    return (s.reasoning + s.writing + s.coding + s.speed + s.value) / 5;
  };

  const avgA = getAverageScore(modelA);
  const avgB = getAverageScore(modelB);

  const getMetricLabel = (key: keyof AIModel['score']) => {
    switch (key) {
      case 'reasoning':
        return 'Raciocínio Lógico';
      case 'writing':
        return 'Escrita Criativa';
      case 'coding':
        return 'Programação';
      case 'speed':
        return 'Velocidade';
      case 'value':
        return 'Custo-benefício';
      default:
        return key;
    }
  };

  const generateVerdict = (
    mA: AIModel,
    mB: AIModel,
    aA: number,
    aB: number
  ): { text: string; recommendation: string } => {
    if (mA.id === mB.id) {
      return {
        text: `Você está visualizando a mesma ferramenta (**${mA.name}**). Selecione duas opções diferentes acima para realizar um comparativo analítico e detalhado.`,
        recommendation: `Sugestão: Experimente comparar o **${mA.name}** com o **${
          mA.id === 'chatgpt-plus' ? 'Claude 3.5 Sonnet' : 'ChatGPT Plus (GPT-4o)'
        }**.`,
      };
    }

    if (mA.category !== mB.category) {
      return {
        text: `Atenção: Estas ferramentas pertencem a categorias distintas. **${mA.name}** é classificada em *${mA.category}*, enquanto **${mB.name}** é classificada em *${mB.category}*. As notas gerais e de programação refletem as diferenças naturais entre os propósitos de cada uma.`,
        recommendation: `Escolha **${mA.name}** caso sua principal demanda seja de *${mA.category}*, ou selecione **${mB.name}** se você precisa prioritariamente de *${mB.category}*.`,
      };
    }

    let diffText = '';
    const nameA = mA.name;
    const nameB = mB.name;

    const codingDiff = mA.score.coding - mB.score.coding;
    const reasoningDiff = mA.score.reasoning - mB.score.reasoning;
    const speedDiff = mA.score.speed - mB.score.speed;
    const valueDiff = mA.score.value - mB.score.value;

    if (mA.category === 'Texto & Código') {
      if (Math.abs(codingDiff) >= 0.3) {
        const codingWinner = codingDiff > 0 ? nameA : nameB;
        diffText += `Para tarefas de desenvolvimento de software, refatoração e lógica de código, o **${codingWinner}** é tecnicamente superior e oferece respostas com menor taxa de erros estruturais. `;
      } else {
        diffText += `Em programação, ambas as IAs têm performance bastante parecida, sendo excelentes assistentes de codificação. `;
      }

      if (Math.abs(reasoningDiff) >= 0.3) {
        const reasoningWinner = reasoningDiff > 0 ? nameA : nameB;
        diffText += `No raciocínio lógico avançado e na resolução de problemas matemáticos ou analíticos, o **${reasoningWinner}** tem uma vantagem perceptível de performance. `;
      }

      if (Math.abs(speedDiff) >= 0.4) {
        const speedWinner = speedDiff > 0 ? nameA : nameB;
        diffText += `Sobre agilidade, o **${speedWinner}** destaca-se por entregar os resultados com menor tempo de latência de processamento. `;
      }
    } else if (mA.category === 'Geração de Imagem') {
      if (mA.id === 'midjourney-v6' || mB.id === 'midjourney-v6') {
        const mj = mA.id === 'midjourney-v6' ? mA : mB;
        const other = mA.id === 'midjourney-v6' ? mB : mA;
        diffText += `O **${mj.name}** oferece o fotorrealismo e qualidade estética mais avançados do mercado de geração visual, embora exija uma curva de aprendizado (como o uso do Discord). O **${other.name}** oferece maior conveniência operacional ou maior flexibilidade de edição. `;
      } else {
        diffText += `Ambas as ferramentas de imagem geram excelentes resultados artísticos, destacando-se em quesitos de controle de prompt ou facilidade de uso na criação. `;
      }
    } else {
      diffText += `Ao comparar essas ferramentas de automação, considere a quantidade de integrações nativas e a flexibilidade para construir fluxos dinâmicos complexos. `;
    }

    if (Math.abs(valueDiff) >= 0.3) {
      const valueWinner = valueDiff > 0 ? nameA : nameB;
      diffText += `No quesito custo-benefício (considerando os recursos oferecidos pelo preço), o **${valueWinner}** sobressai-se. `;
    }

    // Recommendation sentence
    let rec = '';
    if (Math.abs(aA - aB) < 0.15) {
      rec = `Veredito: **Empate Técnico (Médias ${aA.toFixed(1)} vs ${aB.toFixed(1)})**. Ambas são excelentes ferramentas. A escolha ideal dependerá do seu foco: se você precisa de maior precisão de código (Claude 3.5 Sonnet) ou ecossistema de dados/GPTs (ChatGPT).`;
    } else {
      const best = aA > aB ? mA : mB;
      const worst = aA > aB ? mB : mA;
      const bestScore = aA > aB ? aA : aB;
      const worstScore = aA > aB ? aB : aA;
      rec = `Veredito: O **${best.name}** é o vencedor geral da nossa análise com média de **${bestScore.toFixed(
        1
      )}/5.0** (contra **${worstScore.toFixed(1)}/5.0** do ${worst.name}).`;
    }

    return { text: diffText, recommendation: rec };
  }

  const { text: verdictText, recommendation: verdictRec } = generateVerdict(
    modelA,
    modelB,
    avgA,
    avgB
  );

  return (
    <div className="comparador-container">
      {/* Selectors section */}
      <div className="selectors-bar">
        <div className="select-wrapper">
          <label className="select-label" htmlFor="model-a-select">
            Modelo A
          </label>
          <select
            id="model-a-select"
            className="model-select"
            value={modelAId}
            onChange={(e) => setModelAId(e.target.value)}
          >
            {aiModels.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name} ({model.developer})
              </option>
            ))}
          </select>
        </div>

        <div className="vs-divider">VS</div>

        <div className="select-wrapper">
          <label className="select-label" htmlFor="model-b-select">
            Modelo B
          </label>
          <select
            id="model-b-select"
            className="model-select"
            value={modelBId}
            onChange={(e) => setModelBId(e.target.value)}
          >
            {aiModels.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name} ({model.developer})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="comparison-grid">
        {/* Model A Card */}
        <div
          className={`comparison-card ${
            avgA > avgB && modelAId !== modelBId ? 'winner-card' : ''
          }`}
        >
          <div className="model-info-header">
            <h2 className="model-name">{modelA.name}</h2>
            <div className="model-meta">
              <span className="model-badge">🏭 {modelA.developer}</span>
              <span className="model-badge">🏷️ {modelA.category}</span>
              <span className="model-badge">💰 {modelA.pricing.split('(')[0]}</span>
            </div>
            <p className="model-description">{modelA.description}</p>
          </div>

          <div className="metrics-section">
            <h3 className="select-label">Notas e Atributos</h3>
            {(Object.keys(modelA.score) as Array<keyof AIModel['score']>).map(
              (key) => {
                const valA = modelA.score[key];
                const valB = modelB.score[key];
                const isWinner = valA > valB && modelAId !== modelBId;

                return (
                  <div className="metric-row" key={key}>
                    <div className="metric-info">
                      <span className="metric-label">
                        {getMetricLabel(key)}
                        {isWinner && ' ⭐'}
                      </span>
                      <span className="metric-value">{valA.toFixed(1)} / 5.0</span>
                    </div>
                    <div className="metric-bar-bg">
                      <div
                        className="metric-bar-fill fill-primary"
                        style={{ width: `${(valA / 5.0) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                );
              }
            )}
            <div className="metric-row" style={{ marginTop: '1rem' }}>
              <div className="metric-info" style={{ fontWeight: 800 }}>
                <span className="metric-label" style={{ color: 'var(--text-primary)' }}>
                  Média Geral
                </span>
                <span className="metric-value" style={{ color: 'var(--primary)' }}>
                  {avgA.toFixed(1)} / 5.0
                </span>
              </div>
            </div>
          </div>

          <div className="pros-cons-grid">
            <div className="pros-list">
              <h4 className="pros-title">Prós</h4>
              {modelA.pros.map((pro, index) => (
                <div className="list-item pro-item" key={index}>
                  {pro}
                </div>
              ))}
            </div>

            <div className="cons-list">
              <h4 className="cons-title">Contras</h4>
              {modelA.cons.map((con, index) => (
                <div className="list-item con-item" key={index}>
                  {con}
                </div>
              ))}
            </div>
          </div>

          <div className="card-cta" style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
            <a
              href={modelA.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Acessar {modelA.name} ⚡
            </a>
          </div>
        </div>

        {/* Model B Card */}
        <div
          className={`comparison-card ${
            avgB > avgA && modelAId !== modelBId ? 'winner-card' : ''
          }`}
        >
          <div className="model-info-header">
            <h2 className="model-name">{modelB.name}</h2>
            <div className="model-meta">
              <span className="model-badge">🏭 {modelB.developer}</span>
              <span className="model-badge">🏷️ {modelB.category}</span>
              <span className="model-badge">💰 {modelB.pricing.split('(')[0]}</span>
            </div>
            <p className="model-description">{modelB.description}</p>
          </div>

          <div className="metrics-section">
            <h3 className="select-label">Notas e Atributos</h3>
            {(Object.keys(modelB.score) as Array<keyof AIModel['score']>).map(
              (key) => {
                const valA = modelA.score[key];
                const valB = modelB.score[key];
                const isWinner = valB > valA && modelAId !== modelBId;

                return (
                  <div className="metric-row" key={key}>
                    <div className="metric-info">
                      <span className="metric-label">
                        {getMetricLabel(key)}
                        {isWinner && ' ⭐'}
                      </span>
                      <span className="metric-value">{valB.toFixed(1)} / 5.0</span>
                    </div>
                    <div className="metric-bar-bg">
                      <div
                        className="metric-bar-fill fill-primary"
                        style={{ width: `${(valB / 5.0) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                );
              }
            )}
            <div className="metric-row" style={{ marginTop: '1rem' }}>
              <div className="metric-info" style={{ fontWeight: 800 }}>
                <span className="metric-label" style={{ color: 'var(--text-primary)' }}>
                  Média Geral
                </span>
                <span className="metric-value" style={{ color: 'var(--primary)' }}>
                  {avgB.toFixed(1)} / 5.0
                </span>
              </div>
            </div>
          </div>

          <div className="pros-cons-grid">
            <div className="pros-list">
              <h4 className="pros-title">Prós</h4>
              {modelB.pros.map((pro, index) => (
                <div className="list-item pro-item" key={index}>
                  {pro}
                </div>
              ))}
            </div>

            <div className="cons-list">
              <h4 className="cons-title">Contras</h4>
              {modelB.cons.map((con, index) => (
                <div className="list-item con-item" key={index}>
                  {con}
                </div>
              ))}
            </div>
          </div>

          <div className="card-cta" style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
            <a
              href={modelB.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Acessar {modelB.name} ⚡
            </a>
          </div>
        </div>
      </div>

      {/* Verdict Section */}
      {modelAId !== modelBId && (
        <div className="verdict-box">
          <h3 className="verdict-title">🌀 Veredito e Análise de Comparação</h3>
          <p className="verdict-text">{verdictText}</p>
          <div className="verdict-recommendation">{verdictRec}</div>
        </div>
      )}
    </div>
  );
}
