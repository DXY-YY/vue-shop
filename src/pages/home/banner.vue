<template>
	<swiper :options="swiperOptions">
		<swiper-slide  v-for="item of imgList" :key="item.id"><img :src="item.img" alt=""></swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
	import 'swiper/css/swiper.css'
	export default {
		components:{
			Swiper,
			SwiperSlide
		},
		data(){
			return {
				swiperOptions: {
					autoplay:true,
					loop:true,
					pagination: {
						el: '.swiper-pagination',
						
					},
				},
				
			}
		},
		props:{
			imgList:Array
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.swiper-container{
		width: 100%;
		height: 3rem;
		
	}
	.sweper-silde{
		width: 100%;
		height: 3rem;
		
	}
	img{
		width: 100%;
		height: 3rem;
	}
 /deep/.swiper-pagination-bullet-active{
		background-color: #fff;
	}
</style>
