<template>
  <div class="c-card">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer" v-bind="{ row: false }"></slot>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$slot)
  },
}
</script>

<style scoped>
.c-card {
  background: #ccc;
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
