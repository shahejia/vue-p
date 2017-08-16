<template>
  <section class="goods-list">
    <v-title :title="title"></v-title>
    <ul class="mui-table-view mui-grid-view">
      <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in list" :key="item.id">
        <router-link :to="{ name: 'goodsD', params: { id: item.id } }">
          <img class="mui-media-object" :src="item.img_url">
          <div class="mui-media-body">{{item.title}}</div>
          <div class="mui-card-content">
            <p class="price">
              <s>￥{{item.market_price}}</s>
              <span>￥{{item.sell_price}}</span>
            </p>
            <p class="tip">
              <span>热卖中</span>
              <span>剩余{{item.stock_quantity}}件</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- 加载更多 -->
    <button class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" ref="loadMoreBtn" @click="getList">加载更多</button>
  </section>
</template>

<script>
import config from '../../js/config.js';
import Ctitle from '../common/title.vue';
export default {
  data() {
    return {
      title: '商场',
      pageIndex: 1,
      list: [],
    }
  },
  methods: {
    getList() {
      let url = config.goodsList + "?pageindex=" + this.pageIndex;
      this.$http.get(url).then(resp => {
        let body = resp.body;
        //因为有加载更多按钮，一页一页累加数据
        if (body.status == 0 && body.message.length > 0) {
          this.list.push(...body.message);
          this.pageIndex++;
          // 如果是最后一页了就把按钮disabled掉
        } else if (body.message.length == 0) {
          this.$refs.loadMoreBtn.disabled = true;
        }
      })
    }
  },
  created() {
    this.getList();
  },
  components: {
    'v-title': Ctitle
  }
}
</script>

<style lang="less">
  .goods-list {
    .price {
      span {
        color: #f00;
      }
    }
  }
</style>
