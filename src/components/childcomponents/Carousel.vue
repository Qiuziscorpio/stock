<template>
	<div>
		<slide :pages="someList" :slide="slide">
			<div v-for="(item,index) in someList" :class="'slider-item page'+index" :style="someList[index].style">
				<img v-bind:src="item.img" />
			</div>
			<!-- pagination example -->
			<div class="timeline">
				<div class="item" @click='turnTo (1)' :class='{"active": slide.init.currentPage == 1}'></div>
				<div class="item" @click='turnTo (2)' :class='{"active": slide.init.currentPage == 2}'></div>
				<div class="item" @click='turnTo (3)' :class='{"active": slide.init.currentPage == 3}'></div>
			</div>
		</slide>
	</div>
</template>

<script>
	import imglist from '../../assets/img/browse/1.png'
	import imglist2 from '../../assets/img/browse/2.png'
	import imglist3 from '../../assets/img/browse/3.png'
	import slide from 'components/childcomponents/vue-slide'
	export default {
		name: 'carousel',
		data() {
			return {
				someList: [{
					title: '1',
					img: imglist,
					origin: 0,
					current: 0,
					style: {
						'background-image': '../../assets/img/browse/banner2.jpg',
						'background-size': 'cover',
						'transform': `translateX(0%)`
					}
				}, {
					title: '2',
					img: imglist2,
					origin: 100,
					current: 0,
					style: {
						'background-image': imglist2,
						'background-size': 'cover',
						'transform': `translateX(100%)`
					}
				}, {
					title: '3',
					img: imglist3,
					origin: 200,
					current: 0,
					style: {
						'background-image': imglist,
						'background-size': 'cover',
						'transform': `translateX(200%)`
					}
				}],
				slide: {
					init: {
						pageNum: 3,
						currentPage: 1,
						canPre: false,
						canNext: true,
						start: {},
						end: {},
						tracking: false,
						thresholdTime: 500,
						thresholdDistance: 100
					}
				}
			}
		},
		methods: {
			turnTo(num) {
				this.$emit('slideTo')
			},
			slideNext() {
				this.$emit('slideNext')
			},
			slidePre() {
				this.$emit('slidePre')
			}
		},
		components: {
			slide
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/* 轮播图选中状态 */
	
	.timeline {
		position: absolute;
		bottom: 0.8rem;
		z-index: 9;
		right: 2rem;
	}
	
	.timeline .item {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		margin-bottom: 1rem;
		display: inline-block;
		background: rgba(255, 255, 255, 0.3);
	}
	
	.timeline .item.active {
		background: #fff;
	}
	.slider-item{
		background: #000;
	}
	.slider-item img {
		width: 100%;
		max-width: 100%;
	}
</style>