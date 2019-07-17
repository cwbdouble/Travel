<template>
 <div class="icons">
 	<swiper>
 		<swiper-slide class="swiper" v-for="(page,index) in pages" :key="index">
		 	<div class="icon" v-for="item in page">
		 		<div class="icon-r">
		 			<img class="icon-img" :src="item.imgUrl">
		 		</div>		
		 		<p class="icon-desc">{{item.desc}}</p>
		 	</div>
	 	</swiper-slide>
 	</swiper>
 </div>
</template>

<script>
export default{
	name:"HomeIcons",
	props:{
		list:Array
	},
	computed: {
		pages() {
			const pages= []
			this.list.forEach((item,index) => {
				const page = Math.floor(index / 8)
				if (!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~@style/mixins.styl'
	.icons >>> .swiper-container
		width: 100%
		height: 0
		padding-bottom: 50%
	
		
	.icon
		postiton: relative
		overflow: hidden
		height: 1.875rem
		float: left
		width: 25%
		
		.icon-r
			postiton: absolute
			top:0
			right:0
			left:0
			bottom:0
			width: 100%
			height: 80%
			box-sizing: border-box
			padding: .1rem 
			
			.icon-img
				display: block
				height:100%
				margin:0 auto
				
		.icon-desc
			line-hight: .55rem
			text-align: center
			ellipsis()
				
</style>
