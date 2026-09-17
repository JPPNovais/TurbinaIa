---
title: "ChatGPT Images 2.5: Modelo de Imagem Fica 50% Mais Rápido e Ganha Recurso de Desenhar à Mão"
description: "OpenAI lança ChatGPT Images 2.5 com Sketch, edições mais precisas e latência 50% menor. Veja o que muda, como usar e quem já pode testar."
category: ferramentas
tags:
  - ChatGPT
  - OpenAI
  - Geração de Imagens
  - Inteligência Artificial
  - Ferramentas de IA
author: Redação Turbina IA
isFeatured: false
date: "2026-09-17"
coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
---

Em 8 de setembro, a OpenAI trocou o motor de imagens do ChatGPT pela terceira vez em menos de um ano e meio. O novo modelo, batizado de ChatGPT Images 2.5, promete gerar imagens com até 50% menos latência em relação à versão anterior — e chega junto de um recurso que muda a forma de começar uma criação: dá para desenhar um rabisco à mão dentro do próprio chat e pedir para a IA transformar aquilo em algo pronto, [segundo o anúncio oficial da OpenAI](https://openai.com/index/introducing-chatgpt-images-2-5/).

> **Resposta Rápida (TL;DR):** O ChatGPT Images 2.5 é o novo modelo de geração e edição de imagens do ChatGPT, lançado em 8 de setembro de 2026 para todos os planos (inclusive o gratuito), em desktop, celular e web. Ele gera imagens até 50% mais rápido que a versão 2.0, preserva melhor rostos e objetos de fotos de referência ao longo de várias edições, e traz o recurso Sketch, que converte um desenho feito à mão dentro do chat em imagem final.

## O que muda na prática, além da velocidade

A OpenAI descreve o Images 2.5 como o modelo "mais avançado" já lançado para o ChatGPT, com iluminação mais natural, texturas mais ricas e — o ponto que mais afeta o uso do dia a dia — maior fidelidade ao preservar o rosto ou o objeto de uma foto de referência quando o usuário pede uma nova edição em cima da anterior, [conforme a própria OpenAI detalhou no lançamento](https://openai.com/index/introducing-chatgpt-images-2-5/). Isso ataca um problema comum de gerações anteriores: pedir um segundo ou terceiro ajuste numa mesma imagem costumava alterar traços que deveriam ter ficado intactos, como o rosto de uma pessoa ou a cor exata de um produto.

O modelo também foi treinado para fazer o que a empresa chama de edição cirúrgica — trocar só um produto, um texto ou o fundo de uma cena, mantendo o resto da composição sem alteração, mesmo em imagens com várias camadas de elementos. Na prática, isso deve reduzir a frustração de quem usa o [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) para ajustar artes prontas e via de regra precisava regenerar a imagem inteira para mudar um único detalhe.


![Imagem ilustrativa sobre ChatGPT Images 2.5: Modelo de Imagem Fica 50% Mais Rápido e Ganha Recurso de Desenhar à Mão](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## Sketch: desenhar no chat virou parte do fluxo

O recurso mais visível da atualização é o Sketch. Basta digitar "@Sketch" numa conversa para abrir uma tela de desenho dentro do próprio ChatGPT — o usuário rabisca a composição que tem em mente, mesmo que seja um traço tosco, escreve um [prompt](/prompts) explicando o que aquele rascunho deveria virar, e o modelo usa o desenho como referência estrutural para gerar a imagem final. É um atalho para quem sabe exatamente onde cada elemento deveria estar na composição, mas não sabe descrever isso só em texto — um problema recorrente de quem usa geração de imagem por IA para peças com layout específico, como capas, banners ou plantas simples.

Junto do Sketch vieram modelos prontos de composição — templates com nomes como "Poster" e "Merch" — pensados para formatos que se repetem bastante no uso comercial, como flyers e fotos de produto. A OpenAI também adicionou a possibilidade de comentar diretamente sobre partes específicas de uma imagem gerada para pedir ajustes pontuais, em vez de reescrever o prompt inteiro, e um botão para compartilhar o prompt por trás de uma imagem, permitindo que outra pessoa rode a mesma ideia com suas próprias fotos e detalhes. Quem gosta de guardar e reaproveitar boas instruções de IA pode conferir a [biblioteca de prompts do Turbina IA](/prompts) para organizar os próprios comandos, ou usar o [Gerador de Prompts](/gerador) para estruturar pedidos mais precisos antes mesmo de abrir o Sketch.

## Quem já pode usar, e o que muda para quem programa

A atualização já está disponível para todos os usuários do ChatGPT — incluindo o plano gratuito —, além de ChatGPT Work e Codex, em desktop, celular e web, sem necessidade de assinatura paga para acessar o modelo básico, [de acordo com a OpenAI](https://openai.com/index/introducing-chatgpt-images-2-5/). Isso reforça um padrão que a empresa já vinha seguindo desde o lançamento do Images 2.0, em abril: geração de imagem deixou de ser recurso de plano pago e virou parte do produto principal.

Para quem constrói aplicações em cima da API da OpenAI, a novidade vem em duas versões: GPT-Image-2.5 Flare, pensada como padrão para a maioria dos casos de uso, com qualidade superior à geração anterior e tempo de resposta cerca de 50% menor; e GPT-Image-2.5 Sunburst, voltada a quem precisa de mais precisão e controle fino sobre cada edição, com tempo de geração mais longo em troca disso.

| Versão | Uso recomendado | Velocidade | Precisão de edição |
|---|---|---|---|
| ChatGPT Images 2.0 | Modelo anterior (abril/2026) | Referência base | Boa |
| GPT-Image-2.5 Flare | Uso geral via API | Até 50% mais rápido que o 2.0 | Superior ao 2.0 |
| GPT-Image-2.5 Sunburst | Edições complexas via API | Mais lento que o Flare | A mais alta da linha |


![Imagem ilustrativa sobre ChatGPT Images 2.5: Modelo de Imagem Fica 50% Mais Rápido e Ganha Recurso de Desenhar à Mão](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## O padrão de uso que a própria OpenAI revelou

Vale contextualizar por que a empresa está investindo tanto nessa frente. Num levantamento publicado em agosto sobre como as pessoas realmente usam o ChatGPT no mundo todo, a OpenAI mostrou que o uso de multimídia — que inclui geração de imagem e vídeo — passou a representar 7,8% de todas as mensagens enviadas à plataforma, um crescimento constante ao longo do ano, ainda atrás de casos de uso maiores como orientação prática, escrita e busca de informação, [segundo o próprio relatório da OpenAI](https://openai.com/index/how-the-world-is-putting-chatgpt-to-work/). O detalhe que interessa diretamente ao público brasileiro: em países como Brasil e Colômbia, mais de uma em cada dez mensagens enviadas ao ChatGPT já é classificada como multimídia — uma proporção bem acima da média global.

Esse apetite já havia aparecido de forma desigual quando o Images 2.0 estreou, em abril. Segundo dados de terceiros analisados pela [TechCrunch](https://techcrunch.com/2026/04/30/chatgpt-images-2-0-is-a-hit-in-india-but-not-a-big-winner-elsewhere-yet/), a Índia liderou a adoção da época, com cerca de 5 milhões de downloads do app na semana de lançamento, contra aproximadamente 2 milhões nos Estados Unidos — usuários indianos usaram a ferramenta sobretudo para criar avatares e retratos estilizados. No resto do mundo, porém, o impacto foi mais modesto: os downloads do aplicativo cresceram 11% na semana seguinte ao lançamento, mas usuários ativos diários e sessões avançaram apenas cerca de 1%, segundo a mesma reportagem. Ou seja: a geração de imagem gera picos de interesse regionais fortes, mas ainda não virou hábito diário para a maioria — um contexto que ajuda a explicar por que a OpenAI segue investindo pesado nessa frente a cada poucos meses, em vez de tratá-la como recurso secundário.

Antes de decidir se vale trocar de ferramenta de geração de imagem ou simplesmente testar o que já está incluído na assinatura que você tem, pode valer a pena comparar as opções disponíveis hoje no [Comparador de IAs](/comparador) do Turbina IA — preço, limites de uso e recursos variam bastante entre ChatGPT, Gemini e concorrentes especializados em imagem.

## O que os primeiros testes mostraram na versão anterior

Como o Images 2.5 acabou de sair do forno, ainda não existe um histórico longo de uso real fora da própria OpenAI. Mas a versão anterior, o Images 2.0, já tinha sido testada de perto por jornalistas em abril — e o retrato que ficou foi de uma ferramenta útil para tarefas visuais pontuais, mas ainda distante de substituir um fluxo profissional de edição de imagem. A [Forbes testou o Images 2.0 avaliando o impacto da ferramenta em tarefas de trabalho reais](https://www.forbes.com/sites/rachelwells/2026/04/23/i-tested-chatgpts-new-images-20-heres-how-it-impacts-your-job-now/) na época, concluindo que o modelo já dava conta de tarefas como criar artes simples para redes sociais ou visualizar conceitos rapidamente, mas ainda exigia revisão humana para qualquer uso com padrão de marca ou consistência visual mais rígida. Como o Images 2.5 foi desenhado justamente para atacar esse ponto — consistência entre edições sucessivas —, é razoável esperar que parte dessa lacuna diminua, mas isso só vai ficar claro com mais semanas de uso fora dos laboratórios da própria empresa.

## O que ainda falta, e o que observar

A OpenAI não divulgou limite de gerações gratuitas por dia para o Images 2.5 nem detalhou se o Sketch chega simultaneamente aos apps mobile e à versão web, ou se há um período de rollout escalonado — histórico recente da empresa mostra que atualizações de modelo às vezes chegam primeiro a assinantes pagos antes de alcançar o plano gratuito por completo, mesmo quando o anúncio inicial fala em disponibilidade para todos. Vale testar diretamente na conta antes de planejar um fluxo de trabalho em cima do recurso, especialmente para uso profissional recorrente.

Também não há, até o momento, uma tabela pública de preço por imagem para o uso via ChatGPT (fora da API, que é cobrada por token consumido, não por imagem gerada) — outro ponto que só fica claro na prática, de acordo com o volume e a complexidade de cada geração.

## Perguntas Frequentes

### O ChatGPT Images 2.5 está disponível no plano gratuito?

Sim. A OpenAI afirma que a atualização chega a todos os usuários do ChatGPT, incluindo o plano gratuito, além dos planos Work e Codex, em desktop, celular e web — sem exigir assinatura paga para o uso básico do modelo.

### Como funciona o recurso Sketch?

Basta digitar "@Sketch" numa conversa do ChatGPT para abrir uma tela de desenho dentro do próprio chat. O usuário faz um rabisco representando a composição desejada, escreve um prompt explicando o resultado esperado, e o modelo usa o desenho como referência estrutural para gerar a imagem final.

### O que muda entre o Images 2.5 e o Images 2.0?

O Images 2.5 reduz a latência de geração em até 50% em relação ao Images 2.0, produz iluminação e texturas mais naturais, preserva melhor o rosto ou objeto de fotos de referência ao longo de edições sucessivas e segue instruções de forma mais confiável em conversas com vários turnos de ajuste.

## Fontes e Referências

- [Introducing ChatGPT Images 2.5 (OpenAI)](https://openai.com/index/introducing-chatgpt-images-2-5/)
- [From asking to doing: How the world is putting ChatGPT to work (OpenAI)](https://openai.com/index/how-the-world-is-putting-chatgpt-to-work/)
- [ChatGPT Images 2.0 is a hit in India, but not a big winner elsewhere, yet (TechCrunch)](https://techcrunch.com/2026/04/30/chatgpt-images-2-0-is-a-hit-in-india-but-not-a-big-winner-elsewhere-yet/)
- [I Tested ChatGPT's New Images 2.0. Here's How It Impacts Your Job Now (Forbes)](https://www.forbes.com/sites/rachelwells/2026/04/23/i-tested-chatgpts-new-images-20-heres-how-it-impacts-your-job-now/)