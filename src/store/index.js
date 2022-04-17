import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobileNavStatus: false,
    editorArticle: null
  },
  getters: {
  },
  mutations: {
    TOGGLE_MOBILENAV_STATUS(state) {
      state.mobileNavStatus = !state.mobileNavStatus
    },
    HIDE_MOBILENAV(state) {
      state.mobileNavStatus = false
    },
    SAVE_EDITOR_ARTICLE(state, payload) {
      state.editorArticle = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
