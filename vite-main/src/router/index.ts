import { createWebHistory, createRouter } from "vue-router"

import type { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [{
    path: "/",
    redirect: "/sub1",
    children:[
        {
            path: "/sub1/:pathMatch(.*)*",
            component: () => import("@/components/SubContainer.vue")
        },
        {
            path: "/sub2",
            component: () => import("@/components/SubContainer.vue")
        }
    ]
}]

const baseUrl = import.meta.env.MODE === 'development' ? '/' : '/qiankun'

const router = createRouter({
    history: createWebHistory(baseUrl),
    routes
})

export default router