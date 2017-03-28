<template>
  <div id="app">
    <v-header></v-header>
    <div class='tab'>
      <div class="tab-item">
        <router-link :to="{name: 'goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name: 'ratings'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name: 'seller'}">商家</router-link>
      </div>
    </div>
    <div class='content'>
      <router-view></router-view>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import header from './components/header/header.vue';
export default {
  name: 'app',
  components: {
    'v-header': header
  }
};
</script>
<style lang='scss'>
#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .tab-item {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
