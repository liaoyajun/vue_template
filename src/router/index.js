import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/index', component: require('@/views/index.vue') },
    { path: '*', redirect: '/index' }
  ]
})
