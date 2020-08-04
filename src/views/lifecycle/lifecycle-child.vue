<template>
	<div>
		<h5>{{year}}年</h5>
		<el-button type="primary" @click="handlerUpdate">更新子组件数据</el-button>
	</div>
</template>
<script>
export default {
	data () {
		return {
			year:1,
			age: 18	
		}
	},
	methods: {
		handlerUpdate(){
			this.year++ 
			this.$emit('change')
		}
	},
	beforeCreate(){
      console.log("lifecycle-child -> beforeCreate")
	},
	created () {
      console.log("lifecycle-child -> created")
	},
	beforeMount(){
      console.log("lifecycle-child -> beforeMount")
	},
	mounted(){
      console.log("lifecycle-child -> mounted")
	},
	beforeUpdate () {
    console.log("lifecycle-child -> beforeUpdate")
	},
	updated (){
    console.log("lifecycle-child -> updated")
	}
	
	
}
</script>