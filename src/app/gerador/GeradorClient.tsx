'use client';

import { useState } from 'react';

type TarefaTipo =
  | ''
  | 'criar-conteudo'
  | 'analisar-dados'
  | 'escrever-codigo'
  | 'resumir-texto'
  | 'gerar-ideias'
  | 'redigir-email'
  | 'estudar-aprender'
  | 'resolver-problema';

interface FormState {
  tarefa: TarefaTipo;
  contexto: string;
  publico: string;
  formato: string;
  tom: string;
  restricoes: string;
  exemplos: string;
}

const TAREFAS: { value: TarefaTipo; label: string; icon: string; desc: string }[] = [
  { value: 'criar-conteudo', label: 'Criar Conteúdo', icon: '✍️', desc: 'Post, artigo, legenda, roteiro' },
  { value: 'analisar-dados', label: 'Analisar Dados', icon: '📊', desc: 'Relatórios, métricas, insights' },
  { value: 'escrever-codigo', label: 'Escrever Código', icon: '💻', desc: 'Funções, scripts, refatoração' },
  { value: 'resumir-texto', label: 'Resumir Texto', icon: '📄', desc: 'Resumos, sínteses, extração' },
  { value: 'gerar-ideias', label: 'Gerar Ideias', icon: '💡', desc: 'Brainstorming, nomes, conceitos' },
  { value: 'redigir-email', label: 'Redigir E-mail', icon: '📧', desc: 'E-mails, mensagens, comunicados' },
  { value: 'estudar-aprender', label: 'Estudar / Aprender', icon: '🎓', desc: 'Explicações, planos de estudo' },
  { value: 'resolver-problema', label: 'Resolver Problema', icon: '🔧', desc: 'Diagnósticos, soluções, estratégias' },
];

const TOM_OPTIONS = [
  'Profissional e formal',
  'Amigável e conversacional',
  'Técnico e detalhado',
  'Criativo e descontraído',
  'Direto e objetivo',
  'Empático e acolhedor',
  'Autoritativo e persuasivo',
];

const FORMATO_OPTIONS: Record<TarefaTipo, string[]> = {
  '': ['Texto corrido', 'Lista de tópicos', 'Tabela'],
  'criar-conteudo': ['Post para Instagram/LinkedIn', 'Artigo de blog', 'Thread para X (Twitter)', 'Roteiro de vídeo', 'Legenda curta', 'Newsletter'],
  'analisar-dados': ['Relatório executivo', 'Lista de insights', 'Tabela comparativa', 'Dashboard textual'],
  'escrever-codigo': ['Função completa com comentários', 'Snippet com explicação', 'Código + testes unitários', 'Refatoração comentada'],
  'resumir-texto': ['Bullets com pontos principais', 'Resumo em 1 parágrafo', 'TL;DR de 3 linhas', 'Mapa mental textual'],
  'gerar-ideias': ['Lista numerada de 10 ideias', 'Lista com prós e contras', 'Brainstorming livre', 'Ideias com exemplos'],
  'redigir-email': ['E-mail formal completo', 'E-mail curto e direto', 'Variação A/B (2 versões)', 'Com assunto e CTA'],
  'estudar-aprender': ['Explicação passo a passo', 'Analogia com exemplos', 'Roteiro de estudo', 'Q&A (perguntas e respostas)'],
  'resolver-problema': ['Análise + solução estruturada', 'Plano de ação com passos', 'Pros e contras de cada opção', 'Diagnóstico rápido'],
};

