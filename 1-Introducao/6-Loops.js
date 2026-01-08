/*
Loops
    No JS o for é muito parecido com o de outras linguagens como o C e Java, ele tem a sintaxe:

*   for (inicializaçao; condição; incremento) {
*        código a ser escrito para repetição
*   }   

!    Importante usar let na variável para que ela não seja global e gere bugs com outras variáveis
*/ 

console.log("\tExemplo 1")

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

console.log("\n\tExemplo 2")

const nomes = ["Igor", "Bianca", "Yuri", "Ana", "Mário"]

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

/*
For Each
    Como o próprio nome diz, ela irá fazer referência a cada elemento dentro do Array. teremos também outros parâmetros caso seja de nossa vontade.

*   array.forEach(function(elemento, indice, array) {
        código a ser escrito
*})    
*/ 

console.log("\n\tExemplo 3")

nomes.forEach(
    function(nome, indice, array) {
        console.log(`${indice + 1} - ${nome.toUpperCase()}`)
        console.log(array)
})

// Com arrow function

console.log("\n\tExemplo 4")

nomes.forEach(
    (nome, indice, array) => {
        console.log(`${indice + 100} - ${nome.toLowerCase()}`)
        console.log(array)
    }
)