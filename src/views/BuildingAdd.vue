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
      <el-form-item label="宿舍楼名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="管理员" prop="mId">
        <el-select v-model="ruleForm.mId" placeholder="请选择管理员">
          <el-option
            v-for="item in dManagerList"
            :label="item.name"
            :value="item.id"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >添加</el-button
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
        name: "",
        mId: "",
      },
      dManagerList:'',
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        mId: [
          { required: true, message: "请选择宿管姓名", trigger: "change" },
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
            .post("http://localhost:8181/building/save", _this.ruleForm)
            .then(function (resp) {
              if (resp.data.code == 0) {
                _this.$alert(_this.ruleForm.name + "添加成功", "", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    _this.$router.push("/buildingManager");
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
    axios.get("http://localhost:8181/dManager/list").then(function (resp) {
      _this.dManagerList = resp.data.data;
    });
  },
};
</script>
