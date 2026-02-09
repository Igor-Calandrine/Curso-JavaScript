/*
-Height e Width de um Objeto
   Quando o JavaScript tenta medir um elemento, ele pode fazer isso de três maneiras diferentes, dependendo do que exatamente quer observar. É aí que entram clientHeight, offsetHeight e scrollHeight eles são três formas distintas de enxergar a mesma caixa. Abaixo temos as propriedades:

   *clientHeight ou clientWidth
      height + padding

   *offsetHeight ou offsetWidth
      height + padding + border

   *scrollHeight ou scrollWidth
      height total, mesmo dentro de scroll escondido
*/ 

console.log("\tExemplo 1.1")

const ex1 = document.querySelector(".ex1")
console.log(ex1.clientHeight + " - Altura + Padding")
console.log(ex1.clientWidth + " - Largura + Padding")

console.log("\n\tExemplo 1.2")
console.log(ex1.offsetHeight + " - Altura + Padding + Borda")
console.log(ex1.offsetWidth + " - Largura + Padding + Borda")

console.log("\n\tExemplo 1.3")
console.log(ex1.scrollHeight + " - Altura + Padding + Scroll")
console.log(ex1.scrollWidth + " - Largura + Padding + Scroll")


/*
-offsetTop e offsetLeft
   Quando o navegador posiciona um elemento na página, ele não o coloca no vazio. Ele sempre o coloca em relação a alguma outra coisa, normalmente o seu contêiner mais próximo que tenha posicionamento. É exatamente isso que offsetTop e offsetLeft medem: eles dizem onde uma caixa começa, dentro do espaço onde ela vive.
   
   Quando você lê section.offsetTop, o navegador está dizendo quantos pixels a parte superior da <section> está afastada do topo do seu contêiner de referência, o valor não muda quando você da scroll, pois ele representa a posição no layout, não na viewport. 
   Se nenhum pai tiver posicionamento (position:absolute e position:relative), o navegador usa o body como referência.

   São úteis para detectar onde um elemento está dentro de um layout, para mover objetos em jogos feitos em canvas ou DOM, para criar animações, sistemas de colisão ou para saber quando algo chegou perto de outro elemento. Eles transformam a página, que parece apenas visual, em um verdadeiro plano cartesiano invisível, onde cada caixa tem coordenadas e pode ser rastreada, medida e movimentada com precisão.
   */ 

console.log("\n\tExemplo 2.1 - offsetTop offsetLeft")

const ex2 = document.querySelector(".ex2")

console.log(ex1.offsetTop)
console.log(ex1.offsetLeft)

console.log("\n\tExemplo 2.2")

console.log(ex2.offsetTop)
console.log(ex2.offsetLeft)

/*
-getBoundingClientRect()
   Enquanto propriedades como offsetTop e offsetLeft descrevem posições dentro da estrutura da página, getBoundingClientRect() ignora o “mapa” do documento e olha apenas para a “câmera”, isto é, "onde este elemento está exatamente agora, na tela do usuário"

   O navegador devolve um objeto que descreve um retângulo. Esse retângulo é a projeção do elemento na tela, depois que tudo foi aplicado: layout, CSS, transformações, zoom do navegador e posição do scroll. Ele é, literalmente, a fotografia matemática do elemento naquele frame.

   Esse objeto contém valores como top, left, right, bottom, width e height. O top é a distância, em pixels, do topo da viewport até o topo visível do elemento. O left é a distância da lateral esquerda da viewport até a lateral esquerda do elemento. O right e o bottom funcionam da mesma forma, medindo as bordas opostas. Já width e height representam o tamanho real do elemento como ele está sendo renderizado, já considerando escalas, transformações e arredondamentos.

   Aqui está o ponto crucial: esses valores mudam com o scroll. Se você rolar a página para baixo, o elemento não se move no documento, mas ele sobe na tela, então o rect.top diminui. Se ele sair da viewport, o valor fica negativo. Se você rolar para cima e ele entrar novamente, o valor cresce. Isso transforma o getBoundingClientRect() numa espécie de radar visual que sempre diz onde o elemento está em relação ao que o usuário está vendo.

   Há também uma sutileza importante: os valores retornados não são necessariamente inteiros. Eles podem ser números decimais, porque o navegador trabalha com subpixels, zoom, DPI e transformações. Isso faz com que o getBoundingClientRect() seja muito mais preciso do que propriedades baseadas em layout.

   ?Daqui também vem o rect da criação de jogos, por isso é bem importante lembrar o seu significado
*/ 

console.log("\n\tExemplo 3 - Rect .ex1")
console.log(ex1.getBoundingClientRect())

console.log("\n\tExemplo 3 - Rect .ex2")
console.log(ex2.getBoundingClientRect().top)
console.log(ex2.getBoundingClientRect().right)
console.log(ex2.getBoundingClientRect().bottom)
console.log(ex2.getBoundingClientRect().left)

/*

-window.innner... e window.outer...
   As propriedades window.innerHeight, window.innerWidth e window.outerHeight, window.outerWidth existem justamente para separar aquilo que é o espaço útil onde o seu conteúdo vive daquilo que é apenas a moldura do navegador.

   *window.innerHeight e window.innerWidth 
      Descrevem o tamanho real da viewport, ou seja, a área onde o HTML, o CSS e o Canvas são desenhados, se você redimensiona a janela, esses valores mudam imediatamente.

   *window.outerHeight e window.outerWidth 
      Eles medem a janela inteira do navegador, incluindo tudo o que não faz parte do conteúdo: bordas, barras de rolagem, barra de título, barra de endereço, abas e até as ferramentas de desenvolvedor quando estão abertas.
*/ 
console.log("\n\tExemplo 4")

// Altere o tamanho da janela com DevTool para fazer comparações
console.log(window.outerWidth)
console.log(window.innerWidth)

/*
-matchMedia()
   Utilize um media-querie como no CSS para verificar a largura do browser
*/ 
console.log("\n\tExemplo 5")

const janela = window.matchMedia('(max-width: 600px)')

if(janela.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
