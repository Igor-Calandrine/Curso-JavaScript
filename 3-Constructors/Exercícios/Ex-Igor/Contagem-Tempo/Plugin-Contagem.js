/*
Plugin para fazer contagem regressiva de:
   Dias, horas, minutos e segundos, do dia de hoje até determinado dia.
   Insira data no formato ("Ano-mês-dia")
*/ 
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
   
   dia() {
      const dias = Math.floor(this.intervalo() / (1000 * 60 * 60 * 24))
      return dias
   }

   hora () {
      const horas = Math.floor(this.intervalo() / (1000 * 60 * 60) % 24)
      return horas
   }

   minuto () {
      const minutos = Math.floor(this.intervalo() / (1000 * 60) % 60)
      return minutos
   }

   segundo () {
      const segundos = Math.floor(this.intervalo() / (1000) % 60)
      return segundos
   }

   informeRestante () {
      const frase = `${this.dia()} Dias ${this.hora()}:${this.minuto()}:${this.segundo()}`
      return frase
   }

   tempoAtualizar () {
      if (this.intervalo() >= 0) {

         setInterval(() => {
            const tempo = this.informeTempo()
            console.log(tempo)
         },1000)}
         
      else {
         return "0D 00:00:00"
      }
   }

   informeTempo () {
      return {
               dias: this.dia(),
               horas: this.hora(),
               minutos: this.minuto(),
               segundos: this.segundo()
            }
   }

}

// const promocao = new ContagemRegressiva("2026-2-28")






