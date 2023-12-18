<template>
    <div class="container">

        <Category title="游戏" type="ul">
            <template scope="qsl">
                <ul>
                    <li v-for="(g, index) in qsl.games" :key="index">{{ g }}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏" type="ol">
            <template scope="{games,msg}">
                {{ msg }}
                <ol>
                    <li style="color: red;" v-for="(g, index) in games" :key="index">{{ g }}</li>
                </ol>
            </template>
        </Category>
        <Category title="游戏" type="h4">
            <template slot-scope="data">
                {{ data.msg }}
                <h4 v-for="(g, index) in data.games" :key="index">{{ g }}</h4>
            </template>
        </Category>

    </div>
</template>

<script>
import Category from './components/Category'
export default {
    name: 'App',
    components: { Category },

}
</script>  

<style scoped>
.container,
.foot {
    display: flex;
    justify-content: space-around;
}

video {
    width: 100%;
}

img {
    width: 100%;
}

h4 {
    text-align: center;
}
</style>
