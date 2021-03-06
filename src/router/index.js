import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommand' },
  {
    path: '/recommand',
    name: 'Recommand',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Recommand'),
    children: [
      {
        path: 'detail/:id/:type',
        component: () => import('../views/Detail')
      }
    ]
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import('../views/Singer')
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import(/* webpackChunkName: "about" */ '../views/Rank')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
