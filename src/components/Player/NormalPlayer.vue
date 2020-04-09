<template>
<div class="normalPlayer">
  <div class="top">
    <div class="left"></div>
    <div class="center">
      <p>歌曲名</p>
      <p>歌手</p>
    </div>
    <div class="right"></div>
  </div>
  <div class="center"></div>
  <div class="bottom"></div>
</div>
</template>

<script>
export default {
  name: 'NormalPlayer'
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
.normalPlayer{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f00;
  .top{
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left{
      width: 84px;
      height: 84px;
      margin-top: 8px;
      @include bg_img('../../assets/images/down');
      color: #FFFFFF;
    }
    .center{
      @include font_size($font_medium_s);
      color: #FFFFFF;
      font-weight: bold;
      line-height: 45px;
      margin-top: 10px;
      p{
        text-align: center;
      }
    } .right{
        width: 84px;
        height: 84px;
        margin-top: 8px;
      }
  }
}
</style>
