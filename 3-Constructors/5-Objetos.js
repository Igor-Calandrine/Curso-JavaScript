/*
Objetos
   Em JS, todo objeto é criado a partir de um construtor, e no fim das contas, todos herdam de Object. Isso acontece por causa do sistema de herança baseado em protótipos da linguagem.
   Quando você cria um objeto literal:
*/ 

const carro1 = {
  marca: 'Ford',
  ano: 2018,
}

/*
   O JavaScript, internamente, faz algo equivalente a:
*/ 

const carro2 = new Object({
   marca: "Ford",
   ano: 2018,
})

/*
   Estamos criando o objeto de forma explícita usando o construtor Object. O resultado final é praticamente o mesmo de um objeto literal.
   Quando você acessa uma propriedade em um objeto, o JavaScript segue este processo:
   
*   1-Procura a propriedade no próprio objeto.
*   2-Se não encontrar, procura no seu prototype.
*   3-Continua subindo na cadeia de protótipos até chegar em Object.prototype.
*   4-Se ainda assim não encontrar, retorna undefined.

   Essa cadeia é o que permite o reuso de código e o comportamento de herança em JavaScript.

Métodos de Object
   
*Object.creat(obj, defineProperties)
   Ele cria um novo objeto vazio e define que o prototype desse novo objeto será o objeto passado no primeiro argumento.
   No exemplo abaixo temos um modelo de objeto que servirá para criar outros.
*/ 

console.log("\n\tExemplo 1")

const carro ={
   rodas: 4,
   init(marca) {
      this.marca = marca
      return this
   },
   acelerar() {
      return `${this.marca} acelerou as ${this.rodas} rodas`
   },
   buzinar() {
      return this.marca + " buzinou"
   },
}

/*
   Neste pondo honda é um novo objeto vazio, não tem rodas, acelerar ou buzinar como propriedades próprias
*/
const honda = Object.create(carro)
console.log(honda)

/*
   Neste ponto preenchemos o o bjeto vazio com a sua marcar, agora podemos acessar seus métodos que são herdados do protótipo.
*/ 

console.log(honda.init("Honda"))
console.log(honda.acelerar())
console.log(honda.init("Honda").buzinar())

/*
   *Object.assign()
      O método copia as propriedades próprias e enumeráveis dos objetos de origem (obj1, obj2, etc.) para o objeto alvo, modificando o alvo diretamente.

         *Copia apenas propriedades próprias
         *Copia apenas propriedades enumeráveis
         *Copia valores e referências
         *Sobrescreve propriedades com o mesmo nome
         *Retorna o próprio objeto alvo

      No exemplo abaixo temos o objeto #alvo sendo modificado e no último objeto temos temos a mesma chave, isso fará com que ele seja substituído.
*/ 
console.log("\n\tExemplo 2")
         
const alvo = { a:1 }
const obj1 = { b:2 }
const obj2 = { c:3 }
const obj3 = { d:4 }
const obj4 = { a:5 }

Object.assign(alvo, obj1, obj2, obj3, obj4)

console.log(alvo)

//Vejamos um exemplo mais complexo em que o obejto irá herdar funções de outro objeto.

const funçãoAutomovel = {
   acelerar() {
      return "acelerou"
   },
   buzinar () {
      return "buzinou"
   },
}

const motoAss = {rodas:2, capacete:true}
const carroAss = {rodas:4, capacete:false}

console.log("\n\tObjeto moto")
Object.assign(motoAss, funçãoAutomovel)
console.log(motoAss.acelerar())
console.log(motoAss.buzinar())

console.log("\n\tObjeto carro")
Object.assign(carroAss, funçãoAutomovel)
console.log(carroAss.acelerar())
console.log(carroAss.buzinar())

/*
*Object.defineProperties(alvo, propriedades)
   Esse método define múltiplas propriedades em um objeto, permitindo controle total sobre o comportamento de cada uma por meio dos property descriptors (descritores de propriedade). Aqui você não apenas cria propriedades, mas também define como elas se comportam.

   Data Descriptors                                             Accessor Descriptors  
      *value,                                                     get
      *writable - altera o valor                                  set
      *enumerable - aparece em for...in                           enumerable
      *configurable - pode ser redefinida ou deletada             configurable

   No exemplo abaixo criamos um objeto vazio que será configurado o seu comportamento em seguida.
*/ 

const pessoaIgor = {}
Object.defineProperties(pessoaIgor, {
   nome: {
      value: "Igor",
      writable: false,
      enumerable: false,
      configurable: false,
   }
})

//Agora vamos testar seu comportamento, altere o seu comportamente se necessário em true ou false

pessoaIgor.nome = "Bianca"
console.log(pessoaIgor.nome)
console.log(Object.keys(pessoaIgor))
delete pessoaIgor.nome
console.log(pessoaIgor.nome)

//Vamos agora fazer um exemplo mais complexo

const conigApiURL = {}

Object.defineProperties(conigApiURL, {
   apiURL: {
      value: "https://api.site.com",
      writable: false,
      configurable: false,
   }
})

/*
Garatimos que ninguém possa alterar configurações críticas para o funcionamento de uma API
É a ferramenta certa quando você quer previsibilidade, segurança e design sólido de objetos.

*get() e set()
   !Não vou usar isso, achei muito pouco legível e desnecessário
   Permitem definir comportamentos diferentes para leitura e escrita de uma propriedade, transformando o acesso a um valor em execução de código controlada.
*/ 
const moto = {}

Object.defineProperties(moto, {
   velocidade: {
      get() {
         return this._velocidade
      },
      set(valor) {
         this._velocidade = "Velocidade " + valor
      }
   }
})

moto.velocidade = 200
console.log(moto.velocidade)
