"use strict";

var todos = ['item 1', 'item 2', 'item 3'];

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

todos.splice(2, 1);

console.log('My Todos: ', todos);