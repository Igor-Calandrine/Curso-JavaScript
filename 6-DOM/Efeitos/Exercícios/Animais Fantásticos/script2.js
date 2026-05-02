// Adicione a classe ativo a todos os itens do menu
console.log("\tExercício 1")

const nav = document.querySelectorAll("nav a")
console.log(nav)

nav.forEach( (item) => {
   item.classList.add("ativo", "teste")
})
console.log(nav)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
console.log("\n\tExercício 2")

console.log(nav)

nav.forEach( (item, indice) => {
   if (indice >= 1) {
      item.classList.remove("ativo")
   }
})
console.log(nav)

// Verifique se as imagens possuem o atributo alt
console.log("\n\tExercício 3")

const imagens = document.querySelectorAll("img")
console.log(imagens)

imagens.forEach( (item) => {
   const alt = item.hasAttribute("alt")
   console.log(alt)

   if (item.hasAttribute("alt")) {
   item.setAttribute("alt", "imagem ilustrativa")
   console.log(item)
}
})

// Modifique o href do link externo no menu
console.log("\n\tExercício 4")

const links = document.querySelectorAll("a")

links.forEach( (item) => {
   console.log(item.getAttribute("href"))

   if (item.getAttribute("href") === "") {
      item.setAttribute("href", "https://www.google.com")
      console.log(item)
   }
})

console.log("\n\tExercício 4.1")
const links2 = document.querySelectorAll("[href]")
console.log(links2)

