export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4);
        })
        //定义全局指令
        Vue.directive('fbind', {
            //指令与元素成功绑定时
            bind(element, binding) {
                element.value = binding.value;
            },
            //指定所在元素被插入页面时
            inserted(element, binding) {
                element.focus();
            },
            //指令所在的模板被重新解析时候
            update(element, binding) {
                element.value = binding.value;
            }
        })
        //定义混入
        Vue.mixin({
                methods: {
                    showName() {
                        alert(this.name)
                    }
                },
                mounted(){
                    console.log('你好啊!')
                }
        })

        //给Vue原型上添加一个方法(Vm和Vc就都能用了)
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}