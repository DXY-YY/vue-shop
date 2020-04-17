<template>
	<div class="search-wiper">
		<div class="search">
			<span class="iconfont">&#xe669;</span>
			请输入搜索内容
		</div>
	</div>
</template>

<script>
	export default{}
</script>

<style lang="scss" scoped>
	.search-wiper{
		width: 100%;
		background-color: #ff5e46;
		height: 0.9rem;
		padding: 0 0.2rem;
		display: flex;
		align-items: center;
		.search{
			width: 100%;
			height: 0.6rem;
			border-radius: 0.3rem;
			background-color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #aaaaaa;
		}
		.iconfont{
			font-size: 0.28rem;
		}
	}
</style>
