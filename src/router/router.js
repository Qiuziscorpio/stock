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
          component: me,
          name:"me"
        },      
        {
          path: 'index',
          component: home,
          name:"index"
        },
        {
          path: 'me',
          component: me,
          name:"me"
        }
      ]
    } ,   
    { path: 'Me', component:me, name:"me2"},
]
