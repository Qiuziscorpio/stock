<template>
	<div class="page-swipe">
		<mt-swipe :auto="4000">
			<mt-swipe-item class="slide1">
				<img src="../../assets/img/browse/1.png" />
			</mt-swipe-item>
			<mt-swipe-item class="slide2">
				<img src="../../assets/img/browse/2.png" />
			</mt-swipe-item>
			<mt-swipe-item class="slide3">
				<img src="../../assets/img/browse/3.png" />
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		name: 'carousel',
		data() {
			return {}
		},
		methods: {},
		components: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 .mint-swipe {
        height: 150px;
        color: #fff;
        font-size: 30px;
        text-align: center;
      }
      .mint-swipe-item {
        line-height: 200px;
      }
	 .mint-swipe img{
	 	height: 100%;
	 }
</style>