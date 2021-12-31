<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"/>
    </label>
    <span>
      <span>已完成{{doneLength}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ['todoList'],
  computed: {
    total() {
      return this.todoList.length
    },
    doneLength() {
      // reduce这个函数主要的作用就是将你定义的函数的结果汇总成单个返回值
      // 其主要有两个参数，一个是reducer函数，一个是初始值
      // 详细可以看 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
      // 下面的reducer函数两个参数，pre是上一次调用函数时的返回值，第一次的pre就是初始值，todo就是当前的元素
      // const x= this.todoList.reduce((pre, todo) => {
      //   return pre + (todo.done ? 1 : 0)
      // }, 0)

      return this.todoList.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    }
  }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>