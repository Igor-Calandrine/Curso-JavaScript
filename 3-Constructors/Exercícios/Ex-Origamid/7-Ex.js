// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p")
const paragrafosArray = Array.from(paragrafos)
console.log(paragrafosArray)

let caracteres = paragrafosArray.map((item) => {
   const texto = item.textContent.replaceAll(" ", "").trim()

   return texto
})

caracteres = caracteres.join(",")
console.log(caracteres.length)


// Crie uma função que retorne novos elementos html, com os seguintes parâmetros: tag, classe e conteúdo.

function ElementosHtml(itens) {
   this.caminho = document.querySelectorAll(itens)
   this.caminhoArray = Array.from(document.querySelectorAll(itens))

   ElementosHtml.prototype.HtmlAtributos = function () {

      this.caminho.forEach((item) => {

         const tagName = item.tagName
         console.log(`Tag name: <${String(tagName).toLowerCase()}>`)

         const className = item.classList
         console.log(`Classes: ${className}`)

         const textContent = item.textContent
         console.log(`Conteúdo:\n ${textContent}`)

         const id = item.getAttribute("id")
         console.log(`id: ${id}`)

         console.log("")

      })

      let infoElementos = this.caminhoArray.map((item) => {

         const tagName = item.tagName.toLowerCase()
         const className = item.className
         const textContent = item.textContent
         const id = item.getAttribute("id")

         return {
            "Tag": tagName,
            "Classes": className,
            "Conteúdo": textContent,
            "ID": id,
         }

         })
         console.log(infoElementos)
   }

   ElementosHtml.prototype.inserirTitulo = function (classe, conteudo) {
      this.caminho.forEach((item) => {

         const novoTitulo = document.createElement("h1")
         classe ? novoTitulo.classList.add(classe) : null
         conteudo ? novoTitulo.textContent = conteudo : null

         item.before(novoTitulo)
      })
   }
}

// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico.

const item1 = new ElementosHtml(".ativo")
item1.HtmlAtributos()
item1.inserirTitulo( "titulo", "Título Novo h1")


const novoItem = document.querySelectorAll("p")
item1.inserirTitulo.call({caminho: novoItem},"titulo2", "Títuto Novo h1")

