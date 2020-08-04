<template>
	<div>
		<h1>refresh</h1>
		<h2>{{msg}}</h2>
		<button @click="msg='updated'">手动改变值</button>
		<button @click="fresh">强制刷新</button>
		<button @click="updateArr">更改数组</button>
	<ul>
		<li v-for="item in arr" :key="item.value">{{item.name}}</li>
	</ul>
	</div>
</template>
<script>
export default {
	data () {
		return {
			msg:'default',
			arr:[{name:'zx',value:1},{name:'ww',value:2},{name:'qq',value:3}]
		}
	},
	methods:{
		fresh(){
			this.$forceUpdate()
		},
		updateArr(){
			// this.arr[2] = {name:'ppp',value:7}
			// this.$set(this.arr[2],'name','ppp')
			this.$update(this.arr, 2, {name:'ppp',value:7})
		}
	
	}
}
</script>