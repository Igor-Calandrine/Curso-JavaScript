/*
Console.log
    É uma função do JavaScript usada para exibir mensagens no console do navegador, presente nas ferramentas do desenvolvedor quando se abre uma página no seu browser. Ele serve como uma forma de inspecionar valores, testar variáveis, verificar o comportamento do código e identificar erros durante o desenvolvimento.
    
    Essa função é um dos recursos mais importantes para aprender e depurar o código, e é usada tantto por iniciantes quanto por profissionais.
    
    */ 

    console.log("Olá mundo!")

/*
Variáveis
    Variáveis em javaScript são espaçoes na memória usados para armazenar valores. Elas permitem guardar informações que podem ser usadas, modificadas ou exibidas durante a execução do programa. Sem variáveis, seria impossível criar lógica, cálculos, interações ou qualquer funcionamento dinâmico.

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

console.log("\nExemplo let")

let idade = 30
console.log(idade)

idade = 20
console.log(idade)

//*const
// No exemplo baixo criaremos uma variável com #const e depois eremos tentar alterar seu valor. Observe que agora termos um erro.

console.log("\nExemplo const")

const nome = "Igor"
console.log(nome)

nome = "Araujo"
console.log(nome)

/*
Regras para nomear variáveis
    Existem algumas regras que devem ser seguidas ao nomear variáveis, veja:
    
*    Devem começar com letra, _ ou $
*    Não podem começar com número
*    Não podem ter espaços
*    Não podem usar palavras reservadas (como if, for, return)
*    São Case Sensitive
*    Geralmente usamos camelCase
    
*/ 


