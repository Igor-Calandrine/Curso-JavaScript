/*
-Get e Set
   Os métodos #get e #set permitem que você trate métodos como se fossem propriedades, elas fazem parte do sistema de acessores de propriedades do JS e funcionam tanto em objetos literais quanto em #class

   *get
      É responsável por controlar a leitura de uma propriedade. ELe é executado automaticamente quando alguém tenta acessar o valor, como em #obj.propriedade. Sua função é retornar u valor, esse valor pode ser simplesmente um dado armazenado internamente ou até mesmo algo calculado dinamcamente. O #get não recebe parâmetros, pois sua finalidade é apenas fornecer o valor atual.

   *set
      É responsável por controlar a escrita ou modificação de uma propriedade. Ele é executado automaticamente quando alguém atribui um novo valor, como #obje.propriedade = novoValor. Diferente do #get, recebe obrigatoriamente um parâmetro, que representa o valor que está sendo atribuído. Normalmente ele não retorna nada, pois sua função é processar, validar ou transformar o valor antes de arma\ená-lo internamente.

      Em termos práticos:

      *get -> quando você lê
      *set -> quando você altera

   O #get é ideal quando você precisa expor um valor calculado ou proter o acesso direto a um estado interno. Já o set é muito usado para validações, nomralizações de dados ou qualquer lógica que precise acontecer antes que um valor seja salvo.
*/ 

class ContaBancaria {
   constructor(titular, saldo) {
      this.titular = titular
      this._saldo = saldo
   }

   set sacar (valor) {
      const saldoFinal = this._saldo - valor
      if (saldoFinal < 0) {
         console.log("O valor não pode ser sacado pois é maior que o saldo")
      }
      else {
         this._saldo = saldoFinal
      }
   }

   get saldo() {
      return `R$${this._saldo.toFixed(2)}`
   }
}

const contaIgor = new ContaBancaria("Igor", 1000)
console.log(contaIgor.saldo)
contaIgor.sacar = 2000
contaIgor.sacar = 500
console.log(contaIgor.saldo)