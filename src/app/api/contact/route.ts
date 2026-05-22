import { NextResponse } from 'next/server';

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Por favor, informe seu nome completo.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, message: 'Por favor, informe um e-mail válido.' }, { status: 400 });
    }
    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
      return NextResponse.json({ success: false, message: 'Por favor, informe o assunto.' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ success: false, message: 'A mensagem precisa ter pelo menos 10 caracteres.' }, { status: 400 });
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        subject: subject.trim(),
        message: message.trim(),
      }),
    });

    if (response.status === 201 || response.status === 200) {
      return NextResponse.json(
        { success: true, message: 'Mensagem enviada com sucesso! Retornaremos em breve. ⚡' },
        { status: 200 }
      );
    }

    const errorData = await response.json().catch(() => ({}));
    console.error('Supabase contact error:', response.status, errorData);
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Erro no servidor. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
