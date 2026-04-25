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

const container1 = document.querySelector(".container1")

container1.addEventListener("mousemove", (event) => {
	console.log("Exemplo 1 - Evento sem Debounce")
})

/*
-Com Debounce
   No exemplo abaixo o Debounce estará ativo para que o evento não dispare muitas vezes
*/

//No exemplo abaixo tempo um evento que é disparado várias vezes, mas a sua resposta irá demorar 1 segundo para chegar.
function Debounce1() {
	const container2 = document.querySelector(".container2")
	let tempo = 1000

	container2.addEventListener("mousemove", (event) => {
		tempo = setTimeout(() => {
			console.log("Exemplo 1 - Evento com Debounce")
		}, 1000)
	})
}

/*
No exemplo abaixo iremos acrescentar um comando para que o timer seja cancelado antes de criar um novo timer, assim a mensagem não irá aparecer enquanto o mouse estiver em movimento constante, ela irá aparecer quando o mouse parar pelo intervalo de tempo desejado.

!Se você usar debounce em scroll para animar elementos entrando na tela, enquanto a pessoa continuar rolando sem parar, a função debounced pode nunca executar, então o título só animaria quando o scroll parar, o que muitas vezes não é a UX desejada.
*/
function Debounce2() {
	const container2 = document.querySelector(".container2")
	let tempo = null

	container2.addEventListener("mousemove", (event) => {
		clearTimeout(tempo)

		tempo = setTimeout(() => {
			console.log("Exemplo 1 - Evento com Debounce")
		}, 200)
	})
}

// Debounce1()
Debounce2()
