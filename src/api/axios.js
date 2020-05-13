import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.1.183:3000/'
axios.defaults.timeout = 5000
// 封装get/post等方法
export default {
  get: function (url = '', data = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: data
      })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  post: function (url = '', data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
