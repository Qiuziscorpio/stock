'use strict'
import home from '../components/Home'
import me from '../components/Me'

export default [
    { path: '/', component:home, name:"home"},
    { path: '/home', component:home, name:"index"},
    { path: '/Me', component:me, name:"me"},
]
