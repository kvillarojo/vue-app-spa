import appService from '../app.service.js'

const state = {
  posts: [],
  categoryID: 0
}

const getters = {
  posts: state => state.posts
}

const actions = {
  updateCategory (context, categoryID) {
    appService.getPost(categoryID).then(data => {
      this.posts = data
      context.commit('updateCategory', { categoryID, posts: data })
    })
  }
}

const mutations = {
  updateCategory (state, category) {
    state.categoryID = category.categoryID
    state.posts = category.posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
