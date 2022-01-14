import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user/:id',
    name: 'Account',
    component: () => import('../views/Account.vue')

  },
  {
    path: '/allAccounts',
    name: 'AllAccounts',
    component: () => import('../views/AllAccounts.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/allPosts',
    name: 'AllPosts',
    component: () => import('../views/AllPosts.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
