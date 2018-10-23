import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Resource from 'vue-resource'
import store from './stores/store'
import axios from 'axios'
window.Vue = Vue
window.axios = axios

Vue.config.productionTip = false
Vue.use(Resource)

new Vue({
  el: '#app',
  store: store,
  router,

  render: h => h(App)
}).$mount('#app')
