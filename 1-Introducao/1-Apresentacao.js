/* 
JavaScript

DOM
    Significa Document Object Model, quando você avre uma página HTML no navegador, ele transforma o código HTML em uma estrutura em forma de árvore, da mesma forma que você deve ter sido instruído a escrever, onde cada elemento é um objeto que pode ser acessado e modificado pelo JavaScript.

    Manipular o DOM siginifica usar JavaScript para alterar o conteúdo ou o estilo da página enquanto ela já está aberta no navegador. Assim um site pode deixar de ser estático e criamos por exemplo:

*      Criar sites interativos
*      Formulários dinâmicos
*      Animações
*      Atualizar partes da página sem recarregar

Adicionar JavaScriptcem HTML
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

Tipos de Dados
    Existem diferentes tipos de dados no JavaScript. Os mais comuns são:

*    Strings
      É um tipo de dado usado para representar texto. Pode conter letras, números, símbolos e espaços, tudo dentro de aspas simples, duplas ou crase. Para usar uma aspas dentro de uma string a de fora deve ser diferente.

      let nome = "Igor";
      const frase = 'Olá, mundo!';
      let template = `Texto com "template" literals`;

*   Number
      Number representa qualquer número, seja inteiro ou decimal.
!     JavaScript não separa int e float; ambos são “number”.

      let idade = 25;
      let temperatura = 22.5;
      const negativo = -10;

*   Array
      Array é um tipo especial de objeto usado para guardar listas de valores na ordem.
      
      let frutas = ["maçã", "banana", "uva"];
      const dados = ["a1", "a4", "b5"];
      
*   Object
      Object é um tipo de dado usado para guardar várias informações organizadas em pares de chave e valor, mais conhecido como dicionários.

      let pessoa = {
        nome: "Ana",
        idade: 30,
        ativo: true
      };

*   Boolean
      Boolean representa apenas dois valores 

      true (verdadeiro)
      false (falso)

*   Null / Undefined
      Significa que uma variável foi declarada, mas não recebeu valor.

      let x;
      console.log(x); // undefined

      
      */    
