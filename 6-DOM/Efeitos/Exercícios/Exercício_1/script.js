// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const divCor = document.querySelector("div")

setInterval(() => {
   divCor.dataset.fundo = "lilas"
}, 2000)
setInterval(() => {
   divCor.dataset.fundo = "azul"
}, 4000)

// Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).
const segundos = document.querySelector(".segundos")
const minutos = document.querySelector(".minutos")
const horas = document.querySelector(".horas")

const iniciar = document.querySelector(".iniciar")
const pausar = document.querySelector(".pausar")
const resetar = document.querySelector(".resetar")

let s = 0
let m = 0
let h = 0
let cronometro = ""

function CronometroContagem () {
   s++
   segundos.textContent = `${s} : segundos`
   minutos.textContent = `${m} : minutos`
   horas.textContent = `${h} : horas`
   
   if (s >= 60) {
      s = -1
      m++
      minutos.textContent = `${m} : minutos`

      if (m >= 60) {
      m = 0
      minutos.textContent = `${m} : minutos`
      h++
      horas.textContent = `${h} : horas`
      }
   }
}

iniciar.addEventListener("click", () => {
   iniciar.setAttribute("disabled", "")
   cronometro = setInterval( CronometroContagem, 1000)
})

pausar.addEventListener("click", () => {
   clearInterval(cronometro)
   iniciar.removeAttribute("disabled")
})

function cronometroReset() {
   clearInterval(cronometro)
   iniciar.removeAttribute("disabled")
   s = 0
   m = 0
   h = 0
   segundos.textContent = `${s} : segundos`
   minutos.textContent = `${m} : minutos`
   horas.textContent = `${h} : horas`
}

resetar.addEventListener("click", cronometroReset)
window.addEventListener("dblclick", cronometroReset)








