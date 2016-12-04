<template>
	<div class="page-header-main">
		<!--头部-->
		<div class="head">
			<div class="message">
				<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
			</div>
			<div class="head－content">
				<div class="img">
					<img src="../assets/img/browse/banner.jpg" />
				</div>
				<div class="name">
						秋子 <i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
				</div>
			</div>
		</div>
		<!--关注 收藏-->
		<div class="focus－collection">
			<div class="focus">
				<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i> 我的关注
			</div>
			<div class="collection">
				<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i> 我的收藏
			</div>
		</div>
		<div class="label-mian">
			<img src="../assets/img/me/me-tit.png" class="me-tit" />
		</div>
		
		<!--列表－操作区域-->
		<div class="panel">
			<div class="panel－list">
				<div class="list-left-tit">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
					我的活动
				</div>
				<div class="list-right-icon">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
				</div>
			</div>
			<div class="panel－list">
				<div class="list-left-tit">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
					我的优惠
				</div>
				<div class="list-right-icon">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
				</div>
			</div>
			<div class="panel－list">
				<div class="list-left-tit">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
					优惠／红包
				</div>
				<div class="list-right-icon">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
				</div>
			</div>				
		</div>
		<div class="panel">
			<div class="panel－list">
				<div class="list-left-tit">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
					我的活动
				</div>
				<div class="list-right-icon">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
				</div>
			</div>		
		</div>
		<div class="panel">
			<div class="panel－list">
				<div class="list-left-tit">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
					给个好拼
				</div>
				<div class="list-right-icon">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
				</div>
			</div>
			<div class="panel－list">
				<div class="list-left-tit">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
					客服帮助 400-900-900
				</div>
				<div class="list-right-icon">
					<i class="icon iconfont icon-yikeapp4tubiaogengduo"></i>
				</div>
			</div>
		</div>
	
	<div>
</template>

<script>
import imglist from '../assets/img/browse/banner.jpg'
export default {
  name: 'brand',
  data () {
    return {
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
	.head{
		height: 200px;
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		background: url(../assets/img/me/me-headbg.png) no-repeat 100% 100%;
	}
	.head－content{
		width: 120px;
		text-align: center;
	}
	.head－content .img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		overflow: hidden;
		border: 2px solid #fff;
	}
	.head－content img{
		width: 100%;
		max-width: 100%;
	}	
	.head－content .name{
		color: #fff;
		margin-top: 0.5rem;
	}
	.head .message{
		position: absolute;
		right:0.5rem;
		top: 0.5rem;
		color: #fff;
	}
	
	.focus－collection{
		display: flex;
	}

	.focus－collection .focus,
	.focus－collection .collection{
		flex: 0 0 50%;
		padding: 1rem 0;
		text-align: center;
	}

	.focus－collection .focus{
		border-right: 0.05rem solid #fff;
	}
	.label-mian{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 48px;
		margin-bottom: 0.5rem;
		background: url(../assets/img/me/label-main.png) no-repeat 100% 100%;
	}

	.label-mian .me-tit{
		height: 16px;
		width: 153px;
	}
	.panel{
		background: #fff;
		padding:0 0.75rem;
		margin-top: 0.5rem;
	}
	.panel .panel－list{
		display: flex;
		justify-content:space-between;
		padding: 0.8rem 0;
		border-bottom: 0.05rem solid #eeeeee;
		font-size: 1rem;
	}
	
</style>
