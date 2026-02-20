// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que clicar em próxima


const formulario = document.querySelector(".endereco")
const cep = document.querySelector("#cep")
const cepNot = document.querySelector(".nao-encontrado")

cep.addEventListener("change", () => {
   fetch("https://viacep.com.br/ws/" + cep.value + "/json/")

   .then(resposta => resposta.json())
   .then(json => {
      const listaKey = Object.entries(json)
      for (let i=0; i <= listaKey.length - 1; i++) {
         if(formulario[listaKey[i][0]])
            formulario[listaKey[i][0]].value =  listaKey[i][1]
      }
   })
   .catch(() => {
      cepNot.classList.add("ativo")
      document.querySelectorAll("input").forEach(item => 
            item.name !== "cep" ? item.value = "" : null
      )
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










