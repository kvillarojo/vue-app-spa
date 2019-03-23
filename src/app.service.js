import Axios from 'axios'

Axios.defaults.baseURL = 'https://api.fullstackweekly.com'

Axios.interceptors.request.use(function (config) {
  if (typeof window === 'undefined') {
    return config
  }

  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

const appService = {
  getPost (categoryId) {
    return new Promise((resolve) => {
      Axios.get(`wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
        .then(response => {
          resolve(response.data)
        })
    })
  },
  login (credentials) {
    return new Promise((resolve, reject) => {
      // Axios.post(`http://localhost:3001/api/v1/login`, credentials)
      Axios.post(`services/auth.php`, credentials)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getProfile () {
    return new Promise((resolve) => {
      Axios.get(`services/profile.php`)
        .then(response => {
          resolve(response.data)
        })
    })
  }
}

export default appService
