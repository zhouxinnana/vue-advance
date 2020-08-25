<template>
  <el-dialog :visible.sync="visibles" v-bind="$attrs">
    <slot></slot>
    <template #footer>
      <slot name="footer">
        <el-button type="primary" @click="confirm">提交</el-button>
        <el-button type="primary" @click="cancel">取消</el-button>
      </slot>
    </template>
  </el-dialog>
</template>
<script>
export default {
  props: ["visible"],
  data() {
    return {}
  },
  computed: {
    visibles: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit("update:visible", val)
      },
    },
  },
  methods: {
    confirm() {
      this.$emit("confirm")
    },
    cancel() {
      this.$emit("cancel")
    },
  },
}
</script>
