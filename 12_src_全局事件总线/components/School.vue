<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
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
        console.log('School',this);
        this.$bus.$on('hello',(data)=>{
            console.log('我是school组件，收到了数据',data)
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello');
    }

}

</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>
