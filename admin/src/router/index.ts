import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CourseList from '../views/courses/CourseList.vue'
import CourseEdit from '../views/courses/CourseEdit.vue'
import EpisodeList from '../views/courses/EpisodeList.vue'


Vue.use(VueRouter)

// RouteConfig[] 代表 routes 是一个数组 ts 写法
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/home', name: 'home', component:  Home},
      { path: '/courseList', name: 'courseList',component:  CourseList},
      // 加上 props: true 当前页面就可以通过 props 接收到 url 上路由
      { path: '/courseEdit', name: 'courseEdit',component:  CourseEdit},
      { path: '/courseEdit/:id', name: 'courseEdit',component:  CourseEdit, props: true},
      { path: '/episodeList', name: 'episodeList',component:  EpisodeList},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
