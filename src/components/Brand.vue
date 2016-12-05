<template>
	<div class="page-header-main">
	<div class="brand">
		<div class="brand-tit">
			每周 精选
		</div>
		<div class="brand-list" v-for="data in branddata">
			<img  v-bind:src="data.img" class="img-list" />
			<span class="collection">
				<i class="icon iconfont icon-aixin" v-bind:class="{ 'selected': data.state }"></i>
				{{data.num}}
			</span>
		</div>
	</div>
	</div>
</template>

<script>
import imglist from '../assets/img/browse/banner.jpg'
export default {
  name: 'brand',
  data () {
    return {
    		branddata:[
    			{
    				"img":imglist,
    				"num":"90887",
    				"state":true
    			},
    			{
    				"img":imglist,
    				"num":"90887",
    				"state":false
    			}, 
    			{
    				"img":imglist,
    				"num":"90887",
    				"state":false
    			}      			
    		]
    }
  },
  components: {
  },
  methods: {
  },  
  mounted () {   
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.page-header-main{
		margin-top: 0;
	}
	.brand{
		padding: 0.2rem;
		background: #fff;
	}
	.brand-list{
		height: 200px;
		overflow: hidden;
		margin-bottom: 0.2rem;
	}
	.brand-list img{
		width: 100%;
		max-width: 100%;
	}
	.brand-tit{
		padding: 1rem;
		text-align: center;
		font-size: 1.2rem;
		color: #f05e49;
	}
	
	.brand-list{
		position: relative;
	}
	.brand-list .collection{
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		text-align: center;
		font-size: 0.8rem;
		color: #fff;
		background: #f05e49;
		background: rgba(240,94,73,0.5);
		border-radius:1rem;
		padding: 0.4rem ;
		width: 4.5rem;
	}
	
</style>
