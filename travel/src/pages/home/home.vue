<template>
 <div>
   <home-header></home-header>
   <home-swiper></home-swiper>
   <home-icons></home-icons>
 </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
export default {
  name: 'home',
  components: {
	  HomeHeader,
	  HomeSwiper,
	  HomeIcons
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
