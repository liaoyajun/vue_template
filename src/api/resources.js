import Axios from 'axios'
import Qs from 'qs'
// import App from 'common/app'
// let host = '//app.intv.com.cn/'
// let host = App.isProd ? '//app.intv.com.cn/' : '//app.myintv.com.cn/'
// if (App.queryHref('localdb')) host = 'http://10.16.0.171:3001'
let host = 'http://10.16.0.22:3001/'
Axios.defaults.baseURL = host
Axios.defaults.timeout = 10000
Axios.defaults.withCredentials = true
Axios.defaults.params = {}
Axios.defaults.validateStatus = () => true
Axios.defaults.transformRequest = data => data ? Qs.stringify(JSON.parse(data)) : data

// Add a request interceptor
Axios.interceptors.request.use(config => {
  // if (config.params.hideLoading) {
  //   delete config.params.hideLoading
  // } else {
  //   App.showLoading()
  // }
  return config
}, error => Promise.reject(error))

// Add a response interceptor
Axios.interceptors.response.use(response => {
  // const status = parseInt(response.data.meta.status)
  // const status = response.data.meta ? parseInt(response.data.meta.status) : response.status
  // if (status === 401) {
  //   // 未授权
  //   const loginUrl = response.data.data.loginUrl
  //   const separator = loginUrl.indexOf('?') > -1 ? '&' : '?'
  //   window.location.href = `${response.data.data.loginUrl}${separator}redirect=${encodeURIComponent(location.href)}`
  //   return false
  // }
  // App.hideLoading()
  return response.data
}, error => Promise.reject(error))

export default Axios
