// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//手动启用use插件
Vue.use(VueRouter);
Vue.use(VueResource);

//导入我们自己的东西
//导入自己的组件
import App from '../component/App.vue';
// 导入配置好的路由对象
import router from '../component/router.vue';

// 创建一个Vue实例，关联视图，把根组件渲染到视图中
new Vue({
    el: '#app',
    render: c => c(App),
    router:router,
});
