// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que clicar em próxima

const form = document.querySelector(".endereco")
const CEP = document.querySelector("#cep")
const botao = document.querySelector("button")
const confirmar = document.querySelector(".confirmacao")

async function cep() {
   try {
      const resposta = await fetch(`https://viacep.com.br/ws/${CEP.value}/json/`)  
      const respostaJSON = await resposta.json()
      const objetoJSON = Object.entries(respostaJSON)
      
      for(let i=0; i <= objetoJSON.length - 1; i++) {
         if (form[objetoJSON[i][0]]) {
            form[objetoJSON[i][0]].value = objetoJSON[i][1]
            localStorage.setItem(objetoJSON[i][0], objetoJSON[i][1])
         }
      }
   } catch (erro) {
      console.log(erro)
      const cepNot = document.querySelector(".nao-encontrado")
      cepNot.classList.add("ativo")
      document.querySelectorAll("input").forEach(item => 
            item.name !== "cep" ? item.value = "" : null
      )
   } finally {
      const inputs = document.querySelectorAll(".endereco input")
      inputs.forEach((item) => {
            const checkRequired = item.checkValidity()
            if (!checkRequired) {
               item.previousElementSibling.style.color = "red"
            }
            else {
               item.previousElementSibling.style.color = "black"
            }
         })
   }
   if (form.checkValidity()) {
      confirmar.classList.add("ativo")
      botao.setAttribute("type", "submit")
   }
}

document.addEventListener("DOMContentLoaded", () => {
   if (localStorage) {
      for(let i=0; i <= localStorage.length -1; i++) {
         form[localStorage.key(i)].value = localStorage.getItem(localStorage.key(i))
      }
   }
})

botao.addEventListener("click", cep) 
form.addEventListener("input", (event) => {
   localStorage.setItem(event.target.name, event.target.value)
})








      
   
   
   
   
   











