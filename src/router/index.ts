import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoPage from '@/views/ToDoPage.vue'
import AddItemPage from '@/views/AddItemPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'main', component: ToDoPage },
  { path: '/edit/', name: 'edit', component: AddItemPage, props: true }
]
export default new VueRouter({
  mode: 'history',
  routes
})