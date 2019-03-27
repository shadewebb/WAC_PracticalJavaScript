~"use strict";

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function () {
        console.log('My Todos: ', this.todos);
    },
    addTodo: function (todo) {
        todoList.todos.push(todo);
        todoList.displayTodos();
    },
    changeTodo: function (position, newValue) {
        todoList.todos[position] = newValue;
        todoList.displayTodos();
    },
    deleteTodo: function (position) {
        todoList.todos.splice(position, 1);
        todoList.displayTodos();
    }
};

todoList.displayTodos();

todoList.addTodo('New todo test!');

todoList.changeTodo(0, 'Edit Item 1');

todoList.deleteTodo(1);