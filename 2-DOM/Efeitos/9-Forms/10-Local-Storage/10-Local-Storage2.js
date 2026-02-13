const form = document.querySelector("form")
const textArea = document.querySelector("#textarea")
const circulo = document.querySelector("#circulo")
const config = document.querySelector(".config")

let estilos = {}

form.addEventListener("input", (event) => {
   const target = event.target

   textArea.style[target.id] = target.value + target.dataset.unidade
   estilos[target.id] = target.value + target.dataset.unidade
   
   if (circulo.checked) {
      textArea.style.borderRadius = "50%"
      estilos[borderRadius] = "50%"
   }

   const estilo = textArea.getAttribute("style")
   let infos = estilo.replaceAll(";", "\n") 
   config.textContent =" " + infos
}) 



