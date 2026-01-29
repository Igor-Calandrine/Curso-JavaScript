// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

console.log("Método 1")
const cursos = document.querySelectorAll(".curso h1")
const descricoes = document.querySelectorAll(".curso p")
const aulas = document.querySelectorAll(".aulas")
const horas = document.querySelectorAll(".horas")

const cursosArray = Array.from(cursos)
const descricoesArray = Array.from(descricoes)
const aulasArray = Array.from(aulas)
const horasArray = Array.from(horas)

console.log(cursosArray[0].textContent)


let cursoLista = []

for (i=0; i < cursos.length; i++) {
   const infoCurso = {}

   infoCurso["Curso"] = cursosArray[i].textContent
   infoCurso["Descrição"] = descricoesArray[i].textContent
   infoCurso["Aulas"] = aulasArray[i].textContent
   infoCurso["horas"] = horasArray[i].textContent
   
   cursoLista.push(infoCurso)
}
console.log(cursoLista)

console.log("Método 2")
const cursos2 = document.querySelectorAll(".curso")
const cursos2Array = Array.from(cursos2)

let inforCursos = cursos2Array.map((item) => {
   const curso = item.querySelector("h1")
   const descricao = item.querySelector("p")
   const aula = item.querySelector(".aulas")
   const hora = item.querySelector(".horas")

   return {
      curso: curso.textContent,
      descricao: descricao.textContent,
      aula: aula.textContent,
      hora: hora.textContent
   }
})

console.log(inforCursos)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaiores = numeros.filter((item) => {
   return item > 100
})

console.log(numerosMaiores)

// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const baixo = instrumentos.some((item) => {
   return item.toLowerCase() === "baixo"
})

console.log(baixo)
// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let total = 0
compras.forEach((item) => {
   const preçoLimpo = item.preco.replaceAll("R$", "").trim().replaceAll(",", ".")
   total += Number(preçoLimpo) 
})

console.log(`Total: R$ ${String(total).replaceAll(".", ",")}`)

