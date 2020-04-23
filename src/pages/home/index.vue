<template>
	<div>
		<com-header></com-header>
		<search></search>
		<index-banner :imgList="imgList"></index-banner>
		<imgnav :imgNavlist="imgNavlist"></imgnav>
		<div class="cut"></div>
		<recommend :recommendlist="recommendlist"></recommend>
		<div class="cut"></div>
		<sale :saleList="saleList"></sale>
		<div class="cut"></div>
		<new :newList="newList"></new>
		<div class="cut"></div>
		<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="50">
			<to-you :toYouList="toYouList"></to-you>
		</div>
		<foot-nav></foot-nav>
	</div>
</template>

<script>
	import ComHeader from "../../components/Header.vue"
	import Search from "../../components/Search.vue"
	import indexBanner from "./banner.vue"
	import Imgnav from "./ImgNav.vue"
	import Recommend from "./Recommend.vue"
	import Sale from "./Sale.vue"
	import New from "./New.vue"
	import ToYou from "./Toyou.vue"
	import { Storage } from "../../untils/storage.js"
	import infiniteScroll from "vue-infinite-scroll"
	import FootNav from "../../components/FootNav.vue"
	export default{
		directives: { infiniteScroll },
		components:{
			ComHeader,
			Search,
			indexBanner,
			Imgnav,
			Recommend,
			Sale,
			New,
			ToYou,
			FootNav
		},
		data(){
			return{
				imgList:[],
				imgNavlist:[],
				recommendlist:[],
				saleList:[],
				newList:[],
				toYouList:[],
				page:1,
				count:8,
				totalpage:0,
				busy:false
			}
		},
		mounted() {
			this.getBanimglist(),
			this.getImgnavlist(),
			this.getRecomendlist(),
			this.getSale(),
			this.getNew(),
			this.getToyou()
			
		},
		methods:{
			async getBanimglist(){
				const banimg=Storage.getitem("banimg")
				if(banimg){
					this.imgList=banimg
					console.log("iii",this.imgList)
				}else{
					const res=await this.axios.get("api/swiper?type=1")
					let imgList=res.map(item=>item.img)
					this.imgList=imgList
					console.log(this.imgList)
					Storage.setitem("banimg",imgList)
				}
			},
			async getImgnavlist(){
				const navimglist=Storage.getitem("navimglist")
				if(navimglist){
					this.imgNavlist=navimglist
				}else{
					const res=await this.axios.get("api/navigate?type=1")
					this.imgNavlist=res
					Storage.setitem("navimglist",res)
				}
			},
			async getRecomendlist(){
				const res=await this.axios.get("api/goods/recommend?type=1")
				this.recommendlist=res
			},
			async getSale(){
				const res=await this.axios.get("api/goods/sales?type=1")
				this.saleList=res
			},
			async getNew(){
				const res=await this.axios.get("api/goods/recommend?type=1")
				this.newList=res
			},
			async getToyou(){
				const res=await this.axios.get(`api/goods_list?type=1&count=${this.count}&page=${this.page}`)
				let goods=this.toYouList.concat(res.goods)
				let total=res.total
				this.toYouList=goods
				if(this.page===1){
					this.totalpage=Math.ceil(total/this.count)
				}
				
			},
			loadMore(){
				this.page++
				this.busy=true
				if (this.page<=this.totalpage||this.totalpage===0){
					this.getToyou()
					this.busy=false
				}
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
