//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';
//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            'name':'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    name:'News',// include 里面用的News 是组件名不是这里的名称
                    path: 'news',
                    component: News
                },
                {
                    name:"xiaoxi",
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name:'xiangqing',
                            path: 'detail/:id/:title', // 占位符
                            component: Detail,
                            //props 的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // props:{a:1,b:'hello'}

                            //props 的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，
                            props:true,

                            //props 的第三种写法，值为函数
                            // propsr($router){
                            propsr({query:{id,title}}){
                                return {id,title,a:1,b:'hello'}
                            }
                        },
                    ]
                },
            ]
        }
    ]
})