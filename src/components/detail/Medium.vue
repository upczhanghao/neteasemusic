<template>
  <div class="medium">
    <img :src="path" alt="">
  </div>
</template>

<script>
export default {
  name: 'Medium',
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
    path: {
      type: String,
      default: '',
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
  .medium{
    width: 100%;
    height: 500px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
</style>
