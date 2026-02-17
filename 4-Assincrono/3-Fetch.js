/*
-fecth()
   A Fectch API á a interface moderna do JS para realizar requisições HTTP no navegador. Ele permite buscar recursos (arquivos, dados de APIs, imagens, etc) utilizando o método fecth(), que retorna uma Promise, isso significa que a requisição é assíncrona, ou seja, o código não trava enquanto aguarda a resposta do servidor.

   O objeto #response representa a resposta HTTP completa, ele não contém diretamente o conteúdo do arquivo, mas sim informações sobre a requisição e métodos para extrair os dados.

   Assim então temos métodos para acessar o corpor da resposta:

   *response.text()      → Retorna o conteúdo como texto
   *response.json()      → Converte o obejto para JSON
   *response.blob()      → Para arquivos binários
   *response.formData()  → Para dados de formulário

   Esses métodos também retornam Promises, pois a leitura do corpo da resposta também é assíncrona.

   !O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar.

   Vejamos abaixo um exemplo de sua estrutura usando:

   *.text()
   Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.
*/

const Ex1 = 0; if(Ex1) {
console.log("\n\tExemplo 1")

fetch('./Exemplo.txt')
   .then((response) => {
      return response.text()
   }).then((corpo) => {
      console.log(corpo)
   })

}

/*
   *.json
   Um dos formatos de dados mais utilizados em aplicações web é o JSON (JavaScript Object Notation). Ele é amplamente adotado porque sua estrutura é muito parecida com a sintaxe de objetos no JavaScript, o que torna sua leitura e manipulação extremamente simples dentro da linguagem.
   Ele é utilizado principalmente para:

   *Comunicação entre front-end e back-end
   *Consumo de APIs
   *Armazenamento e envio de dados estruturados

   Vejamos abaixo um exemplo em que a linguagem é reduzida para facilitar a leitura com menos caracteres por circunstâncias ideais
*/
const Ex2 = 0; if(Ex2) {
console.log("\n\tExemplo 2")

fetch('./Exemplo.json')
   .then(response => response.json())
   .then(corpo => console.log(corpo))

}
/*
   *.blob()
   Um Blob (Binary Large Object) é um tipo de objeto do JavaScript usado para representar dados binários brutos, como:

   *Imagens, Vídeos, Áudios, PDFs, Arquivos em geral

   Vejamos um exemplo abaixo, mas é interessante trocar para text() afim de fazer comparações
*/ 
const Ex3 = 0; if(Ex3) {
console.log("\n\tExemplo 3")

fetch('./Exemplo.png')
   .then(response => response.blob())
   .then(corpo => console.log(corpo))

}
/*
   Agora seria interessando fazer essa imagem aparecer na tela, mas antes devemos saber que:

   *URL
   Uma URL (Uniform Resource Locator) é o endereço que identifica e localiza um recurso na internet ou dentro do próprio navegador, ela diz onde algo está e como deve ser acessado.
   
      *https://www.site.com/imagem.png

   Quando você trabalha com Blob, os dados estão apenas na memória do navegador, eles não possuem um endereço real na internet.

   Para que possamos usar esses dados como se fossem um arquivo (por exemplo no src de uma imagem), o navegador cria uma URL temporária interna, aponta para o objeto armazenado temporariamente na memória do navegador

      *blob:http://localhost:5500/3f9c2b6d-8a9e-4d...

   Ele existe enquanto a página estiver aberta, pode ser usada como src ou href e também ocupa memória. Por isso existe o: 

      *URL.revokeObjectURL(blobUrl)

   O qual irá desocupar essa memória quando não for mais necessário
*/
const Ex4 = 0; if(Ex4) {
console.log("\n\tExemplo 4")

fetch('./Exemplo.png')
.then(response => response.blob())
.then((imagem) => {
   const blobURL = URL.createObjectURL(imagem)
   console.log(blobURL)

   const div = document.createElement("div")
   const img = document.createElement("img")
   img.setAttribute("src", blobURL)
   
   document.body.appendChild(div).appendChild(img)
})

}
/*
*clone()
   Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.
   Caso você tente transformar o mesmo arquivo para diferenes formatos, não será possível
*/ 
const Ex5 = 0; if(Ex5) {
console.log("\n\tExemplo 5")

fetch('./Exemplo.json')
   .then(resposta => resposta.json())
   .then(json => console.log(json))
   .then(resposta2 => resposta2.text()) //Aqui teremos um erro, pois não será possível
   
}

/*
   Para que esse erro não ocorra criaremos um clone
*/ 
const Ex6 = 1; if(Ex6) {

fetch('./Exemplo.json')
   .then(resposta1 => {
      const resposta1Clone = resposta1.clone()
      return Promise.all([resposta1.json(), resposta1Clone.text()])
   })
   .then(([json, text]) => {
      console.log("JSON:\n", json)
      console.log("TEXT:\n", text)
   })
   


}