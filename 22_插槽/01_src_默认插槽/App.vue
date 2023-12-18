<template>
    <div class="container">
        <Category title="美食" :listData="foods">
            <img src="../public/10001.jpg" alt="">
        </Category>
        <Category title="游戏">
            <ul v-show="title !== '美食'">
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls
                src="https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4"></video>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'
export default {
    name: 'App',
    components: { Category },
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾'],
            games: ['红色警戒', '穿越火线', '劲舞团'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
        }
    }
}
</script>  

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
}

video {
    width: 100%;
}

img {
    width: 100%;
}
</style>
