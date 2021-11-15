import Vue from 'vue'
import VueRouter from 'vue-router'
import shoppingPage from '../views/shoppingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shopping-page',
    component: shoppingPage
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
