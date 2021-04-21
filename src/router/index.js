import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import Others from '../views/Others.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/others',
    name: 'Others',
    component: Others
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/cart',
    name: 'MyCart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('access_token')
  // if (!user) {
  //   next('/home')
  // } else
  if (!user && (to.name === 'MyCart')) {
    next('/login')
  } else if (user && (to.name === 'Login' || to.name === 'Register')) {
    next('/')
  } else {
    next()
  }
})

export default router
