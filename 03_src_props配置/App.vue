<template>
    <div>
        <!-- <Student name="乔双龙" sex="🚹" age="23"/> -->
        <Student name="貂蝉" sex="🚺" :age="18"/>
    </div>
</template>

<script>
    //引入School组件
    import Student from './components/Student.vue'
    export default{
        name:'App',
        components:{Student}
    }
</script>