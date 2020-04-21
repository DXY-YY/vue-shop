<template>
	<div class="navimg-warpper">
		<div class="navimg-item" v-for="item of list" :key="item.id">
			<img :src="item.img" alt="">
			<p>{{item.name}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			imgNavlist:Array
		},
		watch:{
			imgNavlist(newlist){
				this.list=newlist.slice(0,8)
			}
		},
		data(){
			return{
				list:[]
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.navimg-warpper{
		width: 100%;
		height: 4rem;
		padding: 0.2rem;
		display: flex;
		flex-wrap: wrap;
		.navimg-item{
			width: 25%;
			height: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			img{
				width: 1.2rem;
				height: 1.2rem;
				margin-bottom: 0.2rem;
			}
			p{
				
			}
		}
	}
</style>
