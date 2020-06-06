<template>
  <div id="app">
    <Header></Header>
    <Tabbar></Tabbar>
    <router-view></router-view>
    <!-- <Player></Player> -->
  </div>
</template>
<script>
import Header from './components/index/Header'
import Tabbar from './components/index/Tabbar'
// import Player from './views/Player'
export default {
  name: 'App',
  components: {
    Header,
    Tabbar
    // Player
  }
}
</script>
<style lang="scss">
</style>
