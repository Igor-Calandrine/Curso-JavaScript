/*
window
    Quando o JS é executado em um navegador, ele precisa de um ambiente onde tudo exista: variávris, funções, a página, o histórico, a URL, o tamanho da tela e a interação com o usuário. Esse ambiente é representado por um único objeto central chamado #window.
    
    O #window é o ponto mais alto da hierarquia do JS no navegador, tudo o que existe globalmente depende dele diretamente ou indiretamente. Ele representa a javanela do navegador que está exibindo a página. Não se trata apenas da parte visual, mas de todo o contexto de execução do JS. Sempre que um script é carregado em uma página HTML, ele passa a roda dentro desse objeto.

    No JS de navegador, o #window é um objeto global. Isso significa que qualquer variável ou função criado no escopo global passa a fazer parte dele. Quando o programdo declara uma variável usando #var fora de qualquer função, essa variável se torna automaticamente uma propriedade do #window. O mesmo acontece com funções declardas no escopo global.

    Por outro lado, variáveis declaradas com #let e #const, embora sejam globais no sentido de estarem fora de funções, não são adicionadas ao objeto #window. Essa diferença existe para evitar conflitos e tornar o código mais seguro e previsível.
    
*   Observe no console do exemplo abaixo que apenas será encontrada a variável de var no objeto window
*/

console.log("\tExemplo 1")

console.log(window)

var ateste1 = "teste de var"
let ateste2 = "teste de let"
const ateste3 = "teste de const"

/*
Omissão de window
    Na prática do dia a dia, o programadoe raramente escreve #window. antes de acessar algo global. Isso acontece porque o JS, ao não encontrar uma variável no escopo local, procura automaticamente no #window. Quando se chama #alert(), por exemplo, o que realmente está sendo chamado é #window.alert()
*/ 

console.log("\n\tExemplo 2")

// window.alert("Exemplo sem omissão")
// alert("Exemplo com ominssão")
console.log(window.innerHeight)
console.log(innerWidth)



/*
Controle da janela e do navegador
    O #window permite que o JS saiba informações sobre o tamanho da área visível da página, a posição so scroll e até mesmo que mova esse scroll programaticamente. Ele também fornece acessó a URL atual por meio do objeto #location, permitindo ler o endereço da página ou redirecionar o usuário para outro site.

    UM dos papéis mais importantes do #window é o controle do tempo. Funções como #serTimeout e #setInterval permitem que o código seja executado após um determinado período ou repetidamente em intervalos regulares. Isso é essencial para animações, jogos, atualizações e qualquer comportamento que dependa do tempo.

    No escopo global, a palavra-chave #this aponta para o #window. Isso significa que, fora de funções ou classes, o contexto atual é a própria janela do navegador. Esse detalher é importante para entender por que certos comportamentos mudam quando o código é executado dentro de funções, métodos ou módulos.


document
    Dentro do #window existe um objeto fundamental chamado #document. Ele representa o DOM, ou seja, a estrutura HTML. Sempre que o JS acessa um elemento da página, modifica um texto ou reage a um clique, ele estra trabalhando com o #document, que por sua vez está constido dentro do #window.
    
    Essa relação deixa claro que o #window não é apenas a página, mas o ambiente completo que envolve o página. Enquanto o #document cuida do conteúdo, o #window cuida do contexto onde esse conteúdo vive.
    
    No top da hierarquia do #document está o próprio HTML, e abaixo dele estão os elementos que a compõem, organizador de forma que cada Tag HTML se torna um objeto, com propriedades e comportamentos próprios.
    */ 

console.log("\n\tExemplo 3")

console.log(document)
console.log(document.location)
console.log(document.location.href)

/*
Node
    Um Node é a unidade básica do DOM, ele representa qualquer coisa que exista dentro do documento: uma Tag HTML, um texto, um comentário, o prório documento, entro outros. Ou seja, o DOM não é feito apenas de elementos visuais, ele também inclui espaços em branco, quebras de linha, textos soltos e comentários. Todos esses são Nodes. Portanto, quando se diz que "tudo no DOM é um Node", isso não é um exagero.
    
Tipos de Node
    Embobra todos sejam Nodes, eles não são iguais, cada Node possui um tipo que define seu papel no DOM.
    
    *Document Node - representa o documento inteiro, o document
    *Element Node - representa uma Tag HTML
    *Text Node - representa o texto dentro de uma Tag
    *Comment Node - representa comentários HTML
    
    Essa divisão é essencial para entender por que certas propriedades e métodos funcionam em alguns casos e em outros não.
    
Element Node
    O Element Node será muito utilizado durantes os estudos então é melhor detalhar com mais informações. Ele representa somente as tags HTML, como <div>, <p>, <h1>, <ul>, <li> e etc.
    
    Sempre que se seleciona algo com querySelector por exemplo, o que você recebe é um Element (ou uma coleção de Elements). Eles possuem métodos próprios que serão acessados para construir suas páginas*/ 




