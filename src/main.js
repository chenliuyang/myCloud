import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './Router.config'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/theme/commonStyle.css'
import ElementUI from 'element-ui'
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
Vue.use(ElementUI)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
