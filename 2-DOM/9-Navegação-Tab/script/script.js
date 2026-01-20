const animaisImg = document.querySelectorAll(".js-animais img")
const animaisText = document.querySelectorAll(".js-descrição div")

function animaisTexto () {
   animaisText.forEach((animalText) => {
      animalText.classList.add("js-desativo")
   })
   animaisText[0].classList.toggle("js-desativo")  

   if (animaisImg.length && animaisText.length) {

      animaisImg.forEach((animal, index) => {
         animal.addEventListener("click", () => {
            animaisText.forEach((animalText) => {
               animalText.classList.add("js-desativo")
            })
            animaisText[index].classList.toggle("js-desativo")
         })
      }) 
   }

}

function perguntasFaqc() {
   const perguntasFaq = document.querySelectorAll(".js-pergunta")

   perguntasFaq.forEach((pergunta) => {
      pergunta.nextElementSibling.classList.add("js-resposta-desativa")

      pergunta.addEventListener("click", () => {
         pergunta.classList.toggle("js-desativa-p")
         pergunta.nextElementSibling.classList.toggle("js-resposta-desativa")

      })
   })
   perguntasFaq[0].nextElementSibling.classList.remove("js-resposta-desativa")
   perguntasFaq[0].classList.add("js-desativa-p")

}
 







animaisTexto()
perguntasFaqc()



