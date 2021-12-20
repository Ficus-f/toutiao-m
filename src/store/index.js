import { createStore } from 'vuex'
import { setItem, getItem } from '@/utils/storage'

const TOKEN_KEY = 'TOUTIAO_TOKEN'

export default createStore({
  state: {
    user: getItem(TOKEN_KEY)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      setItem(TOKEN_KEY, data)
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
    }
  },
  actions: {
  },
  modules: {
  }
})
