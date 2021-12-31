<template>
  <div class="todo-footer" v-if="total > 0">
    <label>
<!--      <input type="checkbox" @change="handleAllDone" :checked="isAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{doneLength}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="handleDeleteDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ['todoList', 'deleteDoneCheck', 'changeAllDone'],
  computed: {
    // 代办的总个数
    total() {
      return this.todoList.length
    },
    // 已完成的代办个数
    doneLength() {
      // reduce这个函数主要的作用就是将你定义的函数的结果汇总成单个返回值
      // 其主要有两个参数，一个是reducer函数，一个是初始值
      // 详细可以看 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
      // 下面的reducer函数两个参数，pre是上一次调用函数时的返回值，第一次的pre就是初始值，current就是当前的元素
      // const x= this.todoList.reduce((pre, current) => {
      //   return pre + (current.done ? 1 : 0)
      // }, 0)

      return this.todoList.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    // 是否应该勾选全选框
    isAll: {
      get() {
        return this.total === this.doneLength && this.total > 0
      },
      // 被修改时，通知App组件将所有代办改变状态
      set(value) {
        this.changeAllDone(value)
      }
    }
  },
  methods: {
    // 通知App组件删除已选代办
    handleDeleteDone() {
      this.deleteDoneCheck()
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