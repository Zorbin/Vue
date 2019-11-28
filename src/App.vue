<template>
  <div class="app-container">
    <!-- header区域 -->
    <mt-header fixed title="vue商城">
      <span v-show="flag" slot="left" @click="goback">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- container区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- footer区域 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./images/taobao.png" />
        tab1
      </mt-tab-item>
      <mt-tab-item id="goods">
        <img slot="icon" src="./images/taobao.png" />
        tab2
      </mt-tab-item>
      <mt-tab-item id="shopcar">
        <span id="badge">{{ $store.getters.getAllNumber }}</span>
        <img slot="icon" src="./images/taobao.png" />
        tab3
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./images/taobao.png" />
        tab4
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "home",
      flag: false
    };
  },
  mounted() {
    this.selected = this.$route.path.split("/")[1];
  },
  watch: {
    selected(newval, oldval) {
      switch (newval) {
        case "home":
          this.$router.push("/home").catch(err => {});
          break;
        case "goods":
          this.$router.push("/goods").catch(err => {});
          break;

        case "shopcar":
          this.$router.push("/shopcar").catch(err => {});
          break;
        case "member":
          this.$router.push("/member").catch(err => {});
          break;
      }
    },
    "$route.path": function(newval, oldval) {
      if (newval.split("/").length <= 2) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  },
  methods: {
    goback() {
      // 点击后退
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.app-container {
  padding: 40px 0 55px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.mint-tabbar {
  position: fixed;
}
.mint-tab-item:nth-child(3) {
  position: relative;
}
#badge {
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 20px;
}
</style>