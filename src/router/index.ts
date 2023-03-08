import { createRouter, createWebHistory } from 'vue-router'
import MyStarshipsView from '../views/MyStarshipsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MyStarships',
      component: MyStarshipsView
    },
    {
      path: '/vader',
      name: 'Vader',
      component: () => import('../views/VaderView.vue')
    }
  ]
})

export default router
