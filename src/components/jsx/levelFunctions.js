export default {
  name: "item",
  props: ["t"],
  render() {
    let tag = "H" + this.t
    return <tag>{this.$slots.default}</tag>
    // return
    // h('h1', {
    // 	on:{
    // 		click(){
    // 			alert(1)
    // 		}
    // 	}
    // }, '你好')
  },
}
