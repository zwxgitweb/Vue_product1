// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/**
 * main.js   项目的主入口文件
 * 实例vue
 * 引入路由模板
*/

// 引入模块
import Vue from 'vue'
import App from './App'
import router from './router'

// 数据接口mock.js
import '@/mock/mock'

import Axios from 'axios';
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false

/**
 * 引入全局组件模板
*/

// 引入header-component组件
import headerView from '@/components/data/headerCom'
// 引入back-component组件
import backView from '@/components/data/backCom'

/**
 * 注册全局组件
*/ 

// 头部信息注册
Vue.component('header-component', headerView)
// 返回上一个状态注册
Vue.component('back-component', backView)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: c => c(App)
})