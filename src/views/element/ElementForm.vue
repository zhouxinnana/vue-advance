<template>
<div class="waper">
	<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="name" :rules="{ required: true, message: '请输入活动名称', trigger: 'blur' }">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  {{ruleForm.resource}}
  <el-form-item label="活动区域" prop="region" :rules="{ required: true, message: '请选择活动区域', trigger: 'change' }">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域" >
      <el-option label="区域一" value="1"></el-option>
      <el-option label="区域二" value="2"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="描述" prop="desc" :rules="{ required: true, message: '请选择活动区域', trigger: 'change' }" v-if="ruleForm.region === '1'">
    <el-select v-model="ruleForm.desc" placeholder="请选择活动区域" >
      <el-option label="区域一" value="1"></el-option>
      <el-option label="区域二" value="2"></el-option>
    </el-select>
  </el-form-item>
		{{ruleForm.resource}}
    <el-form-item label="特殊资源" prop="resource" v-if="ruleForm.desc === '1'">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="0" value="0"></el-radio>
      <el-radio label="1" value="1"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item :rules="{ required: true, message: '请选择活动区域', trigger: 'change' }" label="活动性质" prop="type" v-if="ruleForm.resource === '0'" >
     </el-form-item>
  <!-- <el-form-item label="特殊资源" prop="">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="1" value="1"></el-radio>
      <el-radio label="2" value="2"></el-radio>
    </el-radio-group>
  </el-form-item> -->

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>

	
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: '',
          resource: '',
          desc: ''
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
.waper{
	width:500px;
}
</style>
