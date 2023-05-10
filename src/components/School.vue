<template>
    <!-- 组件的结构 -->
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
import {mixin,hunhe} from '../mixin'
    export default {
    name:'School',
    data() {
        return {
            name: '万合技校',
            address: '安徽四川',
        }
    },
    mixins:[mixin,hunhe]
}
</script>
