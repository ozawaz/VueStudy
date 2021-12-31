import Vue from 'vue'
import App from './props/App.vue'

Vue.config.productionTip = false

function Extend() {

}

new Vue({
  render: h => h(App),
}).$mount('#app')
