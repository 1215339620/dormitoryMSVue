<template>
  <div
    style="
      margin-top: 60px;
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
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="发布时间" prop="title">
        <el-date-picker
          v-model="ruleForm.time"
          type="datetime"
      value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="公告内容" prop="content">
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
        title: "",
        time: "",
        content:""
      },
      rules: {
        title: [
          { required: true, message: "请输入公告标题", trigger: "blur" },
        ],
        time: [{ required: true, message: "请输入发布公告时间", trigger: "blur" }],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(_this.ruleForm)
          // axios
          //   .post("http://localhost:8181/notice/save", _this.ruleForm)
          //   .then(function (resp) {
          //     if (resp.data.code == 0) {
          //       _this.$alert(_this.ruleForm.username + "添加成功", "", {
          //         confirmButtonText: "确定",
          //         callback: (action) => {
          //           _this.$router.push("/noticeManager");
          //         },
          //       });
          //     }
          //   });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
