<template>
	<div>
		pppppppp这个是首页 {{$router.name}}qqqoooooooooooooooooo
		<mt-tab-container-item id="container1">
			wwwwwwwwwwwwwww
			<mt-cell v-for="n in 60" :title="'餐厅 ' + n" />
		</mt-tab-container-item>		
	</div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
