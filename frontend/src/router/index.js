import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatScreen from '../views/ChatScreen.vue'
import JoinScreen from '../views/JoinScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/chat',
    name: 'Chat',
    component: ChatScreen
  },
  {
    path: '/join',
    name: 'Join',
    component: JoinScreen
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
