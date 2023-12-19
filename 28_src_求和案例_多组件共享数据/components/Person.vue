<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: rgb(48, 189, 20);">Count组件的求和为：{{ sum }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'Person',
    data() {
    return {
      name: '', // 添加这一行
    };
  },
    computed:{
        personList(){
            return this.$store.state.personList;
        },
        sum(){
            return this.$store.state.sum;
        }
        // ...mapState(['personList']),
    },
    methods:{
        add(){
            const personObj = {id:nanoid(5),name:this.name};
            this.$store.commit('ADD_PERSON',personObj);
            this.name = '';
        }
    }
}
</script>