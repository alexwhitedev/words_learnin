import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/words',
            component: () => import('./views/Words.vue')
        },
        {
            path: '/login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/register',
            component: () => import('./views/Register.vue')
        },
        {
            path: '/profile',
            component: () => import('./views/Profile.vue')
        }
    ]
})