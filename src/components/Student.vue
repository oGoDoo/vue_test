<template>
    <div>
        <h2 @click="showName">学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    export default{
        name:'Student',
        data(){
            return{
                name:'乔双龙',
                sex:'男',
                x:666
            }
        },
    }
</script>
