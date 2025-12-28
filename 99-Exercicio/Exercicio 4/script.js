/*
1 - Adicione uma navegação (nav) com 3 links: ./, ./produto.html e ./contato.html
2 - Crie as páginas produto.html e contato.html com o mesmo html de index.html
3 - Selecione os links na navegação.
4 - Para cada link execute uma função (ativarLink);
5 - Na função, extraia o href do elemento.
6 - Verifique se o href é igual ao URL da página (document.location.href)
7 - Se for igual mude o backgroundColor para black e a color para white do link.
*/

const links = Array.from(document.querySelectorAll("nav a"))
const botao = document.querySelector("button")
let href = ""
let url = ""


function ativarLink () {

    for (i = 0; i < links.length; i++) {
        links[i].classList.toggle("ativado")
        href = links[i].getAttribute("href")
        url =links[i].href

        console.log(href)
        console.log(url)

        if (href === url) {
            links[i].style.backgroundColor = "black"
        }
        else {
            links[i].style.backgroundColor = "red"
        }
    }
    console.log("")
}

botao.addEventListener("click", ativarLink)
