import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import DormitoryAdminAdd from '../views/DormitoryAdminAdd.vue'
import Dor

Vue.use(VueRouter)

const routes = [
  {
    path: '/systemAdmin',
    name: 'admin',
    component: Admin
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
