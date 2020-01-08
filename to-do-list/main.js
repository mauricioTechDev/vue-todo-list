var app = new Vue({
  el: '#app',
  data: {
    title: "This is dope",
    newTodo: "",
    itemsTodo: []
  },
  methods: {
    addTodo() {
      this.itemsTodo.push({
        title: this.newTodo,
        done: false
      })
      this.newTodo = null
    },
    removeTodo(item){
      const todoIndex = this.itemsTodo.indexOf(item);
      this.itemsTodo.splice(todoIndex, 1);
    }
  }

})
