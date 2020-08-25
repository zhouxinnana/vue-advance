<!--
 * @ Author: Your name
 * @ Create Time: 2020-06-04 10:02:56
 * @ Modified by: Your name
 * @ Modified time: 2020-06-05 11:28:16
 * @ Description: lifecycle
 -->

<template>
  <div>
    <h3>{{ age }}</h3>
    <h1>ages => {{ ages }}</h1>
    <lifecycle-child @change="handlerChange"></lifecycle-child>
    <!-- <div  @click="handleClick">
      <span 
        v-for="(item,index) of 100000"  
        :key="index" :data-index="index">
        {{item}}
      </span>
    </div> -->
  </div>
</template>
<script>
import LifecycleChild from "./lifecycle-child"
export default {
  components: {
    LifecycleChild,
  },
  data() {
    return {
      age: 48,
      ages: this.age,
    }
  },
  methods: {
    handlerChange() {
      this.age++
    },
    handleClick(event) {
      console.log("handleClick -> event", event)
    },
  },
  beforeCreate() {
    console.log("lifecycle -> beforeCreate")
  },
  created() {
    console.log("lifecycle -> created")
  },
  beforeMount() {
    console.log("lifecycle -> beforeMount")
  },
  mounted() {
    console.log("lifecycle -> mounted")
    console.log("lifecycle -> ages", this.ages)
  },
  beforeUpdate() {
    console.log("lifecycle -> beforeUpdate")
  },
  updated() {
    console.log("lifecycle -> updated")
  },
}
</script>
