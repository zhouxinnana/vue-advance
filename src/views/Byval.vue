<template>
  <div>
    <h1>父组件 title => {{ type }}</h1>
    <children1 :age="age" name="text" :type="type" @listenerEmit="listenerEmit" ref="Children1El"></children1>
    <children2></children2>
    <button @click="handlerAdd">设置子组件的值1</button>
    <button @click="handlerOpen">调用子组件的方法</button>
    <button @click="update">更改注入重孙组件的值</button>

    <h1>isAge computed => {{ isAge }}</h1>
    <!-- <h1>formatTypes computed => {{formatType}}</h1> -->
    <button @click="formatType = 'as'">更改formatTypes</button>
    <button @click="getsrcendType">获取getsrcendType</button>
  </div>
</template>
<script>
import Children1 from "@/components/byval/Children1"
import Children2 from "@/components/byval/Children2"
export default {
  name: "Byval",
  components: {
    Children1,
    Children2,
  },
  computed: {
    isAge: (_t) => _t.age,
    formatType: {
      set: function (value) {
        this.type = value
      },
      get: function () {
        return this.type
      },
    },
    srcendType: (_t) => _t.formatType,
  },

  provide() {
    return {
      title: this.type,
    }
  },

  data() {
    return {
      age: 10,
      name: "zxzx",
      type: "text",
    }
  },
  methods: {
    getsrcendType() {
      console.log("getsrcendType -> getsrcendType", this.formatType)
    },
    listenerEmit(val) {
      console.log("listenerEmit -> listenerEmit", val)
    },
    handlerOpen() {
      this.$children.forEach((el) => {
        if (el.$options.name === "Children1") {
          el.setMsg()
        }
      })
    },
    handlerAdd() {
      this.$children.forEach((el) => {
        if (el.$options.name === "Children1") {
          el.$data.message += 1
        }
      })
    },
    update() {
      this.type = "父组件update"
    },
    testInit() {
      console.log("能调取到我的方法")
    },
  },

  beforeCreate() {
    // console.log("beforeCreate -> Children1El", this.$refs.Children1El)
    console.log("beforeCreate -> beforeCreate this", this.$options.data)
  },
  created() {
    // console.log("created -> created", this.$refs.Children1El)
    console.log("created -> created", this)
  },
  beforeMount() {
    // console.log("beforeMount -> beforeMount", this.$refs.Children1El)
    // console.log("beforeMount -> beforeMount", 'beforeMount')
  },

  mounted() {
    // console.log("mounted -> mounted", this.$refs.Children1El)
  },
  updated() {
    console.log("updated -> updated", "updated")
  },
  beforeDestroy() {
    console.log("beforeDestroy -> beforeDestroy", "beforeDestroy")
  },
  destroyed() {
    console.log("destroyed -> destroyed", "destroyed")
  },
}
</script>
