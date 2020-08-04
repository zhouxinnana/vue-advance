import Loading from './src/index';
import directives from './src/directive'

export default {
	install(Vue) {
		Vue.use(directives)
		Vue.prototype.$loadings = Loading
	}
}
