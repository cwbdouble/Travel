<template>
	<div>
		<banner-header></banner-header>
	</div>
</template>

<script>
	import BannerHeader from './components/Header'
	export default {
		name: 'BannerDetail',
		components:{
			BannerHeader
		}		
	}	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/mixins.styl'
</style>
