<template>
  <ul class="bottom">
    <li class="fir">
      <div class="icon"></div>
      <div class="title">
        播放全部
      </div>
    </li>
    <li v-for="item in list" :key="item.id" class="item">
      <h3>{{item.name}}</h3>
      <p>{{item.al.name}}-{{item.ar[0].name}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Bottom',
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {},
  props: {
    list: {
      type: Array,
      default: () => [],
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
  .bottom{
    width: 100%;
    li{
      width: 100%;
      height: 100px;
      padding: 20px;
      box-sizing: border-box;
      @include bg_sub_color();
      border-top: 2px solid #ccc;
    }
    .fir{
      display: flex;
      align-items: center;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      .icon{
        width: 60px;
        height: 60px;
        @include bg_img('../../assets/images/small_play');
      }
      .title{
        @include font_color();
        @include font_size($font_large);
        margin-left: 20px;
      }
    }
    .item{
      h3{
        @include font_size($font_medium_s);
        @include font_color();
      }
      p{
        @include font_size($font_samll);
        @include font_color();
        opacity: 0.7;
        // margin-top: 10px;
      }
    }
  }
</style>
