<template>
  <div class="header">
    <div class="left" @click.stop="back"></div>
    <p class="center">{{ title }}</p>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '',
      require: true
    }
  },
  methods: {
    back () {
      this.$router.push({
        path: '/recommand'
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.header {
  height: 100px;
  width: 100%;
  @include bg_color();
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 999;
  // position: fixed;
  // top: 0;
  // z-index: 999;
  .left {
    width: 84px;
    height: 84px;
    margin-top: 8px;
    @include bg_img("../../assets/images/back");
    color: #ffffff;
  }
  .right {
    width: 84px;
    height: 84px;
    margin-top: 8px;
    @include bg_img("../../assets/images/more");
    color: #ffffff;
  }
  .center {
    @include font_size($font_medium);
    @include no-wrap();
    color: #ffffff;
    font-weight: bold;
    line-height: 100px;
    margin: 0;
  }
}
</style>
