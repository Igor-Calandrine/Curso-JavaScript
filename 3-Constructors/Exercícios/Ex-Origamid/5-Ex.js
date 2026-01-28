const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const pizza = comidas.at(0)
console.log(pizza)
comidas.splice(0, 1)
console.log(comidas)
const macarrao = comidas.at(-1)
console.log(macarrao)
comidas.splice(-1, 1)
console.log(comidas)
comidas.push("Arroz")
console.log(comidas)
comidas.unshift("Peixe", "Batata")
console.log(comidas)


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes)
estudantes.sort()
console.log(estudantes)
console.log(estudantes.includes("Joana"))
console.log(estudantes.indexOf("Juliana"))

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split("section")
console.log(html)
html = html.join("ul")
console.log(html)
html = html.replaceAll("div>", "li>")
console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const copyCarro = carros.slice()
carros.splice(-1, 1)
console.log(carros)
console.log(copyCarro)