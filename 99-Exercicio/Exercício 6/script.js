// Retorne o url da página atual utilizando o objeto window

// Seleciona o primeiro elemento da página que
// possua a classe ativo

// Retorne a linguagem do navegador

// Retorne a largura da janela

console.log("Exercício 1")
console.log(window.location)
console.log(window.location.href)



console.log("Exercício 2")
const ativo = document.querySelector(".ativo")
console.log(ativo)

console.log("Exercício 2.2")
const ativos = document.querySelectorAll(".ativo")
ativos.forEach(
    (ativo) => {
        console.log(ativo)
    }
)

console.log("Exercício 3")
const lang = document.querySelector("html").getAttribute("lang")
console.log(lang)
console.log(document.documentElement.lang)
console.log(window.navigator.language)

console.log("Exercício 4")

console.log(innerWidth, innerHeight)


