/*
Operadores lógicos
    Os operadores lógicos (and) e (or) no JS são:

*    Ex: and - &&
*        or  - ||

    No JS é importante utilizar (===) para validar uma variável ou atributo, pois o comportamento da tipagem é diferente do Python, é possível que uma variável do tipo String possa realizar cálculos, desde que seja um número.

    Deve-se utilizar o parênteses para colocar o argumento da condição dentro dele.
    A sintaxe para se escrever as condições é bem próxima do CSS, utiliza-se as chaves também para colocar dentro do bloco.

    Para se escrever (elif) do Python no JS deve-se usar (else if) 

?   Python      JS
   -----------------
    and         &&
    or          ||
    elif      else if

    
    */

console.log("\tExemplo 1")

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
    
*    False -  0, ""(string vazia), null, undefined*, NaN
    
Swicth 
    Com o swicth você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra breack para caancelar a continuação. O valor default ocorrerá caso nenhuma das anteriores seja verdadeira
*/

console.log("\n\tExemplo 2")

const corFavorita = "Verde"

switch (corFavorita) {
    case 'Azul':
        console.log(`O céu é ${corFavorita}`)
        break
    case 'Verde':
        console.log(`O mar é ${corFavorita}`)
        break
    case 'Rosa':
        console.log(`A flor é ${corFavorita}`)
        break
    default:
        console.log(`Não há cores`)
}

