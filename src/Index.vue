<template>
	<div class="page-tabbar">
		<div class="page-wrap">
			<router-view></router-view>
		</div>
		<FooterTab></FooterTab>
	</div>
</template>

<script>
	import FooterTab from './components/FooterTab'

	export default {
		name: 'index',
		data() {
			return {}
		},
		components: {
			FooterTab
		},
		mounted() {
		},
		methods: {}

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>