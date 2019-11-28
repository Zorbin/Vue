<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" :data-numbox-max="max" :readonly="readonly ? 'readonly' : false" ref="numbox" type="number" :value="initnumber || 1" @change="numberChanged" />
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    numberChanged() {
      this.$store.commit('updateGoodsInfo', {
        id: this.goodsid,
        number: this.$refs.numbox.value
      })
    }
  },
  props: ["max", "initnumber", "readonly", "goodsid"],
  watch: {
    max: function(newval, oldval) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newval);
    }
  }
};
</script>

<style>
</style>