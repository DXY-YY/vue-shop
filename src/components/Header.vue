<template>
	<div class="header">
		<span class="iconfont" v-if="back" @click="toback">&#xe614;</span>
		<span class="title">{{title}}</span>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:"QianQian左右鞋包"
			},
			back:{
				type:String,
				default:''
			}
		},
		methods:{
			toback(){
				if(this.back===''){
					this.$router.push('/')
				}else{
					this.$router.push(this.back)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		width: 100%;
		height: 0.9rem;
		background-color: #ff5e46;
		text-align: center;
		font-size: 0.36rem;
		position: relative;
		line-height: 0.9rem;
		.title{
			color: #FFFFFF;
		}
		.iconfont{
			position: absolute;
			left: 0.2rem;
			color: #FFFFFF;
		}
	}
</style>
