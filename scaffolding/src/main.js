import Vue from 'vue'
// 引入App
import App from './plugin/App.vue'
// 引入混合
import mixin from "@/props/mixin";
// 引入插件
import plugins from "@/plugin/plugins";

/* 关闭生产提示 */
Vue.config.productionTip = false
/* 全局注册混合 */
Vue.mixin(mixin)
/* 使用插件 */
Vue.use(plugins)

function Extend() {

}

new Vue({
  render: h => h(App),
}).$mount('#app')
