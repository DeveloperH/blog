import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeIndex from '../views/Home/index.vue'
import Home from '../views/Home'
import Article from '../views/Article'
import About from '../views/About'
import NotFound from '../views/NotFound'

const Login = ()=> import('../views/Login')
const Manager = ()=> import('../views/Manager/index.vue')   // 管理页
const ManagerHome = ()=> import('../views/ManagerHome')     // 管理页-主页
const ManagerCenter = ()=> import('../views/ManagerCenter')   // 管理页-个人中心
const BlogAdd = ()=> import('../views/ManagerBlog/BlogAdd')         // 管理页-新增博客
const BlogUpdate = ()=> import('../views/ManagerBlog/BlogUpdate')   // 管理页-修改博客

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeIndex',
    component: HomeIndex,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'article/:id',
        name: 'Article',
        component: Article
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/manager',
    name: 'Manager',
    component: Manager,
    children: [
      {
        path: '',
        name: 'ManagerHome',
        component: ManagerHome
      },
      {
        path: 'center',
        name: 'ManagerCenter',
        component: ManagerCenter
      },
      {
        path: 'blog-add',
        component: BlogAdd
      },
      {
        path: 'blog-update',
        component: BlogUpdate
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
