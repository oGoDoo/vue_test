<template>
    <div class="Student">
        <h2>学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>当前求和为：{{ number }}</h2>
        <button v-on:click="add">点我nuber++</button>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑whjx事件</button>
        <button v-on:click="death">销毁当前student组件的实例（vc）</button>
    </div>
</template>

<script>
    export default{
        name:'Student',
        data(){
            return{
                name:'乔双龙',
                sex:'男',
                number:0
            }
        },
        methods:{
            sendStudentName(){
                //触发Student组件实例身上的wxjx事件
                this.$emit('whjx',this.name,666,888,'哈哈哈哈');
                // this.$emit('demo')
                // this.$emit('click')
            },
            unbind(){
                // this.$off('whjx') //解绑一个自定义事件
                // this.$off(['whjx','demo']) //解绑一个自定义事件
                this.$off(); // 解绑所有的自定义事件
            },
            death(){
                this.$destroy() // 销毁了当前的student组件实例,销毁后所有Student实例的自定义事件全都不奏效，原生的也不奏效了（我自己的）
            },
            add(){
                console.log('add回调被调用了')
                this.number++;
            }
            
        },
        // mounted(){
        //     this.$on('haha',())
        // }
    }
    
</script>

<style scoped  lang="less">
    .Student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style> 
