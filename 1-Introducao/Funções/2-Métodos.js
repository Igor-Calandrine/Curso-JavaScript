let estado1 = {Ex1:false}
/*
*função.lenght
   Retorna o total de argumentos da função
*/

estado1.Ex1 = false; if (estado1.Ex1) {
   console.log("\n\tExemplo 1.1")
   
   function exemplo1Length(a, b, c, d) {
      console.log(a + b + c + d) 
   }

   exemplo1Length(1, 2, 3, 4)
   console.log(exemplo1Length.length)   

}

/*
*função.name
   Retorna o nome da função em uma string
*/ 

estado1.Ex2 = false; if (estado1.Ex2) {
   console.log("\n\tExemplo 1.2")
   
   function umaFuncaoQualquer(nome, idade) {
      return nome + " " + idade
   }

   console.log(umaFuncaoQualquer.name)

}

/*
*função.call()
!IMPORTANTE
   No JS, o valor de #this não depende de onda a funçao foi criada, mas de como ela é chamada, isso pode gerar muitas situações como o exemplo abaixo, em que não se sabe quem é o this*/
let estado2 = {}

estado2.Ex1 = false; if (estado2.Ex1) {
console.log("\n\tExemplo 2.1")

const pessoa = {
  nome: "Igor"
}

function mostrarNome() {
  console.log(this.nome)
}

mostrarNome()  
} 

/*   
   função.call() - É um método que toda função em JS possui, ela serve para executar um função definindo explicitamente qual será o valor de #this, além de permitir passar os argumentos um por um.
   No exemplo Exemplo 2.1 em que é necessário apontar o objeto na função para que ele tenho um retorno esperado.
   No Exemplo 2.2 temos um função que é construida para pegar as informações de um objeto, e permitir que diferentes objetos possam ser utilizada de maneira fácil, para que isso possa acontecer é necessário que se usso o método .call() 
*/ 

estado2.Ex2 = true; if (estado2.Ex2) {

console.log("\n\tExemplo 2.2")
infoIgor = {nome:"Igor", idade:25}

function Apresentação(nome, idade) {
   console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
}

Apresentação(infoIgor.nome, infoIgor.idade)
Apresentação(this.nome, this.idade)

//-------------------------------------------------

console.log("\n\tExemplo 2.3")
function Apresentação2() {
   console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
}

Apresentação2.call(infoIgor)

}

/*
Com call() você pode alterar um objeto que foi chamado no início, alterando assim seus resultados.
*/ 
console.log("\n\tExemplo 2.4")

const carro = {
  marca: "Honda",
  info() {
    console.log(this.marca);
  }
}

const moto = {
  marca: "Yamaha"
}

carro.info.call(moto)

/*
*função.apply()
   Funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
*/ 
console.log("\n\tExemplo 2.5")

const numeros = [3, 4, 6, 1, 34, 44, 32]
const exApply = Math.max.apply(null, numeros)
console.log(exApply)

const exCall = Math.max.call(null, 3, 4, 5, 6, 7, 20)
console.log(exCall)

/*
*função.bind()
   O bind() não executa a função imediatamente, diferentemente de call() e apply(), Ele retorna uma nova função pronta para ser executada depois assim podendo dar um nome e um novo objeto.
*/ 
console.log("\n\tExemplo 2.6")

const carroFord = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`
  }
}

const resultado = carroFord.acelerar(100, 20)
console.log(resultado)

//Agora temos um novo objeto para gerar um função apartir dele
const carroHonda = {
  marca: 'Honda',
}
//Criamos aqui uma nova função direcionado para um novo objeto
const acelerarHonda = carroFord.acelerar.bind(carroHonda) 

const resultado2 = acelerarHonda(200, 10)
console.log(resultado2)





