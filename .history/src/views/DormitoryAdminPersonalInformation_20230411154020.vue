<template>
  <el-descriptions title="个人信息页" direction="vertical" :column="2" border style="margin-top: 60px;">
    <el-descriptions-item label="用户名">{{admin.username}}</el-descriptions-item>
  <el-descriptions-item label="用户名">{{admin.username}}</el-descriptions-item>
  <el-descriptions-item label="手机号">{{ admin.telephone }}</el-descriptions-item>
  <el-descriptions-item label="姓名">{{ admin.name }}</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="big">宿舍管理员</el-tag>
  </el-descriptions-item>
</el-descriptions>
</template>

<script>
export default {
  methods: {
    
  },
  data() {
    return {
      admin: "",
      size:"",
    };
  },
  created() {
    let admin = JSON.parse(window.localStorage.getItem("dormitoryAdmin"));
    this.admin = admin;
  },
};
</script>

<style>
</style>