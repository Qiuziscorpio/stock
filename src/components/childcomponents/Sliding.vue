<template>
	<div class="choiceness">
		<div class="choiceness-head">
			<p class="tit">
				精选
			</p>
			<a class="more">更多</a>
		</div>
		<div  class="choiceness-item">
			<div class="item-list" v-for="list in data">
				<div class="item-img">
					<img v-bind:src="list.img" >
				</div>
				<p class="item-tit">
					{{list.title}}
				</p>				
			</div>
		</div>
	</div>
</template>

<script>
import imglist from '../../assets/img/browse/banner2.jpg'
export default {
  name: 'sliding',
  data () {
    return {
      data: [
        {
          'img': imglist,
          'title': '安踏全场暑假促销'
        },
        {
          'img': imglist,
          'title': '自创全场8.8折'
        },
        {
          'img': imglist,
          'title': '自创全场8.8折'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
	.choiceness img{
		max-width: 100%;
		width: 100%;
	}
	.choiceness .choiceness-head{
		display: flex;
		padding: 0.75rem ;
		align-items: center;
	}
 	.choiceness-head .tit,
 	.choiceness-head .more
 	{
		flex: 1;
	}
 	.choiceness-head .tit{
		font-size: 1.2rem;
	}
 	.choiceness-head .more{
 		text-align: right;
		font-size: 0.9rem;
		color: #bbb8b8;
	}	
	
	.choiceness-item{
		overflow: hidden;
		display: flex;
		margin-left: 0.75rem;
	}
	.choiceness-item .item-list{
		margin-right: 0.3rem;
	}
	.choiceness-item .item-list .item-img{
		width: 8.5rem;
		height:6.5rem;
		background: #000;
	}
 	.choiceness-item .item-list .item-tit{
 		text-align: center;
 		padding: 0.8rem 0;
		font-size: 0.9rem;
		color: #f05e49;
	}			
</style>
