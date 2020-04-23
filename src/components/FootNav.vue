<template>
	<div class="finsh-nav">
		<router-link tag="div" to="/" class="footitem">
			<span class="iconfont">&#xe69b;</span>
			<p>首页</p>
		</router-link>
		<router-link tag="div" to="/classify" class="footitem">
			<span class="iconfont">&#xe6e2;</span>
			<p>分类</p>
		</router-link>
		<!-- <router-link></router-link> -->
		<div tag="div" class="footitem">
			<span class="iconfont">&#xe63b;</span>
			<p>购物车</p>
		</div>
		<div tag="div" class="footitem">
			<span class="iconfont">&#xe608;</span>
			<p>我的</p>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped="scoped">
	.finsh-nav{
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 1.3rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background-color: white;
		/* min-width: 320px;
		max-width: 750px; */
		z-index: 999;
	}
	.finsh-nav a{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.finsh-nav p{
		font-size: 0.2rem;
		font-weight: bold;
		color: #AAAAAA;
	}
	.finsh-nav span{
		font-size: 0.5rem;
		color: #AAAAAA;
		margin: 0;
		
	}
	.finsh-nav .on p{
		color: #FF5E46;
	}
	.finsh-nav .on span{
		color: #FF5E46;
	}
	
	.index-warpper{
		width: 100%;
		overflow: hidden;
		}
</style>
