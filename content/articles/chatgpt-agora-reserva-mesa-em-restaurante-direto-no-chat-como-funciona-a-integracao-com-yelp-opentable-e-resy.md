---
title: "ChatGPT Agora Reserva Mesa em Restaurante Direto no Chat: Como Funciona a Integração com Yelp, OpenTable e Resy"
description: "ChatGPT passou a buscar e reservar mesas via Yelp, OpenTable e Resy sem sair do chat. Veja como funciona, quem tem acesso e o que ainda falta no recurso."
category: ferramentas
tags:
  - ChatGPT
  - OpenAI
  - Ferramentas de IA
author: Redação Turbina IA
isFeatured: false
date: "2026-08-27"
coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
---

Pedir para o ChatGPT "achar uma mesa para dois, hoje à noite, perto da Times Square" deixou de terminar em links soltos para o usuário abrir em outra aba. Desde 10 de agosto, a resposta já vem com horários reais disponíveis — e a reserva pode ser fechada sem sair da conversa, graças a uma integração da OpenAI com [Yelp, OpenTable e Resy](https://blog.yelp.com/news/yelp-chatgpt-integration/).

> **Resposta Rápida (TL;DR):** O ChatGPT ganhou busca e reserva de restaurantes integradas a Yelp, OpenTable e Resy, disponível em planos pagos e no gratuito a partir de 10 de agosto de 2026. A reserva é fechada dentro do chat, mas alterações e cancelamentos só podem ser feitos direto no site ou app do parceiro — e a cobertura fora dos Estados Unidos e Canadá ainda é limitada.

## Como funciona a reserva dentro do chat

O fluxo é direto. Basta descrever o que se procura — bairro, data, horário, número de pessoas, tipo de cozinha, faixa de preço ou até uma exigência específica, como "mesa perto da janela" ou "cardápio vegano" — e o modelo devolve opções com horários reais de disponibilidade, puxados ao vivo dos sistemas de OpenTable, Resy ou Yelp, dependendo de qual plataforma atende aquele restaurante.

Depois de escolher o horário, o próprio ChatGPT conduz a confirmação. Segundo o [Centro de Ajuda da OpenAI](https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt), o assistente pode pedir permissão para preencher nome e e-mail automaticamente nos campos da reserva — o usuário decide se autoriza uma única vez, sempre, ou prefere digitar os dados manualmente a cada reserva. A exceção é a Resy: como o parceiro exige login na própria conta, o ChatGPT não preenche esses campos por ali.

Há uma especificação técnica publicada pela própria OpenAI para desenvolvedores que querem construir integrações parecidas, o [guia de conversão de reservas de restaurante do Apps SDK](https://developers.openai.com/apps-sdk/guides/restaurant-reservation-conversion-spec), que descreve exatamente esse formato de resposta estruturada — prova de que o recurso não é um truque de prompt, mas um produto com contrato de dados formal entre o chat e os parceiros de reserva.

Na prática, quanto mais detalhado o pedido inicial, menos idas e vindas o usuário precisa fazer depois. Um pedido como "restaurante italiano, até R$ 150 por pessoa, sexta às 20h, mesa para quatro, perto do Central Park" já chega com filtro suficiente para o ChatGPT descartar opções incompatíveis antes mesmo de mostrar a lista — diferente de um pedido genérico tipo "onde eu como hoje", que ainda obriga o usuário a refinar manualmente cada critério depois de ver o resultado.


![Imagem ilustrativa sobre ChatGPT Agora Reserva Mesa em Restaurante Direto no Chat: Como Funciona a Integração com Yelp, OpenTable e Res](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## Quem tem acesso — e quem fica de fora

A busca e reserva de restaurantes não está disponível para todo mundo que usa o [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026). De acordo com a documentação oficial, o recurso roda em planos de consumo elegíveis, na web, no celular e no desktop, mas apenas quando a conversa está usando os modelos GPT-5.6 Sol ou GPT-5.6 Luna — as duas variantes de uso geral que a OpenAI vem empurrando como padrão desde meados de agosto. Contas corporativas ficam de fora: o recurso não aparece no ChatGPT Work nem nos planos Business, Enterprise ou Edu.

Na prática, isso separa dois públicos: quem usa o ChatGPT no dia a dia pessoal ganha uma função nova de graça (ou quase, dependendo do plano), enquanto times que rodam o assistente sob contrato corporativo não têm — pelo menos por enquanto — motivo para esperar o mesmo em ambiente de trabalho.

## Onde o recurso realmente funciona

A cobertura geográfica é o ponto que mais separa "novidade global" de "novidade americana com sotaque de imprensa internacional". As três plataformas têm alcances bem diferentes:

| Parceiro | Cobertura geográfica | O que faz dentro do chat |
|---|---|---|
| OpenTable | Global | Busca e reserva completas |
| Resy | Somente Estados Unidos | Busca completa; reserva exige login próprio |
| Yelp | Estados Unidos e Canadá | Reserva e entrada em lista de espera |

Isso significa que, apesar do OpenTable ter presença internacional, a experiência mais robusta — a que inclui lista de espera e reserva sem sair do chat com um clique — ainda está concentrada no mercado americano e canadense, [segundo a cobertura da 9to5Mac](https://9to5mac.com/2026/08/10/chatgpt-users-can-now-book-tables-and-join-restaurant-waitlists-through-yelp/) sobre o lançamento. Para quem usa o ChatGPT no Brasil, o recurso tende a ser mais útil para planejar uma viagem aos EUA ou ao Canadá do que para reservar o jantar de sexta em São Paulo — a base de restaurantes brasileiros integrados ao OpenTable, Resy ou Yelp Reservations ainda é pequena perto da que essas plataformas têm no mercado americano.


![Imagem ilustrativa sobre ChatGPT Agora Reserva Mesa em Restaurante Direto no Chat: Como Funciona a Integração com Yelp, OpenTable e Res](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)

## O que ainda não dá para fazer pelo chat

A reserva fecha dentro da conversa, mas a relação com ela não termina ali. Segundo o [Centro de Ajuda da OpenAI](https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt) e a cobertura da [Android Authority](https://www.androidauthority.com/chatgpt-restaurant-reservations-and-waitlists-3696712/), qualquer alteração de horário ou cancelamento precisa ser feita direto no site ou aplicativo do parceiro que processou a reserva — o ChatGPT não tem essa ponta do processo. Também não há confirmação por dentro do chat: quem reserva recebe o aviso pelo canal do próprio Yelp, OpenTable ou Resy, do mesmo jeito que receberia se tivesse aberto o site na mão.

É uma limitação deliberada, não um bug: a OpenAI está deixando a etapa de gestão pós-reserva — que envolve política de cancelamento, taxas de no-show e relacionamento direto com o restaurante — nas mãos de quem já tem essa infraestrutura pronta.

## Por que Yelp, OpenTable e Resy topam entregar o cliente para dentro do chat

Esse movimento não nasceu isolado. Ele é a segunda etapa de uma parceria que a Yelp fechou com a OpenAI em julho, quando passou a licenciar avaliações, fotos e dados de estabelecimentos para aparecer nas respostas do ChatGPT sobre buscas locais. Um mês depois, a reserva foi o passo natural: se o usuário já pergunta "onde jantar" dentro do chat, faz sentido comercial fechar o ciclo sem forçá-lo a abrir outro aplicativo.

A [Bloomberg já vinha discutindo como restaurantes precisam pensar sua presença e até o próprio nome pensando em como o ChatGPT os descreve e recomenda](https://www.bloomberg.com/news/features/2026-08-21/how-to-name-a-restaurant-as-chatgpt-changes-search-and-branding) — um sinal de que a busca por comida está deixando de ser um problema resolvido só pelo Google Maps e passando a depender também de como um modelo de linguagem interpreta e resume a reputação de um estabelecimento. Para as plataformas de reserva, ficar de fora dessa camada significa perder visibilidade justamente onde parte do público está migrando a decisão de "onde comer".

Vale usar essa lógica também para quem testa [prompts prontos](/prompts) no dia a dia: quanto mais específico o pedido — cozinha, faixa de preço, restrição alimentar, ocasião —, melhor o modelo consegue filtrar entre as opções que vêm da API do parceiro, em vez de devolver uma lista genérica.

## O contexto: agentic commerce chegando ao consumo comum

Reservar mesa é um exemplo pequeno de uma tendência maior, que no jargão da indústria já ganhou nome — comércio "agêntico", em que o assistente não apenas responde, mas conduz uma transação real do início ao fim. Vale a pena conferir o conceito no [Glossário de IA](/glossario) do Turbina IA para quem quer entender de onde vem esse termo antes de ver ele aparecer em outros produtos: compra de ingressos, agendamento de serviços, e-commerce. A OpenAI já testou terreno parecido com reservas de viagem e deve ampliar a lista de parceiros de "checkout dentro do chat" nos próximos meses — vale acompanhar o [changelog de modelos e recursos](/changelog) do site para não perder o que muda.

O detalhe que costuma passar despercebido é o que esse tipo de integração tira do meio: a etapa de comparação manual entre sites. Antes, decidir onde comer envolvia abrir o Google, depois o Yelp, depois talvez o Instagram do restaurante e só então o OpenTable para confirmar horário. Agora esse trajeto inteiro cabe numa única troca de mensagens — o que é conveniente, mas também concentra numa única empresa a decisão de quais restaurantes aparecem primeiro. Vale acompanhar se a OpenAI vai divulgar, em algum momento, como ordena essas recomendações — hoje isso não está documentado publicamente.

## Perguntas Frequentes

### O ChatGPT cobra alguma taxa para fazer a reserva do restaurante?

Não. A busca e a reserva usam a infraestrutura gratuita de Yelp, OpenTable e Resy — o mesmo serviço que essas plataformas já oferecem em seus próprios sites e aplicativos, sem custo adicional para o usuário do ChatGPT.

### Dá para reservar restaurante pelo ChatGPT no Brasil?

Tecnicamente sim, se o restaurante desejado estiver cadastrado no OpenTable (que tem presença global). Mas a cobertura de Resy é só nos Estados Unidos e a de Yelp cobre apenas Estados Unidos e Canadá, então o recurso funciona melhor para planejar uma viagem para esses países do que para o dia a dia em cidades brasileiras.

### Qual versão do ChatGPT é necessária para usar a reserva de restaurantes?

Segundo a OpenAI, o recurso está disponível em planos de consumo elegíveis quando a conversa roda nos modelos GPT-5.6 Sol ou GPT-5.6 Luna, e não está disponível em planos corporativos como ChatGPT Work, Business, Enterprise ou Edu.

## Fontes e Referências

- [Searching the web with ChatGPT — OpenAI Help Center](https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt)
- [Restaurant reservation conversion spec — Apps SDK, OpenAI Developers](https://developers.openai.com/apps-sdk/guides/restaurant-reservation-conversion-spec)
- [How to Name a Restaurant as ChatGPT Changes Search and Branding — Bloomberg](https://www.bloomberg.com/news/features/2026-08-21/how-to-name-a-restaurant-as-chatgpt-changes-search-and-branding)
- [Yelp Brings Reservations and Waitlist to ChatGPT — Yelp Official Blog](https://blog.yelp.com/news/yelp-chatgpt-integration/)
- [ChatGPT users can now book tables and join restaurant waitlists through Yelp — 9to5Mac](https://9to5mac.com/2026/08/10/chatgpt-users-can-now-book-tables-and-join-restaurant-waitlists-through-yelp/)
- [ChatGPT can now help secure your spot at a restaurant — Android Authority](https://www.androidauthority.com/chatgpt-restaurant-reservations-and-waitlists-3696712/)