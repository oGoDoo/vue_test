<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学校名称：{{ name | mySlice }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '万合技校6666666',
            address: '安徽四川',
        }
    },
    methods:{
    }
}

</script>
