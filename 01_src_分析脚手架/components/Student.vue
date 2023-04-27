<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ age }}</h2>
    </div>
</template>

<script>
    export default {
    name:'StudentName',

    data() {
        return {
            name: '后裔',
            age: 23,
        }
    }
}
</script>
