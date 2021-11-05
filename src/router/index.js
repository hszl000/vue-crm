import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui';
Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: '/home'
}, {
    path: '/login', // 登录页
    name: 'Login',
    component: () =>
        import ('../views/Login.vue')
}, {
    path: '/home', //布局首页
    name: 'Home',
    redirect: '/index', // 重定向到 首页
    meta: { title: '首页' },
    component: () =>
        import ('../views/Home/Index.vue'),
    children: [{
        path: '/index', //首页模块
        name: 'Index',
        meta: { title: '首页' },
        component: () =>
            import ('../views/Home/index/Index.vue')
    }, {
        path: '/state', //数据统计模块
        name: 'State',
        meta: { title: '数据统计' },
        component: () =>
            import ('../views/Home/state/Index.vue')
    }, {
        path: '/wms', //信息管理模块
        name: 'Wms',
        redirect: '/wms/list',
        meta: { title: '信息管理' },
        component: () =>
            import ('../views/Home/wms/Index.vue'),
        children: [{
            path: '/wms/list', // 列表展示
            name: 'List',
            meta: { title: '列表展示' },
            component: () =>
                import ('../views/Home/wms/List.vue'),
        }]
    }, {
        path: '/user', //用户管理模块
        name: 'User',
        redirect: '/user/stats',
        meta: { title: '用户管理' },
        component: () =>
            import ('../views/Home/user/Index.vue'),
        children: [{
            path: '/user/stats', //用户统计模块
            name: 'UserState',
            meta: { title: '用户统计' },
            component: () =>
                import ('../views/Home/user/Stats.vue')
        }, {
            path: '/user/role', //用户统计模块
            name: 'UserRole',
            meta: { title: '角色统计' },
            component: () =>
                import ('../views/Home/user/Role.vue')
        }]
    }]
}]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
    if (!sessionStorage.getItem('name')) {
        if (to.path !== '/login') {
            next('/login')
            Message.error({ message: '请登录' });
        }
    }
    next()
    if (to.path == '/login') {
        sessionStorage.removeItem('name')
    }
})
export default router