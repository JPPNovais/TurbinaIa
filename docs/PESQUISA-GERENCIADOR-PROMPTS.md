# Pesquisa de Mercado — Gerenciador de Prompts (oportunidade de produto)

> Análise competitiva e de mercado para decidir se vale construir um gerenciador/
> biblioteca de prompts (estilo AIPRM) com foco em PT-BR. Pesquisa: 2026-06-13.

---

## 1. O mercado é real e cresce rápido

- **Prompt engineering**: ~US$ 1,13 bi (2025) → **US$ 1,49 bi (2026)**, CAGR ~**32%**; projeção de ~US$ 4,5 bi até 2030. ([Research and Markets](https://www.researchandmarkets.com/reports/6103820/prompt-engineering-market-report), [Fortune Business Insights](https://www.fortunebusinessinsights.com/prompt-engineering-market-109382))
- Mercado mais amplo (prompt + ferramentas de agentes): ~US$ 6,95 bi (2025).
- **Brasil**: 96% dos profissionais de marketing já usam IA; criação de conteúdo (51%) e visual (43%) são os principais usos. ([HubSpot/Exame](https://exame.com/inteligencia-artificial/melhores-ferramentas-de-ia-em-2026-as-20-plataformas-que-estao-transformando-o-mercado-brasileiro/)) → grande base, **mal atendida em português**.

**Veredito do tamanho:** mercado validado, em crescimento de 30%+ ao ano, com cauda PT-BR aberta.

---

## 2. Concorrentes — preços, recursos e fraquezas

| Plataforma | Grátis | Pago | Forte em | Fraqueza / brecha |
|---|---|---|---|---|
| **AIPRM** (líder, extensão ChatGPT) | Só prompts públicos | US$ 5,99 / 12 / 20 mo; teams até US$ 999–2.990 | Integração no ChatGPT, SEO/marketing | **Poucos prompts privados**, UI poluída (popups/marca d'água), caro, **inglês**, escopo SEO ([softwaresuggest](https://www.softwaresuggest.com/aiprm/pricing)) |
| **FlowGPT** | Sim (comunidade) | Pro US$ 50–200 | Volume enorme, comunidade | **Qualidade varia**, curadoria fraca ([autogpt](https://autogpt.net/ai-tool/flowgpt/)) |
| **PromptHero** | Freemium | Pro US$ 19,99/mo | Prompts de imagem, previews | Recursos bons atrás de paywall, foco em imagem ([godofprompt](https://godofprompt.ai/blog/review-popular-ai-prompt-library-platforms/)) |
| **PromptBase** | 2.300 amostras | US$ 1,99–9,99/prompt (20% comissão) | Marketplace, 500k+ prompts | Pagar por prompt avulso, sem gestão pessoal forte |
| **God of Prompt** | Tier grátis | Bundles US$ 37–150 (vitalício) | 30k+ prompts, Notion | Produto de conteúdo, não app de gestão |
| **Snippets AI** | 10 prompts, 2 membros, API | **US$ 11,99/usuário/mo** ilimitado | Freemium limpo | Inglês, foco em time ([getsnippets](https://www.getsnippets.ai/pricing)) |
| **PromptFolder / MuseBox / SpacePrompts** | 5–250 prompts | US$ 4,95–6/mo | Extensão Chrome + pastas | Players pequenos, inglês ([keepmyprompts](https://www.keepmyprompts.com/en/blog/best-prompt-management-tools-2026-compared)) |
| **PromptLayer / Langfuse / LangSmith / Braintrust** | Limitado | US$ 29–249+/mo | LLMOps para devs/empresas | **Público diferente** (engenharia/observabilidade), não o consumidor/PME |

### Padrões que dão pra explorar
1. **Quase todos são inglês-first.** Nenhum líder é PT-BR nativo com curadoria brasileira.
2. **O líder (AIPRM) é o mais odiado**: paywall agressivo, UI poluída. Há fluxo de gente procurando alternativa.
3. **Dois públicos distintos**: (a) consumidor/PME (AIPRM, FlowGPT, Snippets) e (b) devs/LLMOps (Langfuse etc.). O encaixe do Turbina IA é o **(a)**.
4. **Freemium generoso + UI limpa** é o que os novatos (Snippets, MuseBox) usam pra roubar share do AIPRM.

---

## 3. Onde o Turbina IA pode ganhar (posicionamento)

**"O gerenciador de prompts brasileiro: grátis de verdade, limpo e multi-IA."**

Diferenciais combinados (nenhum concorrente tem todos):
- 🇧🇷 **PT-BR nativo** + biblioteca curada com prompts brasileiros (você já tem 166).
- 🆓 **Grátis generoso** (prompts privados ilimitados) — ataca direto a dor do AIPRM.
- 🧹 **UI limpa**, sem popup/marca d'água.
- 🔀 **Multi-modelo** (ChatGPT, Gemini, Claude) — coerente com seu /comparador.
- 🧩 **Extensão de navegador** que injeta prompts dentro do chat (recurso que prende).
- 🔎 **Canal de aquisição que os concorrentes não têm**: você já ranqueia/cria conteúdo em "biblioteca de prompts" — tráfego orgânico vira usuário do app.

**Preço sugerido:** Grátis robusto; **PRO ~R$ 19,90/mo** (≈US$ 4) ou R$ 149/ano — abaixo do AIPRM/Snippets e localizado. Time: R$ 39,90/usuário.

---

## 4. Tamanho da oportunidade (estimativa grosseira)

- TAM (global prompt mgmt): centenas de milhões de US$, dentro do mercado de ~US$ 1,5 bi/2026.
- SAM realista (PME/consumidor PT-BR de prompts): nicho, mas suficiente para um micro-SaaS de **US$ 2–10k MRR em 12–18 meses** (faixa típica do setor) se a aquisição via SEO funcionar.
- Não é um "unicórnio", é um **micro-SaaS lucrativo** alavancando ativo que já existe.

---

## 5. Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Espaço concorrido | Diferenciar por idioma + curadoria + UX + preço; usar o SEO que você já tem como aquisição barata |
| Extensão = build caro e manutenção (mudanças no ChatGPT/Gemini quebram a injeção) | Lançar **web app primeiro**; extensão na fase 2 |
| Baixa conversão free→pago (2–5%) | Grátis vira topo de funil; monetizar com PRO + packs + (já existente) AdSense no conteúdo |
| Custo de manter login/billing | Stack já tem Supabase; billing via Mercado Pago/Stripe |
| Concorrentes copiam o "PT-BR" | Construir marca/SEO e comunidade rápido (vantagem de quem chega primeiro no nicho local) |

---

## 6. Veredito e recomendação

✅ **Vale perseguir** — mercado validado e crescente, líder vulnerável, brecha PT-BR clara, e você tem **ativo + canal de aquisição** que um concorrente novo não tem.

**Caminho recomendado (menor risco):**
1. **Validar demanda** com landing "em breve" captando e-mails (mede interesse real antes de construir).
2. **MVP web "Meus Prompts"**: login (Supabase) + salvar/organizar em pastas + biblioteca curada + copiar com variáveis. Freemium.
3. **Extensão de navegador** (injeção no ChatGPT/Gemini/Claude) — o recurso de retenção.
4. **PRO** (R$ 19,90/mo): ilimitado, sync, packs premium, sem anúncios.

**Métrica de gate:** se a landing converter bem (ex.: > 20–30% dos visitantes da /prompts deixando e-mail de interesse), construir o MVP.

> Próximo passo sugerido: criar a landing de validação OU o documento de spec do MVP. É só pedir.
