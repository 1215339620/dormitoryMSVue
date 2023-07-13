import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import DormitoryAdminAdd from '../views/DormitoryAdminAdd.vue'
import DormitoryAdminManager from '../views/DormitoryAdminManager.vue'
// import DormitoryAdminUpdate from "../views/DormitoryAdminUpdate";
// import StudentAdd from "../views/StudentAdd";
// import StudentManager from "../views/StudentManager";
// import StudentUpdate from "../views/StudentUpdate";
import BuildingAdd from "../views/BuildingAdd";
import BuildingManager from "../views/BuildingManager";
// import BuildingUpdate from "../views/BuildingUpdate";
import DormitoryAdd from "../views/DormitoryAdd";
import DormitoryManager from "../views/DormitoryManager";
// import DormitoryUpdate from "../views/DormitoryUpdate";
// import MoveoutRegister from "../views/MoveoutRegister";
// import MoveRecord from "../views/MoveRecord";
// import AbsentRecord from "../views/AbsentRecord";
// import DormitoryAdmin from "../views/DormitoryAdmin";
// import AbsentRegister from "../views/AbsentRegister";

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
        path:'/dormitoryAdd',
        name:'添加宿舍',
        component:DormitoryAdd
      },
      {
        path:'/dormitoryManager',
        name:'宿舍管理',
        component:dormitoryManager
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
