/*
1 - Crie um círculo com uma div de width: 16px, height: 16px e background: #999;
2 - Adicione ao window uma função que ocorre ao "mousemove";
3 - Na função mude as propriedades top e left do círculo com base no mouse.
4 - Você pode usar elemento.style.propriedade para mudar o CSS diretamente.
*/ 

/** @param {MouseEvent} event */
function tamanho_dinamico (event) {
    const posicao_mouse = [event.clientX, event.clientY]
    
    circulo2 = document.querySelector(".circulo2")
    circulo2.style.width = event.clientX/1.5 + "px"
    circulo2.style.height = event.clientY/1.5 + "px"

    circulo2.style.left = `${event.clientX/1.5}px`
    circulo2.style.top = `${event.clientY/1.5}px`
    
    console.log(posicao_mouse)
    console.log(getComputedStyle(circulo2).width)
    
}

function alterar_circulo () {
    const circulo = document.querySelector(".circulo1")
    circulo.classList.toggle("container30")
}

function alterar_circulo2 () {
    const circulo = document.querySelector(".circulo1")
    circulo.classList.toggle("container60")
}

function dimensoes () {
    const largura = window.innerWidth
    const altura = window.innerHeight
    const dimesoes = [largura, altura]

    console.log(dimesoes)
}

const botao = document.querySelector("button")
botao.addEventListener("click", alterar_circulo)
botao.addEventListener("dblclick", alterar_circulo2)

addEventListener ("mousemove", dimensoes)

circulo2 = document.querySelector(".circulo2")
addEventListener ("mousemove", tamanho_dinamico)

