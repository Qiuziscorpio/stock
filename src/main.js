import Vue from 'vue'
import App from './App'
import Resource from 'vue-resource'
import Router from 'vue-router'
import RouterMap from './router/router'
import 'mint-ui/lib/style.css'
import Mintui from 'mint-ui';

Vue.use(Router)
Vue.use(Resource)
Vue.use(Mintui)

//登录状态
var line=false
localStorage.setItem("key",line)

/* eslint-disable no-new */
const router = new Router({
  mode: 'history',
  routes: RouterMap
})

//登陆权限
router.beforeEach((to, from, next) => {
	if(to.matched.some(m => m.meta.requiresAuth)){
		if(!line){
			next({
        path: '/login'
      })
		}
	}else{
			console.log("ppp")
    	next()		
	}
})

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
});

