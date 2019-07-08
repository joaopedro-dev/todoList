var listElement = document.getElementById('out');
var inputElement = document.getElementById('inp');
var btnElement = document.getElementById('btn');
var btnDelete = document.getElementById('btndel');

var todos = JSON.parse(localStorage.getItem('listagem_todo')) || [];

function renderTodo(){
    listElement.innerHTML = "";
    for (todo of todos){
        var todoElement = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var textLink = document.createTextNode('feito');
        linkElement.appendChild(textLink);
        linkElement.setAttribute('id','lip');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo('+ pos +')');

        todoElement.appendChild(textElement);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderTodo();

function addTodo(){
    var add = inputElement.value;
    todos.push(add);
    renderTodo();
    saveTodo();
}
btnElement.onclick = addTodo;

function deleteAll(){
    var all = todos; 
    todos.splice(all); 
    renderTodo();
    saveTodo();  
}
btnDelete.onclick = deleteAll;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodo();
    saveTodo();
}

function saveTodo(){
    localStorage.setItem('listagem_todo', JSON.stringify(todos));
}