<template>
    <div>
        <h2>当前求和为：？？？</h2>
        <select v-model.number="n">
            <!-- <option :value=1>1</option> -->
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为基数在加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data(){
        return{
            n:1,//用户选择的数据
            sum:0//当前的和 
        }
    },
    methods:{
        
        increment(){
            this.$store.dispatch('jia',this.n);
        },
        decrement(){
            
        },
        incrementOdd(){
            if(this.sum % 2){
                
            }
        },
        incrementWait(){
            setTimeout(() => {
                
            }, 500);
        },
    }
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>