---
title: "FAQ que a IA Cita: Como Escrever Perguntas e Respostas para o Google e os Assistentes"
seoTitle: "FAQ que a IA cita: como escrever as respostas"
description: "Google parou de exibir o rich snippet de FAQ em maio de 2026, mas o Gemini, o ChatGPT e o Copilot continuam lendo essas perguntas. Veja o formato certo."
category: tutoriais
tags:
  - AEO
  - Dados Estruturados
  - SEO
author: Redação Turbina IA
isFeatured: false
date: "2026-11-09"
coverImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80"
---

Em 7 de maio de 2026, o Google apagou um pedaço pequeno, mas visível, da própria página de resultados: o rich snippet de FAQ, aquele acordeão de perguntas que se abria direto na busca, parou de aparecer para qualquer site. A [documentação oficial de dados estruturados do Google](https://developers.google.com/search/docs/appearance/structured-data/faqpage) confirma a mudança — e também deixa um detalhe importante escondido no meio do texto técnico: o `FAQPage` em si não foi descontinuado. O Google só parou de desenhar o acordeão. Ele continua lendo a marcação para entender a página.

> **Resposta Rápida (TL;DR):** O Google não mostra mais o rich snippet de FAQ na busca desde maio de 2026, mas o schema `FAQPage` continua válido e os assistentes de IA (ChatGPT, Gemini, Copilot, Perplexity) seguem extraindo respostas de seções de perguntas e respostas bem formatadas. O que muda na prática: cada pergunta precisa virar um heading `###`, a resposta precisa ser direta e autossuficiente no primeiro parágrafo, e a mesma pergunta nunca pode se repetir em páginas diferentes do site.

Isso pegou muita gente de surpresa, porque durante anos a lógica foi simples: marcar a FAQ em JSON-LD, aparecer com o acordeãozinho no Google, ganhar espaço extra na página de resultados. Sem o rich result, parte do incentivo para manter essa seção bem escrita desapareceu — e é exatamente aí que está o erro. A seção de perguntas e respostas continua sendo um dos formatos mais fáceis de um sistema de IA ler, recortar e citar, com ou sem acordeão visual.

## O que realmente mudou em maio de 2026

A mudança não foi repentina. Já em agosto de 2023, o próprio [blog de buscas do Google havia restringido o rich result de FAQ](https://developers.google.com/search/blog/2023/08/howto-faq-changes) a sites institucionais, governamentais e de saúde bem estabelecidos — a maioria dos blogs e lojas já tinha perdido o acordeão três anos antes do desligamento final. O que aconteceu em 2026 foi o fim completo: nenhum site, de nenhum setor, recebe mais o snippet visual de FAQ na busca do Google, segundo reportagens que acompanharam a atualização da documentação, como a do [Search Engine Land](https://searchengineland.com/google-to-no-longer-support-faq-rich-results-476957) e a do [Search Engine Roundtable](https://www.seroundtable.com/google-drops-faq-rich-results-41298.html).

O ponto que costuma passar batido: isso é uma mudança de exibição, não de leitura. A [página de diretrizes gerais de dados estruturados do Google](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) não recua um milímetro nas regras sobre o que pode e não pode entrar num `FAQPage` — ela só deixou de prometer o selo visual como recompensa. Continuar marcando a FAQ em schema ainda ajuda o Google (e qualquer sistema que leia a mesma marcação) a entender que aquele bloco de texto é, de fato, uma pergunta com uma resposta — só que agora sem vitrine extra na SERP tradicional.

## Por que a IA ainda lê a sua FAQ, mesmo sem o acordeão

Um assistente como o ChatGPT ou o Gemini não navega pela sua página do jeito que uma pessoa navega. Ele varre o HTML em busca de blocos que respondam a uma pergunta específica sem precisar costurar frases de parágrafos diferentes. Uma seção de FAQ bem estruturada — pergunta curta em heading, resposta completa logo abaixo, sem depender do parágrafo anterior para fazer sentido — é exatamente o tipo de bloco que esse tipo de sistema consegue recortar com segurança.

É por isso que o formato da pergunta importa mais do que o rich snippet nunca importou. Quando a pergunta vem em `###` e a resposta começa respondendo (não "contextualizando"), o texto vira uma unidade que pode ser citada isoladamente, sem risco de sair pela metade. Esse princípio é o mesmo que guiou o [guia de dados estruturados para iniciantes](/blog/dados-estruturados-schema-para-iniciantes-o-que-article-faqpage-e-howto-realmente-fazem-em-2026) publicado aqui nesta semana: o schema não é decoração para o Google, é uma etiqueta que diz "isto aqui é uma resposta pronta" para qualquer leitor automatizado, humano ou não.

## O formato que funciona: H3 + resposta direta

A regra é simples de enunciar e fácil de quebrar na prática:

- **A pergunta é sempre um heading `###`** — nunca `**negrito**`, nunca um item de lista solto. Sem o heading, o rastreador do Google não consegue montar o schema `FAQPage` automaticamente, e um assistente de IA perde a pista visual de onde a pergunta começa e termina.
- **A resposta começa respondendo.** Primeira frase = a resposta. Contexto, ressalva e detalhe vêm depois, nunca antes.
- **Cada pergunta e resposta tem que se sustentar sozinha.** Se a resposta só faz sentido depois de ler o parágrafo anterior do artigo, ela não serve como FAQ — serve como parte do corpo do texto.
- **Linguagem de busca real.** Escreva a pergunta como alguém digitaria no Google ou perguntaria ao ChatGPT, não como um título de seção corporativo.

Na prática, dentro do Markdown de um artigo como este, isso vira:

```markdown
### O que é AEO?

AEO (Answer Engine Optimization) é a prática de estruturar conteúdo para
que buscadores de IA e mecanismos de resposta direta consigam extrair e
citar a informação, em vez de apenas indexar a página para cliques.
```

Esse mesmo padrão — pergunta em heading, resposta que não depende de nada antes dela — é o que diferencia uma FAQ que serve pra ser citada de uma FAQ decorativa.

## O JSON-LD mínimo (e por que ele ainda vale o esforço)

Mesmo sem o rich snippet, marcar a FAQ em `FAQPage` continua sendo o jeito mais direto de declarar, numa linguagem que máquina lê sem ambiguidade, que aquele bloco é uma pergunta com uma resposta. O esqueleto mínimo é este:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é AEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AEO é a prática de estruturar conteúdo para que buscadores de IA extraiam e citem a resposta diretamente."
      }
    }
  ]
}
```

Cada `Question` leva exatamente um `acceptedAnswer`. Não existe "pergunta com duas respostas possíveis" no schema — se o seu conteúdo tem nuance demais para isso, provavelmente ele pertence ao corpo do artigo, não à FAQ.

## O que não deve entrar na sua FAQ

Essa é a parte que mais gera problema, porque o impulso natural é tentar aproveitar a seção de FAQ para empurrar palavra-chave. As diretrizes do Google são específicas sobre o que conta como violação:

| Prática | Por que é um problema |
|---|---|
| Repetir a mesma pergunta e resposta em várias páginas do site | O [Google passou a desencorajar explicitamente esse padrão](https://www.searchenginejournal.com/google-discourages-repetitive-use-of-faq-structured-data-markup/352430) — e o mesmo texto repetido também confunde um assistente de IA sobre qual página é a fonte canônica da resposta |
| Marcar como FAQ um texto que não aparece visível na página | Viola a diretriz de conteúdo oculto; o schema precisa refletir exatamente o que o visitante vê, não um resumo paralelo pensado só para robôs |
| Usar a FAQ para menu de navegação, comentários de usuários ou enquetes | Não é esse o propósito do tipo `FAQPage` — e um assistente de IA tende a ignorar esse conteúdo por não reconhecer o padrão de pergunta-resposta real |
| Perguntas genéricas demais ("Sobre nós", "Contato") sem uma resposta factual | Não têm o que ser "citadas"; ocupam espaço sem funcionar como resposta extraível |

A regra de ouro, resumida pela própria [documentação de diretrizes gerais do Google](https://developers.google.com/search/docs/appearance/structured-data/sd-policies): a marcação estrutural tem que corresponder ao conteúdo real da página. Passar num validador de schema não significa que o uso está certo — só significa que a sintaxe está certa.

## Teste a sua própria FAQ antes de publicar

Antes de publicar uma seção nova, vale rodar a página pelo [Verificador de IA do Turbina IA](/verificador-ia): a ferramenta analisa se o conteúdo está no formato que um assistente consegue extrair — heading certo na pergunta, resposta autossuficiente, schema coerente com o texto visível — e devolve uma nota de 0 a 100 com o que falta ajustar. É gratuito e não exige cadastro.

Se você ainda está decidindo o que marcar como FAQ e o que marcar como `HowTo` ou `Article`, o [glossário do site](/glossario) tem a definição rápida de cada termo de AEO e GEO usado aqui. E para entender o conjunto maior de técnicas — não só a FAQ, mas título, parágrafo de abertura e fontes — o [guia de como aparecer nas respostas do ChatGPT e do Gemini](/blog/como-aparecer-nas-respostas-do-chatgpt) cobre o resto do terreno.

## Perguntas Frequentes

### O Google ainda lê o schema FAQPage depois de maio de 2026?

Sim. O Google parou de exibir o rich snippet visual na busca, mas a [documentação oficial](https://developers.google.com/search/docs/appearance/structured-data/faqpage) não removeu o suporte ao tipo `FAQPage` — ele continua sendo processado para entender a estrutura da página, só sem o selo extra na página de resultados.

### Preciso remover o JSON-LD de FAQ do meu site?

Não. Remover a marcação não traz benefício nenhum e tira uma informação estrutural útil tanto para o Google quanto para assistentes de IA que leem a mesma marcação. A única mudança prática é não esperar mais o acordeão visual na busca tradicional.

### Qual é o erro mais comum ao montar uma seção de FAQ?

Repetir a mesma pergunta e resposta em páginas diferentes do site. O [Google já havia sinalizado esse problema em 2023](https://www.searchenginejournal.com/google-discourages-repetitive-use-of-faq-structured-data-markup/352430), e ele continua valendo: cada FAQ deve responder a perguntas específicas daquela página, não um bloco genérico copiado em massa.

## Fontes e Referências

- [FAQPage structured data (Google Search Central)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [General structured data guidelines (Google Search Central)](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Changes to HowTo and FAQ rich results (Google Search Central Blog)](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- [Google to No Longer Support FAQ Rich Results (Search Engine Land)](https://searchengineland.com/google-to-no-longer-support-faq-rich-results-476957)
- [Google Search Drops FAQ Rich Results In Search & Search Console (Search Engine Roundtable)](https://www.seroundtable.com/google-drops-faq-rich-results-41298.html)
- [Google Discourages Repetitive Use Of FAQ Structured Data Markup (Search Engine Journal)](https://www.searchenginejournal.com/google-discourages-repetitive-use-of-faq-structured-data-markup/352430)