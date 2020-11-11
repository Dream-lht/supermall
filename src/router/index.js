import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Classify = () => import('../views/tabbar/classify/Classify.vue')
const Home = () => import('../views/tabbar/home/Home.vue')
const Shopcar = () => import('../views/tabbar/shopcar/Shopcar.vue')
const Profile = () => import('../views/tabbar/profile/Profile.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'',
      redirect:'home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/classify',
      component:Classify
    },    {
      path:'/shopcar',
      component:Shopcar
    },
    {
      path:'/profile',
      component:Profile
    },
  ]
})
