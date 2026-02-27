/*
-Data, Contagem de tempo, Classe
   Crie um plugin para uma página através de classes para que ele seja futurmente reutilizado para exibir

   *Data atual
   *Constagem de tempo até uma determinada data
   *Utilize class e métodos
*/ 
const dataHoje = document.querySelector(".data-hoje span")
const precoHoje = document.querySelector("[data-preco] span")
const promocaoHoje = document.querySelector("[data-promocao] span")
const precoPromo = document.querySelector("[data-precoP] span")

const hoje = new Date()
const preco = 200
const promocao = 50
const precoP = preco * (promocao/100)

dataHoje.textContent = hoje.toLocaleDateString("pt-BR")
precoHoje.textContent = "R$ " + preco.toFixed(2, 0).replace(".", ",")

if (promocao) {
   const divPromocao = document.querySelector("[data-promocao]")
   divPromocao.classList.add("ativo")

   const tempoFaltante = document.querySelector(".tempo-faltante")
   precoPromo.textContent = "R$ " +  precoP.toFixed(2, 0).replace(".", ",")
   
   setInterval(() => {
      const hoje = new Date()
      const futuro = new Date(2026, 1, 28)
      
      const dataFuturo = document.querySelector("[data-futuro] span")
      dataFuturo.textContent = futuro.toLocaleDateString("pt-BR")

      promocaoHoje.textContent = promocao + "%"

      const tempoRestante = futuro.getTime() - hoje.getTime()

      const diaRestante = Math.floor(tempoRestante/(1000 * 60 * 60 * 24))
      const horaRestante = Math.floor(tempoRestante/(1000 * 60 * 60))
      const minutosRestante = Math.floor((tempoRestante/(1000 * 60 * 60) - Math.floor(tempoRestante/(1000 * 60 * 60))) * 60)
      const segundosRestante = Math.floor((tempoRestante/(1000 * 60) - Math.floor(tempoRestante/(1000 * 60))) * 60)

      tempoFaltante.textContent = `${horaRestante}:${minutosRestante}:${segundosRestante}`

   }, 1000)

   
   
   

}







