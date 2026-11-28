---
title: "Prompts para Gerar Imagens com IA: 30 Modelos por Estilo para ChatGPT e Gemini"
seoTitle: "Prompts para Gerar Imagens com IA: 30 Modelos"
description: "30 prompts prontos para criar fotos de produto, retratos, ilustrações, logos e posts com o ChatGPT e o Gemini. Copie, ajuste e gere a imagem certa."
category: tutoriais
tags:
  - Geração de Imagens
  - ChatGPT
  - Gemini
  - Prompts
  - IA Generativa
author: Redação Turbina IA
isFeatured: false
date: "2026-11-28"
coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
---

Peça "uma foto de tênis para loja virtual" ao [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) ou ao Gemini e a resposta costuma sair genérica: fundo branco qualquer, luz chapada, nada que pareça ter passado por um fotógrafo. Peça a mesma coisa descrevendo o ângulo da câmera, o tipo de luz e o material do produto, e o resultado muda de categoria. A diferença não está em qual IA é "melhor" — está em como o prompt é montado.

> **Resposta Rápida (TL;DR):** Prompts de imagem funcionam melhor quando seguem uma estrutura fixa — sujeito, ação, cenário, composição, estilo e luz — em vez de uma frase solta. Os 30 prompts abaixo cobrem foto de produto, retrato, ilustração, logo e post para redes sociais, prontos para copiar no ChatGPT (GPT Image 2.6) ou no Gemini (Nano Banana/Nano Banana Pro). Ajuste o que está entre [colchetes] e refine com pedidos de edição em vez de recomeçar do zero.

**Escolha o estilo:**

