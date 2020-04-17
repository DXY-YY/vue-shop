<template>
	<div>
		<com-header></com-header>
		<search></search>
		<index-banner></index-banner>
	</div>
</template>

<script>
	import ComHeader from "../../components/Header.vue"
	import Search from "../../components/Search.vue"
	import indexBanner from "./banner.vue"
	export default{
		components:{
			ComHeader,
			Search,
			indexBanner
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
