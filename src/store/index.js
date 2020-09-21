import Vue from 'vue'
import Vuex from 'vuex'
import tradeData from './tradeData'
import defaultData from './defaultData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    setData(state,param,pathName) {//param:{key:*,val:*}
      if(pathName){
        state[pathName][param.key] = param.val;
      }else{
        state[param.key] = param.val;
      }
      state[pathName][param.key] = param.val;
    }
  },
  actions: {
  },
  modules: {
    tradeData,
    defaultData
  }
})
