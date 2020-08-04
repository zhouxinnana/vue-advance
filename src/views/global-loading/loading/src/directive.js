import Vue from 'vue';
import LoadingComponent from './loading.vue';

const loadingConstructor = Vue.extend(LoadingComponent)
let loadingDirective  = {}
export default loadingDirective.install = Vue => {
	Vue.directive('loadings',{
		bind(el, binding){
			el.style.position = 'relative'
			const instance = new loadingConstructor({
				el: document.createElement('div'),
				data:{}
			})
			el.instance = instance
			console.log("bind -> el", el)
			el.appendChild(instance.$el)
			Vue.nextTick(() => {
        console.log("bind -> 	el.instance.visible", 	el.instance.visible)
        console.log("bind -> binding.value", binding.value)
				el.instance.visible = binding.value
			})
		},
		update (el, binding) {
      console.log("updated -> binding", binding)
			if(binding.oldValue !== binding.value){
				el.instance.visible = binding.value
				
			}
		},
		unbind (el) {
			const mask = el.instance.$el
			if(mask.parentNode){
				mask.parentNode.removeChild()
			}
			el.instance.$destroy()
			el.instance = undefined
		}
	})
}
