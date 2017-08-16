// 导入包
import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../component/index/index.vue';
// 导入news组件
import CnewsList from '../component/news/list.vue';
import CnewsDetails from '../component/news/details.vue';
//导入photo组件
import CphotoList from '../component/photo/list.vue';
import CphotoInfo from '../component/photo/info.vue';
//goods商品组件
import CgoodsList from '../component/goods/list.vue';
import CgoodsDetails from '../component/goods/details.vue';

// 导出一个路由实例
export default new VueRouter({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Cindex },
    // 新闻详细相关路由配置
    { path: '/news/list', component: CnewsList },
    { path: '/news/details/:id', component: CnewsDetails },
    //图片分享相关路由
    { path: '/photo/list/:id', component: CphotoList },
    { path: '/photo/info/:id', component: CphotoInfo },
    //goods商品路由
    { path: '/goods/list', component: CgoodsList ,name: 'goodsL'},//商品列表
    { path: '/goods/details/:id', component: CgoodsDetails,name:'goodsD' },//商品详情
  ]
})