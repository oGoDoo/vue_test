<template>
    <div class="app">
        <h1>{{ msg }},学生姓名是：{{ studetnName }}</h1>

        <!-- 通过父组件给子组件传递函数类型的props实现：子给负传递数据 -->
        <School :getSchoolName="getSchoolName" />

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给负传递数据(第一种写法，使用@符 or v-on) -->
        <!-- <Student @whjx="getStudentName" v-on:demo="m1" /> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给负传递数据（第二种写法，使用ref） -->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
//引入School组件
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name: 'App',
    components: { Student, School },
    data() {
        return {
            msg: '你好啊！',
            studetnName:''
        }
    },
    methods: {
        getSchoolName(name) {
            console.log('App收到了学校名：', name)
        },
        /* getStudentName(name,...params) {
            console.log('App收到了学生名：', name,...params);
            this.studetnName = name;
        }, */
        m1(){
            console.log('demo事件被触发了！')
        },
        show(){
            console.log(123)
        }
    },
    mounted() {
        setTimeout(() => {
            this.$refs.student.$on('whjx', (name,...params) => {
            console.log('App收到了学生名：', name,params);
            this.studetnName = name;
            }) // 绑定自定义事件
            // this.$refs.student.$once('whjx',this.getStudentName) //绑定自定义事件(一次性)
        }, 3000);
    },
}
</script>  

<style scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>