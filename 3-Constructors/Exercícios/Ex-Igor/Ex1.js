/*
-Data, Contagem de tempo, Classe
   Crie um plugin para uma página através de classes para que ele seja futurmente reutilizado para exibir

   *Data atual
   *Constagem de tempo até uma determinada data
   *Utilize class e métodos
*/ 
import ContagemRegressiva from "./Contagem-Tempo/Plugin-Contagem.js";

const dataHoje = document.querySelector(".data-hoje span")
const precoHoje = document.querySelector(".preco span")
const precoPromo = document.querySelector(".preco-promo span")
const promocaoHoje = document.querySelector(".promocao-valor span")
const dataFuturo = document.querySelector(".data-futuro span")
const diaFaltante = document.querySelector(".dia-faltante")
const horaFaltante = document.querySelector(".hora-faltante")

const hoje = new Date().toLocaleDateString("pt-BR")

const preco = 100
const promocao = 50
const precoFinal = preco * promocao/100

dataHoje.textContent = hoje
precoHoje.textContent = ("R$" + preco.toFixed(2, 0)).replace(".", ",")
promocaoHoje.textContent = promocao + "%"
precoPromo.textContent = ("R$" + precoFinal.toFixed(2, 0)).replace(".", ",")

setInterval(() => {

   const tempoRestante = new ContagemRegressiva("2026-2-28")
   const tempo = tempoRestante.informeTempo()

   dataFuturo.textContent = tempoRestante.dataFutura.toLocaleDateString("pt-BR")
   diaFaltante.textContent = `${tempo.dias} dias`
   horaFaltante.textContent = `${tempo.horas}:${String(tempo.minutos).padStart(2, "0")}:${String(tempo.segundos).padStart(2, "0")}`

},1000)





