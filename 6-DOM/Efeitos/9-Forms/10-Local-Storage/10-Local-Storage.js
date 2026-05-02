/*
-Local Storage
   É uma API do navegador que permite armazenardados no navegador do usuário de forma persistente, ou seja, os dados continuam salvos mesmo após fechar a aba ou o navegador
   Ela faz parte da Web Storage API, juntamente com o #sessionStorage.

   Os dados ficam armazenados no navegador do usuário, associados ao domínio do site, ou seja, cada domínio possui o seu próprio espaço isolado.

*  Ex:   meusite.com    - tem seu próprio Local Storage
*        outrosite.com  - não consegue acessar os dados de meusite.com

   Há algumas características importantes que um desenvolvedor deve saber antes de escrever suas linhas de código para um Local Storage

   *Armazena dados no formato - chave:valor
   *Só aceita Strings
   *Não expira automaticamente
   *Armazena cerca de 5MB a 10MB, depende do navegador
   *É sincrono, pode impactar a performance

-localStorage
   É acessado pelo objeto global #localStorage
   
   *localStorage.setItem("chave", "valor")
      Para salvar os dados pose-se utilizar o método tradicional de objeto, mas é uma boa prática utilizar o método acima

   *localStorage.getItem("chave")
      Busca o valor da chave
   
   *localStorage.removeItem("chave")
      Remove o item

   *localStorage.clear()
      Limpa todos os itens

   Pode-se pegar o par chave:valor pelo índice
      localStorage.key(0)

   ?A dica é criar um dicionário antes para verificar se as informações estão entrando corretamente e depois adicionar a função de Local Storage.
   ?Exemplo realizado próximo arquivo.

   Para pegar os dados é necessário criar um event de 'DOMContentLoaded' para que os dados sejam puxados do Local Storage e suas "chave:valor" sejam usados corretamente, como foi feito no exemplo abaixo:

   document.addEventListener("DOMContentLoaded", () => {
   *Acima temos o evento criado para pegar os dados
      if (localStorage) {
      
      for (i=0; i <= (localStorage.length -1); i++) {

         textArea.style[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
         *Acima a cada chave:valor será utilizada para definir o estilo 
      }
   }
})

*/ 