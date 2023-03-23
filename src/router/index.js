import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/about',
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume/index.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio/index.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
