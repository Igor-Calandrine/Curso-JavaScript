/*
-JSON
   JavaScript Object Notation (JSON) é um formato leve e padronizado para organização e troca de dados. Ele é estruturado em pares de chave e valor, facilitando a leitura tanto por humanos quanto por máquinas.
   Há algumas características importantes que devemos conhecer:

   *As chaves devem obrigatoriamente estar entre aspas duplas.
   *Valores do tipo string também devem estar entre aspas duplas.
   *Valores numéricos, booleanos, null, objetos e arrays não utilizam aspas
   *Cuidado para não colocar vírgula no último item do objeto ou array.

   O JSON é amplamente utilizado em requisições HTTP, APIs e armazenamento de dados, especialmente em aplicações web, por ser simples, leve e compatível com diversas linguagens de programação.

   {
   "id": 1,
   "nome": "Andre",
   "email": "andre@origamid.com"
   }

-Arrays e Objetos
   É muito comum trabalharmos com arrays que armazenam objetos em cada posição. Essa estrutura é amplamente utilizada para representar listas de dados mais complexos, como usuários, produtos, pedidos, entre outros.

   Cada item do array pode ser um objeto com suas próprias propriedades (pares de chave e valor), permitindo organizar informações de forma clara e estruturada.

   [
      {
         "id": 1,
         "nome": "Andre"
      },
      {
         "id": 2,
         "nome": "Maria"
      }
   ]

-JSON.parse()
   Converte um texto no formato JSON em um objeto JavaScript válido, permitindo que possamos manipular os dados no código.

   No Exmplo abaixo iremos transformar o objeto em forma de string para transformar em um tipo JSON, assim pode-se trabalhar como um objeto
*/ 

const moradores = '[{"nome": "Igor", "idade": 30, "solteiro": true}, {"nome": "Bianca", "idade": 25, "solteiro": false}]'
console.log(moradores)

const moradoresJSON = JSON.parse(moradores)
console.log(moradoresJSON)

/*
-JSON.stringify()
   Faz o processo inverso: converte um objeto JavaScript em uma string no formato JSON.
*/ 

const moradoresTEXT  = JSON.stringify(moradoresJSON)
console.log(moradoresTEXT)
