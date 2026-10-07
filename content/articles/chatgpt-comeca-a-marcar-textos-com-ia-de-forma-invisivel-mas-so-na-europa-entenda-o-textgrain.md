---
title: "ChatGPT Começa a Marcar Textos com IA de Forma Invisível, mas Só na Europa: Entenda o textGrain"
description: "OpenAI liga marca-d'água invisível no ChatGPT e no Codex na Europa. Veja como funciona o textGrain e compare com Claude e Gemini."
category: ferramentas
tags:
  - ChatGPT
  - OpenAI
  - Marca-d'água de IA
  - Claude
  - Gemini
author: Redação Turbina IA
isFeatured: false
date: "2026-10-07"
coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
---

Na segunda-feira (5), a OpenAI fez algo que vinha evitando desde pelo menos 2024: ligou, de fato, uma marca-d'água invisível nos textos que saem do ChatGPT. A tecnologia se chama textGrain e começou a funcionar no ChatGPT e no Codex para usuários da União Europeia, segundo [a OpenAI confirmou à TechCrunch](https://techcrunch.com/2026/10/05/openai-will-start-watermarking-chatgpts-text-in-the-eu/). Não é um aviso visível, nem um rodapé, nem um ícone. É um padrão estatístico escondido na escolha das palavras, que só um detector da própria OpenAI consegue ler.

> **Resposta Rápida (TL;DR):** Desde 5 de outubro, a OpenAI ativa por padrão uma marca-d'água invisível (textGrain) em textos do ChatGPT e do Codex para usuários da União Europeia, cumprindo a lei europeia de IA. Fora da Europa, o recurso só existe como opção para desenvolvedores via API, desligada por padrão. A Anthropic já fazia algo parecido no Claude há meses, e o Google tem sua própria versão no Gemini — nenhuma das três é à prova de tradução ou reescrita.

## O que é o textGrain, afinal

