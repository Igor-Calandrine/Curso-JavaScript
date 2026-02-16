/*
-New Promise()
   É uma função construtura usda para representar o resultado de uma operação assíncrona. Ela é um objeto que funciona como uma "promessa" de algo que será concluído no futuro.
   Uma Promisse pode estar em 3 estados:
      
   *Pending    - pendente, seu estado inicial
   *Fulfilled  - resolvida, concluída com sucesso
   *Rejected   - resolvida, falhau

   !Uma Promise só pode ser resolvida ou rejeitada uma única vez, depois disso, seu estado não muda mais

   Ao criar uma Promise, passamos uma função executora:
   ?Troque a flag para ver os dois resultados
*/
const Ex1 = 0; if(Ex1) {

console.log("\n\tExemplo 1")

const promessa = new Promise(function(resolve, reject) {
   let condicao = true

   if(condicao) {
      resolve("Deu tudo certo!") // -> Marca como Fulfilled
   } 
   else {
      reject(Error("Não deu tudo certo :(")) // -> Marca como Rejected
   }
})
console.log(promessa)

}
/*
-.then() e .catch()
   Normalmente não se usa console.log() direto na Promisse, em vez disse usa-se:

*    .then()   - Para tratar de sucesso 
*    .catch()  - Para tratar de erros

!Promise não "executa depois", a função executora roda imediatamente quando a Promise é criada, o que é assíncrono é o tratamento com .then() e .catch()
*/ 
const Ex2 = 0; if(Ex2) {

console.log("\n\tExemplo 2")

const promessa = new Promise((resolve, reject) => {
   let condicao = 0

   if(condicao) {
      resolve("Deu tudo certo!")
   }
   else {
      reject(Error)
   }
})

promessa.then(() => {
   console.log("Problema resolvido")
}).catch(() => {
   console.log(Error("Ocorreu um erro aqui!"))
})

}

/*
-Encadeamento de then().then()
   O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.
   No exemplo abaixo temos um resultado .then() que terá seu retorno nomeado no próximo .then() para influenciar no resultado final.
*/ 
const Ex3 = 1; if(Ex3) {

console.log("\n\tExemplo 3")

const promessa = new Promise((resolve, reject) => {
   let condicao = true

   if (condicao) {
      resolve(10) //Aqui o resolve recebe o valor
   }
   else {
      reject(Error)
   }
})

promessa.then((valor1) => { // O valor é nomeado e usado na função de retorno
   console.log("Primeiro valor:", valor1)
   return valor1

}).then((resultado1) => { // O mesmo ocorre sequêncialmente
   console.log("Segundo valor:", resultado1 * 5)
   return resultado1 * 5

}).then((resultado2) => {
   console.log("Terceiro valor:", resultado2 * 10)
   return resultado2 * 10

}).catch(() => {
   console.log(Error("Ops! Tivemos um problema!"))
})

}
