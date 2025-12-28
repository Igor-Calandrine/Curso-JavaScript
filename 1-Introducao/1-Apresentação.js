/* 
Maiúsculas e Minúsculas
      JavaScript é uma linguagem que diferencia letras maiúsculas de minúsculas. Isso significa que palavras-chave, variáveis, nomes de função e outros identificadores da linguagem sempre devem ser digitados com a composição compatível de letras.
      
      Por exemplo, são palavras diferentes: 
*     online, Online, OnLine e ONLINE

Comentários
      JavaScript aceita dois estilos de comentários. Qualquer texto entre // e o final de uma linha é tratado como comentário e é ignorado por JavaScript, normlamente é breve e usado para descrever alguma função, deve ser usado constantemente pois é uma maneira de organizar seu código e facilitar a manutenção. Pense que seu código deve ser lido e entendido depois de mais de 30 dias sem o ver.
      
      Esse resumo é construído através de outro tipo de comentário que pode utlizar várias linhas é conhecido em Python como DOCstring. 

Pontos e vírgulas opcionais
      Assim como muitas linguagens de programação, JavaScript usa o ponto e vírgula (;) para separar
      instruções, mas você normalmente pode omitir o ponto e vírgula entre duas instruções, caso essas
      instruções sejam escritas em linhas separadas. Como eu me identifico mais com a linguagem Python, prefiro não usar se for não for necessário pois prefiro um código mais limpo e claro. 
      Apesar disso existem excessões que são importante saber.

      As vezes fica melhor escrever variáveis uma ao lado da outra para condensar um bloco que esta interamente ligado entre si, para isso é melhor utilizar ponto e vírgula para que ele possa ser escrito de forma linear:
*     Ex: a = 3; b = 4;

      Em geral, se uma instrução começa com (, [, /, + ou -, há a possibilidade de que possa ser interpretada como uma continuação da instrução anterior. 
      Alguns programadores gostam de colocar um ponto e vírgula protetor no início de uma instrução  assim, para que continue a funcionar corretamente mesmo que a instrução anterior seja modificada:

*      Ex: 
*      var y = x + f
*      (a+b).toString()

      Será lido como:
!      var y = x + f(a+b).toString()

      Escreva então:
      var y = x + f
      ;(a+b).toString()
?     Observe (;) antes da instrução por segurança

Tipos de Dados
    Existem diferentes tipos de dados no JavaScript. E primeiramente iremos ver apenas alguns para que durante o curso sejam acrescentados mais tipo ao conhecimento, acredito que assim é a melhor maneira para construir um aprendizado:

*    Strings
      É um tipo de dado usado para representar texto. Pode conter letras, números, símbolos e espaços, tudo dentro de aspas simples, duplas ou crase. Para usar uma aspas dentro de uma string a de fora deve ser diferente.

      let nome = "Igor"
      const frase = 'Olá, mundo!'
      let template = `Texto com "template" literals`

*   Number
      Number representa qualquer número, seja inteiro ou decimal.
!     Diferentemente de Python, JavaScript não separa int e float, ambos são “number”.

      let idade = 25
      let temperatura = 22.5
      const negativo = -10

*   Boolean
      Boolean representa apenas dois valores 
!     Observe que diferentemente de Python os valores boolean são em letra minúscula 

      true (verdadeiro)
      false (falso)

*    Undefined / Null
      Significa que uma variável foi declarada mas não recebeu valor. A diferença entre as duas é que o valor #Undefined é atribuido automaticamente e Null é atribuido pelo programador. A sua prática será vista mais adiante no próximo capítulo.

*      Ex: 
*      let x; Temos aqui um valor do tipo Undefined
*      let y = null; Temos aqui um valor do tipo null


*/    
