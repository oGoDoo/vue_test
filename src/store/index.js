//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex';
//引入Vue
import Vue from 'vue';
//使用插件
Vue.use(Vuex)

//准备actions - 用于响应组件中的动作
const actions = {
    jia(countext,value){
        console.log('actions中的jia被调用了',countext,value); 
        countext.commit('JIA',value);
    }
};
//准备mutations - 用于操作数据（state）
const mutations = {
    JIA(){

    }
};
//准备state - 用于存储数据、
const state = {
    sum:0//当前的和 
};

//创建 and 暴露文件/导出 store
export default new Vuex.Store([
    actions,
    mutations,
    state,
]);
console.log('jia',actions)
