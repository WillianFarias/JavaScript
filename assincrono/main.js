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
/*axios.get('https://api.github.com/users/diego3g')
  //resolve invoca um .then
  .then(function(response){
    console.log(response);
  })
  //reject invoca um .catch
  .catch(function(error){
    console.warn(error);
  })*/

function checkAge(age) {
  return new Promise(function(resolve, reject) {

  if(age > 17 ){
    resolve('Older');
  } else {
    reject('Minor');
  }
  });
}

checkAge(17)
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error)
  })


//Requisicao a api do github utilizando o axios e preenchendo lista com resposi
//torios de user informado
var inputElement = document.querySelector('input[name=user]');
var buttonElement = document.querySelector('div#app button');
var divElement = document.querySelector('div#app');
var list = document.createElement('ul');

buttonElement.onclick = function searchGit() {
  var userGit = inputElement.value;
  axios.get('https://api.github.com/users/' + userGit + '/repos')
    .then(function (response) {
      listRepositories(response);
      inputElement.value = '';
    })
    .catch(function(error){
      console.log(error)
    })
}

function listRepositories(object) {

  list.innerHTML = '';

  for (const repository of object.data) {
    var item = document.createElement('li');
    var text = document.createTextNode(repository.name);

    item.appendChild(text);
    list.appendChild(item);
  }

  divElement.appendChild(list);
}