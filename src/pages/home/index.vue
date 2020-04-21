<template>
	<div>
		<com-header></com-header>
		<search></search>
		<index-banner :imgList="imgList"></index-banner>
		<imgnav :imgNavlist="imgNavlist"></imgnav>
		<div class="cut"></div>
		<recommend :recommendlist="recommendlist"></recommend>
		<div class="cut"></div>
	</div>
</template>

<script>
	import ComHeader from "../../components/Header.vue"
	import Search from "../../components/Search.vue"
	import indexBanner from "./banner.vue"
	import Imgnav from "./ImgNav.vue"
	import Recommend from "./Recommend.vue"
	export default{
		components:{
			ComHeader,
			Search,
			indexBanner,
			Imgnav,
			Recommend
		},
		data(){
			return{
				imgList:[],
				imgNavlist:[],
				recommendlist:[]
			}
		},
		mounted() {
			this.getBanimglist(),
			this.getImgnavlist(),
			this.getRecomendlist()
		},
		methods:{
			async getBanimglist(){
				const res=await this.axios.get("api/swiper?type=1")
				console.log("imglist",res)
				this.imgList=res
			},
			async getImgnavlist(){
				const res=await this.axios.get("api/navigate?type=1")
				console.log("imgnavlist",res)
				this.imgNavlist=res
			},
			async getRecomendlist(){
				const res=await this.axios.get("api/goods/recommend?type=1")
				console.log("recommendlist",res)
				this.recommendlist=res
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cut{
		width: 100%;
		height: 0.2rem;
		background-color: #EEEEEE;
	}
</style>
