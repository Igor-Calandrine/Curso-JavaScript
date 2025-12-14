/*
Operadores lógicos
    Os operadores lógicos #and e #or no JS são:

?   Python      JS
   -----------------
    and         &&
    or          ||

    No JS é importante utilizar #=== para validar uma variável ou atributo, pois o comportamento da tipagem é diferente do Python, é possível que uma variável do tipo String possa realizar cálculos, desde que seja um número.

    Observe o resultado da equação abaixo, é algo que seria impossível de se realizar no Python
*/ 

console.log("Exemplo 1")

const a = 10
const b = "5"
const c= a/b

console.log(c)

/*
    A sintaxa para se escrever as condições é bem próxima do CSS, utiliza-se as chaves também para colocar dentro do bloco.

    Para se escrever #elif do Python no JS deve-se usar else if 

?   Python      JS
   -----------------
    elif        else if

    
    */

console.log("\nExemplo 2")

let idade_f = 18
let idade_p = 40

if (idade_f >= 18 && idade_p <= 65) {
    console.log("Condição de and verdadeira")
}

else if (idade_f >= 18 || idade_p <= 40) {
    console.log("Condição de or verdadeira")
}

/*
    É importante conhecer alguns valores que são falsos, assim como no Python
    
*    Falsos
    0, ""(string vazia), null, undefined*, NaN
    
*/

