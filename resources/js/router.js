import vueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(vueRouter)

import Home from "./views/Home";
import Blog from "./views/Blog";
import Record from "./views/Record";
import Create from "./views/Create";

const routes = [
    {path: '/', component: Home},
    {path: '/blog', component: Blog},
    {path: '/posts/:id', component: Record},
    {path: '/create', component: Create}
]

export default new vueRouter({
    mode: 'history',
    routes
})
