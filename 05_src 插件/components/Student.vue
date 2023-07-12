<template>
    <div>
        <h2>学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <input type="text" v-fbind:value="name"/> <hr/>
        <button @click="test">点我测试一下hello方法</button>
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
        },
        methods:{
            test(){
                this.hello()
            }
        }
    }
    
</script>
