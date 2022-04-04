import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login-view',
    meta: { layout: 'empty' },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register-view',
    meta: { layout: 'empty' },
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/',
    name: 'home-view',
    meta: { layout: 'main' },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/categories',
    name: 'categories-view',
    meta: { layout: 'main' },
    component: () => import('../views/CategoriesView.vue')
  },
  {
    path: '/profile',
    name: 'profile-view',
    meta: { layout: 'main' },
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/record',
    name: 'record-view',
    meta: { layout: 'main' },
    component: () => import('../views/RecordView.vue')
  },
  {
    path: '/planning',
    name: 'planning-view',
    meta: { layout: 'main' },
    component: () => import('../views/PlanningView.vue')
  },
  {
    path: '/detail-record',
    name: 'detail-record-view',
    meta: { layout: 'main' },
    component: () => import('../views/DetailRecordView.vue')
  },
  {
    path: '/history',
    name: 'history-view',
    meta: { layout: 'main' },
    component: () => import('../views/HistoryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
