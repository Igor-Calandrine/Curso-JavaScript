
// 1 Retorne no console todas as imagens do site

// 2 Retorne no console apenas as imagens que começaram com a palavra imagem

// 3 Selecione todos os links internos (onde o href começa com #)

// 4 Selecione o primeiro h2 dentro de .animais-descricao

// 5 Selecione o último p do site

console.log("\tExercício 1")
const imagens = document.querySelectorAll("img")

imagens.forEach(
   (imagem) => {
      console.log(imagem)
      console.log(imagem.outerHTML)
      console.log("")
   })

imagensArray = Array.from(imagens)
console.log(imagensArray)

/*----------------------------------------------------------*/ 

console.log("\n\tExercício 2 - Utilizando startsWith()")

imagens.forEach((imagem) => {
   const src = imagem.getAttribute("src")
   
   if (src.startsWith("img/imagem")) {
      console.log(src)
   }
})

console.log("\n\tExercício 2.1 - Direto no atributo")

const imagens2 = document.querySelectorAll("[src^='img/imagem']")
console.log(imagens2)

/*----------------------------------------------------------*/

console.log("\n\tExercício 3")

const linkInterno = document.querySelectorAll("[href^= '#']")
console.log(linkInterno)

/*----------------------------------------------------------*/

console.log("\n\tExercício 4")

const h2 = document.querySelector(".descrição h2")
console.log(h2)

/*----------------------------------------------------------*/

console.log("\n\tExercício 5.1")

const pUltimo = document.querySelectorAll("p")

pUltimo.forEach( (p, indice) => {
   if (indice === pUltimo.length - 1) {
      console.log(p)
   }
})

console.log("\n\tExercício 5.2")

pUltimoArray = Array.from(pUltimo)

console.log(pUltimoArray)
console.log(pUltimoArray.at(-1))

console.log("\n\tExercício 5.2")

console.log(pUltimo[pUltimo.length - 1])