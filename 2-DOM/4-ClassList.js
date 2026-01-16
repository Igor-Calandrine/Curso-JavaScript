/*
Introdução
   Em páginas Web modernas, o comportamento visual e funcional dos elementos HTML estão intimamente ligados às classes CSS. Elas determinam estilos, estados e até regras de interação.
   
   Durante muito tempo, a manipulação de ssas classes em JS eram feitas diretamente por meio da propriedade #className, o que exigia cuidade ao ligar com múltiplas classes. Para ressolver esse problema, o DOM introduziu a interface #classList, que fornece uma maneira segura, clara e semântica de trabalhar com classes de elementos HTML.

   A propriedade classList representa a lista de classes associadas a um elementos, permitindo adicioná-las, removê-las, alterná=las e verificá-las de forma direta.

classList
   É uma propriedade de objetos do tipo Element, ele retorna um objeto especial chamado DOMTokenList, que se comporta como uma lista de palavras (tokens), onde cada palavra representa uma classe CSS.

*   Ex: <div class="card ativo destaque></div>"

   Neste clase, o classList do elemento contém 3 tokens
   *card, ativo, destaque

   Cada classe é tratada como uma unidade independente, e não como uma string inteira.
   Vejamos na prática o exemplo abaixo
   */
console.log("\n\tExemplo 1.1 - classList")
const pai = document.querySelector("#pai")
console.log(pai)
console.log(pai.classList)

const filho = document.querySelector(".divFilho")
console.log(filho)
console.log(filho.classList)

//Você pode pedir só os valores para deixar as informações mais limpas
console.log("\n\tExemplo 1.2 - Apenas o value")
console.log(pai.classList.value)
console.log(filho.classList.value)

/*
Principais Métodos
   
   *classList.add()
      O método adiciona uma ou mais classes ao elementos, sem afetas as demais.
*/ 

console.log("\n\tExemplo 2.1 - classList.add()")

const ex2 = document.querySelector("#ex2")
console.log(ex2.classList.value)
ex2.classList.add("ativo", "destaque", "invisível")
console.log(ex2.classList.value)

/*
   *remove()
      O método remove uma ou mais classes do elemento
*/ 
console.log("\n\tExemplo 2.1 - classList.remove()")

ex2.classList.remove("invisível", "destaque")
console.log(ex2.classList.value)

/*
   *toggle()
      O método adiciona a classe se ela não existir e remove se já existir
*/
console.log("\n\tExemplo 2.2 - classList.toggle()")

console.log(ex2.classList.value)
ex2.classList.toggle("titulo")
console.log(ex2.classList.value)
ex2.classList.toggle("titulo")
console.log(ex2.classList.value)

/*
   *contains()
      O método retorna true ou false indicando se a classe existe
*/ 
console.log("\n\tExemplo 2.3 - classList.toggle()")

console.log(ex2.classList.value)
console.log(ex2.classList.contains("ativo"))
console.log(ex2.classList.contains("inativo"))

/*
   *replace()
      O método substitui uma classe existente por outra
*/ 
console.log("\n\tExemplo 2.4 - classList.toggle()")

console.log(ex2.classList.value)
ex2.classList.replace("ativo", "inativo")
console.log(ex2.classList.value)

/*
   *lenght
      Indica quantas classes o elemento possui
*/
console.log("\n\tExemplo 2.5 - classList.lenght")

console.log(ex2.classList.value)
console.log(ex2.classList.length)
ex2.classList.add("titulo", "destaque", "borda")
console.log(ex2.classList.length)

console.log()
