---
title: "IA Resiste à Propaganda Estrangeira, mas Erra em Até 24% das Respostas Sobre as Eleições 2026 no Brasil"
description: "Testes da NewsGuard e da ONG Ekō mostram que chatbots barram desinformação geopolítica, mas falham feio quando o tema são as eleições brasileiras."
category: noticias
tags:
  - Desinformação
  - Eleições 2026
  - Chatbots de IA
author: Redação Turbina IA
isFeatured: false
date: "2026-08-31"
coverImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80"
---

Pergunte à Meta AI se Jair Bolsonaro já foi condenado por tentativa de golpe de Estado e, segundo um levantamento recente, ela pode responder que não. A informação é falsa — mas foi exatamente o tipo de erro que pesquisadores encontraram ao testar os principais chatbots de IA disponíveis no Brasil às vésperas da eleição de outubro.

O caso ilustra um contraste que ganhou força nesta semana: os mesmos sistemas que se saem relativamente bem quando o assunto é propaganda de governos estrangeiros tropeçam — e tropeçam muito — quando a pergunta é sobre política doméstica brasileira.

> **Resposta Rápida (TL;DR):** Um teste da NewsGuard com a NPR publicado em 30 de agosto mostrou que ChatGPT, Gemini, Copilot, Meta AI, Grok e Claude rejeitaram a maioria das narrativas falsas ligadas a China, Irã e Rússia. Já um levantamento da ONG Ekō, feito entre 24 de junho e 1º de julho, encontrou taxa de erro de até 24% quando os mesmos tipos de chatbot respondiam sobre as eleições brasileiras de 2026 — e três das quatro ferramentas testadas chegaram a recomendar voto em candidatos, o que a regulamentação do TSE proíbe explicitamente.

## O teste que colocou seis chatbots contra a propaganda estrangeira

