<template>
  <div>
    <h2>{{msg}}</h2>
    <!-- 一般来说，不要对传入的数据进行修改，虽然修改也能成功，但是vue在控制台会报错
         它会提示你不要修改，假如真的需要修改，则可以将传入的数据接收到data中，再对data修改
     -->
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
    <button @click="modifyAge">点击修改年龄</button>
    <hr>
  </div>
</template>

<script>
export default {
  name:'Student',
  data(){
    return {
      msg: '你好下面是props属性导入的',
      // 传入的age是先挂载在vc上的，所以才可以
      myAge: this.age
    }
  },
  methods: {
    modifyAge() {
      this.myAge++
    }
  },
  // // 简写形式，没有对传入的数据进行限制，一般来说常用
  // props: ['name', 'age', 'sex'],

  // // 对传入的数据进行参数类型限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // }

  // 最完整的形式，每个属性都是一个对象写法
  props: {
    name: {
      type: String, // 类型
      required: true // 是否必须传入，一般不建议和default一起使用(脱裤子放屁)
    },
    age: {
      type: Number,
      default: 99 // 假如不传值，则使用这个默认值
    },
    sex: {
      type: String,
      // 必须匹配条件
      validator(value) {
        return ['男', '女'].indexOf(value) !== -1
      }
    }
  }
}
</script>
