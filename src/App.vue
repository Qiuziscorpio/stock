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
import FooterTab from './components/FooterTab'
export default {
  name: 'app',
  components: {
  	FooterTab
  },
	computed: {
  	visible() {
  	}
	}  
}
</script>

<style>
  @reset-global mobile;

  html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
  }

  .page-back {
		display: inline-block;
    top: 12px;
    left: 10px;
    position: absolute;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }

	.page-header-main {
	    margin-top: 50px;
	    min-height: 120vh;
	}

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
