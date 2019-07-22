<template>
	<div>
		<city-header></city-header>
		<city-list 
			:hot="hotCities" 
			:cities="cities"
			:letter="letter"
			></city-list>
		<alpha :list="cities" @change="handleAlpha"></alpha>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/cityList'
import alpha from './components/alpha'
export default{
	name:'city',
	components:{
		CityHeader,
		CityList,
		alpha
	},
	data () {
		return {
			hotCities: [],
			cities: {},
			letter: ''
		}
	},
	methods:{
		getCityInfo () {
			axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc (res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.hotCities = data.hotCities
				this.cities = data.cities

			}	
		},
		handleAlpha (e) {
			this.letter = e
			
		}
	},
	mounted () {
		this.getCityInfo()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
