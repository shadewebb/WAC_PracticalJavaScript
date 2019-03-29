"use strict";

var todoList = {
    todos: [],
    displayTodos: function () {
        console.log('My Todos:');
        if (this.todos.length > 0) {
            for (var i = 0; i < this.todos.length; i++) {
                var todo = this.todos[i];
                if (todo.completed === true) {
                    console.log('(x)', todo.todoText);
                } else {
                    console.log('( )', todo.todoText);
                }    
            }
            console.log('');
        } else {
            console.log('Empty List!');
            console.log('');
        }

    },
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function () {
        var todos = this.todos;
        var totalTodos = todos.length;
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
            if (todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === todos.length) {
            for (var i = 0; i < totalTodos; i++) {
                todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

todoList.displayTodos();

todoList.addTodo('New todo test!');
todoList.addTodo('Second test!');

todoList.changeTodo(0, 'Edited first todo test...');

todoList.toggleCompleted(0);

todoList.toggleAll();
todoList.toggleAll();

todoList.deleteTodo(0);