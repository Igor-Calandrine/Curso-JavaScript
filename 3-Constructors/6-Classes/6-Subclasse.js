/*
-Subclasses
   Em JS ES6, podemos criar subclasses utilizando a palavra-chave #extends, isso permite que uma classe herde propriedades e métodos de outra, reaproveitando código e organizando melhor a lógica do sistema.

   Quando dizemos que uma classe "estende" outra, estamos falando de herança prototipal, ou seja, a subclasse passa a ter acesso aos métodos definidos no protótipo da classe pai.
*/ 

class Veiculo {
   constructor(marca, rodas, combustivel) {
      this.marca = marca
      this.rodas = rodas
      this.combustivel = combustivel
   }

   informaçoes () {
      const info = `Marca: ${this.marca}\nRodas: ${this.rodas}\nCombustível: ${this.combustivel}`
      console.log(info)
   }
}

class Moto extends Veiculo {
   //É possível herdar as informações da classe pai com super
   // constructor(marca, rodas, combustivel, capacete) {
   //    super(marca, rodas, combustivel) 
   //    this.capacete = capacete
   // }

   //É possível reescrever um método anterior, basta ter o mesmo nome
   informaçoes () {
      //Abaixo temos um super no método, ela irá pegar o método da classe pai
      super.informaçoes()
      const info = `Marca: ${this.marca}\nRodas: ${this.rodas}\nCombustível: ${this.combustivel}\nCapacete: ${this.capacete}`
      console.log(info)
   }

   empinar () {
      const frase = "A moto empinou"
      console.log(frase)
   }
}

const carroIgor = new Veiculo("Citroen", 4, "Gasolina")
carroIgor.informaçoes()

const motoIgor = new Moto ("Kawsaki", 2, "Álcool", true)
motoIgor.informaçoes()
motoIgor.empinar()