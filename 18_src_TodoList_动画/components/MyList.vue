<template>
    <ul class="todo-main">
        <transition-group name="todo" appear>
        <MyItem 
            v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo="todoObj" 
        /> 
        </transition-group>

    </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name: 'MyList',
    // 声明接收App传递过来的数据
    components: { MyItem },
    props:['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
.hello-enter-active {
    animation: todo 0.5s linear;
    /* linear 平滑 */
}

.hello-leave-active {
    animation: todo 0.5s linear reverse;
}

@keyframes todo {
    from {
        transform: translateX(100%)
    }

    to {
        transform: translateX(0px);
    }
}
</style>