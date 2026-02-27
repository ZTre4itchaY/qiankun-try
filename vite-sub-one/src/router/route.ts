
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from "vue-router"

import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/sub-child1",
        children: [
            {
                path: "/sub-child1",
                component: () => import("@/components/SubOneChildOne.vue")
            },
            {
                path: "/sub-child2",
                component: () => import("@/components/SubOneChildTwo.vue")
            }
        ]
    }
]

const baseUrl = import.meta.env.MODE === 'development' ? '/' : "/qiankun/sub-one"

const qiankunBase = import.meta.env.MODE === 'development' ? "/sub1" : "/qiankun/sub1"

console.log(qiankunBase)

const router = createRouter({
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__
        ? qiankunBase
        : baseUrl),
    routes
})

export default router