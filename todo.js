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

todos[0] = 'new item 1';

console.log('My Todos: ', todos);

todos.splice(2, 1);

console.log('My Todos: ', todos);