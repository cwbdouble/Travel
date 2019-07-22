<template>
	<div class="header">
		
		
		<router-link to="/">
			<div class="header-left">
				<div class="iconfont back icon">&#xe60e;</div>
			</div>
		</router-link>
   			

   		
   		<input class="header-input" 
   			   type="text" 
   			   placeholder="请输入城市名或拼音"
   			   v-model="keyword"
   		/>
   		<div class="search_city" ref="wrapper" v-show="keyword">
   			<ul>
   				<li class="search_item border-bottom" 
   					v-for="item of list" 
   					:key="item.id"
   					@click="handleClickCity(item.name)"
   				>{{item.name}}</li>
   				<li class="search_item border-bottom" v-show="hasNodata">没有找到匹配城市</li>
   			</ul>
   		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'CityHeader',
		props:{
			cities:Object
		},
		data () {
			return {
				keyword:'',
				list:[],
				timer:null,
				wrapper:''
			}
		},
		methods: {
			handleClickCity (city) {
				this.$store.dispatch('changeCity', city)
				this.$router.push('/')
			}
		},
		computed: {
			hasNodata () {
				return !this.list.length
			}
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		watch: {
			keyword () {
				if(this.timer){
					clearTimeout(this.timer);
				}
				if(!this.keyword){
					this.list=[]
					return
				}
				this.timer = setTimeout(()=>{
					const result = []
					for(let i in this.cities){
						this.cities[i].forEach((value)=>{
							if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
								result.push(value)
							}
						})
					}
					this.list = result
				},30);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '~@style/varibles.styl'
	.header
		background: $bgColor
		height: $headerHeight
		display: flex
		.search_city
			z-index: 1
			background: #fff
			position: absolute
			top: $headerHeight
			left: 0
			right: 0
			bottom: 0
			overflow: hidden
			.search_item
				font-size: .35rem
				padding-left: .6rem
				height:.67rem
				line-height:.67rem
				color: #666
				background: #eee
				
						
				
		.header-left
			width: .64rem
			float: left
			text-align: center
			line-height: $headerHeight
			color: #fff
			
		.header-input
			flex: 1
			height: 80%
			// background: red
			margin: auto 0
			margin-right:.3rem 
			text-align:center
			color: #222
			border-radius: .1rem
			
			
			
</style>
