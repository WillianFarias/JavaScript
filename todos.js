var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
  'Fazer café'
];

function renderTodos() {
  //tudo que estiver dentro da html vai ficar como vazio
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var posicao = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')');

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';

  renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(posicao) {
  todos.splice(posicao, 1);
  renderTodos();
}
