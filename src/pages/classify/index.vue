<template>
	<div>
		<com-header title="分类" :back="backUrl"></com-header>
		<search></search>
		<div class="contant">
			<div class="contant-left">
				<category :category="category"></category>
			</div>
			<div class="contant-right">
				<reclassify :reclassify="reclassify"></reclassify>
			</div>
		</div>
		
		<foot-nav></foot-nav>
		
		
	</div>
</template>

<script>
	import ComHeader from "../../components/Header.vue"
	import Search from "../../components/Search.vue"
	import FootNav from "../../components/FootNav.vue"
	import Category from "./Category.vue"
	import Reclassify from "./Reclassify.vue"
	export default{
		components:{
			ComHeader,
			Search,
			FootNav,
			Category,
			Reclassify
		},
		data(){
			return{
				backUrl:"",
				category:[],//一级分类数据
				reclassify:[]//二级分类数据
			}
		},
		mounted() {
			this.getCategory()
		},
		// beforeRouteEnter(to,from,next) {
		// 	next(vm=>{
		// 			vm.backUrl=from.path
		// 	})
		// },
		methods:{
			async getCategory(){
				const res=await this.axios.get("api/goods_category?type=1")
				this.category=res
				console.log(res)
				if(res.length>0){
					this.getReclassify(res[0].cat_id)
				}
			},
			async getReclassify(catid){
				const res=await this.axios.get(`api/goods_category?type=1&cat_id=${catid}`)
				this.reclassify=res
				console.log(res)
			},
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.contant{
		width: 100%;
		display: flex;
		justify-content: space-between;
		.contant-left{
			width: 1.8rem;
			background-color: #EEEEEE;
			height: 15rem;
		}
		.contant-right{
			width: 4.48rem;
			height:6rem;
		}
	}
</style>
