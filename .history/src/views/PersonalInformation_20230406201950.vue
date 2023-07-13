<template>
  <el-descriptions
    class="margin-top"
    title=""
    :column="3"
    :size="size"
    border
  >
    <template slot="extra">
      <el-button type="primary" size="small">操作</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      {{ admin.username }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      {{ admin.telephone }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">系统管理员</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      江苏省苏州市吴中区吴中大道 1188 号
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
    let admin = JSON.parse(window.localStorage.getItem("systemAdmin"));
    this.admin = admin;
  },
};
</script>

<style>
</style>