/* 
  该文件是整个项目的入口文件
*/
// 引入vue
// import Vue from 'vue/dist/vue'  esm=es6 模块
import Vue from 'vue'
//引入App组件,它是所有组件的父组件
import App from './App.vue'
//引入vuerouter
import VueRouter from 'vue-router'
//引入
import router from './router';
// import './url';
//引入插件
//关闭vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(VueRouter);

//创建Vue实例对象---vm
const vm = new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
}) ;