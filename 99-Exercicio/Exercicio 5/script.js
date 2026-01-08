// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let brasilCopas = [1959, 1962, 1994, 2002]

console.log("\tUsando for")
for (let i=0; i < brasilCopas.length; i++) {
    frase = `O Brasil ganhou a copa de ${brasilCopas[i]}`
    console.log(frase)
}

console.log("\n\tUsando forEach")

brasilCopas.forEach(
    (nome) => {
        frase = `O Brasil ganhou a copa de ${nome}`
        console.log(frase)
    })


console.log("\n\t Frutas")

for (let i=0; i < frutas.length; i++) {
    if (frutas[i] === "Pera" ){
        break
    }
    console.log(frutas[i])
}

console.log("\n\t Ultima frutas")

let fruta_guardada = null

for (let i=0; i < frutas.length; i++) {
    if (i === frutas.length - 1) {
        fruta_guardada = frutas[i]
    }
}

console.log(fruta_guardada)


