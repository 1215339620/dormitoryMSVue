<template>
  <div
    style="
      margin-top: 60px;
      margin-left: 330px;
      width: 300px;
      height: 500px;
      border: 0px solid red;
    "
  >
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="宿舍楼名称" prop="buildingName">
        <el-input v-model="ruleForm.buildingName"></el-input>
      </el-form-item>
      <el-form-item label="宿舍号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="宿舍类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择宿舍类型">
          <el-option label="四人间" value="4"></el-option>
          <el-option label="六人间" value="6"></el-option>
          <el-option label="八人间" value="8"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { log } from 'console';

export default {
  data() {
    return {
      category: null,
      ruleForm: {
        buildingName: "",
        password: "",
        name: "",
        gender: "男",
        telephone: "",
      },
      rules: {
        buildingName: [
          { required: true, message: "请选择宿舍楼名称", trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入宿舍号", trigger: "blur" }],
        type: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(_this.ruleForm)
          axios
            .post("http://localhost:8181/dManager/save", _this.ruleForm)
            .then(function (resp) {
              if (resp.data.code == 0) {
                _this.$alert(_this.ruleForm.username + "添加成功", "", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    _this.$router.push("/dormitoryAdminManager");
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
};
</script>
