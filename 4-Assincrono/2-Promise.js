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
const Ex3 = 0; if(Ex3) {

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

/*
-finally()
   O método é utilizado ao final de uma Promise para executar um bloco de código independente do resultado da operação assíncrona, ou seja, ele será executado tanto se a Promise for resolvida (resolve) quanto se for refejeitada (reject)
   Ela é muito útil para tarefas como:

   *Remover um loader da tela
   *Encerrar um conexão
   *Liberar recursos
   *Resetar dados
   *Executar logs finais

   !Importante, finally():
   !Não recebe o valor da resolução
   !Não recebe o erro
   !Não pode manipular diretamente o resultado anterior

*/ 
const Ex4 = 0; if(Ex4) {

const promessa = new Promise((resolve, reject) => {
   let condicao = true

   if (condicao) {
      resolve(100)
   }
   else {
      reject()
   }
})

promessa.then((valor1) => {
   console.log(valor1 * 10)
   return valor1 * 10
}).catch(() => {
   console.log(Error)
}).finally(() => {
   console.log("Operação Finalizada!")
})

}

/*
-Promisse.all()
   O método é utilizado quando você precisa executar múltiplas operações assíncronas em paralelo e só quer continuar o fuxo quando todas forem concluídas com sucesso.
   Ele recebe um array de Promises e retorna uma nova Promise que:

   *Resolve quando todas as Promises forem resolvidas
   *Rejeita imediatamente quando qualquer uma delas for rejeitada

   !Imporante - A ordem do array de resposta respeita a ordem do array original — não importa qual Promise terminou primeiro.
*/ 
const Ex5 = 0; if(Ex5) {

const login = new Promise((resolve, reject) => {
   const condicao1 = true

   if (condicao1) {
      resolve("Condição 1 Ok")
   }
   else {
      reject(Error("Condição 1 Não Ok"))
   }
})

login.then((resolve1) => {
   console.log(resolve1)
}).catch((reject1) => {
   console.log(reject1)
})

const dados = new Promise((resolve, reject) => {
   let condicao2 = false

   if (condicao2) {
      resolve("Condição 2 Ok")
   }
   else {
      reject(Error("Condição 2 Não Ok"))
   }
})

dados.then((resolve2) => {
   console.log(resolve2)
}).catch((reject2) => {
   console.log(reject2)
})

const todasPromise = Promise.all([login, dados])

todasPromise.then((resolve) => {
   console.log(resolve)

}).catch((erro) => {
   console.log(erro + " Promisse em ALL")
}) 

}

/*
-Promise.race()
   O método é utilizado quando você quer que a primeira Promise que terminar, seja com sucesso ou erro, determine o resultado final. Assim, então todas as Promises começam a executar ao mesmo tempo, a que terminar primeiro “vence a corrida” e o resultado dela define o estado da nova Promise.
   Ela recebe um array de Promises e retorna uma nova Promise que:
   
   *Resolve se a primeira Promise resolvida terminar primeiro
   *Rejeita se a primeira Promise rejeitada terminar primeiro
   *Ignora todas as outras Promises após a primeira finalizar

*/ 
const Ex6 = 1; if(Ex6) {

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado')
  }, 1900)
})

const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados')
  }, 1500)
})

const carregouPrimeiro = Promise.race([login, dados])

carregouPrimeiro.then(resposta => {
  console.log(resposta);
})

}