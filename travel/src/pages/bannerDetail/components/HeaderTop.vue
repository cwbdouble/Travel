<template>
	<div>
		<router-link to="/" class="header-abs" v-show="!showHeader">
			<div class="iconfont absback">&#xe60e;</div>
		</router-link>
		<div class="header-fixed" v-show="showHeader" :style="opacityStyle">
			<router-link to="/">
				<div class="header-left">
					<div class="iconfont back icon">&#xe60e;</div>
				</div>
			</router-link>
	   		<div class="header-input">
	   			城市详情
	   		</div>	

	   		
	   		
		</div>

	</div>	
</template>

<script>
	export default {
		name: 'HeaderTop',
		data () {
			return {
				showHeader: false,
				opacityStyle: {
					opacity: 0
				}
			}
		},
		methods: {
			handleScroll () {
				const top = document.documentElement.scrollTop
				if(top>60){
					let opacity = top/140
					opacity = opacity > 1 ? 1 : opacity
					this.opacityStyle = {
						opacity : opacity
					}
					this.showHeader = true
				}else{
					this.showHeader = false
				}
			}
		},
		activated () {
			window.addEventListener('scroll', this.handleScroll)
		},
		//对全局事件进行解除绑定
		deactivated () {
			window.removeEventListener('scroll', this.handleScroll)
		}
	}	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/mixins.styl'
	@import '~@style/varibles.styl'
	.header-abs
		position: absolute
		width: 1rem
		height: 1rem
		background: rgba(0, 0, 0, .7)
		top: .3rem
		left: .2rem
		text-align:center
		line-height: 1rem
		color: rgba(255, 255, 255, .7)
		border-radius:.5rem
		.absback
			font-size: .5rem
	.header-fixed
		position: fixed
		top: 0
		width: 100%
		background: $bgColor
		height: $headerHeight
		display: flex
		.header-left
			width: .64rem
			float: left
			text-align: center
			line-height: $headerHeight
			color: #fff
			
		.header-input
			flex: 1
			height: $headerHeight
			// background: red
			line-height: $headerHeight 
			margin: auto 0
			margin-right:.3rem 
			text-align:center
			color: #fff
			border-radius: .1rem
			font-size:.36rem	
</style>
