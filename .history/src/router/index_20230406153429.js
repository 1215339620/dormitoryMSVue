import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import DormitoryAdminAdd from '../views/DormitoryAdminAdd.vue'
import DormitoryAdminManager from '../views/DormitoryAdminManager.vue'
import BuildingAdd from 

Vue.use(VueRouter)

const routes = [
  {
    path: '/systemAdmin',
    name: 'admin',
    component: Admin,
    children:[
      {
        path:'/dormitoryAdminManager',
        name:'宿管管理',
        component:DormitoryAdminManager
      },
      {
        path:'/dormitoryAdminAdd',
        name:'添加宿管',
        component:DormitoryAdminAdd
      },
      {
        path:'/buildingAdd',
        name:'添加宿舍楼',
        component:BuildingAdd
      },
      {
        path:'/buildingManager',
        name:'宿舍楼管理',
        component:BuildingManager
      },
      {
        path:'/dormitoryAdminAdd',
        name:'添加宿管',
        component:DormitoryAdminAdd
      },
      {
        path:'/dormitoryAdminAdd',
        name:'添加宿管',
        component:DormitoryAdminAdd
      },
      {
        path:'/dormitoryAdminAdd',
        name:'添加宿管',
        component:DormitoryAdminAdd
      },
      {
        path:'/dormitoryAdminAdd',
        name:'添加宿管',
        component:DormitoryAdminAdd
      },
      {
        path:'/dormitoryAdminAdd',
        name:'添加宿管',
        component:DormitoryAdminAdd
      },
      {
        path:'/dormitoryAdminAdd',
        name:'添加宿管',
        component:DormitoryAdminAdd
      },
      {
        path:'/dormitoryAdminAdd',
        name:'添加宿管',
        component:DormitoryAdminAdd
      },
      {
        path:'/dormitoryAdminAdd',
        name:'添加宿管',
        component:DormitoryAdminAdd
      }
    ]
  },
  {
    path:'/',
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
