<template>
  <div class="insert">
    <swiper ref="mySwiper" :options="swiperOptions" class="banner">
      <swiper-slide v-for="item in banners" :key="item.bannerId" class="item">
        <a :href=item.url>
          <img :src=item.pic alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Banner',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      swiperOptions: {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 2000, // 自动切换的时间间隔，单位ms
          stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
          disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }
    }
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
  .insert{
    @include bg_sub_color();
    .banner{
      margin: 0 2%;
      overflow: hidden;
      border-radius: 25px;
      .item{
        height: 300px;
        img{
          width: 100%;
          height: 100%;

        }
      }
  }
}
</style>
<style lang="scss">
  @import "../../assets/css/mixin";
  /*注意点: 如果想覆盖swiper的样式, 那么style标签不能是scoped的, 否则无法覆盖*/
  .insert{
    .banner {
      .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
        background: #fff;
        opacity: 1;
      }

      .swiper-pagination-bullet-active {
        @include bg_color();
        /*background: #f00;*/
      }
    }
  }
</style>
