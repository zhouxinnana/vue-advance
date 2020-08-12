
import { MessageBox, Loading } from 'element-ui';
// export function confirm(message, title = '提示', cancelFn = () => {}) {
export function confirm(message, title = '提示', ...arg) {
	let cancelFn = () => {}
	let options = {type: 'warning'}
	arg.forEach(i => {
		if(Object.prototype.toString.call(i)=== '[object Function]'){
			cancelFn = i
		}else if(i instanceof Object){
			options = {...options,...i}
		}
	})
  return function(target, name, descriptor) {
    const originFn = descriptor.value
    descriptor.value = async function(...rest) {
      try {
        await MessageBox.confirm(message,title, options)
        originFn.apply(this, rest)
      } catch (error) {
        cancelFn && cancelFn(error)
      }
    }
  }
}

export function loadings(message = '加载中...', errorFn = function() {}) {
  return function(target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = async function(...rest) {
      const loading = Loading.service({
				message: message,
				fullscreen: true
      })
      try {
        return await fn.call(this, ...rest)
      } catch (error) {
        // 在调用失败，且用户自定义失败的回调函数时，则执行
        errorFn && errorFn.call(this, error, ...rest)
        console.error(error)
      } finally {
        loading.close()
      }
    }
  }
}