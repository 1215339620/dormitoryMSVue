<template>
  <el-container class="home_container">
    <el-header class="home_header">
      <div class="home_title">学生宿舍管理系统-宿舍管理员</div>
      <div class="home_userinfoContainer">
        <el-dropdown>
          <span class="el-dropdown-link home_userinfo">
            {{ admin.name
            }}<i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside class="home_aside" width="200px">
        <el-menu router>
          <el-menu-item
            index="/notice2"
            :class="$route.path == '/notice2' ? 'is-active' : ''"
          >
            <i class="el-icon-document-copy"></i>查看公告
          </el-menu-item>
          <el-menu-item
            index="/dormitoryManager1"
            :class="$route.path == '/dormitoryManager1' ? 'is-active' : ''"
          >
            <i class="el-icon-document-copy"></i>宿舍信息查询
          </el-menu-item>
          <el-menu-item
            index="/absentRegister"
            :class="$route.path == '/absentRegister' ? 'is-active' : ''"
          >
            <i class="el-icon-s-order"></i>
            <span slot="title">学生缺寝登记</span>
          </el-menu-item>

          <el-menu-item
            index="/managerAbsentRecord"
            :class="$route.path == '/managerAbsentRecord' ? 'is-active' : ''"
          >
            <i class="el-icon-error"></i>
            <span slot="title">学生缺寝记录</span>
          </el-menu-item>
          <el-menu-item
            index="/repairRecord2"
            :class="$route.path == '/repairRecord2' ? 'is-active' : ''"
          >
            <i class="el-icon-s-opportunity"></i>
            <span slot="title">学生报修记录</span>
          </el-menu-item>
          <el-submenu index="6">
            <template slot="title"
              ><i class="el-icon-s-custom"></i>账户模块</template
            >
            <el-menu-item
              index="/dormitoryAdminPersonalInformation"
              :class="$route.path == '/dormitoryAdminPersonalInformation' ? 'is-active' : ''"
            >
              <i class="el-icon-folder-add"></i>个人信息
            </el-menu-item>
            <el-menu-item
              index="/changePasswordDManager"
              :class="$route.path == '/changePasswordDManager' ? 'is-active' : ''"
            >
              <i class="el-icon-document-copy"></i>修改密码
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item
              v-text="this.$router.currentRoute.name"
            ></el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
        <el-footer class="home_footer">学生宿舍管理系统</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    logout() {
      let _this = this;
      this.$confirm("注销登录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(function () {
        localStorage.removeItem("dormitoryAdmin");
        _this.$router.replace({ path: "/login" });
      });
    },
  },
  data() {
    return {
      admin: "",
    };
  },
  created() {
    let admin = JSON.parse(window.localStorage.getItem("dormitoryAdmin"));
    this.admin = admin;
    this.$store.state.admin = admin;
  },
};
</script>
<style>
.home_container {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.home_header {
  background-color: #2b2b2b;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home_title {
  color: #c2c2c2;
  font-size: 22px;
  display: inline;
}

.home_userinfo {
  color: #fff;
  cursor: pointer;
}

.home_userinfoContainer {
  display: inline;
  margin-right: 20px;
}

.home_aside {
  background-color: #ffffff;
}

.home_footer {
  background-color: #ffffff;
  color: #000000;
  font-size: 18px;
  line-height: 60px;
  text-align: center;
}
</style>
