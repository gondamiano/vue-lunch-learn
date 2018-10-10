import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Resource from 'vue-resource'
import Vuex from 'vuex'
window.Vue = Vue


Vue.config.productionTip = false
Vue.use(Resource)
Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  
  render: h => h(App)
}).$mount('#app')
