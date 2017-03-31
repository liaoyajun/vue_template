// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App'
import App from './common/app'
import api from './api/'
import router from './router'
App.api = api
App.userInfo = {}
window.App = App
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})
document.querySelector('html').style.fontSize = `${document.body.clientWidth / 750 * 32}px`
window.onresize = function () {
  document.querySelector('html').style.fontSize = `${document.body.clientWidth / 750 * 32}px`
}
// setTimeout(() => {
//     document.body.removeChild(document.getElementById('ad_3v'))
//     console.log('clear ad')
// }, 100)
