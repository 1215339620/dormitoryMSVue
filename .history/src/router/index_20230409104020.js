import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import DormitoryAdminAdd from '../views/DormitoryAdminAdd.vue'
import DormitoryAdminManager from '../views/DormitoryAdminManager.vue'
import DormitoryAdminUpdate from "../views/DormitoryAdminUpdate";
import StudentAdd from "../views/StudentAdd";
import StudentManager from "../views/StudentManager";
import StudentUpdate from "../views/StudentUpdate";
import BuildingAdd from "../views/BuildingAdd";
import BuildingManager from "../views/BuildingManager";
import BuildingUpdate from "../views/BuildingUpdate";
import DormitoryAdd from "../views/DormitoryAdd";
import DormitoryManager from "../views/DormitoryManager";
// import DormitoryUpdate from "../views/DormitoryUpdate";
import MoveoutRegister from "../views/MoveoutRegister";
// import MoveRecord from "../views/MoveRecord";
import AbsentRecord from "../views/AbsentRecord";
import RepairRecord from "../views/RepairRecord";
import NoticeAdd from "../views/NoticeAdd";
import NoticeManager from "../views/NoticeManager";
import PersonalInformation from "../views/PersonalInformation";
import ChangePassword from "../views/ChangePassword";
// import DormitoryAdmin from "../views/DormitoryAdmin";
// import AbsentRegister from "../views/AbsentRegister";

Vue.use(VueRouter)

const routes = [
  {
    path: '/systemAdmin',
    name: '系统管理员',
    component: Admin,
    redirect:"/personalInformation",
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
        path:'/dormitoryAdminUpdate',
        name:'修改宿管',
        component:DormitoryAdminUpdate
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
        path:'/buildingUpdate',
        name:'修改宿舍楼',
        component:BuildingUpdate
      },
      {
        path:'/dormitoryAdd',
        name:'添加宿舍',
        component:DormitoryAdd
      },
      {
        path:'/dormitoryManager',
        name:'宿舍管理',
        component:DormitoryManager
      },
      {
        path:'/studentAdd',
        name:'添加学生',
        component:StudentAdd
      },
      {
        path:'/studentManager',
        name:'学生管理',
        component:StudentManager
      },
      {
        path:'/studentUpdate',
        name:'修改学生',
        component:StudentUpdate
      },
      {
        path:'/moveoutRegister',
        name:'学生迁出记录',
        component:MoveoutRegister
      },
      {
        path:'/repairRecord',
        name:'学生报修记录',
        component:RepairRecord
      },
      {
        path:'/absentRecord',
        name:'学生缺寝记录',
        component:AbsentRecord
      },
      {
        path:'/noticeAdd',
        name:'添加公告',
        component:NoticeAdd
      },
      {
        path:'/noticeManager',
        name:'公告管理',
        component:NoticeManager
      },
      {
        path:'/personalInformation',
        name:'个人信息',
        component:PersonalInformation
      },
      {
        path:'/changePassword',
        name:'修改密码',
        component:ChangePassword
      }
    ]
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
