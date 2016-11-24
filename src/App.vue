<template>
  <div id="app">
	  <router-link class="page-back" v-if="visible" :to="'/'">
	      <i class="mintui mintui-back"></i>
	  </router-link>
	  <router-view></router-view>
  </div>
</template>

<script>
import 'src/assets/font/iconfont.css';
export default {
  name: 'app',
  components: {
  },
	computed: {
  	visible() {
    	return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
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
  
  @component-namespace page {
    @component title {
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
      display: block;
      line-height: 1;
    }

    @component header {
      @descendent main {
        margin-top: 50px;
        min-height: 120vh;
        > * {
          margin-bottom: 15px;
        }
      }
    }

    @component part {
      margin-bottom: 15px;
    }
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
