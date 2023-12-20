<template>
    <ul>
        <li>消息编号：{{ id }}</li>
        <li>消息标题：{{ title }}</li>
        <li>a{{ a }}</li>
        <li>b{{ b }}</li>
    </ul>
</template>

<script>

export default {
    name: 'Detail',
    computed:{
        /* id(){
            return this.$route.params.id;
        },
        title(){
            return this.$route.params.title;
        } */
    },
    props:['id','title','a','b'],
    mounted(){
        // console.log(this.$route)
    }
}
</script>