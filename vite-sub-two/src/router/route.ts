import { createRouter, createWebHashHistory } from "vue-router"

// import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import type { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/sub-child1",
        children: [
            {
                path: "/sub-child1",
                component: () => import("@/components/SubTwoChildOne.vue")
            },
              {
                path: "/sub-child2",
                component: () => import("@/components/SubTwoChildTwo.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router