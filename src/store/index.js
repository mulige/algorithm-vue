import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showResult: false,
    textInfo: '点击查看'
  },
  mutations: {
    changeShowStatus(state) {
      state.showResult = !state.showResult;
      if (state.showResult) state.textInfo = '点击隐藏'
      else state.textInfo = '点击查看'
    },
    hideResult(state) {
      state.showResult = false
      state.textInfo = '点击查看'
    }
  },
  actions: {
  },
  modules: {
  }
})
