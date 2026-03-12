// Reescreva a função utilizando valores iniciais de parâmetros com ES6
function createButton(background="blue", color="red") {
  const buttonElement = document.createElement('button')
  buttonElement.style.background = background
  buttonElement.style.color = color
  buttonElement.textContent = "Botão"
  return buttonElement
} 

const redButton = createButton();
document.body.append(redButton)

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango']
let comidas = ['Pizza', 'Batata']

comidas.push(...frutas)

console.log(comidas)
