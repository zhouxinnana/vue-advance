<template>
  <div>
    <h1>children2</h1>
  </div>
</template>
<script>
export default {
  created() {
    console.log("created -> children2 created")
  },
  mounted() {
    console.log("mounted -> children2 mounted")
  },
  activated() {
    console.log("activated -> children2 activated")
  },
  deactivated() {
    console.log("deactivated -> children2 deactivated")
  },
}
</script>
