/*
-Factory Function
   É uma função que cria e retorna um objeto sem a necessidade de usar a palavra-chave new. Ela funciona como uma "fábrica" de objetos. Ela substitui a necessidade de:

      *Constructor Functions
      *Classes
      *Uso de new

   Uma factory permite criar objetos com comportamento e estado encapsulado de forma mais controlada.     
   Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas. Mesmo que alterem o valor da propriedade invis, não será possível alterar o valor da constante, como é possível fazer com classes ao acessar o seu #this.name
*/ 
console.log("\tExemplo 1")

function criarBotao(text, backG) {

   const invis = true

   function elemento() {
      const elementoBotao = document.createElement("button")
      elementoBotao.textContent = text
      elementoBotao.style.background = backG
      elementoBotao.style.cursor = "pointer"
      return elementoBotao
   }  
   
   //Aqui tempo o acesso aos elementos, é importante colocar as funções para terem o comportamento de construtoras, assim como os métodos em classes
   botao = {
      elemento: elemento,
      text: text,
      background: backG,
      invis: false
   }

   return botao
}

//Observe que abaixo não há a necessidade de acessar por new
const comparBotao = criarBotao("Botão", "red")
 document.body.appendChild(comparBotao.elemento())

console.log(comparBotao)
console.log(comparBotao.elemento)
console.log(comparBotao.text)
console.log(comparBotao.background)
console.log(comparBotao.background)
console.log(comparBotao.invis)

comparBotao.background = "blue"
//Observe que o valor foi alterado, servirá para o conteúdo abaixo
console.log(comparBotao.background)

/*
-Ice Factory
   Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze()
*/
console.log("\n\tExemplo 2")

function criarPessoa(nome, sobrenome) {
   const nomeCompleto = `${nome} ${sobrenome}`

   function andar() {
      return `${nomeCompleto} andou`
   }

   pessoa = Object.freeze({
      nome: nome,
      sobrenome: sobrenome,
      andar: andar
   })

   return pessoa
}

const desenvolvedor = criarPessoa("Igor", "Araújo")
console.log(desenvolvedor)
console.log(desenvolvedor.nome)
console.log(desenvolvedor.sobrenome)
console.log(desenvolvedor.andar())

desenvolvedor.nome = "Bianca"
//Observe que o nome não foi alterado
console.log(desenvolvedor.nome)


