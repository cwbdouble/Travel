<template>
 <div class="header">
   <div class="header-left">
   		<div class="iconfont back">&#xe60e;</div>
   </div>
   <div class="header-input">
   	<span class="iconfont"></span>
  	输入城市/景点/游玩主题
   </div>
   <router-link to="/city">
   		<div class="header-right">
		   {{this.city}}
		   <span class="iconfont down">&#xe626;</span>
   		</div>
   </router-link>
   
 </div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'HomeHeader',
		computed: {
			...mapState(['city'])
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/varibles.styl'
	.header
	  display: flex
	  background: $bgColor
	  color: #fff
	  line-height: $headerHeight
	  
	  .header-left
	    width: .64rem
	    float: left
	    text-align: center
	   .back
	    font-size: 0.4rem
	  .header-input
	    flex: 1
	    background:#fff
	    border-radius:0.1rem
	    color: #aaa
	    padding-left: 0.3rem
	  .header-right
	    min-width: 1.24rem
	    padding-left: .2rem
	    padding-right:.1rem
	    float: right
	    text-align: center
	    color: #fff
	    .down
	      font-size: 0.2rem
</style>
