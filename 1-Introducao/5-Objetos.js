/*
Objetos
    Em JavaScript, um objeto é uma estrutura que permite armazenar e organizar dados relacionados em um único lugar. Esses dados são representados por pares de chave e valor, onde a chave é uma propriedade e o valor pode ser qualquer tipo de dado: números, strings, booleanos, arrays, funções ou até outros objetos.
    
    Os objetos são muito usados para representar coisas do mundo real, como uma pessoa, um carro, um produto ou um personagem de jogo. Além de armazenar dados, objetos também podem conter funções, chamadas de métodos, que definem comportamentos.

    No exemplo abaixo temos como:

*   Propriedade: 
        nome, idade, cor   
        
*   Vamores:
        "Igor", 60, "branco"
*/ 

console.log("\tExemplo 1")

const pessoa = {
    nome: "Igor",
    sobrenome: "Araújo",
    idade: 60,
    cor: "branco"
}

console.log(pessoa)

/*
Acessando propriedades
    Você pode acessar os valores de um objeto de duas formas:
    
*   Usando pontos:
*/ 

console.log("\n\tExemplo 2")

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.cor)

/*
*   Usando o mesmo método que em listas e utlizado no Python
    ?Observe que agora a propriedade é escrita como uma string
*/ 

console.log("\n\tExemplo 3")

console.log(pessoa["nome"])
console.log(pessoa["idade"])
console.log(pessoa["cor"])

/*
Criando propriedades e alterando
    Caso uma propriedade não exista ela pode ser criada ou alterada da mesma forma como é acessada mas incluindo o sinal se (=) logo em seguida*/
   
console.log("\n\tExemplo 4")    

pessoa.altura = 1.65
pessoa["sexo"] = "masculino"

console.log(pessoa)

/*
Métodos
    Quando um objeto possui uma função dentro dele, essa função é chamada de método. Agora é importante também conhecer o #this, ele faz referência ao próprio objeto, assim coletanto informações de dentro dele. É muito importate seu uso, pois se uma variável tiver o mesmo nome que outra de fora do objeto, um método por exemplo quando for chamado irá utilizar a informação da variável global, causando assim problemas no seu código.
    */ 

console.log("\n\tExemplo 5")    

const retângulo = {
    ladoA: 10,
    ladoB: 5,
    area: function () {
        area = this.ladoA * this.ladoB
        return area
    },
    perimetro: function() {
        perimetro = 2 * this.ladoA + 2 * this.ladoB
        return perimetro
    }
}

console.log(retângulo)
console.log(retângulo.area())
console.log(retângulo.perimetro())

/*
    É importante saber que Arrow Function não cria this, ela geralmente pega o this de fora, ou seja, do window.
    
    Agora também pode-se escrever um método dentro do objeto de uma forma mais reduzida*/

console.log("\n\tExemplo 6")    
    
const quadrado = {
    lado: 5,
    area() {
        return this.lado**2
    },
    perimetro() {
        return 4 * this.lado
    }
}

console.log(quadrado)
console.log(quadrado.area())
console.log(quadrado.perimetro())



