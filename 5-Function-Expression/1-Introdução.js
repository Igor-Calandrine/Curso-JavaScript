/*
-Function Declaration
   É a forma clássica de criar funções em JavaScript, ela é carregada antes da execução, ou seja, sofre hosting e deve ser sempre nomeada. É muito usada para funções utilit´rias globais, funções principais de um módulo, funções que precisam ser acessíveis em qualquer parte do arquivo.
*/ 
console.log("\tExemplo 1")

function somar(a,b) {
   console.log(a + b)
}

somar(5,7)
/*
-Function Expression
   É quando criamos uma função e a atribuimos a uma variável. A função é tratado como valor, assim ela não corre o risco de passar por cima de uma outra função, caso ela existe por exemplo em um objeto window.
   
   *Não sofre hosting
      Deve-se sempre declarar a função antes de utilizá-la.
   
   *Pode ser anônima ou nomeada
      Normalmente a variável é já utilizada como nome, assim não há a necessidade de ser nomeada

   *Pode-se tb utilizar Arrow Function
      ?Importante Lembrar: 
      Não tem this próprio, Não pode ser usada como construtora
*/ 
console.log("\n\tExemplo 2")

const subtrair = function(a,b) {
   console.log(a-b)
}

subtrair(5,7)

/*
-Quando usar cada uma?

   *Function Declaration
      A função é estrutural
      Ela será usada em vários pontos do código
      Você quer organização clara

   *Function Expression
      A função será usada como valor
      Será passada como argumento
      Você quer controle maior sobre escopo
      Está usando padrões modernos

-IIFE – Immediately Invoked Function Expression
   Antes da introdução dos Modules (ES6) e da implementação do escopo de bloco com let e const, a forma mais comum de isolar variáveis e evitar poluição do escopo global em JavaScript era através das chamadas IIFEs (Immediately Invoked Function Expressions).

   Uma IIFE é uma função que é criada e executada imediatamente após sua definição, tem por objetivo:

      *Criar um escopo privado
      *Evitar a contaminação do escopo global

   Ao envolver com (), forçamos o interpretador a tratar como expressão, permitindo execução imediata.
*/ 
console.log("\n\tExemplo 3")

(function(nome) {
  const mensagem = "Olá " + nome;
  console.log(mensagem);
})("Igor");
