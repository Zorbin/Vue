<template>
  <div class="container">

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swipe="swipe" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
          <span class="old">市场价：<del class="del">￥{{ goodsinfo.market_price }}</del></span>
          <span class="now">销售价：￥{{ goodsinfo.sell_price }}</span>
        </p>
        <p>
          <span>购买数量:</span>
          <numbox @getnumber="getNumber" :max="goodsinfo.stock_quantity"></numbox>
        </p>
        <p>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
        </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }} 件</p>
          <p>上架时间：{{ goodsinfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue";
import numbox from "../subcomponents/goodsinfo_numbox.vue" // 数字选择框
export default {
  data() {
    return {
      id: this.$route.params.id,
      swipe: [],
      goodsinfo: {},
      ballFlag: false,
      number: 1
    };
  },
  created() {
    this.getSwipe();
    this.getGoodsInfo();
  },
  methods: {
    getSwipe() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(element => {
            element.img = element.src;
          });
          this.swipe = result.body.message;
        }
      });
    },
    getGoodsInfo() {
      this.$http.get('api/goods/getinfo/' + this.id).then(result => {
        if(result.body.status === 0){
          this.goodsinfo = result.body.message[0];
        }
      })
    },
    goDesc(id) {
      // 跳转图文介绍页面
      this.$router.push({name: 'goodsdesc', params: { id }})
    },
    goComment(id) {
      // 跳转评论页面
      this.$router.push({name: 'goodscomment', params: { id }})
    },
    addToShopCar() {
      this.ballFlag = !this.ballFlag;
      var goodsinfo = {
        id: this.id,
        number: this.number,
        price: this.goodsinfo.sell_price,
        maxnumber: this.goodsinfo.stock_quantity,
        selected: true
      };
      this.$store.commit('addToCar', goodsinfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)"
    },
    enter(el, done) {
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document.getElementById('badge').getBoundingClientRect();
      
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;


      el.offsetWidth;
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;  // ES6的模板字符串
      el.style.transition = "all 0.5s ease";
      done()
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getNumber(number) {
      this.number = number;
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #eee;
  padding: 10px;
  
  p{
    padding: 2px 0;
  }
  .price{
    font-size: 12px;
    .now{
      color: red;
      font-size: 14px;
      font-weight: bold;
      margin-left: 10px;
    }
  }
  .mui-card{
    margin-left: 0;
    margin-right: 0;
  }
  .mui-card-footer{
    display: block;
    button{
      margin: 10px 0;
    }
  }
  .ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 385px;
    left: 140px;
  }
}
.del{
  text-decoration: line-through;
}

</style>