<template>
  <div>
    getSize:{{ getSize }}
    <input type="text" @input="onChange" :value="value" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  inject: ["customForm"],
  computed: {
    getSize() {
      return this.customForm.size
    },
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value)
    },
  },
}
</script>

<style></style>
