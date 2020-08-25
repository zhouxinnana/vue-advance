<template>
  <div>
    <h1>minivuex</h1>
    <h5>{{ userInfo }}</h5>
  </div>
</template>
<script>
import { mutations, store } from "./store"
export default {
  computed: {
    userInfo() {
      return store.userInfo
    },
  },
  created() {
    mutations.setUserInfo({ name: "zx" })
  },
}
</script>
