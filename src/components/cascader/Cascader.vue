<template>
	<div class="container" v-click-outside="close">
		<div class="title"  @click="toogle">{{result}}</div>
		<div v-if="isVisible">
			<CascaderItem :options="options"  @change="change" :value="value" :level="0"></CascaderItem>
		</div>
	</div>
</template>
<script>
import CascaderItem  from "./CascaderItem";
import cloneDeep from "lodash/cloneDeep";
export default {
	props:{
		value:{
			type: Array,
			default: ()=>[]
		},
		options:{
			type: Array,
			default: () => []
		},
		lazyload:{
			type: Function
		}
	},
	computed:{
		result(){
            return this.value.map(item=>item.label).join('/')
		}
	},
	data(){
		return {
			isVisible: false,
		
		}
	},

	components: {
		CascaderItem
	},

	
	methods:{
		toogle(){
			this.isVisible = !this.isVisible
		}	,
		close(){
			this.isVisible = false
		},

		handler(id, children){
            console.log("TCL: handler -> children", children.length)
			let cloneOptions = cloneDeep(this.options)
			let stack = [...cloneOptions]
			let index = 0;
			let current;
			while( current = stack[index++] ){
				if(current.id !== id){
					if(current.children){
						stack = stack.concat(current.children)
					}
				}else{
					break;
				}
			}
			if(current){
				current.children = children
				this.$emit('update:options',cloneOptions)
			}
		},

		change(value){
			if(this.lazyload){
				let currentItem = value[value.length - 1]
				let id = currentItem.id
				this.lazyload(id, children => {
					this.handler(id, children)
				})
			}
			this.$emit('input', value)
		}

		
	},

	directives:{
		clickOutside:{
			inserted(el, bindings ){
				el.listener = function listener(e){
					if(e.target === el  || el.contains(e.target)){
						return;
					}
					bindings.value()
				}

				document.addEventListener('click', el.listener)
			},
			unbind(el){
				document.removeEventListener('click',el.listener)
			}
		}	
	},

}
</script>
<style lang="less">
.container{
	.title{
		width: 150px;
		height: 30px;
		border: 1px solid #000;
		line-height: 30px;
	}
	
	
}
</style>