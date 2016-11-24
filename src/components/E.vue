<template>
		<mt-tab-container-item id="container4">
			<div class="page-part">
				<mt-cell v-for="n in 12" :title="'我的 ' + n" />
			</div>
			<router-link to="/">
				<mt-button type="danger" size="large">退出</mt-button>
			</router-link>
		</mt-tab-container-item>
</template>

<script>
export default {
  name: 'E',
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
