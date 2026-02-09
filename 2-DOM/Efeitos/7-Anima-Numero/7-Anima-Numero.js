/*
-Anima Numeros
   Animação de números é o efeito onde um valor numérico conta de 0 (ou outro número inicial) até um valor final, de forma progressiva.

      *Clientes atendidos
      *Satisfação
      *Anos de experiência

   *HTML
   Vamos primeiro construir uma estrutura no HTML em que sem a ativação do JS esteja lá o valor expresso. Iremos colocar nos número um data-numeros para organizar os atributos para o JS

   *CSS
   Não há nada o que destacar, a não ser que queria fazer uma animação para deixar mais interativo

   *JS
   Selecione os número através de seu Dataset e pega no seu texto o valor máximo que ele deve chegar, após isso estabeleça o número mínimo.
   Para que eles terminem juntos, você pode divi-los em partes iguais para depois incrementar.
   Após realizar a contagem insira no texto o novo valor.
   Você pode deixar o intervalo aleatório também para deixar menos robótico com Match.random
   !Não se esqueça de parar a contagem após chegar no número máximo, ela irá continuar mesmo que não apareça no texto, podendo até travar o browser.
*/ 

const numeros = document.querySelectorAll("[data-numero]")

numeros.forEach((item) => {
   let numeroMin = 0
   const numeroMax = parseInt(item.textContent)
   const numeroIncremento = numeroMax/100
   
   let contagem = window.setInterval(() => {
      numeroMin = numeroMin + numeroIncremento
      item.textContent = Math.round(numeroMin)

   if (numeroMin >= numeroMax) {
         item.textContent = numeroMax
         window.clearTimeout(contagem)
      }   
   }, 50 * Math.random())

})
