import { NextResponse } from 'next/server';

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Por favor, insira um endereço de e-mail válido.' },
        { status: 400 }
      );
    }

    const emailLower = email.toLowerCase().trim();

    const response = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({ email: emailLower }),
    });

    if (response.status === 201 || response.status === 200) {
      return NextResponse.json(
        { success: true, message: 'Inscrição realizada com sucesso! Bem-vindo à bordo! ⚡' },
        { status: 200 }
      );
    }

    // Unique constraint violation — e-mail já cadastrado
    if (response.status === 409) {
      return NextResponse.json(
        { success: false, message: 'Este e-mail já está cadastrado na nossa newsletter!' },
        { status: 400 }
      );
    }

    const errorData = await response.json().catch(() => ({}));
    // Supabase also returns 23505 (unique_violation) as a PGRST error in some versions
    if (errorData?.code === '23505') {
      return NextResponse.json(
        { success: false, message: 'Este e-mail já está cadastrado na nossa newsletter!' },
        { status: 400 }
      );
    }

    console.error('Supabase newsletter error:', response.status, errorData);
    return NextResponse.json(
      {
        success: false,
        message: 'Erro no servidor ao processar a inscrição.',
        debug: { stage: 'upstream', status: response.status, error: errorData, hasEnv: !!SUPABASE_URL && !!SUPABASE_ANON_KEY },
      },
      { status: 500 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Erro no servidor ao processar a inscrição.',
        debug: { stage: 'exception', error: String(error), hasEnv: !!SUPABASE_URL && !!SUPABASE_ANON_KEY },
      },
      { status: 500 }
    );
  }
}