A explicação técnica é mais simples do que parece. Toda vez que um modelo de linguagem escreve uma frase, ele escolhe a próxima palavra entre várias opções estatisticamente prováveis. O textGrain intervém discretamente nessa escolha: em vez de deixar a palavra "mais provável" vencer sempre do mesmo jeito, ele favorece um subconjunto específico de alternativas, de acordo com [o que o Tecnoblog apurou](https://tecnoblog.net/noticias/openai-anuncia-marca-dagua-invisivel-para-textos-do-chatgpt/). O resultado parece um texto absolutamente normal para quem lê — sem caracteres estranhos, sem espaçamento diferente — mas carrega um padrão que um classificador treinado para isso consegue identificar com alta taxa de acerto.

Não é a primeira vez que a ideia aparece. Pesquisadores de marca-d'água para modelos de linguagem publicam sobre o tema desde pelo menos 2023, testando formas de alterar a distribuição de probabilidade de tokens sem comprometer a qualidade do texto gerado. A diferença agora é que a OpenAI passou da pesquisa para a produção, ligando o recurso para milhões de usuários reais.


![Imagem ilustrativa sobre ChatGPT Começa a Marcar Textos com IA de Forma Invisível, mas Só na Europa: Entenda o textGrain](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)

## Por que a Europa primeiro

A resposta curta é regulatória. O [Comparador de IAs](/comparador) do Turbina IA já mostra como cada empresa lida com transparência de forma diferente, e esse é um caso claro: a Lei de IA da União Europeia (AI Act) exige que serviços de IA generativa sinalizem conteúdo sintético de um jeito que ferramentas de verificação consigam identificar. Segundo a [TechCrunch](https://techcrunch.com/2026/10/05/openai-will-start-watermarking-chatgpts-text-in-the-eu/), essa obrigação de transparência passou a valer de fato em agosto, e é ela que empurrou a OpenAI a destravar uma tecnologia que estava pronta havia tempo, mas engavetada por receio de efeitos colaterais.

Fora do bloco europeu, o textGrain não liga automaticamente para ninguém. Desenvolvedores de qualquer país podem ativá-lo via API desde o dia 5, mas a opção vem desligada por padrão — quem quiser marcar o texto gerado pela própria aplicação precisa pedir isso explicitamente. Para o usuário comum do [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) no Brasil, nada muda por enquanto: nem a marca-d'água liga sozinha, nem há previsão anunciada de que isso aconteça.

## O que muda na prática para quem usa a ferramenta

Para quem está na União Europeia, a mudança é automática e silenciosa — o texto continua saindo do jeito que sempre saiu, só que agora carrega a assinatura estatística por padrão, em todos os planos do ChatGPT e do Codex. Não há aviso na tela, não há opção de desligar pelo app, pelo menos não nesta primeira fase.

O detector que lê essa marca, por outro lado, está longe de ser público. A OpenAI liberou acesso inicial só para pesquisadores e organizações aprovadas, que vão testar a confiabilidade do sistema antes de qualquer abertura maior. Isso significa que, mesmo na Europa, um professor ou editor comum ainda não tem como colar um texto numa ferramenta e saber se ele saiu do ChatGPT — essa capacidade, por ora, fica concentrada na própria OpenAI e em quem ela escolher.


![Imagem ilustrativa sobre ChatGPT Começa a Marcar Textos com IA de Forma Invisível, mas Só na Europa: Entenda o textGrain](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80)

## O Claude já fazia isso — e foi mais rápido para abrir o detector

A comparação com a Anthropic é inevitável, e não por acaso: o Claude adotou uma variante do SynthID Text, método que o Google DeepMind publicou na Nature em 2024, para marcar seus próprios textos gerados. A diferença mais relevante está no detector. Enquanto a OpenAI mantém o acesso trancado a parceiros selecionados, a Anthropic anunciou uma Watermark Detection API que permite a terceiros verificar diretamente se um texto saiu do Claude, [segundo o The Decoder](https://the-decoder.com/anthropic-announces-watermark-detection-api-that-will-let-third-parties-detect-claudes-ai-texts/).

Isso não torna o sistema do Claude infalível. O mecanismo funciona pela mesma lógica de viés estatístico na escolha de palavras, e carrega as mesmas fragilidades: textos curtos, código e respostas muito factuais — onde há pouca margem para variar o vocabulário — deixam um sinal mais fraco e mais fácil de perder. Se você quer entender a diferença entre esse tipo de verificação técnica e os termos mais comuns do setor, o [Glossário de IA](/glossario) do Turbina IA explica conceitos como esse em linguagem direta.

## E o Gemini, do Google?

O Google foi quem abriu essa frente primeiro. O SynthID Text está integrado ao Gemini desde 2024, e a empresa já testou o sistema em 20 milhões de prompts, metade recebendo respostas marcadas e metade não, [conforme apurou o TechRadar](https://www.techradar.com/pro/googles-new-ai-tool-lets-developers-watermark-and-detect-text-generated-by-ai-models). A diferença está no alcance: o Google oferece um portal de verificação, o SynthID Detector, capaz de analisar texto, imagem, áudio e vídeo — mas o acesso também é restrito, liberado a testers iniciais e a uma lista de espera para jornalistas e pesquisadores.

Na prática, as três empresas chegaram a soluções tecnicamente parecidas por caminhos diferentes, e todas mantêm o verificador mais poderoso fora do alcance do público geral. Quem quiser acompanhar essas mudanças de versão em versão pode usar o [Monitor de Modelos](/changelog) do site para não perder lançamentos como esse.

### Como as três abordagens se comparam

| | OpenAI (ChatGPT/Codex) | Anthropic (Claude) | Google ([Gemini](/blog/prompts-para-gemini)) |
|---|---|---|---|
| Tecnologia | textGrain | Variante do SynthID Text | SynthID Text (original) |
| Status atual | Ligado por padrão só na UE; API opcional global | Ativo, com expansão contínua | Ativo desde 2024 |
| Detector aberto a terceiros | Não — só pesquisadores aprovados | Sim, via Watermark Detection API | Parcial — lista de espera |
| Funciona em texto curto/código | Limitado | Limitado | Limitado |
| Resiste a tradução/reescrita | Não | Não | Não |

## Os limites que nenhuma marca-d'água resolve

Nenhuma das três tecnologias sobrevive a um teste simples: traduzir o texto para outro idioma e voltar, ou pedir a um segundo modelo de IA que reescreva o conteúdo, apaga o padrão estatístico na prática. O [Tecnoblog](https://tecnoblog.net/noticias/openai-anuncia-marca-dagua-invisivel-para-textos-do-chatgpt/) descreve essa fragilidade como uma das razões pelas quais a OpenAI demorou tanto para destravar o recurso — a empresa não queria vender uma falsa sensação de segurança a escolas e editoras que passassem a confiar demais num selo que um aluno mais atento consegue contornar em poucos cliques.

Há também um efeito colateral conhecido: textos muito curtos, respostas puramente factuais ou trechos de código têm pouca variação lexical possível, o que deixa a marca mais fraca e aumenta o risco de falsos negativos — ou, pior, de acusar como "gerado por IA" um texto que um humano escreveu de um jeito que por acaso coincide com o padrão. É esse tipo de risco que mantém os detectores das três empresas fechados ao público por enquanto, mesmo com a pressão regulatória europeia.

## O que fica para o leitor brasileiro

Por ora, nada muda para quem assina ChatGPT, Claude ou Gemini no Brasil — a ativação automática é europeia, e o Brasil não tem data anunciada para entrar nessa lista. O que vale observar é a direção: depois de anos resistindo a lançar essa tecnologia por medo de perder usuários, a OpenAI foi empurrada por lei, não por iniciativa própria, e isso tende a se repetir em outros mercados conforme regulações parecidas avancem. Para profissionais que usam IA para escrever e relatam preocupação com detecção de plágio ou autoria, o recado prático é que nenhuma marca-d'água atual resolve o problema de forma definitiva — ela só torna a detecção um pouco mais provável, nunca garantida.

## Perguntas Frequentes

### O ChatGPT já marca meus textos no Brasil?

Não. O textGrain está ligado por padrão apenas para usuários do ChatGPT e do Codex na União Europeia, desde 5 de outubro de 2026. No Brasil e no restante do mundo, a marca-d'água só existe como opção manual para desenvolvedores que usam a API da OpenAI, e vem desligada por padrão.

### É possível verificar se um texto foi escrito pelo ChatGPT?

Hoje, não de forma aberta ao público. A OpenAI liberou o detector do textGrain apenas para pesquisadores e organizações aprovadas. A Anthropic é a única das três grandes empresas que já oferece uma API de detecção para terceiros no caso do Claude; o detector do Google para o Gemini está em lista de espera.

### A marca-d'água funciona mesmo depois que eu edito o texto?

De forma limitada. Pequenas edições tendem a preservar parte do padrão estatístico, mas traduzir o texto para outro idioma, reescrevê-lo com outro modelo de IA ou trabalhar com trechos muito curtos e factuais reduz bastante a confiabilidade da detecção, segundo os próprios relatos técnicos da OpenAI, da Anthropic e do Google.

## Fontes e Referências

- [OpenAI will start watermarking ChatGPT's text in the EU - TechCrunch](https://techcrunch.com/2026/10/05/openai-will-start-watermarking-chatgpts-text-in-the-eu/)
- [OpenAI anuncia marca-d'água invisível para textos do ChatGPT - Tecnoblog](https://tecnoblog.net/noticias/openai-anuncia-marca-dagua-invisivel-para-textos-do-chatgpt/)
- [ChatGPT copia o Claude e também começa a "carimbar" textos feitos por sua IA - Canaltech](https://canaltech.com.br/inteligencia-artificial/chatgpt-copia-o-claude-e-tambem-comeca-a-carimbar-textos-feitos-por-sua-ia/)
- [Anthropic announces Watermark Detection API that will let third parties detect Claude's AI texts - The Decoder](https://the-decoder.com/anthropic-announces-watermark-detection-api-that-will-let-third-parties-detect-claudes-ai-texts/)
- [Google's new AI tool lets developers watermark and detect text generated by AI models - TechRadar](https://www.techradar.com/pro/googles-new-ai-tool-lets-developers-watermark-and-detect-text-generated-by-ai-models)