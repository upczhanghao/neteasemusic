<template>
    <div class="detail">
        <Header :title="playList.name"></Header>
        <Medium :path="playList.coverImgUrl"></Medium>
        <Bottom :list="playList.tracks"></Bottom>
    </div>
</template>

<script>
import Header from '../components/detail/Header'
import Medium from '../components/detail/Medium'
import Bottom from '../components/detail/Bottom'
import { getPlayList } from '../api/index'
export default {
  name: 'Detail',
  components: {
    Header,
    Medium,
    Bottom
  },
  created () {
    this.id = this.$route.params.id
    getPlayList({ id: this.id })
      .then((data) => {
        this.playList = data.playlist
      })
      .catch((err) => {
        console.log(err)
      })
  },
  data: function () {
    return {
      playList: [],
      id: 0
    }
  }
}
</script>

<style scoped lang="scss">
    .detail{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        // background-color: #cf0;
    }
</style>
