import type { Metadata } from 'next';
import ContactForm from './ContactForm';

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
        <ContactForm />
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
