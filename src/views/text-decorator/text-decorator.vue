<template>
  <div>
    <h1>封装使用弹窗拦截器</h1>
    <el-button type="primary" @click="hanlderClick">测试confirm</el-button>
    <el-button type="primary" @click="getData">测试loading</el-button>
    <el-button type="primary" @click="hanlderThrottle">测试防抖</el-button>
		<pre>
		
		</pre>
  </div>
</template>

<script>
import { confirm, loadings, debounce } from "@/decorator";
/**
 *  防止ESlint报错需配置 package.json
 * 	parserOptions: {
			parser: 'babel-eslint',
			ecmaFeatures: { // 支持装饰器
				legacyDecorators: true
			}
		}

		防止 vetur报错 需配置 .vscode/setting.json 或者 vscode user 设置
		"vetur.validation.script": false, // 取消vetur验证脚本
 */
export default {
  methods: {
    @confirm("这是通过装饰器添加的确认信息", "提示")
    hanlderClick() {
      console.log('success');
		},

		@loadings('加载中')
    async getData() {
      try{
        const data = await this.loadData()
        console.log("getData -> data", data)
        // 其他操作
      }catch(error){
        // 异常处理
        // Toast.fail('加载失败');
      }  
		},
		@debounce(1000,{ leading:true,trailing:false })
		hanlderThrottle(){
			console.log('触发');
		},
		
		async loadData(){
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve('xxx')
				}, 3000);
			});
		}
	
  },
};
</script>

<style></style>
