'use client';

import { useState, type CSSProperties, type ChangeEvent, type FormEvent } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFeedback(data.message);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setFeedback(data.message || 'Erro ao enviar. Tente novamente.');
      }
    } catch {
      setStatus('error');
      setFeedback('Erro de conexão. Tente novamente mais tarde.');
    }
  };

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--border-radius-sm)',
    color: 'var(--text-primary)',
    fontFamily: 'inherit',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color var(--transition-fast)',
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>Mensagem enviada!</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feedback}</p>
        <button
          onClick={() => setStatus('idle')}
          className="btn btn-primary"
          style={{ marginTop: '1.5rem', width: 'auto', padding: '0.75rem 2rem' }}
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Nome Completo</label>
        <input
          type="text"
          id="name"
          placeholder="Seu nome"
          required
          value={form.name}
          onChange={handleChange}
          disabled={status === 'loading'}
          style={inputStyle}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600 }}>E-mail para Contato</label>
        <input
          type="email"
          id="email"
          placeholder="seu@email.com"
          required
          value={form.email}
          onChange={handleChange}
          disabled={status === 'loading'}
          style={inputStyle}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="subject" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Assunto</label>
        <select
          id="subject"
          required
          value={form.subject}
          onChange={handleChange}
          disabled={status === 'loading'}
          style={inputStyle}
        >
          <option value="">Selecione um assunto...</option>
          <option value="Sugestão de pauta">Sugestão de pauta</option>
          <option value="Parceria comercial">Parceria comercial</option>
          <option value="Anúncio / Publicidade">Anúncio / Publicidade</option>
          <option value="Feedback sobre o site">Feedback sobre o site</option>
          <option value="Correção de conteúdo">Correção de conteúdo</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Mensagem</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Escreva sua mensagem aqui..."
          required
          value={form.message}
          onChange={handleChange}
          disabled={status === 'loading'}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      {status === 'error' && (
        <p style={{ color: '#ef4444', fontSize: '0.875rem', textAlign: 'center' }}>{feedback}</p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === 'loading'}
        style={{ marginTop: '0.5rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem ⚡'}
      </button>
    </form>
  );
}
