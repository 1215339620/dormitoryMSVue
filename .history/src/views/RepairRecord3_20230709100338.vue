<template>
  <div style="margin-top: 60px; margin-left: 80px; border: 0px solid red">
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 1210px; position: relative; top: -30px"
    >
      <el-table-column fixed prop="id" label="ID"> </el-table-column>
      <el-table-column prop="buildingName" label="楼宇"> </el-table-column>
      <el-table-column prop="dormitoryName" label="宿舍"> </el-table-column>
      <el-table-column prop="studentName" label="学生"> </el-table-column>
      <el-table-column prop="time" label="时间"> </el-table-column>
      <el-table-column prop="content" label="报修内容"> </el-table-column>
      <el-table-column
        class-name="status"
        label="操作"
        align="center"
        width="200"
      >
        <template slot-scope="scope">
          <el-button size="mini" type="warning" v-if="scope.row.status == 0"
            >&nbsp;&nbsp;未派遣&nbsp;&nbsp;</el-button
          >
          <el-button
            size="mini"
            type="warning"
            v-if="scope.row.status == 1 || scope.row.status == 2"
            >&nbsp;&nbsp;已派遣&nbsp;&nbsp;</el-button
          >
          <el-button size="mini" type="success" v-if="scope.row.status != 2"
            >&nbsp;&nbsp;未完成&nbsp;&nbsp;</el-button
          >
          <el-button size="mini" type="success" v-if="scope.row.status == 2"
            >&nbsp;&nbsp;已完成&nbsp;&nbsp;</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px; float: right"
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      :current-page.sync="currentPage"
      @current-change="page"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: null,
      currentPage: 1,
      pageSize: 5,
      total: null,
      key: "",
      value: "",
      ruleForm: {
        key: "",
        value: "",
        page: "",
        size: 5,
        bName: "",
        dName: "",
        studentName: "",
        bId: "",
        dId: "",
        studentId: "",
      },
      rules: {
        key: [{ required: true, message: "请选择字段", trigger: "change" }],
      },
    };
  },
  methods: {
    page(currentPage) {
      const _this = this;
      if (_this.ruleForm.value == "") {
        axios
          .get(
            "http://localhost:8181/repair/list/" +
              currentPage +
              "/" +
              _this.pageSize
          )
          .then(function (resp) {
            _this.tableData = resp.data.data.data;
            _this.total = resp.data.data.total;
          });
      } else {
        _this.ruleForm.page = _this.currentPage;
        axios
          .get("http://localhost:8181/repair/search", {
            params: _this.ruleForm,
          })
          .then(function (resp) {
            _this.tableData = resp.data.data.data;
            _this.total = resp.data.data.total;
          });
      }
    },
  },
  created() {
    const _this = this;
    let admin = JSON.parse(window.localStorage.getItem("student"));
    this.admin = admin;
    this.$store.state.admin = admin;
    _this.ruleForm.studentId = admin.id;
    _this.ruleForm.studentName = admin.name;
    axios
      .get("http://localhost:8181/repair/findDormitoryById/" + admin.dId)
      .then(function (resp) {
        var bId = resp.data.data.bId;
        _this.ruleForm.dName = resp.data.data.name;
        _this.ruleForm.dId = resp.data.data.id;
        axios
          .get("http://localhost:8181/repair/findBuildingById/" + bId)
          .then(function (resp) {
            _this.ruleForm.bName = resp.data.data.name;
            _this.ruleForm.bId = resp.data.data.id;
          });
      });
      console.log(_this.ruleForm);
    axios
      .get("http://localhost:8181/repair/list/1/" + _this.pageSize)
      .then(function (resp) {
        for (let i = 0; i < resp.data.data.data.length; i++) {
          console.log(resp.data.data.data[i]);
          let dataNum=1
          if (resp.data.data.data[i].dormitoryName == _this.ruleForm.dName) {
            _this.tableData+= (resp.data.data.data)[i];
            dataNum++
          }
        }
        _this.total = resp.data.data.total;
        console.log(_this.tableData);
       console.log(_this.total);
      });
  },
};
</script>