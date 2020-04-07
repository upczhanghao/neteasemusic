<template>
    <div class="new-songs">
      <div class="top">
        最新音乐
      </div>
      <ul class="bottom">
        <li v-for="item in songs" :key="item.id">
          <img :src=item.picUrl alt="">
          <div>
            <h3>{{item.name}}</h3>
            <p>{{item.singer}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'NewSongs',
  props: {
    songs: {
      type: Array,
      default: () => [],
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
  .new-songs{
    width: 100%;
    @include bg_sub_color();
    .top{
      @include font_size($font_large);
      line-height: 80px;
      height: 80px;
      @include font_color();
      font-weight: bold;
    }
    .bottom{
      li{
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        height: 150px;
        align-items: center;
        border-bottom: 2px solid #ddd;
        img{
          width: 100px;
          height: 100px;
          border-radius: 20px;
          margin-right: 20px;
        }
        div{
          width: 70%;
          h3{
            @include font_size($font_large);
            @include font_color();
            @include no-wrap();
          }
          p{
            @include font_size($font_samll);
            @include font_color();
            @include no-wrap();
            opacity: 0.6;
            margin-top: 20px;
          }
        }
      }
    }
  }
</style>
