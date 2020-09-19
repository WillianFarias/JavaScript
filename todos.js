var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
  {text: 'Fazer café', amount: 1}
];

function renderTodos() {
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo.text);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoText);
  }
}

renderTodos();