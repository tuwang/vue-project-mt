import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import('./views/Home.vue')
    },
<<<<<<< HEAD
    // {
    //   path: '/city',
    //   component: () => import('./views/City.vue')
    // }
=======
    {
      path: '/center',
      component: () => import('./views/Center.vue')
    },
    {
      path: '/search',
      component: () => import('./views/Search.vue')
    },
    {
      path: '*',
      redirect: '/home'
    }
>>>>>>> b600a2a2b3857be46ebc05af002e5b7e6ebf357b
  ]
})