/* 
  该文件是整个项目的入口文件
*/
// 引入vue
// import Vue from 'vue/dist/vue'  esm=es6 模块
import Vue from 'vue'
//引入App组件,它是所有组件的父组件
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//关闭vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//创建Vue实例对象---vm
new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}) 