<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :addTodo="addTodo"/>
        <List
            :todoList="todoList"
            :changeCheck="changeCheck"
            :checkDelete="checkDelete"
        />
        <bottom :todoList="todoList" :deleteDoneCheck="deleteDoneCheck" :changeAllDone="changeAllDone"/>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/todolist/components/Top";
import Bottom from "@/todolist/components/Bottom";
import List from "@/todolist/components/List";

export default {
  name: "App",
  components: {
    Top, Bottom, List
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem('todoList')) || [], // 本地取不到值时是为null，就直接给个空数组
    }
  },
  methods: {
    // 添加一个代办事项
    addTodo(todo) {
      this.todoList.unshift(todo)
    },
    // 改变复选框的 勾选状态
    changeCheck(id) {
      this.todoList.forEach(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    // 删除一个组件
    checkDelete(id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id)
    },
    // 删除已选代办
    deleteDoneCheck() {
      this.todoList = this.todoList.filter(todo => !todo.done)
    },
    // 将所有代办变成已选
    changeAllDone(done) {
      this.todoList.forEach(todo => {
          todo.done = done
      })
    }
  },
  watch: {
    todoList: {
      deep: true, // 开启深度监视
      handler(value) {
        localStorage.setItem('todoList', JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>