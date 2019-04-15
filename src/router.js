import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import('./views/Home.vue')
    }
  ]
})