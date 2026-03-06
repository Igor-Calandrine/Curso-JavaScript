/*
-Desructuring
   Destructuring é uma funcionalidade do JavaScript que permite extrair valores de arrays ou propriedades de objetos e atribuí-los diretamente a variáveis de forma mais simples e legível.

   Em vez de acessar cada propriedade ou índice manualmente, a desestruturação permite “quebrar” (desestruturar) a estrutura de um objeto ou array e armazenar seus valores em novas variáveis.

   Essa sintaxe foi introduzida no ES6, e é muito utilizada para tornar o código mais limpo, declarativo e fácil de manter.

   !É necessário que o nome da variáel seja o mesmo nome da propriedade no objeto
   !É necessário que o valor da varipavel esteja um nível acima da propriedade desejada no objeto

   *Destructuring com Objetos
*/
const cliente = {
   nome: 'Andre',
   compras: {
      digitais: {
         livros: ['Livro 1', 'Livro 2'],
         videos: ['Video JS', 'Video HTML']
      },
      fisicas: {
         cadernos: ['Caderno 1']
      }
  }
}

/*------------------------------*/ 

const Ex1 = 0; if (Ex1) {
console.log("\tExemplo 1")

/* 
   *Em vez de fazer 
const livros = cliente.compras.digitais.livros
const videos = cliente.compras.digitais.videos

console.log(livros)
console.log(videos)

   *Podemos fazer
*/
const {livros, videos} = cliente.compras.digitais

console.log(livros) 
console.log(videos) 

}

/*
-Nesting
   É possível aninhar um desestruturação dentro de outra para dar acesso a uma propriedade que esteja em um nível mais inferior
*/ 
const Ex2 = 1; if (Ex2) {
console.log("\n\tExemplo 2")

const {fisica, digitais, digitais: {livros, videos}} = cliente.compras

console.log(fisica) // Undefine pq física não esta um nível abaixo de compras
console.log(digitais)
console.log(livros)
console.log(videos)

}

/*
-Renomeando variáveis
   Também é possível atribuir a propriedade a uma variável com outro nome.
*/ 
const Ex3 = 1; if (Ex3) {
console.log("\n\tExemplo 3")

const {nome:nomeAndre, compras:adquirido} = cliente
console.log(nomeAndre)
console.log(adquirido)

}

/*
-Definindo valores padrão
   Caso a propriedade não exista, é possível definir um valor padrão.
*/
const Ex4 = 1; if (Ex4) {
console.log("\n\tExemplo 4")

const {caneta = "bic"} = cliente.compras.fisicas
console.log(caneta)

}
/*
-Destructuring com Arrays
   A desestruturação também pode ser utilizada com arrays.
*/
const Ex5 = 1; if (Ex5) { 
console.log("\n\tExemplo 5")

const frutas = ['Maçã', 'Banana', 'Uva'];
const [primeira, segunda] = frutas

console.log(primeira)
console.log(segunda)

}
/*
-Destructuring em parâmetros de função
   Uma aplicação muito comum da destructuring é utilizá-la diretamente nos parâmetros de uma função. Isso permite extrair apenas as propriedades necessárias de um objeto no momento em que a função é chamada.

   Dessa forma, evitamos acessar manualmente cada propriedade dentro da função, tornando o código mais limpo, claro e direto.

   No caso abaixo, precisamos acessar cada propriedade usando usuario.propriedade
*/ 

const usuario = {
  nome: "Igor",
  idade: 30,
  email: "igor@email.com"
}

function mostrarUsuario(usuario) {
   console.log("\n")
   console.log(usuario.nome);
   console.log(usuario.idade);
   console.log(usuario.email);
}

mostrarUsuario(usuario)

//Mas podemos fazer isso:

function mostrarUsuario2({ nome, idade, email }) {
   console.log("\n")
   console.log(nome);
   console.log(idade);
   console.log(email);
}

mostrarUsuario2(usuario)

