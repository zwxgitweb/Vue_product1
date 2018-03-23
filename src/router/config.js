/**
 * config.js
 * 配置路由路径、插件等
*/

// 引入项目的主页面index模板
import index from '../components/index'

// 引入实现各个功能模板
import login from '../components/login'
import music from '../components/music'
import shopCar from '../components/shopCar'
import musicDetail from '../components/musicDetail'
import carousel from '../components/carousel'

let routes = [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children: [
            {
                path: '/index/carousel',
                component: carousel
            },
            {
                path: '/',
                component: carousel
            }
        ]
    },
    {
        path: '/music',
        name: 'music',
        component: music
    },
    {
        path: '/musicDetail',
        name: 'musicDetail',
        component: musicDetail
    },
    {
        path: '/shopCar',
        name: 'shopCar',
        component: shopCar
    },
    {
        path: '*',
        redirect: '/index'
    },
    {
        path: '/',
        redirect: '/index'
    }
]

export default routes;