/*
-Modal
   Um modal é um componente de interface que aparece sobre o conteúdo da página, exigindo uma ação do usuário antes que ele continue a interação.
   Ele geralmente escurece fundo e destaca uma caixa central com uma mensagem, formulário ou ação importante.
   Ex:
      *Formulários rápidos
      *Avisos importantes
      *Exibição de imagens ou informações detalhadas

   Um modal é composto por 3 partes:
      *Overlay
         Camada semitransparente que bloqueia o fundo
      *Conteúdo do modal
         Caixa central com texto, botões ou formulários
      *Estado Ativo/Inativo
         Controlado Geralmente por uma classe CSS

   Agora vejamos na prática como fazer um modal

   *HTML
      Criaremos primeiramente sua estrutura HTML. No final de seu body colocaremos uma div que será o seu modal. Não importará de verdade onde esteja no HTML, pois ele vai ocupar a tela inteira, mas para manter a organização e facilitar futuras manutenções é melhor que fique no final do seu HTML.

   *CSS
      Criaremos um estilo no CSS que ele ocupará toda a tela e que tudo que não esteja contido no modal esteja de alguma forma transparente ou desfocada.
      Sua altura e largura deve ter o tamanho da tela para ocupar todo o espaço, e sua posição fixa para se manter visualmente no mesmo lugar mesmo que o usuário role a barra de scroll.

   *JS
      Criaremos no JS um evento que a págian abra com o modal e após o click no botão submit, ou no botão fechar, ou em uma área externa do formulário ele seja desativado retirando a classe .ativo
*/ 

const modal = document.querySelector(".modal-container")
const botaoSubmit = document.querySelector(".botao-submit")
const botaoFechar = document.querySelector(".botao-fechar")
const formArea = document.querySelector(".form-externo")



botaoSubmit.addEventListener("click", (event) => {
   event.preventDefault()
   modal.classList.remove("ativo")
})

botaoFechar.addEventListener("click", (event) => {
   event.preventDefault()
   modal.classList.remove("ativo")
})

window.addEventListener("click", (event) => {
   if (event.target === modal) {
      modal.classList.remove("ativo")
   }
})




