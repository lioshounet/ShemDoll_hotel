import Vue from 'vue'
import VueRouter from 'vue-router'
import the_app from '../views/theapp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/views/theapp',
    name: "the_app",
    component: the_app
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
