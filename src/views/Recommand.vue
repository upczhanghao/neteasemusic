<template>
<div class="recommand">
  <div class="recommend-warpper">
    <ScrowView>
      <div>
        <Banner :banners="banners"></Banner>
        <Personalized :personalized="personalized" :title="'推荐歌单'"></Personalized>
        <Personalized :personalized="albums" :title="'最新专辑'"></Personalized>
        <NewSongs :songs="songs"></NewSongs>
      </div>
    </ScrowView>
  </div>
</div>
</template>

<script>
// 导入滚动组件
import ScrowView from '../components/ScrowView'
import Banner from '../components/Recommand/Banner'
import NewSongs from '../components/Recommand/NewSongs'
import Personalized from '../components/Recommand/Personalized'
import { getBanner, getPersonalized, getNewAlbum, getNewSong } from '../api'

export default {
  name: 'Recommand',
  components: {
    Banner,
    Personalized,
    ScrowView, // 滚动组件
    NewSongs
  },
  created () {
    getBanner()
      .then((data) => {
        this.banners = data.banners
      })
      .catch((err) => {
        throw err
      })
    getPersonalized()
      .then((data) => {
        // console.log(data)
        this.personalized = data.result
      })
      .catch(function (err) {
        throw err
      })
    getNewAlbum()
      .then((data) => {
        // console.log(data.albums.splice(0, 6))
        this.albums = data.albums.splice(0, 6)
      })
      .catch(function (err) {
        throw err
      })
    getNewSong()
      .then((data) => {
        // console.log(data)
        // this.songs = data.result
        const list = []
        data.result.forEach((value) => {
          const obj = {}
          obj.id = value.id
          obj.name = value.name
          obj.picUrl = value.song.album.picUrl
          let singer = ''
          for (let i = 0; i < value.song.artists.length; i++) {
            if (i === 0) {
              singer = value.song.artists[i].name
            } else {
              singer += '-' + value.song.artists[i].name
            }
          }
          obj.singer = singer
          list.push(obj)
        })
        this.songs = list
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  data: function () {
    return {
      banners: [],
      personalized: [],
      albums: [],
      songs: []
    }
  }
}
</script>

<style scoped lang="scss">
  .recommand{
    position: fixed;
    top: 184px;
    left:0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .recommend-warpper{
      width: 100%;
      height: 100%;
    }
  }
</style>
