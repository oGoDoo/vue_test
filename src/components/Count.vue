<template>
    <div>
        <h2>当前求和为：{{ sum }}</h2>
        <h2>当前求和放大10倍为：{{ bigSum }}</h2>
        <h2>我在{{ school }} ,学习 {{ subject }}</h2>
        <select v-model.number="n">
            <!-- <option :value=1>1</option> -->
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
        </select>
        <button @click="JIA(n)">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为基数在加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
    name: 'Count',
    data() {
        return {
            n: 1,//用户选择的数据
            // sum: 0//当前的和 
        }
    },
    computed: {

        //借助mapState生成计算属性，从state中读取（对象写法）
        // ...mapState({'he':'sum','xuexiao':'school','xueke':'subject'}),

        //借助mapState生成计算属性，从state中读取（数组写法）
        ...mapState(['sum', 'school', 'subject']),

        // 借助mapState生成计算属性，从state中读取（对象写法）
        // ...mapGetters(['bigSum':'bigSum']),

        //借助mapState生成计算属性，从state中读取（数组写法）
        ...mapGetters(['bigSum']),

    },
    methods: {

        //程序员亲自写方法
        /* increment() {
            this.$store.commit('JIA', this.n)
        },
        decrement() {
            this.$store.commit('JIAN', this.n)
        }, */
        decrement(){
            this.qslDecrement(this.n);
        },
        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
        ...mapMutations({  'qslDecrement': 'JIAN' }),

        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
        ...mapMutations([ 'JIA' ]),
        /* ************************* */

        incrementOdd() {

            this.$store.dispatch('jiaOdd', this.n)
        },
        incrementWait() {

            this.$store.dispatch('jiaWait', this.n)

        },
    },
    mounted() {
        /* const x = mapState({'he':'sum','xuexiao':'school','xueke':'subject'})
        console.log(x) */
    }
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>