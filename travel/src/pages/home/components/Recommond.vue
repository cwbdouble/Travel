<template>
	<div>
		<div class="title">热销推荐</div>
		<router-link 
			 tag="div"
			 class="recommond" 
			 v-for="(item,index) of list" 
			 :key="index"
			 :to="'/detail/'+item.id"
		>
			<img class="recommond-img" :src="item.imgUrl"/>
			<div class="recommond-text">
				<p class="recommond-title">{{item.title}}</p>
				<p class="recommond-desc">
					{{item.desc}}
				</p>
				<span class="recommond-button">查看详情</span>
			</div>
			
		</router-link>
	</div>
	
</template>

<script>
	export default {
		name: 'HomeRecommond',
		props:{
			list:Array
		}
	}	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/mixins.styl'
	.title
		margin-left: .2rem
		height: .5rem
		line-height: .5rem
	.recommond
		// background: red
		height: 2.2rem
	
		overflow: hidden
		display: flex
		border-bottom: .01rem solid #ddd
		.recommond-img
			width:2.4rem
			height:80%
			display:block
			margin:.1rem 0
			margin-left:0.1rem
			border-radius: .2rem
		.recommond-text
			flex: 1
			margin-top: .1rem
			min-width: 0
			// background: blue
			margin-left:0.2rem
			.recommond-title
				color: Black
				font-size: .4rem
				font-weight: bold
				ellipsis()
			.recommond-desc
				margin-top:.2rem
				color: #777
				ellipsis()
			.recommond-button
				margin-top: .3rem
				background: #f78900
				color: white
				display: block
				width: 1.2rem
				height: .5rem
				line-height: .5rem
				text-align: center
				border-radius: .05rem
				
			
							

</style>
