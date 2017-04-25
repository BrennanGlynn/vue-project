import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const NewComponent = {
  props: ['id'],
  template: `<div>Component {{ id }}</div>`
}

const TwoComponent = {
  template: `<div>Two</div>`
}

const NotFoundComponent = {
  template: `<div><h1>404</h1><br/>You dun' messed up!</div>`
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: Hello,
        new: NewComponent,
        two: TwoComponent
      }
    },
    {
      path: '/new/:id',
      name: 'NewComponent',
      component: NewComponent,
      props: true
    },
    {
      path: '/two',
      name: 'TwoComponent',
      component: TwoComponent
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
