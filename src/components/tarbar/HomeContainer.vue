<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeimg" :key="item.id"><img style="width=100%;height=100%;" :src="item.img" alt=""></mt-swipe-item>
    </mt-swipe>
    <h1>这是首页</h1>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data(){
    return  {
      swipeimg: []
    }
  },
  created() {
    this.getSwipeImg();
  },
  methods: {
    getSwipeImg() {
      this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
        if(result.body.status === 0){
          console.log(result.body)
          this.swipeimg = result.body.message;
        } else {
          Toast('获取轮播图失败');
        }
      })
    }
  }
};
</script>

<style>
div.mint-swipe-items-wrap{
  height: 180px;
}

.mint-swipe-items-wrap img{
  width: 100%;
  height: 100%;
}
</style>