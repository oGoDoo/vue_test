<template>
    <div class="demo">
        <h2 class="title">学生名称：{{name}}</h2>
        <h2 class="whjx">学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    export default{
        name:'Student',
        data(){
            return{
                name:'乔双龙',
                sex:'男'
            }
        }
    }
    
</script>

<style scoped  lang="less">
    .demo{
        background-color: pink;
        .whjx{
            font-size: 40px;
        }
    }
</style> 
