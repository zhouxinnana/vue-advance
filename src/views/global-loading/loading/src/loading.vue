<template>
  <transition name="custom-loading-fade">
    <!--loading蒙版-->
    <div v-show="visible" class="custom-loading-mask">
      <!--loading中间的图标-->
      <div class="custom-loading-spinner">
        <i class="custom-spinner-icon"></i>
        <!--loading上面显示的文字-->
        <p class="custom-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data(){
		return {
      visible: false,
      text:'加载中'
    }
	}
}
</script>
<style>
.custom-loading-fade-enter-active, .custom-loading-fade-leave-active {
  transition: opacity .5s;
}
.custom-loading-fade-enter, .custom-loading-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.custom-loading-mask{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background:rgba(225, 225, 225, 0.3);
  position: absolute;
  left:0;
  top: 0;
  bottom: 0;
  right: 0;
}
.custom-loading-spinner{
  padding: 10px;

}
.custom-spinner-icon{
  font-size: 14px;;
}
.custom-loading-text{
  font-size: 14px;
}
</style>
