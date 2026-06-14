# Estratégia de Monetização por Assinatura — Turbina IA

> Documento de planejamento (não é código). Baseado em pesquisa de mercado 2026 +
> análise dos ativos atuais do site e dos dados do Google Search Console.
> Última atualização: 2026-06-13.

---

## 1. Resumo executivo

O Turbina IA hoje monetiza só com **AdSense**, que depende de volume de tráfego — e o
tráfego orgânico ainda está no início (~7 cliques/3 meses no GSC). A boa notícia: o
**nicho de prompts** já mostra demanda real, e prompts são um produto que **as pessoas
pagam para ter** (ex.: PromptBase vende prompts por US$ 2–8 e tem assinatura ~US$ 9/mês).

**Recomendação: abordagem em 3 fases**, começando pelo que dá dinheiro rápido sem
construir infraestrutura complexa, e só depois investir em assinatura recorrente.

| Fase | O quê | Esforço | Quando começar |
|---|---|---|---|
| **1. Produto one-time** | Vender "Pack PRO de Prompts" / e-book via Hotmart/Kiwify | Baixo | Agora (valida pagamento) |
| **2. Turbina IA PRO** | Assinatura: sem anúncios + prompts premium + "Meus Prompts" | Médio-alto | Após validar a Fase 1 |
| **3. Escala** | Gerador com IA real (créditos) e/ou comunidade paga | Alto | Quando houver base de assinantes |

---

## 2. A realidade do tráfego (leia antes de tudo)

Assinatura e produto digital convertem uma **fração pequena** do público:
- Freemium converte **2–5%** dos usuários gratuitos em pagantes.
- Lista de e-mail converte melhor (3–10% numa oferta direta).

**Implicação:** com o tráfego atual, a receita de assinatura seria baixa **agora**.
Por isso a Fase 1 mira a **lista de e-mails** (que já está sendo capturada pelo lead
magnet) em vez de depender do tráfego do site. Em paralelo, continue o trabalho de SEO
(conteúdo + backlinks) — **mais tráfego = mais assinantes**. As duas coisas se somam.

---

## 3. FASE 1 — Produto digital one-time (validação rápida)

**Objetivo:** provar que existe gente disposta a pagar, sem construir login/billing.

**Produto:** "Mega Pack de Prompts PRO — Turbina IA"
- 300+ prompts organizados (expandir os 166 atuais), em PDF + versão Notion/Google Sheets.
- Bônus: mini-guia de engenharia de prompt + pack específico (ex.: "Prompts para Gemini").

**Preço sugerido (Brasil):** R$ 27 a R$ 47 (faixa de entrada de info-produto). Teste R$ 37.

**Como vender (sem código de billing):**
- Plataforma: **Hotmart** ou **Kiwify** (cuidam de checkout, Pix, cartão, entrega e nota).
- No site: uma **landing page** (`/pro` ou `/pack-prompts`) com botão que leva ao checkout externo.
- Distribuição: e-mails da newsletter (já capturados) + CTA nos artigos de prompts + redes.

**Esforço:** 1 landing page + montar o produto. Billing é 100% externo.

**Métrica de sucesso:** ≥ 1–2% da lista comprando. Se vender, vá para a Fase 2.

---

## 4. FASE 2 — "Turbina IA PRO" (assinatura recorrente)

**O modelo vencedor em 2026 é freemium + ads no grátis e plano pago sem anúncios com
recursos premium.** É exatamente o que se encaixa aqui.

### Tiers

| | **Grátis** | **PRO** |
|---|---|---|
| Artigos, comparador, calculadora, glossário | ✅ | ✅ |
| Biblioteca de prompts (atual) | ✅ | ✅ |
| Anúncios | Sim | **Não** |
| Prompts premium/exclusivos | — | ✅ |
| **"Meus Prompts"** (salvar, editar, organizar) | — | ✅ |
| Packs para download (PDF/Notion) | — | ✅ |
| Newsletter PRO + acesso antecipado | — | ✅ |

**Preço sugerido:** R$ 19,90/mês ou R$ 149/ano (≈ R$ 12,40/mês). Opcional tier de entrada R$ 9,90.

