import Vue from 'vue'
import Router from 'vue-router'
import routes from './config'

// 挂载路由使用点
Vue.use(Router)

// 抛出路由实例
export default new Router({
    routes,
    mode: 'history'
})
