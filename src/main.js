// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map'
import VueRouter from 'vue-router';

Vue.use(BaiduMap, {
  ak: 'l8DtC0qfpbnjKgVrowZYyG5BNHiYzNvl'
})

Vue.use(ElementUI),Vue.use(VueRouter);

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
