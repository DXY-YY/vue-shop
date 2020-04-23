<template>
	<div class="toyou-warpper">
		<div class="title-heard">
			<h1>为你推荐</h1>
			<a href="">更多<span class="iconfont">&#xe602;</span></a>
		</div>
		<div class="goods-list">
			<div class="goods-item" v-for="item of toYouList" :key="item.id">
				<a href=""><img :src="item.img" alt=""></a>
				<p class="name">{{item.name}}</p>
				<p class="price">￥{{item.price}}<b>￥{{item.market_price}}</b></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			toYouList:Array
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.toyou-warpper{
		width: 100%;
		padding: 0.2rem;
		box-sizing: border-box;
		.title-heard{
			width: 100%;
			display: flex;
			justify-content: space-between;
			h1{
				font-size:0.32rem;
				width: 1.8rem;
				text-align: center;
				border-left: 2px solid orangered;
				margin: 0.2rem 0;
			}
			a{
				font-size: 0.3rem;
				margin: 0.2rem 0;
				color: #AAAAAA;
				span{
					margin-left: 0.1rem;
					font-size: 0.32rem;
				}
			}
		}
		.goods-list{
			display:flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.goods-item{
				width: 3.44rem;
				height:4rem;
				border: 1px solid #F5F5F5;
				border-radius: 0.15rem 0.15rem;
				margin-top: 0.2rem;
				position: relative;
				img{
					width: 3.44rem;
					height: 2.64rem;
					border-radius: 0.15rem 0.15rem 0 0;
					margin-bottom: 0.2rem;
				}
				.name{
					font-size: 0.28rem;
					color: #AAAAAA;
					font-weight: bold;
					margin-left: 0.1rem;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				.price{
					font-size: 0.32rem;
					color: #ff5e46;
					font-weight: bold;
					margin-top: 0.3rem;
					b{
						color: #AAAAAA;
						margin-left: 0.2rem;
						font-size: 0.28rem;
						text-decoration: line-through;
					}
				}
			}
		}
	}	
</style>
