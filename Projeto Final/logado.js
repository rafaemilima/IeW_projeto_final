var like1 = document.querySelector('#like1') //variável para armazenar o estado do ícone like da lanchonete 1
var dlike1 = document.querySelector('#dlike1') //variável para armazenar o estado do ícone dislike da lanchonete 1
var contadorlike1 = document.querySelector('#mais1'); //variável para contabilizar os likes da lanchonete 1
var contadordlike1 = document.querySelector('#menos1'); //variável para contabilizar os dislikes da lanchonete 1
var like2 = document.querySelector('#like2') //variável para armazenar o estado do ícone like da lanchonete 2
var dlike2 = document.querySelector('#dlike2') //variável para armazenar o estado do ícone dislikelike da lanchonete 2
var contadorlike2 = document.querySelector('#mais2'); //variável para contabilizar os likes da lanchonete 2
var contadordlike2 = document.querySelector('#menos2'); //variável para contabilizar os dislikes da lanchonete 2

like1.addEventListener('click', function(){ //verifica se o ícone de like da lanchonete 1 foi clicado, se sim entra na função
  var numero = parseInt(contadorlike1.textContent) + 1; //a cada clique no ícone, soma 1 a quantidade atual da variável contadorlike1 e salva na variável numero
  contadorlike1.textContent = numero; //"escreve" do lado do ícone o número de cliques
});

dlike1.addEventListener('click', function(){ //verifica se o ícone de dislike da lanchonete 1 foi clicado, se sim entra na função
  var numero = parseInt(contadordlike1.textContent) + 1; //a cada clique no ícone, soma 1 a quantidade atual da variável contadordlike1 e salva na variável numero
  contadordlike1.textContent = numero; //"escreve" do lado do ícone o número de cliques
});

like2.addEventListener('click', function(){ //verifica se o ícone de like da lanchonete 2 foi clicado, se sim entra na função
  var numero2 = parseInt(contadorlike2.textContent) + 1; //a cada clique no ícone, soma 1 a quantidade atual da variável contadorlike2 e salva na variável numero2
  contadorlike2.textContent = numero2; //"escreve" do lado do ícone o número de cliques
});

dlike2.addEventListener('click', function(){ //verifica se o ícone de dislike da lanchonete 2 foi clicado, se sim entra na função
  var numero2 = parseInt(contadordlike2.textContent) + 1;  //a cada clique no ícone, soma 1 a quantidade atual da variável contadordlike2 e salva na variável numero2
  contadordlike2.textContent = numero2; //"escreve" do lado do ícone o número de cliques
});
