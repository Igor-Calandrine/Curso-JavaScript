/*
Selecionando Elementos da Página
    Para que o JS possa modificar uma página web, ele primeiro precisa encontrar o elementos desejado dentro do documento. Essa etapa é conhecida como seleção de elementos, significa pedir ao #document que localize, dentro da estrutura do DOM, um ou mais elementos que correspondam a determinados critérios. Somente após essa seleção d JS passa a ter controle real sobre o conteúdo e o comportamento da página.

    Essa seleção pode ser feita de várias formas:
    *Pelo nome da Tag
    *Por um identificador
    *Por uma classe
    *Por uma combinação de regras que descrevem a posição do elemento

    Entre todas as formas de seleção, a que mais é utilizada é o identificador (id), pois ela eiste para ser única dentro de uma página, o que torna a busca mais simples e rápida. A unicidade do irá garantir que não haverá ambiguidade na minipulação do elemento. 

Seleção baseada em seletores CSS
    Uma das evoluções mais importante na seleção de elementos foi a adoção dos seletores CSS pelo JS. Essa abordagem permite que o programador descreva extamente o elementos desejado usando a mesma linguagem utilizada no CSS

    Essa forma de seleção é hoje a mais utilizada, pois une clareza flexibilidade e consistência entre o CSS e o JS
*/ 

console.log("\tExemplo 1")

console.log(document)

const p1 = document.querySelector('#p1')
p1.textContent = "Selecionado pela id"

const p2 = document.querySelector('.p2-c')
p2.textContent = "Selecionado pela classe"

/*
Selecionar um grupo
    Ao selecionar uma tag ou classe, é fundamental entender que o resultado será apenas sobre o primeiro encontrado na página web, para que o grupo toda sofre a interação é necessário que se utilize o exemplo abaixo para que o JS localize todos os elementos que correspondem ao seletor CSS, retornando uma coleção desses elementos para que possam ser manipulados individualmente.
    
    O resultado dessa busca é uma NodeList, que funciona como uma lista ordenada de elementos, respeitando a ordem em que eles aparecem no HTML. A NodeList é estática e possui algumas características importantes:
        *Possui índices
        *Possui propriedad .lenght
        *Pode ser percorrida com forEach
        *Não possui todos os métodos de array (map, filter, etc)
*/ 

console.log("\n\tExemplo 2")

const liAll = document.querySelectorAll("li")
console.log(liAll.length)

liAll.forEach(
    (item) => {
        item.textContent = "Todos li foram selecionados e modificados"
    } 
)

/*
É possível transformar uma NoleList em Array quando se quer utlizar seus métodos, como pop() e entre outros*/

console.log("\n\tExemplo 2.1")

console.log(liAll) //Repare no console uma NodeList

liAllArray = Array.from(liAll)
console.log(liAllArray) //repare no console que não é mais uma NodeList

liAllArray.pop()
console.log(liAllArray)


/*
Selecionando um atributo
    É possível selecionar um atrobuto dentro de uma tag, basta adicionar .getAttribute() após a variavel em que se guarda o querySelectorAll() ou escreve-lo logo em seguida. Vamos ver o exemplo abaixo*/ 

console.log("\n\tExemplo 3")

const liEx31 = document.querySelector(".li1").getAttribute("name")
console.log("1 - " + liEx31)

const liEx32 = document.querySelector(".li1")
console.log("2 - " + liEx32.getAttribute("name"))



/*
O Elemento Raiz do Documento
    Todo documento HTML possui uma estrutura invisível que sustenta tudo o que aparece na tela. No JS, esse elemento é representado por #document.documentElement. Ele é o ponto mais alto da hierarquia do documento, o nó que contém absolutamente todo o restante da página. Por essa razão, ele está sempre presente em qualquer documento HTML válido, independente da complexidade ou simplicidade da página.
    
    Usar #document.documentElement é apropriado sempre que a interação for interagir com características globais da página, e não com elementos específicos de conteúdo. Ele não representa uma parte do site, mas sim o site como um todo.

    O uso de #document.documentElement se torna natural quando o comportamento desejado afeta toda a aplicação. O idioma da página, por exemplo, não pertence a um parágrafo ou a uma seção específica, mas ao documento inteiro. Por isso, o atributo #lang é definido no <html> e deve ser acessado a partir de #document.documentElement
    
    */ 

