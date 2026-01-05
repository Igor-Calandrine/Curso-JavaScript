/*
Fuções
    Quase tudo o que foi estudado para Python irá servir para JavaScript em relação a funções, vejamos aqui algumas diferenças.
  
  *Sintaxe Lêxical
    Para escrever uma função devemos utilizar:

    function nomeDaFunção {
        conteúdo da função
    }*/

console.log("\tExemplo 1")

function NomeSobrenome () {
    return console.log("Igor Araújo")
}

NomeSobrenome()

/*
Função Arrow
    Irá funcionar como uma função lâmbida
    */
   
console.log("\n\tExemplo 2")    

const soma = (a, b) => {
    return (a + b)
}

console.log(soma (5, 7))

/*
Variáveis globais
    No JavaScript variáveis globais podem ser alteradas com um comando de dentro da função sem a necessidade de se declarar como um variável global dentro da função.
    ?Essa é uma diferença muito importante, pois essa característica não pode ser levada para os trabalhos realizados em Python*/ 

console.log("\n\tExemplo 3")    

let valor1 = 30

function somarValores () {
    console.log(valor1)
    const valor2 = 90
    const valor3 = 10
    valor1 = valor2 + valor3
    return valor1
}

console.log(somarValores())

