<template>
  <div>
    <h1>编辑判断表单是否被更改</h1>
    <el-card>
      <div slot="header">
        <el-button type="primary" @click="loaddata">加载数据</el-button>
      </div>
      <el-form :model="form" style="width:500px;margin:0 auto;">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" placeholder></el-input>
        </el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      form: {
        name: "",
        age: ""
      },
      isEditForm: false
    };
  },
  created() {
    this.loaddata;
  },
  methods: {
    loaddata() {
      Vue.http.ubs.service()
      .then().catch();
      this.onClickloadData().then(res => {
        console.log("loaddata -> res", res);
        this.form = res;
        this.$watch(
          "form",
          () => {
            this.isEditForm = true;
          },
          { deep: true }
        );
      });
    },
    onClickloadData() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            name: "zx",
            age: 29
          });
        }, 3000);
      });
    },
    submit() {
      if (this.isEditForm) {
        this.$message("表单被更改");
      } else {
        this.$message("表单提交成功");
      }
    }
  }
};
</script>