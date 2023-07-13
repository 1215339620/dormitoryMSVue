<template>
  <div
    style="margin-top: 60px;
      margin-left: 330px;
      width: 300px;
      height: 500px;
      border: 0px solid red;"
  >
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="楼宇" prop="bName">
        <el-input v-model="ruleForm.bName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="宿舍" prop="dName">
        <el-input v-model="ruleForm.dName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="学生" prop="studentName">
        <el-input v-model="ruleForm.studentName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="报修时间" prop="time">
        <el-date-picker
          style="width: 200px"
          v-model="ruleForm.time"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="保修内容" prop="content">
        <el-input
          type="textarea"
          rows="5"
          placeholder="请输入内容"
          v-model="ruleForm.content"
          style="width: 400px"
        >
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: null,
      ruleForm: {
        bName: "",
        dName: "",
        studentName: "",
        content: "",
        time: "",
        bId:"",
        dId:"",
        studentId:""
      },
      rules: {
        content: [{ required: true, message: "请输入保修内容", trigger: "blur" }],
        time: [{ required: true, message: "请输入日期", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let admin = _this.$store.state.admin;
          _this.ruleForm.dormitoryAdminId = admin.id;
          console.log(_this.ruleForm);
          axios
            .post("http://localhost:8181/repair/save", _this.ruleForm)
            .then(function (resp) {
              if (resp.data.code == 0) {
                _this.$alert("报修登记成功", "", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    _this.$router.push("/repairRecord3");
                  },
                });
              }
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
