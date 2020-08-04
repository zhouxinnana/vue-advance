<template>
	
	<div>
		<h1>
		指令
	</h1>
		<div class="box-waper" v-fixed="{'color': '#ccc'}">
			asdasd
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			msg:'11'
		}
	},
	directives:{
		fixed:{
			bind:function(el, binding, vnode, oldVnode){
            console.log("bind", 'bind')
				// binding.
				// el.style.binding.value.coloe
			el.style.color = binding.value.color
            // console.log("oldVnode", oldVnode)
            // console.log("vnode", vnode)
            console.log("binding.arg", binding.arg)
            // console.log("el", el)

			},
			inserted:function(){
            	console.log("inserted", 'inserted')
			},
			update:function(){
            	console.log("update", 'update')

			},
			componentUpdated:function(){
            	console.log("componentUpdated", 'componentUpdated')
			},
			unbind:function(){
            	console.log("unbind", 'unbind')
			}

		}
	},
	beforeRouteLeave(to,form,next){
        console.log("beforeRouteLeave -> beforeRouteLeave", 'beforeRouteLeave')
		next()
	},
	beforeRouteUpdate(to, from, next){
		 console.log("beforeRouteUpdate -> beforeRouteUpdate", 'beforeRouteUpdate')
		next()
	},
	beforeRouteEnter(to,form,next){
		console.log("beforeRouteEnter -> beforeRouteEnter", 'beforeRouteEnter')
		next()
	}
}
</script>
<style lang="css">
.box-waper{
	width: 100px;
	height: 100px;
	border: 1px solid red;
	margin: 0 auto;
}
</style>