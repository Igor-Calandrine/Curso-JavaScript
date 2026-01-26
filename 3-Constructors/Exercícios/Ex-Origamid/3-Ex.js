// Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let totalTaxas = 0
let totalRecebimento = 0
let total = 0
transacoes1.forEach((item) => {
   let descricaoItem = item.descricao.toLowerCase().trim()
   
   if (descricaoItem.startsWith("taxa")) {
      totalTaxas += 1
   } else if (descricaoItem.startsWith("recebimento")) {
      totalRecebimento += 1
   }


   let valorItem = Number(item.valor.replace("R$ ", ""))
   total += valorItem
})
console.log(`Total Taxas: ${totalTaxas}`)
console.log(`Total Recebimentos: ${totalRecebimento}`)
console.log(`Total R$ ${total}`)


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(";")
console.log(arrayTransportes)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.replaceAll("span>", "a>")
console.log(html)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let contadorTaxa = 0
transacoes2.forEach((item) => {
   const itemEdit = item.toLowerCase().trim()
   
   if (itemEdit.startsWith("taxa")) {
      contadorTaxa += 1
   }

})

console.log(contadorTaxa)

