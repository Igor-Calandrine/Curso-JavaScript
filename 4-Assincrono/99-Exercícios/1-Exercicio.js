// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que clicar em próxima


const formulario = document.querySelector(".endereco")
const cep = document.querySelector("#cep")
const cepNot = document.querySelector(".nao-encontrado")

cep.addEventListener("input", (event) => {
   
   // fetch("https://viacep.com.br/ws/" + cep.value + "/json/")
   fetch("https://viacep.com.br/ws/" + "66635190" + "/json/")

   .then(resposta => resposta.json())

   .then(json => {
      formulario["logradouro"].value = json["logradouro"]
      formulario["bairro"].value = json["bairro"]
      formulario["localidade"].value = json["localidade"]
      formulario["estado"].value = json["estado"]
      formulario["complemento"].value = json["complemento"]
      formulario["cep"].value = json["cep"]
      console.log(formulario["logradouro"])
   })

   // then(json => {
      
   // })

   .catch(erro => {
      cepNot.classList.add("ativo")
      formulario["logradouro"].value = ""
      formulario["bairro"].value = ""
      formulario["localidade"].value = ""
      formulario["estado"].value = ""
      formulario["complemento"].value = ""
      console.log("Endereço não encontrado")
   })
})

const bitcoin = document.querySelector(".bitcoin p")

fetch('https://blockchain.info/ticker')

   .then(responsta => responsta.json())

   .then(json => {
      const valor = Number(json.BRL.buy)
      bitcoin.textContent = "Bitcoin: R$" + valor.toLocaleString("pt-BR", {
         minimumFractionDigits: 2
      })
   }) 

   .catch(() => bitcoin.textContent = "Bitcoin: R$00,00")
   
setInterval(() => {
   fetch('https://blockchain.info/ticker')

   .then(responsta => responsta.json())

   .then(json => {
      const valor = Number(json.BRL.buy)
      bitcoin.textContent = "Bitcoin: R$" + valor.toLocaleString("pt-BR", {
         minimumFractionDigits: 2
      })
   })

   .catch(() => bitcoin.textContent = "Bitcoin: R$00,00")

}, 5000)


const piada = document.querySelector(".piada button")

piada.addEventListener("click", () => {

   fetch('https://api.chucknorris.io/jokes/random')

      .then(resposta => resposta.json())

      .then(json => {
         document.querySelector(".piada p").textContent = json.value
      })

      .catch(erro => console.log("Chuck Norris não comete erros!")) 

})










