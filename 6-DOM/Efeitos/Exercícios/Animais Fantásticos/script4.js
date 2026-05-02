// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInterno = document.querySelectorAll("a[href^='#']")

linkInterno.forEach((item) => {

   item.addEventListener("click", (event) => { 
   if (!item.classList.contains("ativo")) {
      event.preventDefault()}
 
   linkInterno.forEach((link) => {
      link.classList.remove("ativo")
   })
   
   event.currentTarget.classList.add("ativo")
})   
})

window.addEventListener("click", (event) => {
   console.log("\n\tEx1")
   console.log(linkInterno)

})


   
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosAll = document.querySelector("body")

todosAll.addEventListener("click", (event) => {
   console.log("\n\tEx2.1")
   console.log(event.target)
})

//target mostra o objeto clicado

const todosAll2 = document.querySelectorAll("aside")

todosAll2.forEach((item) => {
   item.addEventListener("click", (event) => {
      console.log("\n\tEx2.2")
      console.log(event.currentTarget)
   })
})

//currentTarget mostra o objeto e em tudo que ele esta contido apartir do elemento selecionado.





// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


window.addEventListener("click", (event) => {
   const elementoClicado = event.target
   // elementoClicado.remove() 
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const geralHtml = document.querySelector("html")



geralHtml.addEventListener("keydown", (event) => {
   if (event.key === "t" || event.key === "T") {
      console.log(event.key)
      geralHtml.classList.toggle("htmlMaior")

   }
})

