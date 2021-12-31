<template>
  <div>
    <h2>{{msg}}</h2>
    <Student/>
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
      msg: '开始学习plugin'
    }
  }
}
</script>

<style scoped>

</style>