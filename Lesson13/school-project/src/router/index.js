import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import LessonsPage from '../views/LessonsPage.vue'
import TeachersPage from '../views/TeachersPage.vue'
import TestPage from '../views/TestPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        meta: { requiresAuth: false },
    },
    {
        path: '/lessons',
        name: 'lessons',
        component: LessonsPage,
        meta: { requiresAuth: true },
    },
    {
        path: '/teachers/:selectedLessons(\\d+)',
        name: 'teachers',
        component: TeachersPage,
        meta: { requiresAuth: true, requiresLessons: true },
    },
    {
        path: '/test/:selectedLessons :teachersId',
        name: 'test',
        component: TestPage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to, from, next) => {
    const isAuthenticated = window.userName
    if (to.meta.requiresAuth && !isAuthenticated) {
        return next({
            name: 'login',
            query: { redirect: to.fullPath },
        })
    }
    console.log('to.meta.requiresAuth:', to.meta.requiresAuth)
    console.log('isAuthenticated:', isAuthenticated)
    next()
})

export default router
