import VueRouter from 'vue-router'

import HomeContainer from './components/tarbar/HomeContainer.vue'
import MemberContainer from './components/tarbar/MemberContainer.vue'
import ShopcarContainer from './components/tarbar/ShopcarContainer.vue'
import SearchContainer from './components/tarbar/SearchContainer.vue'
import NewsList from './components/home/news.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomeContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/member', component: MemberContainer },
        { path: '/home/news', component: NewsList }
    ]
})

export default router