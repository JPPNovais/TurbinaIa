---
title: "Dados Estruturados (Schema) para Iniciantes: o Que Article, FAQPage e HowTo Realmente Fazem em 2026"
seoTitle: "Dados estruturados (Schema): guia para iniciantes 2026"
description: "Guia prático de Schema.org: o que Article, FAQPage e HowTo fazem de verdade no Google e nas IAs em 2026, com o JSON-LD mínimo para copiar."
category: tutoriais
tags:
  - Schema
  - SEO
  - AEO
author: Redação Turbina IA
isFeatured: false
date: "2026-11-08"
coverImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
---

Em 7 de maio de 2026, o Google atualizou sua documentação de dados estruturados para avisar que os resultados ricos de FAQ tinham deixado de aparecer na busca — inclusive para os sites de governo e saúde que ainda tinham esse privilégio desde 2023. Dois dias depois, em 9 de maio, entrou uma nota formal de descontinuação na mesma página. Se você chegou até aqui depois de ler em algum lugar que "colocar Schema de FAQ garante o rich snippet", esse é o primeiro mito que precisa cair.

> **Resposta Rápida (TL;DR):** Schema (dados estruturados em JSON-LD) é um bloco de código que descreve o conteúdo da página para máquinas. Ele ajuda o Google a entender o que está ali, mas não garante rich snippet — o FAQ rich result acabou em maio de 2026 e o HowTo rich result já tinha sido descontinuado no desktop em 2023. Para IAs como ChatGPT e AI Overviews, um estudo da Ahrefs com 1.885 páginas mostrou efeito quase nulo. O schema ainda vale a pena, mas por outro motivo: ele organiza a página para humanos e máquinas lerem a mesma coisa.

Esse histórico muda a forma como vale a pena pensar em Schema em 2026. Ele deixou de ser "cole esse código e ganhe destaque no Google" e passou a ser outra coisa: um jeito de deixar explícito, para qualquer sistema que leia a página, o que é título, o que é pergunta, o que é resposta e o que é passo a passo. Esse artigo explica os três tipos mais usados em blog — Article, FAQPage e HowTo — o que cada um ainda faz de verdade e o JSON-LD mínimo para copiar.

## O que é dados estruturados, em uma frase

