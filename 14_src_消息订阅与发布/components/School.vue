<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'School',
    props:['getSchoolName'],
    data() {
        return {
            name: '万合技校',
            address: '安徽四川',
        }
    },
    mounted(){
        /* console.log('School',this);
        this.$bus.$on('hello',(data)=>{
            console.log('我是school组件，收到了数据',data)
        }) */ 
        this.pubId = pubsub.subscribe('hello',(magName,data) => { // 要使用到this就用箭头函数，或者就是把回调写到method里面
            console.log('有人发布了hello消息，hello消息的回调执行了',magName,data)
        })
    },
    beforeDestroy(){
        // this.$bus.$off('hello');
        pubsub.unsubscribe(this.pubId);
    }

}

</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>
