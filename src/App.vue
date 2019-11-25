<template>
    <div class="app-container">
        <!-- header区域 -->
        <mt-header fixed title="vue商城"></mt-header>

        <!-- container区域 -->
        <transition>
            <router-view></router-view>
        </transition>

        <!-- footer区域 -->
        <mt-tabbar v-model="selected">
            <mt-tab-item id="home">
                <img slot="icon" src="./images/taobao.png">
                tab1
            </mt-tab-item>
            <mt-tab-item id="search">
                <img slot="icon" src="./images/taobao.png">
                tab2
            </mt-tab-item>
            <mt-tab-item id="shopcar">
                <img slot="icon" src="./images/taobao.png">
                tab3
            </mt-tab-item>
            <mt-tab-item id="member">
                <img slot="icon" src="./images/taobao.png">
                tab4
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>

<script>
export default {
    data() {
        return {selected: 'home'}
    },
    watch: {
        selected(newval,oldval){
            switch(newval){
                case 'home':
                    this.$router.push('home')
                    break;
                case 'search':
                    this.$router.push('search')
                    break;
                
                case 'shopcar':
                    this.$router.push('shopcar')
                    break;
                case 'member':
                    this.$router.push('member')
                    break;
            }
        }
    }

}
</script>

<style scoped>
.app-container{
    padding-top: 40px;
    overflow-x: hidden;
}

.v-enter{
    opacity: 0;
    transform: translateX(100%);
}

.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}

.v-enter-active,
.v-leave-active{
    transition: all 0.5s ease;
}
</style>