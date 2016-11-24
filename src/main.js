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



/* eslint-disable no-new */
const router = new Router({
  mode: 'history',
  routes: RouterMap
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

