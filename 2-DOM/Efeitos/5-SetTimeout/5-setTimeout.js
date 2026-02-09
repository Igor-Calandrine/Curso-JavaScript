estado = {}
/*
-setTimeout
   É uma função de Web API que agenda a execução de um callback após um determinado intervalo de tempo. É importante entender que ele não pausa o código e não garante execução exata no tempo informado. O que ele faz é colocar a função em uma fila de tarefas, agardando o momento em que a Call Stack esteja vazia para então ser executada.

   *Em outras palavras, o tempo passado ao setTimout define o menor tempo possível abtes da execução, nunca o tempo exato.

   Quando não informamos o tempo (ou passamos 0), o callback não executa instantaneamente. Ele entra na fila de tarefas e só roda depois que todo o código síncrono terminar. Um exemplo 

   No exemplo abaixo vemos a forma mais báisica de utilizar.
*/ 

estado.Ex1 = false; if (estado.Ex1) {

   function espera(texto) {
      console.log(texto)
   }

   setTimeout(espera, 2000, "Depois de 1s")

}

/* 
   É comum vermos Arrow Function, o que deixa o código mais direto e limpo
   !Não existe this em Arrow Function, ele subirá a cadeia para procurar até chegar no window, set que o setTimeout é um método de Window. Então para que o ele faça referência a um elemento de eventListener, facilitará usar a Arrow Function no SetTimeout 

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event) {
  setTimeout(function() {             //!Aqui teremos um erro, pois o this aponta para window  setTimeout(function()
    this.classList.add('active');     //!É importante substituir por Arrow Function
  }, 1000)                            //!setTimeout(() => 
}

estado.Ex2 = false; if (estado.Ex2) {

   setTimeout(() => {
      console.log("Executando após 3000ms")
   }, 3000)
}

   Quando não informamos o tempo (ou passamos 0), o callback não executa instantaneamente. Ele entra na fila de tarefas e só roda depois que todo o código síncrono terminar. Um exemplo prático disso é que um loop é executado rapidamente, em milissegundos, se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo tempo, um evento de setTimeout não espera o tempo do anterior acabar para iniciar.

   Para corrigir o Loop na lógica acrescentamos o contador para termos um intervalo entre os elementos
*/ 

estado.Ex3 = true; if (estado.Ex3) {

for (let i = 0; i < 5; i++) {
   setTimeout(() => {
      console.log(i)
   }, 500 * i)
}
}

/*
*setInterval()
   Irá ativar o callback toda vez que a quantidade de tempo passar.
*/ 

estado.Ex4 = false; if (estado.Ex4) {

let i = 0
setInterval(() => {
   i++
   console.log(`Passou-se ${i}s`)
}, 1000)

}


/*
*clearInterval()
   Podemos parar um intervalo com o clearInterval, para isso precisamos atribuir o setInterval a uma variável.
*/ 

estado.Ex5 = false; if (estado.Ex5) {

const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}

}




