<template>
  <el-descriptions title="个人信息页" direction="vertical" :column="4" border>
  <el-descriptions-item label="用户名">{{admin}}</el-descriptions-item>
  <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
  <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
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
    let admin = JSON.parse(window.localStorage.getItem("systemAdmin"));
    this.admin = admin;
  },
};
</script>

<style>
</style>