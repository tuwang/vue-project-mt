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
      component: () => import('./views/Detail.vue') 
    },
    {
      path: '/cinema',
      name: 'cinema',
      redirect: '/cinema/nowPlaying',
      component: () => import('./views/Cinema.vue'),
      children: [
        { path: 'nowPlaying', component: () => import('./components/FileNowPlaying.vue') },
        { path:'comingSoon', component: () => import('./components/FileComingSoon.vue') }
      ]
    },
    { path:'/city', name:'city', component: () => import('./views/City.vue') },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})