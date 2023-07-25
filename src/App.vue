<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <School/>
        <Student :getSchoolName="getSchoolName"/>
    </div>
</template>

<script>
    //引入School组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default{
        name:'App',
        components:{Student,School},
        data(){
            return{
                msg:'你好啊！'
            }
        },
        methods:{
            getSchoolName(name){
                console.log('App收到了学校名：',name)
            }
        }
    }
</script>  

<style scoped>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>