<template>
  <div class="goods-list">
    <div @click="getDetail(item.id)" class="goods-item" v-for="item in goodslist" :key="item.id">
      <img :src="item.img_url" alt srcset />
      <span class="title">{{ item.title }}}</span>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span class="count">剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
    <mt-button type="primary" size="large" @click="getmore">获取更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        });
    },
    getmore() {
      this.pageindex++;
      this.getGoodsList();
    },
    getDetail(id) {
      this.$router.push({ name: 'goodsinfo', params: { id }})
    }
  }
};
</script>

<style lang="scss">
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-between;
}
.goods-item {
  margin-top: 5px;
  width: 48%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 283px;
  img {
    width: 100%;
  }
  .title {
    font-size: 14px;
    font-weight: bold;
  }
  .info {
    color: #666;
    width: 100%;
    background-color: #eee;
  }
  p {
    margin: 0;
    padding: 5px;
  }
  .price {
    .now {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
    .old {
      margin-left: 10px;
      font-size: 12px;
      text-decoration: line-through;
    }
  }
  .sell {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
}
</style>