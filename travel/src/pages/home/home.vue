<template>
 <div>
   <home-header></home-header>
   <home-swiper></home-swiper>
   <home-icons></home-icons>
   <home-recommond></home-recommond>
 </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommond from './components/Recommond'
export default {
  name: 'home',
  components: {
	  HomeHeader,
	  HomeSwiper,
	  HomeIcons,
	  HomeRecommond
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
