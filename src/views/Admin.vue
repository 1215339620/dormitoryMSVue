<template>
    <el-container class="home_container">
        <el-header class="home_header">
            <div class="home_title">学生宿舍管理系统-系统管理员</div>
            <div class="home_userinfoContainer">
                <el-dropdown>
                  <span class="el-dropdown-link home_userinfo">
                    {{admin.name}}<i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
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
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-s-grid"></i>宿舍楼模块</template>
                        <el-menu-item index="/buildingAdd" :class="$route.path=='/buildingAdd'?'is-active':''">
                            <i class="el-icon-folder-add"></i>添加宿舍楼
                        </el-menu-item>
                        <el-menu-item index="/buildingManager" :class="$route.path=='/buildingManager'?'is-active':''">
                            <i class="el-icon-document-copy"></i>宿舍楼管理
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-s-home"></i>宿舍模块</template>
                        <el-menu-item index="/dormitoryAdd" :class="$route.path=='/dormitoryAdd'?'is-active':''">
                            <i class="el-icon-folder-add"></i>添加宿舍
                        </el-menu-item>
                        <el-menu-item index="/dormitoryManager" :class="$route.path=='/dormitoryManager'?'is-active':''">
                            <i class="el-icon-document-copy"></i>宿舍管理
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-s-platform"></i>宿管模块</template>
                        <el-menu-item index="/dormitoryAdminAdd" :class="$route.path=='/dormitoryAdminAdd'?'is-active':''">
                            <i class="el-icon-folder-add"></i>添加宿管
                        </el-menu-item>
                        <el-menu-item index="/dormitoryAdminManager" :class="$route.path=='/dormitoryAdminManager'?'is-active':''">
                            <i class="el-icon-document-copy"></i>宿管管理
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-user-solid"></i>学生模块</template>
                        <el-menu-item index="/studentAdd" :class="$route.path=='/studentAdd'?'is-active':''">
                            <i class="el-icon-folder-add"></i>添加学生
                        </el-menu-item>
                        <el-menu-item index="/studentManager" :class="$route.path=='/studentManager'?'is-active':''">
                            <i class="el-icon-document-copy"></i>学生管理
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/repairRecord" :class="$route.path=='/repairRecord'?'is-active':''">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">学生报修记录</span>
                    </el-menu-item>
                    <el-menu-item index="/absentRecord" :class="$route.path=='/absentRecord'?'is-active':''">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">学生缺寝记录</span>
                    </el-menu-item>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-s-comment"></i>公告模块</template>
                        <el-menu-item index="/noticeAdd" :class="$route.path=='/noticeAdd'?'is-active':''">
                            <i class="el-icon-folder-add"></i>添加公告
                        </el-menu-item>
                        <el-menu-item index="/noticeManager" :class="$route.path=='/noticeManager'?'is-active':''">
                            <i class="el-icon-document-copy"></i>公告管理
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-s-custom"></i>账户模块</template>
                        <el-menu-item index="/adminPersonalInformation" :class="$route.path=='/personalInformation'?'is-active':''">
                            <i class="el-icon-folder-add"></i>个人信息
                        </el-menu-item>
                        <el-menu-item index="/changePasswordAdmin" :class="$route.path=='/changePasswordAdmin'?'is-active':''">
                            <i class="el-icon-document-copy"></i>修改密码
                        </el-menu-item>
                    </el-submenu>
                </el-menu>

            </el-aside>

            <el-container>
                <el-main>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
                    </el-breadcrumb>
                    <router-view></router-view>
                </el-main>
                <el-footer class="home_footer">学生宿舍管理系统</el-footer>
            </el-container>

        </el-container>

    </el-container>
</template>
<script>
    export default{
        methods: {
            logout(){
                let _this = this;
                this.$confirm('注销登录吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    localStorage.removeItem('systemAdmin')
                    _this.$router.replace({path: '/login'})
                })
            }
        },
        data(){
            return {
                admin:''
            }
        },
        created() {
            let admin = JSON.parse(window.localStorage.getItem('systemAdmin'))
            this.admin = admin
        }
    }
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
        background-color: #2B2B2B;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .home_title {
        color: #C2C2C2;
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
        background-color: #FFFFFF;
    }

    .home_footer {
        background-color: #FFFFFF;
        color: #000000;
        font-size: 18px;
        line-height: 60px;
        text-align: center;
    }
</style>
