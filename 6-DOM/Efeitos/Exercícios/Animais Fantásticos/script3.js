// Verifique a distância da primeira imagem
// em relação ao topo da página
console.log("\n\tExercício 1")

const img1 = document.querySelector(".animais")
const img2 = document.querySelector("img")

console.log(img1.offsetTop)
console.log(img2.offsetTop)

const total = img1.offsetTop + img2.offsetTop
console.log(total)

// Retorne a soma da largura de todas as imagens
console.log("\n\tExercício 2")

const imgAll = document.querySelectorAll("img")
let widthTotal = 0

imgAll.forEach( (item) => {
   console.log(item.clientWidth)
   widthTotal += item.clientWidth
})

console.log(widthTotal)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
console.log("\n\tExercício 3")

const linksTamanho = document.querySelectorAll("a")

linksTamanho.forEach( (item) => {
   console.log(item.clientHeight)
   const itemRect = item.getBoundingClientRect()

   if (itemRect.height >= 48 && itemRect.width >= 48) {
      console.log(true)
   }
   else {
      console.log(false)
      console.log(`X:${itemRect.width} | Y:${itemRect.height}\n`)
   }
})

linksTamanho.forEach( (item) => {
   console.log(item.clientHeight)
})
// console.log(item.clientHeight) estar retornando 0 para seus <a> é que, por padrão, <a> é um elemento inline. Elementos inline não têm caixa de layout com altura própria.


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
console.log("\n\tExercício 4")

const displayWin = window.matchMedia("(max-width:720px")
const navMobile = document.querySelector("nav")

if (displayWin.matches) {
   navMobile.classList.add("menu-mobile")
   console.log("Tela menor que 720px")
} 
else {
   navMobile.classList.remove("menu-mobile")
   console.log("Tela maior que 720px")
}

console.log(navMobile.classList)


