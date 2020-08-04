<template>
	<div>
		<h1>keeplive</h1>
		<keep-alive><component :is="view"></component></keep-alive>
		<button @click="toggle">切换{{flag}}</button>
		<Refresh></Refresh>
	</div>
</template>
<script>
import Children1 from './Children1'
import Children2 from './Children2'
import Refresh from './Refresh'
export default {
	components:{
		Children1,
		Children2,
		Refresh
	},
	data(){
		return {
			view:'Children1',
			flag: true
		
		}
	},
	created(){
		console.log("created -> keep created")
	},
	mounted	(){
		console.log("mounted -> keep mounted")
	},
	methods:{
		toggle(){
			this.flag = !this.flag
			this.view = this.flag ? 'Children1' : 'Children2'
		}
	}
	
}
</script>