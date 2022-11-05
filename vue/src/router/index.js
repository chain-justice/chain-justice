import { createRouter, createWebHistory } from 'vue-router'

// import Data from '../views/Data.vue'
import Portfolio from '../views/Portfolio.vue'
import Game from '../views/Game.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Portfolio },
  { path: '/portfolio', component: Portfolio },
  // { path: '/data', component: Data },
  { path: '/game', component: Game}
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
