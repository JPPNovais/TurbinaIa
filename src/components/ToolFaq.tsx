import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';

export interface ToolFaqItem {
  question: string;
  /** Resposta em texto; links internos no formato [texto](/caminho). */
  answer: string;
}

const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** FAQPage JSON-LD com exatamente as perguntas e respostas exibidas na página. */
export function toolFaqJsonLd(faqs: ToolFaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer.replace(LINK, '$1') },
    })),
  };
}

function withLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const start = match.index ?? 0;
    parts.push(text.slice(last, start));
    parts.push(
      <Link key={start} href={match[2]} prefetch={false}>
        {match[1]}
      </Link>,
    );
    last = start + match[0].length;
  }
  parts.push(text.slice(last));
  return parts;
}

interface ToolFaqProps {
  title: string;
  faqs: ToolFaqItem[];
  id?: string;
}

/** Seção "Perguntas Frequentes" das páginas-ferramenta (comparador, calculadora). */
export default function ToolFaq({ title, faqs, id = 'perguntas-frequentes' }: ToolFaqProps) {
  return (
    <section id={id} style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>{title}</h2>
      {faqs.map((faq) => (
        <Fragment key={faq.question}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            {faq.question}
          </h3>
          <p style={{ marginBottom: '1rem' }}>{withLinks(faq.answer)}</p>
        </Fragment>
      ))}
    </section>
  );
}
