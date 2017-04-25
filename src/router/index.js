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

export default new Router({
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
    }
  ]
})
