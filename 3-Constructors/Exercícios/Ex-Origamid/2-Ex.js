// 1 Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
// const li = document.querySelector('li');

// li;
// li.click;
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click();

// Qual o construtor do dado abaixo:
// li.hidden.constructor.name;

// 1
function Pessoas(nome, sobrenome, idade) {
   this.nome = nome
   this.sobrenome = sobrenome
   this.idade = idade
}
   
Pessoas.prototype.nomeCompleto = function() {
   const frase = `Nome: ${this.nome} ${this.sobrenome}\nIdade: ${this.idade}`
   console.log(frase)
}

const bianca = new Pessoas("Bianca", "Araújo", 36)
bianca.nomeCompleto()
