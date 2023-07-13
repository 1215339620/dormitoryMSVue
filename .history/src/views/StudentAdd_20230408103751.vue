<template>
  <div style="margin-left: 400px; width: 300px; height: 500px">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="学号" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <div style="width: 170px; height: 30px">
          <template>
            <el-radio v-model="ruleForm.gender" label="男">男</el-radio>
            <el-radio v-model="ruleForm.gender" label="女">女</el-radio>
          </template>
        </div>
      </el-form-item>
      <el-form-item label="民族" prop="nation">
        <el-input v-model.number="ruleForm.nation"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model.number="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="学院" prop="department">
        <el-input v-model.number="ruleForm.department"></el-input>
      </el-form-item>
      <el-form-item label="专业" prop="major">
        <el-input v-model.number="ruleForm.major"></el-input>
      </el-form-item>
      <el-form-item label="班级" prop="classes">
        <el-input v-model.number="ruleForm.classes"></el-input>
      </el-form-item>
      <el-form-item label="宿舍" prop="dId">
        <el-select v-model="ruleForm.dId" placeholder="请选择宿舍">
          <el-option
            v-for="item in dList"
            :label="item.bid + '号楼' + item.name"
            :value="item.id" ref="dName" :name=item.name
          ></el-option>
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
export default {
  data() {
    return {
      category: null,
      ruleForm: {
        username: "",
        password: "",
        name: "",
        gender: "男",
        nation: "",
        phone: "",
        department: "",
        major: "",
        classes: "",
        bId: "",
        dId: "",
      },
      dList: "",
      rules: {
        username: [{ required: true, message: "请输入学号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        gender: [{ required: true, message: "请输入性别", trigger: "blur" }],
        nation: [{ required: true, message: "请输入民族", trigger: "blur" }],
        phone: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
        department: [
          { required: true, message: "请输入学院", trigger: "blur" },
        ],
        major: [{ required: true, message: "请输入专业", trigger: "blur" }],
        classes: [{ required: true, message: "请输入班级", trigger: "blur" }],
        dId: [{ required: true, message: "请选择宿舍", trigger: "change" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this;
      var dName=this.$refs.dName.$attributes
      this.ruleForm.bId=dName.charAt(0)
      console.log(this.ruleForm);
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       axios
    //         .post("http://localhost:8181/student/save", _this.ruleForm)
    //         .then(function (resp) {
    //           if (resp.data.code == 0) {
    //             _this.$alert(_this.ruleForm.name + "添加成功", "", {
    //               confirmButtonText: "确定",
    //               callback: (action) => {
    //                 _this.$router.push("/studentManager");
    //               },
    //             });
    //           }
    //         });
    //     }
    //   });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
    const _this = this;
    axios
      .get("http://localhost:8181/dormitory/availableList")
      .then(function (resp) {
        _this.dList = resp.data.data;
      });
  },
};
</script>
<style scoped>
.el-form-item {
  margin-bottom: 18px;
}
</style>