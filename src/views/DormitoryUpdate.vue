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
      <el-form-item label="ID">
        <el-input v-model="ruleForm.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="宿舍楼名称" prop="bId">
        <el-select v-model="ruleForm.bId" disabled placeholder="请选择宿舍楼名称">
          <el-option
            v-for="item in bList"
            :label="item.name"
            :value="item.id"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="宿舍号" prop="name">
        <el-input
          v-model="ruleForm.name"
          placeholder="楼号+宿舍号，例如：1101"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即修改</el-button
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
        id: "",
        bId: "",
        name: "",
        type: "",
      },
      bList:'',
      rules: {
        buildingId: [
          { required: true, message: "请选择楼宇", trigger: "change" },
        ],
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        type: [{ required: true, message: "请选择几人间", trigger: "change" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios
            .put("http://localhost:8181/dormitory/update", _this.ruleForm)
            .then(function (resp) {
              if (resp.data.code == 0) {
                _this.$alert(_this.ruleForm.name + "修改成功", "", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    _this.$router.push("/dormitoryManager");
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
    axios
      .get("http://localhost:8181/dormitory/findById/" + _this.$route.query.id)
      .then(function (resp) {
        _this.ruleForm = resp.data.data;
      });
      axios.get("http://localhost:8181/building/list").then(function (resp) {
      _this.bList = resp.data.data;
    });
  },
};
</script>
