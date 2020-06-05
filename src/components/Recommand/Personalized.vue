<template>
  <div class="personalized">
    <div class="top">{{this.title}}</div>
    <div class="bottom">
      <ul>
        <li v-for="item in personalized" :key="item.id">
          <img v-lazy="item.picUrl" alt />
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personalized',
  props: {
    personalized: {
      type: Array,
      default: () => [],
      require: true
    },
    title: {
      type: String,
      default: '',
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.personalized {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  @include bg_sub_color();
  .top {
    @include font_size($font_large);
    line-height: 80px;
    height: 80px;
    @include font_color();
    font-weight: bold;
  }
  .bottom {
    width: 100%;
    ul {
      width: 100%;
      margin: 0;
      list-style: none;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 10px;
      box-sizing: border-box;
      li {
        width: 200px;
        margin-bottom: 20px;
        img {
          width: 200px;
          height: 200px;
          border-radius: 20px;
        }
        p {
          margin-top: 10px;
          @include clamp(2);
          @include font_color();
          @include font_size($font_samll);
          text-align: center;
        }
      }
    }
  }
}
</style>
