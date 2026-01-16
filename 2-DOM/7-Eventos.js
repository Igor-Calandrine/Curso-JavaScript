/*
addEventListener
   Um evento é qualquer coisa que o usuário faz ou que o navegador dispara:
   *click        - quando alguém clica
   *dbleClick  - quando alguém da um click duplo
   *mousemove    - quando o mouse move

   *keydown      - quando uma tecla é pressionada
   *keyup        - quando uma tecla é solta

   *scroll       - quando a página rola

   *load         - quando a página terminou de carregar
   *input        - quando algo foi difitado

   *touchstart   - dedo tocou na tela

   Ainda há muitos eventos que o estudante pode procurar de acordo com seus objetivos

   É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima.
   A estrutura para chamar o #addEventListener:

   *Ex: elemento.addEventListener("evento", função)
*/ 

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


