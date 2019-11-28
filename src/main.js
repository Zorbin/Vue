// import Vue from 'vue'  //package.json文件要配置
import Vue from '../node_modules/vue/dist/vue.js' //vue导入包的路径

import VueRouter from 'vue-router'
Vue.use(VueRouter) //手动安装vue-router
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import { Header, Tabbar, TabItem, Swipe, SwipeItem, Cell, CellSwipe, Button } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.component(CellSwipe.name, CellSwipe);
Vue.component(Button.name, Button);

import './lib/mui/css/mui.min.css'

import './css/main.css'

import app from './App.vue'

Vue.http.options.root = "http://www.liulongbin.top:3005"


//导入时间格式化插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function(data, pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(data).format(pattern)
})

var vm = new Vue({
    el: '#app',
    data: {
   
    },
    render: c => c(app),
    router
})