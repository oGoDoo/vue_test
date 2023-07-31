<template>
    <div class="Student">
        <h2>学生名称：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '乔双龙',
            sex: '男',
            number: 0
        }
    }, mounted() {
        // console.log('Student', window.x)
    },
    methods:{
        sendStudentName(){
            this.$bus.$emit('hello',this.name)
        }
    }
}


</script>

<style scoped  lang="less">
.Student {
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
}
</style> 
