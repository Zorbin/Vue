import VueRouter from 'vue-router'

import HomeContainer from './components/tarbar/HomeContainer.vue'
import MemberContainer from './components/tarbar/MemberContainer.vue'
import ShopcarContainer from './components/tarbar/ShopcarContainer.vue'
import SearchContainer from './components/tarbar/SearchContainer.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomeContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/member', component: MemberContainer }
    ]
})

export default router