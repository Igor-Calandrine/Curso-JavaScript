/*
-JavaScript Assíncrono
   Quando você começa a trabalhar com eventos fetch, setTimeout, APIs ou até localStorage, pervebe que o JS nem sempre executa tudo na ordem que parece estar escrita. Isso acontece porque o JS possui um modelo de execução síncrono, mas com mecanismo assíncronos controlados pelo Event Loop.

   *Sincrono
      Executa linha por linha
      Bloqueia a Call Stack
      A próxima instrução só roda quando a atual termina

      ?Empilha -> Executa -> Desempilha -> Próxima

   *Assíncrono
      A tarefa é delegada para o ambiente externo (Web APIs)
      Não bloqueia a Call Stack
      Quando termina, é colocada em uma fila
      O Event Loop decide quando executar

      ?Empilha -> Delega -> Continua Execução -> Retorna para a fila -> Executa quando possível

*/ 

console.log("A")

setTimeout(() => {
   console.log("B")
},0)

console.log("C")

/*
No exemplo acima temos A,C,B na ordem.

   console.log("A") → executa
   setTimeout → vai para Web API
   console.log("C") → executa
   Call Stack esvazia
   Event Loop pega callback
   console.log("B") executa

Mesmo com 0ms, ele nunca executa antes do código síncrono

-Vantagens
   Imagine uma requisição que demora 3 segundos

   *Síncrona
      O usuário ficaria esperando
      O site pareceria travado
      Nenhum clique funcionaria

   *Assíncrona
      A interface continua responsiva
      O usuário pode navegar, clicar, digitar
      O processo acontece "no fundo"

   *Uma das maiores vantagens é poder executar o código exatamente quando uma operação termina




*/ 