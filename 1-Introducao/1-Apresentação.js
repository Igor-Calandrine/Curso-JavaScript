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

*       Ex: a = 3; b = 4;

      Em geral, se uma instrução começa com (, [, /, + ou -, há a possibilidade de que possa ser interpretada como uma continuação da instrução anterior. 
      Alguns programadores gostam de colocar um ponto e vírgula protetor no início de uma instrução  assim, para que continue a funcionar corretamente mesmo que a instrução anterior seja modificada:

*      Ex: 
*      var y = x + f
*      (a+b).toString()

      Será lido como:
!     var y = x + f(a+b).toString()

*      Escreva então:
*      var y = x + f
*      ;(a+b).toString()
?      Observe (;) antes da instrução por segurança

Tipos de Dados
    Existem diferentes tipos de dados no JavaScript. E primeiramente iremos ver apenas alguns para que durante o curso sejam acrescentados mais tipoS ao conhecimento, acredito que assim é a melhor maneira para construir um aprendizado:

*   Strings
      É um tipo de dado IMUTÁVEL usado para representar texto. Pode conter letras, números, símbolos e espaços, tudo dentro de aspas simples, duplas ou crase. Para usar uma aspas dentro de uma string a de fora deve ser diferente.

      let nome = "Igor"
      const frase = 'Olá, mundo!'
      let template = `Texto com "template" literals`

      O caractere de barra invertida (\) tem um propósito especial nas strings em JavaScript. Combinado
      com o caractere que vem a seguir, ele representa um caractere que não pode ser representado de outra forma dentro da string. Vamos ver alguns exemplos que podem ser muito úteis e serão utilizados durante esse resumo.

      \n  - nova linha
      \t  - tabulação horizontal
      \'  - aspas simples
      \"  - aspas duplas
      \\  - barra invertida

      Para escrever os apóstofro será necessário utilizar uma sequência de escape para que o interpretador não entenda como uma string que não foi fechada, observe o exemplo abaixo:

*     Ex: "caixa d\' água"

      Se o caractere (\) precede qualquer outro caractere que não seja um sequêncial escape,
      a barra invertida é simplesmente ignorada.

      Um dos recursos incorporados a JavaScript é a capacidade de concatenar strings. Se o operador + é
      utilizado com números, ele os soma. Mas se esse operador é usado em strings, ele as une, anexando
      a segunda na primeira. 

*     Ex:  "Hello, " + "world" produz "Hello, world"

      Para determinar o comprimento de uma string use sua propriedade length.

*     Ex: "Hello, world".length produz 12 pois espaço em branco também será contável.

*   Number
      Number representa qualquer número, seja inteiro ou decimal.
      !Diferentemente de Python, JavaScript não separa int e float, ambos são “number” e todos os      números são representados como valores flutuantes.
      
      Temos aqui o mesmo problema que em todas as linguagens que utilizam números binários para representar números flutuantes, sempre iremos ter erros quando for feita comparações deivido a arredondamentos.

      Para realizar cálculos financeiros, principalmente quando precisam ser bem precisos como é feito com bitcoins em que se consideram várias casa, talvez você queira efetuar cálculos financeiros importantes usando inteiros adaptados. Você poderia manipular valores monetários como centavos
      inteiros, em vez de frações de moeda.


      let idade = 25
      let temperatura = 22.5
      const negativo = -10

*   Boolean
      Um valor booleano representa verdadeiro ou falso, sim ou não. Só existem dois valores possíveis desse tipo. 
!     Observe que diferentemente de Python os valores boolean são em letra minúscula



      Os valores booleanos têm um método toString() que pode ser usado para convertê-los nas strings
      “true” ou “false”, mas não possuem qualquer outro método útil. 

      true (verdadeiro)
      false (falso)

*   Undefined / Null
      Significa que uma variável foi declarada mas não recebeu valor. A diferença entre as duas é que o valor #Undefined é atribuido automaticamente e Null é atribuido pelo programador. A sua prática será vista mais adiante no próximo capítulo.

*     Ex: 
*     let x; Temos aqui um valor do tipo Undefined
*     let y = null; Temos aqui um valor do tipo null

Valores primitivos imutáveis
      Em JavaScript existe uma diferença fundamental entre valores primitivos (undefined, null     booleanos, números e strings) e objetos. Os valores primitivos são imutáveis: não hácomoalterar  um valor primitivo. Isso é óbvio para números e booleanos e nem mesmo fazsentido mudaro valor  de um número, no entanto, não é tão óbvio para strings.

      É importante saber que string, número e valores booleanos diferem de objetos pois    suaspropriedades são somente para leitura e que não é possível definir novas propriedadesneles.


*/    
