<template>
	<div>
		<template v-for="(item,index) in data">
			<li :key="`n${index}`" :item="item" v-if="!render">{{item}}</li>	
			<Item  v-else :key="index" :item="item" :render="render"></Item>
		</template>
	</div>
</template>
<script>
import Item from './item.js'
export default {
	components:{
		Item
	},
	props:{
		data:{
			type: Array
		},
		render:{
			type: Function
		}
	},

}
</script>