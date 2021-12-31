<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="modifyAge">点击修改年龄</button>
  </div>
</template>

<script>
// import mixin from "@/props/mixin";

export default {
  name:'Student',
  // // 局部定义
  // mixins: [mixin],
  data(){
    return {
      name:'张三',
      age:18
    }
  }
}
</script>
