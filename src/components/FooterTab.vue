<template>
	<mt-tabbar v-model="selected" @click.native="tab"   fixed>
		<mt-tab-item id="tab-container1">
			<img  v-if="icon1==true" slot="icon" src="http://img12.360buyimg.com/jrpmobile/jfs/t2914/60/1826566688/938/6e438bd8/5790c2a1N89e86d04.png?width=66&height=66">精选
			<img v-else  slot="icon" src="http://img12.360buyimg.com/jrpmobile/jfs/t2974/347/1309560425/1313/ebd257ae/577dfadeN248cfaf9.png?width=66&height=66"> 
		</mt-tab-item>
		<mt-tab-item id="tab-container2">
			<img v-if="icon2==true" slot="icon" src="http://img12.360buyimg.com/jrpmobile/jfs/t2920/45/1306542891/1655/56e73fb1/577dfaeaNbc012f4d.png?width=66&height=66"> 理财
			<img v-else  slot="icon" src="http://img12.360buyimg.com/jrpmobile/jfs/t2992/97/1368672151/2318/ce743ea7/577cf024N2ea936fc.png?width=66&height=66"> 
		</mt-tab-item>
		<mt-tab-item id="tab-container3" >
			<img v-if="icon3==true" slot="icon" src="http://img12.360buyimg.com/jrpmobile/jfs/t2875/111/3917701918/624/a219e133/57a1ba27Nf08cbb47.png?width=66&height=66"> 白条
			<img v-else slot="icon" src="http://img12.360buyimg.com/jrpmobile/jfs/t2815/284/3535417433/756/ba316879/5790c295N16504e46.png?width=66&height=66"> 
		</mt-tab-item>
		<mt-tab-item id="tab-container4">
			<img v-if="icon4==true" slot="icon" src="//img12.360buyimg.com/jrpmobile/jfs/t2587/156/3015515934/4028/3abfbd88/577cf04eN3452fc55.png?width=86&height=93"> 我的
			<img v-else slot="icon" src="//img12.360buyimg.com/jrpmobile/jfs/t2587/156/3015515934/4028/3abfbd88/577cf04eN3452fc55.png?width=86&height=93"> 
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
export default {
  name: 'footertab',
  data () {
    return {
    	selected:"tab-container1",
    	icon1:true,
    	icon2:false,
    	icon3:false,
    	icon4:false
    }
  },
  components: {
  },
  methods: {
  	tab:function(){
  		if(this.selected=="tab-container1"){
  			this.$router.replace("home")
  			this.icon1=true
  			this.icon2=false
  			this.icon3=false
  			this.icon4=false
  			return
  		}
  		if(this.selected=="tab-container2"){
  			this.$router.replace("me")
  			this.icon1=false
  			this.icon2=true
  			this.icon3=false
  			this.icon4=false  			
  			return 
  		} 
  		if(this.selected=="tab-container3"){
  			this.$router.replace("home")
  			this.icon1=false
  			this.icon2=false
  			this.icon3=true
  			this.icon4=false  			
  			return  			
  		}
  		if(this.selected=="tab-container4"){
  			if(localStorage.getItem("key")=="true"){
	  			this.$router.replace("jj")
	  			this.icon1=false
	  			this.icon2=false
	  			this.icon3=false
	  			this.icon4=true   				
  				return
  			}	
  		}  		
  	}
  },  
  mounted () {
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
