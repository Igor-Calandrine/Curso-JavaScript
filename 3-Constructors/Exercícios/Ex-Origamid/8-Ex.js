// Crie uma função que verifique corretamente o tipo de dado
function verificarDado (dado) {
   return Object.prototype.toString.call(dado)
}
// Crie um objeto quadrado com a propriedade lados e torne ela imutável

const quadrado = {
   lados: 4,
   fundo: "azul"
}

Object.defineProperties(quadrado, {
   laod: {
      value: 10,
      writable: false
   }
})

// Previna qualquer mudança no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

configuracao.width = 600
console.log(configuracao.width)

// Liste o nome de todas as propriedades do protótipo de String e Array

console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.getOwnPropertyNames(String.prototype))

