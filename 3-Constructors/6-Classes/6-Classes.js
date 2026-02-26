/*
-Classes ES6
   Apartir do ES6, o JS passou a oferecer a palavra-chave #class como uma forma mais clara e organizada de trabalhar com funções construtoras e protótipos.

   Ela é considerada syntactic sugar, porque não cria um novo modelo de orientação a objetos, na verdade continua sendo baseado em protótipos. A diferena é que a sintaxe fica mais parecida com linguages orientadas a objetos como Java ou C#, tornando o código mais legível e estruturado. O código da classe roda em strict mode automaticamente.

   *class
      Define uma classe
   
   *constructor()
      É o método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.

   *element()
      Equivale a criar um método prototype

   Vejamos o exemplo abaixo:
*/ 

class Button1 {
   constructor(text, background, color) {
      this.text = text
      this.background = background
      this.color = color
   }

   element() {
      const buttonElement = document.createElement("button")
      buttonElement.textContent = this.text
      buttonElement.style.background = this.background
      buttonElement.style.color = this.color
      return buttonElement
   }

   appendElement (target) {
      const targetElement = document.querySelector(target)
      targetElement.appendChild(this.element())
   }
}

const blueButton = new Button1("Botão", "blue", "white")
blueButton.appendElement("body")

/*
-Propriedades
   Podemos passar qualquer valor dentro de uma propriedade. Isso evite erros de parâmetros em ordem e pode ser mais fácil para automatizar. Basta indicar nos parâmetros que a classe irá receber um objeto.
*/

class Button2 {
   constructor ({text, background, color}) {
      this.text = text
      this.background = background
      this.color = color
   }

   element() {
      const buttonElement = document.createElement("button")
      buttonElement.textContent = this.text
      buttonElement.style.background = this.background
      buttonElement.style.color = this.color
      return buttonElement
   }

   appendElement (target) {
      const targetElement = document.querySelector(target)
      targetElement.appendChild(this.element())
   }
}

const optionsVerde = {
   background: "green",
   text: "Clique aqui",
   color: "white",
}

const greenButton = new Button2(optionsVerde)
greenButton.appendElement("body")

/*
-static
   O modificador #static define métodos ou propriedades que pertencem á própria classe, e não às instâncias criadas com new. É considerado um método utilitário, tem a intenção de melhorar a padronização e reutilização. É como se quisece fixar algum valor.
   Ex:

   *Button.createBlue()     -> Pertencem à classe
   *blueButton.createBlue() -> Não pertencem ao objeto criado
*/ 

class Button3 {
   constructor (text, background, color) {
      this.text = text
      this.background = background
      this.color = color
   }

   element() {
      const buttonElement = document.createElement("button")
      buttonElement.textContent = this.text
      buttonElement.style.background = this.background
      buttonElement.style.color = this.color
      return buttonElement
   }

   appendElement (target) {
      const targetElement = document.querySelector(target)
      targetElement.appendChild(this.element())
   }

   static createBlue(text) {
      return new Button3(text, "blue", "white")
   }
}

const yellowButton = new Button3("Amarelo", "yellow", "black")
yellowButton.appendElement("body")

const blueButton2 = Button3.createBlue("Novo Azul") //Aqui temos claramente que pertence a classe
blueButton2.appendElement("body")






