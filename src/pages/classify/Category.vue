<template>
	<div class="category">
		<ul>
			<li v-for="item of category" :key="item.cat_id">{{item.cat_name}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			category:Array
		},
		
	}
</script>

<style lang="scss" scoped="scoped">
	.category{
		width: 100%;
		margin: 0 auto;
		ul{
			width: 1.8rem;
			background-color: #EEEEEE;
			height: 15rem;
			li{
				width: 1.8rem;
				height: 0.9rem;
				padding-left: 0.2rem;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
			}
			.on{
				background-color: white;
			}
		}
	}
</style>
