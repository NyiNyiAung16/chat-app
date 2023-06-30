import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { auth } from '@/firebase/config'
import Home from '../views/Home.vue'
import Fun from '../views/FunPage.vue'

const routes = [
  {
    path:'/',
    name:'Welcome',
    component:Welcome,
    beforeEnter(to, from ,next){
      let user=auth.currentUser;
      if(!user){
        next();
      }else(
        next('/chatroom')
      )
    }
  },
  {
    path:'/chatroom',
    name:'Chatroom',
    component:Chatroom,
    beforeEnter(to, from, next){
      let user=auth.currentUser;
      if(user){
        next();
      }else{
        next('/')
      }
    }
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path:'/fun',
    name:'Fun',
    component:Fun
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
