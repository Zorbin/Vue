<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item  v-for="item in swipe" :key="item.id" >
        <img :src="item.img" alt="" srcset="" :class="{'full': isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["swipe", "isfull"]
}
</script>

<style lang="scss" scoped>
.full{
  width: 100%;
}
.mint-swipe{
  img{
    display: block;
    margin: 0 auto;
  }
}
</style>