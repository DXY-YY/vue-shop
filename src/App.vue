<!-- 项目入口 -->
<template>
  <div id="app">
   
    <router-view />
  </div>
</template>
<script>
	document.addEventListener('DOMContentLoaded', () => {
	      const html = document.querySelector('html')
	      let fontSize = window.innerWidth / 7.5
	      // fontSize = fontSize > 50 ? 50 : fontSize
	      html.style.fontSize = fontSize + 'px'
	    })
		export default{}
</script>
<style lang="scss">
@import "../左右鞋包iconfont/iconfont.css";
@import "./assets/scss/reset.scss";
</style>
