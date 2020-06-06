<template>
  <div class="medium">
    <img :src="path" alt="">
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Medium',
  props: {
    path: {
      type: String,
      default: '',
      require: true
    }
  },
  methods: {
    changeMaskOpacity (count) {
      console.log(this.$refs.mask)
      this.$refs.mask.style.opacity = `${count}`
    }
  }
}
</script>

<style scoped lang="scss">
  .medium{
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
    img{
      width: 100%;
    }
    .mask{
      position: absolute;
      background-color: #000;
      left: 0;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
</style>
