<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">点我输出上边的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    //引入School组件
    import School from './components/School.vue'
    export default{
        name:'App',
        components:{School},
        data(){
            return{
                msg:'欢迎学习vue脚手架'
            }
        },
        methods:{
            showDOM(){
                console.log(this.$refs.title) //真实DOM元素
                console.log(this.$refs.btn) //真实DOM元素
                console.log(this.$refs.sch) //School组件的实列对象（vc）
            }
        }
    }
</script>