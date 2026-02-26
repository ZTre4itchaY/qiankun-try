import { createWebHistory, createRouter } from "vue-router"

import type { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [{
    path: "/",
    // redirect: "/sub1",
    children:[
        {
            path: "/sub1",
            component: () => import("@/components/SubContainer.vue")
        },
        {
            path: "/sub2",
            component: () => import("@/components/SubContainer.vue")
        }
    ]
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router