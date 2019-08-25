var entrar = document.querySelector('#entrar') //variável para armazenar o estado do botão entrar
var cancela = document.querySelector('#cancelar') //variável para armazenar o estado do botão Cancelar
var senha = document.querySelector('#pass') //salva a senha digitada
var user = document.querySelector('#user') //salva o nome de usuário
var erro = document.querySelector('#erro') //parágrafo usado para mostrar um erro

entrar.addEventListener('click', function(){ //verifica se o botão Entrar foi clicado, se sim entra na função
  if(user.value == "" || senha.value == "") //verifica se o nome utilizado e senha são vazios
  {
    aviso = "Preencha todos campos"; //variável para salvar o texto a ser exibido
    erro.innerHTML = aviso //muda o texto do parágrafo, alertando para preencher todos os campos
  }
  else if(user.value == senha.value) //verifica se o usuário e senha são iguais
  {
    aviso = "Usuário inválido"; //variável para salvar o texto a ser exibido
    erro.innerHTML = aviso //muda o texto do parágrafo, alertando que o usuário não exite
  }
  else //caso o nome de usuário e senha sejam diferentes...
    {
      location.href="logado.html" //redireciona para a página de usuário logado
    }
})
cancela.addEventListener('click', function(){ //verifica se o botão Cancelar foi clicado, se sim entra na função
    location.href="index.html" //redireciona o usuário para a página principal
})
