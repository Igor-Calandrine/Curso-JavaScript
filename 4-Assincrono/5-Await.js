/*
-async
   A palavra #async é utilizada para declarar que um função á assíncrona, ou seja, que dentro dela poderão existir operações que não são executadas imediatamente.
   
   Quando declaramos uma função como #async, automaticamente ela passa a retornar uma Promisse, mesmo que o retorno explícito não seja uma Promisse.

   Ela foi introduzida no ES8 e surgiu como uma forma mais legível de trabalhar com Promises, substituindo cadeias longas de .then().

-await
   A palavra-chave #await só pode ser usada dentro de funções #async, ela indica que o JS deve:

      *Esperar a Promise ser resolvida
      *Pausar apenas aquela função.
      *Retomar a execução quando a Promise for resolvida
      *Retornar o valor resolvido da Promise

   !O await não bloqueia o programa inteiro, apenas a execução da função assíncrona onde ele está
*/ 

async function puxarDados () {
   const dadosResposta = await fetch("./Exemplo.txt")
   const dadosJSON = await dadosResposta.json()
   const listaJSON = Object.entries(dadosJSON)

   console.log(dadosJSON)
   console.log(listaJSON)

   document.body.textContent = listaJSON[2][1]
   
}
puxarDados()

/*
-Tratamento de erros e finally
   Uma grande vantagem do async/await é que podemos usar try/catch como código síncrono e manter o finally da mesma forma
   ?Isso fica muuuito parecido com Python, vou usar só isso agora :)
*/ 

async function puxarDados2() {
   try {
      const dadosResposta = await fetch("./sExemplo.txt")
      const dadosJSON = await dadosResposta.json()
      const listaJSON = Object.entries(dadosJSON)
      console.log(listaJSON)
   }
   catch (erro) {
      console.log(erro)
      const paragrafo = document.createElement("p")
      paragrafo.textContent = "Ocorreu um erro!\n" + erro
      document.body.append(paragrafo)
   }
   finally {
      const paragrafo = document.createElement("p")
      paragrafo.textContent = "Operação realizada com sucesso!"
      document.body.append(paragrafo)
   }
}

puxarDados2()
