<template>
	<div class="new-warpper">
		<div class="title-heard">
			<h1>新品优选</h1>
			<a href="">更多<span class="iconfont">&#xe602;</span></a>
		</div>
		<div class="new-list">
			<div class="item" v-for="item of list" :key="item.id">
				<a href=""><img :src="item.img" alt=""></a>
				<p class="name">{{item.name}}</p>
				<p class="price">￥{{item.price}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			newList: Array
		},
		watch: {
			newList(newlist) {
				this.list = newlist.slice(0, 3)
				console.log( "list",this.newList)
			}
		},
		data() {
			return {
				list: []
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.new-warpper {
		width: 100%;
		padding: 0.2rem;
		box-sizing: border-box;

		.title-heard {
			width: 100%;
			display: flex;
			justify-content: space-between;

			h1 {
				font-size: 0.32rem;
				width: 1.8rem;
				text-align: center;
				border-left: 2px solid orangered;
				margin: 0.2rem 0;
			}

			a {
				font-size: 0.3rem;
				margin: 0.2rem 0;
				color: #AAAAAA;

				span {
					margin-left: 0.1rem;
					font-size: 0.32rem;
				}
			}
		}
		.new-list {
			display: flex;
			justify-content: space-between;
			.item {
				width: 2.23rem;
				height: 3.5rem;
				border: 1px solid #F5F5F5;
				border-radius: 0.15rem 0.15rem;

				img {
					width: 2.22rem;
					height: 2.08rem;
					border-radius: 0.15rem 0.15rem 0 0;
					margin-bottom: 0.2rem;
				}
				.name {
					font-size: 0.28rem;
					color: #AAAAAA;
					font-weight: bold;
					margin-left: 0.1rem;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				.price {
					font-size: 0.32rem;
					color: #ff5e46;
					font-weight: bold;
					margin-top: 0.3rem;
					width: 3.44rem;
				}
			}
		}
	}
</style>
