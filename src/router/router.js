'use strict'
import stroll from '../components/Stroll'
import brand from '../components/Brand'
import login from '../components/Login'
import details from '../components/Details'
import index from '../index'

export default [
	//设置入口  重定向第二层路由视图
	{path: '/', redirect:"/index"},
	//主页
    {path: '/index', component:index, name:"index",
      children: [
        {
          path: '',
          component: stroll,
          name:"stroll"
        },    
        //逛逛
        {
          path: 'stroll',
          component: stroll,
          name:"stroll"
        },
       	//品牌
        {
          path: 'brand',
          component: brand,
          name:"brand"
        }
      ]
    } ,  	
	//登录
	{path: '/login', component: login, name:"login"},
	//详情页
	{path: '/details', component: details, name:"details"}
]
