/*
Prototype
   Em JS toda função é criada com uma propriedade chamada prototype. Essa propriedade não é o protótipo da função, e sim o objeto que será usado como protótipo dos objetos criados por essa função quando ela for usada com new
   
   *function.prototype - é um objeto que será compartilhado por todas as instâncias criadas com new function()
*/
const estado1 = {Ex11:false, Ex12:false, Ex13:false}

estado1.Ex11 = false; if(estado1.Ex11) {

function Pessoa(nome, idade) {
   this.nome = nome
   this.idade = idade
}
console.log(Pessoa.prototype) 

}

/*
   O prototype existe para permitir que múltiplos objetos compartilhem comportamento, sem duplicar código ou memória. Sendo assim possíve adicionar novas propriedade e métodos ao objeto prototype. Vamos observar a diferença entre o seu uso ou não.

   No exemplo abaixo o JS cria um novo objeto diretamente com a função frase embutida nela, e assim sempre será ao criar novas instâncias, o que seria ineficiente pois para cada instância teria um nova função na memória. 
   *Temos 3 funções iguais ocupando espaço 3 vezes
*/ 

estado1.Ex12 = false; if(estado1.Ex12) {

function Pessoa(nome, idade) {
   this.nome = nome
   this.idade = idade
   this.frase = function() {
      console.log(`${this.nome} tem ${this.idade} anos.`)
   }
}

const bianca = new Pessoa("Bianca", 36)
const yuri = new Pessoa("Yuri", 35)
const mario = new Pessoa("Mário", 42)
bianca.frase()
yuri.frase()
mario.frase()
}

/*
   A diferença importante está em onde os métodos são definidos. Ao definir o método #frase no #Pessoa.prototype, garantimos que apenas uma única função seja criada na memória, independentemente da quantidade de instâncias.
   *Temos 1 função compartilhada por todas instâncias, o que será mais perfomático.
*/ 

estado1.Ex13 = true; if(estado1.Ex13) {

function Pessoa(nome, idade) {
   this.nome = nome
   this.idade = idade
}

Pessoa.prototype.frase = function() {
   console.log(`${this.nome} tem ${this.idade} anos.`)
}

const bianca = new Pessoa("Bianca", 36)
const yuri = new Pessoa("Yuri", 35)
const mario = new Pessoa("Mário", 42)
bianca.frase()
yuri.frase()
mario.frase()
}

/*
   !O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

Herança de Protótipo
   Diferente de linguagens clássicas como Java ou C#, o JavaScript não trabalha com herança baseada em classes, mas sim com herança por protótipos. Isso significa que objetos não copiam propriedades ou métodos de outros objetos; em vez disso, eles delegam o acesso a outro objeto por meio da cadeia de protótipos (prototype chain).

   Cada objeto em JavaScript possui uma referência interna chamada [[Prototype]], que aponta para outro objeto. Quando tentamos acessar uma propriedade ou método que não existe diretamente no objeto, o JavaScript procura no seu protótipo. Se não encontrar, continua subindo na cadeia até chegar a null.

   Nos exemplos acima bianca, yuri, mario não possuem o método #frase dentro do seu objeto, mas estão presentes em Pessoa.prototype, e assim que ele sobre na cadeia e o encontra nós temos o seu retorno por meio da herança prototipal. Caso não encontre nada chegará a null.

   !Apenas métodos de protótipos são herdados
*/ 