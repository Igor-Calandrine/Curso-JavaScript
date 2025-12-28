/*


DOM
    Significa Document Object Model, quando você abre uma página HTML no navegador, ele transforma o código HTML em uma estrutura em forma de árvore, da mesma forma que você deve ter sido instruído a escrever, onde cada elemento é um objeto que pode ser acessado e modificado pelo JavaScript.

    Manipular o DOM siginifica usar JavaScript para alterar o conteúdo ou o estilo da página enquanto ela já está aberta no navegador. Assim um site pode deixar de ser estático e criamos por exemplo:

*      Criar sites interativos
*      Formulários dinâmicos
*      Animações
*      Atualizar partes da página sem recarregar

Adicionar JavaScriptc em HTML
    Para adicionar um script em um arquivo HTML significa conectar um código JavaScript ao documento para que a página possa executar ações, interações e lógicas de programação. Existem 3 maneiras principais de inserir scripts no HTML:

*      Usando a tag <script> no final do <body>
*      Dentro do <head>
*      Diretamente no HTML como script interno.

    A forma mais recomendada é colocar o <script> antes do fechamento da tag <body>, porque isso garante que todo o conteúdo da página seja carregado antes do JavaScript ser executado. Nesse exemplo, o atributo #src aponta para um arquivo externo chamado script.js, que contém o código. Essa prática mantém o código organizado e facilita a manutenção.

*    <body> 
*      <!-- conteúdo da página --> 
*      
*      <script src="script.js"></script> 
*    </body>

    Também é possível colocar o script dentro do <head>, mas nesse caso é importante usar o atributo #defer, para garantir que o JavaScrit só rode depois que o HTML for carregado

*    <head> 
*      <script src="script.js" defer></script> 
*    </head>

    Se você precisar de um código pequeno e específico, pode inserir o JavaScript diretamente dentro das tags <script> no final do <body>

*    <script> 
*      console.log("Script interno funcionando!"); 
*    </script>

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
    É importante também saber que podemos puxar informações de um elemento.
*/ 

console.log("\n\nExemplo 2 - Puxando informações")

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