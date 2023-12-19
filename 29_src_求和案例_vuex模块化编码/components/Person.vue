<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: rgb(48, 189, 20);">Count组件的求和为：{{ sum }}</h3>
        <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一个人，名字随机，要有意境</button>
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
            return this.$store.state.personAbount.personList;
        },
        sum(){
            return this.$store.state.countAbount.sum;
        },
        firstPersonName(){
            return this.$store.getters['personAbount/firstPersonName'];
        }
        // ...mapState(['personList']),
    },
    methods:{
        add(){
            const personObj = {id:nanoid(5),name:this.name};
            this.$store.commit('personAbount/ADD_PERSON',personObj);
            this.name = '';
        },
        addWang(){
            const personObj = {id:nanoid(5),name:this.name};
            this.$store.dispatch('personAbount/addPersonWang',personObj);
        },
        addPersonServer(){
            this.$store.dispatch('personAbount/addPersonServer');
        }
    }
}
</script>