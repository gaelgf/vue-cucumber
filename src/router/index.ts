import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import routes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
