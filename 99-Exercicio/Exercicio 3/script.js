/*
1 - Crie um botão com nome de Adicionar.
2 - Adicione uma função (somar) ao clique desse botão
3 - Só adicione a função se o botão existir na tela.
4 - Crie uma div com o texto 0 dentro dela: <div>0</div>
5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
6 - Mude o valor da div para o novo total.
7 - Mude o valor apenas se o total for menor que 10.
8 - Quando não for mais possível adicionar, mostre uma mensagem no console.
*/

function somar () {
    const a = 5
    const b = 10
    let soma = a + b
    console.log(soma)

    const texto = document.querySelector(".texto")
    const total = Number(texto.textContent) + 1
    const div = document.querySelector(".container")
 
    if (total < 10) {
        texto.textContent = total
        div.style.width = (100 + total*10) + "px"
        div.style.height = (100 + total*10) + "px"
    } 
    else {
        alert("Valor limite atingido")
        texto.textContent = 0
}
}

const botao = document.querySelector(".botao")

if (botao) {
    botao.addEventListener("click", somar)
}