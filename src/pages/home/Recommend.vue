<template>
	<div class="recommend-warpper" ref=warpper>
		<div class="recomend-item" ref="item">
			<div class="recomend-list" v-for="item of recommendlist" :key="item.id">
				<img :src="item.img" alt="">
				<p class="name">{{item.name}}</p>
				<p class="price">￥{{item.price|formatprice}}</p>
			</div>
		</div>
	</div>
</template>

<script>

import BScroll from 'better-scroll'
import { formatprice } from "../../untils/function.js" 
	export default{
		props:{
			recommendlist:Array
		},
		mounted() {
			this.$nextTick(()=>{
				this.initscroll()
			})
		},
		filters:{
			formatprice(price){
				// console.log(price)
				return formatprice(price)
			}
		},
		methods:{
			initscroll(){
				const recommendwidth=this.recommendlist.length*2.2
				this.$refs.item.style.width=recommendwidth+"rem"
				console.log(this.$refs.item.style.width)
				if (!this.scroll) {
				      this.scroll = new BScroll(this.$refs.warpper, {
				        startX: 0,
				        click: true,
				        scrollX: true,
				        // scrollY: false,
				        eventPassthrough: 'vertical' // 忽略竖直方向的滚动
				      })
				    } else {
				      this.scroll.refresh() // 重新属性BScroll状态
				    }
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.recommend-warpper{
		width: 100%;
		height: 3.5rem;
		padding: 0.2rem;
		.recomend-item{
			height: 100%;
			display: flex;
			.recomend-list{
				width: 1.98rem;
				height: 100%;
				margin-right: 0.2rem;
				border: 1px solid #F5F5F5;
				border-radius: 0.15rem 0.15rem;
				.name{
					font-size: 0.2rem;
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					height: 0.3rem;
					line-height: 0.3rem;
					margin-left: 0.1rem;
				}
				.price{
					color: #ff5e46;
					margin-top: 0.1rem;
					font-size: 0.28px;
					font-weight: bold;
					margin-left: 0.1rem;
					font-size: 0.28rem;
				}
				img{
					width: 1.98rem;
					height: 2.08rem;
					border-radius: 0.15rem 0.15rem 0 0;
					margin-bottom: 0.2rem;
				}
			}
		}
	}
</style>
