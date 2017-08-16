<template>
  <section class="info">
    <v-title :title="title"></v-title>
    <div class="mui-card">
      <div class="mui-card-header">{{info.title}}</div>
      <div class="mui-card-content-inner">
        <p>访问时间：{{info.add_time | formatDate }}</p>
        <p style="color: #333;">访问量：{{info.click}}</p>
      </div>
      <div class="mui-card-content">
        <ul class="mui-table-view mui-grid-view">
          <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in thum" :key="item.src">
            <img v-preview="item.src" :src="item.src" />
          </li>
        </ul>
      </div>
      <div class="mui-card-footer" v-html="info.content"></div>
    </div>
  </section>
</template>

<script>
import Ctitle from '../common/title.vue';
import config from '../../js/config.js';
import filter from '../../js/filter.js';
export default {
  data() {
    return {
      title: '图片详情',
      info: {},
      thum: {},
    }
  },
  methods: {
    getInfo() {
      let url = config.photoInfo + this.$route.params.id;
      this.$http.get(url).then(resp => {
        if (resp.body.status == 0) {
          this.info = resp.body.message[0];
        }
      })
    },
    getThum() {
      let url = config.photoThum + this.$route.params.id;
      this.$http.get(url).then(resp => {
        if (resp.body.status == 0) {
          this.thum = resp.body.message.map(function (v, i) {
            v.src = config.imgDomain + v.src;
            return v;
          })
        }
      })
    }
  },
  created() {
    this.getInfo();
    this.getThum();
  },
  components: {
    'v-title': Ctitle,
  }
}
</script>

<style lang='less'>
.info {
  .mui-card-footer {
    display: block;
  }
  .mui-card-content-inner {
    p {
      display: inline-block;
    }
  }
  .mui-card-content {
    img {
      height: 100px;
    }
  }
}
</style>
