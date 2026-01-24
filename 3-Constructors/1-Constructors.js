/*
Objetos
   Como já vimos, criar um objeto em JavaScript é simples: basta declarar uma variável e inicializá-la com chaves {}. O ponto importante começa quando tentamos "criar" outros objetos a partir de um objeto existente.

   Em JavaScript, objetos são tipos de referência. Isso significa que, ao atribuir um objeto a outra variável, não estamos criando um novo objeto, mas sim criando uma nova referência para o MESMO espaço na memória, o que é mostrado no exemplo abaixo, quando no final se demonstra que o objeto não foi criado e sim o anterior foi alterado.
*/
const estado1 = {Ex11:false, Ex12:false, Ex13:false}

estado1.Ex11 = false; if (estado1.Ex11) {

const carro = {
   marca:"Marca",
   preço:0,
}

const honda = carro
honda.marca = "Honda"
honda.preço = 18000
console.log(honda)

const citroen = carro 
citroen.marca = "Citroen"
citroen.preço = 10000
console.log(citroen)
console.log(honda)

}

/*
Constructor Functions
   Para resolver o problema de reutilização de objetos e evitar o compartilhamento de referência na memória, o JS oferece as Funções Construtoras, ela é responsável por criar e inicializar um NOVO objeto toda vez que é chamada com a palavra-chace #new

   Ao utilizar #new, o JavaScript executa automaticamente os seguintes passos:
*      1. Cria um novo objeto vazio {}
*      2. Faz o #this apontar para esse novo objeto
*      3. Liga esse objeto ao prototype da função
*      4. Retorna o objeto criado (implicitamente)

   No exemplo abaixo podemos comparar com o primeiro e ver que nós temos agora duas variáveis distintas com suas próprias propriedades.
   ?Utiliza sempre Pascal Case para Constructor Functions
*/ 

estado1.Ex12 = false; if (estado1.Ex12) {

function Carro() {
   this.marca = "marca"
   this.preço = 0
}

const honda = new Carro()
honda.marca = "Honda"
honda.preço = 18000

const citroen = new Carro()
citroen.marca = "Citroen"
citroen.preço = 10000

console.log(honda)
console.log(citroen)

}

/*
Podemos passar argumentos que serão utilizados no momento da criação do objeto
*/ 

estado1.Ex13 = true; if (estado1.Ex13) {

function Carros(at_marca, at_preço) {
   this.marca = at_marca
   this.preço = at_preço
}

const bmw = new Carros("BMW", 30000)
const audi = new Carros("Audi", 20000)

console.log(bmw)
console.log(audi)
}
