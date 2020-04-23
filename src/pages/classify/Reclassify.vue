<template>
	<div>
		<ul>
			<li v-for="item of reclassify" :key="item.cat_id">
				<img :src="item.img" alt="">
				<p>{{item.cat_name}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			reclassify:Array
		}
	}
</script>

<style lang="scss" scoped="scoped">
	div{
		width: 4.48rem;
		height: 4.98rem;
		position: absolute;
		right: -5rem;
		top: 0.7rem;
		background-color: white;
		ul{
			width: 4.48rem;
			height:6rem;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			background-color: white;
			li{
				width: 1.2rem;
				height: 1.2rem;
				img{
					width: 1rem;
					height: 0.7rem;
				}
				p{
					font-size: 0.28rem;
					color: #666666;
				}
			}
		}
	}
</style>
