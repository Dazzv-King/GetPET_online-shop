import { createRouter, createWebHistory } from 'vue-router'

import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import vPay from '../components/v-pay'
import Home from '../views/home'
import vProductPage from '../components/v-product-page'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: vCatalog,
    },
    {
        path: '/product-page',
        props: true,
        name: 'vProductPage',
        component: vProductPage,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: vCart,
        // component: () => import(/* webpackChunkName: "about" */ '../components/v-cart.vue')
    },
    {
        path: '/pay',
        name: 'Pay',
        component: vPay,
        props: true
    }

]
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.

//   }
// ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
