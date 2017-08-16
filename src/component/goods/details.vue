<template>
  <article class="goods-detail">
    <v-title :title="title"></v-title>
    <v-swipe :list='lunbos'></v-swipe>
    <!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">{{goods.title}}</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price">
          <s>市场价:￥{{goods.market_price}}</s>
          <span>销售价: </span>
          <em>￥{{goods.sell_price}}</em>
        </div>
        <div>
          <span>购买数量：</span>
          <!--数字输入框 -->
          <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus">-</button>
            <input class="mui-input-numbox" type="number">
            <button class="mui-btn mui-btn-numbox-plus">+</button>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
        <div></div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
      </div>
    </div>
  
    <!-- 评论与介绍 -->
    <div class="mui-card">
      <!-- 选项卡 -->
      <mt-navbar v-model="selectedTab">
        <mt-tab-item id="v-comment">商品评论</mt-tab-item>
        <mt-tab-item id="v-info">图文介绍</mt-tab-item>
      </mt-navbar>
      <!-- 内容 -->
      <mt-tab-container v-model="selectedTab">
        <mt-tab-container-item id="v-comment">
          <v-comment :id="id"></v-comment>
        </mt-tab-container-item>
        <mt-tab-container-item id="v-info">
          <v-desc :id="id"></v-desc>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  
  </article>
</template>

<script>
import config from '../../js/config.js';
import Cdesc from './desc.vue';
import Ctitle from '../common/title.vue';
import Cswipe from '../common/swipe.vue';
import Ccomment from '../common/comment.vue';
export default {
  data() {
    return {
      title: '商品购买',
      id: this.$route.params.id,
      lunbos: [],
      goods: {},
      selectedTab: '',
    }
  },
  methods: {
    getLunbos() {
      let url = config.photoThum + this.id;
      this.$http.get(url).then(resp => {
        let body = resp.body;
        if (body.status == 0) {
          this.lunbos = body.message.map(item => {
            item.src = config.imgDomain + item.src;
            return item;
          })
        }
      })
    },
    getInfo() {
      let url = config.goodsInfo + this.id;
      this.$http.get(url).then(resp => {
        let body = resp.body;
        if (body.status == 0) {
          this.goods = body.message[0];
        }
      })
    }
  },
  created() {
    this.getLunbos();
    this.getInfo();
  },
  components: {
    'v-title': Ctitle,
    'v-swipe': Cswipe,
    'v-comment': Ccomment,
    'v-desc': Cdesc,
  }
}
</script>

<style lang="less">
.goods-detail {
  .mui-card-content {
    .price {
      color: rgb(51, 51, 51);
      margin-bottom: 4px;
      span {
        margin-left: 6px;
      }
      em {
        font-size: 18px;
        color: red;
      }
    }
  }
  .mui-card-footer {
    div {
      width: 100%;
    }
    .mui-btn {
      padding: 8px 0;
      font-size: 16px;
    }
  }
  .mint-tab-item {
    &.is-selected {
      margin-bottom: 0;
      border-bottom: 3px solid #2ce094;
      color: #2ce094;
    }
  }
  .mint-tab-item-label {
    font-size: 18px;
    color: #2ce094;
  }
}
</style>