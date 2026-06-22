---
title: "Android 17 Chega com Gemini Omni, Lyria 3 e AudioLM: Google Transforma o Sistema Operacional em Plataforma de IA Generativa"
description: "Android 17 integra Gemini Omni para edição de vídeo, Lyria 3 para criação musical e AudioLM para tradução em tempo real, redefinindo o papel da IA no"
category: noticias
tags:
  - Android 17
  - Gemini Omni
  - Lyria 3
  - Google
  - IA Generativa
author: Redação Turbina IA
isFeatured: false
date: "2026-06-22"
coverImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NTg1Mzd8MHwxfHNlYXJjaHwxfHxBbmRyb2lkJTIwMTclMjBDaGVnYSUyMGNvbSUyMEdlbWluaSUyME9tbmklMkMlMjBMeXJpYSUyMDMlMjBlJTIwQXVkaW9MTSUzQSUyMEdvb2dsZSUyMFRyYW5zZm9ybWElMjBvJTIwU2lzdGVtYSUyME9wZXJhY2lvbmFsJTIwZW0lMjBQbGF0YWZvcm1hJTIwZGUlMjBJQSUyMEdlbmVyYXRpdmElMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwwfDB8fHwxNzgyMTU2NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
---

Na terça-feira, 16 de junho de 2026, a Google lançou o Android 17 — e com ele deixou um recado inequívoco para a indústria: o sistema operacional mobile deixou de ser apenas uma plataforma de apps para se tornar, nas palavras da própria empresa, um **sistema de inteligência**. O lançamento veio acompanhado do habitual Pixel Drop de junho, que trouxe aos dispositivos Pixel acesso imediato ao [Gemini](/blog/prompts-para-gemini) Omni para criação e edição de vídeos, ao modelo musical Lyria 3 para geração de trilhas sonoras e ao AudioLM para tradução de voz em tempo real. Não é coincidência: enquanto a Apple se prepara para o lançamento público das melhorias de IA para a Siri e o iOS 27 em setembro, a Google já colocou sua aposta no campo.

> **Resposta Rápida (TL;DR):** O Android 17, lançado em 16 de junho de 2026 para dispositivos Pixel, integra três novos modelos de IA generativa nativamente ao sistema: o Gemini Omni Flash (edição de vídeo por conversa), o Lyria 3 (geração de músicas de 30 segundos a partir de texto ou imagens) e o AudioLM (tradução de voz em tempo real, disponível no Pixel 10a). A plataforma também introduz o AppFunctions, API que permite que agentes de IA como o Gemini controlem apps diretamente. Ao mesmo tempo, Android 17 marca a transição da Google para um padrão de desenvolvimento adaptável, com redimensionamento obrigatório em dispositivos de tela grande.

## Android 17 como "Sistema de Inteligência"

