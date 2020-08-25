<template>
  <div>
    Children1{{ $attrs }}
    {{ message }}
    <button @click="clickParent">获取父数据</button>

    <input type="number" />
    <son1 v-bind="$attrs" v-on="$listeners"></son1>
  </div>
</template>
<script>
import Son1 from "@/components/byval/Son1"
export default {
  props: ["name"],
  name: "Children1",
  components: {
    Son1,
  },
  // inheritAttrs:false,
  data() {
    return {
      message: "1",
    }
  },
  mounted() {
    console.log(this.$attrs)
  },
  methods: {
    setMsg() {
      this.message = "open"
    },
    clickParent() {
      // console.log(this.$parent);
      // this.$parent.forEach(el => {
      // 	if(el.$options.name === 'Byval'){
      // 		console.log(el.$data.age);
      // 	}
      // });

      if (this.$parent.$options.name === "Byval") {
        console.log(this.$parent.$data.age)
      }
    },
  },
}
</script>
