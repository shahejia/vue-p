<template>
  <article class="index">
    <v-swipe :list="swipeList"></v-swipe>
    <v-nav></v-nav>
  </article>
</template>

<script>
import Cswipe from '../common/swipe.vue';
import Cnav from './nav.vue';
import config from '../../js/config.js';
export default {
  // 定义该组件所有的数据
  data() {
    return {
      swipeList: []
    }
  },
  // 定义该组件所有的逻辑方法
  methods: {
    getLunbo() {
      let url =  config.navList;
      this.$http.get(url).then(resp => {
        if (resp.body.status == 0) {
          this.swipeList = resp.body.message.map(item => {
            console.log(1);
            (item.src = item.img) && item;
            console.log(this.swipeList);
            return item;
            
          })
        }
      })
    }
  },
  // 当组件初始化完毕，数据和事件都也绑定好了的时候被自动调用
  created() {
    this.getLunbo();
  },
  components: {
    'v-swipe': Cswipe,
    'v-nav': Cnav
  }
}
</script>

<style>

</style>