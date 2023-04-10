import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('@/views/LandingPage/index.vue')
    },
    {
        path: '/explore',
        name: 'Explore',
        component: () =>
            import ('@/views/ExplorePage/index.vue')
    },
    {
        path: '/creator/:name',
        name: 'Creator Store',
        component: () =>
            import ('@/views/CreatorStore/index.vue')
    },
    {
        path: '/product/:name',
        name: 'Product',
        component: () =>
            import ('@/views/ProductPage/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router