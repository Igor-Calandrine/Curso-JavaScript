/*
addEventListener
   Um evento é qualquer coisa que o usuário faz ou que o navegador dispara:
   *click        - quando alguém clica
   *dbleClick    - quando alguém da um click duplo
   *mousemove    - quando o mouse move

   *keydown      - quando uma tecla é pressionada
   *keyup        - quando uma tecla é solta
   *key          - detecta a tecla pressionada

   *scroll       - quando a página rola

   *load         - quando a página terminou de carregar
   *input        - quando algo foi difitado

   *touchstart   - dedo tocou na tela

   Ainda há muitos eventos que o estudante pode procurar de acordo com seus objetivos

   É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima.
   A estrutura para chamar o #addEventListener:

   *Ex: elemento.addEventListener("evento", função)

   Para que não fique confuso o exemplos abaixo, os exemplos abaixo poderão ser acionado ou removidos com uma tecla.

   *keydown, keyup, key
      A interação por teclado é uma das formas mais antigas e fundamentais de comunicação entre o usuário e o computador. Em aplicações Web, especialmente formulários, sistemas interativos e jogos, o JS fornece mecanismos específicos para capturar e interpretar ações do teclado. 

      Os eventos do teclado são eventos do DOM disparados quando o susuário pressiona ou solta uma tecla física do teclado. Eles permitem que o JS reaja imediatamente às ações do usuário, esses eventos são representados pelo objeto #KeyboardEvent.

      Agora todos os exemplos terão uma flag de ativação para que não fique confuso o console, pois também o console poderá não ter a ordem correta dos exemplos abaixo. Também foi configurado no HTML para que o JS seja carregado primeiramente, para depois os outros componentes.
*/

let estado = {Ex11:true, Ex12:false, Ex13:false, Ex14:false, Ex15:false}

function limparConsole() {
   document.addEventListener("keydown", (event) => {
      if (event.code === "KeyC") {
         console.clear()
      } 
   })
}

limparConsole()

//-----------------------------------------------------------------------------


if (estado["Ex11"]) {

   document.addEventListener("keydown", (event) => {
      console.log("Exemplo 1.1 - keydown")
      console.log(true) // Aqui verificamos se alguma tecla foi pressionada
      console.log(event.key) //Aqui verificamos qual tecla foi pressionada
   })

}

/*
Agora iremos especificar se alguma tecla foi apertado no form para isso devemos primeiro desativar o evento do Ex1*/

const inputForm = document.querySelector("form") 
if (estado["Ex12"]) {

   inputForm.addEventListener("keydown", (event) => {
      console.log("Exemplo 1.2 - keydown")
      console.log(true + " || " + event.key)
   })

}

/*Agora da mesma forma iremos registrar quando se solta uma tecla, é muito importante para quem quer trabalhar como GameDev. É necessário para registrar quando um estado pode ser alterado*/ 
if (estado["Ex13"]) {
   
   document.addEventListener("keyup", (event) => {
      console.log("Exemplo 1.3 - keyup")
      console.log(true + " || " + event.key)
   })

}

/*É possível também saber se uma tecla está sendo segurada ao ser pressionada*/ 

if (estado["Ex14"]) {

   document.addEventListener("keypress", (event) => {
      console.log("Exemplo 1.4 - keypress")
      console.log(true + " || " + event.key)
   })

}

/*
Para evitar que tenha que se diferenciar um tecla quando é maiúscula ou minúscula, pode-se usar event.code, ela irá retorna a posição da tecla física. Observe que foi utilizado no inpicio desse módulo para limpar o console com a tecla C, observe também que o valor é uma String*/

if (estado["Ex15"]) {

   document.addEventListener("keydown", (event) => {
      console.log("Exemplo 1.5 - event.code")
      console.log(event.key + " || " + event.code)
   })

}























/** @type {HTMLAreaElement} */
//Acima foi colocado o type para que o JS receba na IDE sugestões de eventos
const divPai = document.querySelector(".pai")

console.log("\tExemplo 1.1 - Função de callback")

function clickPai () {
   console.log("\n1.1 - clicou")
}
divPai.addEventListener("click", clickPai)

//-------
console.log("\tExemplo 1.2 - Função definida dentro do evento")

divPai.addEventListener("click", function () {
   console.log("1.2 - clicou")
})

//-------
console.log("\tExemplo 1.3 - Função com Arrow")

divPai.addEventListener("click", () => {
   console.log("1.3 - clicou")
})

/*
Propriedades do event
   Há algumas propriedades do event que são importantes de conhecer, observe no exemplo que a função deve receber o parâmetro event pois há inúmeras propriedade e métodos nele.
      *event.target       - Quem foi clicado
      *event.type         - Tipo de evento
      *event.clientX/Y    - Posição do mouse
      *event.key          - Tecla pressionada
      *preventDefault()   - Cancela ação padrão
   */ 

console.log("\n\tExemplo 2 - Testando eventos")

divPai.addEventListener("dblclick", (event) => {
   console.log(event) //Abra no console para ver suas propriedades
   console.log(event.type)
   console.log(event.target)
   console.log(event.clientX, event.clientY)
   console.log(event.composedPath())
})

divPai.addEventListener("mouseenter", (event) => {
   console.log("\nMouse entrou no elemento pai")
   console.log(event.clientX, event.clientY)
})

window.addEventListener("scroll", (event) => {
   console.log(event.type, event)
})

/*
this
   A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado, ele será usado para evitar de ficar reescrevendo muitas vezes o elemento.*/ 

console.log("\n\tExemplo 3.1 - This")
addEventListener("keydown", (event) => {
   if (event.key === "g" || event.key === "G") {
      console.clear()
      console.log(event.key)
      console.log(this)
   }
})

//É importante lembrar que this não funciona com Arrow function. Sem um objeto para apontar ele será o window

console.log("\n\tExemplo 3.2 - This")
const filho11 = document.querySelector("#filhoSozinho")

filho11.addEventListener("click", function filho11Ativo() {
   console.clear()
   console.log(this)
   console.log(this.classList.toggle("ativo"))
   console.log(this.classList)
})

/*
forEach e Eventos
   O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.
   */ 

console.log("\n\tExemplo 4 - forEach")
const filhosAll = document.querySelectorAll(".pai2 .filho")

filhosAll.forEach( (item) => {
   item.addEventListener("click", () => {
      console.clear()
      item.classList.toggle("preto")
   })
})


