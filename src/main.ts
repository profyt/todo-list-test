import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
