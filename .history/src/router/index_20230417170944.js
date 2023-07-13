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
import DormitoryUpdate from "../views/DormitoryUpdate";
import AbsentRecord from "../views/AbsentRecord";
import RepairRecord from "../views/RepairRecord";
import RepairRecord3 from "../views/RepairRecord3";
import RepairRecord2 from "../views/RepairRecord2";
import NoticeAdd from "../views/NoticeAdd";
import NoticeManager from "../views/NoticeManager";
import Notice from '../views/Notice';
import AdminPersonalInformation from "../views/AdminPersonalInformation";
import ChangePasswordStudent from "../views/ChangePasswordStudent";
import ChangePasswordAdmin from "../views/ChangePasswordAdmin";
import ChangePasswordDManager from "../views/ChangePasswordDManager";
import DormitoryAdmin from "../views/DormitoryAdmin";
import AbsentRegister from "../views/AbsentRegister";
import DormitoryAdminPersonalInformation from "../views/DormitoryAdminPersonalInformation"
import Student from "../views/Student"
import StudentPersonalInformation from "../views/StudentPersonalInformation"
import DManagerDormitory from "../views/DManagerDormitory"
import RepairRegister from '../views/RepairRegister';

Vue.use(VueRouter)

const routes = [
    {
    path: '/student',
    name: '学生',
    component: Student,
    redirect:"/studentPersonalInformation",
    children: [
      {
        path: '/notice2',
        name: '公告管理',
        component: Notice
      },
      {
        path: '/studentPersonalInformation',
        name: '个人信息',
        component: StudentPersonalInformation
      },
      {
        path: '/repairRegister',
        name: '报修登记',
        component: RepairRegister
      },
      {
        path: '/repairRecord3',
        name: '报修登记',
        component: RepairRecord3
      },
      {
        path: '/changePasswordStudent',
        name: '修改密码',
        component: ChangePasswordStudent
      },

    ]
  },
  {
    path: '/dormitoryAdmin',
    name: '宿舍管理员',
    component: DormitoryAdmin,
    redirect:"/dormitoryAdminPersonalInformation",
    children: [
      {
        path: '/noticeManager3',
        name: '公告管理',
        component: NoticeManager
      },
      {
        path: '/dormitoryManager1',
        name: '查询宿舍信息',
        component: DManagerDormitory
      },
      {
        path: '/absentRegister',
        name: '学生缺寝登记',
        component: AbsentRegister
      },
      {
        path: '/managerAbsentRecord',
        name: '学生缺寝记录',
        component: AbsentRecord
      },
      {
        path: '/repairRecord2',
        name: '学生报修记录',
        component: RepairRecord2
      },
      {
        path: '/dormitoryAdminPersonalInformation',
        name: '个人信息',
        component: DormitoryAdminPersonalInformation
      },
      {
        path: '/changePasswordDManager',
        name: '修改密码',
        component: ChangePasswordDManager
      },

    ]
  },
  {
    path: '/systemAdmin',
    name: '系统管理员',
    component: Admin,
    redirect: "/adminPersonalInformation",
    children: [
      {
        path: '/dormitoryAdminManager',
        name: '宿管管理',
        component: DormitoryAdminManager
      },
      {
        path: '/dormitoryAdminAdd',
        name: '添加宿管',
        component: DormitoryAdminAdd
      },
      {
        path: '/dormitoryAdminUpdate',
        name: '修改宿管',
        component: DormitoryAdminUpdate
      },
      {
        path: '/buildingAdd',
        name: '添加宿舍楼',
        component: BuildingAdd
      },
      {
        path: '/buildingManager',
        name: '宿舍楼管理',
        component: BuildingManager
      },
      {
        path: '/buildingUpdate',
        name: '修改宿舍楼',
        component: BuildingUpdate
      },
      {
        path: '/dormitoryAdd',
        name: '添加宿舍',
        component: DormitoryAdd
      },
      {
        path: '/dormitoryManager',
        name: '宿舍管理',
        component: DormitoryManager
      },
      {
        path: '/dormitoryUpdate',
        name: '修改宿舍',
        component: DormitoryUpdate
      },
      {
        path: '/studentAdd',
        name: '添加学生',
        component: StudentAdd
      },
      {
        path: '/studentManager',
        name: '学生管理',
        component: StudentManager
      },
      {
        path: '/studentUpdate',
        name: '修改学生',
        component: StudentUpdate
      },
      {
        path: '/repairRecord',
        name: '学生报修记录',
        component: RepairRecord
      },
      {
        path: '/absentRecord',
        name: '学生缺寝记录',
        component: AbsentRecord
      },
      {
        path: '/noticeAdd',
        name: '添加公告',
        component: NoticeAdd
      },
      {
        path: '/noticeManager',
        name: '公告管理',
        component: NoticeManager
      },
      {
        path: '/adminPersonalInformation',
        name: '个人信息',
        component: AdminPersonalInformation
      },
      {
        path: '/changePasswordAdmin',
        name: '修改密码',
        component: ChangePasswordAdmin
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router