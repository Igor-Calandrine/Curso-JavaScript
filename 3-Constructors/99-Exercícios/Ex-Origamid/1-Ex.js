//1- Transforme o objeto abaixo em uma Constructor Function

const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

//1
function Pessoa(nome, idade) {
   this.nome = nome
   this.idade = idade
   this.andar = function() {
      console.log(this.nome + " andou.")
   }

}

const igor = new Pessoa("Igor", 36)
console.log(igor)
igor.andar()

//2
const oliveira = new Pessoa("Oliveira", 24)
const bianca = new Pessoa("Bianca", 20)
const yuri = new Pessoa("Yuri", 25)

console.log(oliveira)
console.log(bianca)
console.log(yuri)

//3

function ManipularListas(elemento) {
   
   this.elementos = document.querySelectorAll(elemento)

   this.ativar = function() {
      this.elementos.forEach((item) => {
         item.classList.add("ativo")
         console.log(this.elementos)
      })
   }

   this.desativar = function() {
      this.elementos.forEach((item) => {
         item.classList.remove("ativo")
         console.log(this.elementos)
      })
   }

   this.clickToggle = function() {
      
      this.elementos.forEach((item) => {
         item.addEventListener("click", () => {
            item.classList.toggle("ativo")
            console.log(item.classList)
            console.log(this.elementos)
         })
      })
   }
   
}

const li = new ManipularListas("li")
li.ativar()
li.desativar()
li.clickToggle()






