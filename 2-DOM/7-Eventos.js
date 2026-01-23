/*
addEventListener
   Um evento é qualquer coisa que o usuário faz ou que o navegador dispara:
   *keydown      - quando uma tecla é pressionada
   *keyup        - quando uma tecla é solta
   *keypress     - quando se segura uma tecla pressionada
   *key          - detecta a tecla pressionada
   
   *click        - quando alguém clica
   *dblClick     - quando alguém da um click duplo
   *mousemove    - quando o mouse move
   *mouseout     - quando o mouse entra em determinada área
   *mouseenter   - quando o mouse sai de determinada área

   *scroll       - quando a página rola

   *load         - quando a página terminou de carregar
   *input        - quando algo foi digitado

   *touchstart   - dedo tocou na tela

   Ainda há muitos eventos que o estudante pode procurar de acordo com seus objetivos

   É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima. A função de callBack não será utilizada aqui porque gostaria que acontecesse um processo repetição da escrita e leitura para ter um melhor apredizado.
   A estrutura para chamar o #addEventListener:

   *Ex: elemento.addEventListener("evento", função)

   Para que não fique confuso o exemplos abaixo, os exemplos abaixo poderão ser acionado ou removidos com uma tecla.

   *keydown, keyup, key, keypress
      A interação por teclado é uma das formas mais antigas e fundamentais de comunicação entre o usuário e o computador. Em aplicações Web, especialmente formulários, sistemas interativos e jogos, o JS fornece mecanismos específicos para capturar e interpretar ações do teclado. 

      Os eventos do teclado são eventos do DOM disparados quando o susuário pressiona ou solta uma tecla física do teclado. Eles permitem que o JS reaja imediatamente às ações do usuário, esses eventos são representados pelo objeto #KeyboardEvent.

      Agora todos os exemplos terão uma flag de ativação para que não fique confuso o console, pois também o console poderá não ter a ordem correta dos exemplos abaixo. Também foi configurado no HTML para que o JS seja carregado primeiramente (#defer), para depois os outros componentes.
*/

function limparConsole() {
   document.addEventListener("keydown", (event) => {
      if (event.code === "KeyC") {
         console.clear()
      } 
   })
}
limparConsole()

//-----------------------------------------------------------------------------
let estado = {Ex11:false, Ex12:false, Ex13:false, Ex14:false, Ex15:false}


if (estado["Ex11"]) {

   document.addEventListener("keydown", (event) => {
      console.log("Exemplo 1.1 - keydown")
      console.log(true) // Aqui verificamos se alguma tecla foi pressionada
      console.log(event.key) //Aqui verificamos qual tecla foi pressionada
   })

}

/*
Agora iremos especificar se alguma tecla foi apertado no form para isso devemos primeiro selecionar onde o evento irá ocorrer.*/

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

/*
   *click, dblclick, mousemove
      A interação por maouse é um dos pilares das interfaces gráficas modernas. No desenvolvimento Web, o JS permite capturar e interpretar ações do usuário por meio dos eventos de mouse, possibilitando desde simples cliques em botões até sistemas complexos de arrastar, desenhar e controlar jogos.

      Esses eventos são representados pelo objeto #MouseEvent, que contém informações detalhadas sobres a interação.

      Abaixo temos um exemplo que registra um click e outro dbclick, é bom que apenas um deles estejam ativados para o mesmo elemento para não causar conflitos lógicos.
*/ 
let estado2 = {Ex21:false, Ex22:false, Ex23:false, Ex24:false, Ex25:false}

if (estado2["Ex21"]) {

document.addEventListener("click", (event) => {
   console.log("Exemplo 2.1 - click")
   console.log(true)
})

}

if (estado2["Ex22"]) {

   document.addEventListener("dblclick", (event) => {
      console.log("Exemplo 2.2 - dblclick")
      console.log(true)
   })

}

/*Temos agora um evento que ocorre sempre que o cursor do mouse de move sobre um elemento. Temos que tomar muito cuidado com ele pois o registro de informações pode deixar sua página lenta, pois ele é registrado várias vezes por segundo.*/

if (estado2.Ex23) {

   document.addEventListener("mousemove", () => {
      console.log("Exemplo 2.3 - mousemove")
      console.log(true)
   })

}

/*Podemos verificar se ao mover o mouse ele entrou em determinada área ou sai. */
const divFilhoSozinho = document.querySelector("#filhoSozinho")

if (estado2["Ex24"]) {

   divFilhoSozinho.addEventListener("mouseenter", () => {
      console.log("Exemplo 2.4 - mouseenter")
      console.log("Entrou")
   })

   divFilhoSozinho.addEventListener("mouseout", () => {
      console.log("Exemplo 2.4 - mouseout")
      console.log("Saiu")
   })
   
}

/*Observe que ser for usadao o .pai como referência teremos uma informação que o mouse saiu do elemento pai ao entrar no elemento filho. Por isso é importante conhecer o #mouseleave, que é quando o mouse sai completamente do elemento, ignorando seus filhos
*/
const divPai = document.querySelector(".pai")

if (estado2["Ex25"]) {

   divPai.addEventListener("mouseout", () => {
      console.log("Exemplo 2.5 - mouseout divPai")
   })

   divPai.addEventListener("mouseleave", () => {
      console.log("Exemplo 2.5 - mouseleave divPai")
   })

}

