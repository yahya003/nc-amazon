/* eslint-disable */ 
import { createRouter, createWebHistory} from "vue-router";
import HomePage from "../components/views/HomePage.vue"
import SingleItem from "../components/views/SingleItem.vue"
import WishList from "../components/views/WishList.vue"
import YourBasket from "../components/views/YourBasket.vue"
import YourOrders from "../components/views/YourOrders.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/item/:id",
        name: "Single Item",
        component: SingleItem,
        props: true
    },
    {
        path: "/wishlist",
        name: "Wish List",
        component: WishList.
        props: true
    },
    {
        path: "/basket",
        name: "Your Basket",
        component: YourBasket,
        props: true
    },
    {
        path: "/orders",
        name: "Your orders",
        component: YourOrders,
        props: true
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
