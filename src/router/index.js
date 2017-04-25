import Vue from 'vue'

import Router from 'vue-router'
import Counter from '@/components/Counter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: Counter
      }
    }
  ]
})

export default router
