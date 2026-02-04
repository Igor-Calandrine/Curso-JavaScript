const estado1 = {Ex1:false}
/*
*Introdução
   O objeto retornado não é apenas um objeto comum. Ele é uma instância de uma cadeia de construtores internos do navegador, criada a partir da tag HTML.
   Sendo assim, cada elemento HTML nasce de uma árvore de protótipos muito bem definida. No exemplo abaixo é possível ver toda a cadeia de protótipos de <h1>
*/ 

estado1.Ex1 = false; if (estado1.Ex1) {

   console.log("\n\tExemplo 1")
   const h1 = document.querySelector("h1")

   console.log(Object.prototype.toString.call(h1))
   console.log(HTMLHeadingElement.prototype) 

}

/*
*Dataset
   É uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-
   No exemplo abaixo vamos selecionar nossos itens utllizando o atributo data-, também em seguida veremos que podemos moficá-los.

   Ele é bastante utilizado como forma de configuração de plugins e interações DOM\JS.

   A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.

   !Por padrão o JS não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.
*/ 
console.log("\n\tExemplo 2")

let div = document.querySelector('div')
console.log(div)

div = document.querySelector('[data-cor]')
console.log(div)

div = document.querySelector('[data-cor="azul"]')
console.log(div)

console.log("\n\tExemplo 2 - Propriedades")
console.log(div.dataset.cor)
console.log(div.dataset.width)

console.log("\n\tExemplo 2 - Propriedades Modificadas")
div.dataset.cor = "vermelho"
div.dataset.width = 1000

console.log(div.dataset.cor)
console.log(div.dataset.width)

console.log("\n\tExemplo 2 - Propriedades Criadas")
div.dataset.tempo = 2
div.dataset.altura = 250

console.log(div.attributes)

console.log("\n\tExemplo 2 - Conferindo Propriedades Criadas ")
console.log(div.dataset)
console.log(div.dataset.tempo)
/*
Agora que já vimos o comportamento dela no HTML, como chamar e modificar, vamos cronstruir uma animação de um elemento no HTML

!É importante se atentar ao CSS que para ativar a animação é necessário que tenho a classe .ativo e a animação está no atributo dataset.

!É importante observar que no CSS chamoamos por .classe[dataset] sem espaço. Se for colocado um espaço estaria indicando um elemento dentro do outro.

!Agora não há dúvidas quanto a organização, fica muito melhor e só farei assim
*/

const div3 = document.querySelector("#div3")

div3.addEventListener("click", () => {
   div3.classList.toggle("ativo")
})

const div4 = document.querySelector("#div4")

div4.addEventListener("click", () => {
   div4.classList.toggle("ativo")
}) 

