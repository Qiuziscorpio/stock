<template>
	<div>
		<mt-header fixed title="固定在顶部">
			<router-link :to="{ name: 'brand'}" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="page-header-main">
			这里是详情页
		</div>
	</div>
</template>

<script>
	export default {
		name: 'details',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
			}
		},
		components: {},
		methods: {},
		mounted() {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>