import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/lessons',
        name: 'lessons',
        component: () => import('../views/LessonPage.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/teachers/:lessonIds(\\d*)+',
        name: 'teachers',
        component: () => import('../views/TeachersPage.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/assigments/:teacherIds(\\d*)+-/:lessonIds(\\d*)+',
        name: 'assigments',
        component: () => import('../views/AssigmentsPage.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginPage.vue'),
        meta: { requiresAuth: false },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error',
        component: () => import('../views/NoPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to) => {
    const isAuthenticated = window.userName
    if (to.meta.requiresAuth && !isAuthenticated) {
        return {
            name: 'login',
            query: { redirect: to.fullPath },
        }
    }
})

export default router
