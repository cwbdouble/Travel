<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide class="swiper" v-for="item of swiperList" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
		   
		    <div class="swiper-pagination"  slot="pagination">145654654654</div>

		  </swiper>
	</div>
	
</template>

<script>
	export default {
		name: 'HomeSwiper',
		data(){
			return {
				swiperOption:{
					pagination: {
						el:'.swiper-pagination'
					},
					loop: true
				},
				swiperList:[
					{
						id: '001',
						imgUrl: 'https://dimg04.c-ctrip.com/images/zg0a15000000ypf1tBC70.jpg'
					}, {
						id: '002',
						imgUrl: 'https://dimg04.c-ctrip.com/images/zg0p16000000yz8lsCAB4.jpg'
					}, {
						id: '003',
						imgUrl: 'https://dimg04.c-ctrip.com/images/zg0816000000z6z2vC2C2.jpg'
					}
				]
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
