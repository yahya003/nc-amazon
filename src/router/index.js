/* eslint-disable */ 
import { createRouter, createWebHistory} from "vue-router";
import HomePage from "../components/views/HomePage.vue"
import SingleItem from "../components/views/SingleItem.vue"

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
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router