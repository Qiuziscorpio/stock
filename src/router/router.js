'use strict'
import home from '../components/Home'
import me from '../components/Me'
import index from '../index'

export default [
    { path: '/', component:index, name:"index"},
    { path: '/home/:id', component: index,
      children: [
        {
          path: '',
          component: me
        },      
        {
          path: 'index',
          component: home
        },
        {
          path: 'me',
          component: me
        }
      ]
    } ,   
    { path: 'home', component:home, name:"index"},
    { path: 'Me', component:me, name:"me"},
]
