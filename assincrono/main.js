//Utilizando AJAX, para que nao seja necessario recarregar a pag. toda vez que
//buscar-se uma nova informacao no servidor

/*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

//é necessario pois esta é uma requisicao assincrona
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { 
    console.log(JSON.parse(xhr.responseText));
  }
}*/

/*
var minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/diego3g');
    xhr.send(null);

    //é necessario pois esta é uma requisicao assincrona
    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    }
  });
}

//Trabalhando com requisicoes assincronas com promises
minhaPromise()
  //resolve invoca um .then
  .then(function(response){
    console.log(response);
  })
  //reject invoca um .catch
  .catch(function(error){
    console.warn(error);
  })
*/

//Trabalhando com requisicoes assincronas com axios
axios.get('https://api.github.com/users/diego3g')
  //resolve invoca um .then
  .then(function(response){
    console.log(response);
  })
  //reject invoca um .catch
  .catch(function(error){
    console.warn(error);
  })