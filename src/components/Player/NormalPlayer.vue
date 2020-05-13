<template>
  <div class="normalPlayer">
    <TopPlayer></TopPlayer>
    <MediumPlayer></MediumPlayer>
    <BottomPlayer></BottomPlayer>
  </div>
</template>

<script>
import TopPlayer from './MainPlayer/TopPlayer'
import MediumPlayer from './MainPlayer/MediumPlayer'
import BottomPlayer from './MainPlayer/BottomPlayer'
export default {
  name: 'NormalPlayer',
  components: {
    TopPlayer,
    MediumPlayer,
    BottomPlayer
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.normalPlayer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f00;
}
</style>
