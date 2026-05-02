/*
-Slides
   Um Slides em uma página web é um componente visual usado para exibir diferentes conteúdos dentro da mesma área da tela, permitindo que o usuário navegue entre eles sem mudar a página. Esses conteúdos podem ser imagens, textos, cards, banners produtos ou qualquer outra elemento HTML.

   Um slide funciona como uma janela de visualização que mostra apenas um item, ou alguns por vez, enquanto os demais permanecem ocultos ou fora da áre visível. Quando o usuário interage, clicando em setas, indicadores, arrastando com o mouse ou deslizando no touch, o conteúdo muda para o próximo ou anterior.

   Do ponto de vista técnico, um slide geralmente é construído com:
      *HTML para estruturar os itens do slide
      *CSS para controlar layout, esconder excessos e criar animações
      *JavaScript para alterar qual item está visível e constrolar a navegaçao

-HTML
   Para construir um sistema de slides HTML, é necessário organizar os elementos em uma estrutura que permita controlar o que será exibido, o que ficará oculto e o que será movimentado durante a navegação. Essa estrutura é dividida em 3 partes principais:
      *Container Principal
      *Área de Visualização
      *Item do Slide

   Para dar a sensação de infinito, basta clonar os slides das extremidades e depois posicioná-los.
      *[clone 3] [1] [2] [3] [clone 1]

-CSS
   O primeiro passo é organizar os slides horizontalmente em uma única linha, criando a base estrutural necessária para que o conjunto passa ser deslocado horizontalmente.
      *display: flex

   Segundo devemos configurar a viewport como uma área de recorte visual, para que apenas parte deles deve aparecer para o usuário.
      *width: 80vw
      *overflow:hidden

   Cada slide precisa porruir uma largura bem definida, assim podemos garantir que todos ocupem um espaço dentro do track, permitindo calcula corretamente quanto o slider deve se mover a cada navegação.
      *flex-shrink:0

   O movimento do slide irá consister em reposicionar os itens através de um deslocamento.
      *transform: translate3d(-400px, 0, 0);

-JavaScript
   Sua principal função é movimentar horizontalmente o elemento que contém todos os slides, reposicionando-o dentro da área visível sempre que houver uma mudança de slice.

   É necessário manter uma variável que armazene qual slide está ativo no momento. Essa variável funciona como um ídice de posição e representa qual item da sequência deve estar vísíve.
*/

const botao = document.querySelectorAll(".botao")
const track = document.querySelector(".track")
const slide = document.querySelectorAll(".slide")

let posicaoSlide = -310
const deslocamentoSlide = -310
const limiteEsquerda = 0
const limiteDireita = deslocamentoSlide * 10

/*
   Abaixo iremos criar um evento nos botões para que a pessoa click e o slide tro que deposição para o próximo ou anterior.

   Primeiro iremos checar qual slide está atualmente para passar para o próximo
*/

botao.forEach((item) => {
	item.addEventListener("click", (event) => {
		//Desloca para esquerda no click
		if (event.target == botao[0] && posicaoSlide != limiteEsquerda) {
			posicaoSlide -= deslocamentoSlide

			slide.forEach((item) => {
				item.style.transform = `translate3d(${posicaoSlide}px, 0, 0)`
			})
		}

		//Desloca para esquerda no click
		else if (event.target == botao[1] && posicaoSlide != limiteDireita) {
			posicaoSlide += deslocamentoSlide

			slide.forEach((item) => {
				item.style.transform = `translate3d(${posicaoSlide}px, 0, 0)`
			})
		}
	})
})

/*
   Agora vamos acrescentar no interface pequenos botões que indicam quantos slides tem e podendo dar ao cliente a opção de ir diretamente a eles.

   Primeiro vamos capiturar todos os elementos para depois ele deslocar o slide de acordo com o click
*/

const opcaoSelecao = document.querySelectorAll(".opcao")
console.log(opcaoSelecao)

opcaoSelecao.forEach((item, index) => {
	item.addEventListener("click", (event) => {
		let indexItem = index

		slide.forEach((item) => {
			posicaoSlide = -310 - indexItem * 620

			item.style.transform = `translate3d(${posicaoSlide}px, 0, 0)`
		})
	})
})

