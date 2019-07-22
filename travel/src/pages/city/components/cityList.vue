<template>
	<div class="cityList" ref="wrapper">
		<div>
			<div class="cityItem">当前城市</div>
			<div class="buttonList">
				<div class="buttonWrapper">
					<div class="itemButton">{{this.city}}</div>
				</div>
			</div>
			
			<div class="cityItem">热门城市</div>
				<div class="buttonList">
					<div class="buttonWrapper" 
						 v-for="item of hot"
						 @click="handleClickCity(item.name)"
					>
						<div class="itemButton">{{item.name}}</div>
					</div>
				</div>
			<div class="area" 
				 v-for="(item,key) in cities" 
				 :key="key" 
				 :ref="key"

				 >
				<div class="cityItem">{{key}}</div>
				<div class="itemList" v-for="item_mi in item" 				  @click="handleClickCity(item_mi.name)">
					<div class="iii">{{item_mi.name}}</div>
					
				</div>
			</div>	
			
		</div>
		
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState } from 'vuex'
	export default {
		name: 'CityList',
		props: {
			hot: Array,
			cities: Object,
			letter: String
		},
		computed: {
			...mapState(['city'])
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.wrapper)

		},
		methods: {			
			handleClickCity (city) {
				this.$store.dispatch('changeCity', city)
				this.$router.push('/')
			}

		},
		watch: {
			letter () {
				if(this.letter){
					const element = this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)
				}
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/varibles.styl'
	.cityList
		position: absolute
		top: $headerHeight
		left: 0
		right: 0
		bottom: 0rem
		// background: red
		overflow: hidden

		
		.cityItem
			background: #ebebeb
			height:.6rem
			padding-left:.2rem
			
			line-height: .6rem
		.buttonList
			padding-right: .3rem
			overflow: hidden
			.buttonWrapper
				width: 33.3%
				
				float: left
			.itemButton
				
				
				height:.7rem
				line-height: .7rem
				
				background:white
				border: .01rem solid #ccc
				border-radius: .1rem
				text-align: center
				margin:.1rem
				
		.itemList
			padding-right: .2rem
			padding-left: .2rem
			overflow: hidden
			
			.iii
				
				line-height: .8rem
				border-bottom: .01rem solid #ddd
				font-size: .31rem
				
					
</style>
