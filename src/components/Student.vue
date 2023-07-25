<template>
    <div class="Student">
        <h2>学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendSchoolName">把学校名给App</button>
    </div>
</template>

<script>
    export default{
        name:'Student',
        props:['getSchoolName'];
        data(){
            return{
                name:'乔双龙',
                sex:'男'
            }
        },
        methods:{
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        }
    }
    
</script>

<style scoped  lang="less">
    .Student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style> 
