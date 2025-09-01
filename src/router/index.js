import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect: '/home/homepage',
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          pageTitle: 'Home',
          breadcrumbs: ['Home'],
        },
        redirect: '/home/homepage',
        children: [
          {
            path: 'homepage',
            name: 'homepage',
            component: () => import('@/pages/Home.vue'),
          },
          {
            path: 'about',
            name: 'about',
            component: () => import('@/pages/About.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
