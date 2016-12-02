<template>
  <div id="app">
		  <router-link class="page-back" v-if="visible" :to="'/'">
		      <i class="mintui mintui-back"></i>
		  </router-link>
			<router-view></router-view>
	</div>
  </div>
</template>

<script>
import 'src/assets/font/iconfont.css';
import 'src/assets/icon/iconfont.css'
import 'src/assets/communal.css';

import FooterTab from './components/FooterTab'
export default {
  name: 'app',
	components: {
		FooterTab
	},
	computed: {
		visible() {}
	}
}
</script>

<style>

</style>