function generatePrompt(form: FormState): string {
  if (!form.tarefa || !form.contexto) return '';

  const tarefaLabel = TAREFAS.find((t) => t.value === form.tarefa)?.label ?? form.tarefa;

  let prompt = `# Tarefa: ${tarefaLabel}\n\n`;

  prompt += `## Contexto\n${form.contexto}\n\n`;

  if (form.publico) {
    prompt += `## Público-alvo\n${form.publico}\n\n`;
  }

  if (form.formato) {
    prompt += `## Formato de saída desejado\n${form.formato}\n\n`;
  }

  if (form.tom) {
    prompt += `## Tom de voz\n${form.tom}\n\n`;
  }

  if (form.exemplos) {
    prompt += `## Exemplos de referência\n${form.exemplos}\n\n`;
  }

  if (form.restricoes) {
    prompt += `## Restrições importantes\n${form.restricoes}\n\n`;
  }

  // Task-specific instructions
  const taskInstructions: Record<TarefaTipo, string> = {
    '': '',
    'criar-conteudo': 'Crie o conteúdo completo conforme especificado. Inclua título, corpo e CTA quando aplicável. Otimize para engajamento.',
    'analisar-dados': 'Analise as informações fornecidas, extraia os insights mais relevantes e organize em um relatório claro com conclusões e recomendações acionáveis.',
    'escrever-codigo': 'Escreva o código de forma limpa, eficiente e bem comentado. Inclua tratamento de erros quando relevante e explique a lógica principal.',
    'resumir-texto': 'Preserve as informações mais importantes e elimine redundâncias. Mantenha a essência e as nuances críticas do conteúdo original.',
    'gerar-ideias': 'Gere ideias variadas e criativas, indo além do óbvio. Para cada ideia, inclua uma frase explicando o potencial ou diferencial.',
    'redigir-email': 'Escreva um e-mail que atinja o objetivo com clareza. Inclua assunto, corpo e fechamento. Calibre a formalidade conforme o tom solicitado.',
    'estudar-aprender': 'Explique de forma progressiva, do simples ao complexo. Use analogias e exemplos concretos. Verifique a compreensão ao final com questões práticas.',
    'resolver-problema': 'Analise o problema sistematicamente, identifique causas raiz e proponha soluções concretas com trade-offs claros entre as opções.',
  };

  const instruction = taskInstructions[form.tarefa];
  if (instruction) {
    prompt += `## Instruções adicionais\n${instruction}\n`;
  }

  return prompt.trim();
}

