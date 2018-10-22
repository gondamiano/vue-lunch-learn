import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Resource from 'vue-resource'
import store from './stores/store.vue'
window.Vue = Vue


Vue.config.productionTip = false
Vue.use(Resource)


new Vue({
  el: '#app',
  store : store,
  router,
  
  render: h => h(App)
}).$mount('#app')
