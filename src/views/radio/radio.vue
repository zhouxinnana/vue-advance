<!--
 * @ Author: Your name
 * @ Create Time: 2020-06-14 08:46:26
 * @ Modified by: Your name
 * @ Modified time: 2020-06-14 15:52:58
 * @ Description:  element radio change 事件遇到v-if失效问题
 -->

<template>
  <div>
    <h1>radio.vue</h1>
    <el-form :model="form">
      <el-form-item label="radio1" v-if="form.isMore === '1'">1</el-form-item>
      <!-- <el-form-item label="radio1" v-if="showIsMore">	</el-form-item> -->
      <!-- <h1 v-if="form.isMore === '1'">h1</h1> -->
      <h1>{{ form.isMore }}</h1>
      <el-form-item label="radio" prop="isMore">
        <el-radio-group v-model="form.isMore" @input="changeRadio">
          <el-radio label="0"></el-radio>
          <el-radio label="1"></el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- <h1 v-if="form.isMore === '1'">h1</h1> -->
      <el-form-item label="radio1" v-if="form.isMore === '1'">2</el-form-item>
      <!-- <el-form-item label="radio1" v-if="showIsMore"></el-form-item> -->
      <button @click="onClick">踢啊</button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        isMore: "0",
      },
    }
  },
  computed: {
    showIsMore() {
      return this.form.isMore === "1"
    },
  },
  methods: {
    changeRadio(value) {
      console.log("changeRadio -> value", value)
      this.form.isMore = value
    },
    onClick() {
      if (this.form.isMore === "0") {
        this.form.isMore = "1"
      } else {
        this.form.isMore = "0"
      }
    },
  },
}
</script>
