import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../views/AboutView.vue'),
        children: [
            {
                path: 'selector',
                name: 'product-selector',
                component: () => import('../views/ProductsSelector.vue'),
            },
            {
                path: 'editor',
                name: 'product-editor',
                component: () => import('../views/ProductsEditor.vue'),
            },
        ],
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/ContactsView.vue'),
    },
    {
        path: '/owners',
        name: 'owners',
        component: () => import('../views/OwnersView.vue'),
    },
    {
        path: '/shopping-rules',
        name: 'shopping-rules',
        component: () => import('../views/RulesView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
