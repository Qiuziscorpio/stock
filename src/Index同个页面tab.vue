<template>
  	<div class="page-tabbar">
		<div class="page-wrap">
		      <mt-tab-container  class="page-tabbar-container"  v-model="selected" v-on:tab="show($event)">
		        <mt-tab-container-item id="tab-container1">
		          <mt-cell v-for="n in 70" :title="'餐厅 ' + n" />
		        </mt-tab-container-item>
		        <mt-tab-container-item id="tab-container2">
		          <mt-cell v-for="n in 5" :title="'订单 ' + n" />
		        </mt-tab-container-item>
		        <mt-tab-container-item id="tab-container3">
		          <mt-cell v-for="n in 7" :title="'发现 ' + n" />
		        </mt-tab-container-item>
		        <mt-tab-container-item id="tab-container4">
			        <div class="page-part">
			          <router-link to="/Hello">
			            <mt-button type="danger" size="large">退出</mt-button>
			          </router-link>
			            <mt-cell v-for="n in 89" :title="'我eeeeeeeeeee的 ' + n" />
			        </div>
		        </mt-tab-container-item>
		      </mt-tab-container>				
		</div>
		<FooterTab></FooterTab>
	</div>
</template>

<script>

import FooterTab from './components/FooterTab'

export default {
	name: 'index',
	data() {
		return {
			selected: 'tab-container1'
		};
	},
	methods: {
		show:function(val){
			this.selected=val
		}
	},
  	components: {
  		FooterTab
  	},	
  	mounted () {
  		this.$root.$on('tab',this.show)
  	}   	
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  
  
</style>