/*
   *scroll
      O evento é disparado sempre que ocorre uma mudança na posição de rolagem de um elemento que possui conteúdo maior do que sua área visível, ou da própria janela do navegador (window)
      
      Em termos práticos, ele permite ao JS reagir ao movimento do usuário pela página, tornando possível criar efeitos visuais, carregar conteúdo dinamicamente, sincronizar elementos com a rolagem e controlar a experiência de navegação, porém deve-se tomar cuidado com o seu uso, pois ela facimente pode travar sua páginar, a manipulação no DOOM são muito custosas.*/ 
let estado3 = {Ex31:false, Ex32:false, Ex33:false, Ex34:false}

estado3.Ex31 = false
if (estado3["Ex31"]) {

   document.addEventListener("scroll", () => {
      console.log("Exemplo 3.1 - scroll - " + true)
   })
   
}

      /*Podemos ter informações dos valores que representam a posição atual do viewport em relação ao documento, como esse é um evento do window, não se deve usar document para ter acesso as informações da barra lateral de sua página.*/

estado3.Ex32 = false
if (estado3["Ex32"]) {

   document.addEventListener("scroll", () => {
      console.log("Exemplo 3.2 - scrollX || scrollY")
      console.log(window.scrollX + " || " + window.scrollY)
   })
}

/*
   *window.scroll()
      É um método usado para mover a área visível (viewport) da janela para uma posição específica da página. Com esse método é possível realizar animações elementares de scroll ao click do usuário. Nós teremos duas formas de sixtaxe:
      *Ex: window.scroll(x,y)
*/ 

estado3.Ex33 = false
if (estado3["Ex33"]) {

   document.addEventListener("click", () => {
      window.scroll(0, 400)
      console.log(window.scrollY)
   })
}

/*
      Hoje há uma forma mais usada para permitir a animação do scroll de forma mais suave, para isso é utilizado um objeto.
      *Ex: window.scroll({left:0, top:0, behavior:"smooth"})
*/

estado3.Ex34 = false
if (estado3["Ex34"]) {
   document.addEventListener("click", () => {
      window.scroll({top:600, behavior:"smooth"})
      console.log(scrollY)
   })
}
      
/*
event.target e event.currentTarget
   Agora que já vimos um pouco sober eventos é importante que saibamos diferenciar quais são esse elementos que muitas vezem pode causar confunsão por termos container que estão dentro um do outro.
   
   *event.target
      Representa o elemento mais interno onde o evento realmente ocorreu, é o alvo original
      
   *event.currentTarget
      Representa o elemento que está executando o listener no momento, ele irá apresentar os elementos da árvore a partir do ponto pedido
*/
let estado4 = {Ex41:false, Ex42:false}

estado4.Ex41 = false
if (estado4["Ex41"]) {

   document.addEventListener("click", (event) => {
         console.log("Exemplo 4.1 - event.target")
         console.log(event.target)
      })

}

const body = document.querySelector("body")
const pai = document.querySelector(".pai")

estado4.Ex42 = false
if (estado4["Ex42"]) {

   body.addEventListener("click", (event) => {
      console.log("Exemplo 4.2 - event.currentTarget - body")
      console.log(event.currentTarget)
   })

   pai.addEventListener("click", (event) => {
      console.log("Exemplo 4.2 - event.currentTarget - .pai")
      console.log(event.currentTarget)
   })
}

/*
preventDefault()
   Em aplicações Web, muitas interações so usuário possuem comportamentos padrão definidos pelo navegador. Esses comportamentos existem para garantir usabilidade, acessibilidade e consistência entre sites. No entanto, ao desenvolver interfaces interativas ou sistemas mais complexos, muitas vezes é necessário impedir esse comportamento padrão e assumir o controle total da ação.
   
   Surge então um método do objeto event usado para cancelar o comportamento padrão do navegador associado a um evento. Ele não impede o evento de existir, apenas impede a ação padrão que o navegador executaria.*/ 
let estado5 = {Ex51:false, Ex52:false, Ex53:false, Ex54:true}

const link = document.querySelector("a")

estado5.Ex51 = false
if (estado5["Ex51"]) {

   document.addEventListener("keydown", (event) => {
      if (event.code === "KeyP") {
         console.log("Exemplo 5.1 - preventDefault()")
         console.log("Link desativado")
         link.addEventListener("click", (event) => {
            event.preventDefault()
         })
      }
   })

}

/*
this
   A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado, ele será usado para evitar de ficar reescrevendo muitas vezes o mesmo elemento.
   
   É importante lembrar que this não funciona com Arrow function. Sem um objeto para apontar ele será o window.*/ 

estado5.Ex52 = false
if (estado5["Ex52"]) {

   document.addEventListener("keydown", (event) => {
      if (event.code === "KeyT") {
         console.log("\n\tExemplo 5.2 - this com window")
         console.log(this)
      }
   })

}

console.log("\n\tExemplo 5.3 - this")
const filho11 = document.querySelector("#filho12")

estado5.Ex53 = false
if (estado5["Ex53"]) {

   filho11.addEventListener("click", function addClass() {
      console.log("\n\tExemplo 5.3 - this com objeto")
      console.log(filho11)
      console.log(this)
      this.classList.toggle("preto")
   })

}

/*
forEach e Eventos
   O método addEventListener é adicionado à um único elemento, então é necessário primeiramente chamar um loop para que seja implementado o evento em cada item dessa lista.*/ 

console.log("\n\tExemplo 4 - forEach")
const filhosAll = document.querySelectorAll(".pai2 .filho")

estado5.Ex54 = false
if (estado5["Ex54"]) {
   
   filhosAll.forEach((item) => {
      
      item.addEventListener("click", () => {
         console.log("\n\tExemplo 5.4 - forEach e eventos")
         item.classList.toggle("preto")
      })
   })

}



