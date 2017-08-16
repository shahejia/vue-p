// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//导入mint-ui
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
//导入MUI
// 这个框架不是vue插件，是纯原生js写的，里面的js代码不兼容es5的严格模式，所以咱们这里不用，只用它的样式
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css'; // 引入mui的扩展图标样式
//导入vue-preview
import VuePreview from 'vue-preview';

//手动启用use插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUi);
Vue.use(VuePreview);

//导入我们自己的东西
// 导入过滤器
import './filter.js';
//导入自己的组件
import App from '../component/App.vue';// 根组件
// 导入配置好的路由对象
import router from './router.js';

// 创建一个Vue实例，关联视图，把根组件渲染到视图中
new Vue({
    el: '#app',
    render: c => c(App),
    router
});
