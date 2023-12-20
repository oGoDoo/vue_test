<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: 'About',
    /* beforeDestroy(){
        console.log('About即将被销毁了')
    }, */
    /* mounted(){
        console.log('About组件挂载完毕',this); 
        window.aboutRoute = this.$route;
        window.aboutRouter = this.$router;

    } */

    //通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
            console.log('beforeRouteEnter', to, from, next);
            if (to.meta.isAuth) { //判断是否需要权限
                if (localStorage.getItem('school') === '万合技校') {
                    next();
                } else {
                    alert('学校名称不对，无权限查看');
                }
            } else {
                next();
            }
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
            console.log('beforeRouteLeave', to, from);
            next();
    },
}
</script>