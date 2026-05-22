import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'subscribers.json');

// Ensure database file exists
async function initDatabase() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(FILE_PATH);
    } catch {
      await fs.writeFile(FILE_PATH, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Error initializing subscribers file:', err);
  }
}

export async function POST(request: Request) {
  try {
    await initDatabase();

    const body = await request.json();
    const { email } = body;

    // Simple email regex validation
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Por favor, insira um endereço de e-mail válido.' },
        { status: 400 }
      );
    }

    // Read current subscribers
    const fileContent = await fs.readFile(FILE_PATH, 'utf-8');
    const subscribers: Array<{ email: string; date: string }> = JSON.parse(fileContent || '[]');

    // Check if email already exists
    const emailLower = email.toLowerCase().trim();
    const alreadySubscribed = subscribers.some(sub => sub.email.toLowerCase() === emailLower);

    if (alreadySubscribed) {
      return NextResponse.json(
        { success: false, message: 'Este e-mail já está cadastrado na nossa newsletter!' },
        { status: 400 }
      );
    }

    // Add new subscriber
    subscribers.push({
      email: emailLower,
      date: new Date().toISOString(),
    });

    // Save back to file
    await fs.writeFile(FILE_PATH, JSON.stringify(subscribers, null, 2), 'utf-8');

    return NextResponse.json(
      { success: true, message: 'Inscrição realizada com sucesso! Bem-vindo à bordo! ⚡' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Erro no servidor ao processar a inscrição.' },
      { status: 500 }
    );
  }
}
