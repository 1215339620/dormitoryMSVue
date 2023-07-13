 <template>
    <div
    style="
      margin: 50px 330px;
      width: 300px;
      height: 500px;"
  >
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
  <el-form-item label="原密码" prop="oldPass">
      <el-input
        v-model="ruleForm.oldPass"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="newPass">
      <el-input
        type="password"
        v-model="ruleForm.newPass"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="确认新密码" prop="checkPass">
      <el-input
        type="password"
        v-model="ruleForm.checkPass"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
  <script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.ruleForm.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        oldPass:'',
        newPass: "",
        checkPass: "",
      },
      rules: {
        oldPass: [{ required: true, message: "请输入原密码", trigger: "blur" }],
        newPass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    checkOldPass(oldPass){

    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
    let admin = JSON.parse(window.localStorage.getItem("student"));
  },
};
</script>