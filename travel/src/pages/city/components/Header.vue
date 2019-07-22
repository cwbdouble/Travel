<template>
	<div class="header">
		
		
		<router-link to="/">
			<div class="header-left">
				<div class="iconfont back icon">&#xe60e;</div>
			</div>
		</router-link>
   			

   		
   		<input class="header-input" type="text" placeholder="请输入城市名或拼音"/>
   		
	</div>
</template>

<script>
	export default {
		name: 'CityHeader'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/varibles.styl'
	.header
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
			height: 80%
			// background: red
			margin: auto 0
			margin-right:.3rem 
			text-align:center
			color: #222
			border-radius: .1rem
			
			
</style>
