/* 
  该文件是整个项目的入口文件
*/
// 引入vue
// import Vue from 'vue/dist/vue'  esm=es6 模块
import Vue from 'vue'
//引入App组件,它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

/* 
  关于不同版本的Vue：
    1.vue.js与vue.runtime.xxx.js的区别：
      (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
      (2).vue.runtime.xxx.js是运行版Vue，只包含：核心功能；没有模板解析器。

    2.因为Vue.runtime.xxx.js没有模板解析器，所有不能使用template配置项，需要使用
      render函数接收到的createElement函数去指定具体内容。
*/

function Extend(){
  
}

//创建Vue实例对象---vm
new Vue({
  el:'#app',
  //下面这行代码一会解释，完成了这个功能：将App组件放入容器中
  render: h => h(App),

  // render: function(createElement) { 这里等同于上面那行代码
  //   return createElement(App);
  // }
  // template:'<h1>你好啊</h1>'
  // render:q => q('h1','你好啊')
})
// }).$mount('#app')
