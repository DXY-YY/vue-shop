<template>
	<div class="sale-warpper">
		<div class="title-heard">
			<h1>特惠清仓</h1>
			<a href="">更多<span class="iconfont">&#xe602;</span></a>
		</div>
		<swiper :options="swiperOptions" class="sale-container">
			<swiper-slide  v-for="(item,index) of pages" :key="index" class="sale-item">
				<div class="cell" v-for="value of item" :key="value.id">
					<img v-lazy="value.img" alt="">
					<p class="name">{{value.name}}</p>
					<p class="price">{{value.price}}</p>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- div class="sale-container">
			<div class="sale-item" v-for="(item,index) of pages" :key="index">
				<div class="cell" v-for="value of item" :key="value.id">
					<img :src="value.img" alt="">
					<p class="name">{{value.name}}</p>
					<p class="price">{{value.price}}</p>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
	import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
	import 'swiper/css/swiper.css'
	export default{
		components:{
			Swiper,
			SwiperSlide
		},
		props:{
			saleList:Array
		},
		data(){
			return{
				pages:[],
				swiperOptions: {
					autoplay:true,
					loop:true,
					pagination: {
						el: '.swiper-pagination',
						
					},
				},
			}
		},
		watch:{
			saleList(newval){
				const pages=[]
				newval.forEach((value,index)=>{
					let page=Math.floor(index/2)
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(value)
					
				})
				this.pages=pages
				console.log("pages",pages)
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.sale-warpper{
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
		.sale-container{
			width: 100%;
			height: 4.44rem;
			display: flex;
			overflow: hidden;
			.sale-item{
				width: 100%;
				height: 4rem;
				display: flex;
				justify-content: space-between;
				.cell{
					width: 3.44rem;
					img{
						width:100% ;
						height: 2.65rem;
						margin-bottom: 0.2rem;
					}
					.name{
						font-size: 0.28rem;
						color: #AAAAAA;
						font-weight: bold;
						margin-left: 0.1rem;
						width: 3.44rem;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
					}
					.price{
						font-size: 0.32rem;
						color: #ff5e46;
						font-weight: bold;
						margin-top: 0.3rem;
						width: 3.44rem;
					}
				}
				
			}
			
		}
	}
	/deep/.swiper-pagination-bullet-active{
			background-color: #FF5E46;
		}
</style>
