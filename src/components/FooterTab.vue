<template>
	<mt-tabbar v-model="selected" @click.native="tab"   fixed>
		<mt-tab-item id="tab-container1">
			<img slot="icon" src=""> 外卖
		</mt-tab-item>
		<mt-tab-item id="tab-container2">
			<img slot="icon" src=""> 订单
		</mt-tab-item>
		<mt-tab-item id="tab-container3">
			<img slot="icon" src=""> 发现
				<div @click.native="tab">
				</div>
		</mt-tab-item>
		<mt-tab-item id="tab-container4">
			<img slot="icon" src=""> 我的
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
export default {
  name: 'footertab',
  data () {
    return {
    	selected:"tab-container1"
    }
  },
  components: {
  },
  methods: {
  	tab:function(){
  		if(this.selected==""){
  			
  		}
  		console.log(this.selected)
  	}
  },  
  mounted () {
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
