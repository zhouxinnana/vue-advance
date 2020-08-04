<template>
	<li>
		<button @click="onClick">点击</button>
	</li>
</template>

<script>

export default {
	
	props:['item'],
	methods:{
		onClick(){
			this.$emit('change',this.item)
		}
	}
}
</script>