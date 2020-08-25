<template>
  <div>
    <h1>自定义切换浏览器标签也的声明周期</h1>
  </div>
</template>
<script>
export default {
  // 自定义浏览器窗口变化的生命周期
  resize() {
    console.log("resize -> resizeresize")
  },
  pageVisible() {
    console.log("pageVisible -> pageVisible")
  },
  pageHidden() {
    console.log("pageHidden -> pageHidden", new Date().getTime())
  },
  beforeCreate() {
    console.log("beforeCreate -> beforeCreate")
  },
  created() {
    console.log("created -> created")
  },
}
</script>
