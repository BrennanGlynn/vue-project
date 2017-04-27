import Vue from 'vue'

import Router from 'vue-router'

import Child from '../components/Child'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Child
      }
    }
  ]
})

export default router
