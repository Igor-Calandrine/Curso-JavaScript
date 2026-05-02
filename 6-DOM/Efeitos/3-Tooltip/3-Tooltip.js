/*
-Tooltip
   É um pequeno elemento visual que aparece quando o usuário passa o mouse, foca ou toca em um compenente da interface, exibindo uma dica curta e contextual. Ele serve para explicar algo sem poluir a interface, mostrando informação sob demanda.

   Há diferentes formas de criar um Tooltip
   *Nativa do HTML
      É bem simples, funciona sem CSS e JS mas não será possível estilizar e dependerá do navegador

   *Tooltip com CSS
      Fica escondido com opacity e visibility e ao passar o mouse em cima o :hover fará a animação

   *Tooltip com JS
      Agora veremos como fazer em JS, primeiro criaremos uma div que será position absolute e relativo ao local onde deve aparecer.

      Ele será ativado com um evento, assim que o mouse entrar em determinada área. 
      Em seguida seu posicionamente por um evento em que o mouse se move, para que ele seja atualizado constantemente.

      E por último, ele será desativado assim que o mouse sair da determinada área.

      Para otimizações é interessante desativar os eventos desnecessários assim que o mouse sai da área e depois ative novamente assim que entrar.
*/ 
"use strict";

const tooltip = document.querySelector('[data-tooltip="tooltip"]')
const divfilho = document.querySelectorAll(".container-filho") 

divfilho.forEach((item) => {

   function mouseEntra() {
      tooltip.classList.add("ativo")
      item.addEventListener("mousemove", mouseMove)
      item.addEventListener("mouseleave", mouseSai)
   }

   function mouseMove(event) {
      tooltip.style.top = (event.clientY + 10) + "px"
      tooltip.style.left = (event.clientX + 10) + "px"
   }

   function mouseSai() {
      tooltip.classList.remove("ativo")
      item.removeEventListener("mousemove", mouseMove)
      item.removeEventListener("mouseleave", mouseSai)
   }

   item.addEventListener("mouseover", mouseEntra) 
   item.addEventListener("mousemove", mouseMove)
   item.addEventListener("mouseleave", mouseSai)
})



