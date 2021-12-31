import Vue from 'vue'
import App from './mixin/App.vue'
import mixin from "@/props/mixin";

/* 删除生产提示 */
Vue.config.productionTip = false
/* 全局注册 */
Vue.mixin(mixin)

function Extend() {

}

new Vue({
  render: h => h(App),
}).$mount('#app')
