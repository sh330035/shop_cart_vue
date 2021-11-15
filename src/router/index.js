import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingPage from '../views/ShoppingPage.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shopping-page',
    component: ShoppingPage
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
