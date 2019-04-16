import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import('./views/Home.vue')
      /* children: [
        { path: 'search', name: 'search', component: () => import('./views/Search.vue') }
      ] */
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
    { path: '/detail/:id',
      name:'detail', 
      component: () => import('./views/Detail.vue') },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})