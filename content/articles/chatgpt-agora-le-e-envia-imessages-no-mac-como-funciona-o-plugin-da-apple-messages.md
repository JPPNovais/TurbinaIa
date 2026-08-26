---
title: "ChatGPT Agora Lê e Envia iMessages no Mac: Como Funciona o Plugin da Apple Messages"
description: "OpenAI lançou um plugin que deixa o ChatGPT ler, escrever e enviar iMessages no Mac. Veja como funciona, quem já pode usar e por que Bloomberg e Forbes"
category: ferramentas
tags:
  - ChatGPT
  - OpenAI
  - Privacidade
author: Redação Turbina IA
isFeatured: false
date: "2026-08-26"
coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
---

Na quinta-feira, 20 de agosto, quem abriu o aplicativo do [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) para Mac encontrou um pedido de permissão pouco comum: acesso total ao disco. Aceitar significa deixar o assistente da OpenAI abrir o app Mensagens, vasculhar as conversas guardadas ali e, se autorizado, escrever e disparar uma resposta em seu nome — via iMessage, SMS ou RCS. É o plugin de Apple Messages, e ele transforma o ChatGPT em algo que a maioria das pessoas nunca deixou uma IA fazer antes: ler o histórico de texto com a mãe, o chefe ou o ex.

> **Resposta Rápida (TL;DR):** A OpenAI lançou, em 20 de agosto de 2026, um plugin que permite ao ChatGPT ler, buscar, redigir e enviar mensagens pelo app Mensagens do Mac (iMessage, SMS e RCS). O recurso roda localmente, exige permissão de Acesso Total ao Disco e, por padrão, pede aprovação explícita antes de cada envio — mas [Bloomberg](https://www.bloomberg.com/news/articles/2026-08-20/chatgpt-can-now-control-imessage-potentially-raising-apple-privacy-concerns) e [Forbes](https://www.forbes.com/sites/joetoscano1/2026/08/24/chatgpt-plugin-can-now-read-and-send-your-imessages-but-should-it/) já apontam os riscos de dar a um assistente de IA esse nível de acesso à vida privada. Por ora, funciona só em Macs com chip Apple Silicon.

## O que a OpenAI lançou, na prática

O anúncio veio sem grande cerimônia, dentro de um pacote de atualizações do app de desktop. Segundo a [TechCrunch](https://techcrunch.com/2026/08/20/chatgpt-can-now-send-texts-for-you-with-new-apple-messages-plugin/), o novo plugin de Apple Messages permite que o ChatGPT leia e pesquise as conversas armazenadas no Mensagens do usuário, prepare rascunhos de resposta e — com a aprovação da pessoa — envie a mensagem. Ele conversa com três protocolos diferentes que convivem hoje no mesmo aplicativo da Apple: iMessage (criptografado ponta a ponta entre dispositivos Apple), SMS tradicional e o mais recente RCS, usado em conversas com celulares Android.

Tecnicamente, o plugin não se conecta a nenhum servidor da Apple. De acordo com a cobertura da [9to5Mac](https://9to5mac.com/2026/08/20/chatgpt-update-adds-apple-messages-integration-on-mac/) e da [Engadget](https://www.engadget.com/2241390/openai-chatgpt-imessage-integration/), ele usa tecnologias antigas do macOS — AppleScript e a API de Acessibilidade — para operar o Mensagens como se fosse um usuário controlando o mouse e o teclado, só que por trás de uma instrução em linguagem natural. É o mesmo mecanismo que já sustenta outros recursos do ChatGPT que mexem no computador do usuário, como o Computer Use e o Codex.

Para funcionar, o macOS exige que o usuário conceda Acesso Total ao Disco ao ChatGPT — a mesma permissão pesada que apps de backup e antivírus costumam pedir. É esse detalhe que fez o pedido soar mais invasivo do que um simples "aceitar notificações".


![Imagem ilustrativa sobre ChatGPT Agora Lê e Envia iMessages no Mac: Como Funciona o Plugin da Apple Messages](https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80)

## Como funciona o controle de aprovação

A OpenAI diz que o plugin roda localmente e não constrói um índice permanente de todas as mensagens do usuário — ele lê o que precisa, quando precisa, para responder ao pedido feito na hora. Por padrão, o ChatGPT não envia nada sozinho: monta um rascunho, mostra para a pessoa e só dispara depois de um clique de confirmação.

Existe uma opção de "aprovação persistente", que deixa o assistente enviar mensagens sem pedir confirmação a cada vez. A própria OpenAI desaconselha ativá-la — o texto do aviso, citado por reportagens que testaram o recurso, diz que a aprovação persistente "remove sua última chance de revisar uma mensagem antes que o ChatGPT a envie como se fosse você". Em outras palavras: a empresa sabe que colocou um gatilho sensível nas mãos do usuário e está avisando para não puxá-lo sem pensar.

Isso não elimina o problema de fundo, resumido pela [Bloomberg](https://www.bloomberg.com/news/articles/2026-08-20/chatgpt-can-now-control-imessage-potentially-raising-apple-privacy-concerns): mesmo que o processamento aconteça no aparelho, o conteúdo das conversas que o usuário decide compartilhar com o ChatGPT passa a trafegar pela infraestrutura da OpenAI, sujeito às mesmas políticas de retenção e treinamento que já regem qualquer conversa no app.

## Só em Mac com chip Apple Silicon, por enquanto

Uma limitação técnica que vale anotar: o plugin funciona apenas no aplicativo de desktop do ChatGPT para macOS, e apenas em Macs com processador Apple Silicon (M1 em diante) — não há suporte para os últimos Macs com Intel ainda em uso. A [Bloomberg](https://www.bloomberg.com/news/articles/2026-08-20/chatgpt-can-now-control-imessage-potentially-raising-apple-privacy-concerns) e a 9to5Mac confirmam a restrição, mas as coberturas encontradas nesta apuração divergem sobre a exata amplitude de planos que já têm acesso — algumas relatam disponibilidade só para assinantes ChatGPT Work e Codex, outras descrevem um lançamento mais amplo para o app de Mac como um todo. Na dúvida, a recomendação é simples: quem quiser testar deve abrir o próprio app do ChatGPT no Mac e checar o menu de Configurações → Conectores, onde o plugin aparece listado quando disponível para a conta.


![Imagem ilustrativa sobre ChatGPT Agora Lê e Envia iMessages no Mac: Como Funciona o Plugin da Apple Messages](https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80)

## Como isso se compara a outros assistentes que já mexem no seu computador

O plugin de Mensagens não nasce isolado — ele é a peça mais recente de uma corrida entre assistentes de IA para deixar de responder perguntas e passar a operar o computador do usuário diretamente.

| Assistente | O que já faz no desktop/app | Acesso a mensagens pessoais? |
|---|---|---|
| ChatGPT (plugin Apple Messages) | Lê, redige e envia iMessage/SMS/RCS no Mac | Sim, mediante aprovação por envio |
| Gemini Spark (Google) | Assistente agêntico com integração ao Gmail, segundo a [TechCrunch](https://techcrunch.com/2026/05/19/google-introduces-gemini-spark-a-24-7-agentic-assistant-with-gmail-integration/) | E-mail, não SMS/iMessage |
| Meta AI (app para Mac) | Ditado no sistema e leitura de tela via modelo Muse Spark, segundo a [TechCrunch](https://techcrunch.com/2026/08/20/meta-ais-new-mac-app-wants-you-to-talk-to-your-apps/) | Não; foco em negócios e criadores |

A leitura de tela do Meta AI e o acesso ao Gmail do [Gemini](/blog/prompts-para-gemini) Spark mostram a mesma tendência: cada grande laboratório está disposto a pedir permissões cada vez mais profundas no sistema operacional do usuário em troca de um assistente mais "presente". A diferença é que iMessage guarda, para a maioria das pessoas, o tipo de conversa mais íntima que existe em um smartphone — o que explica por que esse lançamento específico ganhou manchete em vez de nota de rodapé.

## Por que a Bloomberg e a Forbes soaram o alarme

A manchete da Bloomberg resume o desconforto em uma frase: o recurso "potencialmente levanta preocupações de privacidade da Apple" — um jeito educado de dizer que a empresa dona do iMessage não teve, aparentemente, palavra final sobre como a OpenAI passaria a operar dentro do aplicativo nativo do sistema.

Já a coluna da [Forbes](https://www.forbes.com/sites/joetoscano1/2026/08/24/chatgpt-plugin-can-now-read-and-send-your-imessages-but-should-it/) foca num ponto mais prático: a pergunta não é só "o ChatGPT consegue fazer isso com segurança técnica", mas "vale a pena que ele faça isso". A resposta da coluna é cética — o autor lembra que qualquer integração que combine acesso amplo ao disco com a capacidade de agir (enviar mensagens) multiplica o dano possível de um erro do modelo, de um sequestro de sessão ou de uma instrução maliciosa escondida dentro de uma mensagem recebida.

Esse tipo de risco tem nome técnico: [prompt](/prompts) injection por conteúdo externo. Um golpista poderia, em teoria, mandar uma mensagem cujo texto contenha instruções disfarçadas para o assistente — e se o modelo obedecer sem que o usuário perceba, o problema deixa de ser hipotético. É o mesmo receio que já persegue os "agentes de navegador" desde que começaram a operar sites em nome do usuário.

## O que isso significa para quem usa IA no Brasil

Vale um adendo importante: iMessage não é o app de mensagens dominante no Brasil, onde o WhatsApp segue disparado como a plataforma padrão de conversa pessoal. Então, na prática, a maioria dos leitores brasileiros que usa Mac provavelmente não vai sentir o impacto direto deste plugin específico amanhã de manhã.

O que importa aqui é o precedente. A OpenAI já vinha expandindo o ChatGPT para além do chat: hoje o assistente consegue [pedir corrida no Uber, montar playlist no Spotify e fazer pedido no DoorDash](https://techcrunch.com/2026/04/06/how-to-use-chatgpt-apps-doordash-spotify-uber/), segundo reportagem da TechCrunch, e o co-fundador Greg Brockman já descreveu essa direção como um passo rumo a um "super app". Se hoje é o Mensagens da Apple, amanhã pode ser — e provavelmente será — uma integração equivalente com o WhatsApp Business ou com apps de e-mail usados no dia a dia por aqui. Entender como a aprovação por mensagem funciona agora, com o iMessage, é um bom treino para decidir, com calma, o que autorizar quando a mesma pergunta chegar num app que você usa de verdade. Vale revisar, na [Calculadora de Custos](/calculadora) ou no [Comparador de IAs](/comparador), até que ponto plugins como esse mudam o cálculo de custo-benefício de cada assistente antes de conceder qualquer permissão de disco inteiro.

Quem quiser acompanhar quando integrações parecidas chegarem a outros aplicativos e regiões pode seguir o [Monitor de Modelos](/changelog) do Turbina IA, que reúne lançamentos como esse assim que confirmados por fontes primárias.

## O detalhe que passa despercebido: permissão não é sinônimo de controle

Full Disk Access no macOS não é uma permissão cirúrgica — ela não diz "leia só o Mensagens", diz "leia qualquer arquivo que o sistema permitir a um app comum". A OpenAI promete usar esse acesso apenas para o plugin de Mensagens, mas a garantia depende inteiramente da política interna da empresa, não de uma barreira técnica do sistema operacional que impeça um uso mais amplo no futuro. É a mesma lógica de confiança que já rege outros aplicativos com Acesso Total ao Disco — só que, dessa vez, do lado de quem lê é um modelo de linguagem, não um software de backup com comportamento previsível.

## Perguntas Frequentes

### O plugin de Apple Messages do ChatGPT funciona em qualquer Mac?

Não. Por enquanto ele exige um Mac com chip Apple Silicon (a partir do M1) e roda apenas dentro do aplicativo de desktop do ChatGPT para macOS — não há versão para Macs com processador Intel nem para iPhone ou iPad.

### O ChatGPT pode enviar uma mensagem sem eu perceber?

Pelo comportamento padrão, não: o assistente monta um rascunho e pede aprovação explícita antes de cada envio. Existe uma opção de "aprovação persistente" que dispensa essa confirmação, mas a própria OpenAI recomenda não ativá-la, já que ela remove a chance de revisar a mensagem antes do disparo.

### Por que esse lançamento gerou tanta polêmica de privacidade?

Porque ele combina duas coisas sensíveis ao mesmo tempo: acesso de leitura ao histórico de conversas mais pessoais do usuário (via Acesso Total ao Disco) e a capacidade de agir enviando mensagens em nome dessa pessoa. A [Bloomberg](https://www.bloomberg.com/news/articles/2026-08-20/chatgpt-can-now-control-imessage-potentially-raising-apple-privacy-concerns) e a Forbes destacam que essa combinação amplia o estrago possível de qualquer falha do modelo ou de uma tentativa de manipulação escondida numa mensagem recebida.

## Fontes e Referências

- [ChatGPT can now send texts for you with new Apple Messages plugin](https://techcrunch.com/2026/08/20/chatgpt-can-now-send-texts-for-you-with-new-apple-messages-plugin/)
- [ChatGPT Can Now Access and Send Messages in Apple's iMessage App](https://www.bloomberg.com/news/articles/2026-08-20/chatgpt-can-now-control-imessage-potentially-raising-apple-privacy-concerns)
- [ChatGPT Plugin Can Now Read And Send Your iMessages, But Should It?](https://www.forbes.com/sites/joetoscano1/2026/08/24/chatgpt-plugin-can-now-read-and-send-your-imessages-but-should-it/)
- [ChatGPT update adds Apple Messages integration on Mac](https://9to5mac.com/2026/08/20/chatgpt-update-adds-apple-messages-integration-on-mac/)
- [ChatGPT on Mac can now read and respond to Apple iMessages](https://www.engadget.com/2241390/openai-chatgpt-imessage-integration/)
- [How to use the new ChatGPT app integrations, including DoorDash, Spotify, Uber, and others](https://techcrunch.com/2026/04/06/how-to-use-chatgpt-apps-doordash-spotify-uber/)
- [Google introduces Gemini Spark, a 24/7 agentic assistant with Gmail integration, at IO 2026](https://techcrunch.com/2026/05/19/google-introduces-gemini-spark-a-24-7-agentic-assistant-with-gmail-integration/)
- [Meta AI's new Mac app wants you to talk to your apps](https://techcrunch.com/2026/08/20/meta-ais-new-mac-app-wants-you-to-talk-to-your-apps/)