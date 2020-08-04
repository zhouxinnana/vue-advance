<template>
	<div>
			<h1>封装loading插件，包含指令与js调用</h1></h1>
	
	<!-- <div class="element-loading-waper" v-loading.fullscreen="loading"></div> -->
	<div class="element-loading-waper" v-loadings="loading"></div>
	{{loading}}
	<el-button type="primary" @click="loading = !loading">切换</el-button>
	</div>
</template>

<script>
export default {
	data () {
		return {
			loading: false
		}
	},
	mounted(){
		console.log();
		this.$loadings()
		setTimeout(() => {
			this.$loadings().close()
		},1000)
	}
}
</script>

<style scoped>
.element-loading-waper{
	width: 500px;
	height: 500px;
	border:1px solid red;
}
</style>