<template>
	<div>
		<h1>二次封装element弹窗</h1>
		<custom-dialog title="添加弹窗" :visible="true">
			<div>我是内容</div>
			<div>我是内容</div>
			<div>我是内容</div>
			<div>我是内容</div>
			<template #footer>
				<el-button type="primary">审核</el-button>
			</template>
		</custom-dialog>
		<h2>插槽todo组件</h2>
		<todo :todos="todoList">
			<template v-slot:todo="{ todo }">
				<span v-if="todo.isComplete">✓</span>
				{{ todo.text }}
			</template>
		</todo>
	</div>
</template>
<script>
import todo from './todo.vue';
import CustomDialog from './custom-dialog.vue';
export default {
	data () {
		return {
			visibles: true,
			todoList:[{
				text:'test',
				isComplete:false
			},
			{
				text:'test1',
				isComplete:true
			}],
		}
	},
	components: {
		todo,
		CustomDialog
	}
}
</script>