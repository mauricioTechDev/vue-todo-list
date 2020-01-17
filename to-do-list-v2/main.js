<<<<<<< HEAD
Vue.component('todoList', {
  template: `
  <div class="todoList">
  <h1>{{ title }}</h1>

      <form @submit.prevent="addTodo">
        <label for="newTodo">New Todo</label>
        <input v-model="newTodo" type="text" name="newTodo" id="newTodo" value="">
        <button type="submit" name="button">Add</button>
      </form>

      <!-- <h2>{{ newTodo }}</h2> -->

      <ul>
        <li v-for="item in itemsTodo">
          <input type="checkbox" v-model="item.done">
          <span :class="{ completedItem: item.done }">{{ item.title }}</span>
          <span type="button" name="button" @click="removeTodo(item)">🗑️</span>
        </li>
      </ul>
  </div>

  `,
  data() {
    return{
      title: "The Great Todo List",
      newTodo: "",
    }
  },
  methods: {
    addTodo: function() {
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



var app = new Vue({
  el: '#app',
  data:{
    itemsTodo: []
  }

})
=======
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
>>>>>>> d52906ab38e62d3f8e6150359a49fdfb69559e48
