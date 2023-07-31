## ref属性
    1.被用来给元素或子组件注册引用信息（id的替代者）
    2.应用在html标签上获取的是真实DOM元素，应用在组件上是组件实例对象（vc）
    3.使用方式：
        打标识：<h1 ref="xxx">....</h1> 或 <School ref="xxx"></School>
        获取：this.$refs.xxx

## 配置项props
    功能：让组件接收外部传过来的数据
        (1).传递数据：
            <Demo name="xxx"/>
        (2).接收数据：
            第一种方式（只接收）：
                props:['name']
    
            第二种方式(限制类型)：
                props:{
                    name:String
                }
    
            第三种方式(限制类型，限制必要性，指定默认值)：
                props:{
                    name:{
                    type:String, // name的类型是字符串
                    required:true, // name是必要的
                    default:'老王' //默认值
                    }
                }
    备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
    若业务需求确实需要修改，那么复制props内容到data一份，然后去修改data中的数据。

## mixin（混入）
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步定义混合，例如：
            {
                data(){....},
                methods:{....}
                ....
            }
        第二部使用混入，例如：
            (1).全局换入：Vue.mixin(xxx)
            (2).局部混入：mixins:['xxx']

## 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
    定义插件：
    对象.install = function(Vue,options){
        //1.全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4);
        })
        //2.定义全局指令
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
        //3.定义混入
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
    
        //4.给Vue原型上添加一个方法(Vm和Vc就都能用了)
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
    使用插件：Vue.use()
    
    ## scoped样式
        作用：让样式局部生效，防止冲突。
        写法：<style scoped>
        <style scoped  lang="less"> --指定语法 
        
    ## 总结TodoList案例
    1.组件化编码流程：
        (1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
        (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用
            1).一个组件在用：放在组件自身即可。
            2).一些组件在用:放在他们共同的父组件上(<span style="color:red">状态提升</span>)。
        (2).实现交互：从绑定事件开始。
    2.props适用于：
        (1).父组件 ===> 子组件 通信
        (2).子组件 ===> 父组件 通信 （要求父先给子一个函数）
    3.使用v-model时要切记：v-model的值不能是props传过来的值，因为props是不可以修改的！
    4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## webStorage
    1.存储内容大小一般支持5MB左右（不同的浏览器可能还不一样）
    2.浏览器通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。
    3.相关API：
        1.xxxxxStorage.setItem('key','value');
            该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存，在则更新其对应的值。
        2.xxxxxStorage.getItem('person');
            该方法接收一个键名作为参数，返回键名对应的值。
        3.xxxxxStorage.removeItem('key');
            通过key，删除key
        4.xxxxxStorage.clear();
            清空所有数据
    
    4.备注：
        1.SessionStorage存储的内容会随着浏览器窗口关闭而消失。
        2.LocalStorage存储的内容，需要手动清除才会消失
        3.xxxxxStorage.getItem(xxx) 如果xxx对应的value获取不到，返回null
        4.JSON.parse(null) 结果还是null

## 组件的自定义事件
1.一种组件间的通信方式，适用于: **<span style="color:red;">子组件 ===> 父组件</span>**
2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A种给B绑定自定义事件（<span style="color:red;">事件的回调在A中</span>）
3.绑定自定义事件：
    1.第一种方式，在父组件中：<Demo @whjx="test"/> 或 <Demo v-on:whjx="test"/>
    2.第二种方式，在父组件中：

```js
	......
    mounted(){
        this.$refs.xxx.$on('whjx',this.test)
    }
```
​    3.若想让自定义事件只触发一次，可以使用once修饰符，或$once方法
4.出发自定义事件：this.$emit('whjx',数据)
5.解绑自定义事件：this.$off('whjx')
6.组件上可以绑定原生DOM事件，需要使用 native 修饰符。
7.注意：通过this.$refs.xxx.$on('whjx',回调)绑定自定义事件时，回调<span style="color:red;">要么配置在methods中，要么用箭头函数</span>，否则this.指向会出问题！

## 全局事件总线（GlobalEventBus）

​	1.一种组件间通信方式，适用于<span style="color:red;">任意组件间通信</span>。

​	2.安装全局事件总线

```js
new Vue({
	……
	beforeCreate(){
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
},
	……
})
```