A mudança de nomenclatura não é retórica. No [blog oficial para desenvolvedores](https://developer.android.com/blog/posts/android-17-is-here), a Google declara explicitamente que o Android 17 "marca o início da nossa transição para um sistema de inteligência, colocando seus apps no centro." A afirmação resume uma transformação arquitetural real: o sistema operacional agora funciona como camada de orquestração entre os aplicativos do usuário e os agentes de IA.

O mecanismo central dessa transformação é o **AppFunctions** — uma API de plataforma com biblioteca Jetpack correspondente que permite que desenvolvedores exponham funcionalidades de seus apps como "ferramentas" orquestráveis para o MCP do Android, o equivalente on-device do Model Context Protocol. Na prática, isso significa que um agente como o Gemini pode descobrir e executar funções dentro de qualquer app compatível — criar uma nota no aplicativo de notas, agendar uma tarefa no calendário ou reproduzir uma faixa no player de música — tudo sem que o usuário precise alternar entre telas. A integração do Gemini com o AppFunctions está em prévia particular para testadores de confiança, mas o [blog de desenvolvedores da Google](https://developer.android.com/blog/posts/android-17-is-here) já disponibilizou a biblioteca em versão Alpha com suporte a anotações Kotlin e documentação via KDoc para geração automática de código.

Para desenvolvedores que querem experimentar antes do lançamento amplo, a Google abriu um programa de acesso antecipado em `goo.gle/eap-af`. O AppFunctions representa a aposta mais explícita da Google de que o futuro dos smartphones não está em interfaces visuais, mas em interações conversacionais mediadas por IA.


![Imagem ilustrativa sobre Android 17 Chega com Gemini Omni, Lyria 3 e AudioLM: Google Transforma o Sistema Operacional em Plataforma de ](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## Gemini Omni: Edição de Vídeo por Conversa Natural

A novidade que provavelmente vai capturar mais atenção do usuário médio é o **Gemini Omni Flash**, primeiro modelo da nova família Omni. Segundo o [blog do Google DeepMind](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/), o Omni é descrito como um modelo que "pode criar qualquer coisa a partir de qualquer entrada — começando por vídeo." A proposta é permitir ao usuário editar e criar vídeos inteiramente por linguagem natural, como se estivesse conversando com um editor profissional.

A lógica de funcionamento é iterativa: cada instrução se constrói sobre a anterior, os personagens mantêm consistência entre os cortes, a física da cena é preservada e o contexto acumulado não se perde. O usuário pode começar com um vídeo da câmera, pedir para trocar o ambiente, adicionar um personagem, mudar o ângulo da câmera e aplicar um efeito — tudo em sequência, sem reexportar o arquivo a cada passo. O blog da Google demonstra a capacidade com exemplos como transformar uma escultura em "bolhas", fazer uma superfície espelhada ondular como líquido ao toque e sincronizar as luzes de um prédio com o ritmo de uma música.

Conforme [anunciado no June Pixel Drop](https://blog.google/products-and-platforms/devices/pixel/june-2026-pixel-drop/), o Gemini Omni também permite criar vídeos do zero a partir de qualquer combinação de texto, imagens e outros vídeos, além de gerar um avatar personalizado com a aparência e voz do próprio usuário. O lançamento se deu simultaneamente no app Gemini, no Google Flow e no YouTube Shorts. Para quem quer comparar o Gemini Omni com outros modelos de geração de vídeo disponíveis no mercado, o [Comparador de IAs](/comparador) do Turbina IA mantém um panorama atualizado das principais ferramentas.

### Qual é a diferença entre Gemini Omni e Gemini Nano Banana?

É uma pergunta válida para quem acompanhou os lançamentos anteriores. O **Nano Banana**, introduzido no ano passado, focava em geração e edição de imagens — o que o levou a ser chamado, internamente, de modelo de "criação visual". O Omni dá o próximo passo: ele integra raciocínio e criação, processando entradas multimodais (texto, imagem, vídeo, áudio) e produzindo vídeo de alta qualidade ancorado no conhecimento de mundo do Gemini. A Google explicitou que futuramente o Omni também suportará saídas em imagem e áudio, além de vídeo.

## Lyria 3: Músicas Originais a Partir de Texto ou Foto

Se o Gemini Omni mira criadores de vídeo, o **Lyria 3** aponta para quem quer expressar ideias em som. O modelo de geração musical do Google DeepMind, [lançado em beta no app Gemini em 18 de fevereiro de 2026](https://blog.google/innovation-and-ai/products/gemini-app/lyria-3/), chegou com o Pixel Drop de junho à disponibilidade ampliada. O funcionamento é direto: o usuário descreve uma ideia ("um slow jam R&B cômico sobre uma meia procurando seu par") ou faz upload de uma foto, e em segundos o Gemini entrega uma faixa de 30 segundos com letra gerada automaticamente, arte de capa criada pelo Nano Banana e controle sobre estilo vocal, tempo e gênero.

O blog do Google DeepMind detalha três melhorias estruturais do Lyria 3 em relação às versões anteriores: geração automática de letras (sem necessidade de fornecê-las), maior controle criativo sobre parâmetros como voz e andamento, e faixas musicalmente mais complexas e realistas. Para uso no Pixel, basta abrir o app Gemini, acessar o menu de ferramentas e selecionar "Criar música".

Toda faixa gerada no app Gemini é automaticamente marcada com o **SynthID**, a marca d'água imperceptível ao ouvido humano da Google para rastreamento de conteúdo gerado por IA. A plataforma também passou a aceitar arquivos de áudio para verificação: o usuário pode enviar qualquer arquivo e perguntar ao Gemini se ele foi produzido por IA do Google. A iniciativa é parte do compromisso da empresa com IA responsável, que inclui diálogo com a comunidade musical desde o lançamento original do Lyria em 2023. O Lyria 3 também está chegando ao YouTube Dream Track para criadores de Shorts, tanto nos Estados Unidos quanto em outros países.


![Imagem ilustrativa sobre Android 17 Chega com Gemini Omni, Lyria 3 e AudioLM: Google Transforma o Sistema Operacional em Plataforma de ](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## AudioLM no Pixel 10a: Tradução de Voz em Tempo Real

Menos comentado, mas igualmente significativo, é a chegada do **Voice Translate** com tecnologia AudioLM ao Pixel 10a. Conforme relatado tanto pelo [TechCrunch](https://techcrunch.com/2026/06/16/android-17-launches-with-new-multitasking-tools-as-google-expands-gemini-features/) quanto pelo [blog oficial do Pixel Drop](https://blog.google/products-and-platforms/devices/pixel/june-2026-pixel-drop/), o recurso realiza tradução speech-to-speech em tempo real durante chamadas telefônicas, preservando inclusive o timbre da voz do interlocutor. No lançamento, o suporte inicial cobre traduções entre inglês e alemão, espanhol, francês e italiano.

A importância técnica do AudioLM vai além da conveniência: ao contrário de soluções baseadas em síntese de texto para voz, o modelo trabalha diretamente com representações acústicas, o que resulta em prosódia mais natural e menor latência perceptível. Para desenvolvedores e pesquisadores de produtos interessados em entender como esse tipo de tecnologia se encaixa em fluxos de trabalho mais amplos, o [Glossário de IA](/glossario) do Turbina IA explica os conceitos fundamentais de modelos de linguagem de áudio.

## Bubbles e Screen Reactions: A Interface Adaptada à Multitarefa

No nível da interface, o Android 17 traz duas novidades que o TechCrunch e o Punto Informatico destacaram como mudanças concretas de uso diário. A primeira é a **bubble bar**: um elemento de interface que transforma qualquer app em uma janela flutuante compacta, acessível com um toque a partir de uma barra na parte inferior da tela. Basta pressionar longamente o ícone de qualquer app para convertê-lo em bolha. No Pixel 10 Pro Fold, as bolhas ficam fixadas em uma barra dedicada. O recurso elimina o vai e vem de apps em workflows que exigem consultar duas fontes ao mesmo tempo.

A segunda novidade é o **Screen Reactions**: a câmera frontal passa a ser integrada nativamente à gravação de tela, dispensando o uso paralelo de múltiplos aplicativos para criar vídeos de reação. O usuário tem controle em tempo real sobre posição e tamanho da janela da selfie. O 9to5Google já havia [antecipado o recurso](https://9to5google.com/2026/06/14/google-ads-tease-next-pixel-drop-with-screen-reactions-and-gemini-omni-video/) dias antes do lançamento, ao identificar anúncios antecipados da Google no Amazon. O resultado final é compatível com TikTok, YouTube e Instagram sem conversão adicional.

Também chegou com o Pixel Drop a compatibilidade entre **Quick Share e AirDrop da Apple**, agora disponível nos Pixel 8a e 9a. É a primeira vez que a transferência nativa de arquivos entre Android e iPhone funciona em dispositivos Pixel mais antigos.

## Segurança, Controles Parentais e Wear OS 7

O Android 17 também reforça o portfólio de segurança com a função **"Marcar como perdido"** no Find Hub, detecção de ameaças em tempo real (Live Threat Detection) e uma reformulação dos controles parentais que agora podem ser configurados via PIN sem vinculação a conta Google — solução voltada especificamente para pais que buscam configurações rápidas sem burocracia de autenticação.

Para jogadores de dispositivos dobráveis, estreia um modo gaming com layout 50/50 e gamepad dinâmico integrado ao sistema.

O **Wear OS 7**, lançado simultaneamente, traz ao Pixel Watch a detecção automática de acidentes, quedas e ausência de pulso, com notificação automática de serviços de emergência e contatos selecionados. Os smartwatches passam a exibir atualizações ao vivo de apps do telefono espelhadas no pulso. Para o verão de 2026, o Wear OS promete widgets personalizados criados por descrição em linguagem natural, Personal Intelligence com conexão ao histórico de apps e chats do Google, melhorias de bateria de até 10% e automações multistep. Também está prevista integração aprimorada com os próximos óculos AI da Google.

## A Estratégia por Trás do Lançamento

O timing do Android 17 não é acidental. Tanto o [TechCrunch](https://techcrunch.com/2026/06/16/android-17-launches-with-new-multitasking-tools-as-google-expands-gemini-features/) quanto o [Punto Informatico](https://www.punto-informatico.it/android-17-bolla-app-gemini-omni-altre-novita/) observam que a Apple está se preparando para lançar publicamente as atualizações de IA para a Siri e o iOS 27 em setembro de 2026 — meses depois do que a Google já entrega em produção. O Pixel e o Android funcionam como vitrine acelerada: novos modelos de IA como Gemini Omni, Lyria 3 e AudioLM chegam primeiro aos usuários Pixel, criando um ciclo de feedback real antes de qualquer concorrente chegar ao mercado.

A outra camada estratégica está no AppFunctions. Ao expor as funcionalidades dos apps como ferramentas consumíveis por agentes de IA via protocolo MCP, a Google cria um ecossistema de desenvolvimento que favorece diretamente o Gemini como orquestrador padrão. Se o developer adotar AppFunctions, automaticamente seu app passa a ser "descobrível" pelo Gemini — é um incentivo técnico com impacto comercial direto. Para quem quer calcular o custo de implementar soluções baseadas nos modelos Gemini em produtos próprios, a [Calculadora de Custos de IA](/calculadora) oferece uma referência prática.

O Android 17 também endereça uma dívida técnica real: a partir do nível 37 da API, o sistema remove a opção de desabilitar redimensionamento e restrições de orientação em dispositivos de tela grande (sw > 600 dp). Com mais de 580 milhões de dispositivos de tela grande em uso e o próximo Googlebooks — a nova geração do ChromeOS construída sobre a pilha do Android — a Google está, na prática, forçando os desenvolvedores a tratarem adaptabilidade como requisito, não como bônus.

## Perguntas Frequentes

**O Android 17 está disponível para todos os Android?**
Não imediatamente. O lançamento inicial foi para a maioria dos dispositivos Pixel compatíveis. Outros fabricantes receberão o Android 17 nos próximos meses, conforme confirmado pelo [blog de desenvolvedores da Google](https://developer.android.com/blog/posts/android-17-is-here). O código-fonte já está disponível no Android Open Source Project (AOSP).

**O Lyria 3 gera músicas completas ou apenas fragmentos?**
Por enquanto, as faixas geradas no app Gemini têm 30 segundos de duração, com letra e arte de capa incluídas. O recurso está disponível para usuários com 18 anos ou mais, com limites de geração maiores para assinantes Gemini. Futuramente, o Lyria 3 deve suportar faixas mais longas e outros tipos de entrada de áudio além de voz.

**O Gemini Omni substitui outras ferramentas de edição de vídeo?**
Ainda não. O Gemini Omni Flash está posicionado como ferramenta de criação acessível e iterativa — ideal para remixar conteúdo existente e realizar edições criativas por linguagem natural. Fluxos de trabalho profissionais que exigem controle granular de linha do tempo, colorização precisa ou efeitos avançados continuam dependendo de software dedicado. A própria Google descreve o Omni como ponto de partida, não substituto.

## Fontes e Referências

- [Android Developers Blog — Android 17 is Here](https://developer.android.com/blog/posts/android-17-is-here)
- [Google Blog — June 2026 Pixel Drop](https://blog.google/products-and-platforms/devices/pixel/june-2026-pixel-drop/)
- [Google DeepMind — Introducing Gemini Omni](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/)
- [Google DeepMind — Lyria 3 in the Gemini App](https://blog.google/innovation-and-ai/products/gemini-app/lyria-3/)
- [TechCrunch — Android 17 launches with new multitasking tools as Google expands Gemini features](https://techcrunch.com/2026/06/16/android-17-launches-with-new-multitasking-tools-as-google-expands-gemini-features/)
- [9to5Google — Google teases next Pixel Drop with Screen Reactions and Gemini Omni](https://9to5google.com/2026/06/14/google-ads-tease-next-pixel-drop-with-screen-reactions-and-gemini-omni-video/)
- [Punto Informatico — Android 17 è arrivato con la bolla delle app, Gemini Omni e altre novità](https://www.punto-informatico.it/android-17-bolla-app-gemini-omni-altre-novita/)