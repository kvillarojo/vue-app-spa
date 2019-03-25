import Vue from 'vue'
import Vuex from 'vuex'
import appServices from '../app.service.js'
import postModule from './post.js'

Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const store = new Vuex.Store({
  modules: {
    postModule
  },
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated
    }
  },
  actions: {
    logout (context) {
      context.commit('logout')
    },
    login (context, credentials) {
      return new Promise((resolve) => {
        appServices.login(credentials)
          .then((data) => {
            context.commit('login', data)
            // this.isAuthenticated = true
            resolve()
          })
          .catch(() => window.alert('could not login'))
      })
    }
  },
  mutations: {
    logout (state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('toker', null)
        window.localStorage.setItem('tokenExpiration', null)
      }
      state.isAuthenticated = false
    },
    login (state, data) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', data.token)
        window.localStorage.setItem('tokenExpiration', data.expiration)
      }

      state.isAuthenticated = true
    }
  }
})

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function (event) {
    var expiration = window.localStorage.getItem('tokenExpiration')
    var unixTimeStamp = new Date().getTime() / 1000
    if (expiration !== null && parseInt(expiration) - unixTimeStamp > 0) {
      store.state.isAuthenticated = true
    }
  })
}

export default store
