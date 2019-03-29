"use strict";

var todoList = {
    todos: [],
    displayTodos: function () {
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

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
       var addTodoTextInput = document.getElementById('addTodoTextInput');
       todoList.addTodo(addTodoTextInput.value);
       addTodoTextInput.value = '';
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo((changeTodoPositionInput.valueAsNumber - 1), changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.value - 1);
        deleteTodoPositionInput.value = '';
    }
}