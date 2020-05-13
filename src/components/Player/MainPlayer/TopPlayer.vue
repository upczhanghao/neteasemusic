<template>
  <div class="top">
    <div class="left"></div>
    <div class="center">
      <p>歌曲名</p>
      <p>歌手</p>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'TopPlayer'
}
</script>

<style scoped lang="scss">
  @import "../../../assets/css/variable";
  @import "../../../assets/css/mixin";
  .top {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left {
      width: 84px;
      height: 84px;
      margin-top: 8px;
      @include bg_img("../../../assets/images/down");
      color: #ffffff;
    }
    .center {
      @include font_size($font_medium_s);
      color: #ffffff;
      font-weight: bold;
      line-height: 45px;
      margin-top: 10px;
      p {
        text-align: center;
      }
    }
    .right {
      width: 84px;
      height: 84px;
      margin-top: 8px;
    }
  }
</style>
