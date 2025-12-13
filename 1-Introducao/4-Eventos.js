/*
Eventos
    Em javaScript, eventos são ações ou ocorrências que acontecem no navegador e que pode-se detectar e responder. Esses eventos permitem que sua página fique interativa, reagindo o que o usuário faz:
    
*    clicar, digitar, mover o mouse, enviar formulários, rolar a página e muito mais

    Há alguns eventos de muita importância para os estudos, e para iniciarmos os estudos é bom conhecer os mais usados:
    
*    click - quando o usuário clica
*    dbclick - clique duplo
*    mouseenter - mouse entra no elementos
*    mouseleave - mouse sai do elemento
*    mousemove - mouse se move

Adicionando Evetos
    Existem 3 formas, mas só uma é realmente recomendada:
    
*   Evento no HTML 
!   Não recomendada
    Irá ser inserida dentro do HTML o JS, irá deixar seu código "sujo" e dificultará a manutenção
    
    Ex: <button onclick="alert('Clicou!')">Clique</button>
    
*   Evento direto no elementos com JS
!   Não recomendada
    Aqui você terá uma limitação de apenas um evento por tipo em cada elemento, limitando assim seu código e seu Web Page
    
*   addEventListener
    Aqui você pode adicionar vários listeners, o seu código ficará mais organizado, permitirá que remova os eventos sempre que for necessário e funciona com todos os elementos*/

    console.log("Exemplo 1")

    function msg_clicou () {
        console.log("Clicou - console")
        alert("Clicou! - Tela")
    }

    function msg_clicou () {
        console.log("Mouse entrou - console")
    }

    const botao = document.querySelector("button")

    botao.addEventListener("click", msg_clicou)
    botao.addEventListener("mouseenter", msg_clicou)

/*
    Para remover os eventos basta utilizar da mesma forma o removeEventListener, coloque em comentário para que você possa ver a função sendo ativada antes de ser removida.*/ 

    console.log("\nExemplo 2")
    
    function exemplo_removida () {
            console.log("Função para ser removida pelo exemplo")
        }

    botao.addEventListener("mouseenter", exemplo_removida)
    botao.removeEventListener("mouseenter", exemplo_removida)

/*  
    Com esse conhecimento agora podemos também aplicar  para remover elementos da tela através de uma classe. No HTML deste capítulo criamos uma #div para ser removida ao se clicar um botão.

*   toglle - adiciona ou remove a classe automaticamente

    também podemos passar argumentos para termos as seguintes funções

*   toggle("classe", true)  - sempre adiciona
*   toggle("classe", false) - sempre remove
*/

console.log("\nExemplo 3")

function alterar_fundo () {
    const div43 = document.querySelector(".exemplo-43")
    div43.classList.toggle("cor-fundo43")
}

const botao43 = document.querySelector(".botao-43")
botao43.addEventListener("click", alterar_fundo)

/*
Window
    É uma parte fundamental do JavaScript, representando a janela do navegador (ou aba) em que a página está sendo exibida. Além de ser o objeto que fornece acesso ao DOM, ele também permite a interação com o browser, como o controle de temporizadores, manipulação de eventos globais e mais.
    
    Há algumas propriedades de localização que são importantes conhecer para aplicarmos inicialmente nos estudos:

    Localização
    
    window.innerWidth  - Largura da janela em px
    window.innerHeight - Altura da janela em px
    window.outerWidth  - Largura da jenela inlcuindo a barra de rolagem
    window.outerHeight - Altura da jenela inlcuindo a barra de rolagem

    window.pageYOffset - Distância rolada para baixo em px
    window.location    - Representa o URL da janela
    
    */

    console.log("\nExemplo 4")

    function dados_window () {
        const largura_janela = window.innerHeight
        const altura_janela = window.innerHeight
        const rolagem_janela = window.outerHeight
        console.log(`Janela(x,y) - (${largura_janela},${altura_janela})`)
        console.log(`Rolagem y: ${rolagem_janela}`)
    }
    
    const botao44 = document.querySelector(".exemplo-44")
    botao44.addEventListener("click", dados_window)

    /*
    Aliado a isso podemos também obter a posição do mouse na tela. Essa ferramente é muito utilizada em jogos, então como sou um entusiasta dessa assunto vamos ver aqui.
    
    Deixarei em comentário para que não atrapalhe a visualização dos outros exemplos.*/ 

    function posicao_mouse (event) {
        const posicaoX = event.clientX
        const posicaoY = event.clientY

        console.log(posicaoX,posicaoY)
    }

    function posicao_mouse_dentro (event) {
        const posicaoX = event.offsetX
        const posicaoY = event.offsetY

        console.log(posicaoX,posicaoY)
    }

    
    // document.addEventListener("mousemove", posicao_mouse)

    // const div43 = document.querySelector(".exemplo-43")
    // div43.addEventListener("mousemove", posicao_mouse_dentro)
