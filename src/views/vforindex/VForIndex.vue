<template>
	<div>
		<ul v-for="(item,index) in list" :key="item.name">
			<VForIndexItem @change="changeHandler($event,index)"></VForIndexItem>
		</ul>
	</div>
</template>


<script>
import VForIndexItem from './VForIndexItem.vue';
export default {
	components:{
		VForIndexItem
	},
	methods:{
		changeHandler(row,index){
			console.log("changeHandler -> index", index)
			console.log("changeHandler -> row", row)
		}
	},
	data () {
		return {
			list:[
				{
					name:'zx'
				},
				{
					name:'qq'
				},
			]
		}
	}
}
</script>