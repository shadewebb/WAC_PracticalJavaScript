~"use strict";

var todoList = {
    todos: ['item 1', 'item 2', 'item 3']
};

function displayTodos() {
    console.log('My Todos: ', todos);
}

displayTodos();

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo('New todo test!');

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

changeTodo(0, 'Edit Item 1');

function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(1);