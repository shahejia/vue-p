<template>
  <section class="list">
    <!--图片分类-->
    <ul class="mui-table-view">
      <router-link to="/photo/list/0">
        <li class="mui-table-view-cell" @click="getimages(0)">全部</li>
      </router-link>
      <li class="mui-table-view-cell" v-for="item in categoryList" :key="item.id">
        <router-link :to="'/photo/list/' + item.id">{{item.title}}</router-link>
      </li>
    </ul>
    <!--图片列表-->
    <div class="mui-card" v-for="item in photoList" :key="item.id">
      <router-link :to="'/photo/info/' + item.id">
        <div class="mui-card-header mui-card-media" :style="getStyle(item)"></div>
      </router-link>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>{{item.title}}</p>
          <p style="color: #333;">{{item.zhaiyao}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from '../../js/config.js';
export default {
  data() {
    return {
      categoryList: [],
      photoList: [],
    }
  },
  methods: {
    // 获取分类列表
    getimgCategory() {
      let url = config.photoCategory;
      this.$http.get(url).then(resp => {
        resp.body.status == 0 && (this.categoryList = resp.body.message);
      })
    },
    // 获取图片列表
    getimages(id) {
      let url = config.photoList + id;
      this.$http.get(url).then(resp => {
        if (resp.body.status == 0) {
          this.photoList = resp.body.message.map(function (v, i) {
            v.img_url = config.imgDomain + v.img_url;
            return v;
          })
        }
        if (id === 0) {
          this.photoList = resp.body.message;
        }
      })
    },
    // 获取背景style
    getStyle(item) {
      return 'height:40vw; background-image:url("' + item.img_url + '")';
    }
  },
  watch: {
    //实例身上有一个$route属性，当前页面变化时，这个属性也会跟着变化，
    //只要页面一变化，那么久根据新的id渲染新的图文
    $route() {
      this.getimages(this.$route.params.id);
    }
  },
  created() {
    this.getimgCategory();
    this.getimages(this.$route.params.id);
  }
}
</script>

<style lang='less'>
.list {
  .mui-table-view {
    overflow: hidden;
    li {
      float: left;
    }
    .mui-table-view-cell::after {
      height: 0px;
    }
  }
}
</style>