import 'server-only';

/**
 * Inscrição na newsletter com provedor escolhido por variável de ambiente.
 *
 *   NEWSLETTER_PROVIDER = supabase | brevo | mailchimp | webhook
 *
 * Sem NEWSLETTER_PROVIDER, usa o Supabase (comportamento original do site)
 * quando SUPABASE_URL estiver definida. As variáveis de cada provedor estão
 * documentadas no README.
 */

export type NewsletterProvider = 'supabase' | 'brevo' | 'mailchimp' | 'webhook';

export type SubscribeResult =
  | { status: 'created' }
  | { status: 'exists' }
  | { status: 'not_configured'; detail: string }
  | { status: 'error'; detail: string };

export function getNewsletterProvider(): NewsletterProvider | null {
  const configured = process.env.NEWSLETTER_PROVIDER?.trim().toLowerCase();
  if (configured === 'supabase' || configured === 'brevo' || configured === 'mailchimp' || configured === 'webhook') {
    return configured;
  }
  return process.env.SUPABASE_URL ? 'supabase' : null;
}

function missing(...names: string[]): string | null {
  const absent = names.filter((name) => !process.env[name]);
  return absent.length ? `variáveis ausentes: ${absent.join(', ')}` : null;
}

async function errorDetail(response: Response): Promise<string> {
  const body = await response.text().catch(() => '');
  return `HTTP ${response.status} ${body.slice(0, 300)}`;
}

async function subscribeSupabase(email: string): Promise<SubscribeResult> {
  const absent = missing('SUPABASE_URL', 'SUPABASE_ANON_KEY');
  if (absent) return { status: 'not_configured', detail: absent };
  const key = process.env.SUPABASE_ANON_KEY!;
  const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/subscribers`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ email }),
  });
  if (response.status === 201 || response.status === 200) return { status: 'created' };
  if (response.status === 409) return { status: 'exists' };
  const body = await response.json().catch(() => ({}));
  // unique_violation também chega como erro PGRST em algumas versões
  if (body?.code === '23505') return { status: 'exists' };
  return { status: 'error', detail: `HTTP ${response.status} ${JSON.stringify(body).slice(0, 300)}` };
}

async function subscribeBrevo(email: string): Promise<SubscribeResult> {
  const absent = missing('BREVO_API_KEY', 'BREVO_LIST_ID');
  if (absent) return { status: 'not_configured', detail: absent };
  const headers = {
    'api-key': process.env.BREVO_API_KEY!,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const listId = Number(process.env.BREVO_LIST_ID);

  // Double opt-in: o Brevo envia o e-mail de confirmação e só então inclui na lista.
  if (process.env.BREVO_DOI_TEMPLATE_ID) {
    const response = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        includeListIds: [listId],
        templateId: Number(process.env.BREVO_DOI_TEMPLATE_ID),
        redirectionUrl: process.env.BREVO_DOI_REDIRECT_URL || 'https://www.turbinaia.com.br/',
      }),
    });
    if (response.status === 201 || response.status === 204) return { status: 'created' };
    return { status: 'error', detail: await errorDetail(response) };
  }

  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, listIds: [listId], updateEnabled: false }),
  });
  if (response.status === 201 || response.status === 204) return { status: 'created' };
  const body = await response.json().catch(() => ({}));
  if (response.status === 400 && body?.code === 'duplicate_parameter') return { status: 'exists' };
  return { status: 'error', detail: `HTTP ${response.status} ${JSON.stringify(body).slice(0, 300)}` };
}

async function subscribeMailchimp(email: string, source: string): Promise<SubscribeResult> {
  const absent = missing('MAILCHIMP_API_KEY', 'MAILCHIMP_AUDIENCE_ID');
  if (absent) return { status: 'not_configured', detail: absent };
  const apiKey = process.env.MAILCHIMP_API_KEY!;
  // O datacenter é o sufixo da chave ("...-us21") ou MAILCHIMP_SERVER_PREFIX.
  const server = process.env.MAILCHIMP_SERVER_PREFIX || apiKey.split('-').pop();
  const response = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`turbinaia:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: process.env.MAILCHIMP_DOUBLE_OPT_IN === 'true' ? 'pending' : 'subscribed',
        tags: ['turbinaia', source].filter(Boolean),
      }),
    },
  );
  if (response.ok) return { status: 'created' };
  const body = await response.json().catch(() => ({}));
  if (response.status === 400 && /member exists/i.test(body?.title || '')) return { status: 'exists' };
  return { status: 'error', detail: `HTTP ${response.status} ${JSON.stringify(body).slice(0, 300)}` };
}

/** Webhook genérico: Zapier, Make, n8n, Kit (ConvertKit) via automação etc. */
async function subscribeWebhook(email: string, source: string): Promise<SubscribeResult> {
  const absent = missing('NEWSLETTER_WEBHOOK_URL');
  if (absent) return { status: 'not_configured', detail: absent };
  const response = await fetch(process.env.NEWSLETTER_WEBHOOK_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.NEWSLETTER_WEBHOOK_SECRET
        ? { Authorization: `Bearer ${process.env.NEWSLETTER_WEBHOOK_SECRET}` }
        : {}),
    },
    body: JSON.stringify({ email, source, site: 'turbinaia.com.br', subscribedAt: new Date().toISOString() }),
  });
  if (response.ok) return { status: 'created' };
  if (response.status === 409) return { status: 'exists' };
  return { status: 'error', detail: await errorDetail(response) };
}

export async function subscribe(email: string, source: string): Promise<SubscribeResult> {
  const provider = getNewsletterProvider();
  if (!provider) return { status: 'not_configured', detail: 'nenhum provedor configurado (NEWSLETTER_PROVIDER)' };
  try {
    switch (provider) {
      case 'supabase':
        return await subscribeSupabase(email);
      case 'brevo':
        return await subscribeBrevo(email);
      case 'mailchimp':
        return await subscribeMailchimp(email, source);
      case 'webhook':
        return await subscribeWebhook(email, source);
    }
  } catch (error) {
    return { status: 'error', detail: error instanceof Error ? error.message : String(error) };
  }
}
