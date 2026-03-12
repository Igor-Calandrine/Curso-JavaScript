// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const lis = document.querySelectorAll("li")

for(const item of lis) {
   item.classList.add("NovaClasse")
}

lis.forEach((item, index) => {
   console.log(index, item.className)
})
// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

console.log(window)

for(const item in window) {
   console.log(item + ": " + window[item])
}