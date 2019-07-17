<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide class="swiper" v-for="item of list" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
		   
		    <div class="swiper-pagination"  slot="pagination">145654654654</div>

		  </swiper>
	</div>
	
</template>

<script>
	export default {
		name: 'HomeSwiper',
		props: {
			list:Array
		},
		data(){
			return {
				swiperOption:{
					pagination: {
						el:'.swiper-pagination'
					},
					loop: true
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~@style/varibles.styl'
	.wrapper >>> .swiper-pagination-bullet-active
		background: $bgColor
	.wrapper
		width:100%
		overflow: hidden
		height: 0
		padding-bottom: 60%
		.swiper-img
			width 100%
		
</style>
