import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { VueElement } from 'vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/admin-page',
    component: () => import('../views/AdminPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/detail-product',
    component: () => import('../views/DetaiProductView.vue')
  },
  {
    path: '/success-page',
    component: () => import('../views/SuccessPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth) && !VueElement.prototype.$store.getters.isAuthentication) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
