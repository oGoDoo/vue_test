<template>
    <div class="container">
        <Category title="美食" :listData="foods">
            <img slot="center" src="../public/10001.jpg" alt="">
            <a slot="footer" href="http://www.bilibili.com">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center" v-show="title !== '美食'">
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="http://www.bilibili.com">单机游戏</a>
                <a href="http://www.bilibili.com">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls
                src="https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4"></video>
                <template v-slot:footer>
                    <div class="foot" >
                <a href="http://www.bilibili.com">经典</a>
                <a href="http://www.bilibili.com">热门</a>
                <a href="http://www.bilibili.com">推荐</a>
            </div>
            <h4 >欢迎前来观影！</h4>
                </template>
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
.container,.foot {
    display: flex;
    justify-content: space-around;
}

video {
    width: 100%;
}

img {
    width: 100%;
}
h4{
    text-align: center;
}

</style>
