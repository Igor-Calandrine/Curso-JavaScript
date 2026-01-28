/*
Listas
   Quase tudo o que foi visto em listas de Python serve para cá, o que deve-se prestar atenção é em alguma mudanças pela linguagem e sintaxe.
   
   !No JS ao pedir um elemento lista[n], esse método não adimite número negativo, por isso foi criado o método lista.at() para poder pegar os número na ordem inversar.
   
   *Array-from
      Devido a presença de Array-Like ou NodeLists existe um método para transformá-las em Array
      No exemplo abaixo pode-se verificar que temos uma NodeList, e por isso não tem métodos como map, filter e reduce.
*/
console.log("\tExemplo 1")

const lis = document.querySelectorAll("li")
console.log(lis)

const lisArray = Array.from(lis)
console.log(lis)
console.log(lisArray)

/*
   *Array.isArray()
      Verifica se o valor passado é uma array e retorna um valor booleano.
*/ 
console.log("\n\tExemplo 2")

console.log(Array.isArray(lis))
console.log(Array.isArray(lisArray))

/*
   *lista.lenght
      Retorna o tamanho da array.
*/ 
console.log("\n\tExemplo 3")

console.log(lis.length)
console.log(lisArray.length)

/*
   Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods).
   
   *list.sort()
      Além de retornarem um valor, eles modificam a array original organizada pelo unicode (primeiro elemento do item em ordem).
*/ 
console.log("\n\tExemplo 4")

const instrumentos = ['Guitarra', 'Baixo', 'Violão']
console.log(instrumentos)

instrumentos.sort()
console.log(instrumentos)

/*É importante observar que podemos ter um efeito indesejado para números, observe que no exemplo abaixo temos o número 8 por ultimo, apesar de ser menor, mas o primeiro algarismo e maior que os demais.*/ 
console.log("\n\tExemplo 5")

const idades = [32,21,33,43,1,12,8]
console.log(idades)
idades.sort()
console.log(idades)

/*O correto seria usar*/
console.log("Ordem numeral") 
const idades2 = [32,21,33,43,1,12,8]

idades2.sort((a,b) => a-b)
console.log(idades2) //bem pouco intuitivo

/*
   *lista.unshift()
      Adiciona elementos ao início da array e retorna o length da mesma. 

   *list.push()
      Adiciona elementos ao final da array e retorna o length da mesma.
*/ 
console.log("\n\tExemplo 6")

const carros = ['Ford', 'Fiat', 'VW']
console.log(carros)

carros.unshift('Honda', 'Kia')
console.log(carros)

carros.push('Ferrari')
console.log(carros)

/*
   *lista.shift()
      Remove o primeiro elemento da array e retorna o mesmo.

   *lista.pop()
      Remove o último elemento da array e retorna o mesmo.
*/ 
console.log("\n\tExemplo 7")

const primeiroCarro = carros.shift()

console.log(primeiroCarro)
console.log(carros)

const ultimoCarro = carros.pop()

console.log(ultimoCarro)
console.log(carros)

/*
   *lista.reverse()
      Inverte os itens da array e retorna a nova array.
*/ 
console.log("\n\tExemplo 8")

carros.reverse()
console.log(carros)

/*
   *lists.includes()
      Verifica se a array possui o valor e retorna true ou false.

   *lists.indexOf()
      Verifica se a array possui o valor e retorna o index do primeiro valor na array, caso ela não esteja presente é retornado -1. Um método que pode ser substituído muitas vezes por includes() caso não seja necessário manter a legibilidade.

   *lists.lastIndexOf()
      Retorna o index do último elemento caso ele tenho repetições no Array
*/ 
console.log("\n\tExemplo 9")

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5

/*
   *lista.join()
      Junta todos os valores da Array e retorna uma string com a vírgula substituindo o valor passado na função.
*/ 
console.log("\n\tExemplo 10")

console.log()
const linguagens1 = linguagens.join()
console.log(linguagens1)
const linguagens2 = linguagens.join(' ')
console.log(linguagens2)
const linguagens3 = linguagens.join('-_-')
console.log(linguagens3)

/*
   *lista.slice()
      Retorna os itens da Array começando pelo início e indo até o valor de final -1, o último não conta igual ao Python.
*/
console.log("\n\tExemplo 11")
console.log(linguagens)
console.log(linguagens.slice(3))
console.log(linguagens.slice(1, 3))
