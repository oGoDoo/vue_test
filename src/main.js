/* 
  该文件是整个项目的入口文件
*/
// 引入vue
// import Vue from 'vue/dist/vue'  esm=es6 模块
import Vue from 'vue'
//引入App组件,它是所有组件的父组件
import App from './App.vue'

//完整引入
//引入ElmentUI
// import ElementUI from 'element-ui';
//引入elment-ui全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入 组件
import { Button ,Row ,DatePicker } from 'element-ui';

//引入插件
//关闭vue的生产提示
Vue.config.productionTip = false
//使用插件
//使用ElmentUI
// Vue.use(ElementUI)

Vue.component('qsl-button', Button);
Vue.component("qsl-row", Row);
Vue.component("qsl-date-picker", DatePicker);


//创建Vue实例对象---vm
const vm = new Vue({
  el:'#app',
  render: h => h(App),
}) ;