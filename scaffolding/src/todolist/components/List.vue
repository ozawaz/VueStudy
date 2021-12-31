<template>
  <ul class="todo-main">
    <Item v-for="todo in todoList" :key="todo.id" :todo="todo"/>
  </ul>
</template>

<script>
import Item from "@/todolist/components/Item";

export default {
  name: "List",
  components: {
    Item
  },
  data() {
    return {
      todoList: [
        {id: '001', title: '开源', done: true},
        {id: '002', title: '敲代码', done: false},
        {id: '003', title: '共享', done: true},
      ]
    }
  }
}
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>