<template>
	<swiper :options="swiperOptions">
		<swiper-slide  v-for="item of imgList" :key="item"><img :src="item" alt=""></swiper-slide>
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
				imgList:[
					"http://contentcms-bj.cdn.bcebos.com/cmspic/cc35e284c0a4ba68804a07f4fc7ef0bd.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362",
					"http://contentcms-bj.cdn.bcebos.com/cmspic/5c45f5dceee56da8a7a06341c51767b5.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362",
					"http://contentcms-bj.cdn.bcebos.com/cmspic/53f2faaa69c72eca3c22de6d21c24528.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362"
				]
			}
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
