<template>
  <div>
    <h1>children1</h1>
  </div>
</template>
<script>
export default {
  components: {},
  created() {
    console.log("created -> children1 created")
  },
  mounted() {
    console.log("mounted -> children1 mounted")
  },
  activated() {
    console.log("activated -> children1 activated")
  },
  deactivated() {
    console.log("deactivated -> children1 deactivated")
  },
}
</script>
