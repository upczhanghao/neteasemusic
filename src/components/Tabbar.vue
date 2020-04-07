<template>
    <div class="tabbar">
      <router-link tag="div" to="/recommand" class="item">
        <span>推荐</span>
      </router-link>
      <router-link tag="div" to="/singer" class="item">
        <span>歌手</span>
      </router-link>
      <router-link tag="div" to="/rank" class="item">
        <span>排行</span>
      </router-link>
      <router-link tag="div" to="/search" class="item">
        <span>搜索</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  @import "../assets/css/variable";
  .tabbar{
    width: 100%;
    height: 84px;
    @include bg_sub_color();
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    margin-bottom: 5px;
    .item{
      span{
        width: 100%;
        display:table-cell;
        line-height: 84px;
        @include font_size($font_medium);
        @include font_color();
      }
      &.router-link-active{
        span{
          @include font_active_color();
        }
        border-bottom: 5px solid #000;
        @include border_color();
      }
    }
  }
</style>
