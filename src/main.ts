import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import ToDoPage from '@/views/ToDoPage.vue'
import AddItemPage from '@/views/AddItemPage.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'main', component: ToDoPage },
  { path: '/edit/:TaskId', name: 'edit', component: AddItemPage, props: (route) => ({TaskId: +route.params.TaskId, newTask: route.params.newTask}) }
]
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
