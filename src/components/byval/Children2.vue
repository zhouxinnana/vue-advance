<template>
  <div>
    Children2
    {{ message }}
  </div>
</template>
<script>
export default {
  // name:'Children2',
  data() {
    return {
      message: "1",
    }
  },
  methods: {
    setMsg() {
      this.message = "open"
    },
  },
}
</script>
