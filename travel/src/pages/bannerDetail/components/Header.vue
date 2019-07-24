<template>
	<div>
		
		<div class="banner" @click="handlegallary">
			<img class="bannerImg" src="https://img1.qunarzz.com/vs_ceph_vs_tts/27c4a25a-e677-4b08-b730-ed2882c6c0db.jpg_r_640x420x90_3714fe77.jpg"/>
			<div class="bannerInfo">
				<div class="info_left">大连圣亚海洋世界（AAAA景区）</div>
				
				<div class="info_icon iconfont">&#xe63a;</div>
				<div class="info_nums">9</div>
			
			</div>
		</div>
		<common-gallary :imgList="imgList" v-show="gallary_show" @close="close_gallary"></common-gallary>
	</div>
	
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	export default {
		name: 'BannerHeader',
		components:{
			CommonGallary
		},
		data () {
			return {
				gallary_show: false,
				imgList:[
					"https://img1.qunarzz.com/vs_ceph_vs_tts/27c4a25a-e677-4b08-b730-ed2882c6c0db.jpg_r_640x420x90_3714fe77.jpg","https://img1.qunarzz.com/p/tts3/1809/a9/5ffbbf987f4ecc02.jpg_r_640x420x90_1f7eba64.jpg"
				]
			}
		},
		methods:{
			handlegallary () {
				this.gallary_show = true
			},
			close_gallary () {
				this.gallary_show = false
			}
 		}		
	}	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/mixins.styl'
	.banner
		position:relative
		overflow:hidden
		height : 0
		padding-bottom:55%
		.bannerImg
			width: 100%
		.bannerInfo
			display: flex
			position:absolute
			bottom: 0
			left: 0
			right: 0
			height: .5rem
			line-height: .5rem
			color: white
			padding: 0 .2rem
			background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.info_left
				flex:1
			.info_icon
				font-size: .2rem
				margin-right: .2rem
				
</style>
