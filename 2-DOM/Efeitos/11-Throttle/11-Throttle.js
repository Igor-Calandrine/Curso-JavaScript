/*
-Throttle
   É uma técnica de controle de fluxo que restringe a frequência máxima com que uma função pode ser executada dentro de um intervalo de tempo definido, independentemente de quantas vezes o evento disparador ocorra nesse período.

   Por exemplo, mesmo que um evento aconteça 500 vezes por segundo, o Throttle garante que sua função rode, por exemplo, apenas 1 vez a cada 200ms

   Resolve o problema em que muitos eventos do navegador acontecem e altíssima frequência como:

   *mousemove, scroll, resize, input

-Estrutura
   Sua estrura consiste em realizar o seguinte algorítimo

   Disparar Evento
      Está bloqueado?
         Sim -> Ignora evento
         Não -> Executa função, Ativa bloqueio, Inicia timer de desbloqueio
      
   No fundo: Timer terminou?
      Sim -> Remove bloqueio

-Sem Throttle
   No exemplo abaixo vamos disparar um evento e ver que suas resposta será dada muitas vezes, o que pode causar:

   *requisições excessivas à API, lentidão, travamentos, má performance
*/ 
const container = document.querySelector("#c1")
let contador = 0

container.addEventListener("mousemove", (event) => {
	console.log("Exemplo 1 - Evento sem Throttle")
	contador += 1
	container.style.backgroundColor = `rgb(${90 +contador}, 58, ${80 + contador})`

container.addEventListener("mouseout", (event) => {
	container.style.backgroundColor = `rgb(90, 58, 80)`
	contador = 0
})
})

/*
-Com Throttle
   Agora o evento irá apenas disparar depois de um determinado tempo

*/ 

function Throttle () {
   const container = document.querySelector("#c2")
   let contador = 0
   let esperando = false

   container.addEventListener("mousemove", () => {

      if (!esperando) {
         console.log("Exemplo 1 - Throttle")
         container.style.backgroundColor = `rgb(${255 + contador}, 165, ${0 + contador})`
         contador += 10
         esperando = true

         setTimeout(() => {
            esperando = false
         }, 100)

      }
   })

   container.addEventListener("mouseout", (event) => {
	container.style.backgroundColor = `rgb(255, 165, 0)`
	contador = 0
   })
}

/*
-Throttle Genérico
   Abaixo temos um genérico para usar em eventos DOM
*/ 

function Throttle1 (seletor, evento, delay) {
   const item = document.querySelector(seletor)
   let esperando = false 

   item.addEventListener(evento, () => {
      
      if (!esperando) {
         console.log("Evento com Throttle")
         esperando = true
         setTimeout(() => {
            esperando = false
         }, delay)
      }
   })
}

Throttle()
Throttle1("#c3", "mousemove", 200)