Dados estruturados são um vocabulário padronizado, mantido pela colaboração [Schema.org](https://schema.org/Article), que descreve o conteúdo de uma página em formato de dados — não em texto solto. Em vez de o Google (ou um modelo de linguagem) ter que "adivinhar" que um bloco de texto é a pergunta de uma FAQ, o JSON-LD diz isso de forma explícita, com um campo chamado `mainEntity` apontando para cada `Question`.

O Google aceita três formatos técnicos — JSON-LD, Microdata e RDFa — mas recomenda explicitamente o JSON-LD, segundo as [diretrizes gerais de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) do Search Central. A regra mais importante dessas diretrizes é simples e constantemente ignorada: o que está no JSON-LD precisa corresponder ao que está visível na página para quem lê. Marcar algo que não aparece no HTML visível pode gerar uma ação manual que remove a elegibilidade da página para resultados ricos.

## FAQPage: o que ainda funciona e o que já não funciona

Até agosto de 2023, qualquer site podia ganhar o acordeão de perguntas e respostas na busca do Google com `FAQPage`. Naquele mês, o Google [limitou esse resultado rico](https://developers.google.com/search/blog/2023/08/howto-faq-changes) a "sites de governo e saúde bem estabelecidos e confiáveis" — uma faixa bem mais estreita do que a maioria dos blogs. Em maio de 2026, mesmo essa faixa perdeu o recurso: o rich result de FAQ simplesmente parou de aparecer na busca, para qualquer tipo de site.

O que isso significa na prática? Que marcar sua página com `FAQPage` não é mais uma aposta em aparecer com destaque visual no Google. Mas o tipo de dado em si não foi descontinuado — a [documentação oficial de FAQ](https://developers.google.com/search/docs/appearance/structured-data/faqpage) continua no ar, e nada impede que você use o schema. Só não espere o acordeão visual de volta.

O JSON-LD mínimo de uma FAQPage com duas perguntas é este:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é Schema.org?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É um vocabulário padronizado para descrever o conteúdo de uma página em formato de dados, usado por buscadores e por sistemas de IA para entender o que está na página."
      }
    },
    {
      "@type": "Question",
      "name": "Marcar FAQ com Schema ainda vale a pena em 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vale pela organização do conteúdo, não pelo rich snippet: o Google parou de exibir o resultado visual de FAQ em maio de 2026."
      }
    }
  ]
}
```

## HowTo: o resultado rico que já morreu há três anos

Se o FAQ teve uma vida mais longa, o `HowTo` teve o fim antecipado. Na mesma leva de mudanças de agosto de 2023, o Google primeiro limitou o resultado rico de HowTo ao celular — e, pouco depois, em 13 de setembro de 2023, [removeu completamente](https://developers.google.com/search/blog/2023/08/howto-faq-changes) o recurso também do desktop. Passados mais de três anos, continua assim: não existe mais resultado rico de HowTo na busca do Google, em nenhuma plataforma.

Isso não significa que o tipo `HowTo` tenha desaparecido do Schema.org — ele [ainda está documentado](https://schema.org/HowTo) como uma forma de descrever instruções organizadas em uma sequência de passos, cada um representado por um `HowToStep`. E, se o seu conteúdo é genuinamente um passo a passo, continua fazendo sentido estruturar assim — só não é mais pelo selo visual na busca.

## Article: o schema que o Google recomenda, mas não exige

Diferente de FAQ e HowTo, o `Article` nunca teve propriedades obrigatórias na documentação oficial do Google — a orientação sempre foi "inclua o máximo de propriedades recomendadas que fizerem sentido para a sua página", não uma lista fechada de campos que precisam existir. Ainda assim, três campos aparecem como recomendação prática recorrente: `headline` (o título), `datePublished` (a data de publicação) e `author` (quem escreveu). Sem eles, a página não fica inválida, mas perde elegibilidade para alguns resultados ricos específicos que dependem dessas informações.

Um exemplo mínimo e funcional:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Dados Estruturados (Schema) para Iniciantes",
  "datePublished": "2026-11-08",
  "author": {
    "@type": "Organization",
    "name": "Redação Turbina IA"
  }
}
```

## E a promessa de "citação por IA"? Os dados dizem outra coisa

