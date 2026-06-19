---
title: "xAI Lança Grok Imagine Video 1.5 e Derruba Sora do Topo: Geração de Vídeo com IA 86% Mais Barata e Líder no Ranking Global"
description: "Grok Imagine Video 1.5 da xAI assume o 1º lugar no ranking global de vídeo IA, com preço 86% menor que o Sora 2 Pro e geração quase 2x mais rápida."
category: noticias
tags:
  - xAI
  - Grok
  - geração de vídeo IA
  - IA generativa
  - comparativo de preços
author: Redação Turbina IA
isFeatured: false
date: "2026-06-19"
coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
---

Em 16 de junho de 2026, a [xAI](https://x.ai/news/grok-imagine-video-1-5) moveu o Grok Imagine Video 1.5 de preview para disponibilidade geral — e com isso reconfigurou o mapa competitivo de geração de vídeo por inteligência artificial. O modelo agora ocupa o primeiro lugar no Image-to-Video Arena, o principal ranking independente da categoria, superando em votação cega nomes como Sora 2, Veo 3.1, Seedance 2.0 e Kling. A chegada ao topo acontece no momento em que a OpenAI descontinuou o aplicativo Sora para consumidores e o Google cobra até US$ 24 por minuto por sua oferta equivalente — enquanto a xAI pratica US$ 4,20 por minuto, 86% abaixo da tarifa premium da concorrente direta.

O lançamento não é um refinamento silencioso de produto. É um posicionamento deliberado em uma janela competitiva aberta pela saída do Sora do mercado de consumo e pela precificação elevada do Veo 3.1. Para equipes que constroem pipelines de vídeo com IA — seja em marketing, entretenimento, jornalismo ou produção criativa —, a aritmética de custo e qualidade disponível a partir de agora é diferente da que existia dois meses atrás.

> **Resposta Rápida (TL;DR):** O Grok Imagine Video 1.5, lançado pela xAI em 16 de junho de 2026, ocupa o primeiro lugar no ranking global Image-to-Video Arena com ganho de +52 pontos Elo sobre a versão anterior. Gera vídeos de 6 segundos em 720p em apenas 25 segundos no modo Fast e custa US$ 4,20 por minuto via API — 86% mais barato que o Sora 2 Pro e 65% abaixo do Google Veo 3.1.

## O Que é o Grok Imagine Video 1.5

O Grok Imagine Video 1.5 é o modelo de geração de vídeo image-to-video da xAI. Recebe como entrada um prompt de texto, uma imagem estática, ou a combinação de ambos, e produz um clipe de vídeo com áudio sincronizado em uma única passagem. Segundo o [anúncio oficial da xAI](https://x.ai/news/grok-imagine-video-1-5), os parâmetros técnicos do modelo são:

- **Resolução:** 480p ou 720p
- **Taxa de quadros:** 24 FPS
- **Duração:** 1 a 15 segundos por clipe base; extensões de 6 a 10 segundos via recurso Extend from Frame
- **Modos de animação:** Normal, Fun, Custom e Spicy
- **Identificador na API:** `grok-imagine-video-1.5`

A versão Fast — disponível no grok.com/imagine e nos aplicativos iOS e Android — quase dobra a velocidade de geração em relação ao modelo anterior: produz um clipe de 6 segundos em 720p em cerca de 25 segundos, contra mais de 40 segundos antes. No grok.com, o acesso gratuito não exige assinatura X Premium; o plano SuperGrok (US$ 30/mês) libera limites mais altos de geração.


![Imagem ilustrativa sobre xAI Lança Grok Imagine Video 1.5 e Derruba Sora do Topo: Geração de Vídeo com IA 86% Mais Barata e Líder no Ra](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

## A Arquitetura Aurora: Por Que o Movimento é Mais Coerente

A coerência de movimento que colocou o Grok Imagine Video 1.5 no topo do ranking não é acidental — é consequência direta da arquitetura Aurora, o motor de geração de vídeo autorregressivo da xAI. Entender como a Aurora funciona explica tanto os pontos fortes do modelo quanto onde estão seus limites.

Conforme detalhado pela [TechTimes](https://www.techtimes.com/articles/318635/20260618/grok-imagine-video-15-goes-live-xai-tops-ai-video-leaderboard-86-percent-below-sora.htm), Aurora é um motor autorregressivo mixture-of-experts para geração de vídeo. Ao contrário de concorrentes baseados em difusão — como o Sora, o Runway e o Kling —, que geram vídeo desnoisando ruído gaussiano em todos os quadros simultaneamente, a Aurora gera cada quadro em sequência: cada novo quadro é condicionado a todos os que vieram antes. É o mesmo princípio dos grandes modelos de linguagem que preveem a próxima palavra com base no histórico completo de tokens anteriores.

Aplicado ao vídeo, isso significa que uma panorâmica iniciada no quadro 1 mantém sua trajetória até o quadro 60 — porque cada quadro intermediário foi gerado com essa trajetória como contexto. O resultado são as características que definem o modelo: movimentos de câmera executados com limpeza, posições de objetos estáveis ao longo do clipe e transições de iluminação coerentes, em vez de derivar entre quadros. São exatamente os modos de falha mais comuns nos modelos de vídeo anteriores.

A mesma decisão arquitetural explica o teto de 720p. Segundo análise da TechTimes, escalar para 1080p multiplica por 2,25 o número de tokens de pixel que cada quadro precisa carregar — e em uma arquitetura sequencial esses tokens são processados um passo de cada vez. A limitação é estrutural, não provisória. A xAI não pode simplesmente "ativar" 1080p sem mudanças fundamentais no design.

## Liderança no Ranking Global: O Que Significa o Elo +52

O Image-to-Video Arena é atualmente o padrão da indústria para comparar geradores de vídeo com IA. Funciona como o sistema Elo do xadrez, adaptado para benchmarking de IA: em votação cega par a par, usuários veem saídas de dois modelos anônimos e escolhem o melhor. Essas preferências acumulam-se em Elo ratings ao longo de milhões de comparações.

Segundo o [ExplainX](https://explainx.ai/blog/grok-imagine-video-1-5-xai-release-2026), o Grok Imagine Video 1.5 registrou score Elo de 1.473, com ganho de +52 pontos sobre o Grok Imagine Video 1.0 — o maior salto entre versões consecutivas já registrado no benchmark na categoria image-to-video. A posição atual no ranking é:

| Modelo | Posição no Arena |
|---|---|
| Grok Imagine Video 1.5 | **#1** |
| Seedance 2.0 | #2 |
| HappyHorse 1.0 | #3 |
| Google Veo 3.1 | Top 5 |
| Sora 2 | Top 5 |
| Kling 3.0 | Top 5 |

Um ponto importante, ressaltado tanto pela [TechTimes](https://www.techtimes.com/articles/318635/20260618/grok-imagine-video-15-goes-live-xai-tops-ai-video-leaderboard-86-percent-below-sora.htm) quanto pelo ExplainX: o sistema Elo mede preferência do usuário em uma distribuição geral de prompts, não em cargas de trabalho profissionais especializadas. Um modelo no topo do Arena não é necessariamente o melhor para cada caso de uso — especialmente aqueles que exigem saída em 1080p, controle quadro a quadro preciso ou formatos padronizados pela indústria. O +52 Elo é um sinal real de qualidade ampla, não uma garantia de superioridade em todo workflow possível.


![Imagem ilustrativa sobre xAI Lança Grok Imagine Video 1.5 e Derruba Sora do Topo: Geração de Vídeo com IA 86% Mais Barata e Líder no Ra](https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80)

## A Revolução nos Preços: 86% Mais Barato que o Sora

Benchmarks dizem qual modelo vence em comparação controlada. Preço diz qual modelo chega à produção. Para quem quer confrontar os números de forma interativa, o [Comparador de IAs](/comparador) do Turbina IA permite visualizar diferenças entre modelos lado a lado.

| Modelo | Preço por Minuto de Vídeo (API) |
|---|---|
| **Grok Imagine Video 1.5** | **US$ 4,20** |
| Google Veo 3.1 | US$ 12,00 |
| Sora 2 Pro | US$ 30,00 |

Segundo dados consolidados pelo [ExplainX](https://explainx.ai/blog/grok-imagine-video-1-5-xai-release-2026), o Grok Imagine 1.5 é 65% mais barato que o Veo 3.1 e 86% mais barato que o Sora 2 Pro. Para uma equipe que gera 100 minutos de vídeo por mês — carga razoável para um estúdio de conteúdo ou time de marketing —, a diferença de preço representa economia de aproximadamente US$ 2.580 por mês em relação ao Sora, ou US$ 780 em relação ao Veo. Anualizado, são valores que mudam decisões de budget. Use a [Calculadora de Custos](/calculadora) para simular o impacto no seu volume específico de geração.

A estrutura de preços da API é: US$ 0,08 por segundo para saída em 480p e US$ 4,20 por minuto para 720p, conforme documentado pelo [Gagadget](https://gagadget.com/en/715382-grok-imagine-video-15-hits-number-one-and-its-86-cheaper-than-sora/). O modelo que vence benchmarks frequentemente perde adoção comercial para o modelo que vence a conta de custo. O Grok Imagine 1.5 está atualmente ganhando as duas.

## Velocidade de Geração: Quase o Dobro do Antecessor

A diferença de velocidade entre versões é objetiva e verificável. Conforme divulgado no [anúncio oficial da xAI](https://x.ai/news/grok-imagine-video-1-5):

> "Grok Imagine Video 1.5 Fast quase dobra a velocidade de geração: produz vídeos de 6 segundos em 720p em cerca de 25 segundos, ante mais de 40 segundos no modelo anterior."

Para pipelines com agentes de IA operando em workflows próximos ao tempo real, essa diferença importa — como ressaltado pelo [Gagadget](https://gagadget.com/en/715382-grok-imagine-video-15-hits-number-one-and-its-86-cheaper-than-sora/). Um agente que precisava aguardar mais de 40 segundos por clipe agora completa o mesmo ciclo em 25 segundos; em um pipeline com dezenas de gerações paralelas, isso representa mudança de throughput real.

A distinção entre os modelos é relevante: o **Grok Imagine Video 1.5** é a variante de qualidade máxima disponível via API; o **Grok Imagine Video 1.5 Fast** é a variante otimizada para velocidade, disponível no grok.com e nos apps móveis. Segundo o [Digital Today](https://www.digitaltoday.co.kr/en/view/67872/xai-releases-grok-imagine-video-1-5-ai-video-maker), essa separação — API para desenvolvedores que exigem controle, Fast para criadores que buscam agilidade — é uma estratégia deliberada da xAI para equilibrar expansão de serviço com melhora na percepção de performance.

## Áudio Nativo Sincronizado: O Fim do Pipeline em Duas Etapas

Toda geração anterior de modelos de vídeo com IA tinha o mesmo workflow: gerar o vídeo e depois adicionar áudio separadamente usando outro modelo ou manualmente. Isso funcionava, mas introduzia fricção — o áudio não estava sincronizado à física do vídeo, o lip-sync exigia passagens adicionais e o processo em duas etapas dobrava tempo e custo.

O Grok Imagine 1.5 gera áudio em passagem única, sincronizado ao conteúdo do vídeo, segundo o [ExplainX](https://explainx.ai/blog/grok-imagine-video-1-5-xai-release-2026). O modelo produz efeitos sonoros correspondentes aos eventos na tela (passos quando um personagem caminha, respingos quando líquido toca uma superfície), áudio ambiente adequado ao cenário e lip-sync mapeado para personagens com falas no clipe. A precisão do lip-sync na versão 1.5 melhorou significativamente em relação ao 1.0 — área onde o Sora historicamente mostrava dificuldades, como documentado pelo [Gagadget](https://gagadget.com/en/715382-grok-imagine-video-15-hits-number-one-and-its-86-cheaper-than-sora/).

O áudio nativo gerado em single pass elimina uma etapa inteira do pipeline criativo. Para produções que dependiam de sincronização manual de som, isso representa redução de tempo e custo em todo projeto.

## Acesso, Novos Recursos e o Ambiente Criativo

Junto ao lançamento do modelo, a xAI anunciou novos recursos para o ambiente criativo no Grok Imagine, previstos para rollout nos dias seguintes ao lançamento:

- **Projects:** Organização do trabalho em projetos exibidos na barra lateral esquerda
- **Multiple Agents:** Execução de múltiplos agentes em paralelo dentro de um projeto — sem aguardar uma geração terminar para iniciar a próxima
- **Search:** Busca em biblioteca de imagens e vídeos gerados — sem precisar rolar para encontrar um clipe específico

O [Digital Today](https://www.digitaltoday.co.kr/en/view/67872/xai-releases-grok-imagine-video-1-5-ai-video-maker) descreve a atualização como mais próxima de um refinamento do ambiente de uso do que simplesmente uma troca de modelo. A xAI também colaborou com o Heavy Pulp (@heavypulp), plataforma de experimentação criativa para artistas de efeitos visuais, para demonstrar o modelo na produção de um trailer cinematográfico feito inteiramente com o Grok Imagine 1.5 Fast — um caso de uso real com produção de nível profissional, não apenas demos controlados de laboratório.

## O Contexto Competitivo: Sora Descontinuado, Veo na Defensiva

O timing do lançamento não é coincidência. Conforme reportado pela [TechTimes](https://www.techtimes.com/articles/318635/20260618/grok-imagine-video-15-goes-live-xai-tops-ai-video-leaderboard-86-percent-below-sora.htm), a OpenAI descontinuou o aplicativo Sora para consumidores em 26 de abril de 2026, citando economia de computação insustentável. A API do Sora 2 permanece ativa em trilha deprecada até 24 de setembro de 2026, mas a OpenAI não anunciou produto de vídeo sucessor. O espaço que essa saída abriu é exatamente onde o Grok Imagine 1.5 se posiciona.

O Google Veo 3.1 permanece comercialmente disponível, mas a preços que começam em US$ 9 por minuto para o tier Fast e chegam a US$ 24 por minuto para o Quality — muito acima dos US$ 4,20 praticados pela xAI. A combinação de liderança no benchmark independente, preço substancialmente menor e ausência do Sora no mercado de consumo cria condições objetivas para mudança de fornecedor por equipes que precisam gerar vídeo em escala.

## Limitações: O Teto de 720p e o Que Vem a Seguir

A limitação mais significativa do Grok Imagine Video 1.5 é arquitetural: o teto de 720p. Competidores como o Sora 2 e o Veo 3.1 já oferecem saída em 1080p. Para produção profissional com padrões específicos de resolução — broadcast, cinema, plataformas com requisitos mínimos de qualidade —, essa é uma restrição real que não pode ser contornada.

A xAI sinalizou que um Pro Mode com resolução superior está no roadmap, mas sem data firme anunciada, conforme documentado pelo [Gagadget](https://gagadget.com/en/715382-grok-imagine-video-15-hits-number-one-and-its-86-cheaper-than-sora/). Outras limitações reportadas até o momento incluem ausência de controle quadro a quadro preciso e falta de suporte a formatos específicos por indústria. Para equipes cujo workflow não exige resolução acima de 720p e que precisam de geração em escala a custo controlado, nenhuma dessas restrições é bloqueadora. Para produção de broadcast ou grandes produções audiovisuais, são pontos a avaliar antes de migrar de fornecedor.

## Perguntas Frequentes

**O Grok Imagine Video 1.5 é gratuito?**
Sim, o acesso básico em grok.com não exige assinatura X Premium. O plano SuperGrok (US$ 30/mês) libera limites maiores de geração. Via API, a precificação é US$ 0,08 por segundo em 480p ou US$ 4,20 por minuto em 720p.

**Por que o Grok Imagine Video 1.5 produz movimentos mais coerentes que concorrentes?**
Pela arquitetura Aurora, que gera cada quadro em sequência condicionado a todos os anteriores — ao contrário de modelos de difusão que tratam os quadros de forma mais independente. Isso mantém trajetórias de câmera, posições de objetos e iluminação consistentes ao longo do clipe, eliminando os artefatos de "quadros soltos" comuns em gerações anteriores.

**O modelo suporta 1080p?**
Não ainda. O teto atual é 720p, por razões estruturais da arquitetura Aurora. A xAI anunciou que um Pro Mode com resolução superior está no roadmap, mas sem data confirmada de lançamento.

## Fontes e Referências

- [Grok Imagine Video 1.5 — Anúncio Oficial xAI](https://x.ai/news/grok-imagine-video-1-5)
- [Grok Imagine Video 1.5 Goes Live: xAI Tops AI Video Leaderboard at 86 Percent Below Sora — TechTimes](https://www.techtimes.com/articles/318635/20260618/grok-imagine-video-15-goes-live-xai-tops-ai-video-leaderboard-86-percent-below-sora.htm)
- [Grok Imagine Video 1.5 hits number one — and it's 86% cheaper than Sora — Gagadget](https://gagadget.com/en/715382-grok-imagine-video-15-hits-number-one-and-its-86-cheaper-than-sora/)
- [xAI releases Grok Imagine Video 1.5 AI video-making model — Digital Today](https://www.digitaltoday.co.kr/en/view/67872/xai-releases-grok-imagine-video-1-5-ai-video-maker)
- [Grok Imagine Video 1.5: xAI Launches #1 AI Video Generator (June 2026) — ExplainX](https://explainx.ai/blog/grok-imagine-video-1-5-xai-release-2026)