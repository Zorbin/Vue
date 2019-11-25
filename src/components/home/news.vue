<template>
    <div>
        <h1>新闻列表页面</h1>
        <mt-cell-swipe
            title="text"
            :right="[
                {
                content: 'Delete',
                style: { background: 'red', color: '#fff' },
                handler: () => this.$messagebox('delete')
                }
            ]">
            <mt-cell>
                <span>icon 是图片</span>
                <img slot="icon" src="../../images/taobao.png" width="24" height="24">
            </mt-cell>
            </mt-cell-swipe>
    </div>
</template>

<script>

export default {

}
</script>

<style>

</style>