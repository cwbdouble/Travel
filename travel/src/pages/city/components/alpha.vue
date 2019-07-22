<template>
	<div>
		<div class="alphList">
			<div class="alphitem"
				 v-for="item in letters"
				 :key="item"
				 :ref="item"
				 @click="handleLetterClick"
				 @touchstart="handletouchstart"
				 @touchmove="handletouchmove"
				 @touchend="handletouchend"
				 >{{item}}</div>		
		</div>
	</div>
</template>

<script>
export default{
	name: 'alpha',
	props: {
		list: Object
	},
	data () {
		return {
			touchstatus: false,
			startY: 0,
			timer: null
		}
	},
	updated () {
		this.startY = this.$refs['A'][0].offsetTop
	},
	computed:{
		letters () {
			const letters = []
			for(let i in this.list){
				letters.push(i)
			}
			return letters
		}
	},
	methods: {

		handleLetterClick (e) {
			this.$emit('change',e.target.innerText)
			
		},
		handletouchstart () {
			this.touchstatus = true
		},
		handletouchmove (e) {
			if (this.touchstatus) {
				if(this.timer){
					clearTimeout(this.timer);
				}
				this.timer = setTimeout(()=>{
					const touchY = e.touches[0].clientY - 72
					const index = Math.floor((touchY-this.startY)/20)
					if(index>=0&&index<this.letters.length){

						this.$emit('change',this.letters[index])
					}
				},16)								
			}
		},
		handletouchend () {
			this.touchstatus = false
		}
	}	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~@style/varibles.styl'
	.alphList
		position: absolute
		display: flex
		flex-direction: column
		justify-content: center
		
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		.alphitem
			text-align: center
			height: .4rem
			color: $bgColor
</style>
