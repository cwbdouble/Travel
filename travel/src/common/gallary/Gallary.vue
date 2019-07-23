<template>
	<div class="gallary">
		<div class="img_swiper" @click="handleClick">
			<swiper :options="swiperOption">
			    <!-- slides -->
			    <swiper-slide v-for="(item,index) of imgList" :key="index">
			    	<img class="swiper-img" :src="item" />
			    </swiper-slide>

			    <div class="swiper-pagination pagin"  slot="pagination">111</div>
	
			  </swiper>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'CommentGallary',
		props: {
			imgList:Array
		},
		data () {
			return {
				swiperOption:{
					pagination: {
						el:'.swiper-pagination'
					},
  					paginationType:'fraction',
  					loop: true,
					observeParents: true,
					observer: true
				}
			}
			
		},
		methods: {
			handleClick () {
				this.$emit('close')
			}
		}	
	}	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/mixins.styl'
	.gallary >>> .swiper-container
		overflow: inherit
		z-index: 2
	.gallary
		z-index: 2
		display: flex
		flex-direction: column
		justify-content: center
		position: fixed
		background: black
		top: 0
		left: 0
		right: 0
		bottom: 0
		
		.img_swiper
			width: 100%
			height: 0
			padding-bottom: 100%
			.pagin
				color: white
				width: 100%
			.swiper-img
				width:100%
			
</style>
