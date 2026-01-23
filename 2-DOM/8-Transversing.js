/*
Trasversing
   O navegador oferece propriedades que permitem ler ou alterar o conteúdo de um elemento HTML. Entre as mais utilizadas estão:

   *outerHTML
      Representa o próprio elemento mais todo o seu conteúdo interno, inlcuindo: Tag HTML, atributos, conteúdo interno
   
*/
estado1 = {Ex1:false, Ex2:false, Ex3:false}

estado1["Ex1"] = false
if (estado1["Ex1"]) {

   console.log("\n\tExemplo 1.1 - outerHTML")
   
   const elemento1 = document.querySelector("li")
   console.log(elemento1.outerHTML)

}

/*
   *innerHTML
      Representa todo conteúdo HTML que está dentro de um elemento inlcuindo: Tags HTML, texto, elementos filhos, comentários.
*/ 

estado1["Ex2"] = false
if (estado1["Ex2"]) {

   console.log("\n\tExemplo 1.2 - innerHTML")
   
   const elemento2 = document.querySelector("div")
   console.log(elemento2.innerHTML)

}

/*
   *innerText
      Representa apenas o texto visível ao usuário.
*/

estado1["Ex3"] = false
if (estado1["Ex3"]) {

   console.log("\n\tExemplo 1.3 - innerText")
   
   const elemento3 = document.querySelector("h2")
   console.log(elemento3.innerText)

}

/*
Obtendo os elemento agora e tendo acesso ao seu conteúdo, podemos fazer alterações como desejarmos*/ 

estado2 = {Ex21:false, Ex22:false, Ex23:false}

//Observe que no exemplo abaixo foi alterado para um parágrafo e alterada sua classe

estado2["Ex21"] = false
if (estado2["Ex21"]) {

   console.log("\n\tExemplo 2.1 - Modificando outerHTML")
   
   const elemento21 = document.querySelector("h2")
   console.log(elemento21.outerHTML)
   elemento21.outerHTML = '<p class="vermelho" id="subtitulo">Subtítulo substituído por um parágrafo em veremelho</p>'

}

//No exemplo abaixo acrescentamos <h1> ao <li> e alteramos seu texto

estado2["Ex22"] = false
if (estado2["Ex22"]) {

   console.log("\n\tExemplo 2.2 - Modificando innerHTML")
   
   const elemento22  = document.querySelector("li")
   console.log(elemento22.innerHTML)
   elemento22.innerHTML = "<h1>Elemento de lista substituído</h1>"
}


//Observe que como no Ex21 o <h2> foi substituído por um <p>, ele agora o irá reconhecer como o primeiro elemento a ser selecionado. Alterando assim sua tag para o JS. Observe também que não é possível alterar os elementos ocultos assim, você apenas está alterando seu texto.

estado2["Ex23"] = false
if (estado2["Ex23"]) {

   console.log("\n\tExemplo 2.2 - Modificando innerHTML")
   
   const elemento22  = document.querySelector("p")
   console.log(elemento22.innerText)
   elemento22.innerText = "<h1>Elemento de lista substituído</h1>"
}

/*
Podemos navegar por esses elementos utilizando:

   *elemento.parentElement
      pai
   *elemento.parentElement.parentElement
      pai do pai
   *elemento.previousElementSibling
      elemento acima
   *elemento.nextElementSibling
      elemento abaixo

   *elemento.children
      HTMLCollection com os filhos
   *elemento.children[0]
      primeiro filho
   *elemento.children[--lista.children.length]
      último filho

      
   ?Lembrando que tudo isso pode ser utilizado document.querySelector() no lugar.
   
   *elemento.querySelectorAll('li')
      todas as LI's
   *elemento.querySelector('li:last-child')
      último filho

Manipulando Elementos
   Existem métodos NODE para mover elementos no DOM, diminuindo o uso de programação pura.

   const lista = document.querySelector("");
   const contato = document.querySelector("");
   const titulo = contato.querySelector("");

   *contato.appendChild(lista)
      move lista para o final de contato
   *conatato.replaceWith(titulo)
      substitui contato por lista
   *contato.insertBefore(lista, titulo)
      insere a lista antes de titulo
   *contato.removeChild(titulo)
      remove titulo de contato
   *contato.replaceChild(lista, titulo)
      substitui titulo por lista

Criando Novos Elementos
   Podemos criar novos elementos com o método createElement()
*/ 
estado3 = {Ex31:false, Ex32:false, Ex33:false}

estado3["Ex31"] = true
if (estado3["Ex31"]) {

   console.log("\n\tExemplo 3.1 - Criando Elementos")
   
   const novoLi = document.createElement("li")
   novoLi.innerText = "Elemento 4 da lista - criado por JS"
   const elemento31  = document.querySelector("ol")
   elemento31.append(novoLi)
   novoLi.classList.add("vermelho")

}

/*
Clonar Elementos
   Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode(). O true é para clonar os filhos também.*/
   
estado3["Ex32"] = true
if (estado3["Ex32"]) {

   console.log("\n\tExemplo 3.2 - Clonando Elementos")

   const h2 = document.querySelector("h2")
   const h2Clone = h2.cloneNode(true)
   console.log(h2Clone)
   const elemento32 = document.querySelector("ol li:first-child")
   // elemento32.replaceWith(h2Clone)
   elemento32.innerText = h2Clone.innerText

   const divPai = document.querySelector("#conteiner-pai")
   const divClone = divPai.cloneNode(true)
   divPai.append(divClone)
   
}

/*
!Atenção, caso seja feito o código abaixo, os elementos representarão o mesmo lugar na memória, caso um seja alterado o outro também será, é o mesmo caso de clonar uma lista no Python.
const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;  
*/ 