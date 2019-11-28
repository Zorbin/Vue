<template>
  <div>
    <swiper :swipe="swipeimg" :isfull="true"></swiper>
    <h1>这是首页</h1>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import swiper from'../subcomponents/swiper.vue'
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
      this.$http.get('api/getlunbo').then(result => {
        if(result.body.status === 0){
          console.log(result.body)
          this.swipeimg = result.body.message;
        } else {
          Toast('获取轮播图失败');
        }
      })
    }
  },
  components: {
    swiper
  }
};
</script>

<style>
div.mint-swipe-items-wrap{
  height: 180px;
}

.mint-swipe-items-wrap img{
  height: 100%;
}
</style>