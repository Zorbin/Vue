<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch @change="selectedChange(item.id, $store.getters.getGoodsSelected[item.id])"
            v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
            <img :src="item.thumb_path" alt srcset />
            <div class="info">
              <h3>{{ item.title }}</h3>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <numbox :readonly=true :goodsid="item.id" :initnumber="$store.getters.getGoodsNumber[item.id]"></numbox>
                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndSum.count }}</span> 件, 总价 ￥<span class="red">{{ $store.getters.getGoodsCountAndSum.sum }}</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponents/shopcar_numbox.vue";

export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      var ids = [];
      this.$store.state.car.forEach(item => ids.push(item.id));
      if (ids.length <= 0) {
        return;
      }
      this.$http.get("api/goods/getshopcarlist/" + ids.join(",")).then(result => {
        if(result.body.status === 0){
          this.goodslist = result.body.message;
        }
      });
    },
    remove(id, index) {
      // index为商品在goodslist的序号
      this.goodslist.splice(index, 1);
      this.$store.commit('removeFromCar', id)
    },
    selectedChange(id, val){
      this.$store.commit("updateGoodsSelected", {id: id, selected: val})
    }
  },
  components: { numbox }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center; //垂直居中
    }
    img {
      width: 60px;
      height: 60px;
    }
    h3 {
      font-size: 13px;
      margin-bottom: 10px;
    }
    .info {
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .mui-numbox {
    height: 25px;
  }
  .jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red{
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>