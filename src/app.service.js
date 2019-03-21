import Axios from 'axios'

Axios.defaults.baseURL = 'https://api.fullstackweekly.com/wp-json/wp/v2/posts?categories=11&per_page=6'

const appService = {
  getPost (categoryId) {
    return new Promise((resolve) => {
      Axios.get(`https://api.fullstackweekly.com/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
        .then(response => {
          resolve(response.data)
        })
    })
  },

  login (credentials) {
    return new Promise((resolve, reject) => {
      Axios.post(`http://localhost:3001/login`, credentials)
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    })
  }
}

export default appService
