import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import Users from '@/components/Users'
import User from '@/components/User'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Users',
            name: 'Users',
            component: Users,
        },
        {
            path: '/user',
            name: 'User',
            component: User,
        },
        {
            path: '/about/:rol/:charge/:name',
            name: 'About',
            component: About,
            props: true,
        },

    ]
})
