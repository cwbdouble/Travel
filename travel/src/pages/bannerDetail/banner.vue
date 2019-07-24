<template>
	<div>
		<banner-header></banner-header>
		<header-top></header-top>
	</div>
</template>

<script>
	import BannerHeader from './components/Header'
	import HeaderTop from './components/HeaderTop'
	export default {
		name: 'BannerDetail',
		components:{
			BannerHeader,
			HeaderTop
		}		
	}	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/mixins.styl'
</style>
