import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/Index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/nav',
        name: 'Nav',
        component: () => import('@/views/nav/Index.vue'),
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/blog/Index.vue'),
      },
      {
        path: '/tool',
        name: 'Tool',
        component: () => import('@/views/tool/Index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ? savedPosition : { left: 0, top: 0 };
  },
});

export default router;
