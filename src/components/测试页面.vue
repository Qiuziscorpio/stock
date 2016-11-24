<template>
  <div class="hello">
  	<img src="../assets/logo.png" >
  	<!--<canvas id="trendLine"></canvas>-->
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gittesssr.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  	<img src="../assets/logo.png" >
  	<!--<canvas id="trendLine"></canvas>-->
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gittesssr.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  	<img src="../assets/logo.png" >
  	<!--<canvas id="trendLine"></canvas>-->
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gittesssr.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>    
  </div>
</template>

<script>
import StockChart from '../assets/js/stock-chart'
import { Toast } from 'mint-ui';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      trendLine:{}
    }
  },
  components: {
    StockChart,
    Toast
  },
  methods: {
    list: function () {
      let that = this
      that.$http.get('http://h5.vstock.cairenhui.com/api/stock/quote/trend.json?code=SZ002102&appKey=dbe7152b-f874-4aea-8aa9-358e99c391c4&timestamp=1479285379882').then((response) => {
        console.log(response.body)
        that.trendLine = response
      }, (response) => {
        console.log('出错啦')
      })
    }
  },  
  mounted () {
  	/*this.list();*/
/*    var data = this.trendLine.result.detail_list;
    var prices = [];
    var volumes = [];
    var avgPrices = [];
    for (var i = 0, len = data.length; i < len; i++) {
      prices.push(data[i].last_px);
      volumes.push(data[i].min_business_amount);
      avgPrices.push(data[i].avg_px)
    }
    StockChart.StockChart.drawTrendLine({
      id: 'trendLine',
      width: document.body.clientWidth - 20,
      height: 180,
      prices: prices,
      volumes: volumes,
      avgPrices: avgPrices,
      preClosePrice: 9.66
    });*/
		Toast({
		  message: '提示',
		  position: 'bottom',
		  duration: 5000
		});     
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
