<template>
  <div>
    <form class="custom">
      <slot></slot>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "large", "small", "mini"].includes(value)
      },
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      customForm: this,
    }
  },
}
</script>
