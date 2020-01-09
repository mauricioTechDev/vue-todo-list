var app = new Vue({
  el: '#app',
  data: {
    title: "Vue to do list",
    todoItem: "",
    listOfTodos: []
  },
  methods: {
    addToList() {
      this.listOfTodos.push(this.todoItem)
      this.todoItem = null
    }
  }
})
