<template>
	<div>
	  	<mt-header fixed title="固定在顶部">
	    <router-link to="/" slot="left">
	      	<mt-button icon="back">返回</mt-button>
	    </router-link>
	  	</mt-header>	
	  	<div class="page-header-main">
	    	<p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>
	    	<p class="page-loadmore-desc">此例请使用手机查看</p>
	  	</div>
  	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
