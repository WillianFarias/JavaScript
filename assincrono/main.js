//Utilizando AJAX, para que nao seja necessario recarregar a pag. toda vez que
//buscar-se uma nova informacao no servidor

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

//é necessario pois esta é uma requisicao assincrona
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { 
    console.log(JSON.parse(xhr.responseText));
  }
}