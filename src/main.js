// import Vue from 'vue'  //package.json文件要配置
import Vue from '../node_modules/vue/dist/vue.js' //vue导入包的路径

import VueRouter from 'vue-router'
Vue.use(VueRouter) //手动安装vue-router
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './lib/mui/css/mui.min.css'

import './css/main.css'

import app from './App.vue'

Vue.http.options.root = "http://www.liulongbin.top:3005"

import Vuex from 'vuex'
Vue.use(Vuex)

//导入时间格式化插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function(data, pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(data).format(pattern)
})

// 每次进入网站先从本地存储获取购物车数据
var car = JSON.parse(localStorage.getItem('car')) || [];

const store = new Vuex.Store({
	state: {
    car: car,
  },
	mutations: {
    addToCar(state, goodsinfo) {
      // 将加入购物车的商品信息保存到store和localStorage
      var flag = false;

      state.car.some(item => {
        if(item.id == goodsinfo.id){
          item.number += parseInt(goodsinfo.number)
          flag = true
          return true
        }
      });

      if(!flag){
        state.car.push(goodsinfo);
      }

      // 保存到本地缓存localStorage
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo){
      // 修改购物车中商品的数量值
      state.car.some(item => {
        if(item.id == goodsinfo.id){
          item.number = parseInt(goodsinfo.number);
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFromCar(state, id) {
      state.car.some((item, i) => {
        if(item.id == id){
          state.car.splice(i, 1)
          return true;
        }
      })
      // 同步到本地缓存
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info){
      state.car.forEach(item => {
        if(item.id == info.id){
          item.selected = info.selected
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllNumber(state) {
      // 获取购物车商品总数量
      var n = 0;
      state.car.forEach(item => {
        n += item.number
      });
      return n;
    },
    getGoodsNumber(state){
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.number
      })
      return o
    },
    getGoodsSelected(state){
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndSum(state){
      var o = {
        count: 0,
        sum: 0
      }
      state.car.forEach(item => {
        if(item.selected = true){
          o.count += item.number
          o.sum += item.price * item.number
        }
      })
      return o;
    },
  }
});

var vm = new Vue({
    el: '#app',
    data: {
   
    },
    render: c => c(app),
    router,
    store
})