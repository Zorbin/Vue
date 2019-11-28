import VueRouter from 'vue-router'

import HomeContainer from './components/tarbar/HomeContainer.vue'
import MemberContainer from './components/tarbar/MemberContainer.vue'
import ShopcarContainer from './components/tarbar/ShopcarContainer.vue'
import GoodsContainer from './components/tarbar/GoodsContainer.vue'
import NewsList from './components/home/news.vue'
import GoodsInfo from './components/goods/Goodsinfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/goods', component: GoodsContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/member', component: MemberContainer },
        { path: '/home/news', component: NewsList },
        { path: '/goods/goodsinfo/:id', component: GoodsInfo, name: "goodsinfo" },
        { path: '/goods/goodsdesc/:id', component: GoodsDesc, name: "goodsdesc" },
        { path: '/goods/goodscomment/:id', component: GoodsComment, name: "goodscomment" }
    ]
})

export default router