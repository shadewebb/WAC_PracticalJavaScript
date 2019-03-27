~"use strict";

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function () {
        console.log('My Todos: ', this.todos);
    },
    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function (position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

todoList.displayTodos();

todoList.addTodo('New todo test!');

todoList.changeTodo(0, 'Edit Item 1');

todoList.deleteTodo(1);