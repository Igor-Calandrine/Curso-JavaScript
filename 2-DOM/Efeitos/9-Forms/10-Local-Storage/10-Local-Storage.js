const form = document.querySelector("form")
const divTextArea = document.querySelector(".elemento-criado")
const textArea = document.querySelector("#textarea")
const fontFamily = document.querySelector("#font-family")
const fontSize = document.querySelector("#font-size")
const spanSize = document.querySelector("[for='font-size'] span")
const color = document.querySelector("#color")
const background = document.querySelector("#back-ground")
const largura = document.querySelector("#largura")
const altura = document.querySelector("#altura")
const borderRadius = document.querySelector("#border-radius")

const circulo = document.querySelector("#circulo")

form.addEventListener("input", (event) => {
   // console.log(circulo.value)
   console.log(event.target.name)
   textArea.style.fontFamily = fontFamily.value

   textArea.style.fontSize = fontSize.value + "px"
   spanSize.textContent = fontSize.value + "px"

   textArea.style.color = color.value
   textArea.style.background = background.value

   textArea.style.width = largura.value + "%"
   textArea.style.height = altura.value + "%"
   textArea.style.borderRadius = borderRadius.value + "%"

   if (circulo.checked) {
      textArea.style.borderRadius = "50%"
   }
   

})