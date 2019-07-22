<template>
 <div>
   <home-header></home-header>
   <home-swiper :list="swiperList"></home-swiper>
   <home-icons :list="iconList"></home-icons>
   <home-recommond :list="recommendList"></home-recommond>
 </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommond from './components/Recommond'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
	  HomeHeader,
	  HomeSwiper,
	  HomeIcons,
	  HomeRecommond
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      lastCity: ''
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?'+ this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
      }
    }
   
  },
   mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
  },
  activated () {
    if (this.lastCity != this.city) {
      this.getHomeInfo()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
