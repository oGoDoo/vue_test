<template>
    <div>
        <h2 @click="showName">学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
//引入一个混合
// import {mixin,hunhe} from '../mixin'
    export default{
        name:'Student',
        data(){
            return{
                name:'乔双龙',
                sex:'男',
                x:666
            }
        },
        // mixins:[mixin,hunhe],
    //     mounted(){
    //     console.log('你好啊!!!!!!!!!!!')
    // }
    }
</script>
