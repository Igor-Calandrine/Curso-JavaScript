/*
-Introdução
   É muito comum utilizarmos formulários HTML como a principal forma de comunicação entre o usuário final e o JS. Por meio de inputs, textareas e selects, o susuário fornece dados que podem ser:
   
      *validados
      *manipulados
      *enviados para um servidor
      *usados em cálculos ou regras de negócio
   
   Para isso, precisamos aprender como acessar formulários e seus valores pelo JS.
*/ 

//*Listar formulários
const listas = document.forms
console.log(listas) 

//*Acessar a um formulário
const formularioContato = document.forms.contato
console.log(formularioContato)

//*Acessar elementos de um formulário
const formularioElementos = document.forms.contato.elements
console.log(formularioElementos)

//*Pode-se acessar como uma lista também
const formularioItem = document.forms[0].elements[4]
console.log(formularioItem)

/*
-Value
   Essa propriedade retorn o valor atual de um campo de formulário, ou seja, aquilo que o usuário digitou, selecionou ou alterou. O valor retornado é sempre uma string, mesmo que o campo seja numérico.
   Para reagir às mudanças feitas pelo usuário, podemos utilizar eventos, como:

      *keyup   - disparado quando o usuário solta uma tecla //!Não pegar colar em cima com o mouse
      *input   - disparado quando o valor do campo muda, independente da origem
      *change  - disparado somente quando há alteração confirmada, ou seja:
         inputs de texto   : quando o campo perde o foco
         select e checkbox : disparação imediantamente a após a mudança
*/

const Ex2 = 0; if(Ex2) {

const formulario = document.querySelector(".contato")
const formularioDetalhes = document.querySelector(".detalhes")

formulario.addEventListener("keyup", (event) => {
   const keyup = event.target.value
   console.log(keyup)
})

formulario.addEventListener("input", (event) => {
   const input = event.target.value
   console.log(input)
})

formulario.addEventListener("change", (event) => {
   const change = event.target.value
   console.log(change)
})

formularioDetalhes.addEventListener("change", (event) => {
   const change = event.target.value
   console.log(change)
})

}
/*
-Validação
   É muito importante que tenha-se uma validação de dados antes de ser enviado, para isso devemos conhecer os seguintes métodos
   
   *checkValidity()
      Verifica se um input com o atributo required, é válido ou não.
   *.validationMessage
      Possui a mensagem padrão de erro do browser.
   *setCustomValidity('')
      Modifica a mensagem padrão de erro do browser.
*/ 

const Ex3 = 0; if(Ex3) {

const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
//Selecionamos aqui os campos para serem ajustados como inválidos
const detalhes = document.querySelector(".detalhes")
//Selecionamos aqui o formulário de detalhes

function mostraInvalido(event) {
   console.log(event.target.name)
   console.log("span-"+ event.target.name)
   const span = document.querySelector("#span-"+ event.target.name)
   const checkDados = event.target.checkValidity()
   //Selecionamos o span através do id utilizando o name para completar e os diferenciar

   if(!checkDados) {
      span.classList.add("invalido")
   }
   else {
      span.classList.remove("invalido") 
   }
}

nome.addEventListener("change", mostraInvalido)
email.addEventListener("change", mostraInvalido)

cor.addEventListener("change", (event) => {
   detalhes.style.backgroundColor = event.target.value
   //foi inserido no value a cor para que ela seja usada na alteração da cor

})

}

/*
-Pegando todos os valores
   Podemos pegar todos os valores e colocar em um objeto para enviar ao back-end
*/ 

const formulario1 = document.querySelector(".contato")

const dados = {}

formulario1.addEventListener("change", (event) => {
   dados[event.target.name] = event.target.value
   console.log(dados)
})











