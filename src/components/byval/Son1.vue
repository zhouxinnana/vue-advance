<template>
  <div>
    Son{{ $attrs }}
    <button @click="emitByval">向爷爷组件派发事件</button>
    <grandson></grandson>
  </div>
</template>
<script>
import Grandson from "@/components/byval/Grandson"
export default {
  components: {
    Grandson,
  },
  methods: {
    emitByval() {
      this.$emit("listenerEmit", "xxxx")
    },
  },
  mounted() {
    console.log("son", this.$attrs)
  },
}
</script>
