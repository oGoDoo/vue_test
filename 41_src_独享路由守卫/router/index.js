//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';
//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            'name': 'guanyu',
            path: '/about',
            component: About,  
            meta:{title:'关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            
            children: [
                {
                    name: 'News',// include 里面用的News 是组件名不是这里的名称
                    path: 'news',
                    component: News,
                    meta:{  // 路由元信息
                        isAuth:true,
                        title:'新闻'
                    },
                    beforeEnter:((to,from,next) => {
                        console.log('前置路由守卫',to, from,next);
                        if (to.meta.isAuth) { //判断是否需要权限
                            if (localStorage.getItem('school') === '万合技校') {
                                next();
                            } else {
                                alert('学校名称不对，无权限查看');
                            }
                        }else{
                            next();
                        }
                    })
                },
                {
                    name: "xiaoxi",
                    path: 'message',
                    component: Message,
                    meta:{  // 路由元信息
                        isAuth:true,
                        title:'消息'
                    },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title', // 占位符
                            component: Detail,
                            //props 的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // props:{a:1,b:'hello'}

                            //props 的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，
                            props: true,

                            //props 的第三种写法，值为函数
                            // propsr($router){
                            propsr({ query: { id, title } }) {
                                return { id, title, a: 1, b: 'hello' }
                            },
                            meta:{
                                isAuth:true,
                                'title':'详情'
                            }
                        },
                    ]
                },
            ]
        }
    ]
})

//全局前置路由守卫---每次路由切换之前被调用、初始化的时候被调用
/* router.beforeEach((to, from, next) => {
    console.log('前置路由守卫',to, from,next);
    if (to.meta.isAuth) { //判断是否需要权限
        if (localStorage.getItem('school') === '万合技校') {
            next();
        } else {
            alert('学校名称不对，无权限查看');
        }
    }else{
        next();
    }
}); */

//后局前置路由守卫---每次路由切换之后被调用、初始化的时候被调用
router.afterEach((to,from) => {
    console.log('后置路由守卫',to, from);
    document.title = to.meta.title || '乔双龙yyds';
});

export default router;