A pesquisadoras Isis Blachez e Ines Chomnalez, da [NewsGuard em parceria com a NPR](https://www.npr.org/2026/08/30/nx-s1-5876436/chatbots-search-propaganda), montaram 30 perguntas a partir de narrativas falsas espalhadas por China, Irã e Rússia entre dezembro de 2025 e julho de 2026. Cada narrativa virou duas perguntas: uma neutra ("isso aconteceu?") e outra que já parte do pressuposto de que o fato é verdadeiro ("por que isso aconteceu?") — um jeito de simular como usuários reais formulam dúvidas quando já foram expostos à desinformação.

As perguntas foram enviadas manualmente, em meados de julho, para os seis chatbots mais usados nos Estados Unidos — [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026), Gemini, Copilot, Meta AI, Grok e Claude —, todos com acesso à internet, e também para quatro buscadores: Google, Bing, DuckDuckGo e o russo Yandex. Um exemplo citado pela reportagem: depois que a Rússia bombardeou um mosteiro histórico ucraniano tombado pela Unesco em junho, contas alinhadas ao Kremlin tentaram inverter a autoria do ataque, atribuindo-o à Ucrânia. Todos os chatbots testados, além do AI Overview do Google, identificaram a premissa falsa e corrigiram o usuário.

O resultado geral, segundo a [NewsGuard e a NPR](https://www.npr.org/2026/08/30/nx-s1-5876436/chatbots-search-propaganda), foi que os chatbots rejeitaram as narrativas patrocinadas por Estados na maioria das vezes — com desempenho melhor do que os resumos gerados por IA que aparecem no topo dos resultados de busca, que se mostraram mais suscetíveis a repetir a versão falsa sem contestá-la.

O achado não é isolado. Em um relatório anterior, a [NewsGuard](https://www.newsguardtech.com/special-reports/chinese-ai-chatbots-fail-to-debunk-pro-china-false-claims-more-than-half-the-time/) já havia comparado chatbots ocidentais e chineses diante de alegações pró-China e encontrado uma diferença expressiva de desempenho:

| Grupo de chatbots | Falha ao desmentir alegações falsas pró-China |
|---|---|
| 10 chatbots ocidentais (ChatGPT, [Gemini](/blog/prompts-para-gemini), Claude etc.) | 24% das vezes |
| 7 chatbots chineses | 53% das vezes |

Ou seja: mesmo entre os sistemas ocidentais, que se saem melhor, uma em cada quatro respostas ainda falha ao apontar a desinformação — um índice que já seria considerado alto para qualquer fonte de informação factual. E é justamente esse patamar de erro, coincidentemente, que reaparece quando o assunto muda de geopolítica para a política brasileira.


![Imagem ilustrativa sobre IA Resiste à Propaganda Estrangeira, mas Erra em Até 24% das Respostas Sobre as Eleições 2026 no Brasil](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

## No Brasil, o erro sobe — e vem com recomendação de voto

Enquanto a NewsGuard testava propaganda internacional, a organização de responsabilização corporativa Ekō rodava seu próprio experimento em português, mirando diretamente as eleições brasileiras de outubro. Entre 24 de junho e 1º de julho, pesquisadores criaram três perfis fictícios de eleitor — um com viés bolsonarista, outro petista e um terceiro sem identificação política — e fizeram as mesmas 25 perguntas para quatro chatbots: ChatGPT (versão gratuita), Grok (Fast), Gemini (3.5 Flash) e Meta AI (Instant), totalizando 75 respostas avaliadas por ferramenta.

O resultado, [divulgado pela CNN Brasil](https://www.cnnbrasil.com.br/eleicoes/ias-dao-informacoes-falsas-sobre-eleicoes-e-recomendam-votos-diz-estudo/), mostra uma variação grande entre as ferramentas:

| Chatbot | Versão testada | Taxa de erro |
|---|---|---|
| Meta AI | Instant | 24% |
| ChatGPT | Gratuita | 12% |
| Grok | Fast | 12% |
| Gemini | 3.5 Flash | 8% |

Os erros não foram imprecisões genéricas. Segundo o levantamento, a Meta AI chegou a afirmar que Bolsonaro nunca foi condenado por tentativa de golpe de Estado; o Gemini forneceu um contato inexistente atribuído ao TSE; o ChatGPT mencionou candidatos que nem estão na disputa; e o Grok reproduziu a teoria conspiratória de que Judiciário e governo federal agiriam de forma coordenada para suprimir a liberdade de expressão. São exatamente o tipo de alucinação — uma resposta que soa confiante e coerente, mas não corresponde à realidade — que o [Glossário de IA](/glossario) do Turbina IA cataloga como um dos riscos mais comuns de qualquer modelo de linguagem, e que se torna particularmente perigoso quando a pergunta é sobre regras eleitorais que a maioria dos eleitores não tem como checar de cabeça.

Mais grave: três das quatro plataformas testadas recomendaram voto em candidatos específicos, de forma direta ou indireta. A regra é clara sobre esse ponto. Em março, o [TSE aprovou o calendário eleitoral e regulamentou o uso de IA nas eleições de 2026](https://www.tse.jus.br/comunicacao/noticias/2026/Marco/tse-aprova-calendario-eleitoral-e-regulamenta-uso-de-ia-nas-eleicoes-2026), e uma das vedações explícitas é justamente a de que sistemas de IA rankeiem, recomendem ou favoreçam candidatos e partidos — a corte quer impedir que algoritmos interfiram na decisão de voto do eleitor. Se as respostas descritas pela Ekō se confirmarem no comportamento em produção das ferramentas, elas esbarram diretamente nessa proibição.

Vale registrar que o estudo da Ekō foi coberto por veículos menores antes de chegar à imprensa de maior alcance — o [Núcleo Jornalismo](https://nucleo.jor.br/curtas/2026/08/18/um-estudo-pra-quem-achou-que-chabots-de-ia-iriam-se-comportar-nas-eleicoes-de-2026/) resumiu os achados em agosto — e que a Turbina IA não teve acesso ao relatório metodológico completo da ONG; os números aqui reproduzidos vêm da cobertura da imprensa sobre o levantamento, não do documento primário.


![Imagem ilustrativa sobre IA Resiste à Propaganda Estrangeira, mas Erra em Até 24% das Respostas Sobre as Eleições 2026 no Brasil](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

## Por que o mesmo modelo erra menos lá fora e mais aqui

A explicação mais plausível para essa diferença de desempenho não é misteriosa: propaganda geopolítica sobre China, Irã e Rússia costuma aparecer fartamente documentada por agências de notícias internacionais, checadores de fatos e órgãos de inteligência — material de treinamento abundante e de alta qualidade. Já perguntas hiperespecíficas sobre regras eleitorais brasileiras, nomes de candidatos a cargos estaduais ou decisões recentes do TSE dependem de uma cobertura em português, atualizada em tempo real, que é bem mais escassa na base de dados usada para treinar — e para buscar em tempo real — a maioria desses modelos.

Isso não isenta as empresas de responsabilidade. Ao contrário: reforça que ferramentas amplamente usadas por eleitores brasileiros carregam um ponto cego conhecido, que já foi mapeado publicamente, e que segue sem correção visível dois meses antes da votação.

Na prática, o conselho que sobra para quem usa chatbots para tirar dúvidas sobre a eleição é o mesmo que vale para qualquer apuração: nunca tratar a resposta de uma IA como fonte final. Comparar o que diferentes modelos dizem sobre a mesma pergunta — algo que dá para testar diretamente no [Comparador de IAs](/comparador) do Turbina IA — ajuda a identificar quando uma ferramenta específica está fora da curva. E formular a pergunta de um jeito que force o modelo a citar a fonte oficial, em vez de apenas responder de memória, reduz bastante o risco de alucinação; é um dos casos de uso descritos na seção de [prompts prontos](/prompts) do site.

## Perguntas Frequentes

### Quais chatbots foram testados nos dois estudos?

O teste da NewsGuard com a NPR avaliou ChatGPT, Gemini, Copilot, Meta AI, Grok e Claude contra narrativas de desinformação ligadas a China, Irã e Rússia. Já o estudo da Ekō sobre as eleições brasileiras testou ChatGPT, Grok, Gemini e Meta AI — sem incluir Copilot ou Claude.

### É proibido um chatbot recomendar voto em candidato no Brasil?

Sim. A regulamentação do TSE para as eleições de 2026 proíbe explicitamente que sistemas de inteligência artificial rankeiem, recomendem ou favoreçam candidatos e partidos, justamente para impedir que algoritmos influenciem a decisão do eleitor.

### Por que os chatbots erram mais sobre política brasileira do que sobre propaganda internacional?

A explicação mais provável é a disponibilidade de dados: fatos sobre geopolítica envolvendo China, Rússia e Irã são amplamente documentados por agências internacionais e checadores de fatos, enquanto regras eleitorais brasileiras específicas e atualizações recentes do TSE têm cobertura mais escassa na base usada pelos modelos.

## Fontes e Referências

- [AI chatbots may be better than search engines in guarding against foreign propaganda — NPR/NewsGuard](https://www.npr.org/2026/08/30/nx-s1-5876436/chatbots-search-propaganda)
- [As Chinese AI Models Gain Popularity in the West, Their Chatbots Fail to Debunk Pro-China False Claims More Than Half the Time — NewsGuard](https://www.newsguardtech.com/special-reports/chinese-ai-chatbots-fail-to-debunk-pro-china-false-claims-more-than-half-the-time/)
- [IAs dão informações falsas sobre eleições e recomendam votos, diz estudo — CNN Brasil](https://www.cnnbrasil.com.br/eleicoes/ias-dao-informacoes-falsas-sobre-eleicoes-e-recomendam-votos-diz-estudo/)
- [TSE aprova calendário eleitoral e regulamenta uso de IA nas Eleições 2026 — Tribunal Superior Eleitoral](https://www.tse.jus.br/comunicacao/noticias/2026/Marco/tse-aprova-calendario-eleitoral-e-regulamenta-uso-de-ia-nas-eleicoes-2026)
- [Um estudo pra quem achou que chatbots de IA iriam se comportar nas eleições de 2026 — Núcleo Jornalismo](https://nucleo.jor.br/curtas/2026/08/18/um-estudo-pra-quem-achou-que-chabots-de-ia-iriam-se-comportar-nas-eleicoes-de-2026/)