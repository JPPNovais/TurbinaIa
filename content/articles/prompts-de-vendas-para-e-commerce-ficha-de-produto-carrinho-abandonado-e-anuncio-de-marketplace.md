---
title: "Prompts de Vendas para E-commerce: Ficha de Produto, Carrinho Abandonado e Anúncio de Marketplace"
seoTitle: "Prompts de Vendas para E-commerce: Guia Completo"
description: "Prompts prontos para ficha de produto, carrinho abandonado e anúncio de loja no Mercado Livre, Shopee e e-commerce próprio. Copie e adapte no ChatGPT."
category: tutoriais
tags:
  - Prompts
  - E-commerce
  - Vendas
  - ChatGPT
  - Marketplace
author: Redação Turbina IA
isFeatured: false
date: "2026-11-12"
coverImage: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1200&q=80"
---

O cliente abriu o app, colocou o tênis no carrinho, viu o valor do frete e fechou a tela sem pagar. Esse episódio se repete em cerca de 70% das visitas que chegam perto da compra, segundo dados reunidos pelo [Statista](https://www.statista.com/statistics/457078/online-shopping-cart-abandonment-rate-worldwide/) a partir de dezenas de estudos de mercado — e no Brasil a taxa costuma aparecer ainda mais alta em levantamentos do setor. Quem vende em marketplace como Mercado Livre e Shopee, ou numa loja própria, sente esse número todo mês na forma de carrinho cheio e venda que não sai.

**Resposta Rápida (TL;DR):** Use [prompts](/prompts) específicos para cada etapa da venda em e-commerce — ficha de produto com atributos que o marketplace pede, recuperação de carrinho por WhatsApp ou push (não só e-mail), resposta a avaliação negativa e pedido de avaliação pós-compra. Nunca deixe a IA inventar frete grátis, prazo ou desconto que você não confirmou.

Este guia parte de onde o artigo de [prompts para negócios e empreendedores](/blog/prompts-para-negocios-e-empreendedores) deixou: aquele texto tem uma seção com quatro prompts genéricos de ficha, carrinho, objeção e remarketing. Aqui o recorte é outro — atributos de marketplace, canais que a loja virtual não usa (WhatsApp, push, avaliação), e os limites específicos de Mercado Livre e Shopee. Se o seu produto depende mais de texto de persuasão do que de atributo técnico, vale complementar com os [prompts de copywriting](/blog/prompts-para-copywriting-e-redacao); para divulgar o anúncio fora da plataforma, os [prompts de marketing digital](/blog/prompts-para-marketing-digital) cobrem redes sociais e campanhas pagas.

---

## Ficha de produto: o que muda no Mercado Livre e na Shopee

Loja própria e marketplace não competem pelo mesmo texto. Numa loja própria, a ficha é livre — você escreve o que quiser, no tamanho que quiser. No Mercado Livre, o anúncio que aparece primeiro na busca costuma ser o que tem mais atributos preenchidos, segundo orientações de ferramentas de gestão de anúncios do próprio ecossistema do marketplace, porque atributo preenchido alimenta filtro de busca e aumenta a chance de o produto aparecer num filtro que o concorrente não preencheu. Na Shopee, o limite de caracteres do título é mais curto e a palavra-chave precisa vir nas primeiras posições, porque o algoritmo de busca trunca o restante em boa parte das telas de celular.

Isso muda o prompt. Pedir "escreva a ficha do produto" sem dizer para qual canal gera um texto genérico que não aproveita nenhum dos dois formatos.

```
Você é especialista em listagens para marketplace. Crie a ficha de um produto para o Mercado Livre. Produto: [nome]. Categoria do marketplace: [categoria exata, ex: "Eletrônicos > Celulares"]. Atributos que já tenho: [liste os atributos que você sabe, ex: marca, modelo, cor, voltagem, material]. Atributos que NÃO sei: [liste o que falta]. Gere: (1) título com até 60 caracteres, marca e principal característica no início; (2) lista dos atributos que ainda preciso preencher no painel do Mercado Livre e por que cada um ajuda a aparecer em mais filtros de busca; (3) descrição de até 4 parágrafos curtos, sem repetir o título, sem inventar nenhum atributo que eu não informei.
```

```
Adapte esta ficha de produto para o formato da Shopee: [cole a ficha ou descrição que já tem]. Regras da plataforma: título com até 60 caracteres e a palavra-chave principal nos primeiros 25 caracteres; descrição com os 5 primeiros bullets sendo a informação que o comprador mais pergunta no chat (tamanho, material, compatibilidade, o que vem na caixa, prazo de troca). Não adicione nenhuma característica que eu não tenha listado aqui: [liste o que você sabe do produto].
```

A tabela abaixo resume onde cada formato pesa mais — vale ter ao lado quando for escrever o prompt:

| Canal | Limite de título | O que mais importa | Erro comum |
|---|---|---|---|
| Mercado Livre | ~60 caracteres | Atributos preenchidos (filtro de busca) | Deixar atributo "a preencher" por achar irrelevante |
| Shopee | ~60 caracteres, palavra-chave no início | Bullets de resposta rápida (tamanho, material) | Título genérico sem palavra-chave nas primeiras posições |
| Loja própria | Livre, mas Google trunca por volta de 60 | SEO on-page e prova social (avaliação, selo) | Texto longo sem nenhuma chamada clara para o carrinho |

---


![Imagem ilustrativa sobre Prompts de Vendas para E-commerce: Ficha de Produto, Carrinho Abandonado e Anúncio de Marketplace](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

## Recuperar carrinho fora do e-mail: WhatsApp e push

A recuperação de carrinho por e-mail existe há anos e continua funcionando, mas depende de o cliente abrir a caixa de entrada. Em loja própria com opt-in de WhatsApp ou aplicativo com push, a mensagem chega direto na tela de bloqueio — e o texto certo para cada canal não é o mesmo que o do e-mail.

```
Escreva uma mensagem de WhatsApp para recuperar um carrinho abandonado. Produto: [nome]. Cliente deixou o carrinho há [tempo]. Regra: até 3 linhas, sem emoji em excesso, sem soar como spam, com uma pergunta genuína no final (não um CTA forçado). Informação real que posso oferecer, se houver: [prazo de entrega confirmado, frete grátis a partir de X valor, ou "nenhuma"]. Lembre no início da mensagem que o cliente deu consentimento para receber esse contato.
```

```
Crie 3 variações de notificação push para recuperar carrinho abandonado no app da loja [nome]. Produto: [produto]. Tempo no carrinho: [horas]. Cada variação deve ter no máximo 40 caracteres de título e 80 de corpo — é o limite de exibição na tela de bloqueio da maioria dos celulares. Uma variação deve ser neutra (lembrete), uma deve mencionar estoque se eu confirmar que está baixo, e uma deve ser uma pergunta direta. Não inclua nenhuma urgência falsa.
```

No Mercado Livre e na Shopee, esse caminho não existe do mesmo jeito: o vendedor não tem o WhatsApp nem o e-mail do comprador antes da venda, então a recuperação de carrinho propriamente dita fica restrita às ferramentas de remarketing da própria plataforma (como o Mercado Ads). O que o vendedor de marketplace pode controlar é a ficha completa e a resposta rápida no chat — por isso os prompts de ficha da seção anterior pesam mais nesse canal do que qualquer prompt de recuperação de carrinho.

---

## Reputação: responder avaliação e pedir review sem parecer forçado

Reputação é o fator que mais pesa na decisão de compra em marketplace, porque é a única prova social que o comprador vê antes de clicar. Uma avaliação negativa mal respondida afasta venda futura; a ausência de avaliação positiva recente também afasta, porque o comprador associa isso a loja inativa.

```
Um cliente deixou a seguinte avaliação no meu anúncio: "[cole a avaliação, incluindo nota]". Produto: [nome]. O que realmente aconteceu, do meu lado: [descreva o fato, por exemplo "o atraso foi da transportadora" ou "o produto tinha defeito e já foi trocado"]. Escreva uma resposta pública de até 4 linhas, sem se desculpar de forma robótica, reconhecendo o problema quando ele for real e explicando o que foi feito para resolver. Não prometa nada que eu não confirmei.
```

```
Escreva uma mensagem curta para pedir avaliação a um cliente que recebeu o produto [nome] há [dias] dias e não teve nenhuma reclamação registrada. Tom: direto, sem parecer suplicante, sem oferecer nada em troca da nota (a maioria dos marketplaces proíbe incentivar avaliação com desconto). Até 3 linhas. Use o canal: [mensagem pós-venda do marketplace, e-mail ou WhatsApp com opt-in].
```

Vale registrar: tanto Mercado Livre quanto Shopee têm regras próprias sobre o que pode ou não ser dito para induzir avaliação — oferecer desconto, cupom ou brinde em troca de nota é prática que costuma violar os termos de uso das duas plataformas e pode gerar penalização da conta. O prompt acima já evita esse caminho, mas cabe ao vendedor confirmar a política vigente antes de disparar a mensagem em massa.

---


![Imagem ilustrativa sobre Prompts de Vendas para E-commerce: Ficha de Produto, Carrinho Abandonado e Anúncio de Marketplace](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80)

## Cross-sell e campanhas sazonais: ir além do anúncio isolado

Quem vende em marketplace compete por clique numa página cheia de concorrentes do mesmo produto. Duas alavancas ajudam a aumentar o ticket sem depender só de tráfego novo: o kit/combo na própria página e a campanha de data sazonal.

```
Crie a descrição de um kit/combo para a página do produto [produto principal] junto com [produto complementar]. Preço do kit: [preço, se já decidido, ou "ainda não decidi"]. Explique em até 3 frases por que os dois produtos combinam na prática (uso real, não genérico do tipo "perfeito juntos"). Não invente economia percentual se eu não informar o valor de cada item separado.
```

```
Escreva 3 variações de título e descrição de anúncio para a campanha de [Black Friday / Dia das Mães / data sazonal] do produto [produto] no [Mercado Livre / Shopee / loja própria]. Oferta real, se houver: [desconto, frete grátis a partir de X, ou "nenhuma, é só o anúncio normal com selo da campanha"]. Respeite o limite de caracteres do canal informado. Não use a palavra "imperdível", "só hoje" ou qualquer urgência que eu não possa sustentar até o fim da campanha.
```

Essas duas peças fazem mais diferença quando o vendedor já aproveitou a ficha completa da primeira seção — um kit bem descrito numa ficha incompleta tende a converter pior do que um produto único numa ficha completa.

---

## O que a IA não deve inventar num anúncio de marketplace

Modelo de linguagem erra com mais frequência quando o prompt deixa espaço para ele "completar" um dado que falta. Em e-commerce isso custa caro: Mercado Livre e Shopee penalizam anúncio com informação divergente da entrega real, e o comprador que recebe menos do que o anúncio prometeu abre reclamação — o que pesa direto na reputação da conta.

Três pontos exigem revisão manual sempre, mesmo usando os prompts acima:

- **Prazo de entrega:** em marketplace, o prazo que aparece pro comprador é calculado pela própria plataforma (frete e localização), não pelo texto do vendedor. Nunca deixe a IA escrever um prazo fixo no corpo do anúncio.
- **Frete grátis e desconto:** só entram no texto se já estiverem configurados no painel do vendedor. Uma ficha que promete frete grátis sem o programa correspondente ativo gera reclamação e pode ser removida.
- **Atributo técnico (voltagem, material, compatibilidade):** é a informação mais citada em devolução por descrição divergente. Se você não tem certeza do dado, instrua o prompt a deixar em branco em vez de "chutar" um valor plausível — todos os prompts acima já têm essa instrução, mas vale revisar a resposta antes de publicar.

Produtividade de catálogo pode subir bastante com IA generativa — a [McKinsey](https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/how-generative-ai-can-boost-consumer-marketing) descreve times de varejo gerando conteúdo de produto em escala, numa fração do tempo que levava o processo manual. Mas a mesma análise é clara: o ganho de velocidade só compensa quando existe revisão humana no que entra no catálogo, porque o modelo reproduz o padrão do que foi pedido, não verifica o fato contra a realidade do estoque.

Para escrever os prompts com mais precisão desde a primeira tentativa, as técnicas do guia oficial da [OpenAI sobre engenharia de prompt](https://platform.openai.com/docs/guides/prompt-engineering) — instrução no início, contexto separado por delimitador e exemplo do formato de saída — valem tanto para o painel do ChatGPT quanto para qualquer outra IA de texto usada na gestão do catálogo.

---

## Perguntas Frequentes

### Posso usar esses prompts no Mercado Livre e na Shopee ao mesmo tempo, para o mesmo produto?

Sim, mas não copie o mesmo texto de um canal para o outro. Cada marketplace trunca o título em um ponto diferente e prioriza atributos diferentes na busca interna. Gere a ficha uma vez com o prompt específico de cada canal, revisando o produto base — assim o texto aproveita o formato de cada plataforma em vez de ficar genérico nos dois.

### Como recupero carrinho no Mercado Livre, já que não tenho o e-mail do cliente?

Você não recupera carrinho da mesma forma que numa loja própria, porque o marketplace não compartilha esse contato antes da compra. O que funciona nesse canal é a combinação de ficha completa (para evitar que o cliente saia da página sem decidir) com as ferramentas de remarketing e publicidade oferecidas pela própria plataforma. Os prompts de WhatsApp e push deste guia servem para loja própria ou app com opt-in próprio, não para marketplace.

### Esses prompts funcionam em qualquer IA, ou só no ChatGPT?

Funcionam em qualquer assistente de texto — ChatGPT, Gemini, Claude ou outro. O que muda entre eles é a qualidade da resposta em tarefas mais longas. Para comparar qual se encaixa melhor no seu uso (e o custo, se for usar a API em volume), vale conferir o [comparador de IAs](/comparador) e a [calculadora de custos](/calculadora) do Turbina IA antes de decidir qual ferramenta usar em escala.

---

## Fontes e Referências

- [Statista — Online shopping cart abandonment rate worldwide](https://www.statista.com/statistics/457078/online-shopping-cart-abandonment-rate-worldwide/) — Taxa média de abandono de carrinho em e-commerce.
- [McKinsey — How generative AI can boost consumer marketing](https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/how-generative-ai-can-boost-consumer-marketing) — Geração de conteúdo de produto em escala com IA generativa.
- [OpenAI — Guia oficial de prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering) — Boas práticas para estruturar prompts eficazes.