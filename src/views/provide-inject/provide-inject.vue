<template>
  <div>
    <h1>provide和inject封装的弹窗组件</h1>
    {{ name }}
    <custom-form>
      <custom-form-item :label="标题">
        <custom-input v-model="name"></custom-input>
      </custom-form-item>
    </custom-form>
  </div>
</template>
<script>
import CustomForm from "./custom-form"
import CustomFormItem from "./custom-form-item"
import CustomInput from "./custom-input"
export default {
  components: {
    CustomForm,
    CustomFormItem,
    CustomInput,
  },
  data() {
    return {
      name: "zxs",
    }
  },
}
</script>
