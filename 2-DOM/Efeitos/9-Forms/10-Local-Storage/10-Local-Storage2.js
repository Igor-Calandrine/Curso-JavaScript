const form = document.querySelector("form")
const textArea = document.querySelector("#textarea")
const circulo = document.querySelector("#circulo")
const config = document.querySelector(".config")

document.addEventListener("DOMContentLoaded", () => {
   if (localStorage) {
      for (i=0; i <= (localStorage.length -1); i++) {
         textArea.style[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
      }
   }
})

form.addEventListener("input", (event) => {
   const target = event.target

   textArea.style[target.name] = target.value + target.dataset.unidade
   localStorage.setItem(target.name, target.value + target.dataset.unidade)

   if (circulo.checked) {
      textArea.style.borderRadius = "50%"
   }

   const estilo = textArea.getAttribute("style")
   let infos = estilo.replaceAll(";", "\n") 
   config.textContent = " " + infos
})








