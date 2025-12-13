/*
document.querySelector
    É um dos métodos mais importantes e utilizados no JavaScript moderno. Ele serve par selecionar elementos do HTML usando seletores CSS, permitidno manipular conteúdo, estilos e comportamentos da página.

    Ele funciona buscando apenas o primeiro elemento que combina com o seletor informado. Caso nenhum elemento seja encontrado, retorna #null.

    A sintaxe é:
*      document.querySelector("seletor");

    O seletor pode ser:
*      tag - p, h1, div
*      classe - .menu, .container
*      ID - #nome, #titulo
*      compostos - ul li a
*      atributo - input[type="text"]

    Da mesma forma como é escrito no css, deve-se passar o caminho na constante para ter acesso a ela e alterar suas características. Vejamos no exemplo abaixo.
*/ 

console.log("Exemplo 1 - document.querySelector")

const nav = document.querySelector("nav")
console.log(nav)

nav.style.backgroundColor = "black";

const ul = document.querySelector(".lista")
console.log(ul)

ul.style.color = "white"

const a1 = document.querySelector("#home")
console.log(a1)

a1.style.color = "inherit"

/*
    É importante também saber que demos puxar informações de um elemento.
*/ 

console.log("Exemplo 2 - Puxando informações")

console.log("\n2.1 - nav.innerHTML")
console.log(nav.innerHTML)

console.log("\n2.2 - nav.innerText")
console.log(nav.innerText)

console.log("\n2.3 - nav.clientWidth")
console.log(nav.clientWidth)

console.log("\n2.4 - dir")
console.dir(ul)

/*
Adicionaremos aqui uma classe através do JS, mas também é importante lembrar que o HTML já tenho o link no seu head para o CSS.
*/ 

console.log("\nExemplo 3 - Adicionando uma classe")

console.log("a1.classList.add('grande')")
a1.classList.add("grande")