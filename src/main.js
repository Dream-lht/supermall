import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 接口地址baseURL：http://152.136.185.210:8000/api/w6
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
