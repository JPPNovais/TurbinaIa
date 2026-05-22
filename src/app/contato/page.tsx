import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - Turbina IA',
  description: 'Entre em contato com a equipe do Turbina IA para sugestões de pauta, parcerias, anúncios ou feedbacks.',
  alternates: {
    canonical: '/contato',
  },
};

export default function ContatoPage() {
  return (
    <main className="container" style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '4rem', maxWidth: '600px' }}>
      <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Fale Conosco 💬</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Tem dúvidas, sugestões de pauta, propostas de parcerias ou feedbacks? Envie uma mensagem para nossa equipe.
        </p>
      </header>

      <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', boxShadow: '0 8px 24px var(--shadow-color)' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Nome Completo</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Seu nome" 
              required 
              style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color var(--transition-fast)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600 }}>E-mail para Contato</label>
            <input 
              type="email" 
              id="email" 
              placeholder="seu@email.com" 
              required 
              style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color var(--transition-fast)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="subject" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Assunto</label>
            <input 
              type="text" 
              id="subject" 
              placeholder="Ex: Parcerias, Dúvida, Sugestão" 
              required 
              style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color var(--transition-fast)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Mensagem</label>
            <textarea 
              id="message" 
              rows={5} 
              placeholder="Escreva sua mensagem aqui..." 
              required 
              style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical', fontFamily: 'inherit', transition: 'border-color var(--transition-fast)' }}
            />
          </div>

          <button 
            type="button" 
            className="btn btn-primary" 
            style={{ marginTop: '0.5rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            Enviar Mensagem ⚡
          </button>
        </form>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>Ou envie um e-mail diretamente para:</p>
        <p style={{ fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem', fontSize: '1.1rem' }}>
          contato@turbinaia.com.br
        </p>
      </div>
    </main>
  );
}
