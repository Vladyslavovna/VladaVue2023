import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorkersEdit from '../views/WorkersEdit.vue'
import AssigmentsPage from '../views/AssigmentsPage.vue'
import CandidatesView from '../views/CandidatesView.vue'
import CandidatesEdit from '../views/CandidatesEdit.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/workers/congif/:id?',
        name: 'workers-config',
        component: WorkersEdit,
    },
    {
        path: '/candidates',
        name: 'candidates',
        component: CandidatesView,
    },
    {
        path: '/candidates/congif/:id?',
        name: 'candidate-config',
        component: CandidatesEdit,
    },
    {
        path: '/interview',
        name: 'interview',
        component: AssigmentsPage,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        // component: () =>
        //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