A onda mais recente de interesse por Schema não vem mais do Google clássico, vem da promessa de que marcar a página ajudaria o ChatGPT, o AI Mode e o AI Overviews a citar o conteúdo com mais frequência — o que ficou conhecido como AEO (Answer Engine Optimization). Em 12 de maio de 2026, a [Ahrefs publicou um estudo controlado](https://ahrefs.com/blog/schema-ai-citations/) desenhado especificamente para testar essa hipótese: acompanhou 1.885 páginas que adicionaram JSON-LD entre agosto de 2025 e março de 2026, comparando cada uma com páginas de controle de outros domínios que nunca usaram schema e tinham nível parecido de citação antes do teste.

O resultado foi, nas palavras da própria Ahrefs, a ausência de um ganho relevante em qualquer plataforma: a variação ficou em torno de +2,2% no ChatGPT, +2,4% no AI Mode e -4,6% no AI Overviews — estatisticamente significativo, mas pequeno demais para justificar a promessa que circula em blogs de SEO. O motivo pelo qual tanta gente associa schema a citação de IA, segundo a própria Ahrefs, é mais simples: uma análise anterior da empresa, com 6 milhões de URLs, já tinha mostrado que páginas citadas por IA eram muito mais propensas a ter JSON-LD — mas isso reflete a qualidade geral do site, não um efeito causal do schema em si.

Isso não quer dizer que schema seja inútil para IA. O próprio Google afirma que não existe marcação especial necessária para aparecer no AI Overviews ou no AI Mode, mas que a engine usa dados estruturados, entre outros sinais, para entender o conteúdo da página — é um sinal de compreensão, não um atalho de citação. O [guia de AEO e GEO do Turbina IA](/blog/o-que-e-aeo-geo-como-aparecer-nas-respostas-de-ia) detalha os outros fatores que pesam mais do que o schema isolado, e o texto sobre [como aparecer nas respostas do ChatGPT e do Gemini](/blog/como-aparecer-nas-respostas-do-chatgpt) foca especificamente nas técnicas que, segundo os próprios dados, importam mais do que o JSON-LD.

## Tabela-resumo: o que cada schema ainda entrega

| Tipo de Schema | Resultado rico no Google | Status em nov/2026 | Vale a pena usar? |
|---|---|---|---|
| `FAQPage` | Acordeão de perguntas | Descontinuado para todos os sites desde 07/05/2026 | Sim, para organizar a FAQ — não pelo rich snippet |
| `HowTo` | Passo a passo com imagens | Descontinuado no desktop desde 13/09/2023 | Só se o conteúdo for mesmo um passo a passo |
| `Article` | Carrossel de notícias (AMP/Top Stories) | Ativo, sem propriedades obrigatórias | Sim, com `headline`, `datePublished` e `author` |

## Como testar se o seu JSON-LD está correto

O Google mantém o Rich Results Test e a ferramenta de Inspeção de URL dentro do Search Console para validar tecnicamente a marcação, conforme descrito nas [diretrizes gerais de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies). Elas pegam a maioria dos erros de sintaxe, mas não substituem a regra de ouro: tudo que está no JSON-LD precisa estar visível no HTML da página para quem lê. Se você escreve prompts para gerar conteúdo e quer cruzar preço e limite de uso entre ferramentas de IA, o [comparador de IAs](/comparador) e a [calculadora de custos de API](/calculadora) do Turbina IA ajudam a decidir qual vale a assinatura antes de automatizar esse tipo de marcação em escala.

## Perguntas Frequentes

### Schema.org e dados estruturados são a mesma coisa?

Não exatamente. Schema.org é o vocabulário — a lista de tipos como `Article`, `FAQPage` e `HowTo` e suas propriedades, descrita em termos como os do [glossário de IA do Turbina IA](/glossario). Dados estruturados é o conceito mais amplo de descrever conteúdo em formato de dados; JSON-LD é o formato técnico recomendado pelo Google para escrever esse vocabulário dentro da página.

### Preciso de Schema para aparecer no ChatGPT ou no AI Overviews?

Não é obrigatório. O próprio Google diz que não há marcação especial exigida para o AI Overviews ou o AI Mode, e o estudo da Ahrefs com 1.885 páginas encontrou efeito pequeno e misto ao adicionar JSON-LD isoladamente. O que pesa mais é a clareza do conteúdo em si — resposta direta, estrutura em tópicos e fonte confiável.

### Ainda vale a pena usar FAQPage e HowTo mesmo sem o rich snippet?

Vale, mas por outro motivo: os dois tipos continuam documentados no Schema.org e ajudam a organizar o conteúdo de forma explícita para qualquer sistema que leia a página. O que não existe mais é a garantia do selo visual na busca do Google — isso acabou em 2023 para HowTo e em maio de 2026 para FAQ.

## Fontes e Referências

- [Schema.org: Article](https://schema.org/Article)
- [Schema.org: HowTo](https://schema.org/HowTo)
- [Google Search Central: diretrizes gerais de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google Search Central: FAQ (FAQPage, Question, Answer) structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Google Search Central: mudanças em HowTo e FAQ rich results (ago/2023)](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- [Ahrefs: Does Schema Markup Increase AI Citations?](https://ahrefs.com/blog/schema-ai-citations/)
- [O Que é AEO e GEO? Como Aparecer nas Respostas das IAs](/blog/o-que-e-aeo-geo-como-aparecer-nas-respostas-de-ia)