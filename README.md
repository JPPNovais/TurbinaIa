# Turbina IA

Portal brasileiro de inteligência artificial — prompts prontos, rankings de ferramentas, tutoriais e notícias — publicado em [turbinaia.com.br](https://www.turbinaia.com.br).

**Stack:** Next.js 16 (App Router) + React 19 + TypeScript, hospedado na Vercel. Não há CMS: os artigos são arquivos Markdown em `content/articles/` (o nome do arquivo é o slug), lidos por `src/lib/articles.ts`. Posts e páginas de tema são gerados estaticamente no build; cada push na `main` publica.

```bash
npm run dev     # http://localhost:3000
npm run build   # build de produção (rode antes de publicar)
npm run lint
```

---

## Eventos do Google Analytics 4

O GA4 carrega quando `NEXT_PUBLIC_GA_MEASUREMENT_ID` está definida. Além do `page_view` automático, o site envia:

| Evento | Quando dispara | Parâmetros |
|---|---|---|
| `copy_prompt` | Clique em **Copiar** num bloco de prompt dentro de um post | `post_title`, `post_slug`, `post_topic` (prompts, melhores-ias, tutoriais…), `prompt_number` (posição do prompt no post), `prompt_total` |
| `newsletter_signup` | Inscrição **nova** na newsletter (e-mail já cadastrado não conta) | `form_location` (`post_end`, `post_inline`, `sidebar`, `prompts_page`), `post_slug`, `page_path` |
| `outbound_click` | Clique (inclusive com o botão do meio) em link para outro domínio | `link_domain`, `link_url`, `link_text`, `page_path` |
| `scroll_depth` | Leitor rolou 75% da página (uma vez por página) | `percent_scrolled` (75), `page_path`, `page_type` (`home`, `post`, `hub`, `page`) |

Código: `src/lib/analytics.ts` (função `track`), `src/components/AnalyticsListeners.tsx` (cliques externos e rolagem), `src/components/ArticleInteractions.tsx` (copiar) e `src/hooks/useNewsletterSignup.ts` (newsletter).

### O que configurar no GA4

1. **Eventos principais (conversões):** Administrador → Exibição de dados → **Eventos** → marque a estrela de `newsletter_signup` e `copy_prompt`. Opcionalmente `outbound_click` e `scroll_depth`. Os eventos só aparecem na lista depois de dispararem pelo menos uma vez (até 24 h).
2. **Dimensões personalizadas** (para ver os parâmetros nos relatórios): Administrador → Exibição de dados → **Definições personalizadas** → Criar dimensão personalizada, escopo **Evento**:
   - `post_title`, `post_slug`, `post_topic`, `prompt_number` (copy_prompt)
   - `form_location` (newsletter_signup)
   - `page_type` (scroll_depth)
   - `link_domain`, `link_url` e `percent_scrolled` já existem como dimensões padrão se a Medição otimizada estiver ligada.
3. **Medição otimizada** pode continuar ligada: o `click` e o `scroll` (90%) automáticos do GA4 não conflitam com estes eventos, que têm nomes próprios.
4. Para testar: Administrador → **DebugView**, ou rode o site local (`npm run dev`) — em desenvolvimento cada evento também aparece no console do navegador como `[analytics]`.

---

## Newsletter

O formulário chama `POST /api/newsletter`, que grava no provedor definido por `NEWSLETTER_PROVIDER` (`src/lib/newsletter.ts`). Sem essa variável, continua usando o Supabase (comportamento original) quando `SUPABASE_URL` existe.

| Provedor | `NEWSLETTER_PROVIDER` | Variáveis |
|---|---|---|
| Supabase (tabela `subscribers`) | `supabase` | `SUPABASE_URL`, `SUPABASE_ANON_KEY` |
| Brevo | `brevo` | `BREVO_API_KEY`, `BREVO_LIST_ID`; double opt-in opcional: `BREVO_DOI_TEMPLATE_ID`, `BREVO_DOI_REDIRECT_URL` |
| Mailchimp | `mailchimp` | `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`; opcionais: `MAILCHIMP_SERVER_PREFIX` (ex.: `us21`, deduzido da chave), `MAILCHIMP_DOUBLE_OPT_IN=true` |
| Webhook (Zapier, Make, n8n, Kit…) | `webhook` | `NEWSLETTER_WEBHOOK_URL`; opcional `NEWSLETTER_WEBHOOK_SECRET` (vai como `Authorization: Bearer`) |

O webhook recebe `{ "email", "source", "site", "subscribedAt" }`. Os formulários têm um campo-isca invisível contra robôs.

Pontos de captura: fim de cada post (com o Pack de Prompts), meio do post (`NEXT_PUBLIC_NEWSLETTER_INLINE=false` desliga), sidebar da home e página `/prompts`.

---

## Variáveis de ambiente

| Variável | Onde | Para quê |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Vercel (build) | ID do GA4 (`G-...`) |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Vercel (build) | Publisher do AdSense (`ca-pub-...`) |
| `NEXT_PUBLIC_ADS_ENABLED` | Vercel (build) | `true` exibe os blocos de anúncio |
| `NEXT_PUBLIC_NEWSLETTER_INLINE` | Vercel (build) | `false` remove a newsletter do meio dos posts |
| `NEWSLETTER_PROVIDER` e as do provedor | Vercel (runtime) | Ver tabela acima |
| `GEMINI_API_KEY` | `.env` local | Só para os scripts de geração de conteúdo |

Variáveis `NEXT_PUBLIC_*` são embutidas no build: depois de mudar, faça um redeploy.

---

## SEO e conteúdo

- **Artigos** (`content/articles/<slug>.md`): frontmatter com `title`, `description` (até 155 caracteres), `category` (`tutoriais` | `noticias` | `ferramentas`), `tags`, `date`, `coverImage` e, opcionais, `seoTitle` (o `<title>` do Google, até 60 caracteres — sem ele o site encurta o título sozinho) e `updatedAt` (`"AAAA-MM-DD"`, quando o post for revisado: aparece como "Atualizado em" e vai para o sitemap e o JSON-LD).
- **Temas:** `src/lib/taxonomy.ts` decide o tema de cada post. `/prompts` é o hub de Prompts; `/categoria/melhores-ias`, `/categoria/tutoriais`, `/categoria/noticias` e `/categoria/ferramentas` são os demais. Os links antigos `/?category=x` redirecionam com 301.
- **Mais lidos da home:** lista em `src/data/popular-posts.ts` — atualize uma vez por mês com os posts mais vistos no GA4.
- **Arquivos para robôs:** `/sitemap.xml` (lastmod real de cada página), `/robots.txt` e `/llms.txt` (mapa do site para assistentes de IA) são gerados no build.
- **Imagens:** só `images.unsplash.com`. Antes de usar uma foto nova, confira se responde 200 (fotos removidas do Unsplash viram 404).
