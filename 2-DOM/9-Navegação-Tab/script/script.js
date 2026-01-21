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

function scrollTitulo () { //Por ordem
   const linkInterno = document.querySelectorAll("a[href^='#']")
   const tituloInternos = document.querySelectorAll(".js-scroll")

   if (linkInterno.length) {
      linkInterno.forEach((item, index) => {
         
         item.addEventListener("click", (event) => {
            event.preventDefault()
            const localScroll = {top: tituloInternos[index].offsetTop, behavior: "smooth"}
            window.scroll(localScroll)
         })
      })
   }
}

function scrollInternoSuave () { //Por href===id
   const linkInterno = document.querySelectorAll("a[href^='#']")

   linkInterno.forEach(item => {
      
      item.addEventListener("click", (event) => {
         const linkInterno = event.target.getAttribute("href")
         const tituloInterno = document.querySelector(linkInterno)
         event.preventDefault()
         
         const scrollTo = {top: tituloInterno.offsetTop, behavior: "smooth"}
         window.scroll(scrollTo)
      })
   })   
}

function TituloAnimadoScroll() {
   const alturaTela = window.innerHeight
   const tituloAnima = document.querySelectorAll(".js-scrollAnima")

   tituloAnima.forEach((item) => {
      item.classList.add("js-scrollAnimação")
   })
   tituloAnima[0].classList.remove("js-scrollAnimação")

   window.addEventListener("scroll", () => {

      tituloAnima.forEach((item) => {
         
         if (item.getBoundingClientRect().bottom > 0 && item.getBoundingClientRect().top < alturaTela*0.85) {
            item.classList.remove("js-scrollAnimação")
         }
         else if (item.getBoundingClientRect().bottom < 0 || item.getBoundingClientRect().top > alturaTela*0.7) {
            item.classList.add("js-scrollAnimação")
         }
      })
   })
}

// scrollTitulo ()
animaisTexto()
perguntasFaqc()
scrollInternoSuave()
TituloAnimadoScroll()



