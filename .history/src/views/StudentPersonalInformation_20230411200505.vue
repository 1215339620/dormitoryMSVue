<template>
  <el-descriptions
    title="个人信息页"
    direction="vertical"
    :column="6"
    border
    style="margin-top: 60px"
  >
    <el-descriptions-item label="id">{{
      admin.id
    }}</el-descriptions-item>
    <el-descriptions-item label="学号">{{
      admin.username
    }}</el-descriptions-item>
    <el-descriptions-item label="姓名">{{ admin.name }}</el-descriptions-item>
    <el-descriptions-item label="性别">{{ admin.gender }}</el-descriptions-item>
    <el-descriptions-item label="民族">{{ admin.nation }}</el-descriptions-item>
    <el-descriptions-item label="电话">{{ admin.phone }}</el-descriptions-item>
    <el-descriptions-item label="学院">{{ admin.department }}</el-descriptions-item>
    <el-descriptions-item label="专业">{{ admin.major }}</el-descriptions-item>
    <el-descriptions-item label="班级">{{ admin.name }}</el-descriptions-item>
    <el-descriptions-item label="宿舍">{{ admin.gender }}</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="big">学生</el-tag>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      admin: "",
    };
  },
  created() {
    let admin = JSON.parse(window.localStorage.getItem("student"));
    this.admin = admin;
  },
};
</script>

<style>
</style>