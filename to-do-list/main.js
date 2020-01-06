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
    }
  }

})
