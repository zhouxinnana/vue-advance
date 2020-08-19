<template>
  <div class="hello">
    {{ $data.$_msg }}
    {{ $data.$msg }}
    {{ $_msg }}
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      $_msg: 'Welcome to Your Vue.js _msg',
      $msg: 'Welcome to Your Vue.js $msg',
    }
  },
  mounted() {
    console.log('mounted -> _name', this.$data.$msg)
    console.log('mounted ->_property._name', this)
    if (this.$data.$msg >= '123') {
      if (this.$data.$msg === '1') {
        let code = '<h1></h1>'
        console.log(code)
      }
    }
  },
  methods: {},
}
</script>
<style>
.css {
  background: red;
  color: rgba(red, green, blue, alpha);
}
.hello {
  width: 100px;
}
</style>
