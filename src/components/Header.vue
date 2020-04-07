<template>
<div class="header">
    <div class="left"></div>
  <p class="center">网易云音乐</p>
  <div class="right"></div>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .header{
    height: 100px;
    width: 100%;
    @include bg_color();
    display: flex;
    justify-content: space-between;
    .left{
      width: 84px;
      height: 84px;
      margin-top: 8px;
      @include bg_img('../assets/images/logo');
      color: #FFFFFF;
    }
    .right{
      width: 84px;
      height: 84px;
      margin-top: 8px;
      @include bg_img('../assets/images/account');
      color: #FFFFFF;
    }
    .center{
      @include font_size($font_large);
      color: #FFFFFF;
      font-weight: bold;
      line-height: 100px;
      margin: 0;
    }

  }
</style>
