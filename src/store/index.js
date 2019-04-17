import Vue from 'vue'
import Vuex from 'vuex'
import seller from './seller'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {

  },
  modules: {
    //暴露的仓库
    seller: seller
  }
})

export default store