### O que precisaria ser construído (stack atual: Next.js + Supabase + Vercel)
1. **Autenticação** — Supabase Auth (e-mail/senha + Google). Já usam Supabase, então é natural.
2. **Pagamento recorrente** — opções:
   - **Stripe** (assinatura, melhor DX, aceita cartão; Pix via Stripe é limitado no BR).
   - **Mercado Pago / Hotmart assinatura** (Pix recorrente, melhor para o público BR).
   - Recomendado BR: **Mercado Pago** (Pix) ou **Hotmart** se quiser delegar fiscal.
3. **Gating** — middleware/checagem que libera área PRO, remove `<AdSense>` e desbloqueia conteúdo conforme o status do assinante (tabela `subscribers`/`profiles` no Supabase).
4. **"Meus Prompts"** — CRUD simples no Supabase (tabela por usuário). Alto valor percebido, baixo custo de manutenção.

**Esforço:** auth + billing + gating + área PRO = projeto de algumas semanas (dá pra fatiar: começar só com "sem anúncios + Meus Prompts").

---

## 5. FASE 3 — Escala (quando houver base de assinantes)

- **Gerador com IA real:** transformar o `/gerador` (hoje só monta o texto do prompt) em
  geração de verdade chamando a IA, com **créditos** (modelo híbrido: assinatura + uso).
  ⚠️ Adiciona custo de API — só vale com receita cobrindo.
- **Comunidade paga:** grupo fechado (Discord/Telegram/Círculo) incluso no PRO — a pesquisa
  aponta "acesso à comunidade" como um dos itens que mais sustentam recorrência.
- **Afiliados:** comissão indicando ferramentas de IA do `/ferramentas` e `/comparador`
  (receita recorrente sem cobrar do usuário).

---

## 6. Precificação e projeção (conservadora)

Premissas: plano PRO a R$ 19,90/mês, conversão 2% do público engajado.

| Cenário | Visitantes/mês | Assinantes (2%) | MRR | Por ano |
|---|---|---|---|---|
| Hoje (início) | ~1.000 | ~5–10* | ~R$ 100–200 | pequeno |
| 6–12 meses (SEO maduro) | ~20.000 | ~200–400 | ~R$ 4–8 mil | R$ 50–95 mil |
| 12–18 meses | ~50.000 | ~500–1.000 | ~R$ 10–20 mil | R$ 120–240 mil |

\* No início, foque a conversão na **lista de e-mail**, não no tráfego do site.
Os números de micro-SaaS de conteúdo com IA (US$ 2–10k MRR em 12–18 meses) são realistas
**se o tráfego crescer** — daí a importância de continuar o SEO.

---

## 7. O que reaproveita do que já existe

- ✅ **Supabase** já conectado (newsletter/contato) → base para auth e assinantes.
- ✅ **Lead magnet** (pack de prompts) já captura e-mails → público para a Fase 1.
- ✅ **166 prompts + comparador + calculadora** → núcleo de valor do PRO.
- ✅ **Vercel** → suporta auth/billing sem mudar de hospedagem.
- ⚠️ Falta: login, cobrança, gating e a tabela de assinantes/perfis.

---

## 8. Métricas para acompanhar
- **Fase 1:** taxa de conversão da lista (vendas / e-mails), ticket médio.
- **Fase 2:** conversão free→PRO (%), churn mensal (<5–7% é saudável), LTV, MRR.
- Sempre: tráfego orgânico (GSC) — é o combustível de tudo.

---

## 9. Riscos e cuidados
- **Tráfego baixo agora** → não espere receita relevante de assinatura no curto prazo; valide com produto one-time primeiro.
- **AdSense vs. sem anúncios** → o PRO remove anúncios; modele para o ganho da assinatura compensar o AdSense perdido daquele usuário (compensa fácil: 1 assinante R$ 19,90 ≈ centenas de pageviews de AdSense).
- **Conteúdo de IA + E-E-A-T** → manter revisão humana e autoria (já implementado) para não perder ranking, que é o que traz o público.
- **Fiscal/jurídico** → emissão de nota e impostos; Hotmart/Kiwify simplificam isso no BR.

---

## 10. Próximo passo recomendado
1. Montar o **Pack PRO** e uma **landing `/pro`** com checkout Hotmart/Kiwify (Fase 1).
2. Disparar para a lista de e-mails + CTA nos artigos de prompts.
3. Se converter, construir o **Turbina IA PRO** (auth Supabase + Mercado Pago/Stripe + "Meus Prompts" + sem anúncios).

> Quando decidir avançar, me peça que eu implemento a fase escolhida (landing + checkout,
> ou o MVP de assinatura).
