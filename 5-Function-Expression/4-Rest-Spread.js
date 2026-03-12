/*
-Rest e Spread
   No JavaScript moderno, duas sintaxes muito utilizadas para trabalhar com dados são o Rest (...) e o Spread (...). Apesar de utilizarem o mesmo operador de três pontos, eles possuem funções diferentes dependendo do contexto em que são utilizados.

   Esses dois recursos foram introduzidos nas versões mais recentes da linguagem e se tornaram fundamentais para escrever códigos mais curtos, claros e flexíveis, facilitando a manipulação de arrays, objetos e argumentos de funções.

-Spread
   O Spread é usado para espalhar os elementos de um array ou as propriedades de um objeto em outro lugar. Ele permite copiar, combinar ou expandir estruturas de dados de forma simples e legível.

   As listas foram inclusas em comida como se cada elemento dentro das outras fossem inclusas item a item

   É possível transformar itens iteráveis em uma array real com o spread.
*/ 
console.log("\tExemplo 1")
const frutas = ["Banana", "Morango", "Limão"]
const legumes = ["Cenoura", "Batata", "Brocolis"]
const comidas = [...frutas, "Macarrao", ...legumes]

console.log(comidas)

console.log("\n\tExemplo 2")
const botoes = document.querySelectorAll("button")
console.log(botoes)

const botoesArray = [...botoes]
console.log(botoesArray)

//O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.

const listaNumeros = [1,13,21,12,55,2,3,43]
const numeroMaximo = Math.max(4,5,20,10,30,2,33,5)

//Como Math.max() Não aceita uma lista, como utilizar
const numeroMaximoSpread = Math.max(...listaNumeros)

/*
-Rest
   O Rest tem a função de agrupar múltiplos valores em uma única estrutura, sendo muito útil principalmente em parâmetros de funções ou em desestruturações, quando não sabemos exatamente quantos valores serão recebidos.

   !Só é possível ter um único parâmetro rest e ele deve ser o último.
*/
console.log("\n\tExemplo 3")

function ganhadores(...ganhadores) {
   ganhadores.forEach(item => {
      console.log("Ganhador: " + item)
   });
}

ganhadores("Igor", "Bianca", "Yuri")

console.log("\n\tExemplo 4")

function premiados(premio, ...ganhadores) {
   ganhadores.forEach(item => {
      console.log("Ganhador: " + item + " - " + premio)
   });
}

premiados("Batata", "Igor", "Bianca", "Yuri")