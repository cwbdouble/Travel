<template>
	<div>
		<banner-header :sightName="sightName" :bannerImg="bannerImg"></banner-header>
		<header-top></header-top>
		<banner-list :categoryList="categoryList"></banner-list>
	</div>
</template>

<script>
	import BannerHeader from './components/Header'
	import HeaderTop from './components/HeaderTop'
	import BannerList from './components/List'
	import axios from 'axios'
	export default {
		name: 'BannerDetail',
		components:{
			BannerHeader,
			HeaderTop,
			BannerList
		},
		data () {
			return {
				sightName : '',
				bannerImg : '',
				gallaryImgs : [],
				categoryList : []
			}
		},
		methods: {
			getDetialInfo () {
				axios.get('/api/detail.json',{
					params: {
						id: this.$route.params.id
					}
				}).then(this.handleSuccess)
			},
			handleSuccess (res) {
				res = res.data
				if(res.ret && res.data){
					const data = res.data
				
					this.sightName = data.sightName
					this.bannerImg = data.bannerImg
					this.gallaryImgs = data.gallaryImgs
					this.categoryList = data.categoryList
				}

			}
		},
		mounted () {
			this.getDetialInfo()
		}		
	}	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/mixins.styl'
</style>
