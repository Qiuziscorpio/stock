<template>
		<mt-tab-container-item id="container2">
			<mt-cell v-for="n in 7" :title="'发现 ' + n" />
		</mt-tab-container-item>
</template>

<script>
export default {
  name: 'C',
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
</style>
