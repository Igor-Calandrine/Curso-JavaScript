// Retorne um número aleatório
// entre 1050 e 2000
const random = Math.random() * (2001 - 1050) + 1050
console.log(random.toFixed())


// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';

numeros = numeros.split(", ")
console.log(numeros)

numeros.forEach((item, index) => {
   const itemN = Number(item)
   numeros[index] = itemN
})

console.log(numeros)
console.log(Math.max(...numeros))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function valorTotal (preços) {

   let precosTotal = 0

   preços.forEach((item) => {
      item = item.trim().slice(3).trim().replace(",", ".")
      item = Number(item)
      item = Number(item.toFixed(2))
      precosTotal += item
   })
   console.log(precosTotal)
}
valorTotal(listaPrecos)
