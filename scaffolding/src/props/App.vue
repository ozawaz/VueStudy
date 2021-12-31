<template>
  <div>
    <h2>{{msg}}</h2>
    <!-- 一般来说，传入的都是一个字符串，但是加上v-bind:(简写:)之后，就会变成一个表达式了-->
    <Student name="张三" :age="18" sex="男"/>
    <Student name="李四" sex="人妖"/>
    <Student name="王老五" :age="21" sex="男"/>
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
      msg: '开始学习props'
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>