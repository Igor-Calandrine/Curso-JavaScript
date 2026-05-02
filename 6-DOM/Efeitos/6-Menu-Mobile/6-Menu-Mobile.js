/*
-Menu Mobile
   É uma adaptação da navegação do site para telas pequenas (celular e tablet), como não há espaço suficiente para mostrar todos os links horizontalmente, o menu costuma ficar oculto e ser exibido apenas quando o usuário interage, normalmente clicando em um botão ☰.

   Um menu mobile bem feito, normalmente usa:

   *<button> em vez de <div>
   *Usa aria-expanded
   *Funciona também com o teclado

   *HTML
   Primeiramente iremos criar uma estrutura HTML em que haverá um <button> para logo em seguida ter um <nav>, se caso seja necessário, deixar o Menu Mobile desativado até um determinado screen

   *CSS
   Deve-se colocar display:none no menu para que ele seja ativo apenas quando receber um click. Com position absolute deve-se posicioná-lo no local desejado

   *JS
   Ao click no Menu Mobile a classe .ativo será acrescentada e assim ele trocará de display: none para grid, ou qualquer outro que você preferir. 
   Vamos seguir a mesma lógica de um Drop Menu para que ele interaja com o click dentro e fora.
*/ 

const botaoMobile = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu ul")

botaoMobile.addEventListener("click", () => {
   menu.classList.toggle("ativo")
   botaoMobile.classList.toggle("ativo")
})

window.addEventListener("click", (event) => {
   const menusAtivo = document.querySelectorAll(".ativo[data-dropdown]")
   const elemento = event.target.closest("[data-dropdown]")
   
   if (!elemento) {
      botaoMobile.classList.remove("ativo")
      menusAtivo.forEach((item) => {
         item.classList.remove("ativo")
      })
   }
})
