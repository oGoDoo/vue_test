<template>
    <div>
        <button @click="isShow = !isShow">显示隐藏</button>
        <Transition name = "hello" appear>
            <h1 v-show="isShow" class="come">你好啊！</h1>
        </Transition>
    </div>
</template>

<script>
    export default{
        name:'Test',
        data(){
            return {
                isShow:true
            }
        }
    }
</script>

<style scoped>
    h1{
        background-color: orange;
    }

    .hello-enter-active{
        animation: whjx 1s linear; /* linear 平滑 */
    }
    .hello-leave-active{
        animation: whjx 1s linear reverse;
    }

    @keyframes whjx{
        from{
            transform: translateX(-100%)
        }
        to{
            transform: translateX(0px);
        }
    } 
</style>