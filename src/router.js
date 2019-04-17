import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/center',
      component: () => import('./views/Center.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    {
      path: '/detail', component: () => import('./views/Details.vue')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})