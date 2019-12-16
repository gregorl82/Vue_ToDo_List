import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {task: "Buy shopping", priority: true},
        {task: "Clean bathroom", priority: false},
        {task: "Car's MOT", priority: true},
      ],
      newTodo: {
        task: "", priority: false
      }
    },
    methods: {
      saveNewTodo: function(){
        let todoObject = {
          task: this.newTodo.task,
          priority: this.newTodo.priority == "true"
        }
        this.todos.push(todoObject)
        this.newTodo = {
          task: "",
          priority: false
        }
      }
    }
  })
})