export default function GeradorClient() {
  const [form, setForm] = useState<FormState>({
    tarefa: '',
    contexto: '',
    publico: '',
    formato: '',
    tom: '',
    restricoes: '',
    exemplos: '',
  });
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const prompt = generatePrompt(form);
    setGeneratedPrompt(prompt);
  };

  const handleCopy = async () => {
    if (!generatedPrompt) return;
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatOptions = form.tarefa ? FORMATO_OPTIONS[form.tarefa] : FORMATO_OPTIONS[''];
  const isReady = form.tarefa && form.contexto.trim().length > 10;

  return (
    <main style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '0.75rem' }}>
            Gerador de Prompts Interativo
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Preencha o formulário abaixo e receba um prompt profissional e otimizado
            para usar no ChatGPT, Claude, Gemini ou qualquer IA.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
          {/* Form */}
          <div>
            {/* Step 1: Task Type */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                1. Qual é o tipo de tarefa?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {TAREFAS.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setForm({ ...form, tarefa: t.value, formato: '' })}
                    style={{
                      padding: '0.65rem 0.75rem',
                      background: form.tarefa === t.value ? 'var(--primary)' : 'var(--bg-secondary)',
                      border: '1px solid',
                      borderColor: form.tarefa === t.value ? 'var(--primary)' : 'var(--border-color)',
                      borderRadius: 'var(--border-radius-sm)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s',
                      color: form.tarefa === t.value ? '#fff' : 'var(--text-primary)',
                    }}
                  >
                    <div style={{ fontSize: '1.1rem', marginBottom: '0.1rem' }}>{t.icon}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.1rem' }}>{t.label}</div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Context */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                2. Descreva sua necessidade <span style={{ color: 'var(--primary)' }}>*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Ex: Preciso criar um post de Instagram sobre os benefícios de usar IA no trabalho, voltado para profissionais de marketing. O post deve incluir estatísticas e um CTA para baixar um e-book gratuito."
                value={form.contexto}
                onChange={(e) => setForm({ ...form, contexto: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius-sm)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Step 3: Audience */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                3. Público-alvo (opcional)
              </label>
              <input
                type="text"
                placeholder="Ex: Empreendedores brasileiros de 25-40 anos, iniciantes em IA"
                value={form.publico}
                onChange={(e) => setForm({ ...form, publico: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.75rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius-sm)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Step 4: Format */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                4. Formato de saída (opcional)
              </label>
              <select
                value={form.formato}
                onChange={(e) => setForm({ ...form, formato: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.75rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius-sm)',
                  color: form.formato ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                }}
              >
                <option value="">Selecione um formato...</option>
                {formatOptions.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            {/* Step 5: Tone */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                5. Tom de voz (opcional)
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {TOM_OPTIONS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setForm({ ...form, tom: form.tom === t ? '' : t })}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '999px',
                      border: '1px solid',
                      borderColor: form.tom === t ? 'var(--primary)' : 'var(--border-color)',
                      background: form.tom === t ? 'var(--primary)' : 'var(--bg-secondary)',
                      color: form.tom === t ? '#fff' : 'var(--text-secondary)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 6: Restrictions */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                6. Restrições ou requisitos especiais (opcional)
              </label>
              <input
                type="text"
                placeholder="Ex: Máximo 150 palavras, não mencionar concorrentes, incluir 3 hashtags"
                value={form.restricoes}
                onChange={(e) => setForm({ ...form, restricoes: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.75rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius-sm)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={!isReady}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', opacity: isReady ? 1 : 0.5, cursor: isReady ? 'pointer' : 'not-allowed' }}
            >
              Gerar Prompt Profissional
            </button>
          </div>

          {/* Result */}
          <div>
            <div style={{
              position: 'sticky',
              top: '5rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius)',
              padding: '1.25rem',
              minHeight: '300px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-primary)' }}>
                  Seu Prompt Gerado
                </h3>
                {generatedPrompt && (
                  <button
                    onClick={handleCopy}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.4rem 0.85rem',
                      background: copied ? '#10b981' : 'var(--primary)',
                      border: 'none',
                      borderRadius: 'var(--border-radius-sm)',
                      color: '#fff',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                      fontWeight: 600,
                    }}
                  >
                    {copied ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Copiado!
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                        Copiar
                      </>
                    )}
                  </button>
                )}
              </div>

              {!generatedPrompt ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-secondary)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>✨</div>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Preencha o formulário ao lado e clique em{' '}
                    <strong>Gerar Prompt</strong> para criar um prompt otimizado
                    para ChatGPT, Claude ou Gemini.
                  </p>
                </div>
              ) : (
                <pre style={{
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.82rem',
                  lineHeight: 1.7,
                  color: 'var(--text-primary)',
                  margin: 0,
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius-sm)',
                  padding: '1rem',
                  maxHeight: '500px',
                  overflowY: 'auto',
                }}>
                  {generatedPrompt}
                </pre>
              )}

              {generatedPrompt && (
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--bg-primary)', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    💡 <strong>Dica:</strong> Cole esse prompt diretamente no ChatGPT, Claude ou Gemini.
                    Quanto mais contexto você fornecer, melhor será a resposta.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div style={{ marginTop: '3rem', padding: '1.5rem 2rem', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Como usar prompts de forma eficaz
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🎯', title: 'Seja específico', desc: 'Quanto mais contexto, melhor a resposta. Inclua detalhes do público, objetivo e formato.' },
              { icon: '🔄', title: 'Itere o prompt', desc: 'Se a resposta não for perfeita, peça ajustes: "Reescreva mais curto" ou "Adicione mais exemplos".' },
              { icon: '📋', title: 'Salve os melhores', desc: 'Quando um prompt funcionar bem, salve-o para reutilizar em situações similares.' },
              { icon: '🧪', title: 'Teste em diferentes IAs', desc: 'O mesmo prompt pode ter resultados diferentes em ChatGPT, Claude e Gemini. Teste os três.' },
            ].map((tip) => (
              <div key={tip.title}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{tip.icon}</div>
                <strong style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{tip.title}</strong>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
