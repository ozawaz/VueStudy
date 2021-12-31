<template>
  <ul class="todo-main">
    <Item/>
    <Item/>
    <Item/>
    <Item/>
  </ul>
</template>

<script>
import Item from "@/todolist/components/Item";

export default {
  name: "List",
  components: {
    Item
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