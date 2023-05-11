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
