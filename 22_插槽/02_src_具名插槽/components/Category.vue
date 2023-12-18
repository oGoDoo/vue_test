<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <!-- <ul v-show="title !== '美食'">
            <li v-for="(item,index) in listData" :key="index">{{ item }}</li>
        </ul>
        <img v-show="title === '美食'" src="../../public/girl.jpg" alt="">
        <video src=""></video> -->

        <!-- 定义一个插槽（挖个坑，等着组件的使用着进行填充） -->
        <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
        <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props:['title']
}
</script>

<style>
.category {
    background-color: greenyellow;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: orange;
}
</style>