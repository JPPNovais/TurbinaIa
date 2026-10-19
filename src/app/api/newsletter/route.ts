import { NextResponse } from 'next/server';
import { subscribe, getNewsletterProvider } from '@/lib/newsletter';

const SOURCES = new Set(['post_end', 'post_inline', 'sidebar', 'prompts_page', 'other']);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    const source = SOURCES.has(body?.source) ? body.source : 'other';

    // Honeypot: campo invisível que só robôs preenchem. Responde sucesso sem gravar.
    if (typeof body?.website === 'string' && body.website.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Inscrição realizada com sucesso! Bem-vindo à bordo! ⚡' });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Por favor, insira um endereço de e-mail válido.' },
        { status: 400 }
      );
    }

    const emailLower = email.toLowerCase().trim();
    const result = await subscribe(emailLower, source);

    if (result.status === 'created') {
      return NextResponse.json(
        { success: true, message: 'Inscrição realizada com sucesso! Bem-vindo à bordo! ⚡' },
        { status: 200 }
      );
    }

    if (result.status === 'exists') {
      return NextResponse.json(
        { success: false, message: 'Este e-mail já está cadastrado na nossa newsletter!' },
        { status: 400 }
      );
    }

    console.error(`Newsletter (${getNewsletterProvider() ?? 'sem provedor'}) ${result.status}:`, result.detail);
    return NextResponse.json(
      { success: false, message: 'Estamos com uma instabilidade momentânea. Tente novamente em instantes.' },
      { status: 503 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Estamos com uma instabilidade momentânea. Tente novamente em instantes.' },
      { status: 503 }
    );
  }
}
