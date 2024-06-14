import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThirdView from '@/views/ThirdView.vue'
import SecondView from '@/views/SecondView.vue'
import ForthView from '@/views/ForthView.vue'
import Message from '@/views/Message.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/second',
    name: 'second',
    component: SecondView
  },
  {
    path: '/third',
    name:'third',
    component:ThirdView
  },
  {
    path:'/forth',
    name:'forth',
    component:ForthView
  },
  {
    path:'/message',
    name:'message',
    component:Message
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
