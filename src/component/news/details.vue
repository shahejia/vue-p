<template>
  <section class="details">
    <v-title :title="title"></v-title>
    <div class="mui-card">
      <div class="mui-card-header">{{details.title}}</div>
      <div class="mui-card-footer">
        <span>创建时间：{{details.add_time | formatDate('yyyy-MM-dd')}}</span>
        <span>浏览量：{{ details.click }}</span>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" v-html="details.content"></div>
      </div>
    </div>
    <v-comment :id="id"></v-comment>
  </section>
</template>

<script>
import config from '../../js/config.js';
import Ctitle from '../common/title.vue';
import Ccomment from '../common/comment.vue';
export default {
  data() {
    return {
      details: {},
      title: '新闻详情',
      id:this.$route.params.id,
    }
  },
  methods: {
    getDetails() {
      let url = config.newsDetails + this.$route.params.id;
      this.$http.get(url).then(resp => {
        resp.body.status == 0 && (this.details = resp.body.message[0]);
      })
    }
  },
  created() {
    this.getDetails();
    // console.log(this.$route);
  },
  components: {
    'v-title': Ctitle,
    'v-comment':Ccomment
  }
}
</script>

<style>

</style>
