<template>
	<div>
		<h1>Grandson</h1>
		<h2>{{title}}}</h2>
		<button @click="update">inject更改按钮</button>
	</div>
</template>
<script>
export default {
	inject:['title'],
	data () {
		return {
			
		}
	},
	mounted(){
		// console.log('this.tips',this.tips);
		
	},
	methods:{
		update(){
			this.title = '更改成功'
		}
	}
}
</script>