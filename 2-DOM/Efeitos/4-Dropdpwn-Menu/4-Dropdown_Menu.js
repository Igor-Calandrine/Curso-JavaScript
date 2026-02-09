/*
-Dropdown Menu
   É um componente de intaface que oculta uma lista de opções e a exibe apenas quando o ususário interage com um elemento principal, como um menu que só aparece quando ocorre um hover, clique, foco.

   Ele é usado para economizar espaço na interface, organizar melhor as opções selecionadas, manter a UI limpa e objetiva.

   *HTML
   Primeiramente no HTML iremos construir um Nav e em seguida uma div que será no Dropdown Menu dentro para ter seu posicionamento referente ao ele.
   Iremos colocar o atributo #data-dropdown no item do menu clicável para abrir e no próprio menu dropdown. Assim eles poderão ser identificados futuramente com bastante facilidade.

   *CSS
   No CSS após colocar seu posicionamento é importante lembrar que deve-se diferenciar os itens com [data-dropdown]. Após isso é interessante construir uma animação para dar suavidade e elegância. Para isso será utilizado um @keyframes

   *JS
   No JS devemos fazer sua ativação do item do Nav fazendo um toggle na sua classe ou receber um click.
   Agora para fechar todos, o que seria o maior problema, será facilmente resolvido ao se verificar se o elemento clicado no window tem o atributo [data-dropdown]. Ao ter o retorn false, todos os elementos perderão sua classe ativa e desaparecerão.

   !É importante usar essas funções para a versão mobile, já que não faz sentido ter um evento hover e nem mouseleave
*/ 
"use strict";

const itemMenu = document.querySelectorAll(".item")
let flagLeave = false

itemMenu.forEach((item) => {

   function dropDownAbrir (event) {
      const dropdown = event.target.querySelector("[data-dropdown]")
      if (dropdown) {
         dropdown.classList.toggle("ativo")
      }
   }
   item.addEventListener("click", dropDownAbrir)
})

function dropDownFecharOutside (event) {
   const dropdowAberto = document.querySelectorAll(".ativo[data-dropdown]")
   const cliqueFora = event.target.closest("[data-dropdown]")
   if (!cliqueFora) {
      dropdowAberto.forEach((item) => {
         item.classList.remove("ativo")
      })
   }
}

function dropDownFehcarEscape (event) {
   if (event.key === "Escape") {
      dropDownFecharOutside(event)
   }
}
window.addEventListener("keydown", dropDownFehcarEscape)
window.addEventListener("click", dropDownFecharOutside)

/*
?Outra maneira de fazer isso foi usando o mesmo método de animações em GameDev, criar uma flag para quando o mouse sair do elemento e caso ocorra um click com a flag a aberta todos os elementos fecham
*/ 

// const itemMenu = document.querySelectorAll(".item")
// let flagLeave = false

// itemMenu.forEach((item) => {

//    function dropDownAbrir (event) {
//       const dropdown = event.target.querySelector("[data-dropdown]")
//       if (dropdown) {
//          dropdown.classList.toggle("ativo")
//       }
//    }
//    item.addEventListener("click", dropDownAbrir)
//    item.addEventListener("mouseleave", () => {
//       flagLeave = true
//    })
//    item.addEventListener("mouseenter", () => {
//       flagLeave = false
//    })
// })


// window.addEventListener("click", () => {
//    if (flagLeave) {
//       const dropdowAberto = document.querySelectorAll(".ativo[data-dropdown]")
//        dropdowAberto.forEach((item) => {
//          item.classList.remove("ativo")
//       })
//    }
// })





