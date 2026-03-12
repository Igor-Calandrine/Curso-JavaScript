/*
-for...of
   O for...of é uma estrutura de repetição do JavaScript utilizada para percorrer valores de objetos iteráveis, como arrays, strings, mapas e outros tipos de dados que podem ser iterados.

   Com essa estrutura, é possível acessar diretamente os valores dos elementos de uma coleção a cada repetição, sem a necessidade de trabalhar com índices ou posições. Isso torna o código mais limpo, legível e fácil de manter, principalmente quando estamos lidando com listas de dados.

   Introduzido nas versões mais modernas da linguagem, o for...of se tornou uma ferramenta importante no desenvolvimento em JavaScript, pois facilita a iteração sobre diferentes tipos de estruturas iteráveis, permitindo que o programador escreva loops de forma mais clara e expressiva.

   ?Muito parecido com o for do Python
*/    
console.log("\tExemplo 1")

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const item of frutas) {
   console.log(item)
}

for(const char of frase) {
   console.log(char)
}

/*
-for...in
   Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.

   !Não será possível utilizar for..of em objetos por não terem um interável
*/
console.log("\n\tExemplo 2")

const carro = {
  marca: 'Honda',
  ano: 2018,
}

for(const propriedade in carro) {
  console.log(propriedade)
}

//Para acessar o valor basta utilizar o que já se conhece

for(const propriedade in carro) {
  console.log(propriedade + ": " + carro[propriedade])
}


