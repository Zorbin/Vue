import './css/main.css'

// import Vue from 'vue'  //package.json文件要配置
import Vue from '../node_modules/vue/dist/vue.js' //vue导入包的路径

import VueRouter from 'vue-router'
Vue.use(VueRouter) //手动安装vue-router
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import { Header, Tabbar, TabItem, Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import app from './App.vue'


var vm = new Vue({
    el: '#app',
    data: {

    },
    render: c => c(app),
    router
})