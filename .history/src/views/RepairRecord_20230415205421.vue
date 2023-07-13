<template>
    <div style="margin-top: 60px;margin-left:80px;border: 0px solid red;" >
        <el-form style="margin-left: -40px" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="字段：" prop="key">
                <el-select v-model="ruleForm.key" style="width: 160px;float: left" placeholder="请选择字段">
                    <el-option label="楼宇" value="buildingName"></el-option>
                    <el-option label="宿舍" value="dormitoryName"></el-option>
                    <el-option label="学生" value="studentName"></el-option>
                </el-select>
            </el-form-item>
            <div style="border: 0px solid red;width: 400px;height: 60px;position: relative;top: -64px;left: 270px">
                <el-form-item label="值：">
                    <el-input v-model="ruleForm.value" placeholder="请输入关键字" style="width: 160px;"></el-input>
                    <el-button type="primary" icon="el-icon-search" style="position: relative;left: 10px;" @click="submitForm('ruleForm')">搜索</el-button>
                </el-form-item>
            </div>
        </el-form>

        <el-table
                :data="tableData"
                border
                stripe
                style="width: 1210px;position: relative;top:-30px">
            <el-table-column
                    fixed
                    prop="id"
                    label="ID">
            </el-table-column>
            <el-table-column
                    prop="buildingName"
                    label="楼宇">
            </el-table-column>
            <el-table-column
                    prop="dormitoryName"
                    label="宿舍">
            </el-table-column>
            <el-table-column
                    prop="studentName"
                    label="学生">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="时间">
            </el-table-column>
            <el-table-column
                    prop="content"
                    label="报修内容">
            </el-table-column>
            <el-table-column label="操作" align="center"  width="200">
                <template slot-scope="scope" v-if="tableDa status==0">
                    <el-button
                            size="mini"
                            type="warning"
                            @click="edit(scope.row)"
                            >派遣维修</el-button>
                    <el-button
                            size="mini"
                            type="success"
                            @click="del(scope.row)">是否完成</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination style="margin-top: 20px;float: right"
                       background
                       layout="prev, pager, next"
                       :page-size="pageSize"
                       :total="total"
                       :current-page.sync="currentPage"
                       @current-change="page">
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
                key: '',
                value: '',
                ruleForm: {
                    key: '',
                    value: '',
                    page: '',
                    size: 5
                },
                rules: {
                    key: [
                        { required: true, message: '请选择字段', trigger: 'change' }
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                const _this = this
                //让翻页复原
                _this.currentPage=1
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this
                        _this.ruleForm.page = _this.currentPage
                        axios.get('http://localhost:8181/repair/search',{params:_this.ruleForm}).then(function (resp) {
                            _this.tableData = resp.data.data.data
                            _this.total = resp.data.data.total
                        })
                    }
                });

            },
            page(currentPage){
                const _this = this
                if(_this.ruleForm.value == ''){
                    axios.get('http://localhost:8181/repair/list/'+currentPage+'/'+_this.pageSize).then(function (resp) {
                        _this.tableData = resp.data.data.data
                        _this.total = resp.data.data.total
                    })
                } else {
                    _this.ruleForm.page = _this.currentPage
                    axios.get('http://localhost:8181/repair/search',{params:_this.ruleForm}).then(function (resp) {
                        _this.tableData = resp.data.data.data
                        _this.total = resp.data.data.total
                    })
                }

            },
            edit(row){
                const _this = this
                this.$confirm('是否派遣维修？', '提示', {
                    confirmButtonText: '已派遣',
                    cancelButtonText: '未派遣',
                    type: 'warning'
                }).then(() => {

                })
            },
            del(row) {
                const _this = this
                this.$confirm('是否完成维修？', '提示', {
                    confirmButtonText: '已完成',
                    cancelButtonText: '未完成',
                    type: 'warning'
                }).then(() => {
                    // axios.delete('http://localhost:8181/building/deleteById/'+row.id).then(function (resp) {
                    //     if(resp.data.code==0){
                    //         _this.$alert('【'+row.name+'】已删除', '', {
                    //             confirmButtonText: '确定',
                    //             callback: action => {
                    //                 location.reload()
                    //             }
                    //         });
                    //     }
                    // });
                });
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/repair/list/1/'+_this.pageSize).then(function (resp) {
                _this.tableData = resp.data.data.data
                _this.total = resp.data.data.total
                console.log(_this.tableData);
            })
        }
    }
</script>