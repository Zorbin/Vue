<template>
    <div class="app-container">
        <!-- header区域 -->
        <mt-header fixed title="vue商城"></mt-header>
        <h1>123</h1>

        <!-- container区域 -->


        <!-- footer区域 -->
        <mt-tabbar v-model="selected">
            <mt-tab-item id="tab1">
                <img slot="icon" src="./images/taobao.png">
                tab1
            </mt-tab-item>
            <mt-tab-item id="tab2">
                <img slot="icon" src="./images/taobao.png">
                tab2
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <img slot="icon" src="./images/taobao.png">
                tab3
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <img slot="icon" src="./images/taobao.png">
                tab4
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>

<script>
export default {
    data() {
        return {selected: 'tab1'}
    }
}
</script>

<style scoped>
.app-container{
    padding-top: 40px;
}
</style>