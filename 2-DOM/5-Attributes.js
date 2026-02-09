/*
-Introdução
   Em HTML, os elementos não são definidos apenas por sua tag. Cada elemento pode possuir atributos que fornecem informações adicionais sobre seu comportamento, identidade e função dentro do documento. Cada atributo carrega significado semântico funcional, e pode ser acessado, modificando ou removendo através do JS.

   No exemplo abaixo tempo um atributo onde o id é uma chave e "elemento2" é um valor.
   
   *Ex id="elemento2"

Obtendo atributos com JS
   *.attributes
      Retorna uma array-like com os atributos do elemento, é uma propriedade apenas de leitura.*/

console.log("\n\tExemplo 1.1 - .attributes")

const ex1 = document.querySelector("img")
console.log(ex1.attributes)

//Por ser uma Array-like, podemos pegar a quantidade de atributos
console.log(ex1.attributes.length)

/*
   Após conhecermos seus atributos podemos acessá-los da mesma forma que acessamos um objeto. Iremos utilizar o exemplo acima para acessar seus valores.
   !Lembrando que class é por classList
*/ 

console.log("\n\tExemplo 1.1 - Acessando os valores")

console.log(ex1.id)
console.log(ex1.src)
console.log(ex1.alt)

/*
   *getAttribute()
      Retorna o valor de um atributo específico, se o atributo não existir ele retornará null
*/ 
console.log("\n\tExemplo 1.2 - getAttribute()")

console.log(ex1.getAttribute("alt"))
console.log(ex1.getAttribute("id"))

/*
   *setAttribute()
      O método cria ou altera um atributo caso ele já exista
*/

//substituindo
console.log("\n\tExemplo 1.3 - setAttribute() - Substituindo")

console.log(ex1.getAttribute("alt"))
ex1.setAttribute("alt", "imagem do ex1 - sbustituído")
console.log(ex1.getAttribute("alt"))

//criando
console.log("\n\tExemplo 1.3 - setAttribute() - Criando")

console.log(ex1.attributes.length)
ex1.setAttribute("value", "imagem")
console.log(ex1.attributes.length)
console.log(ex1.getAttribute("value"))

/*
   *removeAttribute()
      Remove completamente um atributo do elemento
*/
console.log("\n\tExemplo 1.4 - setAttribute() - Substituindo")

console.log(ex1.attributes.length)
ex1.removeAttribute("value")
console.log(ex1.attributes.length)
console.log(ex1.getAttribute("value"))

/*
   *hasAttribute()
      Retorna true ou false se um atributo esta ou não presente*/
console.log("\n\tExemplo 1.5 - hasAttribute()")
      
console.log(ex1.hasAttribute("alt"))
console.log(ex1.hasAttribute("value"))

/*
   *hasAttributes()
      Retorna se tem algum atributo
*/
console.log("\n\tExemplo 1.5 - hasAttributes()")

console.log(ex1.hasAttributes())
const ex2 = document.querySelector("div")
console.log(ex2.hasAttributes())

/*
Substituição de propriedade de um objeto de maneira clássica
   Lembre-se que podemos modificar o valor de uma propriedade, mas devemos evitar de utilizar. É bom ver o exemplo abaixo para relembrar e entender de onde vem os métodos que utilizamos.
   *Ex: objeto.propriedade = ''
*/ 
console.log("\n\tExemplo 1.6 - Substituição classica")

ex1.alt = "Substituição de propriedade de um objeto"
console.log(ex1.alt)






  

