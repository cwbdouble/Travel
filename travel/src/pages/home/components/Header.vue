<template>
 <div class="header">
   <div class="header-left">
   		<div class="iconfont back">&#xe60e;</div>
   </div>
   <div class="header-input">
   	<span class="iconfont"></span>
  	输入城市/景点/游玩主题
   </div>
   <div class="header-right">
   城市
   <span class="iconfont down">&#xe626;</span>
   </div>
 </div>
</template>

<script>
	export default {
		name: 'HomeHeader'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/varibles.styl'
	.header
	  display: flex
	  background: $bgColor
	  color: #fff
	  line-height: .86rem
	  
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
	    width: 1.24rem
	    float: right
	    text-align: center
	    .down
	      font-size: 0.2rem
</style>
