<template>
  <el-descriptions
    title="个人信息页"
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
    <el-descriptions-item label="宿舍楼">{{ ruleForm.bName }}</el-descriptions-item>
    <el-descriptions-item label="宿舍">{{ ruleForm.dName }}</el-descriptions-item>
    <el-descriptions-item label="学院">{{ admin.department }}</el-descriptions-item>
    <el-descriptions-item label="专业">{{ admin.major }}</el-descriptions-item>
    <el-descriptions-item label="班级">{{ admin.classes }}</el-descriptions-item>
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
      ruleForm: {
        bName: "",
        dName: "",
        studentName: "",
        bId:"",
        dId:"",
        studentId:""
      },
    };
  },
  created() {
    const _this = this;
    let admin = JSON.parse(window.localStorage.getItem("student"));
    this.admin = admin;
    this.$store.state.admin = admin;
    _this.ruleForm.studentId=admin.id
    _this.ruleForm.studentName=admin.name
    axios
      .get("http://localhost:8181/repair/findDormitoryById/" + admin.dId)
      .then(function (resp) {
        var bId = resp.data.data.bId;
        _this.ruleForm.dName=resp.data.data.name
        _this.ruleForm.dId=resp.data.data.id
        axios
          .get("http://localhost:8181/repair/findBuildingById/" + bId)
          .then(function (resp) {
            _this.ruleForm.bName=resp.data.data.name
            _this.ruleForm.bId=resp.data.data.id
          });
      });
      console.log(_this.ruleForm);
  },
};
</script>

<style>
</style>