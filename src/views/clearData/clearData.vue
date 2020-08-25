<template>
  <div>
    <h1>clearData</h1>
    <button @click="onClick">点击</button>
  </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object,
      default() {
        return {
          nums: 3,
        }
      },
    },
  },
  data() {
    return {
      num: this.obj && this.obj.nums ? 1 : 2,
    }
  },
  mounted() {
    console.log(this.$options.data().num)
  },
  methods: {
    onClick() {
      console.log(this.$options.data())
    },
  },
}
</script>