- [Como montar o prompt (a estrutura que funciona)](#a-estrutura-que-funciona-em-qualquer-modelo)
- [ChatGPT x Gemini: o que muda no prompt](#chatgpt-x-gemini-o-que-muda-no-prompt)
- [Foto de produto](#prompts-para-foto-de-produto) — 6 prompts
- [Retrato](#prompts-para-retrato) — 6 prompts
- [Ilustração](#prompts-para-ilustracao) — 6 prompts
- [Logo e identidade visual](#prompts-para-logo-e-identidade-visual) — 6 prompts
- [Post para redes sociais](#prompts-para-post-para-redes-sociais) — 6 prompts

---

## A Estrutura que Funciona em Qualquer Modelo

O guia oficial do Google para o Nano Banana recomenda montar o prompt em blocos — sujeito, ação, cenário, composição e estilo — em vez de escrever uma frase corrida, e reforça duas regras simples: descreva o que deve aparecer na cena em termos positivos (em vez de "sem carros na rua", escreva "rua vazia") e controle a câmera com termos técnicos como "plano baixo" ou "vista aérea" ([Google Cloud — Guia de prompts do Nano Banana](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana)). O mesmo documento detalha os chamados controles de "diretor de criação": tipo de iluminação ("softbox three-point", "luz dourada de fim de tarde"), lente e ângulo de câmera ("grande angular", "plano macro", "f/1.8") e até o material dos objetos — pedir "lã trançada azul-marinho" em vez de só "suéter" muda a textura final.

A OpenAI segue uma lógica parecida em seu guia de prompts para o GPT Image, atualizado para a versão 2.6 (Flare e Sunburst) em 4 de novembro de 2026: comece pela imagem que você quer obter e só depois descreva assunto, composição, estilo e restrições, numa lista de princípios que a própria documentação chama de "fundamentos de prompt" ([OpenAI — Guia de prompts do GPT Image](https://developers.openai.com/api/docs/guides/image-prompting)). Na prática, isso significa evitar prompts como "uma imagem bonita de um café" e escrever algo como "xícara de café branca sobre mesa de madeira, vista de cima, luz natural de janela lateral, foco no vapor subindo" — cada vírgula resolve uma ambiguidade que o modelo teria que adivinhar.

Vale um aviso sobre edição: tanto ChatGPT quanto Gemini aceitam retrabalhar uma imagem já gerada em vez de recomeçar. O guia da OpenAI recomenda frases diretas do tipo "remova as duas pessoas à esquerda, não altere mais nada" — dizer explicitamente o que **não** deve mudar evita que o modelo redesenhe a cena inteira por engano ([OpenAI — Guia de prompts do GPT Image](https://developers.openai.com/api/docs/guides/image-prompting)). No Gemini, o guia do Google chama esse fluxo de edição conversacional: você vai ajustando a mesma imagem com pedidos curtos e sucessivos, em vez de escrever um novo prompt gigante a cada tentativa ([Google Cloud — Guia de prompts do Nano Banana](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana)).


![Imagem ilustrativa sobre Prompts para Gerar Imagens com IA: 30 Modelos por Estilo para ChatGPT e Gemini](https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80)

## ChatGPT x Gemini: o que Muda no Prompt

As duas ferramentas entendem a mesma estrutura de [prompt](/prompts), mas têm limites e recursos diferentes que valem considerar antes de escrever.

| | ChatGPT (GPT Image 2.6) | [Gemini](/blog/prompts-para-gemini) (Nano Banana / Nano Banana Pro) |
|---|---|---|
| Variantes | Flare (mais rápida) e Sunburst (maior precisão em detalhe e edição), lançadas em 4 de novembro de 2026 ([OpenAI — Introducing Images 2.6](https://openai.com/index/introducing-images-2-6/)) | Nano Banana 2 (rápido) e Nano Banana Pro (Gemini 3 Pro Image, maior qualidade) |
| Resolução | Varia por tarefa; prioriza nitidez e texto legível na imagem | Nano Banana Pro gera em 2K ou 4K, contra 1024×1024 do modelo original ([TechCrunch — Google releases Nano Banana Pro](https://techcrunch.com/2025/11/20/google-releases-nano-banana-pro-its-latest-image-generation-model/)) |
| Imagens de referência | Desde a versão 2.6, aceita referências nomeadas e persistentes: você salva uma imagem com um nome e, depois, chama ela digitando "@" e o nome em qualquer conversa ([OpenAI — Introducing Images 2.6](https://openai.com/index/introducing-images-2-6/)) | Aceita até 14 imagens de referência no mesmo prompt, útil para manter um personagem ou produto consistente ([Google Cloud — Guia de prompts do Nano Banana](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana)) |
| Texto na imagem | Ponto forte desde a família GPT Image; peça a palavra entre aspas e o estilo da fonte | Nano Banana Pro renderiza texto em várias fontes e idiomas dentro da própria imagem (TechCrunch — Google releases Nano Banana Pro) |
| Marca d'água | Metadados de origem via políticas da OpenAI para conteúdo gerado | Toda imagem recebe Content Credentials C2PA e marca d'água SynthID (Google Cloud — Guia de prompts do Nano Banana) |

Na prática: se o trabalho envolve manter a cara de um personagem ou de um produto em várias imagens, o Gemini com múltiplas referências tende a ajudar mais. Se o foco é texto legível dentro da imagem — uma capa com título, um banner com preço —, os dois competem bem, mas vale testar a mesma descrição nos dois antes de escolher. Para decidir entre as ferramentas de forma mais ampla (preço, plano grátis, outros recursos), vale ver o comparativo completo em [Melhor IA para Criar Imagens em 2026](/blog/melhor-ia-para-criar-imagens-em-2026-chatgpt-gemini-midjourney-e-stable-diffusion) e a ficha de cada modelo no [comparador de IAs](/comparador).

Os 30 prompts abaixo já seguem a estrutura sujeito + ação + cenário + composição + estilo + luz. Copie, troque o que está entre [colchetes] e cole no ChatGPT ou no Gemini — se o primeiro resultado vier torto, peça o ajuste específico ("deixe a luz mais quente", "centralize o produto") em vez de reescrever tudo.

## Prompts para Foto de Produto

Fotos de produto são as que mais se beneficiam de detalhe técnico: fundo, material, ângulo e luz decidem se a imagem parece profissional ou artificial.

```
Fotografia de produto: [nome do produto], centralizado, sobre fundo [branco/colorido/texturizado], vista frontal em três quartos, luz de estúdio suave vindo da esquerda (softbox), sombra curta e sutil, alta nitidez nos detalhes do material [ex.: couro, vidro, metal escovado], estilo e-commerce profissional.
```

```
[Nome do produto] flutuando sobre fundo [cor sólida], ângulo levemente de cima (bird's eye reduzido), luz dourada de fim de tarde entrando pela lateral, reflexo discreto na superfície abaixo do produto, composição com espaço vazio à direita para texto.
```

```
Still de [produto] sobre mesa de madeira clara, cenário de cozinha/escritório desfocado ao fundo (bokeh), luz natural de janela lateral, foco total no produto, ângulo de 45 graus, estilo editorial para revista.
```

```
Sequência de [produto] em três variações de cor [cor 1, cor 2, cor 3], todas no mesmo fundo neutro e no mesmo ângulo frontal, luz idêntica em todas, para montar um carrossel de loja virtual.
```

```
[Produto] sendo usado por uma mão em close-up, fundo desfocado, luz lateral suave, ênfase na textura do material, estilo de fotografia de catálogo.
```

```
Edite a imagem anterior: troque o fundo para [cor ou ambiente] e ajuste a luz para [mais fria/mais quente]. Não altere a posição nem o ângulo do produto.
```


![Imagem ilustrativa sobre Prompts para Gerar Imagens com IA: 30 Modelos por Estilo para ChatGPT e Gemini](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80)

## Prompts para Retrato

Peça descrição física apenas quando o contexto exigir (ex.: avatar fictício), nunca peça para recriar o rosto de uma pessoa real sem autorização — os dois modelos restringem e podem recusar esse tipo de pedido.

```
Retrato de [personagem fictício/avatar], [faixa etária aproximada], expressão [confiante/sorridente/pensativa], fundo liso em tom [cor], luz de estúdio com três pontos (key, fill, rim), plano fechado dos ombros para cima, estilo foto corporativa.
```

```
Retrato em preto e branco de [personagem fictício], iluminação dramática lateral (chiaroscuro), fundo escuro desfocado, olhar direto para a câmera, grão de filme sutil, estilo editorial de revista.
```

```
Avatar estilo ilustração digital de [personagem fictício], traços [realistas/estilizados], cores [paleta desejada], fundo gradiente simples, enquadramento de busto, para usar como foto de perfil.
```

```
Retrato ambientado: [personagem fictício] sentado em [cenário, ex.: mesa de café, estúdio, parque], luz natural suave de manhã, profundidade de campo rasa (fundo desfocado), composição em regra dos terços.
```

```
Retrato em estilo [anos 80/anos 90/vintage], com grão de filme analógico, cores com viés [quente/frio], roupa e cenário coerentes com a época, enquadramento de três quartos.
```

```
Ajuste o retrato anterior: mude a expressão para [mais séria/mais leve] e a luz para [mais suave/mais contrastada]. Mantenha a pose e o enquadramento como estão.
```

## Prompts para Ilustração

Ilustração é onde vale nomear uma referência de estilo concreta — "aquarela", "flat design", "cyberpunk" — em vez de adjetivos vagos como "bonito" ou "profissional", que o modelo interpreta de forma inconsistente.

```
Ilustração em estilo aquarela de [cena ou objeto], paleta de cores [pastel/vibrante], traços soltos e bordas levemente borradas, fundo com respingos sutis de tinta, composição centralizada.
```

```
Ilustração flat design de [conceito, ex.: "equipe trabalhando remotamente"], paleta de 3 a 4 cores, formas geométricas simples, sem gradientes, estilo usado em apresentações e sites corporativos.
```

```
Cena em estilo cyberpunk: [sujeito/ambiente], neon em tons de [roxo/azul/rosa], reflexos em superfícies úmidas, iluminação noturna com contraste alto, composição com profundidade (primeiro plano, meio, fundo).
```

```
Ilustração estilo infantil/livro infantil de [personagem ou cena], cores vivas, traços arredondados e amigáveis, fundo simples sem excesso de detalhe, enquadramento central.
```

```
Padrão (pattern) repetível de [elemento, ex.: folhas, formas geométricas, ícones de tecnologia], cores [paleta], estilo [minimalista/retrô], sem emenda visível entre as repetições, para usar como papel de parede ou embalagem.
```

```
Transforme a ilustração anterior para o estilo [line art/pixel art/recorte de papel], mantendo a mesma cena e composição.
```

## Prompts para Logo e Identidade Visual

Logos pedem instruções específicas sobre simplicidade e uso de texto — e os dois modelos ainda erram letras em palavras longas, então vale revisar antes de usar em produção.

```
Logo minimalista para [nome da marca/negócio], ícone simples que remeta a [conceito, ex.: velocidade, natureza, tecnologia], paleta de no máximo 2 cores, fundo transparente, estilo flat, sem efeitos de sombra ou gradiente.
```

```
Logo tipográfico com o nome "[nome da marca]", fonte [serifada/sem serifa/manuscrita], cor [cor principal], composição horizontal, adequado para cabeçalho de site.
```

```
Ícone de aplicativo (app icon) para [nome do app/função], formato quadrado com cantos arredondados, elemento central simples que represente [função do app], paleta de cores [cores], estilo flat moderno.
```

```
Monograma com as iniciais "[iniciais]", estilo [elegante/geométrico/manuscrito], uma única cor, fundo transparente, para usar como marca d'água ou selo.
```

```
Mascote simples para a marca [nome], baseado em [animal/objeto/forma], expressão amigável, paleta de cores [cores da marca], estilo vetorial flat, de corpo inteiro, fundo transparente.
```

```
Gere 3 variações do logo anterior trocando apenas a paleta de cores para: [cor 1], [cor 2] e [cor 3]. Mantenha o ícone e a tipografia idênticos.
```

## Prompts para Post para Redes Sociais

Aqui o texto dentro da imagem importa tanto quanto a arte — e é justamente onde ChatGPT e Gemini mais evoluíram recentemente, então vale pedir a palavra exata entre aspas.

```
Post para Instagram (formato quadrado) anunciando "[texto da promoção, ex.: 20% OFF]", com [produto ou tema] em destaque, fundo em tom [cor da marca], tipografia grande e legível, estilo moderno e limpo.
```

```
Carrossel de 3 imagens para Instagram sobre "[tema do post]", mesma paleta de cores e mesma fonte nas três, cada uma com uma frase curta diferente: "[frase 1]", "[frase 2]", "[frase 3]".
```

```
Banner horizontal para capa de LinkedIn com o texto "[nome/cargo/frase de posicionamento]", fundo profissional em tom [cor], composição com espaço negativo à esquerda para o texto, estilo corporativo.
```

```
Story para Instagram (formato vertical 9:16) com citação "[frase ou citação]" centralizada, fundo [gradiente/foto desfocada/cor sólida], tipografia elegante, espaço reservado no topo para o nome do perfil.
```

```
Thumbnail para vídeo no YouTube sobre "[tema do vídeo]", com [elemento visual central], texto grande e de alto contraste dizendo "[chamada curta]", cores vibrantes para chamar atenção no feed.
```

```
Adapte o post anterior para o formato [Stories/Feed/Capa do Facebook], mantendo a mesma arte e paleta, só ajustando o enquadramento e a posição do texto para a nova proporção.
```

## Perguntas Frequentes

### Qual é melhor para gerar imagens: ChatGPT ou Gemini?

Depende da tarefa. O Gemini aceita até 14 imagens de referência no mesmo prompt e tende a ajudar mais quando é preciso manter a cara de um personagem ou produto em várias imagens ([Google Cloud — Guia de prompts do Nano Banana](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana)); o ChatGPT (GPT Image 2.6) também lida bem com texto legível, referências nomeadas e edição pontual via instrução direta ([OpenAI — Guia de prompts do GPT Image](https://developers.openai.com/api/docs/guides/image-prompting)). O ideal é testar o mesmo prompt nos dois antes de decidir — veja a comparação completa em [Melhor IA para Criar Imagens em 2026](/blog/melhor-ia-para-criar-imagens-em-2026-chatgpt-gemini-midjourney-e-stable-diffusion).

### Por que a imagem gerada não ficou igual ao prompt?

Na maioria das vezes falta um dos seis blocos da estrutura — sujeito, ação, cenário, composição, estilo ou luz —, deixando o modelo preencher a lacuna por conta própria. Em vez de recomeçar, peça um ajuste específico sobre a imagem já gerada (como "deixe a luz mais quente" ou "centralize o produto"), já que os dois modelos aceitam edição conversacional em vez de só recriar do zero ([Google Cloud — Guia de prompts do Nano Banana](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana)).

### É seguro gerar imagem com o rosto de uma pessoa real?

Não sem autorização. Tanto a OpenAI quanto o Google tratam retrato de pessoa real com restrições adicionais e podem recusar o pedido quando não há como confirmar consentimento — a recomendação é usar personagens fictícios ou imagens de referência da própria pessoa que autorizou o uso. Para prompts de texto fora do contexto de imagem, veja também a lista de [prompts prontos para ChatGPT](/blog/prompts-prontos-para-chatgpt) e a [biblioteca de prompts do site](/prompts).

## Fontes e Referências

- [Google Cloud — Guia de prompts do Nano Banana](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana)
- [OpenAI — Guia de prompts do GPT Image](https://developers.openai.com/api/docs/guides/image-prompting)
- [OpenAI — Introducing Images 2.6](https://openai.com/index/introducing-images-2-6/)
- [TechCrunch — Google releases Nano Banana Pro, its latest image generation model](https://techcrunch.com/2025/11/20/google-releases-nano-banana-pro-its-latest-image-generation-model/)