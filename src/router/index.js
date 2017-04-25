import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const Login = {
  template: `
    <div>
      <input type="email"/>
      <input type="password">
      <input type="submit">
    </div>
  `
}

const NewComponent = {
  template: `<div>Component</div>`
}

const TwoComponent = {
  template: `<div>Two</div>`
}

const Restricted = {
  template: `<div>Restricted</div>`
}

const NotFoundComponent = {
  template: `<div><h1>404</h1><br/>You dun' messed up!</div>`
}

const Auth = false

const router = new Router({
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
      path: '/new',
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
      path: '/restricted',
      name: 'Restricted',
      component: Restricted,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!Auth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
