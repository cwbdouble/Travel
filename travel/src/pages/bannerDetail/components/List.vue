<template>
	<div>
		<div>
			<div v-for="item of categoryList" class="list_item border-bottom">
				<div>{{item.title}}</div>
				<div v-if="item.children">
					<banner-list :categoryList="item.children"></banner-list>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'BannerList',
		props: {
			categoryList:Array
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/mixins.styl'
	@import '~@style/varibles.styl'
	.list_item
		line-height: .8rem
		padding-left: .3rem
		
		
</style>
