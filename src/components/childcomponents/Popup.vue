<template>
	<div>
		<mt-popup v-model="popupVisible2" position="top" class="mint-popup-2" :modal="false" v-on:popup="show($event)">
			<p>{{popuptext}}</p>
		</mt-popup>
	</div>
</template>

<script>
	export default {
		name: 'popup',
		data() {
			return {
				popuptext: "",
				popupVisible2: false
			};
		},
		watch: {
			popupVisible2(val) {
				if(val) {
					setTimeout(() => {
						this.popupVisible2 = false;
					}, 2000);
				}
			}
		},
		methods: {
			show:function(val){
				if(val){
					this.popuptext=val
					this.popupVisible2=true
				}
			}			
		},		
		mounted (){
			//登陆验证
			this.$root.$on('popup',this.show)		
		}
	};
</script>

<style scoped>
	.mint-popup-2 {
		width: 100%;
		height: 50px;
		text-align: center;
		background-color: rgba(0, 0, 0, .7);
		backface-visibility: hidden;
	}
	
	.mint-popup-2 p {
		line-height: 50px;
		color: #fff;
	}
</style>