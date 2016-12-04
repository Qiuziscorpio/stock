<template>
	<div>
		<!--头部-->
		<mt-header fixed>
			<router-link to="/" slot="left">
				<mt-button>
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
				</mt-button>
			</router-link>
			<mt-button slot="right">
				<i class="icon iconfont icon-saoyisao"></i>
			</mt-button>
		</mt-header>
		<!--内容-->
		<div class="page-header-main">
			<!--广告图一-->
			<carousel></carousel>
			<div class="Labelad">
				<img src="../assets/img/browse/item-1.png" />
			</div>
			<!--广告图二-->
			<sliding></sliding>
			<!--专区-->
			<div class="zone">
				<div class="zone-list">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
					<p class="tit">森女专区</p>
				</div>
				<div class="zone-list">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
					<p class="tit">型男专区</p>
				</div>
				<div class="zone-list">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
					<p class="tit">母婴专区</p>
				</div>
				<div class="zone-list">
					<router-link :to="{ name: 'details'}" >
						<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
						<p class="tit">更多专区</p>
					</router-link>					
				</div>				
			</div>
			<!--最新活动 我的关注-->
			<activities></activities>
		</div>
	</div>
</template>

<script>
	import carousel from 'components/childcomponents/Carousel.vue'
	import sliding from 'components/childcomponents/Sliding.vue'
	import activities from 'components/childcomponents/Activities.vue'
	

	export default {
		name: 'stroll',
		data() {
			return {}
		},
		components: {
			carousel,
			sliding,
			activities

		},
		methods: {},
		mounted() {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Labelad {
		display: flex;
		margin: 0.5rem 0;
		align-items: center;
		justify-content: center;
		padding: 0.65rem;
		text-align: center;
		background: #fff;
	}
	
	.Labelad img {
		height: 50px;
	}
	
	.zone {
		display: flex;
		background: #ffffff;
	}
	.zone-list{
		 flex:1;
		 border: 0.05rem solid #eeeeee;
		 border-left:none ;
		 color: #808080;
		 padding: .3rem 0;
		 text-align: center;
	}
	.zone-list i{
		
		font-size: 1rem;
	}
	.zone-list .tit{
		font-size: 0.75rem;
	}
</style>