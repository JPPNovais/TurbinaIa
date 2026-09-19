---
title: "Dados Estruturados (Schema) em 2026: o Guia Para Iniciantes"
description: "O que são dados estruturados, o que o Google já aposentou e o que a evidência de 2026 realmente mostra sobre schema e citações em IA."
category: tutoriais
tags:
  - Dados Estruturados
  - Schema.org
  - JSON-LD
  - SEO
  - AEO
  - Google Search
author: Redação Turbina IA
isFeatured: false
date: "2026-09-19"
coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80"
---
Existe uma promessa circulando há dois anos em toda apresentação sobre otimização para IA: coloque dados estruturados no seu site e o [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026), o Perplexity e as respostas de IA do Google passarão a citar você. É uma ideia sedutora, fácil de vender e, como mostrou o maior teste controlado já publicado sobre o assunto, largamente falsa do jeito que costuma ser contada.

Isso não significa que dados estruturados sejam inúteis — significa que quase todo mundo está prometendo a coisa errada. Este guia explica o que eles realmente são, o que o Google aposentou em 2025 e 2026, o que a evidência mostra, e como implementar do jeito que ainda entrega resultado.

**Resposta Rápida (TL;DR):** Dados estruturados são um bloco de código JSON-LD que descreve, em vocabulário padronizado do [Schema.org](https://schema.org), o que existe na sua página. Eles continuam valendo a pena para ficar **elegível a rich results** que sobreviveram (Product, Review, Article, Breadcrumb, Organization) e para eliminar ambiguidade sobre autor, data e preço. O que eles **não** fazem, segundo um estudo da Ahrefs com 1.885 páginas, é aumentar citações em IA por conta própria. E o rich result de FAQ, o mais popular entre iniciantes, foi descontinuado pelo Google em 7 de maio de 2026.

## O Que São Dados Estruturados (e o Que Eles Não São)

Dados estruturados são um trecho de código que você adiciona a uma página para declarar, de forma que a máquina entenda sem adivinhar, o que aquela página contém: que isto é um artigo, que o autor é fulano, que foi publicado em tal data, que o produto custa tanto e tem nota 4,7.

O vocabulário usado é o do Schema.org, um projeto mantido em conjunto por Google, Microsoft, Yahoo e Yandex desde 2011. Ele define os "tipos" (`Article`, `Product`, `Recipe`, `Organization`) e as propriedades que cada um aceita (`author`, `datePublished`, `price`).

O formato recomendado é o **JSON-LD**: um bloco `<script type="application/ld+json">` que fica separado do HTML visível. Formatos antigos como Microdata e RDFa exigiam espalhar atributos pelas tags do conteúdo, o que tornava qualquer manutenção um pesadelo. O JSON-LD é o único formato que o Google recomenda explicitamente hoje.

O que dados estruturados **não** são:

- **Não são um fator de ranqueamento.** O Google nunca afirmou que marcação melhora posição. Ela torna a página *elegível* a um formato de exibição — coisa diferente.
- **Não são um atalho para conteúdo ruim.** Marcação descrevendo uma página fraca continua descrevendo uma página fraca.
- **Não substituem o texto.** Toda informação na marcação precisa estar visível na página. Isso é regra explícita do Google, e a violação é motivo de penalidade manual.


![Imagem ilustrativa sobre Dados Estruturados (Schema) em 2026: o Guia Para Iniciantes](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)

## O Estudo Que Derrubou o Mito das Citações de IA

Em 2026 a Ahrefs publicou o teste que faltava. A equipe [acompanhou 1.885 páginas que adicionaram JSON-LD](https://ahrefs.com/blog/schema-ai-citations/) entre agosto de 2025 e março de 2026, comparou com um grupo de controle de cerca de 4.000 páginas e mediu a variação de citações no Google AI Overviews, no AI Mode e no ChatGPT.

O resultado: **nenhum ganho relevante em nenhuma das plataformas**. No AI Overviews, as páginas que adicionaram marcação tiveram uma queda de 4,6% em citações em relação ao controle.

O detalhe mais instrutivo do estudo é o que ele revela sobre a estatística que todo mundo cita. É verdade que páginas citadas por IA têm cerca de três vezes mais chance de ter JSON-LD que páginas não citadas. Só que essa é uma correlação clássica sem causalidade: páginas com marcação bem-feita tendem a pertencer a sites grandes, tecnicamente cuidadosos e com autoridade — e são esses atributos, não o bloco de código, que trazem a citação. Como resume a [Search Engine Journal ao cobrir o teste](https://www.searchenginejournal.com/schema-markup-didnt-move-ai-citations-in-ahrefs-test/574568/), se uma página já está no conjunto considerado pelos modelos, acrescentar schema não a empurra para cima.

Um experimento independente da [Otterly.ai](https://otterly.ai/blog/schema-markup-real-impact-ai-search/) chegou a uma conclusão compatível: o efeito da marcação sobre citações no Perplexity é sobretudo indireto, porque ela reforça sinais tradicionais de SEO, e não porque funcione como uma via de alimentação dedicada aos modelos.

A leitura honesta, portanto, é esta: **dados estruturados são higiene técnica, não alavanca de visibilidade em IA**. Quem quer ser citado por motores de resposta precisa trabalhar as coisas que realmente movem o ponteiro — cobertura de um assunto que ninguém cobriu bem, resposta direta logo no início do texto, dado próprio, fonte verificável. É o que tratamos em detalhe no guia sobre [AEO e GEO: como aparecer nas respostas das IAs](/blog/o-que-e-aeo-geo-como-aparecer-nas-respostas-de-ia).

## O Que o Google Já Aposentou

Esta é a parte que pega quem aprendeu SEO há três anos e não acompanhou as mudanças. A lista de tipos suportados encolheu bastante.

**Junho de 2025 — sete tipos retirados de uma vez.** O Google anunciou a aposentadoria de Book Actions, Course Info, Claim Review, Estimated Salary, Learning Video, Special Announcement e Vehicle Listing.

**7 de maio de 2026 — o fim do rich result de FAQ.** Este é o grande. O sanfonado de perguntas e respostas que aparecia abaixo do resultado deixou de ser exibido para a esmagadora maioria dos sites. O Google colocou um aviso de descontinuação no topo da [documentação oficial do FAQPage](https://developers.google.com/search/docs/appearance/structured-data/faqpage) e removeu, em junho, o filtro de aparência e o relatório do Search Console; em agosto, os dados saíram também da API.

Vale separar bem duas coisas que costumam ser confundidas: **o Google descontinuou o recurso de exibição, não a marcação**. `FAQPage` continua sendo um tipo válido do Schema.org, o Google segue lendo o bloco para entender a página, e outros rastreadores — inclusive os de motores de resposta — continuam processando. Manter a marcação não causa problema algum. Só não espere mais o sanfonado na busca.

**O que continua rendendo rich result:** Product (com estrelas), Review e AggregateRating, Article/NewsArticle/BlogPosting, Recipe, Video, Event, Organization, LocalBusiness e BreadcrumbList. Se o seu site é de conteúdo, os que importam na prática são **Article, BreadcrumbList e Organization**.


![Imagem ilustrativa sobre Dados Estruturados (Schema) em 2026: o Guia Para Iniciantes](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)

## Como Implementar: JSON-LD na Prática

Um bloco de `Article` mínimo e correto se parece com isto:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Título exatamente como aparece na página",
  "description": "Resumo curto, o mesmo da meta description.",
  "datePublished": "2026-09-19",
  "dateModified": "2026-09-19",
  "inLanguage": "pt-BR",
  "author": {
    "@type": "Person",
    "name": "Nome de quem escreveu"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Nome do site",
    "logo": {
      "@type": "ImageObject",
      "url": "https://seusite.com.br/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://seusite.com.br/url-desta-pagina"
  }
}
</script>
```

Três coisas que fazem diferença e quase sempre são ignoradas:

**Use tipos de valor corretos.** Esta é a fonte silenciosa de erro mais comum. Campos numéricos precisam de número. `"wordCount": "8 min de leitura"` é inválido — o campo espera um inteiro, e o validador simplesmente descarta a propriedade sem quebrar nada visível. Duração se escreve em ISO 8601 (`"timeRequired": "PT11M"`), datas em `YYYY-MM-DD`. O erro nunca aparece como erro; a informação só deixa de contar.

**Mantenha `dateModified` verdadeiro.** É o campo que sinaliza revisão real. Atualizá-lo sem ter mudado nada no conteúdo é o tipo de sinal que perde valor rápido quando os rastreadores comparam com o texto que encontram.

**Ligue as entidades.** Um `Organization` declarado uma vez no site, referenciado por `@id` nos artigos, vale mais que dez blocos soltos se contradizendo. Coerência entre páginas é o que constrói uma identidade legível por máquina.

Para validar, use o Rich Results Test do Google (mostra que formatos a página pode ganhar) e o Schema Markup Validator do próprio Schema.org (aponta erro de sintaxe e de tipo, inclusive nos tipos que o Google não usa). Se quiser uma leitura mais ampla de como a sua página se comporta diante de motores de resposta, o [verificador de IA gratuito do Turbina IA](/verificador-ia) dá uma nota e um checklist por URL.

## O Erro Que Invalida Tudo

Vale insistir porque é o motivo mais comum de penalidade manual relacionada a dados estruturados: **a marcação precisa descrever o que está visível na página**.

Declarar uma nota `AggregateRating` de 4,9 sem que existam avaliações exibidas, marcar um preço promocional que a página não mostra, criar um `FAQPage` com perguntas que não aparecem no texto — tudo isso é considerado spam de dados estruturados. A punição não é o rich result sumir; é uma ação manual que pode afetar o site inteiro.

A regra prática é simples: escreva a página primeiro, marque depois, e marque apenas o que um leitor humano consegue ver.

## Por Onde Começar

Se você está começando agora, esta ordem entrega o máximo com o mínimo de trabalho:

1. **`Organization` no site inteiro**, com nome, logo, URL e perfis sociais em `sameAs`. Declare uma vez, no layout.
2. **`BlogPosting` ou `Article` em cada conteúdo**, com autor, `datePublished` e `dateModified` corretos.
3. **`BreadcrumbList`** em toda página interna — é barato, ainda rende exibição na SERP e melhora a leitura da arquitetura do site.
4. **Valide** no Rich Results Test e corrija os tipos de valor.
5. **Só então** avalie tipos específicos do seu nicho (Product, Recipe, Event).

Se você usa WordPress, plugins como Yoast e Rank Math cobrem os três primeiros itens com pouca configuração. Se o site é próprio, gerar o JSON-LD no template é trivial — e preferível, porque o dado sai direto da fonte, sem risco de divergir do que a página exibe.

E uma expectativa calibrada para fechar: dados estruturados bem-feitos vão deixar sua página elegível a formatos melhores na SERP e tornar seus fatos inequívocos para qualquer máquina que os leia. Não vão colocar você nas respostas do ChatGPT por si sós. Para isso, a resposta continua sendo conteúdo que merece ser citado — e, se o seu tema é IA, vale conhecer as [ferramentas](/ferramentas) e o [glossário](/glossario) que mantemos atualizados por aqui.

## Perguntas Frequentes

### Dados estruturados melhoram meu ranqueamento no Google?

Não diretamente. O Google nunca tratou marcação como fator de ranqueamento. O que ela faz é tornar a página elegível a formatos de exibição diferenciados (estrelas, breadcrumb, cartão de artigo), que podem aumentar a taxa de cliques. O ganho, quando existe, vem do CTR — não de uma posição melhor.

### Devo remover a marcação de FAQ agora que o Google aposentou o recurso?

Não precisa. O Google encerrou a exibição em 7 de maio de 2026, mas `FAQPage` continua sendo um tipo válido do Schema.org, segue sendo lido para entender a página e continua processado por outros rastreadores, incluindo os de motores de resposta. Manter não causa problema. O que mudou é a expectativa: não haverá mais sanfonado na busca.

### Schema markup aumenta minhas citações no ChatGPT e no Perplexity?

A melhor evidência disponível diz que não, por conta própria. O estudo da Ahrefs com 1.885 páginas não encontrou ganho relevante em nenhuma plataforma testada, e registrou até uma queda de 4,6% no AI Overviews. A correlação existe — páginas citadas costumam ter JSON-LD — mas ela reflete a qualidade geral desses sites, não um efeito da marcação.

### JSON-LD, Microdata ou RDFa: qual devo usar?

JSON-LD, sem hesitar. É o único formato que o Google recomenda explicitamente, fica isolado em um bloco `<script>` fora do HTML visível e por isso é muito mais simples de manter e depurar. Microdata e RDFa ainda funcionam, mas exigem espalhar atributos pelo conteúdo e não trazem vantagem nenhuma em troca.

### Preciso de plugin pago para implementar dados estruturados?

Não. As versões gratuitas de Yoast e Rank Math já geram `Organization`, `Article` e `BreadcrumbList` — que cobrem a maior parte do valor para um site de conteúdo. Em sites próprios, escrever o JSON-LD no template é melhor ainda, porque o dado é gerado a partir da mesma fonte que renderiza a página e não corre o risco de divergir dela.

## Fontes e Referências

- [We Tracked 1,885 Pages Adding Schema. AI Citations Barely Moved. — Ahrefs](https://ahrefs.com/blog/schema-ai-citations/)
- [Schema Markup Didn't Move AI Citations In Ahrefs Test — Search Engine Journal](https://www.searchenginejournal.com/schema-markup-didnt-move-ai-citations-in-ahrefs-test/574568/)
- [FAQ (FAQPage) structured data — Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Structured Data Markup that Google Search Supports — Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Google Drops FAQ Rich Results From Search — Search Engine Journal](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)
- [Schema Markup's Real Impact on AI Search — Otterly.ai](https://otterly.ai/blog/schema-markup-real-impact-ai-search/)
- [Schema.org — vocabulário oficial](https://schema.org)