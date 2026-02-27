export default class ContagemRegressiva {
   constructor (dataFutura) {
      this.dataFutura = new Date(dataFutura)
   }

   get hoje () {
      const dataHoje = new Date()
      return dataHoje
   }

   intervalo () {
      const intervalo = this.dataFutura.getTime() - this.hoje
      return intervalo
   }
   
   diasRestante() {
      const dias = Math.floor(this.intervalo() / (1000 * 60 * 60 * 24))
      return dias
   }

   horasRestante () {
      const horas = Math.floor(this.intervalo() / (1000 * 60 * 60) % 24)
      return horas
   }

   minutosRestante () {
      const minutos = Math.floor(this.intervalo() / (1000 * 60) % 60)
      return minutos
   }

   segundosRestante () {
      const segundos = Math.floor(this.intervalo() / (1000) % 60)
      return segundos
   }

   informeRestante () {
      const frase = `${this.diasRestante()} Dias ${this.horasRestante()}:${this.minutosRestante()}:${this.segundosRestante()}`
      return frase
   }

   informeRestanteTempo () {
      if(this.intervalo() >= 0){
         setInterval(() => {
            console.log(this.informeRestante())
         },1000)}
      else {
         return "0D 00:00:00"
      }
   }
}

const promocao = new ContagemRegressiva("2026-2-28")

console.log(promocao.dataFutura)
console.log(promocao.hoje)
console.log(promocao.intervalo())
console.log(promocao.diasRestante())
console.log(promocao.horasRestante())
console.log(promocao.minutosRestante())
console.log(promocao.segundosRestante())
console.log(promocao.informeRestanteTempo())

