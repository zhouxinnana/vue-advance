<script>
export default {
  name: 'jsxform',
  data(){
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
	methods: {
  $_handleInputUser(value) {
    this.formInline.user = value
  },
  $_handleChangeRegion(value) {
    this.formInline.region = value
  },
  $_handleSubmit() {}
},
render() {
    return (
      <ElForm inline  props={{mode: this.formInline}}  class="demo-form-inline">
        <ElFormItem label="审批人">
          <ElInput
            v-model={this.formInline.user}
            placeholder="审批人"
          ></ElInput>
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primarty" onClick={this.$_handleSubmit}>
            查询
          </ElButton>
        </ElFormItem>
      </ElForm>
    )
  }
}
</script>

<style>

</style>