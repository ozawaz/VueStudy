export default {
    install(Vue) {
        // 全局过滤器
        Vue.filter('mySlice', function (value){
            return value.split(0, 4)
        })

        // 定义全局指令
        Vue.directive('fbind',{
            // 指令与元素成功绑定时（一上来）
            bind(element, binding){
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element){
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element, binding){
                element.value = binding.value
            }
        })

        //给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}