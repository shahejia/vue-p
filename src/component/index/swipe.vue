<template>
  <section class="swipe">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item,i) in swipeList" :key='i'>
        <a :href="item.url">
          <img :src="item.img" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </section>
</template>

<script>
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
          this.swipeList = resp.body.message;
        }
      })
    }
  },
  // 当组件初始化完毕，数据和事件都也绑定好了的时候被自动调用
  created() {
    this.getLunbo();
  }
}
</script>

<style lang='less'>
.swipe {
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
