<template>
	<div>
      <mt-header fixed >
        <router-link to="/" slot="left">
          <mt-button >
          	<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
          </mt-button>
        </router-link>
        <mt-button slot="right">
        	 <i class="icon iconfont icon-saoyisao"></i>
        </mt-button>
      </mt-header>		
		<div class="page-header-main">
			<carousel></carousel>
			<sliding></sliding>
		</div>
	</div>
</template>

<script>
import carousel from 'components/childcomponents/Carousel.vue'
import sliding from 'components/childcomponents/Sliding.vue'

	export default {
		name: 'stroll',
		data() {
			return {
			}
		},
		components: {
			carousel,
			sliding
		
		},
		methods: {},
		mounted() {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>