/*
   Para permitir que um slide seja movimentado quando o usuário segura e arrasta uma imagem lateralmente, é necessario transformar a interação do mou em deslocamento visual do slider.

   *1º -
      Como iremos realizar um evento em que a pessoa irá arrastar um elemento na tela, devemos evitar o comportamente de mover objetos quando seguramos algo, assim evitaremos um mal funcionamento.

   *2º -
      Devemos criar um evento que irá detectar quando o usuário segura seu click para ativar o evento de movimentação do mouse no elemento pai para que não tenhamos problemas com o evento quando o mouse passar por um gap. 
      
      Também é importante lembrar que devemos desativar logo em seguida quando o mouse for solto, para isso usaremos o #document como referência, para que ele possa ser solto em qualquer área também fora do evento, assim podemos evitar um mal comportamento quando a pessoa segura mas solta fora da área de evento, não desativando corretamente.
   
   *3º -
      Iremos criar 2 constantes para registrar a posição inicial quando o usuário da mousedown e a final em mouseup, e posteriormente guardar essa informação de deslocamento para decidir se haverá um movimento e para que lado.

      Foi craido uma flag para indicar que o movimento esta arrastando a fim de separar do evento de botão que irá ativar o deslocamento no click.

   *4º - 
      Para criar a animação de quando a pessoa segura é importante desativar no CSS o transition para evitar mau comportamento. 

      Depois iremos posicionar o slide de acordo com o deslocamento do mouse apartir da posição inicial em que esta o slide

   
   Quando o usuário solta o mouse, o sistema ecenrra o arrasto e analisa a distância total percorrida. Se o deslocamente ultrapssar um limite mínimo dedinido, entende-se que houve intenção de trocar de slide, caso contrário, o slide retorna para aposição original, como se o arrasto tivesse sido cancelado.

   Durante o arrasto geralmente se desativa a transição do CSS, isso é ncessário porque o movimento precisa acompnhar o ponteiro instantâneamente, sem animação suavizada. Depois a transição é reativada pra o encaixe final no próximo slide.

   Foi craido uma flag para indicar que o movimento esta arrastando a fim de separar do evento de botão que irá ativar o deslocamento no click.
*/
let XInicial = 0
let XFinal = 0
let deslocamentoX = 0
let deslocamentoArrasta = 0
let posicaoArrasta
let flagArrasta = false
const limiteMov = 200

function mouseMove() {
	event.preventDefault()
	deslocamentoArrasta = event.clientX - XInicial
	posicaoArrasta = posicaoSlide + deslocamentoArrasta

	console.log(deslocamentoArrasta)
	console.log(posicaoArrasta)
	// console.log(XInicial)

	slide.forEach((item) => {
		item.style.transition = "none"
		item.style.transform = `translate3d(${posicaoArrasta}px, 0, 0)`
	})
}

//Ativa evento de movimentação
track.addEventListener("mousedown", (event) => {
	event.preventDefault()
	XInicial = event.clientX
	flagArrasta = true

	document.addEventListener("mousemove", mouseMove)
})

//Desativa evento de movimentação
document.addEventListener("mouseup", (event) => {
	XFinal = event.clientX
	deslocamentoX = XFinal - XInicial

	document.removeEventListener("mousemove", mouseMove)

	//Condiciona se haverá movimento e para que lado
	if (deslocamentoX <= -limiteMov && flagArrasta) {
		posicaoSlide += deslocamentoSlide * 2

		slide.forEach((item) => {
			item.style.transition = "0.5s"
			item.style.transform = `translate3d(${posicaoSlide}px, 0, 0)`
		})
	}

	if (deslocamentoX >= limiteMov && flagArrasta) {
		posicaoSlide -= deslocamentoSlide * 2

		slide.forEach((item) => {
			item.style.transition = "0.5s"
			item.style.transform = `translate3d(${posicaoSlide}px, 0, 0)`
		})
	}

	flagArrasta = false
})
