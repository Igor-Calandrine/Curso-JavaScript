/*
-Debounce
   É um técnica muito importante em JS para controlar a frequência com que uma função é executada quando um evento dispara várias vezes em sequência.

   Ela faz com que uma função espere um intervalo de tempo sem novas chamadas antes de executar novamente, resolvendo problemas de eventos que disparam como:

   *input em compo de busca, resize final, mousemove, scroll

-Estrutura
   Sua estrura consiste em realizar o seguinte algorítimo

   Disparar Evento
      Cancelar timer antigo
      Cria timer novo

   Novo evento ocorreu antes do tempo acabar?
      Sim -> Cancela o timer
      Não -> Executa a função do timer

-Sem Debounce
   No exemplo abaixo vamos disparar um evento e ver que suas resposta será dada muitas vezes, o que pode causar:

   *requisições excessivas à API, lentidão, travamentos, má performance
*/

const container1 = document.querySelector("#c1")
let contador = 0

container1.addEventListener("mousemove", (event) => {
	console.log("Exemplo 1 - Evento sem Debounce")
	contador += 1
	container1.style.backgroundColor = `rgb(${95 +contador}, 58, ${130 + contador})`

container1.addEventListener("mouseout", (event) => {
	container1.style.backgroundColor = `rgb(${95}, 58, ${130})`
	contador = 0
})
})

/*
-Com Debounce
   No exemplo abaixo o Debounce estará ativo para que o evento não dispare muitas vezes
*/

//No exemplo abaixo tempo um evento que é disparado várias vezes, mas a sua resposta irá demorar 1 segundo para chegar.
function Debounce1() {
	const container2 = document.querySelector("#c2")
	let tempo = 1000
	let contador = 0

	container2.addEventListener("mousemove", (event) => {
		tempo = setTimeout(() => {
			console.log("Exemplo 2 - Evento com Debounce")
			contador += 1
			container2.style.backgroundColor = `rgb(${255 + contador}, 165, ${0 + contador})`
		}, 1000)
	})

	container2.addEventListener("mouseout", (event) => {
	container2.style.backgroundColor = `rgb(255, 165, 0)`
	contador = 0
	})


}

/*
No exemplo abaixo iremos acrescentar um comando para que o timer seja cancelado antes de criar um novo timer, assim a mensagem não irá aparecer enquanto o mouse estiver em movimento constante, ela irá aparecer quando o mouse parar pelo intervalo de tempo desejado.

!Se você usar debounce em scroll para animar elementos entrando na tela, enquanto a pessoa continuar rolando sem parar, a função debounced pode nunca executar, então o título só animaria quando o scroll parar, o que muitas vezes não é a UX desejada.
*/
function Debounce2() {
	const container = document.querySelector("#c3")
	let tempo = null
		let contador = 0

	container.addEventListener("mousemove", (event) => {
		clearTimeout(tempo)

		tempo = setTimeout(() => {
			console.log("Exemplo 3 - Evento com Debounce")
			contador += 10
			container.style.backgroundColor = `rgb(${95 + contador}, 158, ${160 + contador})`
		}, 200)
	})

	container.addEventListener("mouseout", (event) => {
		container.style.backgroundColor = `rgb(95, 158, 160)`
		contador = 0
	})
}

/*
-Debounce Genérico
	Vamos tornar a função mais genérica, para que ela aceite qualquer evento como argumento e tenhamos o controle do seu tempo

	*Para controlar o item passaremos no argumento #seletor
	*Para controlar o seu tempo acrescentarmos como argumento #delay
	*Para controlar o tipo event passaremos como argumento #evento
*/
function Debounce3(seletor, evento, delay) {
	const container = document.querySelector(seletor)
	let tempo = null

	container.addEventListener(evento, (event) => {
		clearTimeout(tempo)

		tempo = setTimeout(() => {
			console.log("Exemplo 4 - Evento com Debounce código mais genérico")
		}, delay)
	})
} 

Debounce1()
Debounce2()
Debounce3("#c4","mousemove", 500)
