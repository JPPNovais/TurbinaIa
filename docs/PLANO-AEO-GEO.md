# Plano — AEO/GEO ("Aparecer nas respostas da IA")

> Roteiro completo para transformar o Turbina IA na referência brasileira de AEO/GEO,
> 100% orgânico (sem marketing pago). As fases gratuitas (1 e 2) já começaram a ser
> implementadas. Data: 2026-06-13.

## A grande ideia (em 1 frase)
Criar um **"corretor de conteúdo para IA" gratuito** + conteúdo que ranqueia, virar
autoridade no tema e monetizar depois (versão PRO, produto digital, serviço).

---

## FASE 1 — Conteúdo (GRÁTIS) ✅ iniciada
Artigos que ranqueiam e ensinam o tema (terreno aberto no Brasil):
- [x] `o-que-e-aeo-geo-como-aparecer-nas-respostas-de-ia` (pilar)
- [x] `como-aparecer-nas-respostas-do-chatgpt`
- [ ] Próximos: "Dados estruturados (Schema) para iniciantes", "FAQ que a IA cita", "AEO vs SEO na prática", "Como otimizar para o Perplexity/Gemini".

## FASE 2 — Ferramenta gratuita "Verificador de IA" ✅ iniciada
- [x] Página `/verificador-ia` (SEO forte: title, schema WebApplication + FAQPage, conteúdo rankeável).
- [x] API `/api/aeo-check`: analisa a URL e dá nota 0–100 + checklist (sem custo, baseada em regras).
- [x] Captura de e-mail no resultado (lead magnet).
- [x] Destaque na home + item no menu + sitemap.
- [ ] Melhorias futuras: salvar histórico (localStorage), comparar 2 páginas, exportar relatório em PDF.

## FASE 3 — Monetização (depois de ter público)
1. **Versão PRO (assinatura)** — "monitoramento": checa periodicamente se a marca do
   usuário aparece nas IAs (ChatGPT/Gemini/Perplexity) via API. Custa por consulta → por isso é paga. Ex.: R$ 29/mês.
2. **Produto digital** — e-book/curso "Apareça nas respostas da IA" (margem alta, sem estoque).
3. **Serviço/consultoria** — "otimizo seu site para as IAs" (renda rápida para 1 pessoa).
4. **Afiliados/anúncios** — já existentes, crescem com o tráfego.

---

## Por que isto tende a dar certo
- **Tendência forte lá fora** (ferramentas pagas US$ 59–499/mo) e **vaga no Brasil**.
- **Casa com o Turbina IA** (site de IA + SEO + conteúdo).
- **Aquisição 100% orgânica**: a própria ferramenta + artigos trazem tráfego do Google.
- A ferramenta gratuita é o **ímã**; a monetização vem depois, sem depender de anúncio pago.

## Métricas
- Tráfego orgânico das páginas de AEO (GSC).
- Nº de análises feitas no verificador / e-mails captados.
- Conversão para PRO/produto (quando lançar).

## Próximos passos sugeridos
1. Publicar mais 2–3 artigos da Fase 1 (cluster AEO).
2. Acompanhar no GSC quais termos de AEO começam a ranquear.
3. Quando houver volume, lançar a versão PRO (monitoramento) — exige integração de API de IA + billing.

## Notas técnicas (para quando for evoluir)
- A análise atual é por **regras** (sem custo). O monitoramento PRO exigirá **APIs pagas**
  (OpenAI/Gemini/Perplexity) + login (Supabase Auth) + cobrança (Mercado Pago/Stripe).
- A ferramenta é um **módulo** do site Next.js atual (rota `/verificador-ia` + `/api/aeo-check`),
  não um app separado.
