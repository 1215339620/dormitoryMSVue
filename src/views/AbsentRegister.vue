<template>
    <div style="margin-top: 60px;margin-left:330px;width: 300px;height: 500px;border: 0px solid red;" >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="楼宇" prop="bId">
                <el-select v-model="ruleForm.bId" placeholder="请选择楼宇" @change="buildingChange">
                    <el-option v-for="item in buildingList" :label="item.name" :key="item.id" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="宿舍" prop="dId">
                <el-select v-model="ruleForm.dId" placeholder="请选择宿舍" @change="dormitoryChange">
                    <el-option v-for="item in dormitoryList" :label="item.name" :key="item.id" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学生" prop="studentId">
                <el-select v-model="ruleForm.studentId" placeholder="请选择学生">
                    <el-option v-for="item in studentList" :label="item.name" :key="item.id" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="备注" prop="remarks">
                <el-input v-model="ruleForm.remarks"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="time">
                <el-date-picker
                        style="width: 200px"
                        v-model="ruleForm.time"
                        type="datetime"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                category:null,
                ruleForm: {
                    bId: '',
                    dId: '',
                    studentId: '',
                    remarks: '',
                    time: ''
                },
                buildingList: '',
                dormitoryList: '',
                studentList: '',
                rules: {
                    bId: [
                        { required: true, message: '请选择楼宇', trigger: 'change' }
                    ],
                    dId: [
                        { required: true, message: '请选择宿舍', trigger: 'change' }
                    ],
                    studentId: [
                        { required: true, message: '请选择学生', trigger: 'change' }
                    ],
                    remarks: [
                        { required: true, message: '请输入原因', trigger: 'blur' }
                    ],
                    time: [
                        { required: true, message: '请输入日期', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            buildingChange(){
                const _this = this
                axios.get('http://localhost:8181/absent/findDormitoryByBuildingId/'+_this.ruleForm.bId).then(function (resp) {
                    _this.dormitoryList = resp.data.data
                    _this.ruleForm.dId = ''
                    _this.ruleForm.studentId = ''
                })
            },
            dormitoryChange(){
                const _this = this
                axios.get('http://localhost:8181/absent/findStudentByDormitoryId/'+_this.ruleForm.dId).then(function (resp) {
                    _this.studentList = resp.data.data
                    _this.ruleForm.studentId = ''
                })
            },
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let admin = _this.$store.state.admin
                        _this.ruleForm.dormitoryAdminId = admin.id
                        console.log(_this.ruleForm)
                        axios.post('http://localhost:8181/absent/save',_this.ruleForm).then(function (resp) {
                            if(resp.data.code == 0){
                                _this.$alert('缺寝登记成功', '', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push('/absentRecord2')
                                    }
                                });
                            }
                        })
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/absent/buildingList').then(function (resp) {
                _this.buildingList = resp.data.data
            })
        }
    }
</script>
