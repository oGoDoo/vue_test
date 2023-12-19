<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link :push="true" class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link push class="list-group-item" active-class="active" :to="{name:'xiaoxi'}">Message</router-link>
                </li>
            </ul>
            <!-- 缓存多个路由组件 -->
            <!-- <keep-alive :include="['News','Message']"> -->

                <!-- 缓存一个路由组件 -->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import router from '../router';

export default {
    name: 'Home',
    components: { router }
}
</script>