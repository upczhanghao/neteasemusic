<template>
    <div class="detail">
        <Header :title="playList.name"></Header>
        <Medium :path="playList.coverImgUrl" ref="Dpic"></Medium>
        <!-- //添加附加层实现底部界面上移一部分距离 -->
        <div class="init">
          <ScrollView ref="SW">
            <div>
              <Bottom :list="playList.tracks"></Bottom>
            </div>
          </ScrollView>
        </div>
    </div>
</template>

<script>
import Header from '../components/detail/Header'
import Medium from '../components/detail/Medium'
import Bottom from '../components/detail/Bottom'
import ScrollView from '../components/common/ScrowView'
import { getPlayList, getAlbum } from '../api'
export default {
  name: 'Detail',
  components: {
    Header,
    Medium,
    Bottom,
    ScrollView
  },
  created () {
    // console.log(this.$route.params.type)
    // 根据this.$route.params.type的取值使用不同方法获取数据
    if (this.$route.params.type === 'personalized') {
      getPlayList({ id: this.$route.params.id })
        .then((data) => {
          this.playList = data.playlist
        })
        .catch((err) => {
          console.log(err)
        })
    } else if (this.$route.params.type === 'albums') {
      getAlbum({ id: this.$route.params.id })
        .then((data) => {
          this.playList = {
            name: data.album.name,
            coverImgUrl: data.album.picUrl,
            tracks: data.songs
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  data: function () {
    return {
      playList: {}
    }
  },
  mounted () {
    const DpicOffsetHeight = this.$refs.Dpic.$el.offsetHeight
    this.$refs.SW.scrolling((offsetY) => {
      if (offsetY < 0) {
        // 向上滚动 --> 进行模糊处理
        // this.$refs.Dpic.$el.style.filter = `blur(${20 * Math.abs(offsetY) / DpicOffsetHeight}px)`
        console.log(this.$refs.Dpic)
        this.$refs.Dpic.changeMaskOpacity(Math.abs(offsetY) / DpicOffsetHeight)
      } else {
        this.$refs.Dpic.$el.style.transform = `scale(${1 + offsetY / DpicOffsetHeight})`
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/variable";
@import "../assets/css/mixin";
    .detail{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        // background-color: #cf0;
        @include bg_sub_color();
        .init{
          position: fixed;
          top: 500px;
          left: 0;
          right: 0;
          bottom: 0;
        }
    }
</style>
