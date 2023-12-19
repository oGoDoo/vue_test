//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex';
//引入Vue
import Vue from 'vue';
//使用插件
Vue.use(Vuex)

import countOptions from './count';
import PersonOptions from './person';

//创建 and 暴露文件/导出 store
export default new Vuex.Store({
    modules:{
        countAbount:countOptions,
        personAbount:PersonOptions
    }
});