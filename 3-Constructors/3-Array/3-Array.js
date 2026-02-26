estado1 = {Ex11:false}
/*
*lista.foreach()
   A função de callback é executada para cada item da Array. Ela possui 3 argumentos:
      ItemAtual (valor do item da array), 
      Index (index do valor na array) 
      Array (array original).
*/ 


estado1.Ex11 = false; if (estado1.Ex11) {
   console.log("\tExemplo 1")
   const lista = document.querySelectorAll("li")

   lista.forEach((item, index, array) => {
      console.log(array)
      console.log(item, index)
   })
}

/*
*lista.map()
   O método é uma função nativa dos Arrays e tem como objetivo criar um novo Array a partir de um Array existente, aplicando uma transformação em cada elemento. É necessário o comando de #return para que a saida de cada elemento para a variável e assim forme uma nova lista.

   !Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.

   Ele não altera o Array original, isso é um ponto-chave e um dos motivos de ser tão usado em código moderno e funcional.
   Ela possui os mesmos 3 argumentos de #lista.foreach()
*/ 


estado1.Ex12 = false; if (estado1.Ex12) {
   console.log("\n\tExemplo 2")

   const lista = document.querySelectorAll("li")
   listaArray = Array.from(lista)

   const novaLista = listaArray.map((item, index, array) => {
      console.log(item)
      return item.innerText = (index+1) + "º lista"
      
   })

   console.log(novaLista)
}

/*
   Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.*/ 

estado1.Ex13 = true; if (estado1.Ex13) {
   console.log("\n\tExemplo 3")
      
   const aulas = [
      {nome: 'HTML 1', min: 15},
      {nome: 'HTML 2', min: 10},
      {nome: 'CSS 1', min: 20},
      {nome: 'JS 1', min: 25}]

   const aulasNome = aulas.map((item) => {
      return item.nome
   })
   
   const aulasMinutos = aulas.map((item) => {
      return item.min
   })

   console.log(aulasNome)
   console.log(aulasMinutos)
}

/*
*lista.filter()
   É uma função nativa dos Arrays utilizada para selecionar elementos de uma lista com base em uma condição lógica. Retorna um novo array contendo apenas os elementos que atendem à condição definida, sem modificar o array original.
   Possui os mesmos 3 argumentos de #lista.foreach()
*/ 
estado1.Ex14 = true; if (estado1.Ex14) {
   console.log("\n\tExemplo 4")

   const numeros = [0, 23, 56, 67, 89, 90, 23, 43, 54, 74, 86]

   const impares = numeros.filter((item) => {
      return item % 2 !== 0 
   })

   console.log(impares)
}

/*
*lista.some()
   O método é uma função nativa dos Arrays, utilizada para verificar se há pelo menos um elemento na lista que atende a uma determinada condição.
   Ela possui os mesmos 3 argumentos de #lista.foreach()
*/ 
estado1.Ex15 = false; if (estado1.Ex15) {
   console.log("\n\tExemplo 5")

   const usuarios = [
      {nome:"Ana", ativo: false},
      {nome:"Bianca", ativo: false}
   ]

   const ativos = usuarios.some((item) => {
      return item.ativo === true
   })

   console.log(ativos)
}

/*
*lista.every()
   O método é uma função nativa dos Arrays, utilizada para verificar todos os elementos na lista atendem a uma determinada condição.
   Ela possui os mesmos 3 argumentos de #lista.foreach()
*/ 
estado1.Ex16 = false; if (estado1.Ex16) {
   console.log("\n\tExemplo 6")

   const clientes = [
      {nome:"Ana", pago: false},
      {nome:"Bianca", pago: true},
      {nome:"Yuri", pago: false}
   ]

   const pendentes = clientes.every((item, index, array) => {
      return item.pago !== true
   })

   console.log(pendentes)
}

/*
*lista.find()
   Retorna o valor atual do primeiro elemento na lista que atende a uma determinada condição.
*lista.findIndex()
   Retorna o index deste valor na array.
*/ 

estado1.Ex17 = false; if (estado1.Ex17) {
   console.log("\n\tExemplo 7")

   const usuarios = [
      {nome:"Ana", ativo: false},
      {nome:"Bianca", ativo: true}
   ]

   const ativos = usuarios.find((item) => {
      return item.ativo === true
   })

   console.log(ativos)
}

estado1.Ex18 = false; if (estado1.Ex18) {
   console.log("\n\tExemplo 8")

   const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã']
   const peraIndex = frutas.findIndex((item) => {
      return item === "Pêra"
   })

   console.log(peraIndex)
}

