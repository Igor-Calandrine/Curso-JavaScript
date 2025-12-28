/*
Console.log
    É uma função do JavaScript usada para exibir mensagens no console do navegador, presente nas ferramentas do desenvolvedor quando se abre uma página no seu browser. Ele serve como uma forma de inspecionar valores, testar variáveis, verificar o comportamento do código e identificar erros durante o desenvolvimento.
    
    Essa função é um dos recursos mais importantes para aprender e depurar o código, e é usada tanto por iniciantes quanto por profissionais. Esse resumo é construido juntamente com um arquivo HTML, e também quando necessário um CSS, por isso é importante que você o quanto antes abra uma página no seu navegador e vá em inspecionar elemento, procure a aba de Console para ver o resultado dos exemplos que estarão aqui presente.
    
    */
    console.log("\tExemplo 1")

    console.log("Olá mundo!")

/*
Variáveis
    Variáveis em JavaScript são espaços na memória usados para armazenar valores. Elas permitem guardar informações que podem ser usadas, modificadas ou exibidas durante a execução do programa. Sem variáveis, seria impossível criar lógica, cálculos, interações ou qualquer funcionamento dinâmico.

    O javaScript possui 3 palavras reservadas para criar variáveis:

*   var
    É a forma mais antiga, hoje quase não é usada por causa de problemas de comportamente inesperados, aparece mais códigos antigos

*   let
    É a forma mais comum, permite criar variáveis que podem mudar de valor

* const
    Usada para valores constantes, ou seja, que não podem ser alterados depois de criados.

*/

//* let 
// No exemplo abaixo iremos criar a variável com #let e depois alterar o seu valor

console.log("\n\tExemplo 2.1")

let idade = 30
console.log(idade)

idade = 20
console.log(idade)

//*const
// No exemplo baixo criaremos uma variável com #const e depois eremos tentar alterar seu valor. Observe que agora termos um erro. 

console.log("\n\tExemplo 2.2")

const nome = "Igor"
console.log(nome)

//? Retire o comentário do exemplo abaixo para poder ver o erro.
// nome = "Araujo"
// console.log(nome)

/*
Regras para nomear variáveis
    Existem algumas regras que devem ser seguidas ao nomear variáveis, veja:
    
*    Devem começar com letra, _ ou $
*    Não podem começar com número
*    Não podem ter espaços
*    Não podem usar palavras reservadas (como if, for, return)
*    São Case Sensitive
*    Geralmente usamos camelCase

Multiplas variáveis
    Pode se criar múltiplas variáveis usando uma vírgula após o termino de uma, para ficar mais organizado é colocado a próxima variável na linha de baixo. É bastante comum de se ver isso, também em outras linguagens. Veja o exemplo abaixo.
*/ 

console.log("\n\tExemplo 2.3")

const a = 90,
      b = "café",
      c = -50

console.log(a, b, c)

/*
Variáveis não declaradas
    É possível declarar uma variável sem declara, ela será terá um valor primitivo #undefined, que a indicação que ela existe sem valor atribuído. É importante saber que é um valor atribuído automaticamente para JavaScript e não por você e que é um bollean false.
?   Em Python não é possível fazer isso, você terá um erro do tipo 'NameError: name 'y' is not defined' */


console.log("\n\tExemplo 3.1")

let d

console.log(d)

/*
    Temos também o variável #null, é um valor primitivo que representa ausência intencional de valor, ou seja, diferentemente de #undefined, é você qie decide se a variável não tem valor.
    
?   Em Python é utilizado None no lugar */

console.log("\n\tExemplo 3.2")

let e = null

console.log(e)
console.log(typeof e)
/*Apesar de apontar como um objeto ele não é. É um bug famoso que foi mantido para não quebrar o código, pois ele já existia antes do JS ter sido feito.*/  





