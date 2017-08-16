<template>
  <section>
    <div class="mui-card">
      <div class="mui-card-header">{{ list.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner mui-col-xs-12" v-html="list.content" ></div>
      </div>
    </div>
  </section>
</template>

<script>
import config from '../../js/config.js';
export default {
  props:['id'],
  data() {
    return {
      list: {},
    }
  },
  methods: {
    getDesc() {
      let url = config.goodsDesc + this.id;
      this.$http.get(url).then(resp => {
        if (resp.body.status == 0) {
          this.list = resp.body.message[0];
        }
      })
    }
  },
  created() {
    this.getDesc();
  }
}
</script>

<style lang='less'>

</style>
