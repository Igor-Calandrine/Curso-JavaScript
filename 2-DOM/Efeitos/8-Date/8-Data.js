/*
-Introdução
   É um construtor nativo usado para criar objetos que representam datas e horários, apesar de parecer que guarda várias informações separadas, internamente ele armazena um único número:
   
   *Milisegundos desde 1º de janeiro de 1970 (UTC) 
   
   Esse objeto é criado com base no relógio interno do sistema operacional do usuário ou do servidor backend e é importante saber que a contagem de datas, como dias da semana, mêses do ano, começam apartir no (0) zero.

   *getTime()
      Vamos começar por esse método, que através dele podemos pegar o tempo total em milisegundos desde o 1º de janeiro de 1970.
*/
console.log("\n\tExemplo 1 - Date")
const data = new Date

console.log(data.getTime())

/*
   Aplicando várias métodos de lógica e matemática, podemos abter informações sobre várias coisas, mas existem também métodos que nos pode fornecer isso de maneira facilitada.
*/ 
console.log("\n\tExemplo 2 - Date e Métodos")

//*Ano
console.log(data.getFullYear())
//*Mês
console.log(data.getMonth())
//*Dia do Mês
console.log(data.getDate())
//*Dia da Semana
console.log(data.getDay())
//*Hora
console.log(data.getHours())
//*Minutos
console.log(data.getMinutes())
//*Segundos
console.log(data.getSeconds())

/*
   *Criando um promoção
      Podemos criar uma data a partir de uma string, vamos criar uma data no futuro e descobrir quantos dias faltam para até lá, simulando uma promoção
*/ 
console.log("Criando um promoção")

function promoçãoTempo() {
   const hoje = new Date()
   const dataPromocao = new Date(2026, 1, 10, 23, 59, 0)
   //Aqui criamos a data, ela é de trás para frente nos dias e segue natural em horas

   const promocao = document.querySelector(".promoçao")
   const promocaoDias = document.querySelector(".promoçao-dias")
   //Selecionamos as tags que mudarão o texto

   const diasFaltando = dataPromocao.getDate() - hoje.getDate()
   const tempoFaltando = (dataPromocao.getTime() - hoje.getTime())/1000
   //Criamos as contantes para fazer a base de cálculo de dias faltantes

   const horas = tempoFaltando/(60 * 60)
   const minutos = (tempoFaltando/(60 * 60) - Math.floor(tempoFaltando/(60 * 60))) * 60 
   const segundos = (tempoFaltando/60 - Math.floor(tempoFaltando/60)) * 60
   //Criamos as horas, minutos e segundos

   if (diasFaltando > 0) {

      promocao.textContent = `A promoção é até ${dataPromocao.getDate().toString().padStart(2, "0")}/${dataPromocao.getMonth().toString().padStart(2, "0")}`

      let diasFaltandoTexto = ""
      diasFaltando >= 2 ? diasFaltandoTexto = `Faltam ${diasFaltando} dias para a promoção acabar.`: diasFaltandoTexto = `Falta ${diasFaltando} dia para a promoção acabar.`
      promocaoDias.textContent = diasFaltandoTexto 
   }
   else if (diasFaltando == 0 && tempoFaltando > 0) { 

         promocao.textContent = `A promoção é até hoje!`
         promocaoDias.textContent = `Falta ${Math.floor(horas).toString().padStart(2, "0")}:${Math.floor(minutos).toString().padStart(2, "0")}:${Math.floor(segundos).toString().padStart(2, "0")} para a promoção acabar.`
   }
   else if (diasFaltando <= 0 && tempoFaltando <= 0) {
      promocaoDias.textContent = "Não há promoções no momento"
   }
}

const atualizarPromoçao = setInterval(promoçãoTempo, 1000)
if (promoçãoTempo.tempoFaltando == 0) {
   window.clearInterval(atualizarPromoçao)
}
//Criamos uma atualização a cada segundo e que não ocorra quando não houver necessidade.








