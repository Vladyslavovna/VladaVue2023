import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopPage from '../views/ShopPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ShopPayments from '../views/ShopPayments.vue'
import ShopContacts from '../views/ShopContacts.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopPage,
    },
    {
        path: '/product/:categoryId',
        name: 'product',
        component: ProductsPage,
    },
    {
        path: '/payments',
        name: 'payments',
        component: ShopPayments,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ShopContacts,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
