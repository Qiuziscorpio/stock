<template>
	<div>
		<div class="page-navbar">
			<mt-navbar class="page-part" v-model="selected">
				<mt-tab-item id="1">最新活动</mt-tab-item>
				<mt-tab-item id="2">我的关注</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1" >
					<div class="activities" >
						<div class="activities-list" v-for="data in activitiesdata">
							<div class="list-img">
								<img  v-bind:src='data.img' />
								<div class="img-tit">
									{{data.imgtit}}
								</div>								
							</div>
							<div class="list－content">
								<div class="headtit">
									<div class="tit">
										{{data.tit}}
									</div>
									<div class="collection">
										<i class="icon iconfont icon-yikeapp4tubiaogengduo" v-on:click="collection"></i>
										<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
									</div>
								</div>
								<div class="subtit">
									{{data.subtit}}
								</div>
								<div class="state">
									<span><i class="icon iconfont icon-yikeapp4tubiaogengduo"></i> {{data.browse}}</span>
									<span><i class="icon iconfont icon-yikeapp4tubiaogengduo"></i> {{data.address}}</span>
									<span><i class="icon iconfont icon-yikeapp4tubiaogengduo"></i> {{data.distance}}</span>
								</div>							
							</div>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="activities" >
						<div class="activities-list" v-for="data in activitiesdata2">
							<div class="list-img">
								<img  v-bind:src='data.img' />
								<div class="img-tit">
									{{data.imgtit}}
								</div>
							</div>
							<div class="list－content">
								<div class="headtit">
									<div class="tit">
										{{data.tit}}
									</div>
									<div class="collection">
										<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
										<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
									</div>
								</div>
								<div class="subtit">
									{{data.subtit}}
								</div>
								<div class="state">
									<span><i class="icon iconfont icon-yikeapp4tubiaogengduo"></i> {{data.browse}}</span>
									<span><i class="icon iconfont icon-yikeapp4tubiaogengduo"></i> {{data.address}}</span>
									<span><i class="icon iconfont icon-yikeapp4tubiaogengduo"></i> {{data.distance}}</span>
								</div>							
							</div>
						</div>
					</div>					
 				</mt-tab-container-item>
			</mt-tab-container>
		</div>

	</div>
</template>

<script>
import imglist from '../../assets/img/browse/banner.jpg'
	export default {
		name: 'activities',
		data() {
			return {
		        loading: false,
		        allLoaded: false,
		        wrapperHeight: 0,				
				selected: '1',
				activitiesdata:[
					{
						'img':imglist,
						'imgtit':"预告",
						'tit':"印花系列",
						'subtit':"新品清仓价，仅限9月9号",
						"browse":"9088次",
						"address":"天河区",
						"distance":"距离"
					},
					{
						'img':imglist,
						'imgtit':"预告",
						'tit':"印花系列",
						'subtit':"新品清仓价，仅限9月9号",
						"browse":"9088次",
						"address":"天河区",
						"distance":"距离"
					}					
				],
				activitiesdata2:[
					{
						'img':imglist,
						'imgtit':"预告",
						'tit':"印花系列2",
						'subtit':"新品清仓价，仅限9月9号",
						"browse":"9088次",
						"address":"天河区",
						"distance":"距离"
					},
					{
						'img':imglist,
						'imgtit':"预告",
						'tit':"印花系列2",
						'subtit':"新品清仓价，仅限9月9号",
						"browse":"9088次",
						"address":"天河区",
						"distance":"距离"
					}					
				]				
			}
		},
		methods:{
			collection (){
				console.log("ppp")
			}
		},
	    mounted() {
	    }		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.activities{
		margin: 0.5rem;
	}
	.activities-list{
		margin-bottom: 0.5rem;
		box-shadow: 0px 0px 6px rgba(0,0,0,0.2);
	}
	.list-img{
		height:12rem;
		overflow: hidden;
		width: 100%;
		position: relative;
	}
	.list-img .img-tit {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0.4rem;
		font-size: 0.8rem;
		background: rgba(0,0,0,0.4);
	}
	.list-img img{
		width: 100%;
	}	
	.list－content{
		padding: 0.75rem;
		background: #fff;
	}
	.list－content .headtit {
		display: flex;
	}
	
	.list－content .headtit .tit,
	.list－content .headtit .collection
	{
		flex: 0 0 50%;
		font-size: 1rem;
	}
	.list－content .headtit .collection {
		text-align: right;
	}
	.list－content  .subtit{
		color: #f05e49;
		font-size: 0.8rem;
		margin: 0.2rem 0;
	}	
	.list－content .state{
		color: #808080;
		font-size: 0.8rem;
	}
</style>