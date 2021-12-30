<template>
  <div>
    <!-- 对于标签来说，ref和id其实没啥太大区别 -->
    <h2 ref="msg">{{msg}}</h2>
    <!-- 但是对于组件来说就很有用了，可以直接获取组件vc -->
    <Student ref="student"></Student>
    <button @click="printRef">点击输出真实DOM</button>
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: "App",
  components: {
    Student
  },
  data() {
    return {
      msg: '开始学习ref'
    }
  },
  methods: {
    // 打印真实DOM
    printRef() {
      // 这里打印的是标签的真实dom
      console.log('h2的真实DOM', this.$refs.msg)
      // 这里其实是打印的是Student的vc
      console.log('Student组件', this.$refs.student)
    }
  }
}
</script>

<style scoped>

</style>