import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const NewComponent = {
  template: `<div>Component</div>`
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
      path: '/new',
      name: 'NewComponent',
      component: NewComponent
    },
    {
      path: '/two',
      name: 'TwoComponent',
      component: TwoComponent
    }
  ]
})
